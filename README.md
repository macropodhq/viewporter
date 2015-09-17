# Viewporter

Tools for working with all sorts of browser viewports.

## Demo

A simple demo combining `getViewportCoordinates` and `getMobileScaleFactor` is available at <https://macropodhq.github.io/viewporter/>.

## Tools Included

### `getBodyOffset`

Gets the absolute offset of the body, relative to the document.

Useful for adjusting absolute positions to suit different `body` positions.

### `getElementOffset`

Gets the absolute offset of an element passed to it, relative to the body.

Useful for adjusting absolute positions to suit different element positions.

### `getMobileScaleFactor`

Like `getScaleFactor`, but returns `1` on devices where `isDesktopSiteInMobileViewport` returns `false`.

(We use this in [Bugherd](https://macropod.com/bugherd) to scale our UI to fit mobile browsers when shown on desktop sites)

### `getScaleFactor`

Gets the scaling factor of the current browser. This function doesn't distinguish between a mobile browser's viewport and a desktop browser with developer tools or a sidebar. For desktop compatibility, use `getMobileScaleFactor`.

### `getScreenWidth`

Returns the normalised screen width, no matter the orientation of the device, in pixels.

### `getViewportCoordinates`

Gets the absolute offset of the current browser viewport, relative to the body.

### `isDesktopSiteInMobileViewport`

Tests if the screen size is greater than the inner width of the window. In these cases, it is assumed that the browser is a mobile browser.

## License

MIT (see LICENSE.md)
