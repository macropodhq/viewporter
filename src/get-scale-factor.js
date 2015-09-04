import getScreenWidth from './get-screen-width';

export default function getScaleFactor() {
  // `window.outerWidth` is `0` on iOS devices, so we'll use `screenWidth`
  // instead.
  const outerWidth = window.outerWidth || getScreenWidth();

  return window.innerWidth / outerWidth;
}
