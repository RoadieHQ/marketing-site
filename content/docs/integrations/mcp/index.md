---
title: Roadie MCP AI Servers (Beta)
publishedDate: '2024-06-12T15:00:00.0Z'
description: How to use Roadie AI features exposed via MCP servers

humanName: Model Context Protocol(MPC) Servers
logoImage: '../../../assets/logos/ai-assistant/roadie-racks-ai.webp'
integrationType: Roadie API
---

## Introduction

Roadie exposes a number of Model Context Protocol Servers (MCP) via our authenticated API that can provide AI tools like agents and LLMs with structured data to answer complex questions about your catalog and powerful workflow capabilities using the scaffolder.

## Available MCP Servers

Roadie provides four MCP servers that enable AI assistants to interact with your Backstage catalog:

<details>
<summary><strong>API Docs Query Server</strong> - Discover and retrieve API documentation</summary>

### Capabilities

- **API Discovery**: Search for APIs using natural language queries
- **Specification Retrieval**: Get complete OpenAPI, GraphQL, or AsyncAPI specifications
- **Intelligent Search**: Find APIs by domain, technology, or business context
- **Metadata Access**: Retrieve API descriptions, ownership, and categorization
- **Scaffolder Functionality**: Find, validate and run scaffolder templates

### Available Tools

#### Find API Specs

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

#### Retrieve API Spec

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

### Common Use Cases

**API Integration Planning**
- Ask your AI assistant: "What payment APIs are available?"
- Get detailed endpoint information for integration planning
- Compare different APIs to choose the best fit

**Documentation Exploration**
- "Show me the schema for creating a user account"
- "What authentication does the order API require?"
- "List all the endpoints in the inventory service"

**Development Assistance**
- Generate client code from API specifications
- Create automated tests based on API schemas
- Validate API requests and responses

</details>

<details>
<summary><strong>Scaffolder Server</strong> - Work with Scaffolder templates</summary>

### Capabilities

- **Template Inspection**: Get detailed template specifications and requirements
- **Input Validation**: Verify parameter values before template execution
- **Template Execution**: Run templates with proper error handling and monitoring
- **Status Monitoring**: Track execution progress and results

### Available Tools

#### Find Scaffolder Templates

Search for available scaffolder templates using queries that match template names, descriptions, and tags.

**Parameters:**
- `queryString` (string): Search term for finding templates

**Example Usage:**
```json
{
  "queryString": "react frontend"
}
```

#### Retrieve Scaffolder Template

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

#### Validate Template Values

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

#### Run Scaffolder Template

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

#### Get Scaffolder Task

Monitor the status and progress of template execution.

**Parameters:**
- `id` (string): Task ID returned from template execution

**Example Usage:**
```json
{
  "id": "abc123def456"
}
```

### Common Use Cases

**Guided Project Creation**
- "Create a new React application for the frontend team"
- "Set up a microservice with PostgreSQL database"
- "Generate a new API service with authentication"

**Template Exploration**
- "What templates are available for Node.js services?"
- "Show me the requirements for the mobile app template"
- "What parameters does the library template need?"

**Automated Workflows**
- Validate inputs before execution to prevent failures
- Execute templates with proper error handling
- Monitor progress and provide status updates

</details>

<details>
<summary><strong>Rich Catalog Entity Server</strong> - Access catalog entity data and relationships</summary>

### Capabilities

- **Entity Information**: Get detailed metadata, ownership, lifecycle, and specifications
- **Relationship Mapping**: Discover dependencies, provides relationships, and entity connections
- **Documentation Access**: Search and retrieve TechDocs content associated with entities
- **Entity Discovery**: Search and find entities when exact names are unknown
- **Smart Resolution**: Intelligent entity lookup that can find entities by name across namespaces
- **Enhanced Error Handling**: Provides search suggestions when entities aren't found

### Available Tools

#### Get Entity Info

Retrieve basic entity information including name, description, owner, lifecycle stage, and metadata.

**Parameters:**
- `entityRef` (string): Entity reference (e.g., "component:default/my-service")

**Example Usage:**
```json
{
  "entityRef": "component:default/user-service"
}
```

