import React from 'react';

import Attribution from './Attribution';
import ListItemHeader from './ListItemHeader';

const ListItem = ({ fields: { slug }, frontmatter: { logoImage, humanName, attribution } }) => {
  <div className="border-2 p-4 text-center" style={{ height: 350 }}>
    <ListItemHeader slug={slug} logoImage={logoImage} humanName={humanName} />
    <Attribution attribution={attribution} />
  </div>
};

export default ListItem;
