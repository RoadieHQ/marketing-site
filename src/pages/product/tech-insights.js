import React from 'react';
import { graphql } from 'gatsby';
import has from 'lodash/has';
import { SEO, SitewideFooter, SitewideHeader, Button, Headline } from 'components';
import { AlternatingFeatureBlock, AlternatingFeatureWrapper } from 'components/landing';

import TechInsightsScreenshotImg from '../../../content/assets/product-pages/techinsights-hero.svg';
import CreateCheckImg from '../../../content/assets/product-pages/techinsights-create-check.svg';
import GitHubBotImg from '../../../content/assets/product-pages/techinsights-github-bot.svg';
import Logi4jImg from '../../../content/assets/product-pages/techinsights-logi4j.svg';

import { LOGOS } from '../../components/landing/CustomerLogoCloud';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import classNames from 'classnames';

const SEO_TITLE = 'Tech Insights: scorecards for Backstage';
const LEAD = `Establish engineering standards and automatically ensure software is meeting expectations around security, operations, compliance, deployment and more.`;

const PRODUCT = {
  features: [
    {
      title: 'Write Checks',
      description: 'Create a culture of quality and accountability',
      illustration: {
        png: CreateCheckImg,
        alt: 'A screenshot of an interface where a user is creating an automated check to determine if software is registered in PagerDuty.',
      },
      paragraphs: [
        'Checks run against source code and the APIs your tools expose. They find software which is not meeting expectations and report this to the people who can get it fixed.',
        `Scorecards group checks together into concepts your teams understand. Like “Security best practices - Level 1” or “Production SRE requirements - Level 3”.`,
      ],
    },
    {
      title: 'Improve Software',
      description: 'Nudge your teams towards better standards',
      comingSoon: true,
      illustration: {
        png: GitHubBotImg,
        alt: '',
      },
      paragraphs: [
        'Teams can see how they compare to the rest of your company so code quality is gamified.',
        'Notifications in Slack and PRs warn engineers when they are about to make a change that will violate an engineering standard.',
      ],
    },
    {
      title: 'Gain Insight',
      description: 'Run migrations with ease',
      illustration: {
        png: Logi4jImg,
        alt: '',
      },
      paragraphs: [
        'Track and report the progress of migrations company-wide. No more spreadsheets; create auto-updating reports that show the current state of each migration.',
      ],
    },
  ],
};

