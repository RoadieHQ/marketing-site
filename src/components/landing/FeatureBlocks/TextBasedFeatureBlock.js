import React from 'react';
import { Lead, Headline } from 'components';

import Bullet from './FeatureBullet';

const FeatureBlock = ({
  title,
  description,
  bullets,
}) => (
  <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:grid-flow-row-dense">
    <div className="lg:col-start-1">
      <div className="lg:pr-20">
        <Headline el="h3" size="small">{title}</Headline>

        <div className="mt-3">
          <Lead>{description}</Lead>
        </div>
      </div>
    </div>

    <div className="mx-4 relative lg:mt-0 lg:col-start-2">
      <dl className="mt-10 space-y-10">
        {bullets.map((item) => (<Bullet item={item} key={item.name} boxedIcons={false} />))}
      </dl>
    </div>
  </div>
);

const TextBasedFeatureBlock = ({ content }) => (
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
    {content.features.map((props) => (
      <div className="relative mt-12 pt-12 sm:mt-16 lg:mt-32 lg:pt-32 lg:first:pt-0 border-t-2 border-gray-200 first:border-t-0" key={props.title}>
        <FeatureBlock {...props} />
      </div>
    ))}
  </div>
);

export default TextBasedFeatureBlock;
