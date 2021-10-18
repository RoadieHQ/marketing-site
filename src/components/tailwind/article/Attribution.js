import React from 'react';
import has from 'lodash/has';
import format from 'date-fns/format';
import { GatsbyImage } from 'gatsby-plugin-image';

const hasAvatar = (author) => (
  has(author, 'avatar.childImageSharp.gatsbyImageData')
);

const AuthorAvatar = ({ author }) => {
  if (!hasAvatar(author)) return null;

  return (
    <div className="flex-shrink-0 mr-3">
      <span className="sr-only">{author.name}</span>
      <GatsbyImage
        className="rounded-full"
        image={author.avatar.childImageSharp.gatsbyImageData}
        alt={`${author.name} headshot`}
      />
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
  const FORMAT_TOKEN = 'MMMM do, yyyy';

  return (
    <div className="flex space-x-1 text-sm text-gray-500">
      <time dateTime={post.frontmatter.date}>
        {format(Date.parse(post.frontmatter.date), FORMAT_TOKEN)}
      </time>

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
