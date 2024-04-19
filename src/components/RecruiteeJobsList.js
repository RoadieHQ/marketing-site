import React, { useEffect } from 'react';

const RecruiteeJobsList = () => {
  useEffect(() => {
    const rtscript = document.createElement('script'); 
    rtscript.type = 'text/javascript';  
    rtscript.onload = function() { 
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
        }
      });
    }
    rtscript.src = 'https://d10zminp1cyta8.cloudfront.net/widget.js';
    document.body.appendChild(rtscript);

    return () => {
      document.body.removeChild(rtscript);
    }
  }, []);

  return (
    <section className="Section size-3">
      <div className="Container">
        <h1 className='Text size-7 mb-4' id="open-roles">Our open roles</h1>
        <span className='Text size-5 lowContrast weight-1 mb-8'>Join us!</span>

        <div id="recruitee-careers"></div>
      </div>
    </section>
  );
};

export default RecruiteeJobsList;
