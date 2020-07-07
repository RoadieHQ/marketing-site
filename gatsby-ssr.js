const React = require('react');

const STYLE_RESET = { width: '100%', height: '100%', margin: 0 };

exports.onRenderBody = ({
  setHeadComponents,
  setBodyAttributes,
  setHtmlAttributes,
}) => {
  // Getting these into the head so the fonts start loading fast and we don't have a FoUC.
  setHeadComponents([
    <style key="font-face">
      {`
      @font-face: {
        font-family: 'Overpass',
        font-style: 'normal',
        font-display: 'swap',
        font-weight: 400,
        src: url(Overpass/Overpass-Regular.ttf),
      }
      `}
    </style>,
  ]);

  setBodyAttributes({
    style: STYLE_RESET,
  });

  setHtmlAttributes({
    style: STYLE_RESET,
  });
};
