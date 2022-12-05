import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, SitewideHeader } from 'components';
import {
  AlternatingFeatureBlock,
  SideBySideHero,
  AlternatingFeatureWrapper,
} from 'components/landing';

import KeepSafeImg from '../../content/assets/home/illustrations/home-keep-backstage-safe.png';
import NoCodeImg from '../../content/assets/home/illustrations/home-no-code-backstage.png';
import CustomPluginsImg from '../../content/assets/home/illustrations/home-custom-plugins.png';
import KubernetesImg from '../../content/assets/home/illustrations/home-kubernetes.png';
import AndyThumbImg from '../../content/assets/home/illustrations/home-andy-video-thumb.png';

// import GitHubLogo from '../../content/assets/logos/github/logos/modified/github.inline.svg';
// import KubernetesLogo from '../../content/assets/logos/kubernetes/kubernetes.inline.svg';
// import CircleCiLogo from '../../content/assets/logos/circle-ci/circleci.inline.svg';
// import PagerDutyLogo from '../../content/assets/logos/pagerduty/pagerduty.inline.svg';
// import ArgoLogo from '../../content/assets/logos/argo-cd/argo.inline.svg';
// import JiraSoftwareLogo from '../../content/assets/logos/jira/jira.inline.svg';
import Title from '../components/Title';
import classNames from 'classnames';
import Button from '../components/forms/Button';

const SEO_TITLE = 'The easiest way to get Spotify Backstage';
const LEAD = `Roadie's SaaS platform handles hosting and upgrades and ensures you always have access to the latest Backstage features.`;

const PRODUCT = {
  features: [
    {
      title: 'Keep your Developer Portal safe',
      description: 'Roadie updates your Backstage instance automatically',
      illustration: {
        png: KeepSafeImg,
        alt: '',
      },
      paragraphs: [
        'As highlighted by Gartner’s report on Developer Portals, standing up and maintaining Backstage takes significant effort. Roadie gives you a production-grade Backstage instance and keeps it safe through regular upgrades and extra security layers.',
        'Roadie is SOC2 Type 2 Certified and uses ephemeral environments for your Scaffolder actions, a common source of risk for Open Source adopters.',
      ],
    },
    {
      title: 'Get all the OSS features, simplified',
      description: 'Roadie brings no-code management to Backstage',
      illustration: {
        png: NoCodeImg,
        alt: '',
      },
      paragraphs: [
        'With a vibrant community of contributors, Backstage keeps evolving and getting new plugins and integrations. Roadie brings you all these features, while smoothening out rough edges of the OSS version, like GitHub rate limits.',
        'Roadie enables plugins and integrations through a UI, which also lets you manage access and permissions. Roadie also provides advanced debugging capabilities to make it easy to navigate the unexpected, if it happens.',
      ],
    },
    {
      title: 'Make your Developer Portal truly yours',
      description: 'Roadie lets you install private plugins and renderers',
      illustration: {
        png: CustomPluginsImg,
        alt: '',
      },
      paragraphs: [
        'Your Developer Portal will only be successful if it’s tailored to the way your developers work. Roadie lets you bring your own Backstage plugins so you can integrate internal systems into your Developer Portal.',
        'Roadie also lets you bring your own API documentation renderer so your docs are presented exactly as you want them inside Backstage.',
      ],
    },
    {
      title: 'Integrate with your Kubernetes Clusters',
      description: 'Roadie lets you connect to your internal APIs using a broker ',
      illustration: {
        png: KubernetesImg,
        alt: '',
      },
      paragraphs: [
        'Improving your microservices discoverability is what Roadie excels at, and that includes how and where they are deployed. Roadie provides a Kubernetes view catered for developers so they understand how their services are running and can optimize from there.',
        'To integrate with your internal APIs, including your Kubernetes clusters, Roadie relies on a Broker model, which allows us to access your endpoints without exposing them to the public internet. This is the same approach used by Snyk, the security monitoring company.',
      ],
    },
  ],
};

