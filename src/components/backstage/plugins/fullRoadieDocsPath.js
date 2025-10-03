const fullRoadieDocsPath = (roadieDocsPath) => {
  if (!roadieDocsPath) return '/docs/integrations/';

  if (roadieDocsPath.startsWith('/docs')) {
    return roadieDocsPath;
  } else if (roadieDocsPath.startsWith('docs')) {
    return `/${roadieDocsPath}`;
  } else if (roadieDocsPath.startsWith('/')) {
    return `/docs${roadieDocsPath}`;
  }

  return `/docs/${roadieDocsPath}`;
};

export default fullRoadieDocsPath;
