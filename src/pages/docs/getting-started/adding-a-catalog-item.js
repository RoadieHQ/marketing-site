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
  const [allExamples, setAllExamples] = useState(
    sources.find((item) => item.id === typeFilter).frontmatter.examples
  );
  const [kindFilter, setKind] = useState(sources[0].frontmatter.examples[0]?.name ?? []);
  const [displayedKindChips, setDisplayedKindChips] = useState(allExamples);

  useEffect(() => {
    Prism.highlightAll();
  });
  if (isEmpty(sources)) return null;

  const handleChange = (it) => {
    setTypeFilter(it.id);
    setAllExamples(it.frontmatter.examples);
    setKind(sources.find((item) => item.id === it.id).frontmatter?.examples[0]?.name ?? '');
    setDisplayedKindChips(sources.find((item) => item.id === it.id).frontmatter.examples);
  };

  return (
      <section className='sm:grid sm:grid-cols-2 sm:gap-6'>
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
        <div className='grid'>
          {allExamples && !isEmpty(allExamples) && (
            <div className='self-start sticky top-0'>
              <div className='mb-6'>
                {!isEmpty(allExamples) &&
                  displayedKindChips.map((k) => {
                    return (
                      <button key={k.name} onClick={() => setKind(k.name)}>
                        <Chip label={k.name} isActive={kindFilter === k.name} />
                      </button>
                    );
                  })}
              </div>
              <div className='mb-6'>
                <CodeBlock
                  language={allExamples.find((kind) => kind.name === kindFilter).language}
                  code={allExamples.find((kind) => kind.name === kindFilter).content}
                />
              </div>
            </div>
          )}
        </div>
      </section>
  );
};

const AddCatalogItemPage = ({ data, location }) => {
  const sources = data.allMarkdownRemark.edges.map((edge) => edge.node).sort((item1, item2) => item1.frontmatter.order - item2.frontmatter.order);
  return (
    <>
      <DocsHeader location={location} />

      <SEO
        title={`Adding a catalog item`}
        description='This tutorial will guide you through the steps required to connect Roadie to your Data source and import the items into the Roadie catalog.'
      />

      <main className='md:flex pt-4 md:pt-0'>
        <Sidebar location={location} />
        {!isEmpty(sources) && (
          <article className='px-2 md:px-6 md:pt-7 md:flex-1'>
            <Headline size='small' className="mb-1 mt-0">
              Adding a catalog item
            </Headline>
            <p className='mb-6 mt-6 text-gray-600'>Roadie allows various ways to import items into its catalog. Generally you will store entity files in a code repository and then provide Roadie with the URL of that file for it to be imported as a catalog entry. This tutorial will guide you through the steps required to connect Roadie to your Data source and import the items into the Roadie catalog.</p>
            <Sources sources={sources} />
          </article>
        )}
      </main>
      <SitewideFooter />
    </>
  );
};

export default AddCatalogItemPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/.+/content/docs/getting-started/adding-a-catalog-item/.+/" }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            humanName
            order
            examples {
              name
              language
              content
            }
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
