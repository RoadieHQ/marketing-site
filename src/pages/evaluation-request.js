import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from 'components';

const EvaluationRequest = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  const params = new URLSearchParams(location.search.substring(1));
  const referredEmail = params.get('referred_email');
  const BASE_FORM_URL = 'https://form.typeform.com/to/tydAeJns';

  return (
    <>
      <SEO
        title={`Join the evaluation wait list | ${siteTitle}`}
        description="Sign up for a free trial of Roadie's SaaS Backstage platform."
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

export default EvaluationRequest;

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
