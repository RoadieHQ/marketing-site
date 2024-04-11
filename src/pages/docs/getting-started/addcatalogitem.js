import React, { useState } from 'react';
import { CodeBlock, Headline, SitewideFooter } from 'components';
import classnames from 'classnames';
import Sidebar from 'components/doc/Sidebar';
import isEmpty from 'lodash/isEmpty';
import { graphql } from 'gatsby';

import DocsHeader from 'components/SitewideHeader/DocsHeader';

const Chip = ({ label, isActive }) => {
  const defaultClasses =
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2';

  let colorClasses;
  if (isActive) colorClasses = 'bg-primary-100 text-primary-800';
  if (!isActive) colorClasses = 'text-gray-800 border-2';

  return <span className={classnames(defaultClasses, colorClasses)}>{label}</span>;
};

const Sources = ({ sources }) => {
  const [typeFilter, setTypeFilter] = useState(sources[0].id);
  const [allKinds, setAllKinds] = useState(sources[0].frontmatter.examples);
  const [kindFilter, setKind] = useState(sources[0].frontmatter.examples[0].name);

  if (isEmpty(sources)) return null;

  const handleChange = (it) => {
    setTypeFilter(it.id);
    setAllKinds(it.frontmatter.examples);
  };

  return (
    <section className="sm:grid sm:grid-cols-3 sm:gap-6">
      <div>
        <div className="mb-6 mt-6">
          <span className="mr-4">Source</span>
          {sources.map((it) => {
            return (
              <button key={it.id} onClick={() => handleChange(it)}>
                <Chip label={it.frontmatter.humanName} isActive={typeFilter === it.id} />
              </button>
            );
          })}
        </div>

          <CodeBlock
            language='html'
            intro={sources.find((it) => it.id === typeFilter).html}
          />
      </div>
      <div>
        <div className="mb-6 mt-6">
          <span className="mr-4">Kind</span>
          {!isEmpty(allKinds) &&
            allKinds.map((k) => {
              return (
                <button key={k.name} onClick={() => setKind(k.name)}>
                  <Chip label={k.name} isActive={kindFilter === k.name} />
                </button>
              );
            })}
        </div>
        <div className="mb-6">
          <CodeBlock
            language={allKinds.find((kind) => kind.name === kindFilter).language}
            code={allKinds.find((kind) => kind.name === kindFilter).content}
          />
        </div>
      </div>
    </section>
  );
};

const AddCatalogItemPage = ({ data, location }) => {
  const sources = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <>
      <DocsHeader location={location} />
      <main className="md:flex pt-4 md:pt-0">
        <Sidebar location={location} />
        {!isEmpty(sources) && (
          <article className="px-2 md:px-6 md:pt-7 md:flex-1">
            <Headline size="small" className="mb-1 mt-0">
              Adding a catalog item
            </Headline>
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
