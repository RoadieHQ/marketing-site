import React from 'react'
import { Link } from 'components';

const MobileFreeTrialButton = () => (
  <Link
    to="/tailwind/free-trial/"
    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
  >
    Free trial
  </Link>
);

export default MobileFreeTrialButton;
