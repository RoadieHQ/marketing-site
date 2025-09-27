import React from 'react';
import { Link, Title } from 'components';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import InboxInIcon from '@heroicons/react/outline/InboxInIcon';
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';

import Attribution from './Attribution';
import Logo from './Logo';

const FooterInner = ({
  npmData: {
    latestVersionPublishedTime,
  },
}) => {
  let latestVersionPublishedAgo;
  if (latestVersionPublishedTime) {
    latestVersionPublishedAgo = `${formatDistanceToNow(Date.parse(latestVersionPublishedTime))} ago`;
  }

  return (
    <>
      <div title={latestVersionPublishedTime}>
        <span>
          <InboxInIcon className="inline-block w-4 mr-1" />
        </span>
        <span>Updated </span>
        <span>{latestVersionPublishedAgo}</span>
      </div>

      <div>
        <span>
          <ChartBarIcon className="inline-block w-4 mr-1" />
        </span>
        <span>45 monthly downloads</span>
      </div>
    </>
  );
};

const ListItem = ({
  slug,
  logoImage,
  humanName,
  attributionText: text,
  attributionUrl: href,
  npmData,
  lead,
}) => {
  return (
    <div className="border-2 flex flex-col place-content-between" style={{ height: 240 }}>
      <div>
        <Link to={`/backstage/plugins/${slug}/`} className="underline-none capitalize">
          <div className="flex p-4 mb-2">
            <div className="mr-4">
              <Logo
                gatsbyImageData={logoImage.gatsbyImageData}
                alt={`${humanName} logo`}
                minHeight={80}
              />
            </div>
            <div className="pt-2">
              <Title>{humanName}</Title>
              <Attribution attribution={{ text, href }} />
            </div>
          </div>
        </Link>

        <p className="px-4 text-sm mb-4">{lead}</p>
      </div>

      <div className="px-2 pt-2 mb-2 flex place-content-between text-xs text-gray-500 border-t-2">
        <FooterInner npmData={npmData} />
      </div>
    </div>
  );
};

export default ListItem;
