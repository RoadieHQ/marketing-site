import React from 'react';
import { Link } from 'components';
import { RoadieRIcon } from 'components/icons';

const Logo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/">
      <span className="sr-only">Roadie</span>
      <RoadieRIcon />
    </Link>
  </div>
);


export default Logo;
