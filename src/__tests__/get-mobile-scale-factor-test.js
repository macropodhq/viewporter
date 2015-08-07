jest.dontMock('../get-mobile-scale-factor.js');
jest.dontMock('../get-scale-factor.js');
jest.dontMock('../get-screen-width.js');
jest.dontMock('../is-desktop-site-in-mobile-viewport.js');

describe('getMobileScaleFactor', function() {

  it('returns `1` if `isDesktopSiteInMobileViewport` is `false`', function() {
    const getMobileScaleFactor = require('../get-mobile-scale-factor');

    window.innerWidth = 960;
    window.orientation = 0;
    screen.availWidth = 960;

    expect(getMobileScaleFactor()).toBe(1);
  });

  it('returns the real `getScaleFactor` value if `isDesktopSiteInMobileViewport` is `true`', function() {
    const getMobileScaleFactor = require('../get-mobile-scale-factor');

    window.orientation = 0;
    window.innerWidth = 960;
    window.outerWidth = 0;
    screen.availWidth = 320;

    expect(getMobileScaleFactor()).toBe(3);
  });

});
