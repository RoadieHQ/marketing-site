---
humanName: Prometheus
heading: 'Backstage Prometheus Plugin'
lead: |
  Visualize key metrics and alerts of your infrastructure.
intro: |
  [Prometheus](https://prometheus.io/) is an open-source systems monitoring and alerting toolkit originally built at SoundCloud in 2012. It has become the de facto standard for cloud-native monitoring, providing powerful metrics collection, storage, and alerting capabilities that are essential for observing the health and performance of modern distributed systems.

  The Backstage Prometheus plugin brings this critical monitoring data directly into your developer portal, eliminating the need to jump between tools to understand system health. Described as "the most requested plugin" in the Roadie plugin repository, it provides developers with immediate access to alerts and metrics visualizations right on their service pages in Backstage.

  ## Key Benefits

  - **Centralized Observability**: View Prometheus alerts and metrics without leaving Backstage
  - **Developer Self-Service**: Enable teams to monitor their services independently
  - **Rich Visualizations**: Display both line and area graphs with interactive hover details
  - **Alert Management**: See alert states, values, labels, and evaluation times in organized tables
  - **Multi-Instance Support**: Connect to multiple Prometheus instances across environments

  ## Real-World Adoption

  The plugin is widely adopted across the industry. [Spotify](https://backstage.spotify.com/discover/blog/community-session/09-prometheus-homepage-templates/), where Backstage originated, highlighted this plugin during their community sessions as essential for bringing observability into the developer workflow. Companies like [Zepto](https://www.cncf.io/announcements/2025/08/05/zepto-wins-cncf-end-user-case-study-contest-for-developer-platform-innovation-with-backstage-argo-and-kubernetes/) have integrated Prometheus monitoring as part of their comprehensive Backstage-powered developer platform, enabling real-time service catalog insights alongside tools like Grafana and New Relic.

  Whether you're running a single Prometheus instance or managing multiple environments, this plugin transforms raw metrics into actionable insights directly within your service catalog.

npmjsPackage: "@roadiehq/backstage-plugin-prometheus"
codeLocation: "https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/backstage-plugin-prometheus"
attribution:
  text: Roadie
  href: https://github.com/RoadieHQ/roadie-backstage-plugins

seo:
  title: 'Backstage Prometheus Plugin | Roadie'
  description: |
    Visualize key metrics and alerts of your infrastructure.

logoImage: '../../assets/prometheus/prom_logo.webp'
coverImage: '../../assets/prometheus/prom_entity_content.webp'
coverImageAlt: 'Prometheus alerts and graphs rendered in Backstage.'

availableOnRoadie: true
roadieDocsPath: /integrations/prometheus/

gettingStarted:
  - intro: The Prometheus plugin is a frontend plugin. You will need to install it, configure it and add it to an appropriate location on the entity page.


  - intro: Install the Prometheus plugin into Backstage from the app folder of your repository.
    language: bash
    code: |
      cd packages/app
      yarn add @roadiehq/backstage-plugin-prometheus

  - intro: Setup a new proxy endpoint for the Prometheus API. Prometheus is unsecured by default but if you are running it behind a reverse proxy or other authentication mechanism, this proxy configuration can be used to define authentication method to use.
    language: yaml
    code: |
      # app-config.yaml
      proxy:
        '/prometheus/api':
          # url to the api and path of your hosted prometheus instance
          target: http://localhost:9090/api/v1/
          changeOrigin: true
          secure: false
          headers:
            Authorization: ${YOUR_AUTH_TOKEN_IF_PROMETHEUS_IS_SECURED}

  - intro: Configure the Prometheus plugin settings in your app-config.yaml. The `proxyPath` should match your proxy configuration, and `uiUrl` should point to your Prometheus UI for linking to alerts.
    language: yaml
    code: |
      # app-config.yaml
      prometheus:
        # Defaults to /prometheus/api/ and can be omitted if proxy is configured for that url
        proxyPath: /prometheus/api
        # Optional: URL to Prometheus UI for external links
        uiUrl: http://localhost:9090

  - intro: The Backstage Prometheus plugin both entity content component and widget components. 

  - intro: Content Page Setup
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityPrometheusContent,
      } from '@roadiehq/backstage-plugin-prometheus';
      ...
      const serviceEntityPage = (
        <EntityLayout>
          ...
          <EntityLayout.Route path="/prometheus" title="Prometheus">
            <EntityPrometheusContent />
          </EntityLayout.Route>
          ...
        </EntityLayout>
      );


  - intro: Widgets Setup
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityPrometheusAlertCard,  
        EntityPrometheusGraphCard,
      } from '@roadiehq/backstage-plugin-prometheus';
      ...
      const overviewContent = (
        <Grid container spacing={3}>
          ...
          <Grid item md={8}>
            <EntityPrometheusAlertCard />
          </Grid>
          <Grid item md={6}>
            <EntityPrometheusGraphCard />
          </Grid>
          ...
        </Grid>
      );
