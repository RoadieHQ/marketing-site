import React from 'react';
import { Headline, Link } from 'components';

const Header = ({ action }) => (
  <div className="mx-auto max-w-7xl">
    <div className="px-4 xl:px-0 mb-10">
      <Link to="/backstage/scaffolder-actions/" className="font-bold text-blueroadie">
        <span className="text-orange-500">←</span> Backstage Scaffolder Actions
      </Link>
    </div>

    <header className="px-4 xl:px-0 mb-10">
      <Headline size="small">{action.actionId}</Headline>
    </header>
  </div>
);

export default Header;
