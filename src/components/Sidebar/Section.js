import React from 'react';
import isArray from 'lodash/isArray';

import SidebarItem from './Item';
import ExpandableSidebarItem from './ExpandableSidebarItem';

export const SidebarSection = ({ children }) => <div className="mb-7 pl-3">{children}</div>;

export const SidebarSectionList = ({ title, location, items = [] }) => {
  const itemComponents = items.map((item) => {
    const [[text, pathOrConfig]] = Object.entries(item);

    if (isArray(pathOrConfig)) {
      return <ExpandableSidebarItem key={text} text={text} subItems={pathOrConfig} location={location} />;
    }

    // Handle new object format: { linkTo: string, external?: boolean }
    if (typeof pathOrConfig === 'object' && pathOrConfig !== null && 'linkTo' in pathOrConfig) {
      const { linkTo, external = false } = pathOrConfig;
      return <SidebarItem key={linkTo} text={text} to={linkTo} external={external} className="pl-5" />;
    }

    // Handle old string format: direct path string
    return <SidebarItem key={pathOrConfig} text={text} to={pathOrConfig} className="pl-5" />;
  });

  return (
    <SidebarSection>
      {title && <strong className="pl-3">{title}</strong>}
      <ul className="p-0 list-none">{itemComponents}</ul>
    </SidebarSection>
  );
};
