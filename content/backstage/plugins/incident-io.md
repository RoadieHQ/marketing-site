---
humanName: Incident.io
heading: 'Backstage Incident.io Plugin'
lead: 'Display incidents associated to Backstage components'
attribution:
  text: Incident.io
  href: https://incident.io/

intro: |
  <p>
    As a prerequisite, you need to have configured the Incident.io catalog-importer to sync with your Backstage catalog. You can visit your incident.io dashboard to create a custom field that is powered by the Backstage Component catalog type.
  </p>
  <p>
    We recommend creating a multi-select field called something like "Affected services" or "Impacted components".
  </p>

seo:
  title: 'Backstage Incident.io Plugin | Roadie'
  description: |
    The Backstage Incident.io plugin alerts you to incidents which are affecting your production services, directly from within Backstage.

logoImage: '../../assets/logos/incident/incident-logo.webp'

availableOnRoadie: true
roadieDocsPath: /incident.io/

gettingStarted:
  - intro: Install the plugin package in your Backstage app
    language: 'bash'
    code: 'yarn add --cwd packages/app @incident-io/backstage'
  - intro: 'Configure your proxy.'
    language: 'bash'
    code: |
      // app-config.yaml
      proxy:
      ...
      '/incident/api':
        target: https://api.incident.io
        headers:
          Authorization: Bearer ${INCIDENT_API_KEY}
  - intro: And add any custom fields you have configured in incident.io in as well. If you have no custom fields you can omit this section, but if you do and they are not configued then the plugin will display an error.
    language: yaml
    code: |
      incident:
        fields:
          api: "<id-of-api-custom-field>"
          component: "<id-of-component-custom-field>"
          system: "<id-of-system-custom-field>"
          domain: "<id-of-domain-custom-field>"

        - intro: Add the plugin cards to your entity page
          language: typescrpipt
          code: |
  - intro: Add cards to your entity pages
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx

      import { EntityIncidentCard } from "@incident-io/backstage";
      <Grid item md={6}>
        <EntityIncidentCard />
      </Grid>
---

### Useful links

- [npm](https://www.npmjs.com/package/@incident-io/backstage)
- [GitHub for the plugin](https://github.com/incident-io/backstage-plugins)
- [GitHub for the Backstage catalog-importer](https://github.com/incident-io/catalog-importer)
- [Roadie docs](https://roadie.io/docs/integrations/incident.io/)
