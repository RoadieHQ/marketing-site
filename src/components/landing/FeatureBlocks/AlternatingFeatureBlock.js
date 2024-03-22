import React from 'react';
import classnames from 'classnames';
import camelCase from 'lodash/camelCase';

import Bullet from './FeatureBullet';
import { Link } from 'gatsby';

const FeatureBlock = ({
  title,
  description,
  bullets,
  paragraphs,
  illustration,
  ctaPrompt,
  comingSoon,
}) => (
  <div className='Grid columns-2 gap-9 ai-center'>
    <aside aria-hidden>
      {illustration && (
        illustration.to ? (
          <Link to={illustration.to} className="">
            <img src={illustration.png} alt={illustration.alt} className="" />
          </Link>
        ) : (
          <img src={illustration.png} alt={illustration.alt} className="" />
        )
      )}
    </aside>
    <div className='Flex column gap-6'>
      <div>
        {comingSoon && (
          <span className="Badge size-2 indigo">
            Coming soon
          </span>
        )}
      </div>

      <h2 className="Text size-4 weight-2 indigo">
        {title}
      </h2>

      <h3 className="Text size-7">{description}</h3>

      {paragraphs && (
        <>
          {paragraphs.map((paragraph, i) => (
            <p className="Text size-4" key={`feature-p-${camelCase(title)}-${i}`}>
              {paragraph}
            </p>
          ))}
        </>
      )}

      {bullets && (
        <dl className="mt-10 space-y-10">
          {bullets.map((item, i) => (
            <Bullet item={item} key={`feature-b-${camelCase(title)}-${i}`} />
          ))}
        </dl>
      )}

      {ctaPrompt && (
        <p>
          <Link to={ctaPrompt.to} className="Link">
            {ctaPrompt.text} <span className="Text size-4 string">&rarr;</span>
          </Link>
        </p>
      )}
    </div>

  </div>
);

export const AlternatingFeatureWrapper = ({ className, children, id }) => (
  <section
    id={id}
    className={classnames(
      className,
      'Section size-3'
    )}
  >
    {children}
  </section>
);

export const AlternatingFeatureBlock = ({ featureItem }) => (
  <FeatureBlock {...featureItem} />
);
