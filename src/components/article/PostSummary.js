import React from 'react';
import { Tags } from 'components';

import Attribution from './Attribution';
import TitleAndDescription from './TitleAndDescription';

const PostSummary = ({ post, className }) => {
  return (
    <div className={className}>
      <div>
        <Tags tags={post.frontmatter.tags} />
      </div>
      <TitleAndDescription post={post} />
      <Attribution post={post} />
    </div>
  );
};

export default PostSummary;
