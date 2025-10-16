import React from 'react';
import { Link, Title } from 'components';

const SidebarTableOfContents = ({ content, pageSections, title = 'Table of Contents' }) => {
  const sectionsWithContent = Object.keys(pageSections).map((sectionName) => {
    const { key, existsKey, fragment, label } = pageSections[sectionName];
    if (!content[existsKey]) return null;
    return { key, existsKey, fragment, label };
  }).filter(Boolean);

  // There's no need for a table of contents if there's only one item in it.
  if (sectionsWithContent.length <= 1) {
    return null;
  }

  const listItems = sectionsWithContent.map(({ key, fragment, label }) => (
    <li key={key} className="underline">
      <Link to={`#${fragment}`}>{label}</Link>
    </li>
  ));

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>{title}</Title>
      </div>

      <ul className="pl-6">{listItems}</ul>
    </div>
  );
};

export default SidebarTableOfContents;
