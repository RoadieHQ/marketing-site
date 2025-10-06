import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title, TextLink as Link } from 'components';

import PAGE_SECTIONS from './pageSections';
import fullRoadieDocsPath from './fullRoadieDocsPath';
import Changelog from './Changelog';

const RoadieDocsLink = ({ availableOnRoadie, roadieDocsPath }) => {
  const disclaimer = 'These instructions apply to self-hosted Backstage only.';

  if (availableOnRoadie && roadieDocsPath) {
    return (
      <p className="prose prose-primary max-w-none">
        {disclaimer} To use this plugin on Roadie,{' '}
        <Link color="primary" to={fullRoadieDocsPath(roadieDocsPath)}>
          visit the docs
        </Link>
        .
      </p>
    );
  }

  return <p className="prose prose-primary max-w-none">{disclaimer}</p>;
};


const Body = ({ plugin, }) => {
  const {
    installationInstructions,
    introduction,
    availableOnRoadie,
    roadieDocsPath,
    coverImage,
    notes,
  } = plugin;
  const introHtml = introduction?.childMarkdownRemark?.html;
  const installHtml = installationInstructions?.childMarkdownRemark?.html;
  const notesHtml = notes?.childMarkdownRemark?.html;

  return (
    <>
      {!isEmpty(introHtml) && (
        <div className="mb-24" id={PAGE_SECTIONS.INTRODUCTION.fragment}>
          <div
            className="mb-4 mt-0 prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: introduction.childMarkdownRemark.html }}
          />
        </div>
      )}

      {coverImage && (
        <div className="mb-24">
          <GatsbyImage
            image={coverImage.gatsbyImageData}
            alt={coverImage.description}
            className="max-w-full max-h-full shadow-small"
          />
        </div>
      )}

      {!isEmpty(installHtml) && (
        <div className="mb-24">
          <div className="mb-4" id={PAGE_SECTIONS.INSTALLATION_INSTRUCTIONS.fragment}>
            <Title className="text-3xl">{PAGE_SECTIONS.INSTALLATION_INSTRUCTIONS.label}</Title>
          </div>

          <div className="mb-4">
            <RoadieDocsLink availableOnRoadie={availableOnRoadie} roadieDocsPath={roadieDocsPath} />
          </div>

          <div
            className="mt-0 prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{
              __html: installationInstructions.childMarkdownRemark.html,
            }}
          />
        </div>
      )}

      {!isEmpty(notesHtml) && (
        <div className="mb-24">
          <div className="mb-4" id={PAGE_SECTIONS.NOTES.fragment}>
            <Title className="text-3xl">{PAGE_SECTIONS.NOTES.label}</Title>
          </div>

          <div
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: notes.childMarkdownRemark.html }}
          />
        </div>
      )}

      <Changelog plugin={plugin} />
    </>
  );
};

export default Body;
