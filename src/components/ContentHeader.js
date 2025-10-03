import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Headline } from 'components';

import Byline from './Byline';
import Tags from './Tags';

const ContentHeader = ({ frontmatter, showLastValidated = true, dateKey }) => (
  <header>
    <Headline size="small" className="mb-1 mt-0">
      {frontmatter.title}
    </Headline>

    {!isEmpty(frontmatter.tags) && (
      <div className="mb-2">
        <Tags tags={frontmatter.tags} />
      </div>
    )}

    <Byline frontmatter={frontmatter} showLastValidated={showLastValidated} dateKey={dateKey} />
  </header>
);

export default ContentHeader;
