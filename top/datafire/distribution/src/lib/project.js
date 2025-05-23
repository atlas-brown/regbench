"use strict";

var nodepath = require('path');
var fs = require('fs');
var YAML = require('yamljs');

var util = require('../util');
var openapiUtil = require('../util/openapi');
var ProjectServer = require('./project-server');
var Integration = require('./integration');
var Action = require('./action');
var Task = require('./task');
var Response = require('./response');
var Context = require('./context');
var Monitor = require('./monitor');

/**
 * @class Project
 * @param {Object} opts - passed in from DataFire.yml
 */
var Project = module.exports = function (opts) {
  var _this = this;

  this.id = opts.id || '';
  this.title = opts.title || '';
  this.version = opts.version || '1.0.0';
  this.timezone = opts.timezone || 'America/Los_Angeles';
  this.description = opts.description || '';

  this.events = opts.events = opts.events || {};
  this.events.error = opts.events.error || opts.errorHandler;
  this.paths = opts.paths || {};
  this.tasks = opts.tasks || {};
  this.tests = opts.tests || {};
  this.actions = opts.actions || {};
  this.integrations = opts.integrations || {};
  this.authorizers = opts.authorizers || {};
  this.accounts = opts.accounts || {};
  this.variables = opts.variables || {};
  this.directory = opts.directory || process.cwd();
  this.options = opts.options || {};
  this.monitor = new Monitor({ project: this });

  this.aggregateActions();
  this.initializeOpenAPI(opts.openapi || {});
  this.integration = Integration.fromOpenAPI(this.openapi, this.id);
  if (this.events.oauth_refresh) {
    Action.addOAuthRefreshCallback(function (account) {
      for (var alias in _this.accounts) {
        if (_this.accounts[alias] === account) {
          _this.events.oauth_refresh.action.run({ alias: alias, account: account });
        }
      }
    });
  }
};

/**
 * This is the project defined by the DataFire.yml in cwd.
 */
Project.main = function () {
  if (Project.mainProject) return Project.mainProject;else return Project.mainProject = Project.fromDirectory(process.cwd());
};

/**
 * Loads the project defined by the DataFire.yml in the input directory
 * @returns {Project}
 */
Project.fromDirectory = function (dir) {
  var directory = dir || process.cwd();
  var opts = {};
  function assignFromFile(f) {
    var content = null;
    if (!fs.existsSync(f)) return;
    try {
      content = YAML.load(f);
    } catch (e) {
      console.log('While loading', f);
      throw e;
    }
    Object.assign(opts, content);
  }
  var configFile = nodepath.join(directory, 'DataFire.yml');
  var accountsFile = nodepath.join(directory, 'DataFire-accounts.yml');
  if (!fs.existsSync(configFile)) {
    // TODO: throw an error in v3
    util.logger.logWarning("DataFire.yml not found in directory " + directory);
  }
  assignFromFile(configFile);
  assignFromFile(accountsFile);
  opts.directory = directory;
  return new Project(opts);
};

/**
 * Gets the default context for the Project
 * @param [options]
 * @param [options.accounts] - override project-level accounts
 * @param [options.varaibles] - override project-level variables
 */
Project.prototype.getContext = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options.accounts = Object.assign({}, this.accounts, options.accounts || {});
  options.variables = Object.assign({}, this.variables, options.variables || {});
  return new Context(options);
};

/**
 * Called during constructor to initialize all actions from DataFire.yml
 */
