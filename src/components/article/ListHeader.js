import React, { useState } from 'react';
import classnames from 'classnames';
import { Headline } from 'components';
import {
  SubscribeToNewsletterSuccessModal,
  NetlifyFormCallToAction,
} from 'components/CallToAction';

import { FORM_NAMES } from '../../contactFormConstants';

const SubscribeToNewsletter = ({ siteMetadata }) => {
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  return (
    <>
      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={siteMetadata}
        email={email}
      />

      <NetlifyFormCallToAction
        setModalOpen={setModalOpen}
        buttonText="Subscribe"
        netlifyFormName={FORM_NAMES.subscribeToNewsletter}
        email={email}
        setEmail={setEmail}
        className="md:justify-end"
      />
    </>
  );
};

const Description = ({ children, className }) => {
  if (!children) return null;
  return (
    <p className={classnames('text-xl text-gray-500', className)}>
      {children}
    </p>
  );
};

const ListHeader = ({
  title,
  description,
  siteMetadata,
  subscribeToNewsletter = false,
}) => {
  if (!subscribeToNewsletter) {
    return (
      <div>
        <Headline>{title}</Headline>
        <Description className="mt-3 sm:mt-4">{description}</Description>
      </div>
    );
  }

  return (
    <div>
      <Headline>{title}</Headline>
      <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
        <div className="sm:mb-4 lg:mb-0">
          <Description>{description}</Description>
        </div>
        <SubscribeToNewsletter siteMetadata={siteMetadata} />
      </div>
    </div>
  );
};

export default ListHeader;
