import React from 'react';
import { Link } from 'components/tailwind';
import { RoadieIcon } from 'components/tailwind/icons';

const Logo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/tailwind/">
      <span className="sr-only">Roadie</span>
      <RoadieIcon />
    </Link>
  </div>
);


export default Logo;
