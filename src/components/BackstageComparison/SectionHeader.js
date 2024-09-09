import React from 'react';
import { Lead, Headline } from 'components';

const SectionHeader = ({ headline = 'Roadie vs Backstage' }) => (
  <div className="sm:text-center">
    <Headline el="h2">{headline}</Headline>
    <div className="mt-5">
      <Lead>Developer effectiveness for teams of all shapes and sizes.</Lead>
    </div>
  </div>
);

export default SectionHeader;
