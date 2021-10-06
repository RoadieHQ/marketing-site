import React from 'react';
import { Link } from 'components';

export const LogoImg = ({ color = 'indigo-600', ...rest }) => (
  <img
    src={`https://tailwindui.com/img/logos/workflow-mark-${color}.svg`}
    alt="Workflow"
    {...rest}
  />
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