**Returns:** Complete entity metadata including:
- Basic information (name, description, title)
- Ownership and team information
- Lifecycle stage and system classification
- Labels, annotations, and custom metadata

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

#### Get Entity Relationships

Discover entity relationships including dependencies, what the entity provides, and connected services.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/payment-service"
}
```

**Returns:** Comprehensive relationship information including:
- **Dependencies**: Services, APIs, and resources this entity depends on
- **Dependents**: Other entities that depend on this entity
- **Provides**: APIs and resources this entity provides
- **Consumes**: APIs and resources this entity consumes

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

#### Get TechDocs

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

**Returns:** Documentation content including:
- Searchable documentation sections
- Relevant content snippets
- Documentation metadata and structure

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

#### Search Entities

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

**Returns:** List of matching entities including:
- Entity references and basic metadata
- Entity names, descriptions, and owners
- Entity kinds and namespaces
- Relevance-ranked search results

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

### Common Use Cases

**Entity Exploration**
- "Who owns the user-service component?"
- "What is the lifecycle stage of payment-api?"
- "Show me the description and metadata for auth-service"

**Dependency Analysis**
- "What services does payment-service depend on?"
- "Which components use the user-api?"
- "Show me all the relationships for the auth-service"

**Documentation Discovery**
- "What documentation exists for the payment-service?"
- "Search for authentication information in user-service docs"
- "Show me the getting started guide for inventory-api"

**Entity Discovery**
- "Find entities related to payment processing"
- "Search for all user management services"
- "What APIs are available for authentication?"
- "Show me all components owned by the backend team"
- "Find systems in the platform namespace"

</details>

<details>
<summary><strong>Tech Insights Facts Server</strong> - Access operational metrics and compliance data</summary>

### Capabilities

- **GitHub Metrics**: PR merge times, repository activity, contributor information
- **Security Metrics**: Vulnerability data from Snyk, Dependabot alerts, branch protection status
- **Monitoring Data**: PagerDuty incident metrics, Datadog SLO information
- **Compliance Scoring**: Entity metadata completeness and compliance scores
- **Repository Analysis**: File structure analysis and catalog status

### Available Tools

#### Get GitHub Metrics

Retrieve GitHub-related metrics including pull request performance, repository activity, and contributor data.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/user-service"
}
```

**Returns:** GitHub metrics including:
- Average PR merge time
- Number of active contributors
- Commit activity and frequency
- Repository collaboration metrics

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

#### Get Security Metrics

Access security-related metrics from Snyk vulnerability scans and Dependabot alerts.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/payment-service"
}
```

**Returns:** Security information including:
- Vulnerability counts by severity (critical, high, medium, low)
- Dependabot alert statistics
- Branch protection status
- Security compliance metrics

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

#### Get PagerDuty Metrics

Retrieve incident metrics and service configuration from PagerDuty integration.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/auth-service"
}
```

**Returns:** PagerDuty metrics including:
- Incident count and frequency
- Mean Time To Resolution (MTTR)
- Service escalation policies
- On-call rotation information

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

#### Get Datadog Metrics

Access Service Level Objective (SLO) data and monitoring information from Datadog.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/inventory-api"
}
```

**Returns:** Datadog monitoring data including:
- SLO compliance percentages
- Monitor counts and alert frequency
- Performance metrics and trends
- Service health indicators

**Return Schema:**
```typescript
{
  sloCount: number,
  monitorCount: number
}
```

#### Get Entity Compliance

Evaluate entity metadata completeness and compliance with organizational standards.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/user-service"
}
```

