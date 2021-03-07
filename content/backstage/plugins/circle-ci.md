---
humanName: Circle CI
heading: 'Backstage Circle CI Plugin'
lead: 'See Circle CI Builds in Backstage'
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Circle CI Plugin | Roadie'
  description: |
    The Backstage Circle CI plugin integrates with Circle CI to show your build
    information inside Backstage where it can be associated with your services.

logoImage: '../../assets/logos/circle-ci/circle-ci-logo-only-black.png'

coverImage: '../../assets/circle-ci-plugin.png'
coverImageAlt: 'A list of builds in a table along with a status and retry button for each build.'

gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin
    language: bash
    code: yarn add @backstage/plugin-circleci

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Circleci } from '@backstage/plugin-circleci';

  - intro: 'Add the plugin API to your API builder'
    language: typescript
    code: |
      // packages/app/src/apis.ts
      import { CircleCIApi, circleCIApiRef } from '@backstage/plugin-circleci';

      export const apis = (config: ConfigApi) => {
        builder.add(circleCIApiRef, new CircleCIApi(/* optional custom url for your own CircleCI instance */));
      };
---
