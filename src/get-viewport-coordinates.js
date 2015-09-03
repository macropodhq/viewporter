import getBodyOffset from './get-body-offset';
import getSignificantContainerMargins from './get-significant-container-margins';

export default function getViewportCoordinates() {
  // Returns the absolute coordinates of the current viewport, relative to the
  // body element
  const bodyOffset = getBodyOffset();

  const {
    right: marginRight,
    bottom: marginBottom,
  } = getSignificantContainerMargins();

  return {
    top: window.scrollY - bodyOffset.top,
    right: document.documentElement.scrollWidth - window.scrollX - bodyOffset.width - marginRight,
    bottom: document.documentElement.scrollHeight - window.scrollY - bodyOffset.height - marginBottom,
    left: window.scrollX - bodyOffset.left,
    height: window.innerHeight,
    width: window.innerWidth,
  };
}
