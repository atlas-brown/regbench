'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs = require('fs');
var path = require('path');
var resolve = require('resolve');
var rollupPluginutils = require('rollup-pluginutils');
var estreeWalker = require('estree-walker');
var MagicString = _interopDefault(require('magic-string'));
var isReference = _interopDefault(require('is-reference'));

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var peerDependencies = {
	rollup: ">=1.12.0"
};

const PROXY_SUFFIX = '?commonjs-proxy';
const getProxyId = id => `\0${id}${PROXY_SUFFIX}`;
const getIdFromProxyId = proxyId => proxyId.slice(1, -PROXY_SUFFIX.length);
const EXTERNAL_SUFFIX = '?commonjs-external';
const getExternalProxyId = id => `\0${id}${EXTERNAL_SUFFIX}`;
const getIdFromExternalProxyId = proxyId => proxyId.slice(1, -EXTERNAL_SUFFIX.length);
const HELPERS_ID = '\0commonjsHelpers.js'; // `x['default']` is used instead of `x.default` for backward compatibility with ES3 browsers.
// Minifiers like uglify will usually transpile it back if compatibility with ES3 is not enabled.

const HELPERS = `
export var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

export function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

export function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

export function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

export function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}`;

const isCjsPromises = new Map();
function getIsCjsPromise(id) {
  let isCjsPromise = isCjsPromises.get(id);
  if (isCjsPromise) return isCjsPromise.promise;
  const promise = new Promise(resolve => {
    isCjsPromise = {
      resolve,
      promise: undefined
    };
    isCjsPromises.set(id, isCjsPromise);
  });
  isCjsPromise.promise = promise;
  return promise;
}
function setIsCjsPromise(id, resolution) {
  const isCjsPromise = isCjsPromises.get(id);

  if (isCjsPromise) {
    if (isCjsPromise.resolve) {
      isCjsPromise.resolve(resolution);
      isCjsPromise.resolve = undefined;
    }
  } else {
    isCjsPromises.set(id, {
      promise: Promise.resolve(resolution),
      resolve: undefined
    });
  }
}

function getCandidatesForExtension(resolved, extension) {
  return [resolved + extension, resolved + `${path.sep}index${extension}`];
}

function getCandidates(resolved, extensions) {
  return extensions.reduce((paths, extension) => paths.concat(getCandidatesForExtension(resolved, extension)), [resolved]);
}

function getResolveId(extensions) {
  function resolveExtensions(importee, importer) {
    if (importee[0] !== '.' || !importer) return; // not our problem

    const resolved = path.resolve(path.dirname(importer), importee);
    const candidates = getCandidates(resolved, extensions);

    for (let i = 0; i < candidates.length; i += 1) {
      try {
        const stats = fs.statSync(candidates[i]);
        if (stats.isFile()) return {
          id: candidates[i]
        };
      } catch (err) {
        /* noop */
      }
    }
  }

  function resolveId(importee, importer) {
    const isProxyModule = importee.endsWith(PROXY_SUFFIX);

    if (isProxyModule) {
      importee = getIdFromProxyId(importee);
    } else if (importee.startsWith('\0')) {
      if (importee === HELPERS_ID) {
        return importee;
      }

      return null;
    }

    if (importer && importer.endsWith(PROXY_SUFFIX)) {
      importer = getIdFromProxyId(importer);
    }

    return this.resolve(importee, importer, {
      skipSelf: true
    }).then(resolved => {
      if (!resolved) {
        resolved = resolveExtensions(importee, importer);
      }

      if (isProxyModule) {
        if (!resolved) {
          return {
            id: getExternalProxyId(importee),
            external: false
          };
        }

        resolved.id = (resolved.external ? getExternalProxyId : getProxyId)(resolved.id);
        resolved.external = false;
        return resolved;
      }

      return resolved;
    });
  }

  return resolveId;
}

function flatten(node) {
  const parts = [];

  while (node.type === 'MemberExpression') {
    if (node.computed) return null;
    parts.unshift(node.property.name);
    node = node.object;
  }

  if (node.type !== 'Identifier') return null;
  const name = node.name;
  parts.unshift(name);
  return {
    name,
    keypath: parts.join('.')
  };
}
function isTruthy(node) {
  if (node.type === 'Literal') return !!node.value;
  if (node.type === 'ParenthesizedExpression') return isTruthy(node.expression);
  if (node.operator in operators) return operators[node.operator](node);
}
function isFalsy(node) {
  return not(isTruthy(node));
}

