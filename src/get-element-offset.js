export default function getElementOffset(element) {
  // Returns the coordinates of the target element relative to the document
  const clientRect = element.getBoundingClientRect();

  return {
    top: Math.round(clientRect.top + window.scrollY),
    left: Math.round(clientRect.left + window.scrollX),
    height: Math.round(clientRect.height),
    width: Math.round(clientRect.width),
  };
}
