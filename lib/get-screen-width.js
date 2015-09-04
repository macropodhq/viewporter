"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getScreenWidth;

function getScreenWidth() {
  // Note about orientation: on mobile devices, `screen` measurements are
  // always based on the "normal" portrait orientation, so we need to
  // use this to decide whether to use the width or height value.
  return (window.orientation || 0) / 90 % 2 === 0 ? screen.availWidth : screen.availHeight;
}

module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtc2NyZWVuLXdpZHRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUF3QixjQUFjOztBQUF2QixTQUFTLGNBQWMsR0FBRzs7OztBQUl2QyxTQUFPLEFBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQSxHQUFJLEVBQUUsR0FBSSxDQUFDLEtBQUssQ0FBQyxHQUM3QyxNQUFNLENBQUMsVUFBVSxHQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDO0NBQ3hCIiwiZmlsZSI6ImdldC1zY3JlZW4td2lkdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JlZW5XaWR0aCgpIHtcbiAgLy8gTm90ZSBhYm91dCBvcmllbnRhdGlvbjogb24gbW9iaWxlIGRldmljZXMsIGBzY3JlZW5gIG1lYXN1cmVtZW50cyBhcmVcbiAgLy8gYWx3YXlzIGJhc2VkIG9uIHRoZSBcIm5vcm1hbFwiIHBvcnRyYWl0IG9yaWVudGF0aW9uLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIHVzZSB0aGlzIHRvIGRlY2lkZSB3aGV0aGVyIHRvIHVzZSB0aGUgd2lkdGggb3IgaGVpZ2h0IHZhbHVlLlxuICByZXR1cm4gKCh3aW5kb3cub3JpZW50YXRpb24gfHwgMCkgLyA5MCkgJSAyID09PSAwXG4gICAgPyBzY3JlZW4uYXZhaWxXaWR0aFxuICAgIDogc2NyZWVuLmF2YWlsSGVpZ2h0O1xufVxuIl19