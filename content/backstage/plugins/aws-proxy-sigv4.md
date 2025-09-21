---
humanName: AWS Proxy SigV4
heading: 'Backstage AWS Proxy SigV4 Plugin'
lead: 'An AWS Proxy for Backstage that uses SigV4 signing'
npmjsPackage: "@segment/backstage-plugin-proxy-sigv4-backend"
codeLocation: "https://github.com/segmentio/segment-backstage-plugins/tree/main/plugins/proxy-sigv4-backend"
attribution:
  text: Twilio Segment
  href: https://segment.com/opensource/

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage AWS Proxy SigV4 Plugin | Roadie'
  description: |
    A plugin that enables proxy definitions to be declared in, and read from, app-config.yaml (just like the built-in proxy-backend plugin) that will be signed using the AWS Signature Version 4 (SigV4) request-signing algorithm.

logoImage: 'assets/logos/aws/Amazon_Web_Services_Logo.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/proxy-sigv4/

gettingStarted:
  # What will this step accomplish?
  - intro: Add the plugin
    language: bash
    code: |
      yarn add --cwd packages/backend '@segment/backstage-plugin-proxy-sigv4-backend'
  - intro: For the New Backend System, make the following changes to your packages/backend/src/index.ts file.
    language: typescript
    code: |
      // packages/backend/src/index.ts file
      import { createBackend } from '@backstage/backend-defaults';
      const backend = createBackend();
      // ... other feature additions

      + // proxy-sigv4 plugin installation
      + backend.add(import('@segment/backstage-plugin-proxy-sigv4-backend'));

      backend.start();
  - intro: Or if you're using the Legacy Backend System, you'll need to add the plugin to the router in the backend. To do this, create a new backend plugin wrapper module and then add that to your backend index.ts file.
    language: typescript
    code: |
      // packages/backend/src/plugins/proxy-sigv4.ts

      import { createRouter } from '@segment/backstage-plugin-proxy-sigv4-backend';
      import { Router } from 'express';
      import { PluginEnvironment } from '../types';

      export default async function createPlugin({
        logger,
        config,
      }: PluginEnvironment): Promise<Router> {
        return await createRouter({ logger, config });
      }

      // packages/backend/src/index.ts

      +import proxySigV4 from './plugins/proxy-sigv4';

      async function main() {
        ...
        const createEnv = makeCreateEnv(config);
        ...

        const proxyEnv = useHotMemoize(module, () => createEnv('proxy'));
      +  const proxySigV4Env = useHotMemoize(module, () => createEnv('proxy-sigv4'));

        const apiRouter = Router();

        apiRouter.use('/proxy', await proxy(proxyEnv));
      +  apiRouter.use('/proxy-sigv4', await proxySigV4(proxySignV4Env));
        ...
      }
  - intro: Then configure your proxy routes in either short or expanded form.
    language: yaml
    code: |
      // Short form
      proxysigv4:
        '/some-local-path': https://<API ID>.execute-api.<region>.amazonaws.com

      // Expanded form
      proxysigv4:
        '/some-local-path':
          target: 'https://<API ID>.execute-api.<region>.amazonaws.com'
          roleArn: 'arn:aws:iam::<account>:role/<name>'
          roleSessionName: tempAssumeRoleSession ## optional
---

### Limitations

- No response streaming.
- No configuration of the forwarded or received headers allowlist.
- No ability to override or manually configure target URL service and region properties
  CNAME'd endpoints are therefore not currently supported
- Target URLs that lack a trailing slash (/) will always have one implicitly applied.
  e.g.: https://example.com/foo will be treated as https://example.com/foo/
- Target URLs with a path prefix may be susceptible to path traversal attacks; test coverage for this is poor.

### New Auth services
When using the new backend system with the new auth services, the proxy-sigv4 backend plugin will by default allow unauthenticated requests.

You can prevent this by adding `allowUnauthenticatedRequests: false` to your proxy file within the `proxysigv4` section.

### Useful links

- [npm](https://www.npmjs.com/package/@segment/backstage-plugin-proxy-sigv4-backend)
- [GitHub]()
- [Roadie Docs]()
- [AWS Signature Verification for API requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
