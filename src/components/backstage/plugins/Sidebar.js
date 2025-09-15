import React from 'react';
import { Title } from 'components';
import map from 'lodash/map';
import get from 'lodash/get';

const Sidebar = ({ npmData }) => {
  const firstPublished = get(npmData.time, 'created');
  const lastModified = get(npmData.time, 'modified');
  const latestVersionNumber = npmData['dist-tags'].latest;
  const latestVersionPublished = get(npmData.time, latestVersionNumber);

  return (
    <div className="bg-red-500">
      <Title>Details</Title>

      <div>
        <ul>
          <li>Name: <strong>{npmData.name}</strong></li>
          <li>License: <strong>{npmData.license}</strong></li>
          <li>First published: <strong>{firstPublished}</strong></li>
          <li>Latest version: <strong>{latestVersionNumber}</strong></li>
          <li>Latest version published: <strong>{latestVersionPublished}</strong></li>
        </ul>
      </div>

      <Title>Maintainers</Title>

      <div>
        <ul>
          {map(npmData.maintainers, ({ name, email }) => (
            <li key={email}>{name} <strong>{email}</strong></li>
          ))}
        </ul>
      </div>

      <Title>Versions</Title>

      <div>
        <ul>
          {map(npmData.time, (time, versionNumber) => (
            <li key={versionNumber}>{versionNumber} <strong>{time}</strong></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
