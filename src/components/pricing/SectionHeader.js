import React from 'react';

const SectionHeader = ({ headline = 'Plans & Pricing' }) => (
  <div className="Flex column gap-3">
    <h1 className='Text size-9'>{headline}</h1>
    <p className='Text size-5 weight-1 lowContrast'>Developer effectiveness for teams of all sizes</p>
  </div>
);

export default SectionHeader;
