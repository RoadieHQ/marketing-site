---
title: Scaffolder Server
publishedDate: '2025-01-18T15:00:00.0Z'
description: Find, validate, and execute Backstage scaffolder templates
---

## Overview

The Scaffolder Server enables AI assistants to discover, validate, and execute Backstage scaffolder templates, automating project creation and code generation workflows.

**Server Endpoint:** `https://api.roadie.so/api/mcp/v1/scaffolder-use`

## Capabilities

- **Template Discovery**: Find available scaffolder templates using intelligent search
- **Template Inspection**: Get detailed template specifications and requirements
- **Input Validation**: Verify parameter values before template execution
- **Template Execution**: Run templates with proper error handling and monitoring
- **Status Monitoring**: Track execution progress and results

## Available Tools

### Find Scaffolder Templates

Search for available scaffolder templates using queries that match template names, descriptions, and tags.

**Parameters:**
- `queryString` (string): Search term for finding templates

**Example Usage:**
```json
{
  "queryString": "react frontend"
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

### Retrieve Scaffolder Template

Get detailed information about a specific template, including parameters, steps, and requirements.

**Parameters:**
- `name` (string): Template name
- `namespace` (string, optional): Template namespace (defaults to "default")

**Example Usage:**
```json
{
  "name": "microservice-template",
  "namespace": "platform"
}
```

**Return Schema:**
```typescript
{
  entityRef: string,
  spec: string
}
```

### Validate Template Values

Check if your input values meet the template's parameter requirements before execution, preventing common errors.

**Parameters:**
- `templateRef` (string): Template reference (e.g., "template:default/my-template")
- `values` (object): Parameter values to validate

**Example Usage:**
```json
{
  "templateRef": "template:default/react-app",
  "values": {
    "name": "my-new-app",
    "description": "A React application",
    "owner": "team-frontend"
  }
}
```

**Return Schema:**
```typescript
{
  valid: boolean, // Whether the values are valid
  errors: string[], // List of validation errors
  schema: Record<string, any> // The template parameter schema
}
```

### Run Scaffolder Template

Execute a scaffolder template with the provided values and optional secrets.

**Parameters:**
- `templateRef` (string): Template reference
- `values` (object): Required parameter values
- `secrets` (object, optional): Secrets needed by the template
- `skipValidation` (boolean, optional): Skip validation step

**Example Usage:**
```json
{
  "templateRef": "template:default/microservice",
  "values": {
    "name": "user-service",
    "description": "User management microservice",
    "owner": "backend-team",
    "database": "postgresql"
  },
  "secrets": {
    "github_token": "ghp_xxx"
  }
}
```

**Return Schema:**
```typescript
{
  id: string, // The created task ID
  taskUrl: string // URL to monitor the task
}
```

### Get Scaffolder Task

Monitor the status and progress of template execution.

**Parameters:**
- `id` (string): Task ID returned from template execution

**Example Usage:**
```json
{
  "id": "abc123def456"
}
```

## Common Use Cases

### Guided Project Creation
- "Create a new React application for the frontend team"
- "Set up a microservice with PostgreSQL database"
- "Generate a new API service with authentication"

### Template Exploration
- "What templates are available for Node.js services?"
- "Show me the requirements for the mobile app template"
- "What parameters does the library template need?"

### Automated Workflows
- Validate inputs before execution to prevent failures
- Execute templates with proper error handling
- Monitor progress and provide status updates

## Required Permissions

- **Catalog entity read (*)** - Access to template definitions
- **Scaffolder execute** - Permission to run templates and create projects

## Example Workflows

### Basic Template Execution

1. **Find a template**: Use `find-scaffolder-templates` to discover available templates
2. **Inspect the template**: Use `retrieve-scaffolder-template` to understand requirements
3. **Validate inputs**: Use `validate-template-values` to ensure your values are correct
4. **Run the template**: Use `run-scaffolder-template` to execute
5. **Monitor progress**: Use `get-scaffolder-task` to check execution status

### AI-Guided Project Creation

**User:** "Create a new React frontend application"

**AI Response using MCP:**
1. Searches for React templates using `find-scaffolder-templates`
2. Shows available templates and their requirements
3. Guides user through providing necessary parameters
4. Validates inputs using `validate-template-values`
5. Executes template using `run-scaffolder-template`
6. Monitors progress and reports results

## Best Practices

- Always validate inputs before execution to catch errors early
- Provide clear, descriptive names for generated projects
- Include proper ownership and team information
- Use secrets parameter for sensitive information like tokens
- Monitor task status for long-running templates

## Security Considerations

- All operations require proper authentication tokens
- Secrets can be passed securely through the `secrets` parameter
- Template execution respects Roadie's permission model
- Task monitoring is limited to tasks you have access to 