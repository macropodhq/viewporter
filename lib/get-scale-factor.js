'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getScaleFactor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getScreenWidth = require('./get-screen-width');

var _getScreenWidth2 = _interopRequireDefault(_getScreenWidth);

function getScaleFactor() {
  // `window.outerWidth` is `0` on iOS devices, so we'll use `screenWidth`
  // instead.
  var outerWidth = window.outerWidth || (0, _getScreenWidth2['default'])();

  return window.innerWidth / outerWidth;
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtc2NhbGUtZmFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUV3QixjQUFjOzs7OzhCQUZYLG9CQUFvQjs7OztBQUVoQyxTQUFTLGNBQWMsR0FBRzs7O0FBR3ZDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksa0NBQWdCLENBQUM7O0FBRXpELFNBQU8sTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDdkMiLCJmaWxlIjoiZ2V0LXNjYWxlLWZhY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRTY3JlZW5XaWR0aCBmcm9tICcuL2dldC1zY3JlZW4td2lkdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY2FsZUZhY3RvcigpIHtcbiAgLy8gYHdpbmRvdy5vdXRlcldpZHRoYCBpcyBgMGAgb24gaU9TIGRldmljZXMsIHNvIHdlJ2xsIHVzZSBgc2NyZWVuV2lkdGhgXG4gIC8vIGluc3RlYWQuXG4gIGNvbnN0IG91dGVyV2lkdGggPSB3aW5kb3cub3V0ZXJXaWR0aCB8fCBnZXRTY3JlZW5XaWR0aCgpO1xuXG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAvIG91dGVyV2lkdGg7XG59XG4iXX0=