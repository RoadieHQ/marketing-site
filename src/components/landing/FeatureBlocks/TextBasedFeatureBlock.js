import React from 'react';

import Bullet from './FeatureBullet';

const FeatureBlock = ({
  title,
  description,
  bullets,
  prompt,
}) => (
  <div className="Flex column gap-6">
    <div className='Flex column gap-2'>
      {prompt && (
        <span className="Badge size-2 indigo">{prompt}</span>
      )}
      <h3 className='Text size-6'>{title}</h3>
      <div className="">
        <p className='Text size-4 lowContrast'>{description}</p>
      </div>
    </div>

    <div className="">
      <dl className="Grid columns-3 gap-9">
        {bullets.map((item) => (<Bullet item={item} key={item.name} boxedIcons={false} />))}
      </dl>
    </div>
  </div>
);

const TextBasedFeatureBlock = ({ content }) => (
  <div className="Flex column gap-9">
    {content.features.map((props) => (
      <div className="" key={props.title}>
        <FeatureBlock {...props} />
      </div>
    ))}
  </div>
);

export default TextBasedFeatureBlock;
