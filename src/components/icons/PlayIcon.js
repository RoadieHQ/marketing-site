import React from 'react';

import theme from '../../theme';

const PlayIcon = () => (
  <svg fill="currentColor" viewBox="0 0 84 84">
    <circle opacity="0.8" cx={42} cy={42} r={42} fill={theme.COLORS_PRIMARY_500} />
    <path
      d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
      fill="white"
    />
  </svg>
);

export default PlayIcon;
