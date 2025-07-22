---
title: API Docs Query Server
publishedDate: '2025-01-18T15:00:00.0Z'
description: Discover and retrieve API documentation and specifications from your catalog
---

## Overview

The API Docs Query Server provides AI assistants with comprehensive access to your organization's API documentation and specifications stored in your Backstage catalog.

**Server Endpoint:** `https://api.roadie.so/api/mcp/v1/api-docs-query`

## Capabilities

- **API Discovery**: Search for APIs using natural language queries
- **Specification Retrieval**: Get complete OpenAPI, GraphQL, or AsyncAPI specifications
- **Intelligent Search**: Find APIs by domain, technology, or business context
- **Metadata Access**: Retrieve API descriptions, ownership, and categorization

## Available Tools

### Find API Specs

Search for available API specifications using a query string that supports partial matching across API names, descriptions, and metadata.

**Parameters:**
- `queryString` (string): Search term for finding API specs

**Example Usage:**
```json
{
  "queryString": "payment"
}
```

**Return Schema:**
```typescript
{
  results: {
    type: string,
    document: {
      kind: string,
      text: string,
      type: string,
      owner: string,
      title: string,
      keywords: string,
      location: string,
      lifecycle: string,
      namespace: string,
      componentType: string
    }
  }[]
}
```

This will return all APIs related to payments, including services like "payment-gateway", "payment-processor", or "billing-api".

### Retrieve API Spec

Get the complete specification for a specific API, including full OpenAPI/Swagger definitions, schemas, and endpoint documentation.

**Parameters:**
- `name` (string): API name
- `namespace` (string, optional): API namespace (defaults to "default")

**Example Usage:**
```json
{
  "name": "user-service-api",
  "namespace": "backend"
}
```

**Return Schema:**
```typescript
{
  entityRef: string,
  spec: string
}
```

#### Required Permissions

- **Catalog entity read (*)** - Access to catalog entities and API specifications

## Common Use Cases

### API Integration Planning
- Ask your AI assistant: "What payment APIs are available?"
- Get detailed endpoint information for integration planning
- Compare different APIs to choose the best fit

### Documentation Exploration
- "Show me the schema for creating a user account"
- "What authentication does the order API require?"
- "List all the endpoints in the inventory service"

### Development Assistance
- Generate client code from API specifications
- Create automated tests based on API schemas
- Validate API requests and responses

## Examples

### Example AI Conversation

**User:** "I need to integrate with our user management system"

**AI Response using MCP:**
1. Searches for user-related APIs using `find-api-specs`
2. Retrieves specifications for relevant APIs
3. Explains available endpoints, authentication, and schemas
4. Provides integration guidance and code examples

### Practical Usage

```json
// Finding payment-related APIs
{
  "tool": "find-api-specs",
  "arguments": {
    "queryString": "payment processing"
  }
}

// Getting complete specification
{
  "tool": "retrieve-api-spec", 
  "arguments": {
    "name": "payment-gateway-api",
    "namespace": "payments"
  }
}
```

## Best Practices

- Start with broad search terms and refine based on results
- Use domain-specific language (e.g., "payment", "authentication", "notification")
- Check multiple namespaces if APIs aren't found in default
- Review complete specifications before starting integration 