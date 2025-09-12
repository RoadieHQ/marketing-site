export default async (req, context) => {

  console.log('congext', context);
  // eslint-disable-next-line
  const apiKey = Netlify.env.get("SENTRY_PROJECT");
  console.log('apikey', apiKey);
  return new Response("Hello, world!");
};
