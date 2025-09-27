import React from 'react';
import { Link, Title } from 'components';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import InboxInIcon from '@heroicons/react/outline/InboxInIcon';
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
import ContentLoader from 'react-content-loader';

import Attribution from './Attribution';
import Logo from './Logo';

const FooterInner = ({
  npmData: {
    latestVersionPublishedTime,
  },
  npmDataLoadingState,
}) => {
  if (npmDataLoadingState === 'error') return null;
  let latestVersionPublishedAgo;
  if (latestVersionPublishedTime) {
    latestVersionPublishedAgo = `${formatDistanceToNow(Date.parse(latestVersionPublishedTime))} ago`;
  }

  if (npmDataLoadingState === 'loaded') {
    return (
      <div className="flex place-content-between text-xs text-gray-500">
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
      </div>
    );
  } else {
    return (
      <ContentLoader 
        speed={2}
        className="w-full"
        height={20}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="150" height="20" /> 
        <rect x="230" y="0" rx="3" ry="3" width="300" height="20" /> 
      </ContentLoader>
    );
  }
};

const ListItem = ({
  slug,
  logoImage,
  humanName,
  attributionText: text,
  attributionUrl: href,
  npmData,
  lead,
  npmDataLoadingState,
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

      <div className="px-2 pt-2 mb-2 border-t-2">
        <FooterInner npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
      </div>
    </div>
  );
};

export default ListItem;
