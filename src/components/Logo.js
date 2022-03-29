import React from 'react';
import { Link } from 'components';
import { RoadieRIcon } from 'components/icons';

const Logo = () => (
  <Link to="/">
    <span className="sr-only">Roadie</span>
    <RoadieRIcon />
  </Link>
);


export default Logo;
