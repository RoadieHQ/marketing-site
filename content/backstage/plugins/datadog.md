---
humanName: Datadog
heading: 'Backstage Datadog plugin'
lead: |
  See your servers, your clouds, your metrics all in one place
attribution:
  text: Roadie
  href: https://Roadie.io

seo:
  title: 'Backstage Datadog Plugin | Roadie'
  description: |
    See your servers, your clouds, your metrics all in one place

logoImage: '../../assets/logos/datadog/datadog-logo-no-text.png'

coverImage: '../../assets/datadog-plugin.png'
coverImageAlt: 'A screenshot of the Datadog plugin.'

gettingStarted:
  - intro: With this plugin, you can embed Datadog graphs and dashboards into your instance of Backstage. Datadog is a monitoring service for cloud-scale applications, providing monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform.

  - title: Plugin installation

  - intro: Install the Datadog plugin into Backstage.
    language: bash
    code: |
      cd packages/app
      yarn add @roadiehq/backstage-plugin-datadog

  - intro: Add the Datadog plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Datadog } from '@roadiehq/backstage-plugin-datadog';

  - intro: Add a Datadog card to the overview tab of the EntityPage.tsx source file
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
            Router as DatadogRouter,
            GraphWidget as DatadogGraphWidget,
            isDatadogGraphAvailable as isDatadogWidgetAvailable,
            } from '@roadiehq/backstage-plugin-datadog';

      const ServiceEntityPage = ({ entity }: { entity: Entity }) => (
        &lt;EntityPageLayout>
            &lt;EntityPageLayout.Content
                path="/datadog/*"
                title="datadog"
                element={<DatadogRouter entity={entity} />}
                />
        &lt;/EntityPageLayout>
        );

  - intro: Add widget to your Overview tab.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
        const OverviewContent = ({ entity }: { entity: Entity }) => (
            &lt;Grid container spacing={3} alignItems="stretch">
            ...
            {isDatadogWidgetAvailable(entity) && (
            &lt;Grid item>
                &lt;DatadogGraphWidget entity={entity} />
            &lt;/Grid>
            )}
            ...
        &lt;/Grid>
        );
        

---

## How to embed a datadog dashboard in Backstage

### Obtain the dashboard URL from Datadog that you will need for your metadata. 

* Login to your Datadog account.

### Get the dashboard URL.

* Navigate to the dashboards list by hovering over dashboards on the page's left-hand side and selecting the dashboard list.

* Select a dashboard from this list.

* Within the dashboard you have chosen, click the settings cog on the screen's right-hand side, circled in red.

![dashboard](../../assets/dd-dashboard.png)


* Copy the URL from the Sharing textbox.

* This URL is the value you need for the `datadoghq.com/dashboard-url` annotation.

![dashboard share](../../assets/dd-dashboard-share.png)


### Adding the annotations and the values from Datadog to your component's metadata file.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service
  description: |
    A sample service
  annotations:
    datadoghq.com/dashboard-url: <<DATADOGURL>>
```

## How to embed a datadog graph in Backstage

* Login to your Datadog account.

### Get the graph token.

* Click on the graph pencil, circled in red, from your dashboard.

![dashboard](../../assets/dd-dashboard-2.png)

* Click on the Share tab, choose a timeframe, graph size and legend. Click generate the embedded code. 

* Copy the token value that is highlighted in the red square.

* this token is the value you need for the `datadoghq.com/graph-token` annotation

![dashboard](../../assets/dd-graph-share.png)

### Adding the annotations and the values from Datadog to your component's metadata file.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service
  description: |
    A sample service
  annotations:
    datadoghq.com/graph-token: <<TOKEN>
```

## Security

A word of note regarding the security of the datadog dashboards and graphs.

The instructions provided for sharing dashboards and graphs generate a URL.

This URL is public to anyone who bears it.

If obtained by another actor, it is usable by them.

