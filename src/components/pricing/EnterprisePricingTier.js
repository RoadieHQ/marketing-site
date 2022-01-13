import React, { useState } from 'react';
import { Button, TextField } from 'components';

import { FORM_NAMES } from '../../contactFormConstants';
import { currentlyExecutingGitBranch } from '../../environment';
import TierName from './TierName';
import TierDescription from './TierDescription';
import TierLimitations from './TierLimitations';
import TierIncludedFeatures from './TierIncludedFeatures';

const EnterprisePricingTier = () => {
  const [numberOfEngineers, setNumberOfEngineers] = useState('');
  const [subForm, setSubForm] = useState({});

  const netlifyFormName = FORM_NAMES.requestEnterprisePricing;
  const buttonText = 'Request pricing';
  const disabled = false;

  const onSubmit = () => {
    console.log('onSubmit');
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div className="p-6">
        <TierName name="Enterprise" />
        <TierDescription description="A single pane of glass for every engineer in your company." />

        <form
          onSubmit={onSubmit}
          name={netlifyFormName}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="mt-8"
        >
          <input type="hidden" name="form-name" value={netlifyFormName} />
          <input type="hidden" name="submit-button-label" value={buttonText} />
          <input type="hidden" name="deployed-branch" value={currentlyExecutingGitBranch()} />

          <div className="mb-4">
            <TextField
              type="text"
              name="number-of-engineers"
              label="Approximate number of engineers"
              placeholder="100"
              onChange={setNumberOfEngineers}
              value={numberOfEngineers}
              color="primary"
              helpText={subForm.message}
              helpTextState={subForm.state}
              fullWidth
            />
          </div>

          <Button
            text={buttonText}
            disabled={disabled}
            fullWidth
            color="primary"
          />
        </form>
      </div>

      <TierLimitations
        limitations={[
          'Unlimited software components tracked.',
          'Unlimited scaffolder templates.',
          'Unlimited API specs.',
          'Unlimited TechDocs',
        ]}
      />

      <TierIncludedFeatures
        heading="Everything in Team, plus..."
        includedFeatures={[
          'Scaffolder service creator',
          'Kubernetes plugin',
          'Bring your own private plugins',
          'Slack and email Support',
          'Single sign on',
          'Roadie API access',
        ]}
      />
    </div>
  );
};

export default EnterprisePricingTier;