const UsecaseTabs = () => {
  const tabBase = 'inline-block p-4 rounded-t-lg';
  const activeTabClass =
    'text-orange-600 border-orange-600 hover:text-orange-600 hover:border-orange-600';
  const inactiveTabClass = classNames(
    tabBase,
    'text-lg font-bold text-blueroadie  border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 cursor-pointer'
  );
  return (
    <div>
      <Tabs
        selectedTabClassName={activeTabClass}
        defaultIndex={1}
        className="border-b border-gray-200"
      >
        <TabList className="flex flex-wrap justify-center mb-4">
          <Tab className={inactiveTabClass}>Catalog Correctness</Tab>
          <Tab className={inactiveTabClass}>DevOps</Tab>
          <Tab className={inactiveTabClass}>Security</Tab>
          <Tab className={inactiveTabClass}>SRE</Tab>
        </TabList>
        <TabPanel className="lg:flex px-4 items-center">
          <div className="m-8 lg:w-1/2">
            <h4 className="text-2xl font-bold mb-4">
              Promote Catalog correctness and completeness
            </h4>
            <p className="text-lg">
              Use Tech Insights to ensure teams are using the Backstage Catalog to its full
              potential.
            </p>
          </div>
          <aside className="m-8 lg:w-1/2">
            <h5 className="px-4 uppercase font-bold mb-2">Example Checks</h5>
            <ul className="bg-white p-4 rounded text-lg list-disc marker:text-orange-500">
              <li className="mb-2">
                <code className="text-sm">labels.tier=3</code> label must be set
              </li>
              <li className="mb-2">
                <code className="text-sm">github.com/project-slug</code> must be set
              </li>
              <li className="mb-2">
                <code className="text-sm">spec.lifecycle</code> must be one of
                production,experimental,deprecated
              </li>
              <li className="mb-2">
                <code className="text-sm">spec.owner</code> must be set and must exist in the
                catalog
              </li>
              <li className="mb-2">Each Group must link to a slack channel</li>
            </ul>
          </aside>
        </TabPanel>
        <TabPanel className="lg:flex px-4 items-center">
          <div className="m-8 lg:w-1/2">
            <h4 className="text-2xl font-bold mb-4">Simplify DevOps initiatives</h4>
            <p className="text-lg">
              Use Tech Insights to ensure teams are testing and deploying correctly. Fine tune which
              kind of software component gets which checks applied.
            </p>
          </div>
          <aside className="m-8 lg:w-1/2">
            <h5 className="px-4 uppercase font-bold mb-2">Example Checks</h5>
            <ul className="bg-white p-4 rounded text-lg list-disc marker:text-orange-500">
              <li className="mb-2">
                <code className="text-sm">package.json</code> React version must be at least 17.0.0
              </li>
              <li className="mb-2">CircleCI must use mandatory orbs at the correct version</li>
              <li className="mb-2">Components must lint their code</li>
              <li className="mb-2">Jenkins must be configured to run the correct agent</li>
              <li className="mb-2">
                Open Source components must have fewer than 50 GitHub open issues.
              </li>
            </ul>
          </aside>
        </TabPanel>
        <TabPanel className="lg:flex px-4 items-center">
          <div className="m-8 lg:w-1/2">
            <h4 className="text-2xl font-bold mb-4">
              Keep a close watch on security and complicance
            </h4>
            <p className="text-lg">
              Use Tech Insights to ensure production code is undergoing the checks established by
              security and compliance teams.
            </p>
          </div>
          <aside className="m-8 lg:w-1/2">
            <h5 className="px-4 uppercase font-bold mb-2">Example Checks</h5>
            <ul className="bg-white p-4 rounded text-lg list-disc marker:text-orange-500">
              <li className="mb-2">Dependabot must run at least weekly</li>
              <li className="mb-2">Snyk must show zero critical CVEs for production components.</li>
              <li className="mb-2">Software must be analyzed by SonarCloud</li>
            </ul>
          </aside>
        </TabPanel>
        <TabPanel className="lg:flex px-4 items-center">
          <div className="m-8 lg:w-1/2">
            <h4 className="text-2xl font-bold mb-4">Ensure your services are ready for anything</h4>
            <p className="text-lg">
              Use Tech Insights to ensure software is reliable and operable.
            </p>
          </div>
          <aside className="m-8 lg:w-1/2">
            <h5 className="px-4 uppercase font-bold mb-2">Example Checks</h5>
            <ul className="bg-white p-4 rounded text-lg list-disc marker:text-orange-500">
              <li className="mb-2">
                Production software must have a team associated in PagerDuty.
              </li>
              <li className="mb-2">Components must have a README file set.</li>
              <li className="mb-2">SLO must be defined in Datadog.</li>
            </ul>
          </aside>
        </TabPanel>
      </Tabs>
    </div>
  );
};

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const darkLogos = [...LOGOS].filter(({ src }) => has(src, 'dark')).slice(0, 5);

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <section className="bg-tealbackstage mx-auto max-w-7xl xl:rounded-lg lg:flex items-center">
        <div className="lg:w-1/2 p-4 lg:px-10 lg:py-16">
          <div className="mb-8 flex items-center">
            <strong className="text-white uppercase text-xl font-highlight mr-2">
              <span>Roadie’s Tech Insights</span>
            </strong>
          </div>

          <Headline size="medium" className="text-white">
            <span className="bg-white text-tealbackstage inline-block px-1 rounded">
              Scorecards:
            </span>{' '}
            measure and improve your software quality
          </Headline>

          <h2 className="mt-5 text-white text-lg sm:mt-8 lg:text-xl xl:text-xl xl:mr-6">
            Establish engineering standards and automatically ensure software is meeting
            expectations around security, operations, compliance, deployment and more.
          </h2>

          <Button
            link={true}
            color="primary"
            size="medium"
            to="/free-trial/"
            className="font-bold bg-orange-600 tracking-wide mt-6"
            text="Try Roadie's Scorecards"
          />

          <div className="mt-5 md:mt-8 xl:mt-16">
            <span className="text-sm uppercase font-bold tracking-wider text-white">
              Trusted by dozens of scale-ups
            </span>
            <div className="flex flex-wrap">
              {darkLogos.map((logo) => (
                <img
                  className="h-8 my-3 mx-3 lg:h-10 lg:ml-0 lg:mr-11 xl:h-11 xl:mr-13"
                  key={`hero-logo-${logo.alt}`}
                  src={logo.src.white}
                  alt={logo.alt}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 py-4 pb-[1px] lg:py-16 lg:px-[2px]">
          <img
            src={TechInsightsScreenshotImg}
            alt="Tech Insights Screenshot"
            className="webkit-optimize-image-rendering"
          />
        </div>
      </section>

      <AlternatingFeatureWrapper id="product">
        <AlternatingFeatureBlock featureItem={PRODUCT.features[0]} illustrationSide="left" />
        <UsecaseTabs />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[1]} illustrationSide="right" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[2]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[3]} illustrationSide="right" />
      </AlternatingFeatureWrapper>

      <section className="Section size-3">
        <h4 className="Text size-7">
          See Roadie’s Tech Insights in action
        </h4>
        <Button
          link={true}
          to="/request-demo/"
          className="Button size-3 accent"
          text="Request a Demo"
        />
      </section>

      <SitewideFooter />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query TechInsightsLandingQuery {
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
