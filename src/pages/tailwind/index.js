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
import AlternatingDoubleFeatureBlock from 'components/tailwind/landing/AlternatingDoubleFeatureBlock';
import SplitGridOnRight from 'components/tailwind/logo-clouds/SplitGridOnRight';
import SimpleCenteredTitle from 'components/tailwind/landing/SimpleCenteredTitle';
import FooterCTA from 'components/tailwind/landing/FooterCTA';

import DragDropIllustration from '../../../content/assets/home/drag-drop-illustration.inline.svg';
import SecurityMaintenanceIllustration from '../../../content/assets/home/security-maintenance-illustration.inline.svg';


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

const Home = ({ data,}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />
      <TailwindHeadContent />

      <SitewideHeader />
      <Hero />
      <AlternatingDoubleFeatureBlock content={PRODUCT} />

      <SimpleCenteredTitle
        title="Turn tribal knowledge into shared context"
        subTitle="Take docs, architecture diagrams and runbooks out of impenetrable content management solutions and embed them in your engineering workflow"
      />

      <SplitGridOnRight />
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
