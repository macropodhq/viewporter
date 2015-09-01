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

  var _getComputedStyle = getComputedStyle(window.document.body);

  var bodyPosition = _getComputedStyle.position;
  var bodyMarginTop = _getComputedStyle.marginTop;
  var bodyMarginLeft = _getComputedStyle.marginLeft;

  var _getElementOffset = (0, _getElementOffset3['default'])(window.document.body);

  var top = _getElementOffset.top;
  var right = _getElementOffset.right;
  var bottom = _getElementOffset.bottom;
  var left = _getElementOffset.left;
  var width = _getElementOffset.width;
  var height = _getElementOffset.height;

  top -= bodyPosition === 'static' ? parseFloat(bodyMarginTop) : 0;
  left -= bodyPosition === 'static' ? parseFloat(bodyMarginLeft) : 0;

  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtYm9keS1vZmZzZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7cUJBRXdCLGFBQWE7Ozs7aUNBRlIsc0JBQXNCOzs7O0FBRXBDLFNBQVMsYUFBYSxHQUFHOzs7MEJBRWlELGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztNQUE1RyxZQUFZLHFCQUF0QixRQUFRO01BQTJCLGFBQWEscUJBQXhCLFNBQVM7TUFBNkIsY0FBYyxxQkFBMUIsVUFBVTs7MEJBQ25CLG1DQUFpQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7TUFBakYsR0FBRyxxQkFBSCxHQUFHO01BQUUsS0FBSyxxQkFBTCxLQUFLO01BQUUsTUFBTSxxQkFBTixNQUFNO01BQUUsSUFBSSxxQkFBSixJQUFJO01BQUUsS0FBSyxxQkFBTCxLQUFLO01BQUUsTUFBTSxxQkFBTixNQUFNOztBQUU1QyxLQUFHLElBQUssWUFBWSxLQUFLLFFBQVEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxBQUFDLENBQUM7QUFDbkUsTUFBSSxJQUFLLFlBQVksS0FBSyxRQUFRLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQUFBQyxDQUFDOztBQUVyRSxTQUFPO0FBQ0wsT0FBRyxFQUFILEdBQUc7QUFDSCxTQUFLLEVBQUwsS0FBSztBQUNMLFVBQU0sRUFBTixNQUFNO0FBQ04sUUFBSSxFQUFKLElBQUk7QUFDSixTQUFLLEVBQUwsS0FBSztBQUNMLFVBQU0sRUFBTixNQUFNO0dBQ1AsQ0FBQztDQUNIIiwiZmlsZSI6ImdldC1ib2R5LW9mZnNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRFbGVtZW50T2Zmc2V0IGZyb20gJy4vZ2V0LWVsZW1lbnQtb2Zmc2V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm9keU9mZnNldCgpIHtcbiAgLy8gUmV0dXJucyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGJvZHkgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnRcbiAgY29uc3Qge3Bvc2l0aW9uOiBib2R5UG9zaXRpb24sIG1hcmdpblRvcDogYm9keU1hcmdpblRvcCwgbWFyZ2luTGVmdDogYm9keU1hcmdpbkxlZnR9ID0gZ2V0Q29tcHV0ZWRTdHlsZSh3aW5kb3cuZG9jdW1lbnQuYm9keSk7XG4gIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0fSA9IGdldEVsZW1lbnRPZmZzZXQod2luZG93LmRvY3VtZW50LmJvZHkpO1xuXG4gIHRvcCAtPSAoYm9keVBvc2l0aW9uID09PSAnc3RhdGljJyA/IHBhcnNlRmxvYXQoYm9keU1hcmdpblRvcCkgOiAwKTtcbiAgbGVmdCAtPSAoYm9keVBvc2l0aW9uID09PSAnc3RhdGljJyA/IHBhcnNlRmxvYXQoYm9keU1hcmdpbkxlZnQpIDogMCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3AsXG4gICAgcmlnaHQsXG4gICAgYm90dG9tLFxuICAgIGxlZnQsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xufVxuIl19