import getBodyOffset from './get-body-offset';

export default function getViewportCoordinates() {
  // Returns the absolute coordinates of the current viewport, relative to the
  // body element
  const bodyOffset = getBodyOffset();

  return {
    top: window.scrollY - bodyOffset.top,
    left: window.scrollX - bodyOffset.left,
    height: window.innerHeight,
    width: window.innerWidth,
  };
}
