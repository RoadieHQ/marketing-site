import React from 'react';
import { Headline, Lead } from 'components';

const SimpleCenteredHeading = ({ headline, lead, headlineSize = 'large', headlineEl = 'h2' }) => (
  <div className="max-w-4xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="mt-1">
        <Headline size={headlineSize} el={headlineEl}>
          {headline}
        </Headline>
      </div>
      <div className="mt-5">
        <Lead>{lead}</Lead>
      </div>
    </div>
  </div>
);

export default SimpleCenteredHeading;
