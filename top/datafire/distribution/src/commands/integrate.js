'use strict';

var fs = require('fs');
var async = require('async');
var path = require('path');
var proc = require('child_process');
var request = require('request');
var chalk = require('chalk');
var rssParser = require('rss-parser');
var urlParser = require('url');
var YAML = require('yamljs');

var openapiUtil = require('../util/openapi');
var logger = require('../util/logger');
var datafire = require('../index');

var SPEC_FORMATS = ['raml', 'wadl', 'swagger_1', 'api_blueprint', 'io_docs', 'google', 'openapi_3'];

var PACKAGE_PREFIX = process.env.DATAFIRE_REGISTRY_DIR ? process.env.DATAFIRE_REGISTRY_DIR + '/integrations' : '@datafire';

var RSS_SCHEMA = {
  type: 'object',
  properties: {
    feed: {
      type: 'object',
      properties: {
        link: { type: 'string' },
        title: { type: 'string' },
        feedUrl: { type: 'string' },
        entries: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              link: { type: 'string' },
              title: { type: 'string' },
              pubDate: { type: 'string' },
              author: { type: 'string' },
              content: { type: 'string' },
              contentSnippet: { type: 'string' }
            }
          }
        }
      }
    }
  }
};

module.exports = function (args) {
  return new Promise(function (resolve, reject) {
    var specFormat = SPEC_FORMATS.filter(function (f) {
      return args[f];
    })[0];
    var directory = args.destination || path.join(process.cwd(), 'integrations');
    var callback = function callback(err) {
      if (err) reject(err);else resolve(require(path.join(directory, args.name, 'openapi.json')));
    };
    if (args.openapi) {
      integrateOpenAPI(directory, args.name, args.openapi, args.patch, callback);
    } else if (specFormat) {
      integrateSpec(directory, args.name, specFormat, args[specFormat], callback);
    } else if (args.rss) {
      integrateRSS(directory, args.name, args.rss, callback);
    } else {
      throw new Error("Must specify an API specification or RSS feed");
    }
  });
};

var DATAFIRE_LOCATION = process.env.DATAFIRE_LOCATION || 'datafire';
var integrationCode = function integrationCode(name) {
  return ('\n"use strict";\nlet datafire = require(\'' + DATAFIRE_LOCATION + '\');\nlet openapi = require(\'./openapi.json\');\nmodule.exports = datafire.Integration.fromOpenAPI(openapi, "' + name + '");\n').trim();
};

var addIntegration = function addIntegration(directory, name, type, spec, callback) {
  name = name || getNameFromHost(spec.host);
  var baseDir = path.join(directory, name);
  var openapiFilename = path.join(baseDir, 'openapi.json');
  var integFilename = path.join(baseDir, 'index.js');
  var detailsFilename = path.join(baseDir, 'details.json');
  spec.info['x-datafire'] = { name: name, type: type };
  fs.mkdir(directory, function (err) {
    if (err && err.code !== 'EEXIST') return callback(err);
    fs.mkdir(path.join(directory, name), function (err) {
      if (err && err.code !== 'EEXIST') return callback(err);
      fs.writeFile(openapiFilename, JSON.stringify(spec, null, 2), function (e) {
        if (e) return callback(e);
        fs.writeFile(integFilename, integrationCode(name), function (e) {
          if (e) return callback(e);
          var integ = require(integFilename);
          fs.writeFile(detailsFilename, JSON.stringify(integ.getDetails(true), null, 2), function (e) {
            if (e) return callback(e);
            logger.log('Created integration ' + name + ' in ' + baseDir.replace(process.cwd(), '.'));
            callback(null, spec);
          });
        });
      });
    });
  });
};

var getLocalSpec = function getLocalSpec(name) {
  return NATIVE_INTEGRATIONS.filter(function (fname) {
    return fname.startsWith(name + '.');
  })[0];
};

var integrateFile = function integrateFile(dir, name, callback) {
  var filename = getLocalSpec(name);
  var type = filename.indexOf('.rss.') === -1 ? 'openapi' : 'rss';
  if (!filename) return callback(new Error("Integration " + name + " not found"));
  fs.readFile(path.join(NATIVE_INTEGRATIONS_DIR, filename), 'utf8', function (err, data) {
    if (err) return callback(err);
    addIntegration(dir, name, type, JSON.parse(data), callback);
  });
};

