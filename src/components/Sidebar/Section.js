import React from 'react';
import isArray from 'lodash/isArray';

import SidebarItem from './Item';
import ExpandableSidebarItem from './ExpandableSidebarItem';

export const SidebarSection = ({ children }) => <div className="mb-7 pl-3">{children}</div>;

export const SidebarSectionList = ({ title, location, items = [] }) => {
  const itemComponents = items.map((item) => {
    const [[text, path]] = Object.entries(item);

    if (isArray(path)) {
      return <ExpandableSidebarItem key={text} text={text} subItems={path} location={location} />;
    }

    return <SidebarItem key={path} text={text} to={path} className="pl-5" />;
  });

  return (
    <SidebarSection>
      {title && <strong className="pl-3">{title}</strong>}
      <ul className="p-0 list-none">{itemComponents}</ul>
    </SidebarSection>
  );
};
