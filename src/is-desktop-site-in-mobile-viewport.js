import getScreenWidth from './get-screen-width';

export default function isDesktopSiteInMobileViewport() {
  // If the width of the viewport is greater than the screen's width, this is
  // (more than likely) a desktop site shown in a scaled, mobile viewport.
  // This only ever incurs false-positives when zoomed in further than 1:1.
  // (TODO: improve algorithm to detect that?)
  return window.innerWidth > getScreenWidth();
}
