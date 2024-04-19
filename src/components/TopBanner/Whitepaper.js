import React from 'react';
import { Link } from 'components';

const WhitepaperVs = () => (
  <div className="Flex row ai-center jc-center gap-2">
    <span className="Badge size-2 indigo">Whitepaper</span>
    <span className='Text size-3'>Self-hosting Backstage vs managed Backstage</span>
    <Link
      to="/whitepapers/managed-vs-self-hosted-backstage/"
      className="Link"
    >
      <span className="Text size-3">Learn more</span>
    </Link>
  </div>
);

export default WhitepaperVs;
