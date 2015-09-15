'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getScaleFactor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getScreenWidth = require('./get-screen-width');

var _getScreenWidth2 = _interopRequireDefault(_getScreenWidth);

function getScaleFactor() {
  // `window.outerWidth` is `0` on iOS devices running iOS 8.0 and higher, and
  // astronomically large (read: also incorrect) on iOS devices running iOS 7.x
  // and below, so we'll use `screenWidth` instead in those cases.
  var outerWidth = Math.min(window.outerWidth || Infinity, (0, _getScreenWidth2['default'])());

  return window.innerWidth / outerWidth;
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtc2NhbGUtZmFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUV3QixjQUFjOzs7OzhCQUZYLG9CQUFvQjs7OztBQUVoQyxTQUFTLGNBQWMsR0FBRzs7OztBQUl2QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksUUFBUSxFQUFFLGtDQUFnQixDQUFDLENBQUM7O0FBRTdFLFNBQU8sTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDdkMiLCJmaWxlIjoiZ2V0LXNjYWxlLWZhY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRTY3JlZW5XaWR0aCBmcm9tICcuL2dldC1zY3JlZW4td2lkdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY2FsZUZhY3RvcigpIHtcbiAgLy8gYHdpbmRvdy5vdXRlcldpZHRoYCBpcyBgMGAgb24gaU9TIGRldmljZXMgcnVubmluZyBpT1MgOC4wIGFuZCBoaWdoZXIsIGFuZFxuICAvLyBhc3Ryb25vbWljYWxseSBsYXJnZSAocmVhZDogYWxzbyBpbmNvcnJlY3QpIG9uIGlPUyBkZXZpY2VzIHJ1bm5pbmcgaU9TIDcueFxuICAvLyBhbmQgYmVsb3csIHNvIHdlJ2xsIHVzZSBgc2NyZWVuV2lkdGhgIGluc3RlYWQgaW4gdGhvc2UgY2FzZXMuXG4gIGNvbnN0IG91dGVyV2lkdGggPSBNYXRoLm1pbih3aW5kb3cub3V0ZXJXaWR0aCB8fCBJbmZpbml0eSwgZ2V0U2NyZWVuV2lkdGgoKSk7XG5cbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gb3V0ZXJXaWR0aDtcbn1cbiJdfQ==