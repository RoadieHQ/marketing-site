import React, { useState } from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/seo';
import SitewideHeader from 'components/SitewideHeader';
import LayoutControl from 'components/LayoutControl';
import FormSubmissionModal from 'components/home/FormSubmissionModal';
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
      <FormSubmissionModal modalOpen={modalOpen} handleCloseModal={handleCloseModal} />

      <LayoutControl>
        <SitewideHeader location={location} />
      </LayoutControl>

      <Hero setModalOpen={setModalOpen} />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