function not(value) {
  return value === undefined ? value : !value;
}

function equals(a, b, strict) {
  if (a.type !== b.type) return undefined;
  if (a.type === 'Literal') return strict ? a.value === b.value : a.value == b.value;
}

const operators = {
  '==': x => {
    return equals(x.left, x.right, false);
  },
  '!=': x => not(operators['=='](x)),
  '===': x => {
    return equals(x.left, x.right, true);
  },
  '!==': x => not(operators['==='](x)),
  '!': x => isFalsy(x.argument),
  '&&': x => isTruthy(x.left) && isTruthy(x.right),
  '||': x => isTruthy(x.left) || isTruthy(x.right)
};

function getName(id) {
  const name = rollupPluginutils.makeLegalIdentifier(path.basename(id, path.extname(id)));

  if (name !== 'index') {
    return name;
  } else {
    const segments = path.dirname(id).split(path.sep);
    return rollupPluginutils.makeLegalIdentifier(segments[segments.length - 1]);
  }
} // Return the first non-falsy result from an array of

const reserved = 'process location abstract arguments boolean break byte case catch char class const continue debugger default delete do double else enum eval export extends false final finally float for from function goto if implements import in instanceof int interface let long native new null package private protected public return short static super switch synchronized this throw throws transient true try typeof var void volatile while with yield'.split(' ');
const blacklist = {
  __esModule: true
};
reserved.forEach(word => blacklist[word] = true);
const exportsPattern = /^(?:module\.)?exports(?:\.([a-zA-Z_$][a-zA-Z_$0-9]*))?$/;
const firstpassGlobal = /\b(?:require|module|exports|global)\b/;
const firstpassNoGlobal = /\b(?:require|module|exports)\b/;
const importExportDeclaration = /^(?:Import|Export(?:Named|Default))Declaration/;
const functionType = /^(?:FunctionDeclaration|FunctionExpression|ArrowFunctionExpression)$/;

function deconflict(scope, globals, identifier) {
  let i = 1;
  let deconflicted = identifier;

  while (scope.contains(deconflicted) || globals.has(deconflicted) || deconflicted in blacklist) deconflicted = `${identifier}_${i++}`;

  scope.declarations[deconflicted] = true;
  return deconflicted;
}

function tryParse(parse, code, id) {
  try {
    return parse(code, {
      allowReturnOutsideFunction: true
    });
  } catch (err) {
    err.message += ` in ${id}`;
    throw err;
  }
}

