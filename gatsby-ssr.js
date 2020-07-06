const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
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
};
