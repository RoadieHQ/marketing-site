import React, { useState, Fragment, useEffect } from 'react';
import { CodeBlock, Headline, SitewideFooter } from 'components';
import classnames from 'classnames';
import { Popover, Transition } from '@headlessui/react';
import Sidebar from 'components/doc/Sidebar';
import isEmpty from 'lodash/isEmpty';
import { graphql } from 'gatsby';
import Prism from 'prismjs';

import DocsHeader from 'components/SitewideHeader/DocsHeader';

const Chip = ({ label, isActive }) => {
  const defaultClasses =
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2';

  let colorClasses;
  if (isActive) colorClasses = 'bg-primary-100 text-primary-800';
  if (!isActive) colorClasses = 'text-gray-800 border-2';

  return <span className={classnames('capitalize', defaultClasses, colorClasses)}>{label}</span>;
};

const ShowMore = ({ item, itemName, onClick, sources }) => {
  return (
    <button onClick={() => onClick(item, sources)}>
      <Chip label={itemName} />
    </button>
  );
};

const DefaultChip = ({ displayedChips, onClick, typeFilter, sources }) => {
  const defaultClasses =
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2';

  if (isEmpty(displayedChips)) return null;

  return (
    <>
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button className={classnames(defaultClasses, 'text-gray-800 border-2')}>
              <span>Show more</span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen sm:max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-4 sm:p-4">
                    {displayedChips.map((item) => (
                      <ShowMore
                        item={item}
                        itemName={item.frontmatter.humanName}
                        sources={sources}
                        key={item.name}
                        typeFilter={typeFilter}
                        onClick={onClick}
                      />
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

const DefaultKindChip = ({ displayedChips, onClick, typeFilter, sources }) => {
  const defaultClasses =
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2';

  if (isEmpty(displayedChips)) return null;

  return (
    <>
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button className={classnames(defaultClasses, 'text-gray-800 border-2')}>
              <span>Show more</span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen sm:max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-4 sm:p-4">
                    {displayedChips.map((item) => (
                      <ShowMore
                        item={item}
                        itemName={item.name}
                        sources={sources}
                        key={item.name}
                        typeFilter={typeFilter}
                        onClick={onClick}
                      />
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

const Sources = ({ sources }) => {
  const [typeFilter, setTypeFilter] = useState(sources[0].id);
  const [allKinds, setAllKinds] = useState(
    sources.find((item) => item.id === typeFilter).frontmatter.examples
  );
  const [kindFilter, setKind] = useState(sources[0].frontmatter.examples[0].name);
  const [showAllChips, setShowAllChips] = useState(false);

  const [displayedChips, setDisplayedChips] = useState(sources.slice(0, 4));
  const [hiddenChips, setHiddenChips] = useState(sources.slice(5, sources.length));

  const [displayedKindChips, setDisplayedKindChips] = useState(allKinds.slice(0, 4));

  const [hiddenKindChips, setHiddenKindChips] = useState(allKinds.slice(5, allKinds.length));
  useEffect(() => {
    Prism.highlightAll();
  });
  if (isEmpty(sources)) return null;

  const handleChange = (it) => {
    setTypeFilter(it.id);
    setAllKinds(it.frontmatter.examples);
    setKind(sources.find((item) => item.id === it.id).frontmatter.examples[0].name);
    setDisplayedKindChips(
      sources.find((item) => item.id === it.id).frontmatter.examples.slice(0, 4)
    );
    setHiddenKindChips(
      sources
        .find((item) => item.id === it.id)
        .frontmatter.examples.slice(
          5,
          sources.find((item) => item.id === it.id).frontmatter.examples.length
        )
    );
  };

  const handleShowMoreClick = () => {
    setShowAllChips(!showAllChips);
  };

  const handleItemClick = (
    item,
    displayedChips,
    hiddenChips,
    setDisplayedChips,
    setHiddenChips,
    extraAction
  ) => {
    const index = hiddenChips.indexOf(item);

    // Make a copy of displayedChips and hiddenChips arrays
    const newDisplayedChips = [...displayedChips];
    const newHiddenChips = [...hiddenChips];

    // Remove the selected item from newHiddenChips
    newHiddenChips.splice(index, 1);

    // Push the last item to newHiddenChips
    newHiddenChips.push(newDisplayedChips.pop());

    // Push the selected item to newDisplayedChips
    newDisplayedChips.push(hiddenChips[index]);

    // // Update state with the new arrays
    setDisplayedChips(newDisplayedChips);
    setHiddenChips(newHiddenChips);

    if (extraAction) {
      extraAction(item);
    }

    setShowAllChips(false);
  };

  const handleShowItemClick = (item) => {
    handleItemClick(
      item,
      displayedChips,
      hiddenChips,
      setDisplayedChips,
      setHiddenChips,
      handleChange
    );
  };

  const handleShowKindClick = (item) => {
    handleItemClick(
      item,
      displayedKindChips,
      hiddenKindChips,
      setDisplayedKindChips,
      setHiddenKindChips,
      (item) => setKind(item.name)
    );
  };

  return (
    <section className="sm:grid sm:grid-cols-2 sm:gap-6">
      <div>
        <div className="mb-6 mt-6">
          <span className="mr-4">Source: </span>
          {displayedChips.map((it) => {
            return (
              <button key={it.id} onClick={() => handleChange(it)}>
                <Chip label={it.frontmatter.humanName} isActive={typeFilter === it.id} />
              </button>
            );
          })}
          {sources.length > 5 && (
            <button className="show-more" onClick={handleShowMoreClick}>
              <DefaultChip
                displayedChips={hiddenChips}
                onClick={handleShowItemClick}
                typeFilter={typeFilter}
                sources={sources}
              />
            </button>
          )}
        </div>
        <CodeBlock language="html" intro={sources.find((it) => it.id === typeFilter).html} />
      </div>
      <div>
        <div className="mb-6 mt-6">
          <span className="mr-4">Kind: </span>
          {!isEmpty(allKinds) &&
            displayedKindChips.map((k) => {
              return (
                <button key={k.name} onClick={() => setKind(k.name)}>
                  <Chip label={k.name} isActive={kindFilter === k.name} />
                </button>
              );
            })}
          {allKinds.length > 5 && (
            <button className="show-more" onClick={handleShowMoreClick}>
              <DefaultKindChip
                displayedChips={hiddenKindChips}
                onClick={handleShowKindClick}
                typeFilter={typeFilter}
                sources={allKinds}
              />
            </button>
          )}
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
