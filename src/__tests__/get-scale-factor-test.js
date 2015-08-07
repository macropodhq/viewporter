jest.dontMock('../get-scale-factor.js');
jest.dontMock('../get-screen-width.js');

describe('getScaleFactor', function() {

  it('uses `window.outerWidth` if non-zero', function() {
    const getScaleFactor = require('../get-scale-factor');

    window.orientation = 0;
    window.innerWidth = 768;
    window.outerWidth = 1280;
    screen.availWidth = 1440;

    expect(getScaleFactor()).toBe(0.6);
  });

  it('uses `getScreenWidth` if `window.outerWidth` is zero', function() {
    const getScaleFactor = require('../get-scale-factor');

    window.orientation = 0;
    window.innerWidth = 960;
    window.outerWidth = 0;
    screen.availWidth = 320;

    expect(getScaleFactor()).toBe(3);
  });

});
