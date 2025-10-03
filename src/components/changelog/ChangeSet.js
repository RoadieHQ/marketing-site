import React, { useState } from 'react';
import classnames from 'classnames';
import format from 'date-fns/format';
import { TextLink as Link } from 'components';

const ReleasedAt = ({ releasedAt }) => (
  <time className="uppercase text-xs lg:text-sm leading-7 lg:pt-1 text-gray-500 font-bold md:w-32 lg:w-48 flex-shrink-0">
    {format(new Date(releasedAt), 'MMM d, yyyy')}
  </time>
);

const Title = ({ isCollapsible, toggleOpen, title, slug }) => {
  let className = 'tracking-tight text-gray-900 text-base sm:text-xl';

  if (isCollapsible) {
    className = className + ' hover:underline';
  }

  const heading = (
    <h3 className={className} id={slug}>
      {title}
    </h3>
  );

  if (!isCollapsible) return heading;

  return (
    <button onClick={toggleOpen} className="text-left">
      {heading}
    </button>
  );
};

const CollapsiblePart = ({ description, isOpen, isCollapsible, slug }) => {
  if (!description) return null;

  let className = 'mt-6 prose max-w-none';
  if (isCollapsible) {
    className = classnames(className, {
      'h-0 hidden': !isOpen,
    });
  }

  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{ __html: description.html }} />

      {isCollapsible && (
        <div>
          <Link to={`/changelog/${slug}`}>Permalink</Link>
        </div>
      )}
    </div>
  );
};

const Wrapper = ({ children, isCollapsible }) => {
  if (isCollapsible) {
    return (
      <>
        <hr className="w-full bg-gray-100 my-8" style={{ height: 1 }} />
        <li className="mt-6 list-reset lg:flex items-start">{children}</li>
      </>
    );
  }

  return children;
};

const ChangeSet = ({ releasedAt, description, title, isCollapsible = true, slug }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <Wrapper isCollapsible={isCollapsible}>
      <div className="md:flex">
        <ReleasedAt releasedAt={releasedAt} />
        <div>
          <Title toggleOpen={toggleOpen} title={title} slug={slug} isCollapsible={isCollapsible} />
          <CollapsiblePart
            description={description}
            isOpen={isOpen}
            slug={slug}
            isCollapsible={isCollapsible}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ChangeSet;
