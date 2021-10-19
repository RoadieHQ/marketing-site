import React from 'react';
import { Link } from 'components/tailwind';

const RequestDemoButton = () => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <Link
      to="/tailwind/request-demo/"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    >
      Request a demo
    </Link>
  </div>
);

export default RequestDemoButton;
