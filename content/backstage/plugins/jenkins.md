---
humanName: Jenkins
heading: 'Backstage Jenkins Plugin'
lead: 'Build, test, and deploy on Jenkins CI/CD platform.'
attribution:
  text: '@timja'
  href: https://github.com/timja

seo:
  title: 'Backstage Jenkins Plugin | Roadie'
  description: |
    Build, test, and deploy on Jenkins CI/CD platform.

logoImage: '../../assets/logos/jenkins/logo-jenkins.png'
coverImage: '../../assets/jenkins-plugin.png'
coverImageAlt: 'A screenshot of the Jenkins plugin.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-jenkins'

  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Jenkins } from '@backstage/plugin-jenkins';

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        Router as JenkinsRouter,
        isPluginApplicableToEntity as isJenkinsAvailable,
        LatestRunCard as JenkinsLatestRunCard,
      } from '@backstage/plugin-cloudbuild';

      const CICDSwitcher = ({ entity }: { entity: Entity }) => {
        switch (true) {
          ...
          case isJenkinsAvailable(entity):
            return <JenkinsRouter entity={entity} />;
          ...
        }
      }

  - intro: Add proxy configuration
    language: YAML
    code: |
      proxy:
        '/jenkins/api':
          target: 'http://localhost:8080' # your Jenkins URL
          changeOrigin: true
          headers:
            Authorization:
              $env: JENKINS_BASIC_AUTH_HEADER

  - intro: Add annotation to your component-info.yaml file.
    language: YAML
    code: |
      metadata:
        annotations:
          jenkins.io/github-folder: [folder-name/job-name]
---
