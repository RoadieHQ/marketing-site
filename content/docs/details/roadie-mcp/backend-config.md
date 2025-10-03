---
title: Backend Config Server
publishedDate: '2025-08-08T15:00:00.0Z'
description: Manage and query backend configuration in Roadie
---

## Overview

The Backend Config Server provides specialized MCP tools for managing and querying backend configuration in Roadie. It focuses on administrative tasks like proxy configuration.

**Server Endpoint:** `https://api.roadie.so/api/mcp/v1/backend-config`

## Capabilities

- **Proxy Configuration Management**: List, create, and update proxy configurations for external service access
- **Secrets Management**: List available secrets that can be used in proxy configurations

## Available Tools

### Get Proxy Config List

Retrieve the current proxy configuration from the app-config plugin, including both custom proxy entries and default proxy entries.

**Parameters:**

- `random_string` (string): Dummy parameter for no-parameter tools

**Example Usage:**

```json
{
  "random_string": "dummy"
}
```

**Returns:** List of configured proxy routes including:

- Both custom proxy entries and default proxy entries
- Proxy paths, targets, and advanced settings like headers and methods

#### Required Permissions:

- **Catalog entity read (\*)** - Access to catalog entities
- **Backend config read** - Access to backend configuration

### Create Proxy Config

Create or update proxy entries in Roadie for secure access to external services from the Roadie backend using secrets stored in Roadie for authentication if necessary.

**Parameters:**

- `proxies` (array): Array of proxy configurations with path, target, and optional advanced settings

**Example Usage:**

```json
{
  "proxies": [
    {
      "path": "/github",
      "target": "https://api.github.com",
      "advancedSettings": {
        "headers": {
          "Authorization": "Bearer ${GITHUB_TOKEN}"
        },
        "allowedMethods": ["GET", "POST"]
      }
    }
  ]
}
```

**Proxy Configuration Schema:**

```typescript
{
  proxies: {
    path: string, // Path at which the proxy is mounted (must start with /)
    target: string, // Target URL for the proxy
    advancedSettings?: {
      allowedHeaders?: string[],
      allowedMethods?: string[],
      changeOrigin?: boolean,
      headers?: Record<string, string>,
      noHeaders?: boolean,
      noMethods?: boolean,
      pathRewrite?: Record<string, string>,
      target?: string
    }
  }[]
}
```

#### Required Permissions:

- **Backend config write** - Permission to create and update backend configuration

### Get Secrets List

Retrieve the list of available secrets that can be used in proxy configurations and other backend integrations.

**Parameters:**

- `random_string` (string): Dummy parameter for no-parameter tools

**Example Usage:**

```json
{
  "random_string": "dummy"
}
```

**Returns:** List of available secrets including:

- Secret names that can be referenced in proxy configurations
- Masked secret values (showing only last 4 characters for security)
- Secret descriptions and usage information
- Current status (Available, Updating, or Not Set)
- Optional help URLs with additional information

**Return Schema:**

```typescript
{
  secrets: {
    name: string, // Secret name (e.g., "GITHUB_TOKEN")
    value: string, // Hidden value showing only last 4 characters
    description?: string, // Description of what the secret is for
    status: 'Available' | 'Updating' | 'Not Set', // Current status of the secret
    helpUrl?: string // Optional URL with help information for this secret
  }[]
}
```

#### Required Permissions:

- **Catalog entity read (\*)** - Access to catalog entities
- **Backend config read** - Access to backend configuration and secrets

## Common Use Cases

### Proxy Management

- "What backend proxies are configured in Roadie?"
- "Show me the proxy configuration for my custom plugin"
- "List all backend proxy endpoints in Roadie"

### Proxy Creation and Updates

- "Create a proxy for the GitHub API at /github with target https://api.github.com"
- "Add a proxy entry for my service at /my-service pointing to https://my-api.com"
- "Set up a proxy with custom headers for authentication"
- "Create multiple proxy entries for different external services"
- "Update the Snyk proxy to only allow GET methods"

### Service Integration

- "Add a proxy entry for Wiz security API"
- "Configure a proxy for our internal monitoring service"
- "Set up authenticated access to external documentation APIs"

### Secrets Management

