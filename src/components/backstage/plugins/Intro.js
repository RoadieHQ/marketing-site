import React from 'react';

const Intro = ({ plugin }) => {
  if (!plugin.frontmatter.intro) return null;
  return (
    <div
      className="mb-4 mt-0 prose prose-primary max-w-none"
      dangerouslySetInnerHTML={{ __html: plugin.frontmatter.intro }}
    />
  );
};

export default Intro;
