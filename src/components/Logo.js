import React from 'react';
import { Link } from 'components';
import { RoadieHandIcon, RoadieHandAndWordIcon } from 'components/icons';

export const Mark = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/">
      <span className="sr-only">Roadie</span>
      <RoadieHandIcon />
    </Link>
  </div>
);

export const MarkAndWord = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/">
      <span className="sr-only">Roadie</span>
      <RoadieHandAndWordIcon />
    </Link>
  </div>
);
