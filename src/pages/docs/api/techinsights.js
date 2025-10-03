import React from 'react';
import { ApiDocsPage } from '../../../components/ApiDocsPage';

const PluginsApiDocsPage = ({ location }) => {
  return <ApiDocsPage location={location} url={`${location.origin}/tech-insights-openapi.json`} />;
};

export default PluginsApiDocsPage;
