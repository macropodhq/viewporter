import getScreenWidth from './get-screen-width';

export default function getScaleFactor() {
  var outerWidth = Math.min(getScreenWidth(), window.outerWidth || Infinity);

  return window.innerWidth / outerWidth;
}
