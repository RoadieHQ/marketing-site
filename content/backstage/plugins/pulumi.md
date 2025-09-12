---
humanName: Pulumi
heading: 'Backstage Pulumi Plugin'
lead: 'View Pulumi stack information in Backstage.'
npmjsPackage: "@pulumi/backstage-plugin-pulumi"
codeLocation: "https://github.com/pulumi/pulumi-backstage-plugin"
attribution:
  text: '@pulumicorp'
  href: https://github.com/pulumi
intro: | 
    Pulumi is an open source infrastructure as code tool. It lets you implement your desired state infrastructure with regular programming languages.

    The Backstage Pulumi plugin brings infrastructure data associated with your Pulumi stacks to your Developer Portal. The plugin can pull deployment information from a Pulumi Cloud.

    In this guide you'll find:
      - [Installation steps](#installation-stesp)
      - [Required annotations](#section-add-annotations)
      - [How to get a Pulumi Access Token](#things-to-know)

seo:
  title: 'Backstage Pulumi Plugin | Roadie'
  description: |
    View stack information from your Pulumi deployments.

logoImage: '../../assets/logos/pulumi/logo-pulumi.webp'
coverImage: '../../assets/backstage/plugins/pulumi/pulumi-activity-plugin.webp'
coverImageAlt: 'A screenshot of the Pulumi plugin.'

availableOnRoadie: false

thingsToKnowTitle: How to get a Pulumi Access Token

gettingStarted:
  - intro: Install the plugin.
    language: bash
    code: |
      cd packages/app
      yarn add @pulumi/backstage-plugin-pulumi

  - intro: Add the plugin API to your Backstage app.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        isPulumiAvailable,
        EntityPulumiCard,
        EntityPulumiMetdataCard,
        PulumiComponent
      } from '@pulumi/backstage-plugin-pulumi';

      // add new Pulumi tab to the service component page when available
      const pulumiContent = (
          <EntitySwitch>
              <EntitySwitch.Case if={isPulumiAvailable}>
                  <PulumiComponent/>
              </EntitySwitch.Case>
          </EntitySwitch>
      );

      const overviewContent = (
        <EntityLayout>
          ...
          <EntitySwitch>
              <EntitySwitch.Case if={isPulumiAvailable}>
                  <Grid item md={6}>
                      <EntityPulumiCard variant="gridItem"/>
                  </Grid>
              </EntitySwitch.Case>
          </EntitySwitch>
          ...
        </EntityLayout>
      )

      const serviceEntityPage = (
        <EntityLayout>
          ...
          <EntityLayout.Route path="/pulumi" title="Pulumi" if={isPulumiAvailable}>
              {pulumiContent}
          </EntityLayout.Route>
          ...
        </EntityLayout>
      );

  - intro: Add proxy configuration to your Backstage app's config. A Pulumi access token is required. See [how to get a Pulumi access token](#how-to-get-a-pulumi-access-token) below.
    language: YAML
    code: |
      // app-config.yaml
      proxy:
      '/pulumi':
          target: 'https://api.pulumi.com/api'
          changeOrigin: true
          headers:
          Authorization: token ${PULUMI_ACCESS_TOKEN}
          Accept: application/vnd.pulumi+8
          Content-Type: application/json
      
  - intro: Add Pulumi plugin annotation to your component's config. ()
    language: YAML
    sectionId: 'add-annotations'
    code: |
      // catalog-info.yaml
      metadata:
        annotations:
            pulumi.com/project-slug: [ Pulumi Cloud Name: org/stackname/stack ]

  - intro: Add Pulumi plugin annotation to your system entity. ()
    language: YAML
    sectionId: 'add-annotations'
    code: |
      // catalog-info.yaml
      metadata:
        annotations:
            pulumi.com/orga-slug: <Pulumi Cloud: org>

---

Your Backstage app's backend connects to your Pulumi Cloud organization using the [Pulumi Cloud Rest API](https://www.pulumi.com/docs/pulumi-cloud/cloud-rest-api/). A Pulumi Access Token is required. This token can be obtained from a system environment variable (ex. PULUMI_ACCESS_TOKEN). This can be a [personal](https://www.pulumi.com/docs/pulumi-cloud/access-management/access-tokens/#personal-access-tokens) access token, but is preferrably a [team](https://www.pulumi.com/docs/pulumi-cloud/access-management/access-tokens/#team-access-tokens) or [organization](https://www.pulumi.com/docs/pulumi-cloud/access-management/access-tokens/#organization-access-tokens) access token.

See the respective documentation to create a Pulumi access token.
