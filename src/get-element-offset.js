export default function getElementOffset(element) {
  // Returns the coordinates of the target element relative to the document
  const clientRect = element.getBoundingClientRect();

  return {
    top: clientRect.top + window.scrollY,
    right: clientRect.right - window.scrollX,
    bottom: clientRect.bottom - window.scrollY,
    left: clientRect.left + window.scrollX,
    width: clientRect.width,
    height: clientRect.height,
  };
}
