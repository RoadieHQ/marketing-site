import React from 'react';
import { Link } from 'components';
import { RoadieWordIcon, RoadieRIcon } from 'components/icons';

const Logo = () => (
  <Link to="/">
    <span className="sr-only">Roadie</span>
    <span className="md:block hidden">
      <RoadieWordIcon />
    </span>
    <span className="md:hidden">
      <RoadieRIcon />
    </span>
  </Link>
);


export default Logo;
