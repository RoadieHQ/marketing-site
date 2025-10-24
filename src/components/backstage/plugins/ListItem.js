import React from 'react';
import { Link, Title } from 'components';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import InboxInIcon from '@heroicons/react/outline/InboxInIcon';
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
import ContentLoader from 'react-content-loader';

import Attribution from './Attribution';
import Logo from './Logo';
import { CONVERSION_EVENTS } from '../../../googleAnalytics';

const FooterInner = ({
  npmData: { latestVersionPublishedTime, lastMonthDownloads },
  npmDataLoadingState,
}) => {
  if (npmDataLoadingState === 'error') return null;

  if (npmDataLoadingState === 'loaded') {
    return (
      <div className="flex justify-between text-xs text-gray-500">
        {latestVersionPublishedTime && (
          <div title={latestVersionPublishedTime.toISOString()} className="flex mr-6">
            <span>
              <InboxInIcon className="inline-block w-4 mr-1" />
            </span>
            <span>Updated {formatDistanceToNowStrict(latestVersionPublishedTime)} ago</span>
          </div>
        )}

        {lastMonthDownloads && (
          <div className="flex">
            <span>
              <ChartBarIcon className="inline-block w-4 mr-1" />
            </span>
            <span>{lastMonthDownloads.toLocaleString()} monthly downloads</span>
          </div>
        )}
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
  npmData,
  lead,
  npmDataLoadingState,
}) => {
  return (
    <div className="border-2 hover:border-gray-500" data-testid={`plugin-${slug}`}>
      <Link
        to={`/backstage/plugins/${slug}/`}
        className="underline-none"
        conversionEventName={CONVERSION_EVENTS.PAGE_VIEW_1}
        conversionEventParams={{ slug }}
      >
        <div className="flex flex-col justify-between md:h-[250px] lg:h-[280px] xl:h-[250px]">
          <div>
            <div className="flex p-4 mb-2">
              <div className="mr-4">
                <Logo
                  gatsbyImageData={logoImage.gatsbyImageData}
                  alt={`${humanName} logo`}
                  minHeight={80}
                  className="flex items-center"
                />
              </div>
              <div className="pt-2 capitalize">
                <Title>{humanName}</Title>
                <Attribution attribution={{ text }} />
              </div>
            </div>

            <p className="px-4 text-sm mb-4 text-gray-600">{lead}</p>
          </div>

          <div className="px-2 pt-2 mb-2 border-t-2">
            <FooterInner npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