---

The Backstage Prometheus plugin brings comprehensive monitoring capabilities directly into your developer portal. As a frontend plugin, it provides developers with immediate access to critical system metrics and alerts without requiring them to leave the Backstage interface.

### Core Components

The plugin offers three main components that can be integrated into your entity pages:

1. **Entity Content Page** - A full-page view displaying comprehensive metrics and alerts
2. **Alert Table Widget** - A compact widget showing active Prometheus alerts in a tabular format
3. **Graph Widget** - Interactive visualizations supporting both line and area graph types

### Key Capabilities

- **Real-time Alert Monitoring**: Display active alerts with state, value, labels, evaluation time, and annotations
- **Interactive Metrics Visualization**: View time-series data with hover details and customizable time ranges
- **Multi-Instance Support**: Connect to multiple Prometheus servers across different environments
- **Flexible Query Support**: Use individual metrics, PromQL queries, or Prometheus recording rules
- **Dynamic Configuration**: Configure graphs and alerts per entity using annotations

## Entity Annotations

The plugin uses Backstage entity annotations to determine what monitoring data to display for each service. These annotations provide a flexible way to configure monitoring without code changes.

### Metrics Visualization with `prometheus.io/rule`

The `prometheus.io/rule` annotation defines which metrics to display as graphs. It accepts a comma-separated list of queries or recording rules with optional grouping dimensions.

**Syntax**: `prometheus.io/rule: query1|grouping_dimension,query2|grouping_dimension`

The annotation supports three types of queries:
- **Individual metrics**: Simple metric names like `node_memory_active_bytes`
- **PromQL queries**: Complex expressions like `sum by (instance) (node_cpu_seconds_total)`
- **Recording rules**: References to predefined Prometheus recording rules like `memUsage`

**Example annotation:**
```yaml
prometheus.io/rule: memUsage|component,node_memory_active_bytes|instance,sum by (instance) (node_cpu_seconds_total)
```

This produces three distinct graphs:

#### 1. Recording Rule with Component Grouping
`memUsage|component` creates an area graph grouped by the `component` label:

![Area Graph widget](../../assets/prometheus/prom_areagraph_widget.webp)

#### 2. Memory Metrics with Instance Grouping
`node_memory_active_bytes|instance` displays memory usage across instances with interactive hover details:

![Line graph with hover](../../assets/prometheus/prom_graph_hover.webp)

#### 3. CPU Metrics from PromQL Query
`sum by (instance) (node_cpu_seconds_total)` uses the query's grouping dimension (`instance`) automatically:

![Line Graph constructed by query](../../assets/prometheus/prom_graph_query.webp)

### Alert Management with `prometheus.io/alert`

The `prometheus.io/alert` annotation specifies which Prometheus alerts to display in a table format, showing state, value, labels, evaluation time, and annotations.

