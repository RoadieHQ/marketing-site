---
humanName: Datadog
heading: 'Backstage Datadog plugin'
lead: |
  See your servers, your clouds, your metrics all in one place
attribution:
  text: Roadie
  href: https://Roadie.io

npmjsPackage: "@roadiehq/backstage-plugin-datadog"

seo:
  title: 'Backstage Datadog Plugin | Roadie'
  description: |
    See your servers, your clouds, your metrics all in one place

logoImage: '../../assets/logos/datadog/datadog-logo-no-text.webp'

coverImage: '../../assets/datadog-plugin.webp'
coverImageAlt: 'A screenshot of the Datadog plugin.'

availableOnRoadie: true
roadieDocsPath: /integrations/datadog/

gettingStarted:
  - intro: With this plugin, you can embed Datadog graphs and dashboards into your instance of Backstage. Datadog is a monitoring service for cloud-scale applications, providing monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform.

  - title: Plugin installation

  - intro: Install the Datadog plugin into Backstage.
    language: bash
    code: |
      cd packages/app
      yarn add @roadiehq/backstage-plugin-datadog

  - intro: Add Datadog widget to your Overview tab.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      const overviewContent = (
      // ...
        <Grid container spacing={3} alignItems="stretch">
          <EntitySwitch>
            <EntitySwitch.Case if={isDatadogGraphAvailable}>
              <Grid item>
                <EntityDatadogGraphCard/>
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
        </Grid>
      );

  - intro: Add a Datadog card to the overview tab of the EntityPage.tsx source file
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
       EntityDatadogContent,
       EntityDatadogGraphCard,
       isDatadogGraphAvailable
      } from '@roadiehq/backstage-plugin-datadog';
      
      const serviceEntityPage = (
       // ...
        <EntityPageLayout>
          <EntityLayout.Route path="/datadog" title="Datadog">
            <EntityDatadogContent />
          </EntityLayout.Route>
        </EntityPageLayout>
       )

---

## Specify datadog domain

Datadog embedded graph is using datadoghq.eu as default top-level domain, when other is not specified. If you are using other domain, you must specify it with corresponding annotations datadoghq.com/site.

### Adding the annotations and the values from Datadog to your component's metadata file.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service
  description: |
    A sample service
  annotations:
    datadoghq.com/site: datadoghq.com
```

## How to embed a datadog dashboard in Backstage

### Obtain the dashboard URL from Datadog that you will need for your metadata. 

* Login to your Datadog account.

### Get the dashboard URL.

* Navigate to the dashboards list by hovering over dashboards on the page's left-hand side and selecting the dashboard list.

* Select a dashboard from this list.

* Within the dashboard you have chosen, click the settings cog on the screen's right-hand side, circled in red.

![dashboard](../../assets/dd-dashboard.webp)

* Copy the URL from the Sharing textbox.

* This URL is the value you need for the `datadoghq.com/dashboard-url` annotation.

![dashboard share](../../assets/dd-dashboard-share.webp)


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

![dashboard](../../assets/dd-dashboard-2.webp)

* Click on the Share tab, choose a timeframe, graph size and legend. Click generate the embedded code. 

* Copy the token value that is highlighted in the red square.

* this token is the value you need for the `datadoghq.com/graph-token` annotation

![dashboard](../../assets/dd-graph-share.webp)

### Customize graph size.

In order to customize size of the graph you may specify datadoghq.com/graph-size annotations and specify one of the following options:

* 'small'

* 'medium'

* 'large'

* 'x-large';

If not specified, your graph will be 'medium' size per default.

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


## Set frame-src in Content Security Policy

```
// app-config.yaml
backend:
  csp:
    frame-src: 
      # Allow your Datadog URL for @roadiehq/backstage-plugin-datadog
      - 'DATADOG_SOURCE'
      - 'DATADOG_DASHBOARD_SOURCE'
```

## Security

Sharing Datadog dashboards and graphs makes them public on the internet and accessible by anyone with the URL. 

Make sure you do not share these URLs with untrusted actors.
