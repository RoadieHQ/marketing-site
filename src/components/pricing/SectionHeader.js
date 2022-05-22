import React from 'react';
import { Lead, Headline } from 'components';

const SectionHeader = ({ headline = 'Plans & Pricing' }) => (
  <div className="sm:text-center">
    <Headline el="h2">{headline}</Headline>
    <div className="mt-5">
      <Lead>Developer effectiveness for teams of all sizes</Lead>
    </div>
  </div>
);

export default SectionHeader;
