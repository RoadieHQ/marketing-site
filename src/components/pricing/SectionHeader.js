import React from 'react';
import { Lead, Headline } from 'components';

const SectionHeader = () => (
  <div className="text-center">
    <Headline el="h2">Plans & Pricing</Headline>
    <div className="mt-5">
      <Lead>Developer effectiveness for teams of all sizes</Lead>
    </div>
  </div>
);

export default SectionHeader;
