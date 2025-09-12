---
humanName: Travis CI
heading: 'Backstage Travis CI Plugin'
lead: 'See builds in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage Travis CI Plugin | Roadie'
  description: |
    The Backstage Travis CI plugin integrates with Travis CI to show your build
    information inside Backstage and associate it with your services.

logoImage: '../../assets/logos/travis-ci/travis-ci-mascot-200x200.webp'

coverImage: '../../assets/travis-ci-plugin-1642x1027.webp'
coverImageAlt: 'A screenshot of the Travis CI plugin. It is showing a list of builds for a sample service.'

availableOnRoadie: true
roadieDocsPath: /integrations/travis-ci/

gettingStarted:
  - intro: 'In the `backstage/packages/app` project add the plugin as a `package.json` dependency:'
    language: 'bash'
    code: 'yarn add @roadiehq/backstage-plugin-travis-ci'

  - intro: Add proxy configurations
    language: 'yaml'
    code: |
      // app-config.yaml
      proxy:
        # ...

        '/travisci/api':
          target: https://api.travis-ci.com
          changeOrigin: true
          headers:
            Authorization: ${TRAVISCI_AUTH_TOKEN}
            travis-api-version: 3
      
  - intro: Add a separate configuration object.
    language: 'yaml'
    code: |
      // app-config.yaml
      travisci:
        baseUrl: 'https://travis-ci.com/'

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityTravisCIContent,
        EntityTravisCIOverviewCard,
        isTravisciAvailable,
      } from '@roadiehq/backstage-plugin-travis-ci';

  - intro: Add plugin API to your Backstage instance
    language: typescript
    code: |
     // packages/app/src/components/catalog/EntityPage.tsx

     export const cicdContent = (
       <EntitySwitch>
         <EntitySwitch.Case if={isTravisciAvailable}>
           <EntityTravisCIContent />
         </EntitySwitch.Case>
         ...
       </EntitySwitch>
     );

  - intro: Add recent Travis-CI builds widget/card to your    Overview card.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx

      export const cicdCard = (
        <EntitySwitch>
          <EntitySwitch.Case if={isTravisciAvailable}>
            <EntityTravisCIOverviewCard />
          </EntitySwitch.Case>
          ...
        </EntitySwitch>
      );

  - intro: Add annotation to the yaml config file of a component
    language: yaml
    code: 'travis-ci.com/repo-slug: owner-name/project-name'

  - intro: Add your developer api key to the environment variables of your backstage backend server (you can find it in https://travis-ci.com/account/preferences), in the form of the word 'token' followed by your api key. So it should look like this
    language: bash
    code: 'TRAVISCI_AUTH_TOKEN="token your-api-key"'
---

## Features

- List Travis CI Builds
- Retrigger builds

To use the Travis CI Backstage plugin, first visit Travis CI to get an API token: [Travis Preferences](https://travis-ci.com/account/preferences)

There are two versions of Travis CI: https://travis-ci.com and https://travis-ci.org. travis-ci.org is deprecated and not supported in this plugin.

![travis-ci-copy-auth-token-1036x603](./travis-ci-copy-auth-token-1036x603.webp)

Copy the token to your clipboard.

Each build can be retried via the column on the right hand side.
