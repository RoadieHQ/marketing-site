import React from 'react';
import { Title } from 'components';

const Notes = ({ plugin }) => {
  if (!plugin.notes || plugin.notes === '') return null;
  return (
    <>
      <Title el="h2" className="xl:tracking-tight mb-6" id="things-to-know">
        {plugin.frontmatter.thingsToKnowTitle
          ? `${plugin.frontmatter.thingsToKnowTitle}`
          : 'Things to know'}
      </Title>

      <div
        className="prose prose-primary max-w-none"
        dangerouslySetInnerHTML={{ __html: plugin.notes }}
      />
    </>
  );
};

export default Notes;
