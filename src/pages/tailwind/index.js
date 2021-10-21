import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  TailwindHeadContent,
  SitewideFooter,
  SitewideHeader,
} from 'components/tailwind';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline'
import Hero from 'components/tailwind/landing/Hero';
import AlternatingFeatureBlock from 'components/tailwind/landing/AlternatingFeatureBlock';
import SplitGridOnRight from 'components/tailwind/logo-clouds/SplitGridOnRight';
import FooterCTA from 'components/tailwind/landing/FooterCTA';

import DragDropIllustration from '../../../content/assets/home/drag-drop-illustration.inline.svg';
import SecurityMaintenanceIllustration from '../../../content/assets/home/security-maintenance-illustration.inline.svg';
import ServiceCatalogIllustration from '../../../content/assets/home/service-catalog-illustration.inline.svg';
import ProductionConsistencyIllustration from '../../../content/assets/home/production-consistency-illustration.inline.svg';
import MikeExpediaGroupQuote from '../../../content/assets/home/mike-expedia-quote.inline.svg';


const SEO_TITLE = 'SaaS Backstage hosting';
const LEAD = `
Roadie's SaaS platform handles hosting and upgrades and ensures
you always have access to the latest Backstage features.
`;

const PRODUCT = {
  title: 'Backstage with benefits...',
  description: 'We&apos;re building on top of Backstage to make it painless to use and maintenance free.',
  features: [{
    title: 'Quick and easy setup',
    description: 'Customize Backstage to suit your needs using our drag-and-drop composer. If your company uses Pagerduty instead of Opsgenie, simply remove one plugin and replace it with the other. It takes seconds and changes roll out instantly for everyone.',
    illustration: <DragDropIllustration />,
    bullets: [{
      id: 1,
      name: 'All major plugin formats supported',
      description:
        `Roadie's drag and drop setup supports cards, tabs, sidebar links and full page plugins.`,
      icon: GlobeAltIcon,
    }, {
      id: 2,
      name: 'Bring your own plugins',
      description:
        'Building your own internal plugins? Just publish them to our repository and they appear in your Backstage experience like magic.',
      icon: ScaleIcon,
    }, {
      id: 3,
      name: 'Admins only',
      description:
        `Plugins would move around too frequently if everyone could edit them. We've built roles into Backstage so admins can lead the setup process.`,
      icon: LightningBoltIcon,
    }],

  }, {
    title: 'Maintenance free',
    description: 'Roadie handles upgrades and security so you can stay focussed on the work your team does best.',
    illustration: <SecurityMaintenanceIllustration />,
    bullets: [{
      id: 1,
      name: 'Automated upgrades',
      description:
        `Open-source community power means that Backstage moves quickly. It's easy to fall behind if you don't put the work in.`,
      icon: AnnotationIcon,
    }, {
      id: 2,
      name: 'Security patches delivered',
      description:
        `We regularly patch vulnerabilities in the open-source code, ensuring you're using a hardened version of Backstage.`,
      icon: MailIcon,
    }],
  }],
};

const SOLUTIONS = {
  title: 'Turn tribal knowledge into shared context',
  description: 'Take docs, architecture diagrams and runbooks out of impenetrable content management solutions and embed them in your engineering workflow',
  features: [{
    title: 'Built on Backstage',
    description: 'Backstage is the developer portal and service catalog which has enabled engineering hypergrowth at Spotify since 2016. It can improve developer productivity, reduce downtime, and enable your teams to ship high-quality code quickly.',
    illustration: <MikeExpediaGroupQuote />,
    bullets: [{
      id: 1,
      name: 'Scaffolder',
      description:
        `talk about what the scaffolder does`,
      icon: GlobeAltIcon,
    }, {
      id: 2,
      name: 'Software catalog',
      description:
        'Talk about this too',
      icon: ScaleIcon,
    }, {
      id: 3,
      name: 'TechDocs',
      description:
        `What the hell is techdocs`,
      icon: LightningBoltIcon,
    }],

  }, {
    title: 'Cut onboarding time with discoverability',
    description: 'Backstage centralizes the information that new engineers need to get up to speed quickly.',
    illustration: <ServiceCatalogIllustration />,
    bullets: [{
      id: 1,
      name: 'Tangible results',
      description: `Spotify saw engineering onboarding time drop by 55% in the two years after deploying Backstage internally. All while onboarding hundreds of engineers each year.`,
      icon: AnnotationIcon,
    }, {
      id: 2,
      name: 'Re-orgs handled',
      description:
        `Rapid growth means engineers are frequently changing teams and learning new codebases. Backstage ensures they stay effective throughout this process.`,
      icon: MailIcon,
    }],

  }, {
    title: 'Improve production consistency',
    description: 'Use the built in scaffolder to create new services from templates which have your best practices built in.',
    illustration: <ProductionConsistencyIllustration />,
    bullets: [{
      id: 1,
      name: 'Golden path to production',
      description: `Speed up new services`,
      icon: AnnotationIcon,
    }, {
      id: 2,
      name: 'Ease operations',
      description:
        `As you grow more cruft in the production`,
      icon: MailIcon,
    }],


  }],
};


const Home = ({ data,}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />
      <TailwindHeadContent />

      <SitewideHeader />
      <Hero />
      <AlternatingFeatureBlock content={PRODUCT} />
      <SplitGridOnRight />
      <AlternatingFeatureBlock content={SOLUTIONS} />

      <FooterCTA />
      <SitewideFooter />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;
