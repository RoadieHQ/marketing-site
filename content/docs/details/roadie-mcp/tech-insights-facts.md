---
title: Tech Insights Facts Server
publishedDate: '2025-07-22T15:00:00.0Z'
description: Access operational metrics, security data, and compliance information
---

## Overview

The Tech Insights Facts Server provides AI assistants with access to operational metrics, compliance data, and insights from your Backstage Tech Insights configuration.

**Server Endpoint:** `https://api.roadie.so/api/mcp/v1/tech-insights-facts`

## Capabilities

- **GitHub Metrics**: PR merge times, repository activity, contributor information
- **Security Metrics**: Vulnerability data from Snyk, Dependabot alerts, branch protection status
- **Monitoring Data**: PagerDuty incident metrics, Datadog SLO information
- **Compliance Scoring**: Entity metadata completeness and compliance scores
- **Repository Analysis**: File structure analysis and catalog status

## Available Tools

### Get Data Source Discovery

Discovers available Tech Insights data sources and the fact data they provide.

**Parameters:**
- None required

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-data-source-discovery",
      "arguments": {}
    },
    "id": 1
  }'
```

**Return Schema:**
```typescript
{
  dataSources: Array<{
    id: string,
    title: string,
    description?: string,
    cadence?: string,
    lifecycle?: any,
    createdAt?: string,
    updatedAt?: string,
    handlerDefinition?: {
      type: 'builtin' | string,
      config: {
        id: string,
        builtinId?: string
      }
    },
    timeout?: any,
    draft?: boolean,
    version?: string,
    entityFilter?: any,
    schema?: Record<string, {
      type: 'integer' | 'float' | 'string' | 'boolean' | 'datetime' | 'set' | 'object',
      description?: string,
      metadata?: {
        key?: string
      }
    }>
  }>,
  totalCount: number,
  builtinCount: number,
  customCount: number
}
```

**Workflow:**
This tool helps you understand what data sources are available and what facts they provide:
1. Call `get-data-source-discovery` to retrieve all available data sources
2. Receive a list of all data sources with their IDs, titles, descriptions, and fact schemas
3. Use the data source IDs to query specific facts using `get-entity-facts` or `get-all-entities-facts`

**Usage Examples:**
- "What data sources are available?"
- "What facts can I query about Rootly incidents?"
- "Show me the facts available for components in the catalog"
- "What is the average time to resolve for Rootly incidents on my-component?"

**Required Permissions:**
- **Catalog entity read (*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Entity Facts

Gets Tech Insights facts for a specific data source and entity combination.

**Parameters:**
- `dataSourceId` (string): The ID of the data source to query facts from
- `name` (string): The name of the catalog entity
- `namespace` (string, optional): The entity namespace (defaults to "default")
- `kind` (string, optional): The entity kind (defaults to "component")

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-entity-facts",
      "arguments": {
        "dataSourceId": "github-stats",
        "name": "user-service"
      }
    },
    "id": 1
  }'
```

**Example Usage with Full Parameters:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-entity-facts",
      "arguments": {
        "dataSourceId": "1234",
        "name": "payment-api",
        "namespace": "acmeinc",
        "kind": "api"
      }
    },
    "id": 1
  }'
