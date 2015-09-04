export default function getElementOffset(element) {
  // Returns the coordinates of the target element relative to the document
  const clientRect = element.getBoundingClientRect();

  return {
    top: Math.round(clientRect.top + window.scrollY),
    left: Math.round(clientRect.left + window.scrollX),
    width: Math.round(clientRect.width),
    height: Math.round(clientRect.height),
  };
}
