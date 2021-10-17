import React from 'react';

const DotPatternSvg = ({ width, height, className, id, ...rest }) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    viewBox={`0 0 ${width} ${height}`}
    {...rest}
  >
    <DotPatternDefs id={id} />
    <rect width={width} height={height} fill={`url(#${id})`} />
  </svg>
);

const DotPatternDefs = ({ id }) => (
  <defs>
    <pattern
      id={id}
      x={0}
      y={0}
      width={20}
      height={20}
      patternUnits="userSpaceOnUse"
    >
      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
    </pattern>
  </defs>
);

export default DotPatternSvg;