**Example annotations:**
```yaml
# Display specific alerts
prometheus.io/alert: 'High CPU Usage,Memory Exhaustion'

# Display all configured alerts
prometheus.io/alert: all
```

![Alert table](../../assets/prometheus/prom_alert.webp)

### Label-Based Alert Filtering with `prometheus.io/labels`

Use the `prometheus.io/labels` annotation to filter alerts by specific label values, useful for multi-tenant environments or when you want to show only relevant alerts.

**Example:**
```yaml
prometheus.io/labels: "environment=production,service=api"
```

## Multiple Prometheus Instances

The plugin supports connecting to multiple Prometheus instances, which is essential for organizations with separate monitoring setups for different environments or teams.

### Configuration for Multiple Instances

Configure multiple proxy endpoints in your `app-config.yaml`:

```yaml
proxy:
  '/prometheus/api':
    target: http://prod-prometheus:9090/api/v1/
  '/prometheus-staging/api':
    target: http://staging-prometheus:9090/api/v1/
  '/prometheus-dev/api':
    target: http://dev-prometheus:9090/api/v1/

prometheus:
  proxyPath: /prometheus/api
  uiUrl: http://prod-prometheus:9090
```

### Using Service-Specific Instances

Specify which Prometheus instance an entity should use with the `prometheus.io/service-name` annotation:

```yaml
# catalog-info.yaml
metadata:
  annotations:
    prometheus.io/service-name: staging
    prometheus.io/rule: api_requests_per_second|endpoint
    prometheus.io/alert: 'API High Latency'
```

## Dynamic Proxying

For advanced scenarios, the plugin supports dynamic Prometheus proxying through backend middleware. This enables routing to different Prometheus instances based on entity metadata or other runtime conditions.

### Backend Configuration

Install the backend plugin for dynamic routing:

```bash
cd packages/backend
yarn add @roadiehq/backstage-plugin-prometheus-backend
```

Configure dynamic routing in your backend:

```typescript
// packages/backend/src/plugins/prometheus.ts
import { createRouter } from '@roadiehq/backstage-plugin-prometheus-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
  });
}
```

This enables sophisticated routing scenarios where different entities can automatically connect to appropriate Prometheus instances based on their metadata or environment.

## Custom Graphs and Tables

For advanced use cases requiring custom layouts or specialized functionality, the plugin exports individual components that can be used programmatically.

### Custom Graph Component

Create custom graphs using the `PrometheusGraph` component:

```typescript
import { PrometheusGraph } from '@roadiehq/backstage-plugin-prometheus';

// Custom graph with specific styling
<PrometheusGraph
  query="rate(http_requests_total[5m])"
  range={{ hours: 6 }}
  step={60}
  dimension="method"
  graphType="area"
/>
```

**PrometheusGraph Props:**
```typescript
{
  query: string;                    // PromQL query to execute
  range?: {                        // Time range for the query
    hours?: number;
    minutes?: number;
  };
  step?: number;                   // Step size in seconds
  dimension?: string;              // Grouping dimension
  graphType?: 'line' | 'area';     // Graph visualization type
}
```

### Custom Alert Table

Create specialized alert displays using the `PrometheusAlertStatus` component:

```typescript
import { PrometheusAlertStatus } from '@roadiehq/backstage-plugin-prometheus';

// Custom alert table with specific alerts
<PrometheusAlertStatus
  alerts={['Critical CPU', 'Memory Warning']}
  onRowClick={(alert) => {
    // Custom click handler for alert rows
    window.open(`/prometheus/graph?query=${alert.expr}`);
  }}
/>
```

**PrometheusAlertStatus Props:**
```typescript
{
  alerts: string[] | 'all';        // Alert names or 'all' for everything
  onRowClick?: (alert: Alert) => void; // Optional click handler
}
```

These components provide full flexibility for creating custom monitoring dashboards while leveraging the plugin's core Prometheus integration functionality.
