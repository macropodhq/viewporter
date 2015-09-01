"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getScreenWidth;

function getScreenWidth() {
  // Note about orientation: on mobile devices, `screen` measurements are
  // always based on the "normal" portrait orientation, so we need to
  // use this to decide whether to use the width or height value.
  return (window.orientation || 0) / 90 % 2 === 0 ? window.screen.availWidth : window.screen.availHeight;
}

module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtc2NyZWVuLXdpZHRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUF3QixjQUFjOztBQUF2QixTQUFTLGNBQWMsR0FBRzs7OztBQUl2QyxTQUFPLEFBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQSxHQUFJLEVBQUUsR0FBSSxDQUFDLEtBQUssQ0FBQyxHQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7Q0FDL0IiLCJmaWxlIjoiZ2V0LXNjcmVlbi13aWR0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcmVlbldpZHRoKCkge1xuICAvLyBOb3RlIGFib3V0IG9yaWVudGF0aW9uOiBvbiBtb2JpbGUgZGV2aWNlcywgYHNjcmVlbmAgbWVhc3VyZW1lbnRzIGFyZVxuICAvLyBhbHdheXMgYmFzZWQgb24gdGhlIFwibm9ybWFsXCIgcG9ydHJhaXQgb3JpZW50YXRpb24sIHNvIHdlIG5lZWQgdG9cbiAgLy8gdXNlIHRoaXMgdG8gZGVjaWRlIHdoZXRoZXIgdG8gdXNlIHRoZSB3aWR0aCBvciBoZWlnaHQgdmFsdWUuXG4gIHJldHVybiAoKHdpbmRvdy5vcmllbnRhdGlvbiB8fCAwKSAvIDkwKSAlIDIgPT09IDBcbiAgICA/IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aFxuICAgIDogd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodDtcbn1cbiJdfQ==