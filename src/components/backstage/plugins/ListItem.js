import React from 'react';
import { Link, Title } from 'components';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import InboxInIcon from '@heroicons/react/outline/InboxInIcon';
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
import ContentLoader from 'react-content-loader';
import classnames from 'classnames';

import Attribution from './Attribution';
import Logo from './Logo';
import { CONVERSION_EVENTS } from '../../../google-analytics/trackGoogleAnalyticsEvent';

const FooterInner = ({
  npmData: { latestVersionPublishedTime, lastMonthDownloads },
  npmDataLoadingState,
}) => {
  if (npmDataLoadingState === 'error') return null;

  let inner;
  if (npmDataLoadingState === 'loaded') {
    inner = (
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
    inner = (
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

  return (
    <div className="px-2 pt-2 mb-2 border-t-2">
      {inner}
    </div>
  );
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
  const heightClasses = classnames({
    'md:h-[250px] lg:h-[280px] xl:h-[250px]': npmDataLoadingState === 'loaded',
    'md:h-[230px] lg:h-[260px] xl:h-[230px]': npmDataLoadingState !== 'loaded',
  });

  return (
    <div className="border-2 hover:border-gray-500" data-testid={`plugin-${slug}`}>
      <Link
        to={`/backstage/plugins/${slug}/`}
        className="underline-none cursor-pointer"
        style={{ touchAction: 'manipulation' }}
        conversionEventName={CONVERSION_EVENTS.PAGE_VIEW_1}
        conversionEventParams={{ slug }}
      >
        <div className={classnames('flex flex-col justify-between', heightClasses)}>
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

          <FooterInner npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
