import React from 'react';

const onRenderBody = ({ setPostBodyComponents }) => {
  const INTERCOM_APP_ID = 'qegbmsy6';
  const INTERCOM_HIDE_LAUNCHER = process.env.NODE_ENV === 'production' ? true : false;

  const intercomMessengerHTML = `
    window.intercomSettings = {
      api_base: "https://api-iam.eu.intercom.io",
      app_id: "${INTERCOM_APP_ID}",
      hide_default_launcher: ${INTERCOM_HIDE_LAUNCHER},
    };

    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}function ld(){setTimeout(l, 0);}if(w.attachEvent){w.attachEvent('onload',ld);}else{w.addEventListener('load',ld,false);}}})();
  `;

  return setPostBodyComponents([
    <script key="intercom-messenger" dangerouslySetInnerHTML={{ __html: intercomMessengerHTML }} />,
  ]);
};

export { onRenderBody };
