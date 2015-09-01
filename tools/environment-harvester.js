/* Environment Harvester                                                 *
 * Use this code to output a JSON representation of a browser viewport's *
 * state, for use in mocks and testing.                                  */

var bodyRect = window.document.body.getBoundingClientRect();
var bodyStyle = getComputedStyle(window.document.body);
var documentRect = window.document.documentElement.getBoundingClientRect();
var documentStyle = getComputedStyle(window.document.documentElement);

JSON.stringify({
  window: {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    orientation: window.orientation,
    outerWidth: window.outerWidth,
    screen: {
      availHeight: window.screen.availHeight,
      availWidth: window.screen.availWidth,
    },
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  },
  bodyRect: {
    bottom: bodyRect.bottom,
    height: bodyRect.height,
    left: bodyRect.left,
    right: bodyRect.right,
    top: bodyRect.top,
    width: bodyRect.width,
  },
  bodyStyle: {
    position: bodyStyle.position,
    marginTop: bodyStyle.marginTop,
    marginLeft: bodyStyle.marginLeft,
  },
  documentRect: {
    bottom: documentRect.bottom,
    height: documentRect.height,
    left: documentRect.left,
    right: documentRect.right,
    top: documentRect.top,
    width: documentRect.width,
  },
  documentStyle: {
    position: documentStyle.position,
    marginTop: documentStyle.marginTop,
    marginLeft: documentStyle.marginLeft,
  },
});
