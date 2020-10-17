import React, { useState } from 'react';
import { graphql } from 'gatsby';

import StickyFooter from 'components/layouts/StickyFooter';
import { SEO } from 'components';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import Hero from 'components/home/Hero';

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO title={`Hosted, managed, enterprise Backstage | ${siteTitle}`} />
      <FormSubmissionModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
      />

      <StickyFooter location={location}>
        <Hero setModalOpen={setModalOpen} siteMetadata={data.site.siteMetadata} />
      </StickyFooter>
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        demoUrl
        social {
          twitter
        }
      }
    }
  }
`;
