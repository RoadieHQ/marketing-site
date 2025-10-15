import React from 'react';

import { Title } from 'components';
import PAGE_SECTIONS from './pageSections';

const News = ({ issue }) => {
  const { body } = issue;
  if (!body) return null;

  return (
    <div className="mb-16 pb-16 border-solid border-b-2" id={PAGE_SECTIONS.NEWS.fragment}>
      <div className="mb-6">
        <Title>{PAGE_SECTIONS.NEWS.label}</Title>
      </div>
      <section
        className="prose prose-primary max-w-none"
        dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
      />
    </div>
  );
};

const BackstageChangelog = ({ issue }) => {
  const { backstageChangelog } = issue;
  if (!backstageChangelog) return null;

  return (
    <div
      className="mb-16 pb-16 border-solid border-b-2"
      id={PAGE_SECTIONS.BACKSTAGE_CHANGELOG.fragment}
    >
      <div className="mb-6">
        <div className="mb-1">
          <Title>{PAGE_SECTIONS.BACKSTAGE_CHANGELOG.label}</Title>
        </div>
        <p className="prose prose-primary max-w-none">
          A quick look at changes that have been merged into Backstage in the past week.
        </p>
      </div>

      <section
        className="prose prose-primary max-w-none"
        dangerouslySetInnerHTML={{ __html: backstageChangelog.childMarkdownRemark.html }}
      />
    </div>
  );
};

const EcosystemChangelog = ({ issue }) => {
  const { ecosystemChangelog } = issue;
  if (!ecosystemChangelog) return null;

  return (
    <div
      className="mb-16 pb-16 border-solid border-b-2"
      id={PAGE_SECTIONS.ECOSYSTEM_CHANGELOG.fragment}
    >
      <div className="mb-6">
        <div className="mb-1">
          <Title>{PAGE_SECTIONS.ECOSYSTEM_CHANGELOG.label}</Title>
        </div>
        <p className="prose prose-primary max-w-none">
          Learn which plugins have received new features, bugfixes and breaking changes in the past week.
        </p>
      </div>
      <section
        className="prose prose-primary max-w-none"
        dangerouslySetInnerHTML={{ __html: ecosystemChangelog.childMarkdownRemark.html }}
      />
    </div>
  );
};

const Body = ({ issue }) => {
  return (
    <>
      <News issue={issue} />
      <BackstageChangelog issue={issue} />
      <EcosystemChangelog issue={issue} />
    </>
  );
};

export default Body;
