---
humanName: Jenkins
heading: 'Backstage Jenkins Plugin'
lead: 'Build, test, and deploy on Jenkins CI/CD platform.'
attribution:
  text: '@timja'
  href: https://github.com/timja

npmjsUrl: https://www.npmjs.com/package/@backstage-community/plugin-jenkins
intro: | 
  Jenkins is an open source automation server to build, test, and deploy software. It lets you execute a series of actions to build a continuous integration pipeline. Jenkins is well known for its extensive set of plugins.

  The Jenkins Backstage plugin brings builds data associated with your services to your Developer Portal. The  plugin can pull build information from a GitHub Organization project in Jenkins. Other Jenkins project types like Freestyle project and Pipeline are not supported yet.

  In this guide you'll find:

    - [Installation steps](#installation-steps)
    - [Required annotations](#section-add-annotations)
    - [How to get a Jenkins API token](#things-to-know)
    - [Setting up Jenkins locally](#setting-up-a-local-jenkins-environment)
    - [Supported types of Jenkins projects](#supported-types-of-jenkins-projects)

seo:
  title: 'Backstage Jenkins Plugin | Roadie'
  description: |
    Build, test, and deploy on Jenkins CI/CD platform.

logoImage: '../../assets/logos/jenkins/logo-jenkins.webp'
coverImage: '../../assets/backstage/plugins/jenkins/jenkins-plugin.webp'
coverImageAlt: 'A screenshot of the Jenkins plugin.'

availableOnRoadie: true
roadieDocsPath: /integrations/jenkins/

thingsToKnowTitle: How to get a Jenkins API token

gettingStarted:
  - intro: Install the plugin.
    language: bash
    code: |
      cd packages/app
      yarn add @backstage/plugin-jenkins

  - intro: Add the plugin API to your Backstage app.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityJenkinsContent } from '@backstage/plugin-jenkins';

      // add new Jenkins tab to the service component page
      const serviceEntityPage = (
        <EntityLayout>
          ...
          <EntityLayout.Route path="/jenkins" title="Jenkins">
            <EntityJenkinsContent />
          </EntityLayout.Route>
          ...
        </EntityLayout>
      );

  - intro: Add proxy configuration to your Backstage app's config. A Jenkins API token is required. See [how to get a Jenkins API token](#how-to-get-a-jenkins-api-token) below.
    language: YAML
    code: |
      // app-config.yaml
      proxy:
        '/jenkins/api':
          target: 'http://localhost:8080'
          changeOrigin: true
          headers:
            Authorization: Basic ${JENKINS_BASIC_AUTH_HEADER}
      
  - intro: Add Jenkins plugin annotation to your component's config. ()
    language: YAML
    sectionId: 'add-annotations'
    code: |
      // catalog-info.yaml
      metadata:
        annotations:
          # instanceName and github-organization-project-name are optional. The value is a string and should be enclosed in double quotes ""
          jenkins.io/job-full-name: "instanceName:github-organization-project-name/job-name"

---

Your Backstage app's backend connects to your Jenkins server using the Jenkins API. A Jenkins API token is required. This token can be obtained from a system environment variable (ex. JENKINS_BASIC_AUTH_HEADER) containing a base64 encoded string.

1. Access the settings page of the Jenkins user for which you want to create an API token. For example, for a user named "admin" on a local Jenkins server: [http://localhost:8080/user/admin/](http://localhost:8080/user/admin/).
2. Add a new token under the 'API Token' section. Copy the token before leaving the page.
3. Construct a base64 encoded basic authorization string using your Jenkins user's name and the API token. For example, in a Bash shell:

    ```
    echo -n admin:1147f3bd451f3c48b8f21fd3aba13e58eb | base64
    ``` 

4. Save the base64 encoded string to an environment variable named `JENKINS_BASIC_AUTH_HEADER`. This variable can be used in the Jenkins proxy configuration in your Backstage app's `app-config.yaml`.


### Setting up a local Jenkins environment

If you want to try out this plugin but you don't have a Jenkins server to test it with, you can quickly setup a local Jenkins server with docker. See the instructions available in the [official Jenkins Docker GitHub repo](https://github.com/jenkinsci/docker/blob/master/README.md).


### Supported types of Jenkins projects

The  plugin can pull build information from a GitHub Organization project in Jenkins. Other Jenkins project types like Freestyle project and Pipeline are not supported yet.

![Jenkins menu to create new items](../../assets/backstage/plugins/jenkins/jenkins-new-item-options.webp)

The plugin shows a list of the most recent builds in Backstage. This list includes builds from all projects that are available in the GitHub Organization project in Jenkins.

![Jenkins and Backstage side-by-side](../../assets/backstage/plugins/jenkins/jenkins-and-backstage-side-by-side.webp)

View additional build information by selecting a build from the list.

![Backstage Jenkins job details](../../assets/backstage/plugins/jenkins/backstage-jenkins-job-details.webp)
