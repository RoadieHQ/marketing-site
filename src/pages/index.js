import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, SitewideHeader, Link } from 'components';
import {
  AlternatingFeatureBlock,
  AlternatingFeatureWrapper,
  SimpleCenteredHeading,
  TextBasedFeatureBlock,
  SplitGridLogoCloud,
  TestimonialsCloud,
  VideoHero,
  CustomerLogoCloud,
} from 'components/landing';
import Title from '../components/Title';
import classNames from 'classnames';
import Button from '../components/forms/Button';
import { PostSummary } from 'components/article';
import mapContentfulBlogPostToMarkdownRemarkBlogPost from '../mapContentfulBlogPostToMarkdownRemarkBlogPost';
import { PAGE_PATHS } from '../contactFormConstants';

import {
  FingerPrintIcon,
  MapIcon,
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

import KeepSafeImg from '../../content/assets/home/illustrations/home-keep-backstage-safe.png';
import NoCodeImg from '../../content/assets/home/illustrations/home-no-code-backstage.svg';
import CustomPluginsImg from '../../content/assets/home/illustrations/home-custom-plugins.png';
import KubernetesImg from '../../content/assets/home/illustrations/home-kubernetes.svg';
import AndyThumbImg from '../../content/assets/home/illustrations/home-andy-video-thumb.png';

import GitHubLogo from '../../content/assets/logos/github/logos/modified/github.inline.svg';
import KubernetesLogo from '../../content/assets/logos/kubernetes/kubernetes.inline.svg';
import CircleCiLogo from '../../content/assets/logos/circle-ci/circleci.inline.svg';
import PagerDutyLogo from '../../content/assets/logos/pagerduty/pagerduty.inline.svg';
import ArgoLogo from '../../content/assets/logos/argo-cd/argo.inline.svg';
import JiraSoftwareLogo from '../../content/assets/logos/jira/jira.inline.svg';

const SEO_TITLE = 'Roadie - Internal Developer Portal built on Backstage';
const LEAD = `Roadie is the most customizable Internal Developer Portal with built-in best practices, automated workflows, actionable insights built on Backstage`;

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
        'As highlighted by Gartner’s report on Developer Portals, standing up and maintaining Backstage takes significant effort. Roadie gives you a production-grade Backstage instance and keeps it safe through regular upgrades, SSO and dedicated infrastructure.',
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
        'With a vibrant community of contributors, new Backstage plugins and features are popping up regularly. Roadie brings all these features, while smoothening out rough edges like GitHub rate limits.',
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
      description: 'Roadie connects to your infrastructure using a broker ',
      illustration: {
        png: KubernetesImg,
        alt: '',
      },
      paragraphs: [
        'Roadie uses a Broker to integrate with your internal APIs, including Kubernetes clusters and on-prem services. This allows secure access your endpoints without exposing them to the public internet.',
        'The broker is open-source code with an audit log and outboound egress, meaning you can be confident that access is limited in the way that you want.',
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

const Home = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges.map(mapContentfulBlogPostToMarkdownRemarkBlogPost);
  return (
    <>
      <SEO title={SEO_TITLE} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <VideoHero />
      <CustomerLogoCloud />

      <AlternatingFeatureWrapper id="product">
        <AlternatingFeatureBlock featureItem={PRODUCT.features[0]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[1]} illustrationSide="right" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[2]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[3]} illustrationSide="right" />
      </AlternatingFeatureWrapper>

      <section className="backstage-background text-white max-w-xl mx-auto p-4 mt-5 sm:px-10 md:rounded-lg lg:max-w-6xl lg:grid lg:grid-cols-8 lg:items-center lg:gap-8 lg:grid-flow-row-dense">
        <div className="lg:col-start-4 lg:col-span-5">
          <Title el="h3" className={classNames('xl:text-2xl xl:tracking-tight')}>
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
            wrangle unintuitive architectures, overwhelming options, and unfamiliar patterns for
            teams going through hyper-growth.
          </p>
          <Link
            to="https://youtu.be/6Ss1e-9X_JY?t=51"
            className="block mt-5 font-bold uppercase text-lg tracking-wider"
          >
            Watch talk on YouTube &rarr;
          </Link>
        </div>
        <aside className="lg:col-span-3">
          <Link to="https://youtu.be/6Ss1e-9X_JY?t=51">
            <img src={AndyThumbImg} alt="Andy's talk thumbnail" />
          </Link>
        </aside>
      </section>

      <section className="text-center mt-10 xl:mt-16">
        <Title el="h2" className="xl:text-3xl xl:tracking-tight text-orange-600">
          Adopt Backstage through Roadie
        </Title>
        <figure className="max-w-2xl px-4 mx-auto mt-10 mb-5">
          <blockquote
            cite="https://youtu.be/6Ss1e-9X_JY?t=51"
            className="text-2xl font-bold tracking-wide"
          >
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
          to={PAGE_PATHS.requestDemo}
          className="font-bold tracking-wide mt-6"
          text="Request a Demo"
        />
      </section>

      {/* <TestimonialsCloud /> */}

      <div className="pt-28 bg-gray-50 pb-20 mt-24" id="solutions">
        <SimpleCenteredHeading
          headline="Turn tribal knowledge into shared context"
          headlineSize="medium"
          lead="A single pane of glass for your software development life cycle."
        />

        <TextBasedFeatureBlock content={SOLUTIONS} />
      </div>

      <TestimonialsCloud />

      <SplitGridLogoCloud content={PLUGINS_SUPPORTED} />

      {/* <FooterCTA /> */}

      <section className="max-w-xl mx-auto p-4 my-16 pt-10 sm:px-10 lg:max-w-7xl lg:my-28 border-t-2 border-[#F2F2F2]">
        <Title el="h2" className="xl:text-xl xl:tracking-tight">
          <Link to="/blog">From Roadie&apos;s blog &rarr;</Link>
        </Title>

        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map(({ node }) => (
            <PostSummary key={node.fields.slug} post={node} />
          ))}
        </div>
      </section>

      <SitewideFooter />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulBlogPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { ne: "newsletter" } }
      limit: 3
    ) {
      edges {
        node {
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          date
          author {
            name
            avatar {
              gatsbyImageData(layout: FIXED, width: 40)
            }
          }
          slug
          tags
          title
          lastValidated
          body {
            childMarkdownRemark {
              timeToRead
            }
          }

          coverImage {
            gatsbyImageData(height: 192)
            title
          }
        }
      }
    }
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
