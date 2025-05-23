import { dirname, isAbsolute, resolve as pathResolve, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { Transform } from 'node:stream';
import { stat } from 'node:fs/promises';
import createDebug from 'debug';
import { toNamespace } from '@yeoman/namespace';
import { isFileTransform } from 'mem-fs';
import { isFilePending } from 'mem-fs-editor/state';
const debug = createDebug('yeoman:generator');
// Ensure a prototype method is a candidate run by default
const methodIsValid = function (name) {
    return !name.startsWith('_') && name !== 'constructor';
};
export class TasksMixin {
    // Queues map: generator's queue name => grouped-queue's queue name (custom name)
    _queues;
    customLifecycle;
    runningState;
    _taskStatus;
    /**
     * Register priorities for this generator
     */
    registerPriorities(priorities) {
        priorities = priorities.filter(({ priorityName, edit, ...priority }) => {
            if (edit) {
                const queue = this._queues[priorityName];
                if (!queue) {
                    throw new Error(`Error editing priority ${priorityName}, not found`);
                }
                Object.assign(queue, { ...priority, edit: undefined });
            }
            return !edit;
        });
        const customPriorities = priorities.map(customPriority => ({ ...customPriority }));
        // Sort customPriorities, a referenced custom queue must be added before the one that reference it.
        customPriorities.sort((a, b) => {
            if (a.priorityName === b.priorityName) {
                throw new Error(`Duplicate custom queue ${a.priorityName}`);
            }
            if (a.priorityName === b.before) {
                return -1;
            }
            if (b.priorityName === a.before) {
                return 1;
            }
            return 0;
        });
        for (const customQueue of customPriorities) {
            customQueue.queueName = customQueue.queueName ?? `${this._namespace}#${customQueue.priorityName}`;
            debug(`Registering custom queue ${customQueue.queueName}`);
            this._queues[customQueue.priorityName] = customQueue;
            const beforeQueue = customQueue.before ? this._queues[customQueue.before].queueName : undefined;
            this.env.addPriority(customQueue.queueName, beforeQueue);
        }
    }
    queueMethod(method, methodName, queueName, reject) {
        if (typeof queueName === 'function') {
            reject = queueName;
            queueName = undefined;
        }
        else {
            queueName = queueName ?? 'default';
        }
        if (typeof method !== 'function') {
            if (typeof methodName === 'function') {
                reject = methodName;
                methodName = undefined;
            }
            this.queueTaskGroup(method, {
                queueName: methodName,
                reject,
            });
            return;
        }
        this.queueTask({
            method,
            taskName: methodName,
            queueName,
            reject,
        });
    }
    /**
     * Schedule tasks from a group on a run queue.
     *
     * @param taskGroup: Object containing tasks.
     * @param taskOptions options.
     */
    queueTaskGroup(taskGroup, taskOptions) {
        for (const task of this.extractTasksFromGroup(taskGroup, taskOptions)) {
            this.queueTask(task);
        }
    }
    /**
     * Get task sources property descriptors.
     */
    getTaskSourcesPropertyDescriptors() {
        if (this.features.inheritTasks) {
            const queueNames = Object.keys(this._queues);
            let currentPrototype = Object.getPrototypeOf(this);
            let propertyDescriptors = [];
            while (currentPrototype) {
                propertyDescriptors.unshift(...Object.entries(Object.getOwnPropertyDescriptors(currentPrototype)));
                currentPrototype = Object.getPrototypeOf(currentPrototype);
            }
            const { taskPrefix = '' } = this.features;
            propertyDescriptors = propertyDescriptors.filter(([name]) => name.startsWith(taskPrefix) && queueNames.includes(name.slice(taskPrefix.length)));
            return Object.fromEntries(propertyDescriptors);
        }
        return Object.getOwnPropertyDescriptors(Object.getPrototypeOf(this));
    }
    /**
     * Extract tasks from a priority.
     *
     * @param name: The method name to schedule.
     */
    extractTasksFromPriority(name, taskOptions = {}) {
        const priority = this._queues[name];
        taskOptions = {
            ...priority,
            cancellable: true,
            run: false,
            ...taskOptions,
        };
        if (taskOptions.auto && priority && priority.skip) {
            return [];
        }
        const { taskPrefix = this.features.taskPrefix ?? '' } = taskOptions;
        const propertyName = `${taskPrefix}${name}`;
        const property = taskOptions.taskOrigin
            ? Object.getOwnPropertyDescriptor(taskOptions.taskOrigin, propertyName)
            : this.getTaskSourcesPropertyDescriptors()[propertyName];
        if (!property)
            return [];
        const item = property.value ?? property.get?.call(this);
        // Name points to a function; single task
        if (typeof item === 'function') {
            return [{ ...taskOptions, taskName: name, method: item }];
        }
        if (!item || !priority) {
            return [];
        }
        return this.extractTasksFromGroup(item, taskOptions);
    }
    /**
     * Extract tasks from group.
     *
     * @param group Task group.
     * @param taskOptions options.
     */
    extractTasksFromGroup(group, taskOptions) {
        return Object.entries(group)
            .map(([taskName, method]) => {
            if (typeof method !== 'function' || !methodIsValid(taskName))
                return;
            return {
                ...taskOptions,
                method,
                taskName,
            };
        })
            .filter(Boolean);
    }
    /**
     * Schedule a generator's method on a run queue.
     *
     * @param name: The method name to schedule.
     * @param taskOptions options.
     */
    queueOwnTask(name, taskOptions) {
        for (const task of this.extractTasksFromPriority(name, taskOptions))
            this.queueTask(task);
    }
    /**
     * Get task names.
     */
    getTaskNames() {
        const methods = Object.keys(this.getTaskSourcesPropertyDescriptors());
        let validMethods = methods.filter(method => methodIsValid(method));
        const { taskPrefix } = this.features;
        validMethods = taskPrefix
            ? validMethods.filter(method => method.startsWith(taskPrefix)).map(method => method.slice(taskPrefix.length))
            : validMethods.filter(method => !method.startsWith('#'));
        if (this.features.tasksMatchingPriority) {
            const queueNames = Object.keys(this._queues);
            validMethods = validMethods.filter(method => queueNames.includes(method));
        }
        return validMethods;
    }
    /**
     * Schedule every generator's methods on a run queue.
     */
    queueOwnTasks(taskOptions) {
        this._running = true;
        this._taskStatus = { cancelled: false, timestamp: new Date() };
        const validMethods = this.getTaskNames();
        if (validMethods.length === 0 && this._prompts.length === 0 && !this.customLifecycle) {
            throw new Error('This Generator is empty. Add at least one method for it to run.');
        }
        this.emit('before:queueOwnTasks');
        if (this._prompts.length > 0) {
            this.queueTask({
                method: async () => this.prompt(this._prompts, this.config),
                taskName: 'Prompt registered questions',
                queueName: 'prompting',
                cancellable: true,
            });
            if (validMethods.length === 0) {
                this.queueTask({
                    method: () => {
                        this.renderTemplate();
                    },
                    taskName: 'Empty generator: copy templates',
                    queueName: 'writing',
                    cancellable: true,
                });
            }
        }
        for (const methodName of validMethods)
            this.queueOwnTask(methodName, taskOptions);
        this.emit('queueOwnTasks');
    }
    /**
     * Schedule tasks on a run queue.
     *
     * @param task: Task to be queued.
     */
    queueTask(task) {
        const { queueName = 'default', taskName: methodName, run, once } = task;
        const { _taskStatus: taskStatus, _namespace: namespace } = this;
        debug(`Queueing ${namespace}#${methodName} with options %o`, { ...task, method: undefined });
        this.env.queueTask(queueName, async () => this.executeTask(task, undefined, taskStatus), {
            once: once ? methodName : undefined,
            startQueue: run,
        });
    }
    /**
     * Execute a task.
     *
     * @param task: Task to be executed.
     * @param args: Task arguments.
     * @param taskStatus.
     */
    async executeTask(task, args = task.args, taskStatus = this._taskStatus) {
        const { reject, queueName = 'default', taskName: methodName, method } = task;
        const { _namespace: namespace } = this;
        debug(`Running ${namespace}#${methodName}`);
        this.emit(`method:${methodName}`);
        const taskCancelled = task.cancellable && taskStatus?.cancelled;
        if (taskCancelled) {
            return;
        }
        const [priorityName, priority] = Object.entries(this._queues).find(([_, queue]) => queue.queueName === queueName) ?? [];
        args ??= priority?.args ?? this.args;
        args = typeof args === 'function' ? args(this) : args;
        this.runningState = { namespace, queueName, methodName };
        try {
            await method.apply(this, args);
            delete this.runningState;
            const eventName = `done$${namespace || 'unknownnamespace'}#${methodName}`;
            debug(`Done event ${eventName}`);
            this.env.emit(eventName, {
                namespace,
                generator: this,
                queueName,
                priorityName,
            });
        }
        catch (error) {
            const errorMessage = `An error occured while running ${namespace}#${methodName}`;
            if (this.log?.error) {
                this.log.error(errorMessage);
            }
            else {
                debug(errorMessage);
            }
            if (reject) {
                debug('Rejecting task promise, queue will continue normally');
                reject(error);
                return;
            }
            throw error;
        }
        finally {
            delete this.runningState;
        }
    }
    /**
     * Ignore cancellable tasks.
     */
    cancelCancellableTasks() {
        this._running = false;
        // Task status references is registered at each running task
        if (this._taskStatus) {
            this._taskStatus.cancelled = true;
        }
        // Create a new task status.
        delete this._taskStatus;
    }
    /**
     * Queue generator tasks.
     */
    async queueTasks() {
        const thisAny = this;
        const thisPrototype = Object.getPrototypeOf(thisAny);
        let beforeQueueCallback;
        if (this.features.taskPrefix) {
            // We want beforeQueue if beforeQueue belongs to the object or to the imediatelly extended class.
            beforeQueueCallback =
                Object.hasOwn(thisAny, 'beforeQueue') || Object.hasOwn(thisPrototype, 'beforeQueue')
                    ? thisAny.beforeQueue
                    : undefined;
        }
        if (!beforeQueueCallback) {
            // Fallback to _beforeQueue,
            beforeQueueCallback =
                Object.hasOwn(thisAny, '_beforeQueue') || Object.hasOwn(thisPrototype, '_beforeQueue')
                    ? thisAny._beforeQueue
                    : undefined;
        }
        if (beforeQueueCallback) {
            await beforeQueueCallback.call(this);
        }
        await this._queueTasks();
    }
    async _queueTasks() {
        debug(`Queueing generator ${this._namespace} with generator version ${this.yoGeneratorVersion}`);
        this.queueOwnTasks({ auto: true });
    }
    /**
     * Start the generator again.
     */
    startOver(options) {
        this.cancelCancellableTasks();
        if (options) {
            Object.assign(this.options, options);
        }
        this.queueOwnTasks({ auto: true });
    }
    async composeWith(generator, args, options, immediately = false) {
        if (Array.isArray(generator)) {
            const generators = [];
            for (const each of generator) {
                generators.push(await this.composeWith(each, args, options));
            }
            return generators;
        }
        if (typeof args === 'object' &&
            ('generatorArgs' in args ||
                'generatorOptions' in args ||
                'skipEnvRegister' in args ||
                'forceResolve' in args ||
                'forwardOptions' in args)) {
            return this.composeWithOptions(generator, args);
        }
        let parsedArgs = [];
        let parsedOptions = {};
        if (typeof args === 'boolean') {
            return this.composeWithOptions(generator, { schedule: !args });
        }
        if (Array.isArray(args)) {
            if (typeof options === 'object') {
                return this.composeWithOptions(generator, {
                    generatorArgs: args,
                    generatorOptions: options,
                    schedule: !immediately,
                });
            }
            if (typeof options === 'boolean') {
                return this.composeWithOptions(generator, { generatorArgs: args, schedule: !options });
            }
            return this.composeWithOptions(generator, { generatorArgs: args });
        }
        if (typeof args === 'object') {
            parsedOptions = args;
            parsedArgs = args.arguments ?? args.args ?? [];
            if (typeof options === 'boolean') {
                immediately = options;
            }
            return this.composeWithOptions(generator, {
                generatorArgs: parsedArgs,
                generatorOptions: parsedOptions,
                schedule: !immediately,
            });
        }
        return this.composeWithOptions(generator);
    }
    async composeWithOptions(generator, options = {}) {
        const { forceResolve, skipEnvRegister = false, forwardOptions, ...composeOptions } = options;
        const optionsToForward = forwardOptions
            ? this.options
            : {
                skipInstall: this.options.skipInstall,
                skipCache: this.options.skipCache,
                skipLocalCache: this.options.skipLocalCache,
            };
        composeOptions.generatorOptions = {
            destinationRoot: this._destinationRoot,
            ...optionsToForward,
            ...composeOptions.generatorOptions,
        };
        if (typeof generator === 'object') {
            let generatorFile;
            try {
                generatorFile = await this.resolveGeneratorPath(generator.path ?? generator.Generator.resolved);
            }
            catch {
                // Ignore error
            }
            const resolved = generatorFile ?? generator.path ?? generator.Generator.resolved;
            return this.composeLocallyWithOptions({ Generator: generator.Generator, resolved }, composeOptions);
        }
        if (skipEnvRegister || isAbsolute(generator) || generator.startsWith('.')) {
            const resolved = await this.resolveGeneratorPath(generator);
            return this.composeLocallyWithOptions({ resolved }, composeOptions);
        }
        const namespace = typeof generator === 'string' ? toNamespace(generator) : undefined;
        if (!namespace || forceResolve) {
            try {
                generator = await this.resolveGeneratorPath(generator);
            }
            catch {
                // Ignore error
            }
        }
        return this.env.composeWith(generator, composeOptions);
    }
    async composeLocallyWithOptions({ Generator, resolved = Generator.resolved }, options = {}) {
        if (!resolved) {
            throw new Error('Generator path property is not a string');
        }
        const generatorNamespace = this.env.namespace(resolved);
        const findGenerator = async () => {
            const generatorImport = await import(pathToFileURL(resolved).href);
            const getFactory = (module) => module.createGenerator ?? module.default?.createGenerator ?? module.default?.default?.createGenerator;
            const factory = getFactory(generatorImport);
            if (factory) {
                return factory(this.env);
            }
            return typeof generatorImport.default === 'function' ? generatorImport.default : generatorImport;
        };
        try {
            Generator = Generator ?? (await findGenerator());
        }
        catch {
            throw new Error('Missing Generator property');
        }
        Generator.namespace = generatorNamespace;
        Generator.resolved = resolved;
        return this.env.composeWith(Generator, options);
    }
    async resolveGeneratorPath(maybePath) {
        // Allows to run a local generator without namespace.
        // Resolve the generator absolute path to current generator;
        const generatorFile = isAbsolute(maybePath) ? maybePath : pathResolve(dirname(this.resolved), maybePath);
        let generatorResolvedFile;
        try {
            const status = await stat(generatorFile);
            if (status.isFile()) {
                generatorResolvedFile = generatorFile;
            }
        }
        catch {
            // Ignore error
        }
        if (!generatorResolvedFile) {
            // Resolve the generator file.
            // Use import.resolve when stable.
            generatorResolvedFile = createRequire(import.meta.url).resolve(generatorFile);
        }
        return generatorResolvedFile;
    }
    async pipeline(options, ...transforms) {
        if (isFileTransform(options)) {
            transforms = [options, ...transforms];
            options = {};
        }
        let filter;
        const { disabled, name, pendingFiles = true, filter: passedFilter, ...memFsPipelineOptions } = options ?? {};
        if (passedFilter && pendingFiles) {
            filter = (file) => isFilePending(file) && passedFilter(file);
        }
        else {
            filter = pendingFiles ? isFilePending : passedFilter;
        }
        const { env } = this;
        await env.adapter.progress(async ({ step }) => env.sharedFs.pipeline({ filter, ...memFsPipelineOptions }, ...transforms, new Transform({
            objectMode: true,
            transform(file, _encoding, callback) {
                step('Completed', relative(env.logCwd, file.path));
                callback(null, file);
            },
        })), { disabled, name });
    }
    /**
     * Add a transform stream to the commit stream.
     *
     * Most usually, these transform stream will be Gulp plugins.
     *
     * @param streams An array of Transform stream
     * or a single one.
     * @return This generator
     */
    queueTransformStream(options, ...transforms) {
        if (isFileTransform(options)) {
            transforms = [options, ...transforms];
            options = {};
        }
        const { priorityToQueue, ...pipelineOptions } = options;
        const getQueueForPriority = (priority) => {
            const found = this._queues[priority];
            if (!found) {
                throw new Error(`Could not find priority '${priority}'`);
            }
            return found.queueName ?? found.priorityName;
        };
        const queueName = priorityToQueue ? getQueueForPriority(priorityToQueue) : 'transform';
        this.queueTask({
            method: async () => this.pipeline(pipelineOptions, ...transforms),
            taskName: 'transformStream',
            queueName,
        });
        return this;
    }
}
