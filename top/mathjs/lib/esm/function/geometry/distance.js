import { isBigNumber } from '../../utils/is.js';
import { factory } from '../../utils/factory.js';
var name = 'distance';
var dependencies = ['typed', 'addScalar', 'subtractScalar', 'divideScalar', 'multiplyScalar', 'deepEqual', 'sqrt', 'abs'];
export var createDistance = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    addScalar,
    subtractScalar,
    multiplyScalar,
    divideScalar,
    deepEqual,
    sqrt,
    abs
  } = _ref;
  /**
    * Calculates:
    *    The eucledian distance between two points in N-dimensional spaces.
    *    Distance between point and a line in 2 and 3 dimensional spaces.
    *    Pairwise distance between a set of 2D or 3D points
    * NOTE:
    *    When substituting coefficients of a line(a, b and c), use ax + by + c = 0 instead of ax + by = c
    *    For parametric equation of a 3D line, x0, y0, z0, a, b, c are from: (x−x0, y−y0, z−z0) = t(a, b, c)
    *
    * Syntax:
    *
    *    math.distance([x1,y1], [x2,y2])
    *    math.distance({pointOneX, pointOneY}, {pointTwoX, pointTwoY})
    *    math.distance([x1,y1,z1], [x2,y2,z2])
    *    math.distance({pointOneX, pointOneY, pointOneZ}, {pointTwoX, pointTwoY, pointTwoZ})
    *    math.distance([x1,y1,z1,a1], [x2,y2,z2,a2])
    *    math.distance([[x1,y1], [x2,y2], [x3,y3]])
    *    math.distance([[x1,y1,z1], [x2,y2,z2], [x3,y3,z3]])
    *    math.distance([pointX,pointY], [a,b,c])
    *    math.distance([pointX,pointY], [lineOnePtX,lineOnePtY], [lineTwoPtX,lineTwoPtY])
    *    math.distance({pointX, pointY}, {lineOnePtX, lineOnePtY}, {lineTwoPtX, lineTwoPtY})
    *    math.distance([pointX,pointY,pointZ], [x0, y0, z0, a, b, c])
    *    math.distance({pointX, pointY, pointZ}, {x0, y0, z0, a, b, c})
    *
    * Examples:
    *    math.distance([0,0], [4,4])                     // Returns 5.656854249492381
    *    math.distance(
    *     {pointOneX: 0, pointOneY: 0},
    *     {pointTwoX: 10, pointTwoY: 10})                // Returns 14.142135623730951
    *    math.distance([1, 0, 1], [4, -2, 2])            // Returns 3.7416573867739413
    *    math.distance(
    *     {pointOneX: 4, pointOneY: 5, pointOneZ: 8},
    *     {pointTwoX: 2, pointTwoY: 7, pointTwoZ: 9})    // Returns 3
    *    math.distance([1, 0, 1, 0], [0, -1, 0, -1])     // Returns 2
    *    math.distance([[1, 2], [1, 2], [1, 3]])         // Returns [0, 1, 1]
    *    math.distance([[1,2,4], [1,2,6], [8,1,3]])      // Returns [2, 7.14142842854285, 7.681145747868608]
    *    math.distance([10, 10], [8, 1, 3])              // Returns 11.535230316796387
    *    math.distance([0, 0], [3, 0], [0, 4])        // Returns 2.4
    *    math.distance(
    *     {pointX: 0, pointY: 0},
    *     {lineOnePtX: 3, lineOnePtY: 0},
    *     {lineTwoPtX: 0, lineTwoPtY: 4})                // Returns 2.4
    *    math.distance([2, 3, 1], [1, 1, 2, 5, 0, 1])    // Returns 2.3204774044612857
    *    math.distance(
    *     {pointX: 2, pointY: 3, pointZ: 1},
    *     {x0: 1, y0: 1, z0: 2, a: 5, b: 0, c: 1})       // Returns 2.3204774044612857
    *
    * @param {Array | Matrix | Object} x    Co-ordinates of first point
    * @param {Array | Matrix | Object} y    Co-ordinates of second point
    * @return {Number | BigNumber} Returns the distance from two/three points
  */
  return typed(name, {
    'Array, Array, Array': function Array_Array_Array(x, y, z) {
      // Point to Line 2D (x=Point, y=LinePoint1, z=LinePoint2)
      if (x.length === 2 && y.length === 2 && z.length === 2) {
        if (!_2d(x)) {
          throw new TypeError('Array with 2 numbers or BigNumbers expected for first argument');
        }
        if (!_2d(y)) {
          throw new TypeError('Array with 2 numbers or BigNumbers expected for second argument');
        }
        if (!_2d(z)) {
          throw new TypeError('Array with 2 numbers or BigNumbers expected for third argument');
        }
        if (deepEqual(y, z)) {
          throw new TypeError('LinePoint1 should not be same with LinePoint2');
        }
        var xCoeff = subtractScalar(z[1], y[1]);
        var yCoeff = subtractScalar(y[0], z[0]);
        var constant = subtractScalar(multiplyScalar(z[0], y[1]), multiplyScalar(y[0], z[1]));
        return _distancePointLine2D(x[0], x[1], xCoeff, yCoeff, constant);
      } else {
        throw new TypeError('Invalid Arguments: Try again');
      }
    },
    'Object, Object, Object': function Object_Object_Object(x, y, z) {
      if (Object.keys(x).length === 2 && Object.keys(y).length === 2 && Object.keys(z).length === 2) {
        if (!_2d(x)) {
          throw new TypeError('Values of pointX and pointY should be numbers or BigNumbers');
        }
        if (!_2d(y)) {
          throw new TypeError('Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers');
        }
        if (!_2d(z)) {
          throw new TypeError('Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers');
        }
        if (deepEqual(_objectToArray(y), _objectToArray(z))) {
          throw new TypeError('LinePoint1 should not be same with LinePoint2');
        }
        if ('pointX' in x && 'pointY' in x && 'lineOnePtX' in y && 'lineOnePtY' in y && 'lineTwoPtX' in z && 'lineTwoPtY' in z) {
          var xCoeff = subtractScalar(z.lineTwoPtY, y.lineOnePtY);
          var yCoeff = subtractScalar(y.lineOnePtX, z.lineTwoPtX);
          var constant = subtractScalar(multiplyScalar(z.lineTwoPtX, y.lineOnePtY), multiplyScalar(y.lineOnePtX, z.lineTwoPtY));
          return _distancePointLine2D(x.pointX, x.pointY, xCoeff, yCoeff, constant);
        } else {
          throw new TypeError('Key names do not match');
        }
      } else {
        throw new TypeError('Invalid Arguments: Try again');
      }
    },
    'Array, Array': function Array_Array(x, y) {
      // Point to Line 2D (x=[pointX, pointY], y=[x-coeff, y-coeff, const])
      if (x.length === 2 && y.length === 3) {
        if (!_2d(x)) {
          throw new TypeError('Array with 2 numbers or BigNumbers expected for first argument');
        }
        if (!_3d(y)) {
          throw new TypeError('Array with 3 numbers or BigNumbers expected for second argument');
        }
        return _distancePointLine2D(x[0], x[1], y[0], y[1], y[2]);
      } else if (x.length === 3 && y.length === 6) {
        // Point to Line 3D
        if (!_3d(x)) {
          throw new TypeError('Array with 3 numbers or BigNumbers expected for first argument');
        }
        if (!_parametricLine(y)) {
          throw new TypeError('Array with 6 numbers or BigNumbers expected for second argument');
        }
        return _distancePointLine3D(x[0], x[1], x[2], y[0], y[1], y[2], y[3], y[4], y[5]);
      } else if (x.length === y.length && x.length > 0) {
        // Point to Point N-dimensions
        if (!_containsOnlyNumbers(x)) {
          throw new TypeError('All values of an array should be numbers or BigNumbers');
        }
        if (!_containsOnlyNumbers(y)) {
          throw new TypeError('All values of an array should be numbers or BigNumbers');
        }
        return _euclideanDistance(x, y);
      } else {
        throw new TypeError('Invalid Arguments: Try again');
      }
    },
    'Object, Object': function Object_Object(x, y) {
      if (Object.keys(x).length === 2 && Object.keys(y).length === 3) {
        if (!_2d(x)) {
          throw new TypeError('Values of pointX and pointY should be numbers or BigNumbers');
        }
        if (!_3d(y)) {
          throw new TypeError('Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers');
        }
        if ('pointX' in x && 'pointY' in x && 'xCoeffLine' in y && 'yCoeffLine' in y && 'constant' in y) {
          return _distancePointLine2D(x.pointX, x.pointY, y.xCoeffLine, y.yCoeffLine, y.constant);
        } else {
          throw new TypeError('Key names do not match');
        }
      } else if (Object.keys(x).length === 3 && Object.keys(y).length === 6) {
        // Point to Line 3D
        if (!_3d(x)) {
          throw new TypeError('Values of pointX, pointY and pointZ should be numbers or BigNumbers');
        }
        if (!_parametricLine(y)) {
          throw new TypeError('Values of x0, y0, z0, a, b and c should be numbers or BigNumbers');
        }
        if ('pointX' in x && 'pointY' in x && 'x0' in y && 'y0' in y && 'z0' in y && 'a' in y && 'b' in y && 'c' in y) {
          return _distancePointLine3D(x.pointX, x.pointY, x.pointZ, y.x0, y.y0, y.z0, y.a, y.b, y.c);
        } else {
          throw new TypeError('Key names do not match');
        }
      } else if (Object.keys(x).length === 2 && Object.keys(y).length === 2) {
        // Point to Point 2D
        if (!_2d(x)) {
          throw new TypeError('Values of pointOneX and pointOneY should be numbers or BigNumbers');
        }
        if (!_2d(y)) {
          throw new TypeError('Values of pointTwoX and pointTwoY should be numbers or BigNumbers');
        }
        if ('pointOneX' in x && 'pointOneY' in x && 'pointTwoX' in y && 'pointTwoY' in y) {
          return _euclideanDistance([x.pointOneX, x.pointOneY], [y.pointTwoX, y.pointTwoY]);
        } else {
          throw new TypeError('Key names do not match');
        }
      } else if (Object.keys(x).length === 3 && Object.keys(y).length === 3) {
        // Point to Point 3D
        if (!_3d(x)) {
          throw new TypeError('Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers');
        }
        if (!_3d(y)) {
          throw new TypeError('Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers');
        }
        if ('pointOneX' in x && 'pointOneY' in x && 'pointOneZ' in x && 'pointTwoX' in y && 'pointTwoY' in y && 'pointTwoZ' in y) {
          return _euclideanDistance([x.pointOneX, x.pointOneY, x.pointOneZ], [y.pointTwoX, y.pointTwoY, y.pointTwoZ]);
        } else {
          throw new TypeError('Key names do not match');
        }
      } else {
        throw new TypeError('Invalid Arguments: Try again');
      }
    },
    Array: function Array(arr) {
      if (!_pairwise(arr)) {
        throw new TypeError('Incorrect array format entered for pairwise distance calculation');
      }
      return _distancePairwise(arr);
    }
  });
  function _isNumber(a) {
    // distance supports numbers and bignumbers
    return typeof a === 'number' || isBigNumber(a);
  }
  function _2d(a) {
    // checks if the number of arguments are correct in count and are valid (should be numbers)
    if (a.constructor !== Array) {
      a = _objectToArray(a);
    }
    return _isNumber(a[0]) && _isNumber(a[1]);
  }
  function _3d(a) {
    // checks if the number of arguments are correct in count and are valid (should be numbers)
    if (a.constructor !== Array) {
      a = _objectToArray(a);
    }
    return _isNumber(a[0]) && _isNumber(a[1]) && _isNumber(a[2]);
  }
  function _containsOnlyNumbers(a) {
    // checks if the number of arguments are correct in count and are valid (should be numbers)
    if (!Array.isArray(a)) {
      a = _objectToArray(a);
    }
    return a.every(_isNumber);
  }
  function _parametricLine(a) {
    if (a.constructor !== Array) {
      a = _objectToArray(a);
    }
    return _isNumber(a[0]) && _isNumber(a[1]) && _isNumber(a[2]) && _isNumber(a[3]) && _isNumber(a[4]) && _isNumber(a[5]);
  }
  function _objectToArray(o) {
    var keys = Object.keys(o);
    var a = [];
    for (var i = 0; i < keys.length; i++) {
      a.push(o[keys[i]]);
    }
    return a;
  }
  function _pairwise(a) {
    // checks for valid arguments passed to _distancePairwise(Array)
    if (a[0].length === 2 && _isNumber(a[0][0]) && _isNumber(a[0][1])) {
      if (a.some(aI => aI.length !== 2 || !_isNumber(aI[0]) || !_isNumber(aI[1]))) {
        return false;
      }
    } else if (a[0].length === 3 && _isNumber(a[0][0]) && _isNumber(a[0][1]) && _isNumber(a[0][2])) {
      if (a.some(aI => aI.length !== 3 || !_isNumber(aI[0]) || !_isNumber(aI[1]) || !_isNumber(aI[2]))) {
        return false;
      }
    } else {
      return false;
    }
    return true;
  }
  function _distancePointLine2D(x, y, a, b, c) {
    var num = abs(addScalar(addScalar(multiplyScalar(a, x), multiplyScalar(b, y)), c));
    var den = sqrt(addScalar(multiplyScalar(a, a), multiplyScalar(b, b)));
    return divideScalar(num, den);
  }
  function _distancePointLine3D(x, y, z, x0, y0, z0, a, b, c) {
    var num = [subtractScalar(multiplyScalar(subtractScalar(y0, y), c), multiplyScalar(subtractScalar(z0, z), b)), subtractScalar(multiplyScalar(subtractScalar(z0, z), a), multiplyScalar(subtractScalar(x0, x), c)), subtractScalar(multiplyScalar(subtractScalar(x0, x), b), multiplyScalar(subtractScalar(y0, y), a))];
    num = sqrt(addScalar(addScalar(multiplyScalar(num[0], num[0]), multiplyScalar(num[1], num[1])), multiplyScalar(num[2], num[2])));
    var den = sqrt(addScalar(addScalar(multiplyScalar(a, a), multiplyScalar(b, b)), multiplyScalar(c, c)));
    return divideScalar(num, den);
  }
  function _euclideanDistance(x, y) {
    var vectorSize = x.length;
    var result = 0;
    var diff = 0;
    for (var i = 0; i < vectorSize; i++) {
      diff = subtractScalar(x[i], y[i]);
      result = addScalar(multiplyScalar(diff, diff), result);
    }
    return sqrt(result);
  }
  function _distancePairwise(a) {
    var result = [];
    var pointA = [];
    var pointB = [];
    for (var i = 0; i < a.length - 1; i++) {
      for (var j = i + 1; j < a.length; j++) {
        if (a[0].length === 2) {
          pointA = [a[i][0], a[i][1]];
          pointB = [a[j][0], a[j][1]];
        } else if (a[0].length === 3) {
          pointA = [a[i][0], a[i][1], a[i][2]];
          pointB = [a[j][0], a[j][1], a[j][2]];
        }
        result.push(_euclideanDistance(pointA, pointB));
      }
    }
    return result;
  }
});