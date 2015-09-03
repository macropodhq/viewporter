import getScaleFactor from './get-scale-factor';
import isDesktopSiteInMobileViewport from './is-desktop-site-in-mobile-viewport';

export default function getMobileScaleFactor() {
  if (!isDesktopSiteInMobileViewport()) {
    return 1;
  }

  return getScaleFactor();
}
