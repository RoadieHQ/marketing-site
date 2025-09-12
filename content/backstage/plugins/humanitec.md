---
humanName: Humanitec
heading: 'Backstage Humanitec Plugin'
lead: 'See Humanitec environments, workloads an resources in Backstage'
attribution:
  text: Humanitec
  href: https://humanitec.com

seo:
  title: 'Backstage Humanitec Plugin | Roadie'
  description: |
    The Backstage Humanitec Plugin shows information about environments, workloads and resources on an entity page.

logoImage: '../../assets/logos/humanitec/humanitec-logo.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/humanitec/

gettingStarted: # What will this step accomplish?
  - intro: |
      This plugin requires <a href='https://github.com/humanitec/humanitec-backstage-plugins/tree/main/plugins/humanitec-backend'>@humanitec/backstage-plugin-backend</a> because it connects to the backend to make requests to the Humanitec API. Install that first.

  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: yarn --cwd packages/app add @humanitec/backstage-plugin

  - intro: 'Add Humanitec to your app-config.'
    language: yaml
    code: |
      // app-config.yaml
      humanitec:
        orgId: my-humanitec-organization
        token: ${HUMANITEC_TOKEN} # without Bearer

  - intro: Add the Humanitec `HumanitecCardComponent` to your Entity page.
    language: yaml
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { HumanitecCardComponent, hasHumanitecAnnotations } from '@humanitec/backstage-plugin';
      ...
      const overviewContent = (
        <Grid container>
          ...
         <EntitySwitch>
           <EntitySwitch.Case if={hasHumanitecAnnotations}>
             <Grid item md={6}>
               <HumanitecCardComponent />
             </Grid>
           </EntitySwitch.Case>
         </EntitySwitch>
        </Grid>
      )
  - intro: Add annotations to relevant catalog-info.yaml files for Entities with associated Humanitec resources.
    language: yaml
    code: |
      // some-example-catalog-info.yaml
      ...
      metadata:
        annotations:
          # mandatory annotation
          humanitec.com/orgId: <ord-id>
          humanitec.com/appId: <application-id>
      ...
---

### Useful Links

- [npm](https://www.npmjs.com/package/@humanitec/backstage-plugin)
- [GitHub (frontend)](https://github.com/humanitec/humanitec-backstage-plugins/tree/main/plugins/humanitec)
- [GitHub (backend)](https://github.com/humanitec/humanitec-backstage-plugins/tree/main/plugins/humanitec-backend)
- [Roadie Docs](https://roadie.io/docs/integrations/humanitec/)
- [Humanitec Blog on Backstage](https://humanitec.com/blog/humanitec-vs-backstage-friends-or-foes)
