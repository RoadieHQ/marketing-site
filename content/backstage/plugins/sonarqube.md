---
humanName: SonarQube
heading: 'Backstage SonarQube and SonarCloud Plugin'
lead: 'Components to display code quality metrics from SonarCloud and SonarQube.'
attribution:
  text: SDA-SE
  href: https://sda.se/

seo:
  title: 'Backstage SonarQube and SonarCloud Plugin | Roadie'
  description: |
    Components to display code quality metrics from SonarCloud and SonarQube.

logoImage: '../../assets/logos/sonarqube/logo-sonar.webp'

coverImage: '../../assets/sonar-plugin.webp'
coverImageAlt: 'A screenshot of the SonarQube and SonarCloud plugin.'

npmjsPackage: "@backstage/plugin-sonarqube"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/sonarqube/plugins/sonarqube"

availableOnRoadie: true
roadieDocsPath: /integrations/sonarqube/

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-sonarqube'

  - intro: Import it into your Backstage application.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntitySonarQubeCard } from '@backstage/plugin-sonarqube';

  - intro: Add Widget API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { SonarQubeCard } from '@backstage/plugin-sonarqube';

      const OverviewContent = ({ entity }: { entity: Entity }) => (
        <Grid container spacing={3} alignItems="stretch">
          ...
          <Grid item md={6}>
            <EntitySonarQubeCard variant="gridItem" />
          </Grid>
          ...
        </Grid>
      );

  - intro: Get and provide SONARCLOUD_TOKEN/SONARQUBE_TOKEN as env variables (see Notes on how to generate these values)

  - intro: Add the proxy config for SonarCloud (auth token is read from the environment variables)
    language: YAML
    code: |
      # app-config.yaml
      proxy:
        '/sonarqube':
          target: https://sonarcloud.io/api
          allowedMethods: ['GET']
          auth: "${SONARCLOUD_TOKEN}:"

  - intro: Add the proxy config for SonarQube (auth token is read from the environment variables)
    language: YAML
    code: |
      proxy:
      '/sonarqube':
        target: https://your.sonarqube.instance.com/api
        allowedMethods: ['GET']
        auth: "${SONARQUBE_TOKEN}:"

      sonarQube:
        baseUrl: https://your.sonarqube.instance.com

  - intro: Add annotation to your catalog-info.yaml file.
    language: YAML
    code: |
      metadata:
        annotations:
          sonarqube.org/project-key: [YOUR_PROJECT_KEY]
---

## Notes

In order for the backstage integration to work we must first generate our api key. These can be found from:
 * [Sonarcloud](https://sonarcloud.io/account/security) for your sonarcloud plugin
 * [SonarQube](https://docs.sonarqube.org/latest/user-guide/user-token/) for your sonarqube plugin

These will then be used in our app-config.yaml and subsequently picked up by backstage and allow it to talk to your sonar apps.

It is always important to base encode our tokens.

``` bash
$ export SONARCLOUD_TOKEN="<YOUR_SONARCLOUD_TOKEN>"
$ export SONARQUBE_TOKEN="<YOUR_SONARQUBE_TOKEN>"
```

You can then add these token(s) to a `.env` file or keep it as an exported variable.
