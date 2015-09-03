import getElementOffset from './get-element-offset';
import getSignificantContainerMargins from './get-significant-container-margins';

export default function getBodyOffset() {
  // Returns the coordinates of the body element relative to the document
  const {
    top: htmlTop,
    right: htmlRight,
    bottom: htmlBottom,
    left: htmlLeft,
  } = getElementOffset(window.document.documentElement);

  const {
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
  } = getSignificantContainerMargins();

  let {
    top,
    right,
    bottom,
    left,
    width,
    height,
  } = getElementOffset(window.document.body);

  top -= htmlTop + marginTop;
  right -= htmlRight + marginRight;
  bottom -= htmlBottom + marginBottom;
  left -= htmlLeft + marginLeft;

  return {
    top,
    right,
    bottom,
    left,
    width,
    height,
  };
}
