import React from 'react';
import { Headline, TextLink as Link } from 'components';

const SubTitle = ({ text }) => (
  <p className="mt-3 max-w-3xl text-lg text-gray-500">
    {text}
  </p>
);

const LogoItem = ({ src }) => (
  <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50">
    {src}
  </div>
);

const SplitGridOnRight = ({ content }) => (
  <section className="Section size-3">
    <div className="Container">
      <div className="Grid columns-2 gap-9 ai-center">
        <div className='Flex column gap-6'>
          <h3 className='Text size-7'>{content.title}</h3>
          <p className='Text size-4 lowContrast'>{content.subTitle}</p>
          {content.link && (
            <Link to={content.link.to} className="Link">{content.link.text}  &rarr;</Link>
          )}
        </div>

        <div className="">
          {content.logos.map((logo) => (
            <LogoItem {...logo} key={logo.key} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SplitGridOnRight;
