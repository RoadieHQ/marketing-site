import React from 'react';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'components';

const Tags = ({ tags }) => {
  if (isEmpty(tags)) return null;

  return (
    <>
      {tags.map((tag) => {
        return (
          <Link to={`/tags/${kebabCase(tag)}/`} className="inline-block" key={tag}>
            <span
              className="bg-primary-100 text-primary-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2"
            >
              {tag.toLowerCase()}
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default Tags;
