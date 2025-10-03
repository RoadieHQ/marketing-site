import React from 'react';
import { Link } from 'components';
import { RoadieRacksIcon, RoadieRacksAndWordIcon } from 'components/icons';

const Logo = () => (
  <Link to="/">
    <span className="sr-only">Roadie</span>
    <span className="md:block hidden">
      <RoadieRacksAndWordIcon />
    </span>
    <span className="md:hidden">
      <RoadieRacksIcon />
    </span>
  </Link>
);

export default Logo;