function hasCjsKeywords(code, ignoreGlobal) {
  const firstpass = ignoreGlobal ? firstpassNoGlobal : firstpassGlobal;
  return firstpass.test(code);
}
function checkEsModule(parse, code, id) {
  const ast = tryParse(parse, code, id);
  let isEsModule = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = ast.body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      const node = _step.value;
      if (node.type === 'ExportDefaultDeclaration') return {
        isEsModule: true,
        hasDefaultExport: true,
        ast
      };

      if (node.type === 'ExportNamedDeclaration') {
        isEsModule = true;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = node.specifiers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            const specifier = _step2.value;

            if (specifier.exported.name === 'default') {
              return {
                isEsModule: true,
                hasDefaultExport: true,
                ast
              };
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else if (importExportDeclaration.test(node.type)) isEsModule = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    isEsModule,
    hasDefaultExport: false,
    ast
  };
}
function transformCommonjs(parse, code, id, isEntry, ignoreGlobal, ignoreRequire, customNamedExports, sourceMap, allowDynamicRequire, astCache) {
  const ast = astCache || tryParse(parse, code, id);
  const magicString = new MagicString(code);
  const required = {}; // Because objects have no guaranteed ordering, yet we need it,
  // we need to keep track of the order in a array

  const sources = [];
  let uid = 0;
  let scope = rollupPluginutils.attachScopes(ast, 'scope');
  const uses = {
    module: false,
    exports: false,
    global: false,
    require: false
  };
  let lexicalDepth = 0;
  let programDepth = 0;
  const globals = new Set();
  const HELPERS_NAME = deconflict(scope, globals, 'commonjsHelpers'); // TODO technically wrong since globals isn't populated yet, but ¯\_(ツ)_/¯

  const namedExports = {}; // TODO handle transpiled modules

  let shouldWrap = /__esModule/.test(code);

  function isRequireStatement(node) {
    if (!node) return;
    if (node.type !== 'CallExpression') return;
    if (node.callee.name !== 'require' || scope.contains('require')) return;
    if (node.arguments.length === 0) return; // Weird case of require() without arguments

    return true;
  }

  function hasDynamicArguments(node) {
    return node.arguments.length > 1 || node.arguments[0].type !== 'Literal' && (node.arguments[0].type !== 'TemplateLiteral' || node.arguments[0].expressions.length > 0);
  }

  function isStaticRequireStatement(node) {
    if (!isRequireStatement(node)) return;
    if (hasDynamicArguments(node)) return;
    if (ignoreRequire(node.arguments[0].value)) return;
    return true;
  }

  function getRequireStringArg(node) {
    return node.arguments[0].type === 'Literal' ? node.arguments[0].value : node.arguments[0].quasis[0].value.cooked;
  }

  function getRequired(node, name) {
    const sourceId = getRequireStringArg(node);
    const existing = required[sourceId];

    if (existing === undefined) {
      if (!name) {
        do name = `require$$${uid++}`; while (scope.contains(name));
      }

      sources.push(sourceId);
      required[sourceId] = {
        source: sourceId,
        name,
        importsDefault: false
      };
    }

    return required[sourceId];
  } // do a first pass, see which names are assigned to. This is necessary to prevent
  // illegally replacing `var foo = require('foo')` with `import foo from 'foo'`,
  // where `foo` is later reassigned. (This happens in the wild. CommonJS, sigh)


  const assignedTo = new Set();
  estreeWalker.walk(ast, {
    enter(node) {
      if (node.type !== 'AssignmentExpression') return;
      if (node.left.type === 'MemberExpression') return;
      rollupPluginutils.extractAssignedNames(node.left).forEach(name => {
        assignedTo.add(name);
      });
    }

  });
  estreeWalker.walk(ast, {
    enter(node, parent) {
      if (sourceMap) {
        magicString.addSourcemapLocation(node.start);
        magicString.addSourcemapLocation(node.end);
      } // skip dead branches


      if (parent && (parent.type === 'IfStatement' || parent.type === 'ConditionalExpression')) {
        if (node === parent.consequent && isFalsy(parent.test)) return this.skip();
        if (node === parent.alternate && isTruthy(parent.test)) return this.skip();
      }

      if (node._skip) return this.skip();
      programDepth += 1;
      if (node.scope) scope = node.scope;
      if (functionType.test(node.type)) lexicalDepth += 1; // if toplevel return, we need to wrap it

      if (node.type === 'ReturnStatement' && lexicalDepth === 0) {
        shouldWrap = true;
      } // rewrite `this` as `commonjsHelpers.commonjsGlobal`


      if (node.type === 'ThisExpression' && lexicalDepth === 0) {
        uses.global = true;
        if (!ignoreGlobal) magicString.overwrite(node.start, node.end, `${HELPERS_NAME}.commonjsGlobal`, {
          storeName: true
        });
        return;
      } // rewrite `typeof module`, `typeof module.exports` and `typeof exports` (https://github.com/rollup/rollup-plugin-commonjs/issues/151)


      if (node.type === 'UnaryExpression' && node.operator === 'typeof') {
        const flattened = flatten(node.argument);
        if (!flattened) return;
        if (scope.contains(flattened.name)) return;

        if (flattened.keypath === 'module.exports' || flattened.keypath === 'module' || flattened.keypath === 'exports') {
          magicString.overwrite(node.start, node.end, `'object'`, {
            storeName: false
          });
        }
      } // rewrite `require` (if not already handled) `global` and `define`, and handle free references to
      // `module` and `exports` as these mean we need to wrap the module in commonjsHelpers.createCommonjsModule


      if (node.type === 'Identifier') {
        if (isReference(node, parent) && !scope.contains(node.name)) {
          if (node.name in uses) {
            if (node.name === 'require') {
              if (allowDynamicRequire) return;
              magicString.overwrite(node.start, node.end, `${HELPERS_NAME}.commonjsRequire`, {
                storeName: true
              });
            }

            uses[node.name] = true;

            if (node.name === 'global' && !ignoreGlobal) {
              magicString.overwrite(node.start, node.end, `${HELPERS_NAME}.commonjsGlobal`, {
                storeName: true
              });
            } // if module or exports are used outside the context of an assignment
            // expression, we need to wrap the module


            if (node.name === 'module' || node.name === 'exports') {
              shouldWrap = true;
            }
          }

          if (node.name === 'define') {
            magicString.overwrite(node.start, node.end, 'undefined', {
              storeName: true
            });
          }

          globals.add(node.name);
        }

        return;
      } // Is this an assignment to exports or module.exports?


      if (node.type === 'AssignmentExpression') {
        if (node.left.type !== 'MemberExpression') return;
        const flattened = flatten(node.left);
        if (!flattened) return;
        if (scope.contains(flattened.name)) return;
        const match = exportsPattern.exec(flattened.keypath);
        if (!match || flattened.keypath === 'exports') return;
        uses[flattened.name] = true; // we're dealing with `module.exports = ...` or `[module.]exports.foo = ...` –
        // if this isn't top-level, we'll need to wrap the module

        if (programDepth > 3) shouldWrap = true;
        node.left._skip = true;

        if (flattened.keypath === 'module.exports' && node.right.type === 'ObjectExpression') {
          return node.right.properties.forEach(prop => {
            if (prop.computed || prop.key.type !== 'Identifier') return;
            const name = prop.key.name;
            if (name === rollupPluginutils.makeLegalIdentifier(name)) namedExports[name] = true;
          });
        }

        if (match[1]) namedExports[match[1]] = true;
        return;
      } // if this is `var x = require('x')`, we can do `import x from 'x'`


      if (node.type === 'VariableDeclarator' && node.id.type === 'Identifier' && isStaticRequireStatement(node.init)) {
        // for now, only do this for top-level requires. maybe fix this in future
        if (scope.parent) return; // edge case — CJS allows you to assign to imports. ES doesn't

        if (assignedTo.has(node.id.name)) return;
        const required = getRequired(node.init, node.id.name);
        required.importsDefault = true;

        if (required.name === node.id.name) {
          node._shouldRemove = true;
        }
      }

      if (!isStaticRequireStatement(node)) return;
      const required = getRequired(node);

      if (parent.type === 'ExpressionStatement') {
        // is a bare import, e.g. `require('foo');`
        magicString.remove(parent.start, parent.end);
      } else {
        required.importsDefault = true;
        magicString.overwrite(node.start, node.end, required.name);
      }

      node.callee._skip = true;
    },

    leave(node) {
      programDepth -= 1;
      if (node.scope) scope = scope.parent;
      if (functionType.test(node.type)) lexicalDepth -= 1;

      if (node.type === 'VariableDeclaration') {
        let keepDeclaration = false;
        let c = node.declarations[0].start;

        for (let i = 0; i < node.declarations.length; i += 1) {
          const declarator = node.declarations[i];

          if (declarator._shouldRemove) {
            magicString.remove(c, declarator.end);
          } else {
            if (!keepDeclaration) {
              magicString.remove(c, declarator.start);
              keepDeclaration = true;
            }

            c = declarator.end;
          }
        }

        if (!keepDeclaration) {
          magicString.remove(node.start, node.end);
        }
      }
    }

  });

  if (!sources.length && !uses.module && !uses.exports && !uses.require && (ignoreGlobal || !uses.global)) {
    if (Object.keys(namedExports).length) {
      throw new Error(`Custom named exports were specified for ${id} but it does not appear to be a CommonJS module`);
    }

    return null; // not a CommonJS module
  }

  const includeHelpers = shouldWrap || uses.global || uses.require;
  const importBlock = (includeHelpers ? [`import * as ${HELPERS_NAME} from '${HELPERS_ID}';`] : []).concat(sources.map(source => {
    // import the actual module before the proxy, so that we know
    // what kind of proxy to build
    return `import '${source}';`;
  }), sources.map(source => {
    const _required$source = required[source],
          name = _required$source.name,
          importsDefault = _required$source.importsDefault;
    return `import ${importsDefault ? `${name} from ` : ``}'${getProxyId(source)}';`;
  })).join('\n') + '\n\n';
  const namedExportDeclarations = [];
  let wrapperStart = '';
  let wrapperEnd = '';
  const moduleName = deconflict(scope, globals, getName(id));

  if (!isEntry) {
    const exportModuleExports = {
      str: `export { ${moduleName} as __moduleExports };`,
      name: '__moduleExports'
    };
    namedExportDeclarations.push(exportModuleExports);
  }

  const name = getName(id);

  function addExport(x) {
    const deconflicted = deconflict(scope, globals, name);
    const declaration = deconflicted === name ? `export var ${x} = ${moduleName}.${x};` : `var ${deconflicted} = ${moduleName}.${x};\nexport { ${deconflicted} as ${x} };`;
    namedExportDeclarations.push({
      str: declaration,
      name: x
    });
  }

  if (customNamedExports) customNamedExports.forEach(addExport);
  const defaultExportPropertyAssignments = [];
  let hasDefaultExport = false;

  if (shouldWrap) {
    const args = `module${uses.exports ? ', exports' : ''}`;
    wrapperStart = `var ${moduleName} = ${HELPERS_NAME}.createCommonjsModule(function (${args}) {\n`;
    wrapperEnd = `\n});`;
  } else {
    const names = [];
    ast.body.forEach(node => {
      if (node.type === 'ExpressionStatement' && node.expression.type === 'AssignmentExpression') {
        const left = node.expression.left;
        const flattened = flatten(left);
        if (!flattened) return;
        const match = exportsPattern.exec(flattened.keypath);
        if (!match) return;

        if (flattened.keypath === 'module.exports') {
          hasDefaultExport = true;
          magicString.overwrite(left.start, left.end, `var ${moduleName}`);
        } else {
          const name = match[1];
          const deconflicted = deconflict(scope, globals, name);
          names.push({
            name,
            deconflicted
          });
          magicString.overwrite(node.start, left.end, `var ${deconflicted}`);
          const declaration = name === deconflicted ? `export { ${name} };` : `export { ${deconflicted} as ${name} };`;

          if (name !== 'default') {
            namedExportDeclarations.push({
              str: declaration,
              name
            });
            delete namedExports[name];
          }

          defaultExportPropertyAssignments.push(`${moduleName}.${name} = ${deconflicted};`);
        }
      }
    });

    if (!hasDefaultExport) {
      wrapperEnd = `\n\nvar ${moduleName} = {\n${names.map(({
        name,
        deconflicted
      }) => `\t${name}: ${deconflicted}`).join(',\n')}\n};`;
    }
  }

  Object.keys(namedExports).filter(key => !blacklist[key]).forEach(addExport);
  const defaultExport = /__esModule/.test(code) ? `export default ${HELPERS_NAME}.unwrapExports(${moduleName});` : `export default ${moduleName};`;
  const named = namedExportDeclarations.filter(x => x.name !== 'default' || !hasDefaultExport).map(x => x.str);
  const exportBlock = '\n\n' + [defaultExport].concat(named).concat(hasDefaultExport ? defaultExportPropertyAssignments : []).join('\n');
  magicString.trim().prepend(importBlock + wrapperStart).trim().append(wrapperEnd + exportBlock);
  code = magicString.toString();
  const map = sourceMap ? magicString.generateMap() : null;
  return {
    code,
    map
  };
}

function commonjs(options = {}) {
  const extensions = options.extensions || ['.js'];
  const filter = rollupPluginutils.createFilter(options.include, options.exclude);
  const ignoreGlobal = options.ignoreGlobal;
  const customNamedExports = {};

  if (options.namedExports) {
    Object.keys(options.namedExports).forEach(id => {
      let resolveId = id;
      let resolvedId;

      if (resolve.isCore(id)) {
        // resolve will not find npm modules with the same name as
        // core modules without a trailing slash. Since core modules
        // must be external, we can assume any core modules defined
        // here are npm modules by that name.
        resolveId += '/';
      }

      try {
        resolvedId = resolve.sync(resolveId, {
          basedir: process.cwd()
        });
      } catch (err) {
        resolvedId = path.resolve(id);
      } // Note: customNamedExport's keys must be normalized file paths.
      // resolve and nodeResolveSync both return normalized file paths
      // so no additional normalization is necessary.


      customNamedExports[resolvedId] = options.namedExports[id];

      if (fs.existsSync(resolvedId)) {
        const realpath = fs.realpathSync(resolvedId);

        if (realpath !== resolvedId) {
          customNamedExports[realpath] = options.namedExports[id];
        }
      }
    });
  }

  const esModulesWithoutDefaultExport = new Set();
  const esModulesWithDefaultExport = new Set();
  const allowDynamicRequire = !!options.ignore; // TODO maybe this should be configurable?

  const ignoreRequire = typeof options.ignore === 'function' ? options.ignore : Array.isArray(options.ignore) ? id => options.ignore.includes(id) : () => false;
  const resolveId = getResolveId(extensions);
  const sourceMap = options.sourceMap !== false;

  function transformAndCheckExports(code, id) {
    {
      const _checkEsModule = checkEsModule(this.parse, code, id),
            isEsModule = _checkEsModule.isEsModule,
            hasDefaultExport = _checkEsModule.hasDefaultExport,
            ast = _checkEsModule.ast;

      if (isEsModule) {
        (hasDefaultExport ? esModulesWithDefaultExport : esModulesWithoutDefaultExport).add(id);
        return null;
      } // it is not an ES module but it does not have CJS-specific elements.


      if (!hasCjsKeywords(code, ignoreGlobal)) {
        esModulesWithoutDefaultExport.add(id);
        return null;
      }

      const normalizedId = path.normalize(id);
      const transformed = transformCommonjs(this.parse, code, id, this.getModuleInfo(id).isEntry, ignoreGlobal, ignoreRequire, customNamedExports[normalizedId], sourceMap, allowDynamicRequire, ast);

      if (!transformed) {
        esModulesWithoutDefaultExport.add(id);
        return null;
      }

      return transformed;
    }
  }

  return {
    name: 'commonjs',

    buildStart() {
      const _this$meta$rollupVers = this.meta.rollupVersion.split('.').map(Number),
            _this$meta$rollupVers2 = _slicedToArray(_this$meta$rollupVers, 2),
            major = _this$meta$rollupVers2[0],
            minor = _this$meta$rollupVers2[1];

      const minVersion = peerDependencies.rollup.slice(2);

      const _minVersion$split$map = minVersion.split('.').map(Number),
            _minVersion$split$map2 = _slicedToArray(_minVersion$split$map, 2),
            minMajor = _minVersion$split$map2[0],
            minMinor = _minVersion$split$map2[1];

      if (major < minMajor || major === minMajor && minor < minMinor) {
        this.error(`Insufficient Rollup version: "rollup-plugin-commonjs" requires at least rollup@${minVersion} but found rollup@${this.meta.rollupVersion}.`);
      }
    },

    resolveId,

    load(id) {
      if (id === HELPERS_ID) return HELPERS; // generate proxy modules

      if (id.endsWith(EXTERNAL_SUFFIX)) {
        const actualId = getIdFromExternalProxyId(id);
        const name = getName(actualId);
        return `import ${name} from ${JSON.stringify(actualId)}; export default ${name};`;
      }

      if (id.endsWith(PROXY_SUFFIX)) {
        const actualId = getIdFromProxyId(id);
        const name = getName(actualId);
        return getIsCjsPromise(actualId).then(isCjs => {
          if (isCjs) return `import { __moduleExports } from ${JSON.stringify(actualId)}; export default __moduleExports;`;else if (esModulesWithoutDefaultExport.has(actualId)) return `import * as ${name} from ${JSON.stringify(actualId)}; export default ${name};`;else if (esModulesWithDefaultExport.has(actualId)) {
            return `export {default} from ${JSON.stringify(actualId)};`;
          } else return `import * as ${name} from ${JSON.stringify(actualId)}; import {getCjsExportFromNamespace} from "${HELPERS_ID}"; export default getCjsExportFromNamespace(${name})`;
        });
      }
    },

    transform(code, id) {
      if (!filter(id) || extensions.indexOf(path.extname(id)) === -1) {
        setIsCjsPromise(id, null);
        return null;
      }

      let transformed;

      try {
        transformed = transformAndCheckExports.call(this, code, id);
      } catch (err) {
        transformed = null;
        this.error(err, err.loc);
      }

      setIsCjsPromise(id, Boolean(transformed));
      return transformed;
    }

  };
}

module.exports = commonjs;
//# sourceMappingURL=rollup-plugin-commonjs.cjs.js.map
