import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Prism from 'prismjs';

import { PAGE_PATHS } from '../../contactFormConstants';

import {
  SEO,
  SitewideFooter,
  SitewideHeader,
  ContentHeader,
  TextLink as Link,
  CodeBlock,
} from 'components';

const BackstageDocker = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <SEO
        title={`Backstage docker image | ${siteTitle}`}
        description={`
          Want to try out Backstage without any setup? Use our Backstage Docker image to get started quickly.
        `}
      />

      <SitewideHeader />

      <main className="pt-4 pb-8 px-4 lg:pt-8 lg:pb-28">
        <div className="relative max-w-lg mx-auto lg:max-w-3xl">
          <ContentHeader frontmatter={{ title: 'Backstage Docker Image' }} />

          <article className="prose prose-primary">
            <p>
              Roadie maintains a public Backstage docker image for the community to use. You can
              find it{' '}
              <Link to="https://hub.docker.com/r/roadiehq/community-backstage-image">
                on Docker Hub
              </Link>
              . It will quickly give you a sense of what Backstage is and how you might use it.
            </p>

            <h2>Prerequisites</h2>
            <p>
              <ol>
                <li>Docker installed and running locally on your computer.</li>
                <li>
                  A GitHub Personal Access Token with the{' '}
                  <code className="language-text">repo</code>,{' '}
                  <code className="language-text">user</code>,{' '}
                  <code className="language-text">read:org</code> and{' '}
                  <code className="language-text">read:discussion</code> scopes.
                </li>
              </ol>
            </p>

            <h2>Instructions</h2>

            <p>
              Run the following command, replacing <code className="language-text">[TOKEN]</code>{' '}
              with your token. Once it starts up, Backstage will automatically open your browser on{' '}
              <Link to="http://localhost:7000">localhost:7000</Link>.
            </p>
            <CodeBlock
              language="bash"
              code={`docker run -p 7000:7000 --env GITHUB_TOKEN=[TOKEN] roadiehq/community-backstage-image:latest`}
            />

            <h2>Caveats</h2>
            <p>
              Backstage must be heavily customized before you can use it inside your organization.
              This requires editing the Backstage source code — something you cannot do with this
              community Backstage docker image.
            </p>

            <p>
              To learn how to customize Backstage, check out the{' '}
              <Link to="https://backstage.io/docs/getting-started/">
                official getting started guide
              </Link>
              .
            </p>

            <h2>Want to get started even faster?</h2>
            <p>
              Check out{' '}
              <Link to={PAGE_PATHS.freeTrial}>Roadie&apos;s no-code SaaS Backstage platform</Link>.
            </p>
          </article>
        </div>
      </main>

      <SitewideFooter />
    </>
  );
};

export default BackstageDocker;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
