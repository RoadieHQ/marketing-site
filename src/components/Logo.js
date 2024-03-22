import React from 'react';
import { Link } from 'components';
import { RoadieRacksAndWordIcon } from 'components/icons';

const Logo = () => (
  <Link to="/">
    <span className="sr-only">Roadie</span>
    <span>
      <RoadieRacksAndWordIcon />
    </span>
  </Link>
);


export default Logo;
