'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getViewportCoordinates;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getBodyOffset = require('./get-body-offset');

var _getBodyOffset2 = _interopRequireDefault(_getBodyOffset);

function getViewportCoordinates() {
  // Returns the absolute coordinates of the current viewport, relative to the
  // body element
  var bodyOffset = (0, _getBodyOffset2['default'])();

  return {
    top: window.scrollY - bodyOffset.top,
    left: window.scrollX - bodyOffset.left,
    height: window.innerHeight,
    width: window.innerWidth
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtdmlld3BvcnQtY29vcmRpbmF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7cUJBRXdCLHNCQUFzQjs7Ozs2QkFGcEIsbUJBQW1COzs7O0FBRTlCLFNBQVMsc0JBQXNCLEdBQUc7OztBQUcvQyxNQUFNLFVBQVUsR0FBRyxpQ0FBZSxDQUFDOztBQUVuQyxTQUFPO0FBQ0wsT0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUc7QUFDcEMsUUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUk7QUFDdEMsVUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0FBQzFCLFNBQUssRUFBRSxNQUFNLENBQUMsVUFBVTtHQUN6QixDQUFDO0NBQ0giLCJmaWxlIjoiZ2V0LXZpZXdwb3J0LWNvb3JkaW5hdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEJvZHlPZmZzZXQgZnJvbSAnLi9nZXQtYm9keS1vZmZzZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydENvb3JkaW5hdGVzKCkge1xuICAvLyBSZXR1cm5zIHRoZSBhYnNvbHV0ZSBjb29yZGluYXRlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCwgcmVsYXRpdmUgdG8gdGhlXG4gIC8vIGJvZHkgZWxlbWVudFxuICBjb25zdCBib2R5T2Zmc2V0ID0gZ2V0Qm9keU9mZnNldCgpO1xuXG4gIHJldHVybiB7XG4gICAgdG9wOiB3aW5kb3cuc2Nyb2xsWSAtIGJvZHlPZmZzZXQudG9wLFxuICAgIGxlZnQ6IHdpbmRvdy5zY3JvbGxYIC0gYm9keU9mZnNldC5sZWZ0LFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgfTtcbn1cbiJdfQ==