Project.prototype.aggregateActions = function () {
  var _this2 = this;

  for (var integID in this.integrations) {
    var loc = this.integrations[integID];
    this.integrations[integID] = require(nodepath.join(this.directory, loc));
  }

  for (var actionID in this.actions) {
    this.actions[actionID] = Action.fromName(this.actions[actionID], this.directory, this.integrations);
    this.actions[actionID].id = actionID;
  }

  var resolveAction = function resolveAction(action) {
    if (typeof action === 'string') {
      action = _this2.actions[action] = Action.fromName(action, _this2.directory, _this2.integrations, _this2.actions);
    } else if (Array.isArray(action)) {
      action = Action.fromList(action, _this2.directory, _this2.integrations, _this2.actions);
    }
    if (!(action instanceof Action)) {
      action = new Action(action);
    }
    return action;
  };

  var resolveTriggerAction = function resolveTriggerAction(trigger, type, name) {
    if (!trigger) return;
    if (!trigger.action) throw new Error('No action specified for ' + type + ' with ID ' + name);
    trigger.action = resolveAction(trigger.action);
    if (trigger.monitor) {
      resolveTriggerAction(trigger.monitor, type + ' monitor', name);
    }
    if (trigger.errorHandler) {
      resolveTriggerAction(trigger.errorHandler, type + ' errorHandler', name);
    }
    if (trigger.authorizers) {
      for (var authID in trigger.authorizers) {
        resolveTriggerAction(trigger.authorizers[authID], type + ' authorizer', name + ' ' + authID);
      }
    }
  };

  for (var authID in this.authorizers) {
    resolveTriggerAction(this.authorizers[authID], 'authorizer', authID);
  }
  for (var taskID in this.tasks) {
    resolveTriggerAction(this.tasks[taskID], 'task', taskID);
  }
  for (var path in this.paths) {
    for (var method in this.paths[path]) {
      var op = this.paths[path][method];
      resolveTriggerAction(op);
    }
  }
  for (var key in this.events) {
    resolveTriggerAction(this.events[key]);
  }
};

/**
 * Called during constructor to create an Open API schema.
 */
Project.prototype.initializeOpenAPI = function (openapi) {
  this.openapi = Object.assign({
    swagger: '2.0',
    schemes: ['http'],
    host: 'localhost',
    info: {},
    produces: ['application/json'],
    paths: {}
  }, openapi);
  Object.assign(this.openapi.info, {
    title: this.title,
    description: this.description,
    version: this.version
  }, openapi.info);

  for (var path in this.paths) {
    for (var method in this.paths[path]) {
      var pathOp = this.paths[path][method];
      this.openapi.paths[path] = this.openapi.paths[path] || {};
      var op = this.openapi.paths[path][method] = openapiUtil.getOperation(method, path, pathOp);
      if (pathOp.input !== undefined) op.parameters = [];
      if (pathOp.extendPath) {
        for (var i = 0; i < pathOp.extendPath; ++i) {
          path += '/{' + openapiUtil.EXTENDED_PATH_PARAM_NAME + i + '}';
          this.openapi.paths[path] = this.openapi.paths[path] || {};
          this.openapi.paths[path][method] = openapiUtil.getOperation(method, path, pathOp);
        }
      }
    }
  }
  return this.openapi;
};

/**
 * Starts the server and (optionally) tasks
 * @param {Object|number} [opts] - port to serve on, or options
 * @param {number} [opts.port] - port to serve on
 * @param {boolean} [opts.tasks] - if true, start tasks
 * @param {boolean} [opts.nohttp] - if true, don't start the server
 */
Project.prototype.serve = function (opts) {
  opts = opts || {};
  if (typeof opts === 'number') opts = { port: opts };
  opts.port = opts.port || 3333;
  var numTasks = Object.keys(this.tasks).length;
  if (opts.tasks && numTasks) {
    this.startTasks();
    console.log("DataFire running " + numTasks + " task" + (numTasks > 1 ? 's' : ''));
  }
  if (opts.nohttp || !Object.keys(this.paths).length) {
    return Promise.resolve();
  } else {
    return this.startServer(opts.port);
  }
};

/**
 * Starts an express server
 * @param {number} port - the port to use
 */
Project.prototype.startServer = function (port) {
  this.server = new ProjectServer(this);
  return this.server.start(port).then(function (_) {
    console.log('DataFire listening on port ' + port);
  });
};

/**
 * Start running tasks
 */
Project.prototype.startTasks = function () {
  for (var taskID in this.tasks) {
    var opts = Object.assign({
      id: taskID,
      timezone: this.timezone,
      project: this
    }, this.tasks[taskID]);
    var task = new Task(opts);
    task.start();
  }
};