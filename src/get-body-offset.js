import getElementOffset from './get-element-offset';

export default function getBodyOffset() {
  // Returns the coordinates of the body element relative to the document
  const {position: bodyPosition, marginTop: bodyMarginTop, marginLeft: bodyMarginLeft} = getComputedStyle(window.document.body);
  let {top, right, bottom, left, width, height} = getElementOffset(window.document.body);

  top -= (bodyPosition === 'static' ? parseFloat(bodyMarginTop) : 0);
  left -= (bodyPosition === 'static' ? parseFloat(bodyMarginLeft) : 0);

  return {
    top,
    right,
    bottom,
    left,
    width,
    height,
  };
}
