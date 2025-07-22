---
title: Rich Catalog Entity Server
publishedDate: '2025-01-18T15:00:00.0Z'
description: Access catalog entity data, relationships, and documentation
---

## Overview

The Rich Catalog Entity Server provides AI assistants with comprehensive access to catalog entity data, relationships, and documentation from your Backstage instance.

**Server Endpoint:** `https://api.roadie.so/api/mcp/v1/rich-catalog-entity`

## Capabilities

- **Entity Information**: Get detailed metadata, ownership, lifecycle, and specifications
- **Relationship Mapping**: Discover dependencies, provides relationships, and entity connections
- **Documentation Access**: Search and retrieve TechDocs content associated with entities
- **Entity Discovery**: Search and find entities when exact names are unknown
- **Smart Resolution**: Intelligent entity lookup that can find entities by name across namespaces
- **Enhanced Error Handling**: Provides search suggestions when entities aren't found

## Available Tools

### Get Entity Info

Retrieve basic entity information including name, description, owner, lifecycle stage, and metadata.

**Parameters:**
- `entityRef` (string): Entity reference (e.g., "component:default/my-service")

**Example Usage:**
```json
{
  "entityRef": "component:default/user-service"
}
```

**Return Schema:**
```typescript
{
  name: string,
  title?: string,
  description?: string,
  owner?: string,
  lifecycle?: string,
  type?: string,
  tags?: string[],
  annotations?: Record<string, string>,
  labels?: Record<string, string>,
  links?: Record<string, any>[],
  namespace?: string,
  kind?: string
}
```

### Get Entity Relationships

Discover entity relationships including dependencies, what the entity provides, and connected services.

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
  // Core relationships
  ownedBy?: string,
  owner?: string,
  system?: string,
  domain?: string,

  // Dependencies
  dependsOn: string[],
  dependencyOf: string[],

  // API relationships
  providesApis: string[],
  apiProvidedBy: string[],
  consumesApis: string[],

  // Hierarchical relationships
  partOf: string[],
  hasPart: string[],
  subcomponentOf?: string,
  subdomainOf?: string,

  // Group/User relationships
  memberOf: string[],
  members: string[],
  parent?: string,
  parentOf: string[],
  children: string[],
  childOf: string[],

  // Management relationships
  managedBy: string[],
  manages: string[]
}
```

### Get TechDocs

Search and retrieve TechDocs documentation content for specific entities.

**Parameters:**
- `entityRef` (string): Entity reference
- `query` (string, optional): Search term within the documentation

**Example Usage:**
```json
{
  "entityRef": "component:default/auth-service",
  "query": "authentication flow"
}
```

**Return Schema:**
```typescript
{
  totalPages: number,
  pages: {
    title: string,
    content: string,
    path: string,
    htmlViewPath: string
  }[]
}
```

### Search Entities

Discover and find entities when you don't know the exact entity name or want to explore available entities.

**Parameters:**
- `searchTerm` (string): Search term to find entities by name, title, or other attributes
- `kind` (string, optional): Filter by entity kind (e.g., "component", "api", "system")
- `namespace` (string, optional): Filter by specific namespace
- `limit` (number, optional): Maximum number of results to return (default: 10)

**Example Usage:**
```json
{
  "searchTerm": "payment",
  "kind": "component",
  "limit": 5
}
```

**Return Schema:**
```typescript
{
  totalFound: number,
  entities: {
    name: string,
    kind: string,
    namespace: string,
    title?: string,
    description?: string,
    owner?: string,
    lifecycle?: string,
    type?: string,
    tags?: string[],
    entityRef: string
  }[]
}
```

## Common Use Cases

### Entity Exploration
- "Who owns the user-service component?"
- "What is the lifecycle stage of payment-api?"
- "Show me the description and metadata for auth-service"

### Dependency Analysis
- "What services does payment-service depend on?"
- "Which components use the user-api?"
- "Show me all the relationships for the auth-service"

### Documentation Discovery
- "What documentation exists for the payment-service?"
- "Search for authentication information in user-service docs"
- "Show me the getting started guide for inventory-api"

### Entity Discovery
- "Find entities related to payment processing"
- "Search for all user management services"
- "What APIs are available for authentication?"
- "Show me all components owned by the backend team"
- "Find systems in the platform namespace"

## Smart Entity Resolution

The Rich Catalog Entity Server includes intelligent entity resolution that makes it more user-friendly:

### How It Works

1. **Exact Match First**: Attempts to find the entity using the exact reference provided
2. **Fallback Search**: If exact match fails, searches for entities with matching names
3. **Type Prioritization**: Prefers Component entities, then falls back to other types (API, Resource, System)
4. **Namespace Awareness**: When a namespace is specified, prioritizes entities in that namespace

### Benefits

- **Flexible Queries**: Users don't need to know exact entity references
- **Natural Language**: Works with common entity names used in conversation
- **Context Awareness**: Understands common naming patterns and conventions
- **Enhanced Discovery**: When entities aren't found, provides intelligent search suggestions
- **Error Recovery**: Automatically suggests similar entities when exact matches fail

## Required Permissions

- **Catalog entity read (*)** - Access to all catalog entities
- **TechDocs read** - Access to technical documentation (for TechDocs functionality)

## Example Workflows

### Entity Discovery Workflow

**User:** "I need to understand our payment infrastructure"

**AI Response using MCP:**
1. Uses `search-entities` to find all payment-related entities
2. Retrieves entity information for each discovered service
3. Maps relationships between payment components
4. Provides comprehensive overview of the payment ecosystem
5. Suggests related APIs and documentation for deeper exploration

### Dependency Analysis

**User:** "What does the user-service depend on?"

**AI Response using MCP:**
1. Uses `get-entity-relationships` to map all dependencies
2. Identifies direct and indirect dependencies
3. Explains the purpose of each dependency
4. Highlights potential impact of changes

## Best Practices

- Use search functionality when you don't know exact entity names
- Combine entity information with relationship data for comprehensive analysis
- Leverage TechDocs search to find specific documentation topics
- Use filters (kind, namespace) to narrow search results when needed 