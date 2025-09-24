import React from 'react';

const Notes = ({ plugin: { notes } }) => {
  if (!notes?.childMarkdownRemark) return null;
  return (
    <div
      className="prose prose-primary max-w-none"
      dangerouslySetInnerHTML={{ __html: notes.childMarkdownRemark.html }}
    />
  );
};

export default Notes;
