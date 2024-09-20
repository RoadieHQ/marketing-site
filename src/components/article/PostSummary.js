import React from 'react';
import { Tags } from 'components';
import get from 'lodash/get';
import classnames from 'classnames';
import has from 'lodash/has';

import Attribution from './Attribution';
import TitleAndDescription from './TitleAndDescription';

const EmptyCoverImage = (props) => <div {...props} />;

const CoverImage = ({ post }) => {
  const images = get(post, 'coverImage.gatsbyImageData.images');
  const className = 'h-48 w-full object-cover bg-gray-200';
  if (!images) return <EmptyCoverImage className={className} />;
  if (!has(images, 'fallback.src')) return <EmptyCoverImage className={className} />;

  return (
    <img
      className={className}
      srcSet={images.sources[0].srcSet}
      sizes={images.sources[0].sizes}
      src={images.fallback.src}
      alt={post.coverImage.title}
    />
  );
};

const PostSummary = ({ post, className }) => (
  <div
    className={classnames('flex flex-col rounded-lg shadow-lg overflow-hidden', className)}>
    <div className="flex-shrink-0 relative">
      <CoverImage post={post} />
    </div>

    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      {/* min-height ensures the content below the tags is aligned even when there are no tags */}
      <div className="min-h-[24px]">
        <Tags tags={post.frontmatter.tags} />
      </div>

      <div className="flex-1">
        <TitleAndDescription post={post} />
      </div>

      <div className="mt-6 flex items-center">
        <Attribution post={post} />
      </div>
    </div>
  </div>
);

export default PostSummary;
