import React from 'react';
import { Link } from 'components';

const StateOfBackstage = () => (
  <Link
    to="http://stateofbackstage.io"
    className="text-white font-bold underline-none hover:underline"
  >
    Fill out the <span className="underline">State of Backstage survey</span> for a chance to win tickets to{' '}
    <span className="uppercase bg-white text-blueroadie px-2 rounded-full mr-2">KUBECON EU 2025</span>
  </Link>
);

export default StateOfBackstage;
