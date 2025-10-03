import React, { useState, Fragment, useEffect } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, CodeBlock, Headline } from 'components';

import { ExamplesSidebar } from 'components/Sidebar/index';
import Sidebar from 'components/doc/Sidebar';
import DocsHeader from 'components/SitewideHeader/DocsHeader';

import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import Prism from 'prismjs';

const Chip = ({ label, isActive }) => {
  const defaultClasses =
    'inline-flex items-center px-3 py-0.5 border rounded-lg mr-1 mt-1 text-sm font-medium mr-2';

  let colorClasses;
  if (isActive) colorClasses = 'border-primary-800 bg-primary-100 text-primary-800';
  if (!isActive) colorClasses = 'text-gray-800';

  return <span className={classnames(defaultClasses, colorClasses)}>{label}</span>;
};

const Sources = ({ sources }) => {
  const [typeFilter, setTypeFilter] = useState(sources[0].id);

  useEffect(() => {
    Prism.highlightAll();
  });
  if (isEmpty(sources)) return null;

  const handleChange = (it) => {
    setTypeFilter(it.id);
  };

  return (
    <section className="mt-4">
      <div className="mb-4">
        {sources.map((it) => {
          return (
            <button key={it.id} onClick={() => handleChange(it)}>
              <Chip label={it.frontmatter.humanName} isActive={typeFilter === it.id} />
            </button>
          );
        })}
      </div>
      <div className="">
        <div className="mb-6">
          <CodeBlock
            language="html"
            intro={sources.find((it) => it.id === typeFilter).html}
            introClassNames="max-w-3xl"
          />
        </div>
      </div>
    </section>
  );
};

const ProxyPage = ({ data, location }) => {
  const sources = data.allMarkdownRemark.edges
    .map((edge) => edge.node)
    .filter((item) => item.frontmatter.category === 'proxy-type')
    .sort((item1, item2) => item1.frontmatter.order - item2.frontmatter.order);
  const examples = data.examplesList.edges.map((edge) => edge.node);
  const header = data.allMarkdownRemark.edges
    .map((edge) => edge.node)
    .find((item) => item.frontmatter.category === 'header');

  return (
    <>
      <DocsHeader location={location} />

      <SEO
        title={`Creating a Proxy`}
        description="This tutorial will guide you through the steps required to create a proxy in Roadie."
      />

      <main className="md:flex pt-4 md:pt-0">
        <Sidebar location={location} />

        {!isEmpty(sources) && (
          <article className="px-2 md:px-6 md:pt-7 md:flex-1">
            <Headline size="small" className="mb-1 mt-0">
              {header.frontmatter.title}
            </Headline>

            <CodeBlock language="html" intro={header.html} introClassNames="max-w-3xl" />

            <Sources sources={sources} />
          </article>
        )}

        <ExamplesSidebar examples={examples} />
      </main>
      <SitewideFooter maxWidth="full" />
    </>
  );
};

export default ProxyPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.+/content/docs/details/create-proxy/.+/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            humanName
            order
            category
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }

    examplesList: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.+/content/docs/details/create-proxy/examples/.+/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            humanName
            order
            category
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;
