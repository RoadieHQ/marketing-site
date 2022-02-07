import React from 'react';

import Input from './Input';

const HoneypotField = () => (
  <div className="hidden">
    <label htmlFor="honeypot-field">
      Don’t fill this out if you’re human:
      <Input
        name="honeypot-field"
        id="honeypot-field"
      />
    </label>
  </div>
);

export default HoneypotField;
