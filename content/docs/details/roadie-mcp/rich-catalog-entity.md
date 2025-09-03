---
title: Rich Catalog Entity Server
publishedDate: '2025-07-22T15:00:00.0Z'
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

## Required Permissions

- **Catalog entity read (*)** - Access to catalog entities

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

## Required Permissions

- **Catalog entity read (*)** - Access to catalog entities

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

## Required Permissions

- **Catalog entity read (*)** - Access to catalog entities and their docs

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

## Required Permissions

- **Catalog entity read (*)** - Access to catalog entities

### Search TechDocs

Search TechDocs documentation content across all entities in the catalog to find relevant information without knowing which specific entity contains it.

**Parameters:**
- `searchQuery` (string): Search query to find documentation content across all entities
- `pageLimit` (number, optional): Maximum number of results to return (default: 100)

**Example Usage:**
```json
{
  "searchQuery": "API design patterns",
  "pageLimit": 50
}
```

**Return Schema:**
```typescript
{
  totalResults: number,
  results: {
    pageTitle: string,
    content: string,
    path: string,
    htmlViewPath: string,
    entityRef: string,
    entityKind: string,
    entityNamespace: string,
    entityName: string
  }[]
}
```

**Usage Examples:**
- "Find documentation about API design patterns for my organisation"
- "What deployment patterns are used in my organisation"
- "How is Kubernetes used in my organisation? Are there any best practices?"
- "Search for security best practices in my organisation"
- "How are database migrations done in my organisation?"

**Key Benefits:**
- Discovers relevant documentation across entities you might not know about
- Useful when you don't know which specific entity contains the information
- Helps find patterns and best practices documented across multiple services
- Good for discovering related documentation in different teams/entities

## Required Permissions

- **Catalog entity read (*)** - Access to catalog entities and their documentation
- **TechDocs read** - Access to technical documentation

### User Group Listing

List users or groups and their relationships to understand organizational structure and team relationships.

**Parameters:**
- `entityType` (enum): Type of entities to list - "user" for User entities or "group" for Group entities
- `namespace` (string, optional): Optional filter by namespace. This is typically the SCM organisation, especially in the case of users and groups
- `limit` (number, optional): Maximum number of results to return (if not specified, returns all entities)

**Example Usage:**
```json
{
  "entityType": "user",
  "namespace": "platform",
  "limit": 50
}
```

**Return Schema:**
```typescript
{
  totalFound: number,
  entityType: string,
  entities: {
    entityRef: string,
    memberOf?: string[],
    type?: string,
    parent?: string,
    children?: string[],
    members?: string[]
  }[]
}
```

**Usage Examples:**
- "Which users are part of more than one group"
- "Are there any users not assigned to a group"
- "List all engineering team members"
- "Show me team hierarchies"
- "List users in the platform namespace"

**Key Benefits:**
- Shows team membership relationships (users in groups, group hierarchies)
- Provides organizational structure overview for answering team-related questions
- Returns minimal fields to reduce payload size and improve performance
- Helps understand team structure and user assignments

## Required Permissions

- **Catalog entity read (*)** - Access to catalog entities

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