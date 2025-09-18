import React, { useState, useEffect } from 'react';
import { Title, Link, Chip } from 'components';
import map from 'lodash/map';
import get from 'lodash/get';
import truncate from 'lodash/truncate';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { EditOnGitHubLink, } from 'components/backstage/plugins';

import { NpmIcon, RoadieRacksIcon, GitHubIcon } from 'components/icons';

const RoadieDocsChip = ({ availableOnRoadie, roadieDocsPath }) => {
  if (!availableOnRoadie) return null;

  const chip = (
    <Chip
      label="Available on Roadie"
      icon={<RoadieRacksIcon className="h-[1rem] w-[1rem] inline mr-1" />}
    />
  );

  if (!roadieDocsPath) return chip;
  return (
    <Link to={`/docs${roadieDocsPath}`} className="inline-block">
      {chip}
    </Link>
  );
};

const GitHubChip = ({ codeLocation }) => {
  if (!codeLocation) return null;

  const label = URL.parse(codeLocation).pathname.split('/')[2];

  return (
    <Link to={codeLocation} className="inline-block">
      <Chip
        label={label}
        color="black"
        icon={<GitHubIcon className="h-[1.2rem] w-[1.2rem] inline mr-1" />}
      />
    </Link>
  );
};

const NpmChip = ({ npmjsPackage }) => {
  if (!npmjsPackage) return null;

  return (
    <Link to={`https://npmjs.com/package/${npmjsPackage}`} className="inline-block">
      <Chip
        label={truncate(npmjsPackage, { length: 40 })}
        color="npm-red"
        icon={<NpmIcon className="h-[1.5rem] w-[1.5rem] inline mr-1" />}
      />
    </Link>
  );
};

const DetailsListItem = ({ label, value, title }) => {
  return (
    <li className="border-b border-gray-200 py-2 flex place-content-between" title={title}>
      <span>{label}</span> <strong>{value}</strong>
    </li>
  );
};

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

const Mainatainer = ({ name, email }) => {
  const [hashedEmail, setHashedEmail] = useState('');

  useEffect(() => {
    if (email) {
      sha256(email.trim().toLowerCase()).then(setHashedEmail);
    }
  }, [email]);

  return (
    <li>
      <div>
        <picture>
          <img
            src={`https://gravatar.com/avatar/${hashedEmail}?d=initials&r=g&name=${name}`}
            className="h-16 w-16 rounded-full"
            alt={`The Gravatar avatar of ${name}`}
            title={`Name: ${name}. Email: ${email}`}
          />
        </picture>
      </div>
    </li>
  );
};

const Sidebar = ({ plugin, npmData, siteMetadata }) => {
  const latestVersionPublished = get(npmData.time, npmData.latestVersion);

  return (
    <div>
      <div className="mb-10">
        <div className="mb-3">
          <Link to={`https://registry.npmjs.com/${npmData.name}`}>
            <span>Registry</span>
          </Link>
        </div>

        <div className="mb-3">
          <RoadieDocsChip
            availableOnRoadie={plugin.frontmatter.availableOnRoadie} 
            roadieDocsPath={plugin.frontmatter.roadieDocsPath}
          />
        </div>

        <div className="mb-3">
          <GitHubChip codeLocation={plugin.frontmatter.codeLocation} />
        </div>
        <NpmChip npmjsPackage={npmData.name} />
      </div>

      <div className="mb-10">
        <div className="mb-4">
          <Title>Plugin details</Title>
        </div>

        <div>
          <ul>
            <DetailsListItem label="Version" value={npmData.latestVersion} />
            <DetailsListItem
              label="Last published"
              value={`${formatDistanceToNow(Date.parse(latestVersionPublished))} ago`}
              title={latestVersionPublished}
            />
            <DetailsListItem
              label="First published"
              value={`${formatDistanceToNow(Date.parse(npmData.time.created))} ago`}
              title={npmData.time.created}
            />
            <DetailsListItem label="Number of versions" value={npmData.numberOfVersions} />
            <DetailsListItem label="License" value={npmData.license} />
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-4">
          <Title>Maintainers</Title>
        </div>

        <div>
          <ul className="grid grid-cols-4 gap-3 pb-1">
            {map(npmData.maintainers, ({ name, email }) => (
              <Mainatainer name={name} email={email} key={email} />
            ))}
          </ul>
            <p className="italic text-gray-400">
              {(npmData.numberOfMaintainers > npmData.maintainers.length) && (
                `...along with ${npmData.numberOfMaintainers - npmData.maintainers.length} others. `
              )}
              Maintainer images come from Gravatar.
            </p>
        </div>
      </div>

      <div>
        <p className="prose prose-primary my-10">
          Found a mistake on this page?{' '}
          <EditOnGitHubLink
            siteMetadata={siteMetadata}
            plugin={plugin}
            text="Open a pull request"
          />.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
