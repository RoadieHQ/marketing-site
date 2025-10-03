import React from 'react';
import { Lead, Headline } from 'components';

import Bullet from './FeatureBullet';

const FeatureBlock = ({ title, description, bullets, prompt }) => (
  <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:grid-flow-row-dense">
    <div className="lg:col-start-1">
      <div className="lg:pr-20">
        {prompt && (
          <p className="mb-5">
            <span className="px-4 py-2 border-2 border-primary-600 text-primary-600 text-sm font-bold rounded-full">
              {prompt}
            </span>
          </p>
        )}
        <Headline el="h3" size="small">
          {title}
        </Headline>

        <div className="mt-3">
          <Lead>{description}</Lead>
        </div>
      </div>
    </div>

    <div className="mx-4 relative lg:mt-0 lg:col-start-2">
      <dl className="mt-10 space-y-10">
        {bullets.map((item) => (
          <Bullet item={item} key={item.name} boxedIcons={false} />
        ))}
      </dl>
    </div>
  </div>
);

const TextBasedFeatureBlock = ({ content }) => (
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
    {content.features.map((props) => (
      <div
        className="relative mt-12 pt-12 sm:mt-16 lg:mt-20 lg:pt-20 lg:first:pt-0 border-t-2 border-gray-200 first:border-t-0"
        key={props.title}
      >
        <FeatureBlock {...props} />
      </div>
    ))}
  </div>
);

export default TextBasedFeatureBlock;
