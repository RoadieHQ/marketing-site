import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, SitewideHeader } from 'components';
import {
  FingerPrintIcon,
  MapIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ChipIcon,
  UsersIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
} from '@heroicons/react/outline'
import {
  AlternatingFeatureBlock,
  AlternatingTextFeatureBlock,
  SplitGridLogoCloud,
  FooterCTA,
  VideoHero,
  CustomerLogoCloud,
  TestimonialsCloud,
  SimpleCenteredHeading,
} from 'components/landing';

import DragDropIllustration from '../../content/assets/home/illustrations/drag-drop-illustration.webp';
import DragDropIllustrationPng from '../../content/assets/home/illustrations/drag-drop-illustration.png';
import SecurityMaintenanceIllustration from '../../content/assets/home/illustrations/security-maintenance-illustration.webp';
import SecurityMaintenanceIllustrationPng from '../../content/assets/home/illustrations/security-maintenance-illustration.png';

import GitHubLogo from '../../content/assets/logos/github/logos/modified/github.inline.svg';
import KubernetesLogo from '../../content/assets/logos/kubernetes/kubernetes.inline.svg';
import CircleCiLogo from '../../content/assets/logos/circle-ci/circleci.inline.svg';
import PagerDutyLogo from '../../content/assets/logos/pagerduty/pagerduty.inline.svg';
import ArgoLogo from '../../content/assets/logos/argo-cd/argo.inline.svg';
import JiraSoftwareLogo from '../../content/assets/logos/jira/jira.inline.svg';

const SEO_TITLE = 'The easiest way to get Spotify Backstage';
const LEAD = `Roadie's SaaS platform handles hosting and upgrades and ensures you always have access to the latest Backstage features.`;

const PRODUCT = {
  features: [{
    title: 'Quick and easy setup',
    description: 'Add plugins in a couple of clicks. Drag widgets to the place you want them.',
    illustration: {
      webp: DragDropIllustration,
      png: DragDropIllustrationPng,
      alt: 'A component from a Backstage plugin being dragged around with the mouse pointer',
    },
    bullets: [{
      name: 'Custom plugin support',
      description: 'Building your own internal plugins? Publish them to our private repository and they appear where you need them.',
      icon: BeakerIcon,
    }, {
      name: 'Secure connections',
      description: 'Securely connect to SaaS services and your own infrastructure using our tunelling broker service.',
      icon: BeakerIcon,
    }],

  }, {
    title: 'Maintenance free',
    description: 'Roadie handles upgrades and security so you can stay focused.',
    illustration: {
      webp: SecurityMaintenanceIllustration,
      png: SecurityMaintenanceIllustrationPng,
      alt: 'A progress bar and cog to indicate an upgrade in progress.',
    },
    bullets: [{
      name: 'Automated upgrades',
      description:
        `Open-source means Backstage moves quickly. Upgrades can take days, and cause downtime when they go wrong. Why spend the time?`,
      icon: ChipIcon,
    }, {
      name: 'Security patches delivered',
      description:
        `We regularly patch vulnerabilities in the open-source code, ensuring you're using a hardened version of Backstage.`,
      icon: ShieldCheckIcon,
    }],
  }],
};

const SOLUTIONS = {
  features: [{
    title: 'Cut onboarding time',
    description: 'Get engineers up to speed quickly. Onboard in weeks rather than months.',
    bullets: [{
      name: 'Deal with rapid growth',
      description: `Engineers are constantly joining or changing teams. Make sure they become effective quickly, and stay that way.`,
      icon: UsersIcon,
    }, {

      name: 'Single pane of glass',
      description: `Centralise the service catalog and make API specs, docs and tooling easy to access in one place`,
      icon: BookOpenIcon,
    }, {
      name: 'Proven results',
      description: `Spotify saw "time to 10ᵗʰ commit" drop by 55% in the two years after deploying Backstage internally. All while onboarding hundreds of engineers each year.`,
      icon: PresentationChartLineIcon,
    }],

  }, {
    title: 'Standardize service creation',
    description: 'Create new services from templates which already have your best practices built in.',
    bullets: [{
      name: 'Increase consistency in production',
      description: `Cut out obstacles on the path to production. Homogeneous environments are easier to operate and scale.`,
      icon: FingerPrintIcon,
    }, {
      name: 'Golden path to production',
      description:
        `Encode your best practices in templates. Increasing production consistency should be the path of least resistance.`,
      icon: MapIcon,
    }],

  }, {
    title: 'Codify service ownership',
    description: 'Track teams and software and assign one to the other.',
    bullets: [{
      name: 'Increase uptime',
      description: `Unowned services are a maintenance, security and operations nightmare.`,
      icon: FingerPrintIcon,
    }, {
      name: 'Improve InnerSourcing',
      description:
        `Empower teams to contribute to the code around them. Start with a conversation with the owner.`,
      icon: MapIcon,
    }],
  }],
};

const PLUGINS_SUPPORTED = {
  title: 'Powerful plugins',
  subTitle: `Open-source Backstage plugins are supported by default. Push your own if you need something bespoke.`,
  link: {
    text: 'Browse our plugins and integrations catalog',
    to: '/docs/integrations/',
  },

  logos: [{
    src: <GitHubLogo />,
    key: 'github',
  }, {
    src: <KubernetesLogo />,
    key: 'k8s',
  }, {
    src: <PagerDutyLogo />,
    key: 'pagerduty',
  }, {
    src: <CircleCiLogo />,
    key: 'circleci',
  }, {
    src: <ArgoLogo />,
    key: 'argocd',
  }, {
    src: <JiraSoftwareLogo />,
    key: 'jira',
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

    <SitewideHeader borderBottom={false} />
    <VideoHero />
    <CustomerLogoCloud />
    <TestimonialsCloud />

    <div className="pt-24 pb-32 bg-gray-50" id="product">
      <SimpleCenteredHeading
        headline="Backstage with benefits..."
        lead="Simple set up. Maintenance free."
      />

      <AlternatingFeatureBlock content={PRODUCT} />
    </div>

    <SplitGridLogoCloud content={PLUGINS_SUPPORTED} />

    <div className="pt-24 bg-gray-50 pb-32" id="solutions">
      <SimpleCenteredHeading
        headline="Turn tribal knowledge into shared context"
        lead="Make docs, architecture diagrams and runbooks an integral part of your engineering workflow."
      />

      <AlternatingTextFeatureBlock content={SOLUTIONS} />
    </div>

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
