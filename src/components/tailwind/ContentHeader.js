import React from 'react';
import isEmpty from 'lodash/isEmpty';

import Byline from './Byline';
import Tags from './Tags';

const ContentHeader = ({ frontmatter, showLastValidated = true, dateKey }) => (
  <header className="mb-2">
    <h1 className="font-bold text-3xl text-gray-900 mb-2 mt-0 tracking-tight">
      {frontmatter.title}
    </h1>

    {!isEmpty(frontmatter.tags) && (
      <div className="b-2">
        <Tags tags={frontmatter.tags} />
      </div>
    )}

    <Byline
      frontmatter={frontmatter}
      showLastValidated={showLastValidated}
      dateKey={dateKey}
    />
  </header>
);

export default ContentHeader;
