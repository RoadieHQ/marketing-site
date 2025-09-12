import React from 'react';

const Intro = ({ plugin }) => {
  if (!plugin.frontmatter.intro) return null;
  return (
    <div
      className="mb-4 mt-0 text-lg plugin-intro"
      dangerouslySetInnerHTML={{ __html: plugin.frontmatter.intro }}
    />
  );
};

export default Intro;
