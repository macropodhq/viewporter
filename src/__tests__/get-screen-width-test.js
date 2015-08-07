jest.dontMock('../get-screen-width.js');

describe('getScreenWidth', function() {

  it('returns the correct screen width, given any orientation', function() {
    const getScreenWidth = require('../get-screen-width');

    window.orientation = 0;
    screen.availWidth = 320;
    screen.availHeight = 480;

    expect(getScreenWidth()).toBe(320);

    window.orientation = 90;

    expect(getScreenWidth()).toBe(480);

    window.orientation = 180;

    expect(getScreenWidth()).toBe(320);

    window.orientation = 270;

    expect(getScreenWidth()).toBe(480);
  });

});