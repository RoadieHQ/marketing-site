import React from 'react';

const Intro = ({ plugin: { introduction } }) => {
  if (!introduction) return null;
  return (
    <div
      className="mb-4 mt-0 prose prose-primary max-w-none"
      dangerouslySetInnerHTML={{ __html: introduction.childMarkdownRemark.html }}
    />
  );
};

export default Intro;
