---
humanName: Bitrise
heading: 'Bitrise Plugin'
lead: "View a summary of your component's Bitrise builds right in Backstage."
npmjsPackage: "@backstage-community/plugin-bitrise"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/bitrise/plugins/bitrise"
attribution:
  text: 'SDA SE'
  href: https://sda.se

seo:
  title: 'Backstage Bitrise Plugin | Roadie'
  description: |
    Bitrise Backstage Plugin to see your components builds inside Backstage. Also displays Biterise workflows.

logoImage: 'assets/logos/bitrise/bitrise-logo.webp'
coverImage: 'assets/backstage/plugins/bitrise/bitrise-in-backstage.webp'
coverImageAlt: 'Bitrise in Backstage'

gettingStarted:
  - intro: Install the front-end plugin.
    language: bash
    code: |
      cd packages/app
      yarn add @backstage/plugin-bitrise

  - intro: Add a new Bitrise tab to the entity page.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityBitriseContent } from '@backstage/plugin-bitrise';

      const websiteEntityPage = (
        <EntityLayout>
          <EntityLayout.Route path="/bitrise" title="Bitrise">
            <EntityBitriseContent />
          </EntityLayout.Route>

  - intro: Connect Backstage to the Bitrise API.
    language: YAML
    code: |
      # app-config.yaml
      proxy:
        '/bitrise':
          target: 'https://api.bitrise.io/v0.1'
          allowedMethods: ['GET']
          headers:
            Authorization: ${BITRISE_AUTH_TOKEN}

  - intro: Add an annotation to the component's catalog-info.yaml to link it to a Bitrise app.
    language: YAML
    code: |
      # catalog-info.yml
      metadata:
        annotations:
            bitrise.io/app: 'backstage-sample-react-native-app'

---

Bitrise is a CI/CD tool that focuses primarily on building and deploying mobile apps. Once a Backstage component is linked to a Bitrise app via the component's catalog-info.yaml, a summary of Bitrise builds are visible on the component's page in Backstage.

![Bitrise tab in Backstage](../../assets/backstage/plugins/bitrise/bitrise-entity-page-tab.webp)

Not only can you see a summary of your builds, but you can also:

* view builds for each of your Bitrise workflows if you have multiple workflows defined for your app
* link to the build in Bitrise
* link to the commit in the underlying source control system (ex. GitHub) that triggered the build
* download artifacts produced by the build right from Backstage

Similar to other Backstage plugins, the Bitrise tab can be added to multiple entity types on the entity page.

## Connecting to the Bitrise API

The plugin connects to the Bitrise API using a personal token. The token can be generated from your Bitrise profile:

![Create Bitrise personal token](../../assets/backstage/plugins/bitrise/create-bitrise-personal-token.webp)

See [Authenticating with the Bitrise API](https://devcenter.bitrise.io/en/api/authenticating-with-the-bitrise-api.html) for more information.

Once you have generated a personal access token, the token can be defined in an environment variable and referenced from app-config.yaml.
