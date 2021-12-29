import React from 'react';
import has from 'lodash/has';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CloudinaryImage } from 'components';

import PubDate from './PubDate';

const hasAvatar = (author) => (
  has(author, 'avatar.childImageSharp.gatsbyImageData')
);

const AuthorAvatar = ({ author }) => {
  if (!hasAvatar(author)) return null;

  let image;
  if (has(author.avatar, 'childImageSharp')) {
    image = (
      <GatsbyImage
        className="rounded-full"
        image={author.avatar.childImageSharp.gatsbyImageData}
        alt={`${author.name} headshot`}
      />
    );
  } else if (has(author.avatar, 'cloudinaryAsset')) {
    image = (
      <CloudinaryImage
        className="rounded-full"
        cloudinaryAsset={author.avatar.cloudinaryAsset}
        alt={`${author.name} headshot`}
      />
    );
  }

  return (
    <div className="flex-shrink-0 mr-3">
      <span className="sr-only">{author.name}</span>
      {image}
    </div>
  );
};

const AuthorName = ({ author }) => {
  if (!author) return null;

  return (
    <p className="text-sm font-medium text-gray-900">
      {author.name}
    </p>
  );
};

const ReadInfo = ({ post }) => {
  return (
    <div className="flex space-x-1 text-sm text-gray-500">
      <PubDate post={post} />
      <span aria-hidden="true">&middot;</span>
      <span>{post.timeToRead} min read</span>
    </div>
  );
};

const Attribution = ({ post }) => {
  return (
    <div className="mt-6 flex items-center">
      <AuthorAvatar author={post.frontmatter.author} />

      <div>
        <AuthorName author={post.frontmatter.author} />
        <ReadInfo post={post} />
      </div>
    </div>
  );
};

export default Attribution;
