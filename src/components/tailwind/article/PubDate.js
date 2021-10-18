import React from 'react';
import format from 'date-fns/format';

const PubDate = ({ post, formatToken = 'MMMM do, yyyy' }) => (
  <time dateTime={post.frontmatter.date}>
    {format(Date.parse(post.frontmatter.date), formatToken)}
  </time>
);

export default PubDate;
