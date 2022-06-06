import React from 'react';
import { Lead, Headline } from 'components';

// TODO: Extract this shared code
const FeatureBulletPoint = ({ item }) => (
  <div className="relative">
    <dt>
      <div className="absolute flex items-center justify-center text-primary-600">
        <item.icon className="h-10 w-10" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
  </div>
);

const FeatureBlock = ({
  title,
  description,
  bullets,
}) => (
  <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:grid-flow-row-dense">
    <div className="lg:col-start-2">
      <dl className="mt-10 space-y-10">
        {bullets.map((item) => (<FeatureBulletPoint item={item} key={item.name} />))}
      </dl>
    </div>

    <div className="mx-4 relative lg:mt-0 lg:col-start-1">
      <div className="lg:pr-20">
        <Headline el="h3" size="small">{title}</Headline>

        <div className="mt-3">
          <Lead>{description}</Lead>
        </div>
      </div>
    </div>
  </div>
);

const TextFeatureBlock = ({ content }) => (
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
    {content.features.map((props) => (
      <div className="relative mt-12 sm:mt-16 lg:mt-32 lg:pt-32 lg:first:pt-0 border-t-2 border-gray-200 first:border-t-0" key={props.title}>
        <FeatureBlock {...props} />
      </div>
    ))}
  </div>
);

export default TextFeatureBlock;
