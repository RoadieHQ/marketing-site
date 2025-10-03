import React, { useEffect } from 'react';
import { Headline, Lead } from 'components';

const RecruiteeJobsList = () => {
  useEffect(() => {
    const rtscript = document.createElement('script');
    rtscript.type = 'text/javascript';
    rtscript.onload = function () {
      new window.RTWidget({
        companies: [61772],
        detailsMode: 'popup',
        language: 'en',
        departmentsFilter: [],
        themeVars: {
          primary: '#e8590c',
          secondary: '#222',
          text: '#5c6f78',
          textDark: '#37474f',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;',
          baseFontSize: '16px',
        },
        flags: {
          showLocation: true,
          showCountry: false,
          showCity: false,
          groupByLocation: false,
          groupByDepartment: false,
          groupByCompany: false,
        },
      });
    };
    rtscript.src = 'https://d10zminp1cyta8.cloudfront.net/widget.js';
    document.body.appendChild(rtscript);

    return () => {
      document.body.removeChild(rtscript);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-3xl">
            <div className="mt-1">
              <Headline id="open-roles">Our open roles</Headline>
            </div>

            <div className="mt-5">
              <Lead>Join us!</Lead>
            </div>

            <div id="recruitee-careers"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiteeJobsList;
