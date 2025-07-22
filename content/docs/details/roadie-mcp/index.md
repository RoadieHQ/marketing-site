---
title: Roadie MCP AI Servers (Beta)
publishedDate: '2025-01-18T15:00:00.0Z'
description: How to use Roadie AI features exposed via MCP servers

humanName: Model Context Protocol (MCP) Servers
logoImage: '../../../assets/logos/ai-assistant/roadie-racks-ai.webp'
integrationType: Integration
---

## Introduction

Roadie exposes a number of [Model Context Protocol Servers (MCP)](https://modelcontextprotocol.io/introduction) via our authenticated API that can provide AI tools like agents and LLMs with structured data to answer complex questions about your catalog and powerful workflow capabilities using the scaffolder.

## Available MCP Servers

Roadie currently provides four MCP servers that enable AI assistants to interact with your Backstage catalog:

- **[API Docs Query Server](api-docs-query)** - Discover and retrieve API documentation and specifications
- **[Scaffolder Server](scaffolder)** - Find, validate, and execute Backstage scaffolder templates  
- **[Rich Catalog Entity Server](rich-catalog-entity)** - Access catalog entity data, relationships, and documentation
- **[Tech Insights Facts Server](tech-insights-facts)** - Access operational metrics, security data, and compliance information

### Server Endpoints

- Catalog - https://api.roadie.so/api/mcp/v1/rich-catalog-entity
- API Docs - https://api.roadie.so/api/mcp/v1/api-docs-query
- Scaffolder - https://api.roadie.so/api/mcp/v1/scaffolder-use
- Tech Insights Facts - https://api.roadie.so/api/mcp/v1/tech-insights-facts

## Prerequisites

- Roadie tenant with populated catalog
- Active Roadie API token
- AI assistant or MCP client configured to use Roadie's MCP servers

## Tool Integration Setup

### Setting up MCP Servers in Popular AI Tools

<details>
<summary><strong>VS Code with Copilot</strong></summary>

VS Code supports [MCP servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers). Here's how to configure Roadie's for use with Copilot:

#### Configure MCP Servers

Add the following configuration to your settings (`~/.vscode/mcp.json`):

```json
{
  "servers": {
    "roadie-api-docs": {
      "url": "https://api.roadie.so/api/mcp/v1/api-docs-query",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-scaffolder": {
      "url": "https://api.roadie.so/api/mcp/v1/scaffolder-use",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-catalog": {
      "url": "https://api.roadie.so/api/mcp/v1/rich-catalog-entity",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-insights": {
      "url": "https://api.roadie.so/api/mcp/v1/tech-insights-facts",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    }
  }
}
```

#### Get Your API Token

1. Log into your Roadie instance
2. Go to Settings → API Keys
3. Create a new API key with appropriate permissions
4. Replace `<roadie_api_token>` with your actual token

#### Test the Integration

Open VS Code and try asking Copilot questions like:
- "What APIs are available for user management?"
- "Who owns the payment-service component?"

</details>

<details>
<summary><strong>Cursor IDE</strong></summary>

Cursor supports MCP servers through its AI integration. Here's the setup:

#### Configure MCP Servers

Create or edit your Cursor MCP configuration file (`.cursor/mcp.json` in your project or home directory):

```json
{
  "mcpServers": {
    "roadie-api-docs": {
      "url": "https://api.roadie.so/api/mcp/v1/api-docs-query",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-scaffolder": {
      "url": "https://api.roadie.so/api/mcp/v1/scaffolder-use",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-catalog": {
      "url": "https://api.roadie.so/api/mcp/v1/rich-catalog-entity",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-insights": {
      "url": "https://api.roadie.so/api/mcp/v1/tech-insights-facts",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    }
  }
}
```

#### Restart Cursor

After configuring the MCP servers, restart Cursor to load the new configuration.

#### Test Integration

Use Cursor's AI chat to test the integration:
- "Show me security metrics for user-service"
- "What scaffolder templates are available?"
- "Find APIs related to payment processing"

</details>

<details>
<summary><strong>ChatGPT Desktop App</strong></summary>

The ChatGPT desktop app supports MCP servers for enhanced functionality.

You can read about how to configure MCP servers for ChatGPT [in their docs](https://platform.openai.com/docs/mcp#test-and-connect-your-mcp-server) or [use Custom Connectors](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt) if you have the correct plan level.

</details>

<details>
<summary><strong>Claude Desktop (Anthropic)</strong></summary>

Claude Desktop supports MCP servers natively:

#### Configure MCP Servers

Edit your Claude Desktop configuration file (`~/.config/claude-desktop/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "roadie-api-docs": {
      "url": "https://api.roadie.so/api/mcp/v1/api-docs-query",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-scaffolder": {
      "url": "https://api.roadie.so/api/mcp/v1/scaffolder-use",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-catalog": {
      "url": "https://api.roadie.so/api/mcp/v1/rich-catalog-entity",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    },
    "roadie-insights": {
      "url": "https://api.roadie.so/api/mcp/v1/tech-insights-facts",
      "headers": {
        "Authorization": "Bearer <roadie_api_token>"
      }
    }
  }
}
```

#### Restart Claude Desktop

Restart the application to load the new MCP server configuration.

#### Test Functionality

Test with queries like:
- "What documentation exists for auth-service?"
- "Show me GitHub metrics for all payment services"

</details>

### Authentication Setup

See [API Token docs here](/docs/api/authorization/). You may need an admin user to provide you with a Roadie API Token.

### Troubleshooting Setup

**Common Issues:**

1. **Authentication Errors**: 
   - Verify your API token is correct and not expired
   - Check that the token has appropriate permissions

2. **Connection Failures**:
   - Verify network connectivity to your Roadie instance
   - Check that the MCP API endpoints are accessible

3. **Permission Denied**:
   - Review your API token permissions
   - Contact your Roadie administrator for access

4. **MCP Server Configuration Issues**:
   - Verify the URL format is correct: `https://api.roadie.so/api/mcp/v1/<server-name>`
   - Check that all required headers are included in the configuration
   - Ensure environment variables are properly set

**Testing Connection:**

```bash
# Test API connectivity and MCP endpoint
curl -H "Authorization: Bearer $ROADIE_API_TOKEN" \
     -H "Accept: application/json, text/event-stream" \
     -H "Content-Type: application/json" \
     https://api.roadie.so/api/mcp/v1/rich-catalog-entity

# Test catalog API access
curl -H "Authorization: Bearer $ROADIE_API_TOKEN" \
     -H "Content-Type: application/json" \
     https://api.roadie.so/api/catalog/entities
```

## Best Practices

### API Discovery

- Start with broad search terms and refine based on results

### Template Execution

- Always validate inputs before execution to catch errors early
- Provide clear, descriptive names for generated projects

### Error Handling

- Check validation results before proceeding with template execution
- Monitor task status for long-running templates
- Review error messages for troubleshooting guidance
- Ensure proper permissions are in place before execution

## Support and Troubleshooting

### Common Issues

**Authentication Errors**
- Verify your Roadie API credentials are configured correctly
- Ensure your MCP client is properly authenticated

**Permission Denied**
- Check that you have the necessary permissions for catalog access and scaffolder execution
- Contact your Roadie administrator if you need additional permissions

**Template Execution Failures**
- Use `validate-template-values` to check inputs before execution
- Review template requirements and ensure all parameters are provided
- Check `get-scaffolder-task` for detailed error information

For additional support, please refer to the Roadie documentation or contact our support team.

## Getting Started

To start using Roadie's MCP servers with your AI assistant:

1. Configure your MCP client with Roadie's server endpoints
2. Set up authentication using your Roadie API Token - see [auth docs](/docs/api/authorization/)
3. Begin with explicit queries to explore available tools

The MCP servers provide a powerful way to integrate AI assistants with your Roadie Backstage catalog, enabling intelligent discovery, exploration, and automation of your development workflows. 