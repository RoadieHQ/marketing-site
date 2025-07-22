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

### Get GitHub Metrics

Retrieve GitHub-related metrics including pull request performance, repository activity, and contributor data.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/user-service"
}
```

**Return Schema:**
```typescript
{
  avgMergeTimeHours?: number,
  latestMergedPR?: string,
  latestMergedPRAuthor?: string,
  totalPRs?: number,
  mergedPRs?: number,
  openPRs?: number
}
```

#### Required Permissions:
- **Catalog entity read (*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Security Metrics

Access security-related metrics from Snyk vulnerability scans and Dependabot alerts.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
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

#### Required Permissions:
- **Catalog entity read (*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get PagerDuty Metrics

Retrieve incident metrics and service configuration from PagerDuty integration.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/auth-service"
}
```

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

#### Required Permissions:
- **Catalog entity read (*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Datadog Metrics

Access Service Level Objective (SLO) data and monitoring information from Datadog.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/inventory-api"
}
```

**Return Schema:**
```typescript
{
  sloCount: number,
  monitorCount: number
}
```

#### Required Permissions:
- **Catalog entity read (*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Entity Compliance

Evaluate entity metadata completeness and compliance with organizational standards.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/user-service"
}
```

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

#### Required Permissions:
- **Catalog entity read (*)** - Access to catalog entities
- **Roadie Tech Insights Data Source Read** - Access to Tech Insights data

### Get Repository Info

Analyze repository structure and catalog configuration status.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/payment-service"
}
```

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

#### Required Permissions:
- **Catalog entity read (*)** - Access to catalog entities
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