var TLDs = ['.com', '.org', '.net', '.gov', '.io', '.co.uk'];
var SUBDOMAINS = ['www.', 'api.', 'developer.'];
var getNameFromHost = function getNameFromHost(host) {
  SUBDOMAINS.forEach(function (sub) {
    if (host.startsWith(sub)) host = host.substring(sub.length);
  });
  TLDs.forEach(function (tld) {
    if (host.endsWith(tld)) host = host.substring(0, host.length - tld.length);
  });
  return host.replace(/\./, '_');
};

var integrateOpenAPI = function integrateOpenAPI(dir, name, url, patch, callback) {
  function finish(body) {
    if (patch) patch(body);
    for (var _path in body.paths) {
      for (var method in body.paths[_path]) {
        var op = body.paths[_path][method];
        op.operationId = openapiUtil.getOperationId(method, _path, op);
      }
    }
    addIntegration(dir, name, 'openapi', body, callback);
  }

  if (fs.existsSync(url)) {
    var content = fs.readFileSync(url);
    if (url.endsWith('.json')) {
      content = JSON.parse(content);
    } else {
      content = YAML.parse(content);
    }
    finish(content);
  } else {
    request.get(url, function (err, resp, body) {
      if (err) return callback(err);
      resp.headers['content-type'] = resp.headers['content-type'] || '';
      if (resp.headers['content-type'].indexOf('yaml') !== -1) {
        body = YAML.parse(body);
      } else {
        body = JSON.parse(body);
      }
      finish(body);
    });
  }
};

var integrateRSS = function integrateRSS(dir, name, urls, callback) {
  if (typeof urls === 'string') {
    urls = {
      getItems: urls
    };
  }
  var spec = {
    swagger: '2.0',
    basePath: '/',
    paths: {},
    definitions: { Feed: RSS_SCHEMA },
    info: {}
  };
  for (var operation in urls) {
    var url = urls[operation];
    var urlObj = urlParser.parse(url);
    urlObj.pathname = urlObj.pathname.replace(/%7B/g, '{').replace(/%7D/g, '}');
    spec.host = urlObj.hostname;
    spec.schemes = [urlObj.protocol.substring(0, urlObj.protocol.length - 1)];
    if (!name) {
      name = getNameFromHost(urlObj.hostname);
    }
    spec.paths[urlObj.pathname] = {
      get: {
        operationId: operation,
        description: "Retrieve the RSS feed",
        responses: {
          '200': { description: "OK", schema: { $ref: '#/definitions/Feed' } }
        },
        parameters: (urlObj.pathname.match(/\{\w+\}/g) || []).map(function (p) {
          return p.substring(1, p.length - 1);
        }).map(function (p) {
          return {
            name: p,
            in: 'path',
            type: 'string',
            required: true
          };
        })
      }
    };
  }
  async.parallel(Object.keys(spec.paths).map(function (path) {
    var op = spec.paths[path].get;
    return function (acb) {
      if (op.parameters.length) return acb();
      rssParser.parseURL(spec.schemes[0] + '://' + spec.host + path, function (err, feed) {
        if (err) return acb(err);
        feed = feed.feed;
        spec.paths[path].get.summary = feed.title;
        spec.paths[path].get.description = feed.description;
        acb();
      });
    };
  }), function (err) {
    if (err) return callback(err);
    var paths = Object.keys(spec.paths);
    if (paths.length === 1) {
      spec.info.title = spec.paths[paths[0]].summary;
      spec.info.description = spec.paths[paths[0]].description;
    }
    addIntegration(dir, name, 'rss', spec, callback);
  });
};

var integrateSpec = function integrateSpec(dir, name, format, url, callback) {
  var cmd = 'api-spec-converter "' + url + '" --from ' + format + ' --to swagger_2';
  proc.exec(cmd, {
    maxBuffer: 1024 * 1024 * 1024 // 1GB
  }, function (err, stdout) {
    if (err) {
      logger.logError('Please install api-spec-converter');
      logger.log('npm install -g api-spec-converter');
      return callback(err);
    }
    addIntegration(dir, name, 'openapi', JSON.parse(stdout), callback);
  });
};