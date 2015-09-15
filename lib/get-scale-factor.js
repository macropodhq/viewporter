'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getScaleFactor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getScreenWidth = require('./get-screen-width');

var _getScreenWidth2 = _interopRequireDefault(_getScreenWidth);

function getScaleFactor() {
  var outerWidth = Math.min((0, _getScreenWidth2['default'])(), window.outerWidth || Infinity);

  return window.innerWidth / outerWidth;
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtc2NhbGUtZmFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUV3QixjQUFjOzs7OzhCQUZYLG9CQUFvQjs7OztBQUVoQyxTQUFTLGNBQWMsR0FBRztBQUN2QyxNQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFnQixFQUFFLE1BQU0sQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLENBQUM7O0FBRTNFLFNBQU8sTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDdkMiLCJmaWxlIjoiZ2V0LXNjYWxlLWZhY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRTY3JlZW5XaWR0aCBmcm9tICcuL2dldC1zY3JlZW4td2lkdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY2FsZUZhY3RvcigpIHtcbiAgdmFyIG91dGVyV2lkdGggPSBNYXRoLm1pbihnZXRTY3JlZW5XaWR0aCgpLCB3aW5kb3cub3V0ZXJXaWR0aCB8fCBJbmZpbml0eSk7XG5cbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gb3V0ZXJXaWR0aDtcbn1cbiJdfQ==