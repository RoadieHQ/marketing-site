import React from 'react';
import { Link } from 'components';

import RoadieHand from '../../../content/assets/logos/roadie/hand.inline.svg';

export const LogoImg = (props) => (
  <RoadieHand {...props} />
);

const Logo = ({ color = 'indigo-600' }) => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/tailwind/">
      <span className="sr-only">Workflow</span>
      <LogoImg color={color} className="h-8 w-auto sm:h-10" />
    </Link>
  </div>
);


export default Logo;
