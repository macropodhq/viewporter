'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getMobileScaleFactor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getScaleFactor = require('./get-scale-factor');

var _getScaleFactor2 = _interopRequireDefault(_getScaleFactor);

var _isDesktopSiteInMobileViewport = require('./is-desktop-site-in-mobile-viewport');

var _isDesktopSiteInMobileViewport2 = _interopRequireDefault(_isDesktopSiteInMobileViewport);

function getMobileScaleFactor() {
  if (!(0, _isDesktopSiteInMobileViewport2['default'])()) {
    return 1;
  }

  return (0, _getScaleFactor2['default'])();
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtbW9iaWxlLXNjYWxlLWZhY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFHd0Isb0JBQW9COzs7OzhCQUhqQixvQkFBb0I7Ozs7NkNBQ0wsc0NBQXNDOzs7O0FBRWpFLFNBQVMsb0JBQW9CLEdBQUc7QUFDN0MsTUFBSSxDQUFDLGlEQUErQixFQUFFO0FBQ3BDLFdBQU8sQ0FBQyxDQUFDO0dBQ1Y7O0FBRUQsU0FBTyxrQ0FBZ0IsQ0FBQztDQUN6QiIsImZpbGUiOiJnZXQtbW9iaWxlLXNjYWxlLWZhY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRTY2FsZUZhY3RvciBmcm9tICcuL2dldC1zY2FsZS1mYWN0b3InO1xuaW1wb3J0IGlzRGVza3RvcFNpdGVJbk1vYmlsZVZpZXdwb3J0IGZyb20gJy4vaXMtZGVza3RvcC1zaXRlLWluLW1vYmlsZS12aWV3cG9ydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1vYmlsZVNjYWxlRmFjdG9yKCkge1xuICBpZiAoIWlzRGVza3RvcFNpdGVJbk1vYmlsZVZpZXdwb3J0KCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY2FsZUZhY3RvcigpO1xufVxuIl19