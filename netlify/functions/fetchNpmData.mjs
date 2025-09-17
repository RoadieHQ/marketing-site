import { getStore } from '@netlify/blobs';

const npmRegistry = getStore('npmRegistry', { siteID: 'roadie-preview' });

export default async (req, context) => {

  console.log('congext', context);
  // eslint-disable-next-line
  const apiKey = Netlify.env.get("SENTRY_PROJECT");
  console.log('apikey', apiKey);

  const setValue = await npmRegistry.set('test', 'key');
  console.log('setValue', setValue);

  return new Response({
    context,
    setValue,
  });
};
