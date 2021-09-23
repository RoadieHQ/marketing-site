import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from 'components';
import { Helmet } from 'react-helmet';

const TYPEFORM_ID = 'tydAeJns';
const BASE_FORM_URL = 'https://form.typeform.com/to';

const EvaluationRequest = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  const params = new URLSearchParams(location.search.substring(1));
  const referredEmail = params.get('referred_email');
  const clickedButtonLabel = params.get('clicked_button_label');
  const hashParams = `referred_email=${referredEmail}&clicked_button_label=${clickedButtonLabel}`;

  return (
    <>
      <Helmet>
        <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
      </Helmet>

      <SEO
        title={`Learn about Roadie | ${siteTitle}`}
        description="Sign up for a demo or free trial of Roadie's SaaS Backstage platform."
      />

      <iframe
        title="typeform-onboarding-survey"
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        src={`${BASE_FORM_URL}/${TYPEFORM_ID}?typeform-medium=embed-snippet#${hashParams}`}
      />
    </>
  );
};

export default EvaluationRequest;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
