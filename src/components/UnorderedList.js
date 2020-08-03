import React from 'react';
import isFunction from 'lodash/isFunction';

const UnorderedList = ({ content }) => (
  <ul>
    {content.map((point) => (
      <li key={point} dangerouslySetInnerHTML={{ __html: isFunction(point) ? point() : point }} />
    ))}
  </ul>
);

export default UnorderedList;
