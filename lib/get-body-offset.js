'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getBodyOffset;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getElementOffset2 = require('./get-element-offset');

var _getElementOffset3 = _interopRequireDefault(_getElementOffset2);

function getBodyOffset() {
  // Returns the coordinates of the body element relative to the document

  var _getComputedStyle = getComputedStyle(document.body);

  var bodyPosition = _getComputedStyle.position;
  var bodyMarginTop = _getComputedStyle.marginTop;
  var bodyMarginLeft = _getComputedStyle.marginLeft;

  var _getElementOffset = (0, _getElementOffset3['default'])(document.body);

  var top = _getElementOffset.top;
  var left = _getElementOffset.left;
  var height = _getElementOffset.height;
  var width = _getElementOffset.width;

  top -= bodyPosition === 'static' ? parseFloat(bodyMarginTop) : 0;
  left -= bodyPosition === 'static' ? parseFloat(bodyMarginLeft) : 0;

  return {
    top: top,
    left: left,
    height: height,
    width: width
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtYm9keS1vZmZzZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7cUJBRXdCLGFBQWE7Ozs7aUNBRlIsc0JBQXNCOzs7O0FBRXBDLFNBQVMsYUFBYSxHQUFHOzs7MEJBRWlELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O01BQXJHLFlBQVkscUJBQXRCLFFBQVE7TUFBMkIsYUFBYSxxQkFBeEIsU0FBUztNQUE2QixjQUFjLHFCQUExQixVQUFVOzswQkFDbEMsbUNBQWlCLFFBQVEsQ0FBQyxJQUFJLENBQUM7O01BQTNELEdBQUcscUJBQUgsR0FBRztNQUFFLElBQUkscUJBQUosSUFBSTtNQUFFLE1BQU0scUJBQU4sTUFBTTtNQUFFLEtBQUsscUJBQUwsS0FBSzs7QUFFN0IsS0FBRyxJQUFLLFlBQVksS0FBSyxRQUFRLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQUFBQyxDQUFDO0FBQ25FLE1BQUksSUFBSyxZQUFZLEtBQUssUUFBUSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEFBQUMsQ0FBQzs7QUFFckUsU0FBTztBQUNMLE9BQUcsRUFBSCxHQUFHO0FBQ0gsUUFBSSxFQUFKLElBQUk7QUFDSixVQUFNLEVBQU4sTUFBTTtBQUNOLFNBQUssRUFBTCxLQUFLO0dBQ04sQ0FBQztDQUNIIiwiZmlsZSI6ImdldC1ib2R5LW9mZnNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRFbGVtZW50T2Zmc2V0IGZyb20gJy4vZ2V0LWVsZW1lbnQtb2Zmc2V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm9keU9mZnNldCgpIHtcbiAgLy8gUmV0dXJucyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGJvZHkgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnRcbiAgY29uc3Qge3Bvc2l0aW9uOiBib2R5UG9zaXRpb24sIG1hcmdpblRvcDogYm9keU1hcmdpblRvcCwgbWFyZ2luTGVmdDogYm9keU1hcmdpbkxlZnR9ID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgbGV0IHt0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGh9ID0gZ2V0RWxlbWVudE9mZnNldChkb2N1bWVudC5ib2R5KTtcblxuICB0b3AgLT0gKGJvZHlQb3NpdGlvbiA9PT0gJ3N0YXRpYycgPyBwYXJzZUZsb2F0KGJvZHlNYXJnaW5Ub3ApIDogMCk7XG4gIGxlZnQgLT0gKGJvZHlQb3NpdGlvbiA9PT0gJ3N0YXRpYycgPyBwYXJzZUZsb2F0KGJvZHlNYXJnaW5MZWZ0KSA6IDApO1xuXG4gIHJldHVybiB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoLFxuICB9O1xufVxuIl19