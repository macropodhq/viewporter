export function getScreenWidth() {
  // Note about orientation: on mobile devices, `screen` measurements are
  // always based on the "normal" portrait orientation, so we need to
  // use this to decide whether to use the width or height value.
  return ((window.orientation || 0) / 90) % 2 === 0
    ? screen.availWidth
    : screen.availHeight;
}

export function getScaleFactor() {
  // `window.outerWidth` is `0` on iOS devices, so we'll use `screenWidth`
  // instead.
  const outerWidth = window.outerWidth || getScreenWidth();

  return window.innerWidth / outerWidth;
}

export function getElementOffset(element) {
  const clientRect = element.getBoundingClientRect();

  // Returns the coordinates of the target element relative to the document
  return {
    top: Math.round(clientRect.top + window.scrollY),
    left: Math.round(clientRect.left + window.scrollX),
    width: Math.round(clientRect.width),
    height: Math.round(clientRect.height),
  };
}

export function getBodyOffset() {
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

export function getViewportCoordinates() {
  const bodyOffset = getBodyOffset();

  // Returns the absolute coordinates of the current viewport, relative to the
  // body element
  return {
    top: window.scrollY - bodyOffset.top,
    left: window.scrollX - bodyOffset.left,
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function isDesktopSiteInMobileViewport() {
  // If the width of the viewport is greater than the screen's width, this is
  // (more than likely) a desktop site shown in a scaled, mobile viewport.
  // This only ever incurs false-positives when zoomed in further than 1:1.
  // (TODO: improve algorithm to detect that?)
  return window.innerWidth > getScreenWidth();
}

export function getMobileScaleFactor() {
  if (!isDesktopSiteInMobileViewport()) {
    return 1;
  }

  return getScaleFactor();
}
