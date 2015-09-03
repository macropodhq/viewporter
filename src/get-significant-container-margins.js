export default function getSignificantContainerMargins() {
  const htmlElement = window.document.documentElement;
  const bodyElement = window.document.body;

  const margins = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  const {
    position: htmlPosition,
    marginTop: htmlMarginTop,
    marginRight: htmlMarginRight,
    marginBottom: htmlMarginBottom,
    marginLeft: htmlMarginLeft,
  } = getComputedStyle(htmlElement);

  const {
    position: bodyPosition,
    marginTop: bodyMarginTop,
    marginRight: bodyMarginRight,
    marginBottom: bodyMarginBottom,
    marginLeft: bodyMarginLeft,
  } = getComputedStyle(bodyElement);

  if (htmlPosition === 'static') {
    margins.top += parseFloat(htmlMarginTop) || 0;
    margins.right += parseFloat(htmlMarginRight) || 0;
    margins.bottom += parseFloat(htmlMarginBottom) || 0;
    margins.left += parseFloat(htmlMarginLeft) || 0;
  }

  if (bodyPosition === 'static') {
    margins.top += parseFloat(bodyMarginTop) || 0;
    margins.right += parseFloat(bodyMarginRight) || 0;
    margins.bottom += parseFloat(bodyMarginBottom) || 0;
    margins.left += parseFloat(bodyMarginLeft) || 0;
  }

  return margins;
}
