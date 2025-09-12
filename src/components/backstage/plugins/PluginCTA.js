import React from 'react';
import { Button } from 'components';
import { PAGE_PATHS } from '../../../contactFormConstants';

const PluginCTA = ({ plugin }) => (
  <div className="docs-cta my-6 lg:flex justify-between">
    <div>
      <h3 className="docs-cta__title text-center lg:text-left">
        Set up Backstage in minutes with Roadie
      </h3>
      <p className="hidden lg:block">
        Focus on using Backstage, rather than building and maintaining it.
      </p>
    </div>
    <div className="text-center">
      <Button
        link={true}
        color="primary"
        size="large"
        to={`${PAGE_PATHS.requestDemo}?utm_source=roadie-marketplace&utm_campaign=${plugin.frontmatter.humanName}`}
        text="Get a demo"
      />
    </div>
  </div>
);

export default PluginCTA;
