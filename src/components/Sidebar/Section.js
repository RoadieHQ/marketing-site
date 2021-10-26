import React from 'react';

export const SidebarSection = ({ children }) => (
  <div className="mb-7 pl-3">
    {children}
  </div>
);

export const SidebarSectionList = ({ title, children }) => (
  <SidebarSection>
    {title && <p>{title}</p>}
    <ul className="p-0 list-none">
      {children}
    </ul>
  </SidebarSection>
);
