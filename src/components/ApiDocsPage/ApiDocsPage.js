import React, { useEffect, useRef } from 'react';
import DocsHeader from '../SitewideHeader/DocsHeader';
import { SEO, SitewideFooter } from '../';
import { Sidebar } from '../doc';

const ApiDocsPage = ({ location, url }) => {
  const swaggerRef = useRef(null);

  useEffect(() => {
    window.SwaggerUI({
      domNode: swaggerRef.current,
      supportedSubmitMethods: [],
      responseInterceptor: (response) => {
        if (!response.ok) {
          return response;
        }
        try {
          const doc = JSON.parse(response.text);
          delete doc.info.version;
          return { ...response, data: JSON.stringify(doc), text: JSON.stringify(doc) };
        } catch (e) {
          return response;
        }
      },

      plugins: [
        {
          wrapComponents: {
            InfoUrl: () => () => null,
            OpenAPIVersion: () => () => null,
          },
        },
      ],
      url: url,
      presets: [window.SwaggerUI.presets.apis],
      validatorUrl: null,
    });
  }, []);

  return (
    <>
      <SEO title={`API`} description="Documentation of the Roadie API" />
      <DocsHeader location={location} />

      <main className="md:flex pt-4 md:pt-0">
        <Sidebar location={location} />

        <article className="px-2 md:px-6 md:pt-7 md:flex-1">
          <section className="prose prose-primary max-w-full">
            <div ref={swaggerRef} id="swaggerWrapper" />
          </section>
        </article>
      </main>

      <SitewideFooter maxWidth="full" />
    </>
  );
};

export default ApiDocsPage;
