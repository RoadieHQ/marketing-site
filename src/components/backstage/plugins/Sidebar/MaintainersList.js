import React from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { Title } from 'components';
import ContentLoader from 'react-content-loader';
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
      <ContentLoader
        speed={2}
        width={400}
        height={200}
        viewBox="0 0 400 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="35" cy="35" r="35" />
        <circle cx="130" cy="35" r="35" />
        <circle cx="230" cy="35" r="35" />
        <circle cx="330" cy="35" r="35" />
        <circle cx="35" cy="125" r="35" />
      </ContentLoader>
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
