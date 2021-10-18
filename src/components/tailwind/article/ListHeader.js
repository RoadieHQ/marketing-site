import React, { useState } from 'react';
import classnames from 'classnames';
import CallToAction from 'components/actions/NetlifyFormCallToAction';
import { SubscribeToNewsletterSuccessModal } from 'components/tailwind/CallToAction/SubscribeToNewsletter';

import { FORM_NAMES } from '../../../contactFormConstants';

const Title = ({ children }) => (
  <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
    {children}
  </h2>
);

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

      <CallToAction
        setModalOpen={setModalOpen}
        buttonText="Subscribe"
        netlifyFormName={FORM_NAMES.subscribeToNewsletter}
        email={email}
        setEmail={setEmail}
        formStyle="tailwind"
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
        <Title>{title}</Title>
        <Description className="mt-3 sm:mt-4">{description}</Description>
      </div>
    );
  }

  return (
    <div>
      <Title>{title}</Title>
      <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
        <Description>{description}</Description>
        <SubscribeToNewsletter siteMetadata={siteMetadata} />
      </div>
    </div>
  );
};

export default ListHeader;
