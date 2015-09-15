import getScreenWidth from './get-screen-width';

export default function getScaleFactor() {
  // `window.outerWidth` is `0` on iOS devices running iOS 8.0 and higher, and
  // astronomically large (read: also incorrect) on iOS devices running iOS 7.x
  // and below, so we'll use `screenWidth` instead in those cases.
  const outerWidth = Math.min(window.outerWidth || Infinity, getScreenWidth());

  return window.innerWidth / outerWidth;
}
