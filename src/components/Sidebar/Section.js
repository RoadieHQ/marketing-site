import React from 'react';

import SidebarItem from './Item';

export const SidebarSection = ({ children }) => (
  <div className="mb-7 pl-3">
    {children}
  </div>
);

export const SidebarSectionList = ({ title, items = [] }) => {
  const itemComponents = items.map((item) => {
    const [[text, path]] = Object.entries(item);
    return <SidebarItem key={path} text={text} to={path} />;
  });

  return (
    <SidebarSection>
      {title && <strong className="pl-3">{title}</strong>}
      <ul className="p-0 list-none">
        {itemComponents}
      </ul>
    </SidebarSection>
  );
};
