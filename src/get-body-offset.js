import getElementOffset from './get-element-offset';

export default function getBodyOffset() {
  // Returns the coordinates of the body element relative to the document
  const {position: bodyPosition, marginTop: bodyMarginTop, marginLeft: bodyMarginLeft} = getComputedStyle(document.body);
  let {top, left, width, height} = getElementOffset(document.body);

  top -= (bodyPosition === 'static' ? parseFloat(bodyMarginTop) : 0);
  left -= (bodyPosition === 'static' ? parseFloat(bodyMarginLeft) : 0);

  return {
    top,
    left,
    width,
    height,
  };
}