// const SOLUTIONS = {
//   features: [
//     {
//       title: 'Cut onboarding time',
//       description: 'Get engineers up to speed in days, not months.',
//       bullets: [
//         {
//           name: 'Tackle growing pains',
//           description: `Engineers are constantly joining or switching teams. Make them effective, and help them stay that way.`,
//           icon: UsersIcon,
//         },
//         {
//           name: 'Make tools discoverable',
//           description: `Centralize around the service catalog. Make API specs, docs and tooling easy to access in one place`,
//           icon: BookOpenIcon,
//         },
//         {
//           name: 'Proven results',
//           description: `Spotify saw "time to 10ᵗʰ commit" drop by 55% in the two years after deploying Backstage internally. All while onboarding hundreds of engineers each year.`,
//           icon: PresentationChartLineIcon,
//         },
//       ],
//     },
//     {
//       title: 'Standardize service creation',
//       description:
//         'Create services from templates which already have your best practices built in.',
//       bullets: [
//         {
//           name: 'Increase production consistency',
//           description: `Homogeneous environments are easier to operate and scale. Cut down on snowflake services.`,
//           icon: FingerPrintIcon,
//         },
//         {
//           name: 'Golden path to production',
//           description: `Encode your best practices to make production consistency the path of least resistance.`,
//           icon: MapIcon,
//         },
//       ],
//     },
//     {
//       title: 'Codify service ownership',
//       description: 'Track teams and software and assign one to the other.',
//       bullets: [
//         {
//           name: 'Improve maintainability',
//           description: `Unowned services are a maintenance, security and operations nightmare.`,
//           icon: BadgeCheckIcon,
//         },
//         {
//           name: 'Unlock InnerSourcing',
//           description: `Empower teams to contribute to the code around them. It starts with a conversation with the service owner.`,
//           icon: CubeTransparentIcon,
//         },
//       ],
//     },
//     {
//       title: 'Tech docs that get read',
//       description: 'Docs-like-code helps Spotify document thousands of internal components.',
//       bullets: [
//         {
//           name: 'Write docs as code',
//           description:
//             'Markdown docs live alongside the code where they can be peer reviewed in pull requests.',
//           icon: PencilAltIcon,
//         },
//         {
//           name: 'Organized and searchable',
//           description:
//             'Docs are organized in the service catalog and searchable for discoverability.',
//           icon: SearchCircleIcon,
//         },
//         {
//           name: 'Demonstrated at scale',
//           description:
//             'Spotify experienced an explosion of docs writing after adopting this methodology internally.',
//           icon: PresentationChartLineIcon,
//         },
//       ],
//     },
//     {
//       title: 'Track engineering maturity and migrations',
//       description:
//         'Define engineering standards and initiatives that get checked automatically across your ecosystem.',
//       prompt: 'Coming soon',
//       bullets: [
//         {
//           name: 'Find out which teams are experiencing challenges',
//           description:
//             'Standards adherence can be grouped by teams, offering insight into who may need more support to adopt new practices.',
//           icon: UserGroupIcon,
//         },
//         {
//           name: 'Understand your migration’s progress',
//           description:
//             'Initiatives are designed to keep track of wide-org migrations, offering insights about the change across software components. ',
//           icon: ChartBarIcon,
//         },
//       ],
//     },
//   ],
// };

// const PLUGINS_SUPPORTED = {
//   title: 'Powerful plugins',
//   subTitle: `Open-source Backstage plugins are supported by default. Push your own if you need something bespoke.`,
//   link: {
//     text: 'Browse our plugins and integrations catalog',
//     to: '/docs/integrations/',
//   },

