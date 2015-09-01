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
    right: bodyOffset.right,
    bottom: bodyOffset.bottom,
    left: window.scrollX - bodyOffset.left,
    height: window.innerHeight,
    width: window.innerWidth
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtdmlld3BvcnQtY29vcmRpbmF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7cUJBRXdCLHNCQUFzQjs7Ozs2QkFGcEIsbUJBQW1COzs7O0FBRTlCLFNBQVMsc0JBQXNCLEdBQUc7OztBQUcvQyxNQUFNLFVBQVUsR0FBRyxpQ0FBZSxDQUFDOztBQUVuQyxTQUFPO0FBQ0wsT0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUc7QUFDcEMsU0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO0FBQ3ZCLFVBQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtBQUN6QixRQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSTtBQUN0QyxVQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7QUFDMUIsU0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVO0dBQ3pCLENBQUM7Q0FDSCIsImZpbGUiOiJnZXQtdmlld3BvcnQtY29vcmRpbmF0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Qm9keU9mZnNldCBmcm9tICcuL2dldC1ib2R5LW9mZnNldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0Q29vcmRpbmF0ZXMoKSB7XG4gIC8vIFJldHVybnMgdGhlIGFic29sdXRlIGNvb3JkaW5hdGVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0LCByZWxhdGl2ZSB0byB0aGVcbiAgLy8gYm9keSBlbGVtZW50XG4gIGNvbnN0IGJvZHlPZmZzZXQgPSBnZXRCb2R5T2Zmc2V0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHdpbmRvdy5zY3JvbGxZIC0gYm9keU9mZnNldC50b3AsXG4gICAgcmlnaHQ6IGJvZHlPZmZzZXQucmlnaHQsXG4gICAgYm90dG9tOiBib2R5T2Zmc2V0LmJvdHRvbSxcbiAgICBsZWZ0OiB3aW5kb3cuc2Nyb2xsWCAtIGJvZHlPZmZzZXQubGVmdCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gIH07XG59XG4iXX0=