import React from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { Title } from 'components';
import { GravatarImage } from 'components/backstage/plugins';

const Maintainer = ({ name, email }) => {
  return (
    <li title={`Name: ${name}. Email: ${email}`}>
      <GravatarImage email={email} name={name} />
    </li>
  );
};

const MaintainersList = ({ packageData, packageDataLoadingState }) => {
  if (packageDataLoadingState === 'error') return null;
  if (isEmpty(packageData.maintainers)) return null;
  let inner;

  if (packageDataLoadingState === 'loaded') {
    inner = (
      <>
        <ul className="grid grid-cols-4 gap-3 pb-1 mb-2">
          {map(packageData.maintainers, ({ name, email }) => (
            <Maintainer name={name} email={email} key={email} />
          ))}
        </ul>
        <p className="italic text-gray-400">{packageData.maintainersHelpText}</p>
      </>
    );
  } else {
    inner = (
      <ul className="grid grid-cols-4 gap-3 pb-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-10">
      <div className="mb-4">
        <Title>Maintainers</Title>
      </div>

      <div>{inner}</div>
    </div>
  );
};

export default MaintainersList;
