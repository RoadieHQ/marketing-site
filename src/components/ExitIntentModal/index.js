import React from 'react';
import Modal, { modalStyles } from 'components/Modal';
import { Button, Link, Title } from 'components';
import useMedia from 'react-use/lib/useMedia';
import { PAGE_PATHS } from '../../contactFormConstants';

import CatalogScreenshot from '../../../content/assets/home/illustrations/home-product-screenshot.svg';
import theme from '../../theme';

const ExitIntentModal = ({ modalOpen, handleCloseModal }) => {
  const isWide = useMedia(`(min-width: ${theme.BREAKPOINTS_LG})`);

  if (!isWide) {
    return null;
  }

  return (
    <Modal
      isOpen={modalOpen}
      contentLabel="Modal"
      onRequestClose={handleCloseModal}
      style={modalStyles({
        maxWidth: theme.BREAKPOINTS_LG,
        marginTop: '20%',
        overlayOpacity: 0.8,
      })}
    >
      <div className="flex">
        <div
          className="w-2/5 bg-cover border-r-2"
          style={{ backgroundImage: `url(${CatalogScreenshot})` }}
        />

        <div className="w-3/5 p-8 flex flex-col justify-evenly">
          <div className="mb-12">
            <Title>Be more successful with Backstage</Title>
          </div>

          <div className="mb-12">
            <p className="mb-4">
              Roadie is a fully customizable Backstage-based developer portal. It includes all of
              the plugins you need out-of-the-box.
            </p>

            <p>
              Roadie has scorecards, RBAC, support and upgrades... so you can spend your time using
              Backstage, rather than building it.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <Button
                link={true}
                color="primary"
                size="large"
                fullWidth={true}
                to={`${PAGE_PATHS.requestDemo}?utm_source=roadie-marketplace&utm_campaign=exit-intent-modal`}
                text={'Learn how we can help'}
              />
            </div>
            <Link to="/docs/details/how-roadie-connects/" className="underline">
              or see how Roadie can securely connect to your tools
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ExitIntentModal;
