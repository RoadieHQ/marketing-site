import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, SitewideHeader, Link } from 'components';
import {
  AlternatingFeatureBlock,
  SideBySideHero,
  AlternatingFeatureWrapper,
  PluginsList,
  YouTubeTestimonial,
  SideBySideBulletParagraphs,
} from 'components/landing';
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

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

      <div className="mb-20">
        <SitewideHeader borderBottom={false} />
      </div>

      <SideBySideHero />
      <YouTubeTestimonial />

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <SideBySideBulletParagraphs />

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className='Section size-3 flared cropped mb-8'>
        <div className='Container' style={{ position: 'relative' }}>
          <div className='Flex column gap-9 ai-stretch'>
            <div className='Flex column gap-5 ai-center'>
              <h2 className='Text size-9 ta-center'>Powerful Plugins</h2>
              <p className='Text size-5 weight-1 lowContrast ta-center mb-4' style={{ maxWidth: 620 }}>Open-source Backstage plugins are supported by default. Push your own if you need something bespoke.</p>
              <Link
                to="#"
                className="Link mb-3 display-if"
              >
                <span className='Text size-4'>
                  Browse plugin marketplace
                </span>
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </Link>

            </div>

            <PluginsList />
          </div>

          <div style={{ aspectRatio: '1/1', position: 'absolute', width: '100%', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.02)', borderRadius: '50%', background: 'radial-gradient(circle, var(--orange-8) 0%, var(--yellow-5) 25%,var(--yellow-4) 30%, var(--yellow-2) 40%, transparent 45%)' }}></div>
          <div style={{ aspectRatio: '1/1', position: 'absolute', width: 'calc(100% - 112px)', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.03)', borderRadius: '50%' }}></div>
          <div style={{ aspectRatio: '1/1', position: 'absolute', width: 'calc(100% - 224px)', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.05)', borderRadius: '50%' }}></div>
          <div style={{ aspectRatio: '1/1', position: 'absolute', width: 'calc(100% - 336px)', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.07)', borderRadius: '50%' }}></div>
          <div style={{ aspectRatio: '1/1', position: 'absolute', width: 'calc(100% - 448px)', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.08)', borderRadius: '50%' }}></div>
          <div style={{ aspectRatio: '1/1', position: 'absolute', width: 'calc(100% - 560px)', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.1)', borderRadius: '50%' }}></div>
          <div style={{ aspectRatio: '1/1', position: 'absolute', width: 'calc(100% - 672px)', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.11)', borderRadius: '50%' }}></div>
          <div style={{ aspectRatio: '1/1', position: 'absolute', width: 'calc(100% - 784px)', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.12)', borderRadius: '50%' }}></div>
          <div style={{ aspectRatio: '1/1', position: 'absolute', width: 'calc(100% - 896px)', left: '50%', bottom: 'calc(var(--space-9) * -1)', transform: 'translateX(-50%) translateY(50%)', zIndex: '-1', border: '1px solid rgba(0,0,0,.12)', borderRadius: '50%' }}></div>
        </div>
      </section>

      <section className='Section size-3 mb-8'>
        <div className='Container'>
          <div className='Flex column gap-2 mb-5 bp2-mb-9'>
            <h2 className='Text size-7'>Turn tribal knowledge into shared context</h2>
            <p className='Text size-5 weight-1 lowContrast'>A single pane of glass for your software development life cycle.</p>
          </div>
          <div className='Grid columns-1 bp2-columns-2 bp3-columns-3 gap-5 bp2-gap-9'>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Tackle growing pains</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Engineers are constantly joining or switching teams. Make them effective, and help them stay that way.</p>
              </div>
            </div>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1ZM9.5 3C9.77614 3 10 3.22386 10 3.5V13.5C10 13.7761 9.77614 14 9.5 14C9.22386 14 9 13.7761 9 13.5V3.5C9 3.22386 9.22386 3 9.5 3ZM13.5 3C13.7761 3 14 3.22386 14 3.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V3.5C13 3.22386 13.2239 3 13.5 3ZM5.5 4C5.77614 4 6 4.22386 6 4.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V4.5C5 4.22386 5.22386 4 5.5 4ZM1.5 5C1.77614 5 2 5.22386 2 5.5V13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V5.5C1 5.22386 1.22386 5 1.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.5C7 5.22386 7.22386 5 7.5 5ZM3.5 7C3.77614 7 4 7.22386 4 7.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V7.5C3 7.22386 3.22386 7 3.5 7Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Proven results</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Spotify saw "time to 10ᵗʰ commit" drop by 55% in the two years after deploying Backstage internally.</p>
              </div>
            </div>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Increase production consistency</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Homogeneous environments are easier to operate and scale. Cut down on snowflake services.</p>
              </div>
            </div>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Golden path to production</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Encode your best practices to make production consistency the path of least resistance.</p>
              </div>
            </div>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8113 1.64706C6.62188 2.87918 6.68268 3.88523 6.76848 5.30499C6.78415 5.56426 6.80065 5.83732 6.81661 6.12808C6.83111 6.39208 6.63758 6.62172 6.37495 6.65217C6.11232 6.68262 5.87138 6.50334 5.82509 6.24304L5.74754 5.80698C5.64402 5.16529 5.48355 4.25481 5.17807 3.44741C4.86241 2.61312 4.4486 2.04121 3.93436 1.86044C3.64994 1.76104 3.41901 1.84279 3.25868 2.01052C3.08746 2.18962 2.9976 2.47065 3.0627 2.75399C3.2146 3.34424 3.44627 3.9167 3.69836 4.51802C3.72082 4.57158 3.74346 4.62543 3.76621 4.67954C3.9954 5.22457 4.23619 5.7972 4.41644 6.39081L4.41691 6.39238C4.562 6.87586 4.65646 7.2595 4.73086 7.56165C4.76034 7.68138 4.78667 7.78831 4.81175 7.88359C4.86768 8.09606 4.77836 8.32014 4.59161 8.43588C4.40486 8.55161 4.16445 8.53188 3.99907 8.38725C3.73749 8.15848 3.515 7.92784 3.31817 7.71802C3.27627 7.67335 3.23602 7.63018 3.19705 7.58838C3.04777 7.42826 2.91712 7.28812 2.78334 7.16029C2.45989 6.85122 2.18398 6.68004 1.80585 6.64369L1.80324 6.64343C1.56117 6.61888 1.41402 6.66441 1.31756 6.72627C1.21899 6.78947 1.11988 6.90414 1.03784 7.1123C0.976576 7.28492 1.01515 7.62987 1.1929 7.96911L1.19728 7.97747C1.40086 8.38452 1.74475 8.81587 2.18141 9.29299C2.39739 9.52898 2.62872 9.76849 2.86934 10.0174L2.87966 10.0281C3.11546 10.2721 3.35962 10.5247 3.59713 10.7827C4.4288 11.6863 5.27706 12.7538 5.4627 14H11.5087C11.5636 12.4353 11.8756 11.268 12.2875 10.1346C12.4454 9.70041 12.6121 9.28412 12.7826 8.85829C13.1097 8.04139 13.4509 7.18937 13.7705 6.10824C14.0989 4.99737 14.0097 4.37033 13.8613 4.03984C13.717 3.71858 13.4914 3.61786 13.3816 3.59606C13.1381 3.54774 13.0384 3.60947 12.9698 3.67901C12.867 3.78316 12.7698 3.98273 12.6921 4.30269C12.6166 4.61345 12.5752 4.96517 12.533 5.32501L12.5298 5.35285C12.4924 5.67242 12.4505 6.03016 12.3665 6.30098C12.3383 6.40699 12.2819 6.50407 12.1979 6.57539C12.1382 6.6261 12.0104 6.70818 11.8309 6.69312C11.5424 6.66891 11.3712 6.42143 11.365 6.14783C11.356 5.75454 11.3883 5.35864 11.4074 4.96608C11.4428 4.23646 11.477 3.5337 11.4245 2.8342L11.4242 2.82934C11.3916 2.32997 11.0493 2.00228 10.7007 1.9228C10.5305 1.88401 10.369 1.90601 10.2347 1.9835C10.103 2.05946 9.95535 2.21318 9.8574 2.51394L9.85631 2.51726C9.81525 2.6404 9.77298 2.87753 9.73606 3.2124C9.70044 3.53542 9.67337 3.91279 9.65156 4.29418C9.6329 4.62033 9.61785 4.9584 9.60434 5.26194C9.58728 5.64529 9.57267 5.97357 9.55633 6.1532C9.54983 6.22459 9.52939 6.29493 9.49501 6.35785C9.47356 6.39711 9.36115 6.60947 9.07106 6.61843C8.77917 6.62744 8.63975 6.40057 8.61698 6.35919C8.55634 6.24899 8.55066 6.11807 8.54754 5.99283C8.54474 5.88064 8.54294 5.71798 8.54174 5.54767C8.53935 5.20582 8.53935 4.81919 8.53935 4.70952C8.53935 3.6657 8.53838 2.65372 8.44714 1.64372C8.39183 1.24127 8.06278 1.00455 7.6436 1.00005C7.22399 0.995552 6.87918 1.22704 6.8113 1.64706ZM9.41219 1.3617C9.21469 0.448484 8.39913 0.00810324 7.65433 0.00011154C6.86452 -0.00836308 5.98761 0.465881 5.82365 1.49037L5.82318 1.49334C5.78239 1.7584 5.75229 2.01481 5.7309 2.26652C5.39423 1.67364 4.92622 1.14894 4.2655 0.916859C3.58661 0.679312 2.9492 0.887087 2.53582 1.31952C2.13415 1.73971 1.94438 2.36742 2.09031 2.98746L2.09269 2.99713C2.26478 3.66808 2.52396 4.30316 2.77613 4.90465C2.79814 4.95717 2.8201 5.00941 2.84194 5.06139C3.02139 5.48842 3.19378 5.89866 3.33871 6.31256C2.96404 5.98142 2.51925 5.70796 1.90276 5.6484C1.48865 5.60663 1.10391 5.67536 0.777805 5.88444C0.454239 6.0919 0.240671 6.40405 0.104187 6.75406L0.100868 6.76281C-0.10184 7.31286 0.0663312 7.97157 0.304895 8.42897C0.573704 8.96474 0.996104 9.47904 1.44372 9.96813C1.67046 10.2159 1.91136 10.4652 2.15033 10.7124L2.15682 10.7191C2.39524 10.9658 2.63217 11.2109 2.86134 11.4599C3.80937 12.49 4.50002 13.4632 4.50002 14.5C4.50002 14.7761 4.72388 15 5.00002 15H12C12.2762 15 12.5 14.7761 12.5 14.5C12.5 12.8212 12.8021 11.6462 13.2274 10.4762C13.3653 10.0968 13.5216 9.70579 13.6868 9.29247C14.0238 8.44922 14.398 7.51298 14.7295 6.39175C15.0956 5.15324 15.0559 4.25904 14.7735 3.63017C14.487 2.99208 13.9798 2.6953 13.5763 2.6152C13.1276 2.52614 12.7367 2.60475 12.4268 2.83081C12.4253 2.80773 12.4236 2.78468 12.4219 2.76167C12.3587 1.8105 11.6907 1.12285 10.923 0.947821C10.5346 0.859287 10.1111 0.900393 9.73509 1.11724C9.61852 1.18446 9.51055 1.26623 9.41219 1.3617Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Improve maintainability</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Unowned services are a maintenance, security and operations nightmare.</p>
              </div>
            </div>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Unlock InnerSourcing</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Empower teams to contribute to the code around them. It starts with a conversation with the service owner.</p>
              </div>
            </div>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Write docs as code</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Markdown docs live alongside the code where they can be peer reviewed in pull requests.</p>
              </div>
            </div>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Demonstrated at scale</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Spotify experienced an explosion of docs writing after adopting this methodology internally.</p>
              </div>
            </div>
            <div>
              <div className='Flex row ai-center gap-3'>
                <div className='IconContainer size-2 rounded hollow'>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className='Text size-4 weight-2'>Organized and searchable</h4>
                </div>
              </div>
              <div className='pl-8 ml-1'>
                <p className='Text size-3 lowContrast'>Docs are organized in the service catalog and searchable for discoverability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className='Section size-3'>
        <div className='Container'>
          <div className='Flex column gap-2'>
            <h2 className='Text size-4 weight-2 orange'>Testimonials</h2>
            <span className='Text size-7 mb-9'>What our customers say</span>
          </div>
          <div className='Grid columns-1 bp2-columns-2 bp3-columns-3 gap-4'>
            <div className='' style={{ borderRadius: 6, background: 'orangered', padding: 20, }}>
              <div className='Flex column gap-4'>
                <p className='Text size-6 weight-1 white'>“The Roadie team have been incredible to work with. They're obviously Backstage experts, and their platform provides us with a ton of flexibility and integrations.</p>
                <p className='Text size-6 weight-1 white'>We've been able to start using Backstage must faster and we don't have to worry about the maintenance.”</p>
                <div className='Flex row ai-center gap-2'>
                  <div className='Avatar size-3'>
                    <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg' />
                  </div>
                  <div className='Flex column'>
                    <span className='Text size-3 weight-2 white'>Ron Barabash</span>
                    <span className='Text size-3 whiteA'>Team Lead at Yotpo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='Flex column gap-4'>
              <div className='' style={{ borderRadius: 6, boxShadow: 'inset 0 0 0 1px gainsboro', padding: 20, }}>
                <div className='Flex column gap-4'>
                  <p className='Text size-4'>“Backstage has been pivotal to our growth. And Roadie has been pivotal in supporting us at the operations, roadmap, and onboarding level.”</p>
                  <div className='Flex row ai-center gap-2'>
                    <div className='Avatar size-3'>
                      <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg' />
                    </div>
                    <div className='Flex column'>
                      <span className='Text size-3 weight-2'>Mark Loyzer</span>
                      <span className='Text size-3 lowContrast'>Senior Software Engineer at Hopper</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='fg-1' style={{ borderRadius: 6, boxShadow: 'inset 0 0 0 1px gainsboro', padding: 20, }}>
                <p className='Text size-4'>“Having a place to gather documentation of our systems and APIs, while keeping those definitions close to the source, has been a real win. The Roadie team has been responsive to all of our questions, and incredibly proactive in communicating updates.”</p>
                <div className='Flex row ai-center gap-2'>
                  <div className='Avatar size-3'>
                    <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg' />
                  </div>
                  <div className='Flex column'>
                    <span className='Text size-3 weight-2'>Jon Stern</span>
                    <span className='Text size-3 lowContrast'>Director of Engineering at NCSA</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='' style={{ borderRadius: 6, boxShadow: 'inset 0 0 0 1px gainsboro', padding: 20, }}>
                <p className='Text size-4'>“Roadie helps us get the most out of Backstage while saving time and money on setup and operation.”</p>
                <div className='Flex row ai-center gap-2'>
                  <div className='Avatar size-3'>
                    <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg' />
                  </div>
                  <div className='Flex column'>
                    <span className='Text size-3 weight-2'>Enrique Amodeo Rubio</span>
                    <span className='Text size-3 lowContrast'>Staff Engineer at Contentful</span>
                  </div>
                </div>
              </div>
              <div className='' style={{ borderRadius: 6, boxShadow: 'inset 0 0 0 1px gainsboro', padding: 20, }}>
                <p className='Text size-4'>“The Roadie team have been incredible to work with. They're obviously Backstage experts, and their platform provides us with a ton of flexibility and integrations.</p>
                <div className='Flex row ai-center gap-2'>
                  <div className='Avatar size-3'>
                    <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg' />
                  </div>
                  <div className='Flex column'>
                    <span className='Text size-3 weight-2'>Colm Tuite</span>
                    <span className='Text size-3 lowContrast'>CEO at Modulz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className='Section size-3'>
        <div className='Container'>
          <div className='Flex column bp2-row jc-between'>
            <span className='Text size-7 mb-7 bp2-mb-0'>Simpler, safer, and more powerful Backstage.</span>
            <a className='Button size-3 accent' href="#">Request a Demo</a>
          </div>
        </div>
      </section>


      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      {/* <section className="max-w-xl mx-auto p-4 my-16 pt-10 sm:px-10 lg:max-w-7xl lg:my-28 border-t-2 border-[#F2F2F2]">
        <Title el="h2" className="xl:text-xl xl:tracking-tight">
          <Link to="/blog">From Roadie&apos;s blog &rarr;</Link>
        </Title>

        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map(({ node }) => (
            <PostSummary key={node.fields.slug} post={node} />
          ))}
        </div>
      </section> */}

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
