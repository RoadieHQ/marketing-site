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
          url: `${location.origin}/tech-insights-openapi.json`,
          name: 'Tech Insights',
        },
        {
          url: `${location.origin}/catalog-openapi.json`,
          name: 'Catalog',
        },
        {
          url: `${location.origin}/scaffolder-openapi.json`,
          name: 'Templates',
        },
        {
          url: `${location.origin}/plugins-openapi.json`,
          name: 'Plugins',
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
