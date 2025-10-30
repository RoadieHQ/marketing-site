import React from 'react';
import { graphql } from 'gatsby';
import { Seo, SitewideFooter, SitewideHeader, Button, Headline } from 'components';
import { AlternatingFeatureBlock, AlternatingFeatureWrapper } from 'components/landing';
import Title from '../../components/Title';

import ScaffolderScreenshotImg from '../../../content/assets/product-pages/scaffolder-hero.svg';
import FormImg from '../../../content/assets/product-pages/scaffolder-form.svg';
import TogetherImg from '../../../content/assets/product-pages/scaffolder-together.png';
import ContentfulLogoImg from '../../../content/assets/product-pages/scaffolder-contentful-logo.png';
import TemplateCodeImg from '../../../content/assets/product-pages/scaffolder-template-code.svg';
import { PAGE_PATHS } from '../../contactFormConstants';

import NoLockInImg from '../../../content/assets/product-pages/catalog-no-lock-in.png';

const Seo_TITLE = 'Scaffolder: self-service for Cloud Native teams';
const LEAD = `Roadie’s Backstage-based Scaffolder lets you package best practices for your developers to grab with a few clicks.`;

const PRODUCT = {
  features: [
    {
      title: 'Shorten the time to production of new services',
      description:
        'Roadie lets you define templates to create new services, or extend existing ones.',
      illustration: {
        png: TogetherImg,
        alt: '',
      },
      paragraphs: [
        'Spotify, HP, Expedia, and hundreds of adopters use Backstage’s Scaffolder to accelerate their lead time for changes. Instead of having teams re-invent best practices all over again, Roadie’s Backstage-based Scaffolder makes it easy for you to package production-grade setups for developers to grab with a few clicks.',
      ],
    },
    {
      title: 'Define powerful forms once — no more ticket back-and-forth',
      description: 'Roadie provides you with inputs that reduce human mistakes',
      illustration: {
        png: FormImg,
        alt: '',
      },
      paragraphs: [
        'Asking developers to type out service info in a free-form input is prone to errors. With the Roadie’s Scaffolder, you can define parameters for your input and turn them into dropdowns fed from your Catalog, integrations, or internal APIs.',
      ],
    },
    {
      title: 'GitHub Actions inspired syntax for your templates',
      description: 'Roadie lets you use the knowledge you already have',
      illustration: {
        png: TemplateCodeImg,
        alt: '',
      },
      paragraphs: [
        'Cookiecutter is great, but can be unintuitive for people working in the platform space. Roadie uses Backstage Scaffolder templates, which supports actions that abstract away common operations, like creating a Pull Request or writing to GitHub, without you having to worry about authentication. ',
      ],
    },
    {
      title: 'Avoid proprietary lock-ins',
      description: 'Roadie gives you the freedom of Open Source',
      illustration: {
        png: NoLockInImg,
        alt: '',
      },
      paragraphs: [
        'Spotify open-sourced Backstage because they didn’t want to re-do all their Developer Portal if a popular vendor came around. By using Roadie, you’re adopting Open Source Backstage but without the extensive setup and heavy maintenance.',
      ],
    },
  ],
};

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Seo title={`${Seo_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <section className="bg-white mx-auto max-w-7xl xl:rounded-lg lg:flex items-center">
        <div className="lg:w-1/2 p-4 lg:px-10 lg:py-16">
          <strong className="block uppercase mb-8 text-xl font-highlight">
            Roadie’s Scaffolder
          </strong>
          <Headline size="medium">
            <span className="text-orange-600">Self-service:</span> accelerate your delivery teams,
            save DevOps from mundane tasks
          </Headline>

          <h2 className="mt-5 text-lg sm:mt-8 lg:text-xl xl:text-xl xl:mr-6">
            Roadie’s Scaffolder lets your developers create apps, request infrastructure, and adopt
            internal practices with a few clicks through Cloud native software templates.
          </h2>

          <Button
            link={true}
            color="primary"
            size="medium"
            to={PAGE_PATHS.freeTrial}
            className="font-bold tracking-wide mt-6"
            text="Try Roadie's Scaffolder"
          />
        </div>
        <div className="lg:w-1/2 py-4 pb-[1px] lg:py-16 lg:px-[2px]">
          <img src={ScaffolderScreenshotImg} alt="" className="webkit-optimize-image-rendering" />
        </div>
      </section>

      <AlternatingFeatureWrapper id="product">
        <AlternatingFeatureBlock featureItem={PRODUCT.features[0]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[1]} illustrationSide="right" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[2]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[3]} illustrationSide="right" />
      </AlternatingFeatureWrapper>

      <section className="text-center bg-white py-20 mt-10 xl:mt-16">
        <figure className="max-w-2xl px-4 mx-auto mb-5">
          <img src={ContentfulLogoImg} alt="Contentful logo" className="block mx-auto mb-10" />
          <blockquote className="text-2xl font-bold tracking-wide">
            “Roadie helps us get the most out of Backstage while saving time and money on setup and
            operation.”
          </blockquote>
          <figcaption className="text-xl mt-5">
            Enrique Amodeo Rubio, Staff Software Engineer, Contentful
          </figcaption>
        </figure>

        <Title el="h2" className="mt-10 xl:text-2xl xl:tracking-tight text-orange-600">
          See Roadie’s Scaffolder in action
        </Title>

        <Button
          link={true}
          color="primary"
          size="medium"
          to={PAGE_PATHS.requestDemo}
          className="font-bold tracking-wide mt-6"
          text="Request a Demo"
        />
      </section>

      <SitewideFooter />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query ScaffolderQuery {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
        }
      }
    }
  }
`;
