---
humanName: Grafana
heading: 'Backstage Grafana Plugin'
lead: 'The Backstage Grafana plugin lists Grafana alerts and dashboards.'
attribution:
  text: K-Phoen
  href: https://github.com/K-Phoen

npmjsPackage: "@k-phoen/backstage-plugin-grafana"

seo:
  title: 'Backstage Grafana Plugin | Roadie'
  description: |
    The Backstage Grafana plugin is a frontend plugin that lists Grafana alerts and dashboards. It includes cards and dashboard components.

logoImage: '../../assets/logos/grafana/grafana.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/grafana/

gettingStarted:
  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: yarn --cwd packages/app add @k-phoen/backstage-plugin-grafana

  - intro: Create an API key if you don't already have one. Grafana docs can be found <a href='https://grafana.com/docs/grafana/latest/developers/http_api/auth/#create-api-token' target="_blank>here</a>.

  - intro: 'Add proxy and Grafana configuration to the app-config.yaml file in the root directory.'
    language: 'yaml'
    code: |
      # app-config.yaml
      proxy:
        '/grafana/api':
          # May be a public or an internal DNS
          target: https://grafana.host/
          headers:
            Authorization: Bearer ${GRAFANA_TOKEN}

      grafana:
        # Publicly accessible domain
        domain: https://monitoring.company.com

        # Is unified alerting enabled in Grafana?
        # See: https://grafana.com/blog/2021/06/14/the-new-unified-alerting-system-for-grafana-everything-you-need-to-know/
        # Optional. Default: false
        unifiedAlerting: false
          ...

  - intro: 'Add the `EntityGrafanaAlertsCard` card to display alerts on a component page.'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityGrafanaAlertsCard,
      } from '@k-phoen/backstage-plugin-grafana';

      // ...

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          <Grid item md={6}>
            <EntityAboutCard variant="gridItem" />
          </Grid>

          <Grid item md={6}>
            {/* Grafana alert card start */}
            <EntityGrafanaAlertsCard />
            {/* Grafana alert card end */}
          </Grid>

          <Grid item md={4} xs={12}>
            <EntityLinksCard />
          </Grid>
          <Grid item md={8} xs={12}>
            <EntityHasSubcomponentsCard variant="gridItem" />
          </Grid>
        </Grid>
      );
  - intro: 'Add the `EntityGrafanaDashboardsCard` component to display dashboards on a component page.'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx

      import {
        EntityGrafanaDashboardsCard,
      } from '@k-phoen/backstage-plugin-grafana';

      // ...

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          <Grid item md={6}>
            <EntityAboutCard variant="gridItem" />
          </Grid>

          <Grid item md={6}>
            {/* Grafana alert card start */}
            <EntityGrafanaDashboardsCard />
            {/* Grafana alert card end */}
          </Grid>

          <Grid item md={4} xs={12}>
            <EntityLinksCard />
          </Grid>
          <Grid item md={8} xs={12}>
            <EntityHasSubcomponentsCard variant="gridItem" />
          </Grid>
        </Grid>
      );

  - intro: 'Add the `EntityOverviewDashboardViewer` component to embed dashboards on a page'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityGrafanaDashboardsCard,
      } from '@k-phoen/backstage-plugin-grafana';

      // ...

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          <Grid item md={6}>
            <EntityAboutCard variant="gridItem" />
          </Grid>

          <Grid item md={6}>
            {/* Grafana overview dashboard embed start */}
            <EntityOverviewDashboardViewer />
            {/* Grafana overview dashboard embed end */}
          </Grid>

          <Grid item md={4} xs={12}>
            <EntityLinksCard />
          </Grid>
          <Grid item md={8} xs={12}>
            <EntityHasSubcomponentsCard variant="gridItem" />
          </Grid>
        </Grid>
      );
  - intro: Update relevant catalog-info.yaml files to include grafana annotations.
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        annotations:
          grafana/alert-label-selector: "service=awesome-service"
          grafana/dashboard-selector: "(tags @> 'my-service' || tags @> 'my-service-slo') && tags @> 'generated'"
          grafana/overview-dashboard: 'http://grafana/d/qSfS51a4z/some-dashboard?orgId=1&kiosk'
        name: my-entity
        namespace: default
      spec:
        # …
---

### Useful info

For the `dashboard-selector` a series of variables as well as binary and unary operators are supported.

Supported variables:

- title: title of the dashboard
- tags: array of tags defined by the dashboard
- url: URL of the dashboard
- folderTitle: title of the folder in which the dashboard is defined
- folderUrl: URL of the folder in which the dashboard is defined

Supported binary operators:

- ||: logical or
- &&: logical and
- ==: equality (=== operator in Javascript)
- !=: inequality (!== operator in Javascript)
- @>: inclusion (left.includes(right) in Javascript)

Supported unary operators:

- !: logical negation

### Useful Links

- [npm](https://www.npmjs.com/package/@k-phoen/backstage-plugin-grafana)
- [GitHub](https://github.com/K-Phoen/backstage-plugin-grafana/tree/6dc2ab2833a8863e975a15abb028e53eee3ac78c)
- [Roadie Docs](https://roadie.io/docs/integrations/grafana/)
