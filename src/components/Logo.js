import React from 'react';
import { Link } from 'components';
import { RoadieHandAndWordIcon } from 'components/icons';

const Logo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/">
      <span className="sr-only">Roadie</span>
      <RoadieHandAndWordIcon height={32} width={123} />
    </Link>
  </div>
);

export default Logo;
