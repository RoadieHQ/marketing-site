import React, { useState, Fragment, useEffect } from 'react';
import { CodeBlock, Headline, SitewideFooter, SEO } from 'components';
import classnames from 'classnames';
import Sidebar from 'components/doc/Sidebar';
import isEmpty from 'lodash/isEmpty';
import { graphql } from 'gatsby';
import Prism from 'prismjs';

import DocsHeader from 'components/SitewideHeader/DocsHeader';

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
      <section className='sm:grid md:grid-cols-1 sm:gap-6 lg:grid-cols-2 mt-4'>
        <div>
          <div className='mb-6'>
            {sources.map((it) => {
              return (
                <button key={it.id} onClick={() => handleChange(it)}>
                  <Chip label={it.frontmatter.humanName} isActive={typeFilter === it.id} />
                </button>
              );
            })}
          </div>
          <CodeBlock language='html' intro={sources.find((it) => it.id === typeFilter).html} />
        </div>
      </section>
  );
};

const ProxyPage = ({ data, location }) => {
  const sources = data.allMarkdownRemark.edges.map((edge) => edge.node).filter((item => item.frontmatter.category === 'proxy-type')).sort((item1, item2) => item1.frontmatter.order - item2.frontmatter.order);
  const header = data.allMarkdownRemark.edges.map((edge) => edge.node).find((item => item.frontmatter.category === 'header'));
  return (
    <>
      <DocsHeader location={location} />

      <SEO
        title={`Creating a Proxy`}
        description='This tutorial will guide you through the steps required to create a proxy in Roadie.'
      />

      <main className='md:flex pt-4 md:pt-0'>
        <Sidebar location={location} />
        {!isEmpty(sources) && (
          <article className='px-2 md:px-6 md:pt-7 md:flex-1'>
            <Headline size='small' className="mb-1 mt-0">
              {header.frontmatter.title}
            </Headline>

            <CodeBlock language='html' intro={header.html} />
            <Sources sources={sources} />
          </article>
        )}
      </main>
      <SitewideFooter />
    </>
  );
};

export default ProxyPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/.+/content/docs/getting-started/create-proxy/.+/" }
      }
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
