import React from 'react';
import isFunction from 'lodash/isFunction';

const OrderedList = ({ content }) => (
  <ol>
    {content.map((point) => (
      <li key={point} dangerouslySetInnerHTML={{ __html: isFunction(point) ? point() : point }} />
    ))}
  </ol>
);

export default OrderedList;
