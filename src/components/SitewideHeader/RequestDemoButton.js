import React from 'react';
import { Button } from 'components';

const RequestDemoButton = () => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <Button
      link={true}
      to="/request-demo/"
      color="secondary"
      text="Request a demo"
      fullWidth={true}
    />
  </div>
);

export default RequestDemoButton;
