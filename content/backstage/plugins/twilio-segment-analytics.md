---
humanName: Twilio Segment
heading: 'Backstage Twilio Segment Analytics Plugin'
lead: 'An opinionated implementation of the Backstage Analytics API for Segment, from the folks at Segment.'
attribution:
  text: Twilio Segment
  href: https://segment.com

npmjsPackage: "@segment/backstage-plugin-analytics-module-segment"

seo:
  title: 'Backstage Twilio Segment Analytics Plugin | Roadie'
  description: |
    An opinionated implementation of the Backstage Analytics API for Segment, from the folks at Segment.

logoImage: '../../assets/logos/twilio-segment/twilio-segment.png'

gettingStarted:
  - intro: Install the plugin
    language: bash
    code: yarn --cwd packages/app add @segment backstage-plugin-analytics-module-segment

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/apis.ts
      import {
        analyticsApiRef,
        configApiRef,
        identityApiRef,
      } from '@backstage/core-plugin-api';
      import { SegmentAnalytics } from '@segment/backstage-plugin-analytics-module-segment';

      export const apis: AnyApiFactory[] = [
        // Instantiate and register the SegmentAnalytics API Implementation.
        createApiFactory({
          api: analyticsApiRef,
          deps: { configApi: configApiRef, identityApi: identityApiRef },
          factory: ({ configApi, identityApi }) =>
            SegmentAnalytics.fromConfig(configApi, {
              identityApi,
            }),
        }),
      ];

  - intro: Optionally configure user anonymization (by default, this analytics plugin identifies the user taking actions as the logged in Backstage User's entity reference string)
    language: typescript
    code: |
      // packages/app/src/apis.ts
      import {
        analyticsApiRef,
        configApiRef,
        identityApiRef,
      } from '@backstage/core-plugin-api';
      import { SegmentAnalytics } from '@segment/backstage-plugin-analytics-module-segment';

      export const apis: AnyApiFactory[] = [
        // Instantiate and register the SegmentAnalytics API Implementation.
        createApiFactory({
          api: analyticsApiRef,
          deps: { configApi: configApiRef, identityApi: identityApiRef },
          factory: ({ configApi, identityApi }) =>
            SegmentAnalytics.fromConfig(configApi, {
              identityApi,
              userIdTransform: 'sha-256',
            }),
        }),
      ];

  - intro: Configure the plugin
    language: yaml
    code: |
      // app-config.yaml
      app:
        analytics:
          segment:
            writeKey: abcABCfooBARtestKEY
---

- This plugin requires an active workspace with [Segment](https://segment.com/).
- This plugin uses [Analytics.js Source](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/).
- You'll need a [Segment Write Key](https://segment.com/docs/connections/find-writekey/) to use this plugin.
