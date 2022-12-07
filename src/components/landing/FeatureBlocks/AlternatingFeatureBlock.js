import React from 'react';
import { DotPattern, Title } from 'components';
import classnames from 'classnames';
import camelCase from 'lodash/camelCase';

import Bullet from './FeatureBullet';

const FeatureBlock = ({
  title,
  description,
  bullets,
  paragraphs,
  illustration,
  illustrationSide = 'right',
}) => (
  <div
    className={classnames('lg:grid lg:grid-cols-8 lg:items-center lg:gap-8', {
      'lg:grid-flow-row-dense': illustrationSide === 'left',
    })}
  >
    <div
      className={classnames('lg:col-span-5', {
        'lg:col-start-4': illustrationSide === 'left',
        'lg:col-start-0': illustrationSide === 'right',
      })}
    >
      <Title
        el="h3"
        className={classnames('xl:text-2xl xl:tracking-tight', {
          'text-primary-600': illustrationSide === 'left',
          'text-primary-800': illustrationSide === 'right',
        })}
      >
        {title}
      </Title>
      <p className="mt-1 mb-10 text-xl xl:text-2xl">{description}</p>

      {!!paragraphs && (
        <>
          {paragraphs.map((paragraph, i) => (
            <p className="text-lg xl:text-xl mt-5" key={`feature-p-${camelCase(title)}-${i}`}>
              {paragraph}
            </p>
          ))}
        </>
      )}

      {!!bullets && (
        <dl className="mt-10 space-y-10">
          {bullets.map((item, i) => (
            <Bullet item={item} key={`feature-b-${camelCase(title)}-${i}`} />
          ))}
        </dl>
      )}
    </div>

    <aside
      className="mt-10 relative lg:mt-0 lg:col-span-3 flex align-center justify-center px-2 sm:px-0"
      aria-hidden
    >
      <picture>
        <source srcSet={illustration.webp} type="image/webp" />
        <source srcSet={illustration.png} type="image/png" />
        <img src={illustration.png} alt={illustration.alt} />
      </picture>
    </aside>
  </div>
);

export const AlternatingFeatureWrapper = ({ className, children, id }) => (
  <section
    id={id}
    className={classnames(
      className,
      'relative overflow-hidden max-w-xl mx-auto px-4 sm:px-6 lg:px-28 lg:max-w-7xl'
    )}
  >
    {children}
  </section>
);

export const AlternatingFeatureBlock = ({ featureItem, illustrationSide = 'right' }) => (
  <div className="relative">
    {illustrationSide === 'right' ? (
      <DotPattern
        width={404}
        height={450}
        className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/8"
        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
      />
    ) : (
      <DotPattern
        className="hidden lg:block absolute right-full transform translate-x-1/2 -translate-y-1/8"
        width={404}
        height={450}
        aria-hidden="true"
        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
      />
    )}

    <div className="relative mt-12 sm:mt-16 lg:my-24">
      <FeatureBlock illustrationSide={illustrationSide} {...featureItem} />
    </div>
  </div>
);
