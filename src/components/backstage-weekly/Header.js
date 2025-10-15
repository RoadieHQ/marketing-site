import React from 'react';
import has from 'lodash/has';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Lead, Headline, Link } from 'components';
import { PubDate } from 'components/article';

const Author = ({ issue }) => {
  const { author } = issue;
  if (!author) return null;
  
  let avatar = null;
  if (has(author, 'avatar.gatsbyImageData')) {
    avatar = (
      <GatsbyImage
        image={author.avatar.gatsbyImageData}
        className="rounded-full mr-1"
        alt={author.avatar.description}
      />
    );
  }

  return (
    <span className="flex items-center">
      {avatar}
      <strong>{author.name}</strong>
    </span>
  );
};

const IssueLead = ({ issue }) => {
  const { lead } = issue;
  if (!lead) return null;

  return (
    <div className="mb-4">
      <Lead dangerouslySetInnerHTML={{ __html: lead.childMarkdownRemark.rawMarkdownBody }} />
    </div>
  );
};

const IssueNumber = ({ issue }) => {
  const { issueNumber } = issue;
  if (!issueNumber) return null;
  return (
    <span className="text-sm text-gray-600 uppercase">
      Backstage Weekly &middot; Issue {issueNumber}
    </span>
  );
};

const Header = ({ issue }) => {
  const { title, publishDate } = issue;

  return (
    <div className="mx-auto max-w-7xl border-solid border-b-2 pb-8">
      <div className="px-4 xl:px-0 mb-10">
        <Link to="/backstage-weekly/" className="font-bold text-blueroadie">
          <span className="text-orange-500">←</span> Backstage Weekly
        </Link>
      </div>

      <header className="px-4 xl:px-0">
        <div className="mb-2">
          <IssueNumber issue={issue} />
          <Headline size="medium">{title}</Headline>
        </div>

        <IssueLead issue={issue} />

        <div className="flex items-center">
          <span className="mr-2">
            <Author issue={issue} />
          </span>
          <span className="mr-2">
            &middot;
          </span>
          <span>
            <PubDate date={publishDate} />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
