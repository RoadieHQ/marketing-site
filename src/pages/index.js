import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, SitewideHeader, Link } from 'components';
import {
  AlternatingFeatureBlock,
  SideBySideHero,
  AlternatingFeatureWrapper,
  TextBasedFeatureBlock,
  SplitGridLogoCloud,
  TestimonialsCloud,
} from 'components/landing';
import Title from '../components/Title';
import Button from '../components/forms/Button';
import { PostSummary } from 'components/article';
import mapContentfulBlogPostToMarkdownRemarkBlogPost from '../mapContentfulBlogPostToMarkdownRemarkBlogPost';

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
import NoCodeImg from '../../content/assets/home/illustrations/home-nocode.png';
import CustomPluginsImg from '../../content/assets/home/illustrations/home-custom-plugins.png';
import KubernetesImg from '../../content/assets/home/illustrations/home-kubernetes.svg';
import AndyThumbImg from '../../content/assets/home/illustrations/home-andy-video-thumb.png';

import GitHubLogo from '../../content/assets/logos/github/logos/modified/github.inline.svg';
import KubernetesLogo from '../../content/assets/logos/kubernetes/kubernetes.inline.svg';
import CircleCiLogo from '../../content/assets/logos/circle-ci/circleci.inline.svg';
import PagerDutyLogo from '../../content/assets/logos/pagerduty/pagerduty.inline.svg';
import ArgoLogo from '../../content/assets/logos/argo-cd/argo.inline.svg';
import JiraSoftwareLogo from '../../content/assets/logos/jira/jira.inline.svg';

const SEO_TITLE = 'Batteries included Spotify Backstage';
const LEAD = `Easier, scalable and zero-maintenance. With security, scorecards and customizability built-in.`;


const PRODUCT = {
  features: [
    {
      title: 'Automatic Updates',
      description: 'Keep your Developer Portal safe with automatic updates',
      illustration: {
        png: KeepSafeImg,
        alt: '',
      },
      paragraphs: [
        'Keep your Backstage instance safe with automatic upgrades, SSO, dedicated infrastructure, ephemeral environments for your Scaffolder actions. Roadie is SOC2 Type 2 Certified.',
      ],
    },
    {
      title: 'Easy-to-Use',
      description: 'No-Code UI for hassle-free Backstage management',
      illustration: {
        png: NoCodeImg,
        alt: '',
      },
      paragraphs: [
        'Install plugins and integrations, manage permissions, and debug issues. All via our simple UI.',
      ],
    },
    {
      title: 'Make it your own',
      description: 'Install custom Backstage plugins and private renderers',
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
      title: 'Kubernetes Integration',
      description: 'Connect to your infrastructure using a broker',
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
          description: `Centralize around the service Catalog. Make API specs, docs, and tooling easy to access in one place`,
          icon: BookOpenIcon,
        },
        {
          name: 'Proven results',
          description: `Spotify saw "time to 10ᵗʰ commit" drop by 55% in the two years after deploying Backstage. All while onboarding hundreds of engineers.`,
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
          description: `Unowned services are a maintenance, security and operations nightmare. Track who owns what.`,
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
            'Markdown docs live alongside the code where they can be peer-reviewed in pull requests.',
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
          name: 'Discover struggling teams',
          description:
            'Standards adherence can be grouped by teams, offering insight into who may need more support to adopt new practices.',
          icon: UserGroupIcon,
        },
        {
          name: 'Understand your progress',
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
  const siteTitle = data.site.siteMetadata.title;

  const posts = data.allContentfulBlogPost.edges.map(mapContentfulBlogPostToMarkdownRemarkBlogPost);
  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <SideBySideHero />
      
      <div className='Container'>
        <AlternatingFeatureWrapper id="product">
          <AlternatingFeatureBlock featureItem={PRODUCT.features[0]} illustrationSide="left" />
          <AlternatingFeatureBlock featureItem={PRODUCT.features[1]} illustrationSide="left" />
          <AlternatingFeatureBlock featureItem={PRODUCT.features[2]} illustrationSide="left" />
          <AlternatingFeatureBlock featureItem={PRODUCT.features[3]} illustrationSide="left" />
        </AlternatingFeatureWrapper>
      </div>

      <section className="Section size-3">
        <div className="Container">
          <h3 className='Text size-7'>
            Leading architectural change through <nobr>Roadie Backstage</nobr>
          </h3>
          <div>
            <span className='Text size-3 weight-2'>Andy Hoffman, Caribou</span>
            <span className='Text size-3 lowContrast'>BackstageCon, Detroit 2022</span>
          </div>
          <p className="Text size-4">
            Yesterday you’re a scrappy startup; today, you’re funded and have 12 months to 10x your
            team and system capacity. In this talk, Andy shows how Backstage—via Roadie—can help
            wrangle unintuitive architectures, overwhelming options, and unfamiliar patterns for
            teams going through hyper-growth.
          </p>
          <Link
            to="https://youtu.be/6Ss1e-9X_JY?t=51"
            className="Link"
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

      <section className="Section size-3">
        <div className='Container'>
          <h2 className="Text size-7">
            Adopt Backstage through Roadie
          </h2>
          <figure className="max-w-2xl px-4 mx-auto mt-10 mb-5">
            <blockquote
              cite="https://youtu.be/6Ss1e-9X_JY?t=51"
              className="Text size-6"
            >
              “Roadie has been fantastic to work with and allowed us to adopt Backstage without the
              overhead.”
            </blockquote>
            <figcaption className="Text size-3 lowContrast">
              Andy Hoffman, DevOps Engineer Manager, Caribou
            </figcaption>
          </figure>
          <Button
            link={true}
            to="/request-demo/"
            className="Button size-3 accent"
            text="Request a Demo"
          />
        </div>
      </section>

      <section className="Section size-3" id="solutions">
        <div className='Container'>
          <div className='Flex column gap-9'>
            <div className='Flex column gap-2'>
              <h2 className='Text size-7'>Turn tribal knowledge into shared context</h2>
              <p className='Text size-4 lowContrast'>A single pane of glass for your software development life cycle.</p>
            </div>

            <TextBasedFeatureBlock content={SOLUTIONS} />
          </div>
        </div>
      </section>

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
        }
      }
    }
  }
`;
