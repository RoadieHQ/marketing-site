import React from 'react';
import classnames from 'classnames';

const HostingSwitcherButton = ({ currentlySetHosting, setHosting, hosting }) => {
  const sharedClassNames =
    'relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-600 focus:z-10 sm:w-auto sm:px-8';
  const activeClassNames = 'bg-white border-gray-200 shadow-sm text-gray-900';
  const inactiveClassNames = 'ml-0.5 border border-transparent text-gray-700';

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setHosting(hosting);
      }}
      className={classnames(sharedClassNames, {
        [activeClassNames]: currentlySetHosting === hosting,
        [inactiveClassNames]: currentlySetHosting !== hosting,
      })}
      id={`hosting-switcher-${hosting.toLowerCase()}`}
    >
      {hosting}
    </button>
  );
};

const HostingSwitcher = (props) => (
  <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
    <HostingSwitcherButton hosting="SaaS" {...props} />
    <HostingSwitcherButton hosting="On-prem" {...props} />
  </div>
);

export default HostingSwitcher;