//   logos: [
//     {
//       src: <GitHubLogo />,
//       key: 'github',
//     },
//     {
//       src: <KubernetesLogo />,
//       key: 'k8s',
//     },
//     {
//       src: <PagerDutyLogo />,
//       key: 'pagerduty',
//     },
//     {
//       src: <CircleCiLogo />,
//       key: 'circleci',
//     },
//     {
//       src: <ArgoLogo />,
//       key: 'argocd',
//     },
//     {
//       src: <JiraSoftwareLogo />,
//       key: 'jira',
//     },
//   ],
// };

const Home = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
}) => (
  <>
    <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

    <SitewideHeader borderBottom={false} ctaTo="/request-demo/" ctaText="Get a demo" />

    <SideBySideHero />

    <AlternatingFeatureWrapper id="product">
      <AlternatingFeatureBlock featureItem={PRODUCT.features[0]} illustrationSide="left" />
      <AlternatingFeatureBlock featureItem={PRODUCT.features[1]} illustrationSide="right" />
      <AlternatingFeatureBlock featureItem={PRODUCT.features[2]} illustrationSide="left" />
      <AlternatingFeatureBlock featureItem={PRODUCT.features[3]} illustrationSide="right" />
    </AlternatingFeatureWrapper>

    <section className="backstage-background text-white max-w-xl mx-auto p-4 mt-5 sm:px-10 md:rounded-lg lg:max-w-6xl lg:grid lg:grid-cols-8 lg:items-center lg:gap-8 lg:grid-flow-row-dense">
      <div className="lg:col-start-4 lg:col-span-5">
        <Title el="h3" className={classNames('xl:text-3xl xl:tracking-tight')}>
          Leading architectural change through <nobr>Roadie Backstage</nobr>
        </Title>
        <p className="text-xl mt-5">
          <strong>Andy Hoffman, Caribou</strong>
          <br />
          BackstageCon, Detroit 2022
        </p>
        <p className="text-lg mt-5">
          Yesterday you’re a scrappy startup; today, you’re funded and have 12 months to 10x your
          team and system capacity. In this talk, Andy shows how Backstage—via Roadie—can help
          wrangle unintuitive architectures, overwhelming options, and unfamiliar patterns for teams
          going through hyper-growth.
        </p>
        <a
          href="https://youtu.be/6Ss1e-9X_JY?t=51"
          target="_blank"
          className="block mt-5 font-bold uppercase text-lg tracking-wider"
        >
          Watch talk on YouTube &rarr;
        </a>
      </div>
      <aside className="lg:col-span-3">
        <a href="https://youtu.be/6Ss1e-9X_JY?t=51" target="_blank">
          <img src={AndyThumbImg} alt="Andy's talk thumbnail" />
        </a>
      </aside>
    </section>

    <section className="text-center mt-10 xl:mt-16">
      <Title el="h1" className="xl:text-3xl xl:tracking-tight text-orange-600">
        Adopt Backstage through Roadie
      </Title>
      <figure className="max-w-2xl px-4 mx-auto mt-10 mb-5">
        <blockquote cite="https://youtu.be/6Ss1e-9X_JY?t=51" className="text-2xl font-bold tracking-wide">
          “Roadie has been fantastic to work with and allowed us to adopt Backstage without the
          overhead.”
        </blockquote>
        <figcaption className="text-xl mt-5">
          Andy Hoffman, DevOps Engineer Manager, Caribou
        </figcaption>
      </figure>
      <Button
        link={true}
        color="primary"
        size="medium"
        to="/request-demo/"
        className="font-bold tracking-wide mt-6"
        text="Request a Demo"
      />
    </section>

    {/* <TestimonialsCloud /> */}
    {/* 
    <div className="pt-24 bg-gray-50 pb-32" id="solutions">
      <SimpleCenteredHeading
        headline="Turn tribal knowledge into shared context"
        lead="A single pane of glass for your software development life cycle."
      />

      <TextBasedFeatureBlock content={SOLUTIONS} />
    </div>

    <SplitGridLogoCloud content={PLUGINS_SUPPORTED} />

    <FooterCTA /> */}

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
