import React from 'react';

const SimpleCenteredHeading = ({
  headline,
  lead,
}) => (
  <div className="">
    <div className="">
      <div>
        <h2 className='Text size-7'>{headline}</h2>
      </div>
      <div>
        <p className='Text size-4 lowContrast'>{lead}</p>
      </div>
    </div>
  </div>
);

export default SimpleCenteredHeading;
