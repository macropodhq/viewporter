export default function getScreenWidth() {
  // Note about orientation: on mobile devices, `screen` measurements are
  // always based on the "normal" portrait orientation, so we need to
  // use this to decide whether to use the width or height value.
  return ((window.orientation || 0) / 90) % 2 === 0
    ? screen.availWidth
    : screen.availHeight;
}
