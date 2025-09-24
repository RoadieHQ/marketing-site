import React from 'react';

import Attribution from './Attribution';
import ListItemHeader from './ListItemHeader';

const ListItem = ({
  slug,
  logoImage,
  humanName,
  attributionText: text,
  attributionUrl: href,
}) => (
  <div className="border-2 py-4 px-12 text-center" style={{ height: 350 }}>
    <ListItemHeader slug={slug} logoImage={logoImage} humanName={humanName} />
    <Attribution attribution={{ text, href }} />
  </div>
);

export default ListItem;
