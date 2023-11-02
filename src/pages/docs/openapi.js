import React, { useEffect, useRef } from 'react';
import DocsHeader from 'components/SitewideHeader/DocsHeader';

const ApiDocsPage = ({ location }) => {
  const swaggerRef = useRef(null);

  useEffect(() => {
    window.SwaggerUI({
      domNode: swaggerRef.current,
      supportedSubmitMethods: [],
      urls: [
        {
          url: 'https://roadie.io/tech-insights-openapi.json',
          name: 'Tech Insights',
        },
        {
          url: 'https://roadie.io/catalog-openapi.json',
          name: 'Catalog',
        },
        {
          url: 'https://roadie.io/scaffolder-openapi.json',
          name: 'Templates',
        },
      ],
      presets: [window.SwaggerUI.presets.apis, window.SwaggerUIStandalonePreset],
      layout: 'StandaloneLayout',
      validatorUrl: null,
    });
  }, []);

  return (
    <>
      <DocsHeader location={location} />
      <div ref={swaggerRef} id="swaggerWrapper" />;
    </>
  );
};

export default ApiDocsPage;
