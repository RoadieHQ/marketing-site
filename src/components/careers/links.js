import React from 'react';
import { renderToString } from 'react-dom/server';
import { Link } from 'components';

export const applicationHref = (typeformSlug) =>
  `https://roadiehq.typeform.com/to/cdF3Ls?roleslug=${typeformSlug}&utm_source=roadie.io`;

export const backstageLink = renderToString(
  <Link to="https://github.com/backstage/backstage">Backstage</Link>
);
