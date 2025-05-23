import { createForEach } from '../../function/matrix/forEach.js';
import { createTransformCallback } from './utils/transformCallback.js';
import { factory } from '../../utils/factory.js';
import { isFunctionAssignmentNode, isSymbolNode } from '../../utils/is.js';
import { compileInlineExpression } from './utils/compileInlineExpression.js';
var name = 'forEach';
var dependencies = ['typed'];
export var createForEachTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Attach a transform function to math.forEach
   * Adds a property transform containing the transform function.
   *
   * This transform creates a one-based index instead of a zero-based index
   */
  var forEach = createForEach({
    typed
  });
  var transformCallback = createTransformCallback({
    typed
  });
  function forEachTransform(args, math, scope) {
    if (args.length === 0) {
      return forEach();
    }
    var x = args[0];
    if (args.length === 1) {
      return forEach(x);
    }
    var N = args.length - 1;
    var callback = args[N];
    if (x) {
      x = _compileAndEvaluate(x, scope);
    }
    if (callback) {
      if (isSymbolNode(callback) || isFunctionAssignmentNode(callback)) {
        // a function pointer, like filter([3, -2, 5], myTestFunction)
        callback = _compileAndEvaluate(callback, scope);
      } else {
        // an expression like filter([3, -2, 5], x > 0)
        callback = compileInlineExpression(callback, math, scope);
      }
    }
    return forEach(x, transformCallback(callback, N));
  }
  forEachTransform.rawArgs = true;
  function _compileAndEvaluate(arg, scope) {
    return arg.compile().evaluate(scope);
  }
  return forEachTransform;
}, {
  isTransformFunction: true
});