- "What secrets are available for use in proxy configurations?"
- "List all available secrets in Roadie and their current status"
- "Show me which secrets are configured and which need to be set"
- "What authentication tokens can I use for my proxy setup?"
- "Which secrets are currently updating or not set?"
- "Show me help information for configuring specific secrets"

## Security Considerations

### Authentication and Secrets

- Proxy routes allow secure access to external services using secrets stored in Roadie
- Authentication headers can reference stored secrets using `${SECRET_NAME}` syntax
- Secrets are managed separately and securely in Roadie's secret management system

### Access Control

- **Method Restrictions**: Configure allowed HTTP methods for security
- **Header Control**: Specify allowed headers and custom authentication headers
- **Path Management**: Control routing and path rewriting for security

### Best Practices for Secrets

- Use `get-secrets-list` to discover available secrets and check their status before configuring proxies
- Verify secrets show "Available" status rather than "Not Set" or "Updating"
- Review masked values to confirm secrets contain expected data patterns
- Always reference secrets using the `${SECRET_NAME}` syntax rather than hardcoding values
- Utilize help URLs from the secrets list for service-specific configuration guidance
- Test secret authentication manually before deploying proxy configurations
- Regularly audit which secrets are being used in proxy configurations

## Example Workflows

### Setting Up External API Access

**User:** "I need to integrate with the Travis API from my custom plugin"

**AI Response using MCP:**

1. Uses `create-proxy-config` to set up a Travis API proxy
2. Configures authentication using stored Travis token
3. Sets appropriate method restrictions for security
4. Provides the proxy endpoint for plugin use

### Reviewing Current Configuration

**User:** "What external services do we currently have proxies for?"

**AI Response using MCP:**

1. Uses `get-proxy-config-list` to fetch all configured proxies
2. Analyzes proxy targets and paths
3. Identifies external services and their access patterns
4. Provides summary of current integrations

### Secrets Discovery and Configuration

**User:** "I want to set up a proxy for GitHub API but I'm not sure what authentication tokens are available"

**AI Response using MCP:**

1. Uses `get-secrets-list` to fetch all available secrets
2. Identifies GitHub-related secrets (e.g., `GITHUB_TOKEN`)
3. Checks secret status - whether they're Available, Updating, or Not Set
4. Shows masked values to confirm secrets are configured
5. Provides help URLs if available for additional setup guidance
6. Uses `create-proxy-config` to configure the proxy with the appropriate secret reference

## Advanced Configuration

### Headers and Authentication

```json
{
  "path": "/external-api",
  "target": "https://api.external-service.com",
  "advancedSettings": {
    "headers": {
      "Authorization": "Bearer ${EXTERNAL_API_TOKEN}",
      "Content-Type": "application/json"
    },
    "allowedMethods": ["GET", "POST"],
    "changeOrigin": true
  }
}
```

### Path Rewriting

```json
{
  "path": "/legacy-api",
  "target": "https://new-api.service.com",
  "advancedSettings": {
    "pathRewrite": {
      "^/legacy-api": "/v2/api"
    }
  }
}
```

## Troubleshooting

### Common Issues

1. **Authentication Failures**:

   - Verify secret names match exactly (case-sensitive)
   - Ensure secrets are properly configured in Roadie
   - Ensure secrets like tokens work by testing them
   - Check header formatting and syntax

2. **Connection Issues**:

   - Verify target URLs are accessible from Roadie's infrastructure
   - Check for network restrictions or firewall rules

3. **Method Restrictions**:

   - Review `allowedMethods` configuration
   - Ensure required HTTP methods are included
   - Check if `noMethods` is incorrectly set to true

4. **Path Issues**:

   - Verify proxy paths start with `/`
   - Check for path conflicts with existing routes
   - Review `pathRewrite` rules for correctness

5. **Secrets Issues**:
   - Use `get-secrets-list` to verify secret names, status, and availability
   - Check that secrets show "Available" status rather than "Not Set" or "Updating"
   - Review masked values to confirm secrets contain data
   - Ensure secrets are properly set in Roadie (see [Setting Secrets](/docs/details/setting-secrets/))
   - Check that secret references use the correct `${SECRET_NAME}` syntax
   - Use help URLs from the secrets list for service-specific setup guidance
   - Verify that secrets have the required permissions for the target service