```

**Return Schema:**
```typescript
{
  dataSourceId: string,
  dataSourceTitle?: string,
  entityRef: string,
  facts: Record<string, any>,
  timestamp?: string
}
```

**Workflow:**
Get facts for a specific entity from a data source:
1. First, use the data source discovery tool to find available data sources and their IDs
2. Call `get-entity-facts` with the data source ID and entity information
3. Receive all raw facts from that data source for the specified entity

**Usage Examples:**
- "Get all information available from Rootly about user-service"
- "What are the custom-security-check facts for payment-api?"
- "Show me all facts from data source '1234' for auth-service"
- "Fetch the techdocs facts for my-component"

**Key Benefits:**
- Dynamic fact retrieval for any configured data source
- Returns raw fact data with all available metrics
- Useful for exploratory analysis and custom integrations

**Required Permissions:**
- **Catalog entity read (*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get All Entities Facts

Get facts for all entities from a specific data source with optional filtering by kind and namespace (defaults to component entities).

**Parameters:**
- `dataSourceId` (string): The ID of the data source to query facts from
- `kind` (string, optional): Filter by entity kind (e.g., "component", "api"). **Defaults to "component".**
- `namespace` (string, optional): Filter by namespace (e.g., "default", "production")

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-all-entities-facts",
      "arguments": {
        "dataSourceId": "7e6a974c-f0ec-473f-9cc1-21c2752780a0"
      }
    },
    "id": 1
  }'
```

**Example Usage with Filters:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-all-entities-facts",
      "arguments": {
        "dataSourceId": "7e6a974c-f0ec-473f-9cc1-21c2752780a0",
        "kind": "api",
        "namespace": "production"
      }
    },
    "id": 1
  }'
