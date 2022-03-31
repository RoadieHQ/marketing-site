import React from 'react';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase';
import { Link, Chip } from 'components';

const Tags = ({ tags }) => {
  if (isEmpty(tags)) return null;

  return (
    <>
      {tags.map((tag) => {
        return (
          <Link to={`/tags/${kebabCase(tag)}/`} className="inline-block" key={tag}>
            <Chip label={tag.toLowerCase()} />
          </Link>
        );
      })}
    </>
  );
};

export default Tags;
