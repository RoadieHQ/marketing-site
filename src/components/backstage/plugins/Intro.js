import React from 'react';

const Intro = ({ plugin: { intro } }) => {
  if (!intro) return null;
  return (
    <div
      className="mb-4 mt-0 prose prose-primary max-w-none"
      dangerouslySetInnerHTML={{ __html: intro.childMarkdownRemark.html }}
    />
  );
};

export default Intro;
