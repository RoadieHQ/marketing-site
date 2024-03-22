import React from 'react';

const TopBanner = ({ children }) => (
  <div className="Banner">
    <div className="Container">
      {children}
    </div>
  </div>
);

export default TopBanner;
