import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from 'components';

const OnboardingSurvey = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  const params = new URLSearchParams(location.search.substring(1));
  const referredEmail = params.get('referred_email');
  const BASE_FORM_URL = 'https://form.typeform.com/to/WMf5gFDe';

  return (
    <>
      <SEO
        title={`Onboarding Survey | ${siteTitle}`}
        description={`
          Delight your devs with the world-class technology that powers
          the development and operation of Spotify's 2,000 microservices.
        `}
      />

      <iframe
        title="typeform-onboarding-survey"
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        src={`${BASE_FORM_URL}?typeform-medium=embed-snippet#referred_email=${referredEmail}`}
      />
      <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
    </>
  );
};

export default OnboardingSurvey;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;
