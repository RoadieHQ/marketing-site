import React from 'react';
import { Button } from 'components';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Pagination = ({ pageContext, basePath = '/changelog/' }) => {
  const isFirst = pageContext.currentPage === 1;
  const isLast = pageContext.currentPage === pageContext.numPages;
  const prevPage =
    pageContext.currentPage === 2 ? basePath : `${basePath}${pageContext.currentPage - 1}/`;
  const nextPage = `${basePath}${pageContext.currentPage}/`;

  if (isFirst && isLast) return null;

  return (
    <nav className="mt-5 sm:flex sm:justify-center lg:justify-end md:mt-8">
      <span className="mr-2">
        {!isFirst && (
          <Button
            link={true}
            to={prevPage}
            color="secondary"
            text="More recent changes"
            prefixIcon={<ChevronLeftIcon className="h-6 w-6" />}
          />
        )}
      </span>

      <div className="mt-3 sm:mt-0 sm:ml-3">
        {!isLast && (
          <Button
            link={true}
            color="secondary"
            to={nextPage}
            text="Older changes"
            postfixIcon={<ChevronRightIcon className="h-6 w-6" />}
          />
        )}
      </div>
    </nav>
  );
};

export default Pagination;
