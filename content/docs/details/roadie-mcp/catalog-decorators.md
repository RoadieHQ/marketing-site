---
title: Catalog Decorators Server
publishedDate: '2025-08-08T15:00:00.0Z'
description: Manage catalog entity decorators and fragments in Roadie
---

## Overview

The Catalog Decorators Server provides MCP tools for managing catalog entity decorators/fragments in Roadie. It enables AI assistants to retrieve, create and update fragments that enhance catalog entities with additional metadata.

Fragments are partial entity data that are "decorated" onto an existing entity in the catalog to enrich its metadata.

**Server Endpoint:** `https://api.roadie.so/api/mcp/v1/catalog-decorators`

## Capabilities

- **Fragment Discovery**: List all entity fragments or fragments for a specific entity
- **Fragment Creation**: Create new fragments to decorate entities with additional metadata
- **Fragment Updates**: Add and change data in existing fragments for an entity
- **Entity Enhancement**: Add specifications, metadata, and other information to catalog entities

## Available Tools

### List Fragments

Retrieve a list of all entity fragments with optional filtering capabilities.

**Parameters:**
- `entityRef` (string, optional): Filter fragments for a specific entity
- `limit` (number, optional): Maximum number of results to return (default: 100)
- `offset` (number, optional): Pagination offset for results (default: 0)

**Example Usage:**
```json
{
  "entityRef": "component:default/user-service",
  "limit": 20,
  "offset": 0
}
```

**Alternative Usage (List All):**
```json
{
  "limit": 100
}
```

**Returns:** List of fragments including:
- Fragment identifiers and metadata
- Associated entity references
- Fragment content and specifications
- Creation and modification timestamps

**Return Schema:**
```typescript
{
  fragments: {
    id: string, // Fragment identifier
    entityRef: string, // Associated entity reference
    fragment: {
      metadata?: Record<string, any>, // Additional metadata
      spec?: Record<string, any>, // Specification data
      // Other fragment properties
    },
    createdAt: string, // Creation timestamp
    updatedAt?: string // Last modification timestamp
  }[],
  total: number, // Total number of fragments available
  hasMore: boolean // Whether more results are available
}
```

#### Required Permissions:
- **Fragment entity read** - `roadie.entity-fragment.read` - Permission to view entity fragments

### Create Fragment

Create a new fragment to decorate a catalog entity with additional metadata and specifications.

**Parameters:**
- `entityRef` (string): Target entity reference to decorate
- `fragment` (object): Fragment data containing metadata and spec information

**Example Usage:**
```json
{
  "entityRef": "component:default/payment-service",
  "fragment": {
    "metadata": {
      "annotations": {
        "example.com/responsible-team": "payments-team",
        "example.com/deployment-strategy": "blue-green"
      },
      "labels": {
        "tier": "critical",
        "environment": "production"
      }
    },
    "spec": {
      "type": "something-new",
      "additionalConfig": {
        "monitoring": "enabled",
        "backup": "daily"
      }
    }
  }
}
```

**Fragment Schema:**
```typescript
{
  entityRef: string, // Target entity reference
  fragment: {
    metadata?: {
      annotations?: Record<string, string>, // Additional annotations
      labels?: Record<string, string>, // Additional labels
      tags?: string[], // Additional tags
      // Other metadata fields
    },
    spec?: Record<string, any>, // Custom specification data
  }
}
```

**Returns:** Created fragment information including:
- Fragment ID and entity reference
- Confirmation of applied decorations
- Any validation warnings or notes

#### Required Permissions:
- **Fragment entity create** - `roadie.entity-fragment.create` - Permission to create and modify entity fragments


## Common Use Cases

### Fragment Discovery and Management
- "What fragments exist for the payment-service component?"
- "List all fragments in the system"
- "Find fragments that have been modified recently"

### Entity Enhancement
- "Update the decription of the user-service to say ..."
- "Add prometheus monitoring annotations to the user-service component"

### Bulk Operations and Analysis
- "Show me all fragments that modify descriptions"
- "List fragments that enhance entities with monitoring configurations"
- "Find all custom specifications added to payment-related services"

## Fragment Use Cases

### Adding Team Responsibility Information
```json
{
  "entityRef": "component:default/user-service",
  "fragment": {
    "metadata": {
      "annotations": {
        "roadie.io/responsible-team": "platform-team",
        "roadie.io/on-call-schedule": "https://pagerduty.com/schedules/platform"
      }
    }
  }
}
```

### Enhancing with Deployment Information
```json
{
  "entityRef": "resource:default/payment-gateway",
  "fragment": {
    "metadata": {
      "labels": {
        "deployment-strategy": "canary",
        "release-cycle": "weekly"
      }
    },
    "spec": {
      "deployment": {
        "replicas": 3,
        "strategy": "RollingUpdate"
      }
    }
  }
}
```

### Adding Monitoring and Observability
```json
{
  "entityRef": "api:default/orders-api",
  "fragment": {
    "metadata": {
      "annotations": {
        "datadog.com/dashboard": "https://app.datadoghq.com/dashboard/orders-api",
        "prometheus.io/scrape": "true"
      },
      "monitoring": {
        "alerts": ["high-error-rate", "high-latency"],
        "slos": [
          {
            "name": "availability",
            "target": 99.9
          }
        ]
      }
    },
    "spec": {}
  }
}
```

## Example Workflows

### Entity Enhancement Workflow

**User:** "I want to add team ownership information to all payment services"

**AI Response using MCP:**
1. Uses `list-fragments` to find existing fragments for payment services
2. Identifies services that need team ownership information
3. Uses `create-fragment` to add responsible team annotations
4. Provides summary of enhanced entities and their new metadata

### Fragment Audit and Discovery

**User:** "Show me all custom monitoring configurations added to our services"

**AI Response using MCP:**
1. Uses `list-fragments` to retrieve all fragments
2. Filters fragments containing monitoring-related specifications
3. Analyzes monitoring patterns and configurations
4. Provides summary of monitoring setups across services

### Systematic Entity Decoration

**User:** "Add deployment strategy labels to all components in the production namespace"

**AI Response using MCP:**
1. Uses entity search to find all production components
2. Uses `list-fragments` to check existing decorations
3. Uses `create-fragment` to add deployment strategy information
4. Confirms successful application and provides summary

## Best Practices

### Fragment Design
- **Specific Purpose**: Create fragments for specific enhancement purposes (monitoring, ownership, deployment info)
- **Update the source YAML file if possible**: Fragments allow easier updates to entity data and allow updates to entities not defined in YAML, but its always preferable to update the source entity of it comes from a YAML file in an SCM. 

### Entity Reference Management
- **Precise References**: Use exact entity references (kind:namespace/name format)
- **Validation**: Verify target entities exist before creating fragments

## Security Considerations

### Fragment Permissions
- Fragment mutations requires appropriate write permissions of `roadie.entity-fragment.create`

### Data Validation
- Fragment content is validated against entity schemas
- Malformed fragments are rejected with clear error messages

## Troubleshooting

### Common Issues

1. **Permission Errors**:
   - Verify you have the relevant `roadie.entity-fragment.<action>` permission
   - Ensure access to target entities before creating fragments
   - Check namespace access permissions

2. **Entity Reference Issues**:
   - Use exact entity reference format: `kind:namespace/name`
   - Verify target entities exist in the catalog
   - Check for typos in entity names or namespaces

3. **Validation Failures**:
   - Ensure fragment content follows expected schemas
   - Validate JSON structure and data types
   - Check that required fields are provided


