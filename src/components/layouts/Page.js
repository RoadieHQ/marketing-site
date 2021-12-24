import React from 'react';
import { SitewideHeader, SitewideFooter } from 'components';
import classnames from 'classnames';

const Page = ({ titleDivide = false, children }) => {

  return (
    <>
      <SitewideHeader />

      <div className="bg-white dark:bg-gray-900 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div
          className={classnames('relative max-w-lg mx-auto lg:max-w-7xl px-2 sm:px-6', {
            'divide-y-2 divide-gray-200': titleDivide,
          })}
        >
          {children}
        </div>
      </div>

      <SitewideFooter />
    </>
  );
};

export default Page;
