import React from 'react';

const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  const INTERCOM_APP_ID = 'qegbmsy6';
  const INTERCOM_HIDE_LAUNCHER = process.env.NODE_ENV === 'production' ? true : false;

  // Dark mode script to prevent flash of unstyled content
  const darkModeScript = `
    (function() {
      var savedTheme = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  const intercomMessengerHTML = `
    window.intercomSettings = {
      api_base: "https://api-iam.eu.intercom.io",
      app_id: "${INTERCOM_APP_ID}",
      hide_default_launcher: ${INTERCOM_HIDE_LAUNCHER},
    };

    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
  `;

  setPostBodyComponents([
    <script key="intercom-messenger" dangerouslySetInnerHTML={{ __html: intercomMessengerHTML }} />,
  ]);

  setHeadComponents([
    <script key="dark-mode-init" dangerouslySetInnerHTML={{ __html: darkModeScript }} />,
    <link
      key="soehne-web-buch"
      rel="preload"
      href="/fonts/soehne/soehne-web-buch.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="soehne-web-halbfett"
      rel="preload"
      href="/fonts/soehne/soehne-web-halbfett.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="soehne-mono-web-buch"
      rel="preload"
      href="/fonts/soehne/soehne-mono-web-buch.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="montserrat-bold"
      rel="preload"
      href="/fonts/montserrat/Montserrat-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="montserrat-bolditalic"
      rel="preload"
      href="/fonts/montserrat/Montserrat-BoldItalic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
  ]);
};

export { onRenderBody };
