import React from 'react';
import { Link } from 'components';

const TitleAndDescription = ({ post }) => (
  <Link to={`/tailwind${post.fields.slug}`} className="block mt-4">
    <p className="text-xl font-semibold text-gray-900">{post.frontmatter.title}</p>
    <p className="mt-3 text-base text-gray-500">{post.frontmatter.description}</p>
  </Link>
);

export default TitleAndDescription;
