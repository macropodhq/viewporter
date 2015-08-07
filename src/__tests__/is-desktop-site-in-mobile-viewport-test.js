jest.dontMock('../get-screen-width.js');
jest.dontMock('../is-desktop-site-in-mobile-viewport.js');

describe('isDesktopSiteInMobileViewport', function() {

  it('returns true if the `innerWidth` is greater than `getScreenWidth()`', function() {
    const isDesktopSiteInMobileViewport = require('../is-desktop-site-in-mobile-viewport');

    window.innerWidth = 960;
    window.orientation = 0;
    screen.availWidth = 320;

    expect(isDesktopSiteInMobileViewport()).toBe(true);
  });

  it('returns false if the `innerWidth` is equal to or less than `getScreenWidth()`', function() {
    const isDesktopSiteInMobileViewport = require('../is-desktop-site-in-mobile-viewport');

    window.innerWidth = 960;
    window.orientation = 0;
    screen.availWidth = 960;

    expect(isDesktopSiteInMobileViewport()).toBe(false);

    screen.availWidth = 1440;

    expect(isDesktopSiteInMobileViewport()).toBe(false);
  });

});