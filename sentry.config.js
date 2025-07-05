import * as Sentry from '@sentry/gatsby';
import get from 'lodash/get';

const getSentryEnvironment = () => {
  if (get(process.env, 'NODE_ENV') === 'production') return 'production';
  if (get(process.env, 'NODE_ENV') === 'test') return 'development';
  const context = get(process.env, 'CONTEXT');

  if (context === 'production') return 'production';
  if (context === 'deploy-preview') return 'preview';
  if (context === 'branch-deploy') return 'preview';
  return 'development';
};

Sentry.init({
  // DSNs are safe to keep public.
  // https://docs.sentry.io/product/sentry-basics/dsn-explainer/#dsn-utilization
  dsn: 'https://1798396e863a4fc0b412438bac2c8528@o416326.ingest.sentry.io/5823815',

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/gatsby/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  environment: getSentryEnvironment(),

  integrations: [],
});
