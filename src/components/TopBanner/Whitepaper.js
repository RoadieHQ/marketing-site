import React from 'react';
import { Link } from 'components';

const WhitepaperVs = () => (
  <Link
    to="/whitepapers/managed-vs-self-hosted-backstage/"
    className="text-white font-bold underline-none hover:underline"
  >
    <span className="uppercase bg-white text-blueroadie px-2 rounded-full mr-2">Whitepaper</span>
    Self-hosting Backstage vs managed Backstage
  </Link>
);

export default WhitepaperVs;
