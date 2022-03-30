import React from 'react';
import { graphql } from 'gatsby';
import { Button, SEO, SitewideFooter, Headline, Lead, TextLink } from 'components';
import { ChevronRightIcon, LockClosedIcon, TerminalIcon } from '@heroicons/react/outline'

import DocsHeader from 'components/SitewideHeader/DocsHeader';
import developerPortalIllustrationPng from '../../content/assets/docs/illustrations/developer-portal.png';

const Doc = ({
  data: {
    site: { siteMetadata },
  },
  location,
}) => (
  <>
    <SEO
      title={`Docs | ${siteMetadata.title}`}
      description="Learn how to use Roadie"
    />
    <DocsHeader location={location} />

    <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
      <article className="relative max-w-lg mx-auto lg:max-w-4xl mb-24">
        <header className="mb-24">
          <div className="mb-2">
            <Headline size="small">Documentation</Headline>
          </div>
          <Lead>Explore our guides and examples to learn how to use Roadie.</Lead>
        </header>

        <section className="md:border-b-2 md:border-gray-100 flex mb-24">
          <div>
            <div className="mb-2">
              <Headline el="h2" size="xs">Developer portal</Headline>
            </div>

            <div className="mb-6">
              <Lead size="small">Increase discoverability with a service catalog and developer portal.</Lead>
            </div>

            <Button
              link={true}
              to="/docs/getting-started/install-github-app/"
              size="small"
              color="primary"
              postfixIcon={<ChevronRightIcon />}
              text="Get started"
            />
          </div>

          <div className="md:flex hidden">
            <img
              src={developerPortalIllustrationPng}
              alt="Some YAML code which represents a component in the backstage catalog, along side a screenshot of that component as it looks inside Backstage"
            />
          </div>
        </section>

        <section className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-2">
              <div className="mb-2">
                <TerminalIcon className="h-10" style={{ marginLeft: -4 }} />
              </div>
              <Headline el="h2" size="xs">Custom plugins</Headline>
            </div>

            <div className="mb-6">
              <div className="mb-2">
                <Lead size="small">
                  In addition to supporting a vast array of open-source plugins out of the box,
                  Roadie also lets you publish your own private Backstage plugins to our platform.
                </Lead>
              </div>
              <Lead size="small">
                Once published, these plugins can be used just like any other
                Backstage plugins.
              </Lead>
            </div>

            <div>
              <TextLink to="/docs/custom-plugins/artifactory/" color="primary">
                Learn more...
              </TextLink>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <div className="mb-2">
                <LockClosedIcon className="h-10" style={{ marginLeft: -4 }} />
              </div>
              <Headline el="h2" size="xs">Security</Headline>
            </div>

            <div className="mb-6">
              <Lead size="small">
                We&apos;re an engineering organization who think deeply about the security of
                each and every major change. 
              </Lead>
            </div>

            <ul className="list-disc pl-4">
              <li>
                <p className="text-base text-gray-500">
                  Read about the effort we put into{' '}
                  <TextLink to="/blog/avoid-leaking-github-org-data/" color="primary">
                    GitHub App isolation
                  </TextLink>
                  .
                </p>
              </li>

              <li>
                <p className="text-base text-gray-500">
                  Learn about our{' '}
                  <TextLink to="/docs/details/github-app-permissions/" color="primary">
                    GitHub App permissions
                  </TextLink>
                  .
                </p>
              </li>

              <li>
                <p className="text-base text-gray-500">
                  Understand how to{' '}
                  <TextLink to="/docs/details/allowlisting-roadie-traffic/" color="primary">
                    allowlist Roadie traffic
                  </TextLink>
                  .
                </p>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>

    <SitewideFooter maxWidth="full" />
  </>
);

export default Doc;

export const pageQuery = graphql`
  query DocsHome {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