**Returns:** Compliance information including:
- Metadata completeness score
- Required field compliance
- Documentation coverage
- Standards adherence metrics

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
  },
  complianceScore: number,
  summary: string
}
```

#### Get Repository Info

Analyze repository structure and catalog configuration status.

**Parameters:**
- `entityRef` (string): Entity reference

**Example Usage:**
```json
{
  "entityRef": "component:default/payment-service"
}
```

**Returns:** Repository analysis including:
- File structure overview
- Catalog-info.yaml status and validation
- Code organization metrics
- Repository configuration compliance

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

### Common Use Cases

**Performance Analysis**
- "How long does it take to merge PRs for user-service?"
- "What's the incident rate for payment-service?"
- "Show me the SLO compliance for auth-api"

**Security Assessment**
- "What security vulnerabilities does user-service have?"
- "Are there any Dependabot alerts for payment-service?"
- "What's the security posture of our inventory system?"

**Compliance Monitoring**
- "How complete is the metadata for auth-service?"
- "Which services need better documentation?"
- "What's the compliance score for our payment components?"

**Operational Insights**
- "Which services have the most incidents?"
- "What's the GitHub activity like for user-service?"
- "Show me the monitoring status for all payment services"

</details>

## Advanced Integration Patterns

### Cross-Server Workflows

The four MCP servers work together to provide comprehensive Backstage integration:

#### Development Workflow
1. **Rich Catalog Entity Server**: "Who owns the user-service?"
2. **API Docs Query Server**: "What APIs does user-service provide?"
3. **Tech Insights Facts Server**: "What's the code quality of user-service?"
4. **Scaffolder Use Server**: "Create a similar service for payments"

#### Operational Review
1. **Tech Insights Facts Server**: "Show me security metrics for all payment services"
2. **Rich Catalog Entity Server**: "What are the coding standards of the payment-gateway service?"
3. **API Docs Query Server**: "Get the API specs for payment-processor"

#### Service Discovery
1. **Rich Catalog Entity Server**: "Find all services owned by the platform team"
2. **Rich Catalog Entity Server**: "Search for entities related to user management"
3. **API Docs Query Server**: "What authentication APIs are available?"
4. **Tech Insights Facts Server**: "Which services have the best compliance scores?"

### AI Assistant Capabilities

With all four servers configured, AI assistants can:

- **Provide comprehensive service overviews** combining entity data, metrics, and API documentation
- **Guide operational decisions** using real-time metrics and compliance data
- **Assist with service creation** by analyzing existing patterns and generating new services
- **Perform impact analysis** by understanding dependencies and relationships
- **Monitor service health** through integrated metrics and incident data
- **Enable intelligent discovery** by searching for entities across the entire catalog
- **Provide contextual suggestions** when exact entity matches aren't found


## Authentication and Setup

### Prerequisites

- Roadie tenant with populated catalog
- Proper permissions to access catalog entities and execute scaffolder templates
- AI assistant or MCP client configured to use Roadie's MCP servers

### Server Endpoints

The MCP servers are available through Roadie's authenticated API. Your MCP client will need to authenticate using your Roadie API credentials.

### Permissions

- **Catalog Read**: Required for API discovery, template search and entity related queries
- **Tech Insights Data Source Read**: Required for Tech Insights data
- **Scaffolder Execute**: Required for running templates

## Tool Integration Setup

### Setting up MCP Servers in Popular AI Tools

<details>
<summary><strong>Cursor IDE</strong></summary>

Cursor supports MCP servers through its AI integration. Here's the setup:

#### 1. Configure MCP Servers

Create or edit your Cursor MCP configuration file (`.cursor/mcp.json` in your project or home directory):

```json
{
  "mcpServers": {
    "roadie-api-docs": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/api-docs-query",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-scaffolder": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/scaffolder-use",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-catalog": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/rich-catalog-entity",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-insights": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/tech-insights-facts",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    }
  }
}
```

#### 2. Restart Cursor

After configuring the MCP servers, restart Cursor to load the new configuration.

#### 3. Verify Integration

Use Cursor's AI chat to test the integration:
- "Show me security metrics for user-service"
- "What scaffolder templates are available?"
- "Find APIs related to payment processing"

</details>

<details>
<summary><strong>ChatGPT Desktop App</strong></summary>

The ChatGPT desktop app supports MCP servers for enhanced functionality:

#### 1. Enable MCP in ChatGPT Desktop

1. Open ChatGPT Desktop App
2. Go to Settings → Features
3. Enable "Model Context Protocol"

#### 2. Configure Roadie MCP Servers

Add the following configuration to your MCP settings:

```json
{
  "mcpServers": {
    "roadie-api-docs": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/api-docs-query",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-scaffolder": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/scaffolder-use",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-catalog": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/rich-catalog-entity",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-insights": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/tech-insights-facts",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    }
  }
}
```

#### 3. Alternative: Use via API

If direct MCP configuration isn't available, you can use ChatGPT's API integration:

1. Set up a webhook endpoint that forwards requests to Roadie MCP servers
2. Configure custom actions in ChatGPT to call your webhook
3. Map the webhook responses to natural language outputs

#### 4. Test the Integration

Try asking ChatGPT:
- "What's the compliance score for our payment services?"
- "Show me the dependency graph for user-service"

</details>

<details>
<summary><strong>Claude Desktop (Anthropic)</strong></summary>

Claude Desktop supports MCP servers natively:

#### 1. Configure MCP Servers

Edit your Claude Desktop configuration file (`~/.config/claude-desktop/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "roadie-api-docs": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/api-docs-query",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-scaffolder": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/scaffolder-use",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-catalog": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/rich-catalog-entity",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    },
    "roadie-insights": {
      "url": "https://<tenant-name>.roadie.so/api/mcp/v1/tech-insights-facts",
      "headers": {
        "Accept": "application/json, text/event-stream",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${ROADIE_API_TOKEN}"
      }
    }
  }
}
```

#### 2. Restart Claude Desktop

Restart the application to load the new MCP server configuration.

#### 3. Verify Functionality

Test with queries like:
- "What documentation exists for auth-service?"
- "Show me GitHub metrics for all payment services"

</details>


### Common Configuration Tips

#### API Token Setup

See [API Token docs here](/docs/api/authorization/). You may need an admin user to provide you with a Roadie API Token. 

#### Environment Variables

Set these environment variables for all MCP server configurations:

```bash
# Required for authentication
ROADIE_API_TOKEN=your-api-token-here
```

**Note:** Replace `<tenant-name>` in the URLs with your actual Roadie tenant name (e.g., `https://mycompany.roadie.so/api/mcp/v1/...`)

