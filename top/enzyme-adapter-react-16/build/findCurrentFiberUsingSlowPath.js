"use strict";

// Extracted from https://github.com/facebook/react/blob/7bdf93b17a35a5d8fcf0ceae0bf48ed5e6b16688/src/renderers/shared/fiber/ReactFiberTreeReflection.js#L104-L228
function findCurrentFiberUsingSlowPath(fiber) {
  var _a$stateNode;
  var alternate = fiber.alternate;
  if (!alternate) {
    return fiber;
  }
  // If we have two possible branches, we'll walk backwards up to the root
  // to see what path the root points to. On the way we may hit one of the
  // special cases and we'll deal with them.
  var a = fiber;
  var b = alternate;
  while (true) {
    // eslint-disable-line
    var parentA = a["return"];
    var parentB = parentA ? parentA.alternate : null;
    if (!parentA || !parentB) {
      // We're at the root.
      break;
    }

    // If both copies of the parent fiber point to the same child, we can
    // assume that the child is current. This happens when we bailout on low
    // priority: the bailed out fiber's child reuses the current child.
    if (parentA.child === parentB.child) {
      var child = parentA.child;
      while (child) {
        if (child === a) {
          // We've determined that A is the current branch.
          return fiber;
        }
        if (child === b) {
          // We've determined that B is the current branch.
          return alternate;
        }
        child = child.sibling;
      }
      // We should never have an alternate for any mounting node. So the only
      // way this could possibly happen is if this was unmounted, if at all.
      throw new Error('Unable to find node on an unmounted component.');
    }
    if (a["return"] !== b["return"]) {
      // The return pointer of A and the return pointer of B point to different
      // fibers. We assume that return pointers never criss-cross, so A must
      // belong to the child set of A.return, and B must belong to the child
      // set of B.return.
      a = parentA;
      b = parentB;
    } else {
      // The return pointers point to the same fiber. We'll have to use the
      // default, slow path: scan the child sets of each parent alternate to see
      // which child belongs to which set.
      //
      // Search parent A's child set
      var didFindChild = false;
      var _child = parentA.child;
      while (_child) {
        if (_child === a) {
          didFindChild = true;
          a = parentA;
          b = parentB;
          break;
        }
        if (_child === b) {
          didFindChild = true;
          b = parentA;
          a = parentB;
          break;
        }
        _child = _child.sibling;
      }
      if (!didFindChild) {
        // Search parent B's child set
        _child = parentB.child;
        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentB;
            b = parentA;
            break;
          }
          if (_child === b) {
            didFindChild = true;
            b = parentB;
            a = parentA;
            break;
          }
          _child = _child.sibling;
        }
        if (!didFindChild) {
          throw new Error('Child was not found in either parent set. This indicates a bug ' + 'in React related to the return pointer. Please file an issue.');
        }
      }
    }
  }
  if (((_a$stateNode = a.stateNode) === null || _a$stateNode === void 0 ? void 0 : _a$stateNode.current) === a) {
    // We've determined that A is the current branch.
    return fiber;
  }
  // Otherwise B has to be current branch.
  return alternate;
}
module.exports = findCurrentFiberUsingSlowPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaW5kQ3VycmVudEZpYmVyVXNpbmdTbG93UGF0aCIsImZpYmVyIiwiX2Ekc3RhdGVOb2RlIiwiYWx0ZXJuYXRlIiwiYSIsImIiLCJwYXJlbnRBIiwicGFyZW50QiIsImNoaWxkIiwic2libGluZyIsIkVycm9yIiwiZGlkRmluZENoaWxkIiwic3RhdGVOb2RlIiwiY3VycmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi9zcmMvZmluZEN1cnJlbnRGaWJlclVzaW5nU2xvd1BhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXh0cmFjdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvN2JkZjkzYjE3YTM1YTVkOGZjZjBjZWFlMGJmNDhlZDVlNmIxNjY4OC9zcmMvcmVuZGVyZXJzL3NoYXJlZC9maWJlci9SZWFjdEZpYmVyVHJlZVJlZmxlY3Rpb24uanMjTDEwNC1MMjI4XG5mdW5jdGlvbiBmaW5kQ3VycmVudEZpYmVyVXNpbmdTbG93UGF0aChmaWJlcikge1xuICBjb25zdCB7IGFsdGVybmF0ZSB9ID0gZmliZXI7XG4gIGlmICghYWx0ZXJuYXRlKSB7XG4gICAgcmV0dXJuIGZpYmVyO1xuICB9XG4gIC8vIElmIHdlIGhhdmUgdHdvIHBvc3NpYmxlIGJyYW5jaGVzLCB3ZSdsbCB3YWxrIGJhY2t3YXJkcyB1cCB0byB0aGUgcm9vdFxuICAvLyB0byBzZWUgd2hhdCBwYXRoIHRoZSByb290IHBvaW50cyB0by4gT24gdGhlIHdheSB3ZSBtYXkgaGl0IG9uZSBvZiB0aGVcbiAgLy8gc3BlY2lhbCBjYXNlcyBhbmQgd2UnbGwgZGVhbCB3aXRoIHRoZW0uXG4gIGxldCBhID0gZmliZXI7XG4gIGxldCBiID0gYWx0ZXJuYXRlO1xuICB3aGlsZSAodHJ1ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY29uc3QgcGFyZW50QSA9IGEucmV0dXJuO1xuICAgIGNvbnN0IHBhcmVudEIgPSBwYXJlbnRBID8gcGFyZW50QS5hbHRlcm5hdGUgOiBudWxsO1xuICAgIGlmICghcGFyZW50QSB8fCAhcGFyZW50Qikge1xuICAgICAgLy8gV2UncmUgYXQgdGhlIHJvb3QuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBJZiBib3RoIGNvcGllcyBvZiB0aGUgcGFyZW50IGZpYmVyIHBvaW50IHRvIHRoZSBzYW1lIGNoaWxkLCB3ZSBjYW5cbiAgICAvLyBhc3N1bWUgdGhhdCB0aGUgY2hpbGQgaXMgY3VycmVudC4gVGhpcyBoYXBwZW5zIHdoZW4gd2UgYmFpbG91dCBvbiBsb3dcbiAgICAvLyBwcmlvcml0eTogdGhlIGJhaWxlZCBvdXQgZmliZXIncyBjaGlsZCByZXVzZXMgdGhlIGN1cnJlbnQgY2hpbGQuXG4gICAgaWYgKHBhcmVudEEuY2hpbGQgPT09IHBhcmVudEIuY2hpbGQpIHtcbiAgICAgIGxldCB7IGNoaWxkIH0gPSBwYXJlbnRBO1xuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gYSkge1xuICAgICAgICAgIC8vIFdlJ3ZlIGRldGVybWluZWQgdGhhdCBBIGlzIHRoZSBjdXJyZW50IGJyYW5jaC5cbiAgICAgICAgICByZXR1cm4gZmliZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkID09PSBiKSB7XG4gICAgICAgICAgLy8gV2UndmUgZGV0ZXJtaW5lZCB0aGF0IEIgaXMgdGhlIGN1cnJlbnQgYnJhbmNoLlxuICAgICAgICAgIHJldHVybiBhbHRlcm5hdGU7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5zaWJsaW5nO1xuICAgICAgfVxuICAgICAgLy8gV2Ugc2hvdWxkIG5ldmVyIGhhdmUgYW4gYWx0ZXJuYXRlIGZvciBhbnkgbW91bnRpbmcgbm9kZS4gU28gdGhlIG9ubHlcbiAgICAgIC8vIHdheSB0aGlzIGNvdWxkIHBvc3NpYmx5IGhhcHBlbiBpcyBpZiB0aGlzIHdhcyB1bm1vdW50ZWQsIGlmIGF0IGFsbC5cbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZpbmQgbm9kZSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LicpO1xuICAgIH1cblxuICAgIGlmIChhLnJldHVybiAhPT0gYi5yZXR1cm4pIHtcbiAgICAgIC8vIFRoZSByZXR1cm4gcG9pbnRlciBvZiBBIGFuZCB0aGUgcmV0dXJuIHBvaW50ZXIgb2YgQiBwb2ludCB0byBkaWZmZXJlbnRcbiAgICAgIC8vIGZpYmVycy4gV2UgYXNzdW1lIHRoYXQgcmV0dXJuIHBvaW50ZXJzIG5ldmVyIGNyaXNzLWNyb3NzLCBzbyBBIG11c3RcbiAgICAgIC8vIGJlbG9uZyB0byB0aGUgY2hpbGQgc2V0IG9mIEEucmV0dXJuLCBhbmQgQiBtdXN0IGJlbG9uZyB0byB0aGUgY2hpbGRcbiAgICAgIC8vIHNldCBvZiBCLnJldHVybi5cbiAgICAgIGEgPSBwYXJlbnRBO1xuICAgICAgYiA9IHBhcmVudEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSByZXR1cm4gcG9pbnRlcnMgcG9pbnQgdG8gdGhlIHNhbWUgZmliZXIuIFdlJ2xsIGhhdmUgdG8gdXNlIHRoZVxuICAgICAgLy8gZGVmYXVsdCwgc2xvdyBwYXRoOiBzY2FuIHRoZSBjaGlsZCBzZXRzIG9mIGVhY2ggcGFyZW50IGFsdGVybmF0ZSB0byBzZWVcbiAgICAgIC8vIHdoaWNoIGNoaWxkIGJlbG9uZ3MgdG8gd2hpY2ggc2V0LlxuICAgICAgLy9cbiAgICAgIC8vIFNlYXJjaCBwYXJlbnQgQSdzIGNoaWxkIHNldFxuICAgICAgbGV0IGRpZEZpbmRDaGlsZCA9IGZhbHNlO1xuICAgICAgbGV0IHsgY2hpbGQgfSA9IHBhcmVudEE7XG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkID09PSBhKSB7XG4gICAgICAgICAgZGlkRmluZENoaWxkID0gdHJ1ZTtcbiAgICAgICAgICBhID0gcGFyZW50QTtcbiAgICAgICAgICBiID0gcGFyZW50QjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQgPT09IGIpIHtcbiAgICAgICAgICBkaWRGaW5kQ2hpbGQgPSB0cnVlO1xuICAgICAgICAgIGIgPSBwYXJlbnRBO1xuICAgICAgICAgIGEgPSBwYXJlbnRCO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gY2hpbGQuc2libGluZztcbiAgICAgIH1cbiAgICAgIGlmICghZGlkRmluZENoaWxkKSB7XG4gICAgICAgIC8vIFNlYXJjaCBwYXJlbnQgQidzIGNoaWxkIHNldFxuICAgICAgICAoeyBjaGlsZCB9ID0gcGFyZW50Qik7XG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIGlmIChjaGlsZCA9PT0gYSkge1xuICAgICAgICAgICAgZGlkRmluZENoaWxkID0gdHJ1ZTtcbiAgICAgICAgICAgIGEgPSBwYXJlbnRCO1xuICAgICAgICAgICAgYiA9IHBhcmVudEE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNoaWxkID09PSBiKSB7XG4gICAgICAgICAgICBkaWRGaW5kQ2hpbGQgPSB0cnVlO1xuICAgICAgICAgICAgYiA9IHBhcmVudEI7XG4gICAgICAgICAgICBhID0gcGFyZW50QTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZCA9IGNoaWxkLnNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkaWRGaW5kQ2hpbGQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkIHdhcyBub3QgZm91bmQgaW4gZWl0aGVyIHBhcmVudCBzZXQuIFRoaXMgaW5kaWNhdGVzIGEgYnVnICdcbiAgICAgICAgICAgICsgJ2luIFJlYWN0IHJlbGF0ZWQgdG8gdGhlIHJldHVybiBwb2ludGVyLiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYS5zdGF0ZU5vZGU/LmN1cnJlbnQgPT09IGEpIHtcbiAgICAvLyBXZSd2ZSBkZXRlcm1pbmVkIHRoYXQgQSBpcyB0aGUgY3VycmVudCBicmFuY2guXG4gICAgcmV0dXJuIGZpYmVyO1xuICB9XG4gIC8vIE90aGVyd2lzZSBCIGhhcyB0byBiZSBjdXJyZW50IGJyYW5jaC5cbiAgcmV0dXJuIGFsdGVybmF0ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kQ3VycmVudEZpYmVyVXNpbmdTbG93UGF0aDtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLFNBQVNBLDZCQUE2QkEsQ0FBQ0MsS0FBSyxFQUFFO0VBQUEsSUFBQUMsWUFBQTtFQUM1QyxJQUFRQyxTQUFTLEdBQUtGLEtBQUssQ0FBbkJFLFNBQVM7RUFDakIsSUFBSSxDQUFDQSxTQUFTLEVBQUU7SUFDZCxPQUFPRixLQUFLO0VBQ2Q7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJRyxDQUFDLEdBQUdILEtBQUs7RUFDYixJQUFJSSxDQUFDLEdBQUdGLFNBQVM7RUFDakIsT0FBTyxJQUFJLEVBQUU7SUFBRTtJQUNiLElBQU1HLE9BQU8sR0FBR0YsQ0FBQyxVQUFPO0lBQ3hCLElBQU1HLE9BQU8sR0FBR0QsT0FBTyxHQUFHQSxPQUFPLENBQUNILFNBQVMsR0FBRyxJQUFJO0lBQ2xELElBQUksQ0FBQ0csT0FBTyxJQUFJLENBQUNDLE9BQU8sRUFBRTtNQUN4QjtNQUNBO0lBQ0Y7O0lBRUE7SUFDQTtJQUNBO0lBQ0EsSUFBSUQsT0FBTyxDQUFDRSxLQUFLLEtBQUtELE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO01BQ25DLElBQU1BLEtBQUssR0FBS0YsT0FBTyxDQUFqQkUsS0FBSztNQUNYLE9BQU9BLEtBQUssRUFBRTtRQUNaLElBQUlBLEtBQUssS0FBS0osQ0FBQyxFQUFFO1VBQ2Y7VUFDQSxPQUFPSCxLQUFLO1FBQ2Q7UUFDQSxJQUFJTyxLQUFLLEtBQUtILENBQUMsRUFBRTtVQUNmO1VBQ0EsT0FBT0YsU0FBUztRQUNsQjtRQUNBSyxLQUFLLEdBQUdBLEtBQUssQ0FBQ0MsT0FBTztNQUN2QjtNQUNBO01BQ0E7TUFDQSxNQUFNLElBQUlDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQztJQUNuRTtJQUVBLElBQUlOLENBQUMsVUFBTyxLQUFLQyxDQUFDLFVBQU8sRUFBRTtNQUN6QjtNQUNBO01BQ0E7TUFDQTtNQUNBRCxDQUFDLEdBQUdFLE9BQU87TUFDWEQsQ0FBQyxHQUFHRSxPQUFPO0lBQ2IsQ0FBQyxNQUFNO01BQ0w7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBLElBQUlJLFlBQVksR0FBRyxLQUFLO01BQ3hCLElBQU1ILE1BQUssR0FBS0YsT0FBTyxDQUFqQkUsS0FBSztNQUNYLE9BQU9BLE1BQUssRUFBRTtRQUNaLElBQUlBLE1BQUssS0FBS0osQ0FBQyxFQUFFO1VBQ2ZPLFlBQVksR0FBRyxJQUFJO1VBQ25CUCxDQUFDLEdBQUdFLE9BQU87VUFDWEQsQ0FBQyxHQUFHRSxPQUFPO1VBQ1g7UUFDRjtRQUNBLElBQUlDLE1BQUssS0FBS0gsQ0FBQyxFQUFFO1VBQ2ZNLFlBQVksR0FBRyxJQUFJO1VBQ25CTixDQUFDLEdBQUdDLE9BQU87VUFDWEYsQ0FBQyxHQUFHRyxPQUFPO1VBQ1g7UUFDRjtRQUNBQyxNQUFLLEdBQUdBLE1BQUssQ0FBQ0MsT0FBTztNQUN2QjtNQUNBLElBQUksQ0FBQ0UsWUFBWSxFQUFFO1FBQ2pCO1FBQ0dILE1BQUssR0FBS0QsT0FBTyxDQUFqQkMsS0FBSztRQUNSLE9BQU9BLE1BQUssRUFBRTtVQUNaLElBQUlBLE1BQUssS0FBS0osQ0FBQyxFQUFFO1lBQ2ZPLFlBQVksR0FBRyxJQUFJO1lBQ25CUCxDQUFDLEdBQUdHLE9BQU87WUFDWEYsQ0FBQyxHQUFHQyxPQUFPO1lBQ1g7VUFDRjtVQUNBLElBQUlFLE1BQUssS0FBS0gsQ0FBQyxFQUFFO1lBQ2ZNLFlBQVksR0FBRyxJQUFJO1lBQ25CTixDQUFDLEdBQUdFLE9BQU87WUFDWEgsQ0FBQyxHQUFHRSxPQUFPO1lBQ1g7VUFDRjtVQUNBRSxNQUFLLEdBQUdBLE1BQUssQ0FBQ0MsT0FBTztRQUN2QjtRQUNBLElBQUksQ0FBQ0UsWUFBWSxFQUFFO1VBQ2pCLE1BQU0sSUFBSUQsS0FBSyxDQUFDLGlFQUFpRSxHQUM3RSwrREFBK0QsQ0FBQztRQUN0RTtNQUNGO0lBQ0Y7RUFDRjtFQUNBLElBQUksRUFBQVIsWUFBQSxHQUFBRSxDQUFDLENBQUNRLFNBQVMsY0FBQVYsWUFBQSx1QkFBWEEsWUFBQSxDQUFhVyxPQUFPLE1BQUtULENBQUMsRUFBRTtJQUM5QjtJQUNBLE9BQU9ILEtBQUs7RUFDZDtFQUNBO0VBQ0EsT0FBT0UsU0FBUztBQUNsQjtBQUVBVyxNQUFNLENBQUNDLE9BQU8sR0FBR2YsNkJBQTZCIn0=
//# sourceMappingURL=findCurrentFiberUsingSlowPath.js.map