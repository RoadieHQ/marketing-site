import React from 'react';
import { Title } from 'components';
import map from 'lodash/map';
import get from 'lodash/get';

const Sidebar = ({ npmData }) => {
  const latestVersionPublished = get(npmData.time, npmData.latestVersion);

  return (
    <div className="bg-red-500">
      <Title>Details</Title>

      <div>
        <ul>
          <li>Name: <strong>{npmData.name}</strong></li>
          <li>License: <strong>{npmData.license}</strong></li>
          <li>First published: <strong>{npmData.time.created}</strong></li>
          <li>Latest version: <strong>{npmData.latestVersion}</strong></li>
          <li>Latest version published: <strong>{latestVersionPublished}</strong></li>
          <li>Total versions: <strong>{npmData.numberOfVersions}</strong></li>
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
    </div>
  );
};

export default Sidebar;