#### Troubleshooting Setup

**Common Issues:**

1. **Authentication Errors**: 
   - Verify your API token is correct and not expired
   - Check that the token has appropriate permissions

2. **Connection Failures**:
   - Ensure your Roadie tenant URL is correct (https://<tenant-name>.roadie.so)
   - Verify network connectivity to your Roadie instance
   - Check that the MCP API endpoints are accessible

3. **Permission Denied**:
   - Review your API token permissions
   - Contact your Roadie administrator for access

4. **MCP Server Configuration Issues**:
   - Verify the URL format is correct: `https://<tenant-name>.roadie.so/api/mcp/v1/<server-name>`
   - Check that all required headers are included in the configuration
   - Ensure environment variables are properly set

**Testing Connection:**

```bash
# Test API connectivity and MCP endpoint
curl -H "Authorization: Bearer $ROADIE_API_TOKEN" \
     -H "Accept: application/json, text/event-stream" \
     -H "Content-Type: application/json" \
     https://<tenant-name>.roadie.so/api/mcp/v1/rich-catalog-entity

# Test catalog API access
curl -H "Authorization: Bearer $ROADIE_API_TOKEN" \
     -H "Content-Type: application/json" \
     https://<tenant-name>.roadie.so/api/catalog/entities
```

## AI Assistant Integration Examples

### API Exploration Workflow

1. **User**: "I need to integrate with our user management system"
2. **AI**: Searches for user-related APIs using `find-api-specs`
3. **AI**: Retrieves specifications for relevant APIs
4. **AI**: Explains available endpoints, authentication, and schemas
5. **AI**: Provides integration guidance and code examples

### Project Creation Workflow

1. **User**: "Create a new React frontend application"
2. **AI**: Searches for React templates using `find-scaffolder-templates`
3. **AI**: Shows available templates and their requirements
4. **AI**: Guides user through providing necessary parameters
5. **AI**: Validates inputs using `validate-template-values`
6. **AI**: Executes template using `run-scaffolder-template`
7. **AI**: Monitors progress and reports results

### Entity Discovery Workflow

1. **User**: "I need to understand our payment infrastructure"
2. **AI**: Uses `search-entities` to find all payment-related entities
3. **AI**: Retrieves entity information for each discovered service
4. **AI**: Maps relationships between payment components
5. **AI**: Provides comprehensive overview of the payment ecosystem
6. **AI**: Suggests related APIs and documentation for deeper exploration

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

