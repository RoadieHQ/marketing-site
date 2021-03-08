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

  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as SonarQube } from '@backstage/plugin-sonarqube';

  - intro: Add Widget API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { SonarQubeCard } from '@backstage/plugin-sonarqube';

      const OverviewContent = ({ entity }: { entity: Entity }) => (
        &lt;Grid container spacing={3} alignItems="stretch">
          ...
          &lt;Grid item md={6}>
            &lt;SonarQubeCard  entity={entity} />
          &lt;/Grid>
          ...
        &lt;/Grid>
      );

  - intro: Add the proxy config for SonarCloud
    language: YAML
    code: |
      // app-config.yaml
      proxy:
        '/sonarqube':
          target: https://sonarcloud.io/api
          allowedMethods: ['GET']
          headers:
            Authorization: # Content: 'Basic base64("<api-key>:")' <-- note the trailing ':' # Example: Basic bXktYXBpLWtleTo=
              $env: SONARQUBE_AUTH_HEADER

  - intro: Add the proxy config for SonarQube
    language: YAML
    code: |
      proxy:
      '/sonarqube':
        target: https://your.sonarqube.instance.com/api
        allowedMethods: ['GET']
        headers:
          Authorization: # Content: 'Basic base64("<api-key>:")' <-- note the trailing ':' # Example: Basic bXktYXBpLWtleTo=
            $env: SONARQUBE_AUTH_HEADER

      sonarQube:
        baseUrl: https://your.sonarqube.instance.com

  - intro: Add annotation to your component-info.yaml file.
    language: YAML
    code: |
      metadata:
        annotations:
          sonarqube.org/project-key: [YOUR_PROJECT_KEY]
---