```

**Return Schema:**
```typescript
{
  dataSourceId: string,
  dataSourceTitle?: string,
  entities: Array<{
    entityRef: string,
    facts: Record<string, any>,
    timestamp?: string
  }>
}
```

**Workflow:**
Get facts for all entities from a specific data source:
1. First, use the data source discovery tool to find available data sources and their IDs
2. Call `get-all-entities-facts` with the data source ID
3. By default, returns only component entities (the most common use case)
4. Optionally override the kind filter or add namespace filtering
5. Receive facts for all matching entities tracked by that data source

**Available Filters:**
- **kind**: Filter by entity kind (e.g., "component", "api"). **Defaults to "component".**
- **namespace**: Filter by namespace (e.g., "default", "acmeinc")

**Usage Examples:**
- "Get all facts from data source 'github-stats'"
- "Get facts for all APIs from security metric data sources"
- "Show me all entities regardless of kind from github data source"
- "Get component facts in the acmeinc namespace"

**Note:** 
- The default kind filter of "component" covers most use cases. To see all entity kinds, explicitly specify a different kind or omit the filter.

**Required Permissions:**
- **Catalog entity read (*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get GitHub Metrics

Retrieve GitHub-related metrics including pull request performance, repository activity, and contributor data.

**Parameters:**
- `name` (string): The name of the catalog entity
- `namespace` (string, optional): The entity namespace (defaults to "default")
- `kind` (string, optional): The entity kind (defaults to "component")

- `entityRef` (string): Entity reference

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-github-metrics",
      "arguments": {
        "name": "user-service"
      }
    },
    "id": 1
  }'

```json
{
  "entityRef": "component:default/user-service"
}
```

**Return Schema:**

```typescript
{
  pullRequests: {
    total: number | 'unknown',
    merged: number | 'unknown',
    open: number | 'unknown',
    mergedPercentage: number | 'unknown',
    mergedLastMonth: number | 'unknown'
  },
  mergeTime: {
    avgHours: number | 'unknown',
    avgLastMonthHours: number | 'unknown',
    minHours: number | 'unknown',
    maxHours: number | 'unknown',
    minLastMonthHours: number | 'unknown',
    maxLastMonthHours: number | 'unknown'
  },
  issues: {
    total: number | 'unknown',
    open: number | 'unknown',
    closed: number | 'unknown',
    closedLastMonth: number | 'unknown'
  },
  latestMergedPR: {
    title: string | 'unknown',
    author: string | 'unknown'
  },
  collaboration: {
    languages: string[],
    collaborators: string[],
    collaboratorCount: number | 'unknown'
  },
  branchProtection: {
    enabled: boolean | 'unknown',
    enforceAdmins: boolean | 'unknown',
    allowDeletions: boolean | 'unknown',
    requiredLinearHistory: boolean | 'unknown',
    allowForcePushes: boolean | 'unknown',
    blockCreations: boolean | 'unknown',
    requiredSignatures: boolean | 'unknown'
  },
  codeReview: {
    dismissStaleReviews: boolean | 'unknown',
    requireCodeOwnerReviews: boolean | 'unknown',
    requireLastPushApproval: boolean | 'unknown',
    requiredApprovingReviewCount: number | 'unknown',
    strictRequiredStatusChecks: boolean | 'unknown',
    usesCodeowners: boolean | 'unknown',
    codeownersErrorCount: number | 'unknown',
    codeownersHasErrors: boolean | 'unknown'
  }
}
```

**Usage Examples:**
- "How long does it take to merge PRs for user-service?"
- "Show me GitHub metrics for payment-api"
- "What's the PR activity for auth-service?"

#### Required Permissions:

- **Catalog entity read (\*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Security Metrics

Access security-related metrics from Snyk vulnerability scans and Dependabot alerts.

**Parameters:**
- `name` (string): The name of the catalog entity
- `namespace` (string, optional): The entity namespace (defaults to "default")
- `kind` (string, optional): The entity kind (defaults to "component")

- `entityRef` (string): Entity reference

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-security-metrics",
      "arguments": {
        "name": "payment-service"
      }
    },
    "id": 1
  }'

```json
{
  "entityRef": "component:default/payment-service"
}
```

**Return Schema:**

```typescript
{
  snykIssues?: {
    total: number,
    critical: number,
    high: number,
    medium: number,
    low: number
  },
  dependabotAlerts?: {
    open: number,
    dismissed: number,
    fixed: number
  },
  branchProtection?: boolean
}
```

**Usage Examples:**
- "What security vulnerabilities does payment-service have?"
- "Are there any Dependabot alerts for user-service?"
- "Is branch protection enabled for auth-service?"

#### Required Permissions:

- **Catalog entity read (\*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get PagerDuty Metrics

Retrieve incident metrics and service configuration from PagerDuty integration.

**Parameters:**
- `name` (string): The name of the catalog entity
- `namespace` (string, optional): The entity namespace (defaults to "default")
- `kind` (string, optional): The entity kind (defaults to "component")

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-pagerduty-metrics",
      "arguments": {
        "name": "auth-service"
      }
    },
    "id": 1
  }'

**Return Schema:**

```typescript
{
  incidentMetrics?: {
    totalIncidents: number,
    monthlyIncidents: number,
    quarterlyIncidents: number,
    meanTimeToResolve?: number,
    meanTimeToFirstAck?: number,
    upTimePercentage?: number
  },
  serviceInfo?: {
    hasEscalationPolicy: boolean,
    hasTeamsAssigned: boolean,
    hasDescription: boolean,
    alertCreationType?: string
  }
}
```

**Usage Examples:**
- "How many incidents does auth-service have?"
- "What's the MTTR for payment-service?"
- "Show me PagerDuty metrics for api:acmeinc/user-service"

#### Required Permissions:

- **Catalog entity read (\*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Datadog Metrics

Access Service Level Objective (SLO) data and monitoring information from Datadog.

**Parameters:**
- `name` (string): The name of the catalog entity
- `namespace` (string, optional): The entity namespace (defaults to "default")
- `kind` (string, optional): The entity kind (defaults to "component")

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-datadog-metrics",
      "arguments": {
        "name": "inventory-api"
      }
    },
    "id": 1
  }'

**Return Schema:**

```typescript
{
  sloCount: number,
  monitorCount: number
}
```

**Usage Examples:**
- "How many SLOs does inventory-api have?"
- "Show me Datadog metrics for payment-service"
- "What monitors are configured for auth-service?"

#### Required Permissions:

- **Catalog entity read (\*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Entity Compliance

Evaluate entity metadata completeness and compliance with organizational standards.

**Parameters:**
- `name` (string): The name of the catalog entity
- `namespace` (string, optional): The entity namespace (defaults to "default")
- `kind` (string, optional): The entity kind (defaults to "component")

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-entity-compliance",
      "arguments": {
        "name": "user-service"
      }
    },
    "id": 1
  }'

**Return Schema:**

```typescript
{
  metadata: {
    hasTitle: boolean | 'unknown',
    hasDescription: boolean | 'unknown',
    hasTags: boolean | 'unknown',
    hasOwner: boolean | 'unknown'
  },
  techdocs: {
    hasTechdocsRef: boolean | 'unknown'
  },
  ownership: {
    hasOwner: boolean | 'unknown',
    hasGroupOwner: boolean | 'unknown',
    hasRelationships: boolean | 'unknown'
  }
}
```

**Usage Examples:**
- "How complete is the metadata for user-service?"
- "Is payment-api properly documented?"
- "Does auth-service have proper ownership assigned?"

#### Required Permissions:

- **Catalog entity read (\*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Repository Info

Analyze repository structure and catalog configuration status.

**Parameters:**
- `name` (string): The name of the catalog entity
- `namespace` (string, optional): The entity namespace (defaults to "default")

**Example Usage:**
```bash
curl -s -X POST https://api.roadie.so/api/mcp/v1/tech-insights-facts \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get-repository-info",
      "arguments": {
        "name": "payment-service"
      }
    },
    "id": 1
  }'

