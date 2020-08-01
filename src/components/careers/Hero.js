import React from 'react';
import { Headline, Lead } from 'components';

const Hero = ({ siteTitle }) => (
  <div>
    <Headline>
      <span>Careers @ {siteTitle}</span>
    </Headline>

    <Lead text="Change the lives of engineers all over the world" />
  </div>
);

export default Hero;
