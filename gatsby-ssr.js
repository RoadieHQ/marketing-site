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

    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
  `;

  const leadfeederHTML = `
    (function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('kn9Eq4RLP5k8RlvP');
  `;

  return setPostBodyComponents([
    <script key="intercom-messenger" dangerouslySetInnerHTML={{ __html: intercomMessengerHTML }} />,
    <script key="leadfeeder" dangerouslySetInnerHTML={{ __html: leadfeederHTML }} />,
  ]);
};

export { onRenderBody };
