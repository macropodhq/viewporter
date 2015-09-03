'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isDesktopSiteInMobileViewport;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getScreenWidth = require('./get-screen-width');

var _getScreenWidth2 = _interopRequireDefault(_getScreenWidth);

function isDesktopSiteInMobileViewport() {
  // If the width of the viewport is greater than the screen's width, this is
  // (more than likely) a desktop site shown in a scaled, mobile viewport.
  // This only ever incurs false-positives when zoomed in further than 1:1.
  // (TODO: improve algorithm to detect that?)
  return window.innerWidth > (0, _getScreenWidth2['default'])();
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pcy1kZXNrdG9wLXNpdGUtaW4tbW9iaWxlLXZpZXdwb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUV3Qiw2QkFBNkI7Ozs7OEJBRjFCLG9CQUFvQjs7OztBQUVoQyxTQUFTLDZCQUE2QixHQUFHOzs7OztBQUt0RCxTQUFPLE1BQU0sQ0FBQyxVQUFVLEdBQUcsa0NBQWdCLENBQUM7Q0FDN0MiLCJmaWxlIjoiaXMtZGVza3RvcC1zaXRlLWluLW1vYmlsZS12aWV3cG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRTY3JlZW5XaWR0aCBmcm9tICcuL2dldC1zY3JlZW4td2lkdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Rlc2t0b3BTaXRlSW5Nb2JpbGVWaWV3cG9ydCgpIHtcbiAgLy8gSWYgdGhlIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCBpcyBncmVhdGVyIHRoYW4gdGhlIHNjcmVlbidzIHdpZHRoLCB0aGlzIGlzXG4gIC8vIChtb3JlIHRoYW4gbGlrZWx5KSBhIGRlc2t0b3Agc2l0ZSBzaG93biBpbiBhIHNjYWxlZCwgbW9iaWxlIHZpZXdwb3J0LlxuICAvLyBUaGlzIG9ubHkgZXZlciBpbmN1cnMgZmFsc2UtcG9zaXRpdmVzIHdoZW4gem9vbWVkIGluIGZ1cnRoZXIgdGhhbiAxOjEuXG4gIC8vIChUT0RPOiBpbXByb3ZlIGFsZ29yaXRobSB0byBkZXRlY3QgdGhhdD8pXG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+IGdldFNjcmVlbldpZHRoKCk7XG59XG4iXX0=