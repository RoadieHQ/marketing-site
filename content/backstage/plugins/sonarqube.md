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

logoImage: '../../assets/logos/sonarqube/logo-sonar.png'

coverImage: '../../assets/sonar-plugin.png'
coverImageAlt: 'A screenshot of the SonarQube and SonarCloud plugin.'

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

  - intro: Add the proxy config for SonarCloud
    language: YAML
    code: |
      # app-config.yaml
      proxy:
        '/sonarqube':
          target: https://sonarcloud.io/api
          allowedMethods: ['GET']
          headers:
            Authorization: Basic ${SONARCLOUD_AUTH}

  - intro: Add the proxy config for SonarQube
    language: YAML
    code: |
      proxy:
      '/sonarqube':
        target: https://your.sonarqube.instance.com/api
        allowedMethods: ['GET']
        headers:
          Authorization: Basic ${SONARQUBE_AUTH}

      sonarQube:
        baseUrl: https://your.sonarqube.instance.com

  - intro: Get and provide SONARQUBE_AUTH/SONARCLOUD_AUTH as env variables (see Notes for more details)

  - intro: Add annotation to your component-info.yaml file.
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
$ export SONARCLOUD_AUTH=$(base64 <<< "<YOUR_SONARCLOUD_TOKEN>:") # Note it is important to keep the trailing ':'
$ export SONARQUBE_AUTH=$(base64 <<< "<YOUR_SONARQUBE_TOKEN>:") # Note it is important to keep the trailing ':'
```

You can then add these token(s) to a `.env` file or keep it as an exported variable.
