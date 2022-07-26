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
  PencilAltIcon,
  SearchCircleIcon,
  UserGroupIcon,
  ChartBarIcon,
  BadgeCheckIcon,
  CubeTransparentIcon,
} from '@heroicons/react/outline';
import {
  AlternatingFeatureBlock,
  TextBasedFeatureBlock,
  SplitGridLogoCloud,
  FooterCTA,
  TestimonialsCloud,
  SimpleCenteredHeading,
  CenteredHero,
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
  features: [
    {
      title: 'Focus on building value instead of learning Backstage internals',
      description:
        'Roadie manages deployments and security for you and helps you get the best out of Backstage with a few clicks.',
      illustration: {
        webp: DragDropIllustration,
        png: DragDropIllustrationPng,
        alt: 'A component from a Backstage plugin being dragged around with the mouse pointer',
      },
      bullets: [
        {
          name: 'Secure connections',
          description:
            'Securely connect to SaaS services and your own infrastructure using our tunneling broker service.',
          icon: ShieldCheckIcon,
        },
        {
          name: 'Custom plugin support',
          description:
            'Building your own internal plugins? Publish them to our private repository and they appear where you need them.',
          icon: BeakerIcon,
        },
      ],
    },
    {
      title: 'Keep your Backstage ever-green',
      description:
        'Get the latest features and secutiry updates from the community without the maintenance burden.',
      illustration: {
        webp: SecurityMaintenanceIllustration,
        png: SecurityMaintenanceIllustrationPng,
        alt: 'A progress bar and cog to indicate an upgrade in progress.',
      },
      bullets: [
        {
          name: 'Automated upgrades',
          description: `Self-hosted Backstage teams can take up to 30% of their time upgrading their instance. We manage upgrades for you, whether they're security patches, minor, or major releases.`,
          icon: ChipIcon,
        },
        {
          name: 'SLAs Available',
          description: `Downtime in Backstage can cause friction in your team and hinder adoption. We offer reliability and 24/7 on-call engineers.`,
          icon: ShieldCheckIcon,
        },
      ],
    },
  ],
};

const SOLUTIONS = {
  features: [
    {
      title: 'Cut onboarding time',
      description: 'Get engineers up to speed in days, not months.',
      bullets: [
        {
          name: 'Tackle growing pains',
          description: `Engineers are constantly joining or switching teams. Make them effective, and help them stay that way.`,
          icon: UsersIcon,
        },
        {
          name: 'Make tools discoverable',
          description: `Centralize around the service catalog. Make API specs, docs and tooling easy to access in one place`,
          icon: BookOpenIcon,
        },
        {
          name: 'Proven results',
          description: `Spotify saw "time to 10ᵗʰ commit" drop by 55% in the two years after deploying Backstage internally. All while onboarding hundreds of engineers each year.`,
          icon: PresentationChartLineIcon,
        },
      ],
    },
    {
      title: 'Standardize service creation',
      description:
        'Create services from templates which already have your best practices built in.',
      bullets: [
        {
          name: 'Increase production consistency',
          description: `Homogeneous environments are easier to operate and scale. Cut down on snowflake services.`,
          icon: FingerPrintIcon,
        },
        {
          name: 'Golden path to production',
          description: `Encode your best practices to make production consistency the path of least resistance.`,
          icon: MapIcon,
        },
      ],
    },
    {
      title: 'Codify service ownership',
      description: 'Track teams and software and assign one to the other.',
      bullets: [
        {
          name: 'Improve maintainability',
          description: `Unowned services are a maintenance, security and operations nightmare.`,
          icon: BadgeCheckIcon,
        },
        {
          name: 'Unlock InnerSourcing',
          description: `Empower teams to contribute to the code around them. It starts with a conversation with the service owner.`,
          icon: CubeTransparentIcon,
        },
      ],
    },
    {
      title: 'Tech docs that get read',
      description: 'Docs-like-code helps Spotify document thousands of internal components.',
      bullets: [
        {
          name: 'Write docs as code',
          description:
            'Markdown docs live alongside the code where they can be peer reviewed in pull requests.',
          icon: PencilAltIcon,
        },
        {
          name: 'Organized and searchable',
          description:
            'Docs are organized in the service catalog and searchable for discoverability.',
          icon: SearchCircleIcon,
        },
        {
          name: 'Demonstrated at scale',
          description:
            'Spotify experienced an explosion of docs writing after adopting this methodology internally.',
          icon: PresentationChartLineIcon,
        },
      ],
    },
    {
      title: 'Track engineering maturity and migrations',
      description:
        'Define engineering standards and initiatives that get checked automatically across your ecosystem.',
      prompt: 'Coming soon',
      bullets: [
        {
          name: 'Find out which teams are experiencing challenges',
          description:
            'Standards adherence can be grouped by teams, offering insight into who may need more support to adopt new practices.',
          icon: UserGroupIcon,
        },
        {
          name: 'Understand your migration’s progress',
          description:
            'Initiatives are designed to keep track of wide-org migrations, offering insights about the change across software components. ',
          icon: ChartBarIcon,
        },
      ],
    },
  ],
};

const PLUGINS_SUPPORTED = {
  title: 'Powerful plugins',
  subTitle: `Open-source Backstage plugins are supported by default. Push your own if you need something bespoke.`,
  link: {
    text: 'Browse our plugins and integrations catalog',
    to: '/docs/integrations/',
  },

  logos: [
    {
      src: <GitHubLogo />,
      key: 'github',
    },
    {
      src: <KubernetesLogo />,
      key: 'k8s',
    },
    {
      src: <PagerDutyLogo />,
      key: 'pagerduty',
    },
    {
      src: <CircleCiLogo />,
      key: 'circleci',
    },
    {
      src: <ArgoLogo />,
      key: 'argocd',
    },
    {
      src: <JiraSoftwareLogo />,
      key: 'jira',
    },
  ],
};

const Home = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
}) => (
  <>
    <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

    <SitewideHeader borderBottom={false} />

    <CenteredHero />

    {/* <CustomerLogoCloud /> */}

    <div className="pt-24 pb-32 bg-gray-50 relative overflow-hidden" id="product">
      <AlternatingFeatureBlock content={PRODUCT} />
    </div>

    <TestimonialsCloud />

    <div className="pt-24 bg-gray-50 pb-32" id="solutions">
      <SimpleCenteredHeading
        headline="Turn tribal knowledge into shared context"
        lead="A single pane of glass for your software development life cycle."
      />

      <TextBasedFeatureBlock content={SOLUTIONS} />
    </div>

    <SplitGridLogoCloud content={PLUGINS_SUPPORTED} />

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
