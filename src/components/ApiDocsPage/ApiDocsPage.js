import React from 'react';
import DocsHeader from '../SitewideHeader/DocsHeader';
import { SEO, SitewideFooter } from '../';
import { Sidebar } from '../doc';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const ApiDocsPage = ({ location, url }) => (
  <>
    <SEO title={`API`} description="Documentation of the Roadie APIs" />
    <DocsHeader location={location} />

    <main className="md:flex pt-4 md:pt-0">
      <Sidebar location={location} />

      <article className="px-2 md:px-6 md:pt-7 md:flex-1">
        <section className="prose prose-primary max-w-full">
          <SwaggerUI url={url} />
        </section>
      </article>
    </main>

    <SitewideFooter maxWidth="full" />
  </>
);

export default ApiDocsPage;
