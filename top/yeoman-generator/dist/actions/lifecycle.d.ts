import type { BaseGenerator, GetGeneratorOptions } from '@yeoman/types';
import { type FileTransform } from 'mem-fs';
import { type MemFsEditorFile } from 'mem-fs-editor';
import type { BaseOptions, ComposeOptions, GeneratorPipelineOptions, Priority, Task, TaskOptions } from '../types.js';
import type Generator from '../index.js';
import type BaseGeneratorImpl from '../generator.js';
type TaskStatus = {
    cancelled: boolean;
    timestamp: Date;
};
export declare abstract class TasksMixin {
    readonly _queues: Record<string, Priority>;
    customLifecycle?: boolean;
    runningState?: {
        namespace: string;
        queueName: string;
        methodName: string;
    };
    _taskStatus?: TaskStatus;
    /**
     * Register priorities for this generator
     */
    registerPriorities(this: BaseGeneratorImpl, priorities: Priority[]): void;
    /**
     * Schedule methods on a run queue.
     *
     * @param method: Method to be scheduled or object with function properties.
     * @param methodName Name of the method (task) to be scheduled.
     * @param queueName Name of the queue to be scheduled on.
     * @param reject Reject callback.
     */
    queueMethod(method: Task['method'], methodName: string, queueName: Task['queueName'], reject: Task['reject']): void;
    queueMethod(method: Record<string, Task['method']>, methodName: string | Task['reject'], reject?: Task['reject']): void;
    /**
     * Schedule tasks from a group on a run queue.
     *
     * @param taskGroup: Object containing tasks.
     * @param taskOptions options.
     */
    queueTaskGroup(this: BaseGeneratorImpl, taskGroup: Record<string, Task['method']>, taskOptions: TaskOptions): void;
    /**
     * Get task sources property descriptors.
     */
    getTaskSourcesPropertyDescriptors(this: BaseGeneratorImpl): any;
    /**
     * Extract tasks from a priority.
     *
     * @param name: The method name to schedule.
     */
    extractTasksFromPriority(this: BaseGeneratorImpl, name: string, taskOptions?: TaskOptions): Task[];
    /**
     * Extract tasks from group.
     *
     * @param group Task group.
     * @param taskOptions options.
     */
    extractTasksFromGroup(this: BaseGeneratorImpl, group: Record<string, Task['method']>, taskOptions: TaskOptions): Task[];
    /**
     * Schedule a generator's method on a run queue.
     *
     * @param name: The method name to schedule.
     * @param taskOptions options.
     */
    queueOwnTask(this: BaseGeneratorImpl, name: string, taskOptions: TaskOptions): void;
    /**
     * Get task names.
     */
    getTaskNames(this: BaseGeneratorImpl): string[];
    /**
     * Schedule every generator's methods on a run queue.
     */
    queueOwnTasks(this: BaseGeneratorImpl, taskOptions: TaskOptions): void;
    /**
     * Schedule tasks on a run queue.
     *
     * @param task: Task to be queued.
     */
    queueTask(this: BaseGeneratorImpl, task: Task<this>): void;
    /**
     * Execute a task.
     *
     * @param task: Task to be executed.
     * @param args: Task arguments.
     * @param taskStatus.
     */
    executeTask(this: BaseGeneratorImpl, task: Task, args?: any[] | ((generator: Generator) => any[]) | undefined, taskStatus?: TaskStatus | undefined): Promise<void>;
    /**
     * Ignore cancellable tasks.
     */
    cancelCancellableTasks(this: BaseGeneratorImpl): void;
    /**
     * Queue generator tasks.
     */
    queueTasks(this: BaseGeneratorImpl): Promise<void>;
    _queueTasks(this: BaseGeneratorImpl): Promise<void>;
    /**
     * Start the generator again.
     */
    startOver(this: BaseGeneratorImpl, options?: BaseOptions): void;
    /**
     * Compose this generator with another one.
     * @param generator  The path to the generator module or an object (see examples)
     * @param args       Arguments passed to the Generator
     * @param options   The options passed to the Generator
     * @param immediately Boolean whether to queue the Generator immediately
     * @return The composed generator
     *
     * @example <caption>Using a peerDependency generator</caption>
     * await this.composeWith('bootstrap', { sass: true });
     *
     * @example <caption>Using a direct dependency generator</caption>
     * await this.composeWith(path.resolve(_dirname, 'generator-bootstrap/app/main.js'), { sass: true });
     *
     * @example <caption>Passing a Generator class</caption>
     * await this.composeWith({ Generator: MyGenerator, path: '../generator-bootstrap/app/main.js' }, { sass: true });
     */
    composeWith<G extends BaseGenerator = BaseGenerator>(generator: string | {
        Generator: any;
        path: string;
    }, immediately?: boolean): Promise<G>;
    composeWith<G extends BaseGenerator = BaseGenerator>(generator: string[], immediately?: boolean): Promise<G[]>;
    composeWith<G extends BaseGenerator = BaseGenerator>(generator: string | {
        Generator: any;
        path: string;
    }, options: Partial<GetGeneratorOptions<G>>, immediately?: boolean): Promise<G>;
    composeWith<G extends BaseGenerator = BaseGenerator>(generator: string[], options: Partial<GetGeneratorOptions<G>>, immediately?: boolean): Promise<G[]>;
    composeWith<G extends BaseGenerator = BaseGenerator>(generator: string | {
        Generator: any;
        path: string;
    }, args: string[], options?: Partial<GetGeneratorOptions<G>>, immediately?: boolean): Promise<G>;
    composeWith<G extends BaseGenerator = BaseGenerator>(generator: string[], args: string[], options?: Partial<GetGeneratorOptions<G>>, immediately?: boolean): Promise<G[]>;
    composeWith<G extends BaseGenerator = BaseGenerator>(generator: string, options?: ComposeOptions<G>): Promise<G[]>;
    private composeWithOptions;
    private composeLocallyWithOptions;
    private resolveGeneratorPath;
    pipeline(this: BaseGeneratorImpl, options?: GeneratorPipelineOptions, ...transforms: Array<FileTransform<MemFsEditorFile>>): Promise<void>;
    /**
     * Add a transform stream to the commit stream.
     *
     * Most usually, these transform stream will be Gulp plugins.
     *
     * @param streams An array of Transform stream
     * or a single one.
     * @return This generator
     */
    queueTransformStream(this: BaseGeneratorImpl, options?: GeneratorPipelineOptions & {
        priorityToQueue?: string;
    }, ...transforms: Array<FileTransform<MemFsEditorFile>>): BaseGeneratorImpl<BaseOptions, import("../types.js").BaseFeatures>;
}
export {};
