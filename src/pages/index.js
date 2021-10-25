import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideFooter,
  SitewideHeader,
} from 'components';
import {
  FingerPrintIcon,
  SparklesIcon,
  LibraryIcon,
  MapIcon,
  NewspaperIcon,
  BeakerIcon,
  CollectionIcon,
  ShieldCheckIcon,
  ChipIcon,
  UsersIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
} from '@heroicons/react/outline'
import { VideoHero } from 'components/landing/VideoHero';
import AlternatingFeatureBlock from 'components/landing/AlternatingFeatureBlock';
import SplitGridLogoCloud from 'components/landing/SplitGridLogoCloud';
import FooterCTA from 'components/landing/FooterCTA';

import DragDropIllustration from '../../content/assets/home/drag-drop-illustration.inline.svg';
import SecurityMaintenanceIllustration from '../../content/assets/home/security-maintenance-illustration.inline.svg';
import ServiceCatalogIllustration from '../../content/assets/home/service-catalog-illustration.inline.svg';
import ProductionConsistencyIllustration from '../../content/assets/home/production-consistency-illustration.inline.svg';
import MikeExpediaGroupQuote from '../../content/assets/home/mike-expedia-quote.inline.svg';

import GitHubLogo from '../../content/assets/logos/github/logos/modified/github.inline.svg';
import KubernetesLogo from '../../content/assets/logos/kubernetes/kubernetes.inline.svg';
import CircleCiLogo from '../../content/assets/logos/circle-ci/circleci.inline.svg';
import PagerDutyLogo from '../../content/assets/logos/pagerduty/pagerduty.inline.svg';
import ArgoLogo from '../../content/assets/logos/argo-cd/argo.inline.svg';
import JiraSoftwareLogo from '../../content/assets/logos/jira/jira.inline.svg';

const SEO_TITLE = 'SaaS Backstage hosting';
const LEAD = `
Roadie's SaaS platform handles hosting and upgrades and ensures
you always have access to the latest Backstage features.
`;

const PRODUCT = {
  htmlId: 'product',
  title: 'Backstage with benefits...',
  description: `We're building on top of Backstage, making it simple to set up and maintenance free.`,
  features: [{
    title: 'Quick and easy setup',
    description: 'Customize Backstage in a couple of clicks. Drag plugins to where you want them. Add new ones instantly.',
    illustration: <DragDropIllustration />,
    bullets: [{
      id: 1,
      name: 'All plugin formats supported',
      description:
        `Roadie's drag and drop setup supports cards, tabs, sidebar links and full page plugins.`,
      icon: CollectionIcon,
    }, {
      id: 2,
      name: 'Install custom plugins',
      description: 'Building your own internal plugins? Publish them to our private repository and they appear where you need them.',
      icon: BeakerIcon,
    }],

  }, {
    title: 'Maintenance free',
    description: 'Roadie handles upgrades and security so you can stay focussed on the work your team does best.',
    illustration: <SecurityMaintenanceIllustration />,
    bullets: [{
      id: 1,
      name: 'Automated upgrades',
      description:
        `Open-source community power means that Backstage moves quickly. It's easy to fall behind if you don't put the work in. We do the upgrades so you don't have to.`,
      icon: ChipIcon,
    }, {
      id: 2,
      name: 'Security patches delivered',
      description:
        `We regularly patch vulnerabilities in the open-source code, ensuring you're using a hardened version of Backstage.`,
      icon: ShieldCheckIcon,
    }],
  }],
};

const SOLUTIONS = {
  htmlId: 'solutions',
  title: 'Turn tribal knowledge into shared context',
  description: 'Make docs, architecture diagrams and runbooks an integral part of your your engineering workflow.',
  features: [{
    title: 'Built on Backstage',
    description: 'Backstage is the developer portal and service catalog which has enabled engineering hypergrowth at Spotify since 2016. It can improve developer effectiveness, reduce downtime, and enable your teams to ship high-quality code quickly.',
    illustration: <MikeExpediaGroupQuote />,
    bullets: [{
      id: 1,
      name: 'Scaffold new services',
      description: `The Backstage scaffolder allows engineers to create new services from pre-defined templates. Increasing velocity and production consistency.`,
      icon: SparklesIcon,
    }, {
      id: 2,
      name: 'Bring order with the software catalog',
      description: 'The searchable catalog makes engineeering tools discoverable and reduces context switching.',
      icon: LibraryIcon,
    }, {
      id: 3,
      name: 'Write technical docs that get read',
      description: `TechDocs brings markdown technical documentation into Backstage, organises it by service, and makes it searchable.`,
      icon: NewspaperIcon,
    }],

  }, {
    title: 'Cut onboarding time with discoverability',
    description: 'Backstage centralizes the information that new engineers need to get up to speed quickly. Meaning they onboard in weeks rather than months.',
    illustration: <ServiceCatalogIllustration />,
    bullets: [{
      id: 1,
      name: 'Rapid growth stretches knowledge',
      description: `Rapid growth means new engineers are joining and existing engineers are changing teams. Backstage ensures they become effective quickly, and stay that way.`,
      icon: UsersIcon,
    }, {

      id: 2,
      name: 'Information at your fingertips',
      description: `Backstage centralises the service catalog and makes API specs, docs and tooling easy to access in one place, simplifying engineering tasks.`,
      icon: BookOpenIcon,
    }, {
      id: 3,
      name: 'Proven results',
      description: `Spotify saw "time to 10ᵗʰ commit" drop by 55% in the two years after deploying Backstage internally. All while onboarding hundreds of engineers each year.`,
      icon: PresentationChartLineIcon,
    }],

  }, {
    title: 'Improve production consistency',
    description: 'Use the built in scaffolder to create new services from templates which have your best practices built in.',
    illustration: <ProductionConsistencyIllustration />,
    bullets: [{
      id: 1,
      name: 'Inconsistent environments slow development',
      description: `Nobody wants obstacles on the path to production, but heterogeneous environments cause operational headaches and slow technology migrations.`,
      icon: FingerPrintIcon,
    }, {
      id: 2,
      name: 'Golden path to production',
      description:
        `Encode your best practices in templates which service teams can use to create new services. This ensures that increasing production consistency is the path of least resistance.`,
      icon: MapIcon,
    }],

  }],
};

const PLUGINS_SUPPORTED = {
  title: 'Pre-loaded with the best plugins',
  subTitle: `Open-source plugins are supported by default. Push your own plugins if you need something bespoke.`,
  primaryCallToAction: {
    text: 'Try it free',
    to: '/free-trial/',
  },

  secondaryCallToAction: {
    text: 'Request a demo',
    to: '/request-demo/',
  },

  logos: [{
    src: <GitHubLogo />,
  }, {
    src: <KubernetesLogo />,
  }, {
    src: <PagerDutyLogo />
  }, {
    src: <CircleCiLogo />,
  }, {
    src: <ArgoLogo />,
  }, {
    src: <JiraSoftwareLogo />,
  }],
};

const Home = ({
  data: {
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    },
  },
}) => (
  <>
    <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

    <SitewideHeader />
    <VideoHero />
    <AlternatingFeatureBlock content={PRODUCT} />
    <SplitGridLogoCloud content={PLUGINS_SUPPORTED} />
    <AlternatingFeatureBlock content={SOLUTIONS} />

    <FooterCTA />
    <SitewideFooter />
  </>
);

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
