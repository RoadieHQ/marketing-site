---
humanName: Splunk On-call
heading: 'Backstage Splunk On-Call Plugin'
lead: 'Displays Splunk On-Call information about associated services in Backstage.'
npmjsPackage: "@backstage-community/plugin-splunk-on-call"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/splunk/plugins/splunk-on-call"
attribution:
  text: Rémi Doreau
  href: https://github.com/ayshiff

seo:
  title: 'Backstage Splunk On-Call Plugin | Roadie'
  description: |
    The Backstage Splunk On-Call plugin provides a list of incidents, a way to trigger a new incident to specific users and/or teams, a way to acknowledge/resolve an incident and information details about the relevant people on-call.

logoImage: 'assets/logos/splunk/splunk-dark.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/splunk-on-call/

gettingStarted:
  - intro: 'Install the plugin package in your Backstage app'
    language: 'bash'
    code: yarn --cwd packages/app add @backstage-community/plugin-splunk-on-call

  - intro: 'Configure your proxy to add credentials to requests to sentry.'
    language: 'bash'
    code: |
      # app-config.yaml
      proxy:
        # ...
        '/splunk-on-call':
          target: https://api.victorops.com/api-public
          headers:
            X-VO-Api-Id: ${SPLUNK_ON_CALL_API_ID}
            X-VO-Api-Key: ${SPLUNK_ON_CALL_API_KEY}
      ...
      splunkOnCall:
        eventsRestEndpoint: <SPLUNK_ON_CALL_REST_ENDPOINT>

  - intro: 'Add the plugin components to your entity page'
    language: 'bash'
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        isSplunkOnCallAvailable,
        EntitySplunkOnCallCard,
      } from '@backstage-community/plugin-splunk-on-call';
      // ...
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          <EntitySwitch>
            <EntitySwitch.Case if={isSplunkOnCallAvailable}>
              <Grid item md={6}>
                <EntitySplunkOnCallCard />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>

  - intro: Add annotations to relevant catalog-info.yaml files.
    language: yaml
    code: |
      annotations:
        splunk.com/on-call-team: <SPLUNK_ON_CALL_TEAM_NAME>
        splunk.com/on-call-routing-key: <SPLUNK_ON_CALL_ROUTING_KEY> // an alternative if you use Routing keys
---

### Useful Info

- In current implementation, the Splunk OnCall plugin requires the /splunk-on-call proxy endpoint be exposed by the Backstage backend as an unprotected endpoint, in effect enabling Splunk OnCall API access using the configured SPLUNK_ON_CALL_API_KEY for any user or process with access to the /splunk-on-call Backstage backend endpoint. See below for further configuration options enabling protection of this endpoint. If you regard this as problematic, consider using the plugin in readOnly mode (<EntitySplunkOnCallCard readOnly />) by adding `allowedMethods: ['GET']` to the proxy config.

### Useful Links

- [npm](https://www.npmjs.com/package/@backstage-community/plugin-splunk-on-call)
- [GitHub](https://github.com/backstage/community-plugins/tree/main/workspaces/splunk/plugins/splunk-on-call)
- [Roadie Docs](https://roadie.io/docs/integrations/splunk-on-call/)
