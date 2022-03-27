import React from 'react';
import { Headline, Lead } from 'components';

const ListHeader = ({ title, description }) => (
  <div>
    <Headline>{title}</Headline>
    <div className="mt-3 sm:mt-4">
      <Lead>{description}</Lead>
    </div>
  </div>
);

export default ListHeader;
