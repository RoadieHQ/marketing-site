import React from 'react';
import { Title, Link } from 'components';

const TableOfContents = ({ plugin, pageSections }) => {
  const listItems = Object.keys(pageSections).map((sectionName) => {
    const { key, existsKey, fragment, label } = pageSections[sectionName];

    if (!plugin[existsKey]) return null;

    return (
      <li key={key} className="list-disc underline">
        <Link to={`#${fragment}`}>{label}</Link>
      </li>
    );
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Table of Contents</Title>
      </div>

      <ul className="pl-6">{listItems}</ul>
    </div>
  );
};

export default TableOfContents;
