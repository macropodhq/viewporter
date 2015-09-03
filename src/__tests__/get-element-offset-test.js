jest.dontMock('../get-element-offset.js');

describe('getElementOffset', function() {

  it('should return correct coordinates from an element on a desktop browser', function() {
    const getElementOffset = require('../get-element-offset');

    window.scrollY = 57;
    window.scrollX = 5;

    const offset = getElementOffset({
      getBoundingClientRect() {
        return {
          top: 153,
          right: 624.5,
          bottom: 771.640625,
          left: 36.5,
          width: 588,
          height: 618.640625,
        };
      }
    });

    expect(offset.top).toBe(210);
    expect(offset.right).toBe(619.5);
    expect(offset.left).toBe(41.5);
    expect(offset.bottom).toBe(714.640625);
    expect(offset.width).toBe(588);
    expect(offset.height).toBe(618.640625);
  });

  it('should return correct coordinates from an element on a mobile browser', function() {
    const getElementOffset = require('../get-element-offset');

    window.scrollY = 38;
    window.scrollX = 0;

    const offset = getElementOffset({
      getBoundingClientRect() {
        return {
          top: 74,
          right: 347,
          bottom: 683.140625,
          left: 28,
          width: 319,
          height: 609.140625,
        };
      }
    });

    expect(offset.top).toBe(112);
    expect(offset.right).toBe(347);
    expect(offset.left).toBe(28);
    expect(offset.bottom).toBe(645.140625);
    expect(offset.width).toBe(319);
    expect(offset.height).toBe(609.140625);
  });

});
