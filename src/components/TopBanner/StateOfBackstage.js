import React from 'react';
import { Link } from 'components';

const StateOfBackstage = () => (
  <Link
    to="https://stateofbackstage.io"
    className="text-white font-bold underline-none hover:underline"
  >
    Last chance to fill out the 2025 <span className="underline">State of Backstage survey</span>
  </Link>
);

export default StateOfBackstage;