**Return Schema:**

```typescript
{
  filePaths: string[],
  totalFiles: number,
  inCatalog?: boolean,
  fileTypes: {
    docker: number,
    yaml: number,
    javascript: number,
    python: number,
    docs: number,
    config: number
  }
}
```

**Usage Examples:**
- "What files are in the payment-service repository?"
- "Is user-service properly cataloged?"
- "Show me the file structure for auth-service"

#### Required Permissions:

- **Catalog entity read (\*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

## Common Use Cases

### Performance Analysis

- "How long does it take to merge PRs for user-service?"
- "What's the incident rate for payment-service?"
- "Show me the SLO compliance for auth-api"

### Security Assessment

- "What security vulnerabilities does user-service have?"
- "Are there any Dependabot alerts for payment-service?"
- "What's the security posture of our inventory system?"

### Compliance Monitoring

- "How complete is the metadata for auth-service?"
- "Which services need better documentation?"
- "What's the compliance score for our payment components?"

### Operational Insights

- "Which services have the most incidents?"
- "What's the GitHub activity like for user-service?"
- "Show me the monitoring status for all payment services"

## Tech Insights Data Sources

The module automatically fetches data from all configured Tech Insights data sources, including:

- **GitHub Data Source**: PR metrics, repository info, collaborators, commit activity
- **Snyk Data Source**: Security vulnerability counts by severity level
- **Dependabot Data Source**: Dependency alert statistics and update metrics
- **PagerDuty Data Sources**: Incident metrics, MTTR, service configuration
- **Datadog Data Source**: SLO compliance, monitor counts, alert frequency
- **Repository Files**: File structure analysis, catalog-info.yaml status
- **Entity Metadata**: Completeness scores, required field compliance

## Example Workflows

### Security Assessment

**User:** "What's the security posture of our payment services?"

**AI Response using MCP:**

1. Uses `get-security-metrics` for all payment-related components
2. Aggregates vulnerability data across services
3. Identifies critical security issues requiring attention
4. Provides prioritized remediation recommendations

### Operational Review

**User:** "How are our services performing?"

**AI Response using MCP:**

1. Combines `get-github-metrics` with `get-pagerduty-metrics`
2. Analyzes development velocity and operational stability
3. Identifies services with concerning trends
4. Suggests areas for improvement

## Best Practices

- Combine multiple metrics for comprehensive service assessment
- Use compliance data to identify services needing attention
- Monitor trends over time rather than point-in-time snapshots
- Correlate security metrics with development activity

## Data Availability

Metric availability depends on your configured Tech Insights data sources. If a metric shows as unavailable, ensure the corresponding integration is properly configured in your Roadie instance.
