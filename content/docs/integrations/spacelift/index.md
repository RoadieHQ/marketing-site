---
title: Configuring Spacelift
publishedDate: '2025-07-25T11:10:00.0Z'
description: How to configure the Spacelift plugin to display Infrastructure-as-Code stacks and runs from Spacelift in Roadie.
humanName: Spacelift
logoImage: '../../../assets/logos/backstage/mark-negative.svg'
integrationType: OSS plugin
---

## Introduction

The Spacelift plugin allows you to view and interact with your Spacelift stacks and runs directly within Backstage. Spacelift is a sophisticated CI/CD platform for Infrastructure-as-Code that helps you manage your infrastructure deployments with advanced features like policy enforcement, drift detection, and collaborative workflows.

This plugin provides a dedicated Spacelift page within Backstage where you can monitor your infrastructure stacks, view recent runs, and access detailed information about your Spacelift resources.

## At a Glance

| | |
|---: | --- |
| **Prerequisites** | **Configuration Data:** <ul><li>Spacelift Host URL</li><li>Spacelift API Key ID</li><li>Spacelift API Key Secret</li></ul> |
| **Considerations** | Requires both backend and frontend plugin installation. Uses API key permissions for access control. |
| **Supported Environments** | ☒ Private Network via Broker <br /> ☒ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Plugin Installation

The Spacelift integration consists of two components that need to be installed: a backend plugin and a frontend plugin.

### Step 1: Install Backend Plugin

Contact your Roadie administrator to install the Spacelift backend plugin (`@spacelift-io/backstage-integration-backend`).

### Step 2: Install Frontend Plugin

Contact your Roadie administrator to install the Spacelift frontend plugin (`@spacelift-io/backstage-integration-frontend`) and add it to the Backstage navigation.

## Connection Configuration Steps

### Step 1: Configure Spacelift Connection

Visit `https://<tenant-name>.roadie.so/administration/spacelift` to configure your Spacelift connection.

Configure the following settings:

- **Host URL**: Your Spacelift instance URL without `https://` (e.g., `your-subdomain.app.spacelift.io`)
- **API Key ID**: Your Spacelift API Key ID
- **API Key Secret**: Your Spacelift API Key Secret

### Step 2: Set Environment Variables (Alternative)

Alternatively, you can configure Spacelift using environment variables in your app-config.yaml:

```yaml
spacelift:
  hostUrl: 'your-subdomain.app.spacelift.io' # Your Spacelift instance URL (WITHOUT https://)
  apiKey: ${SPACELIFT_API_KEY} # Your Spacelift API Key ID
  apiSecret: ${SPACELIFT_API_SECRET} # Your Spacelift API Key Secret
```

### Step 3: Obtain Spacelift API Credentials

To get your Spacelift API credentials:

1. Log in to your Spacelift account
2. Navigate to your profile settings
3. Go to the "API Keys" section
4. Create a new API key or use an existing one
5. Copy the API Key ID and API Key Secret

**Important**: The API key should have appropriate permissions to read stack information and run details that you want to display in Backstage.

### Step 4: (Optional, for brokered connections) Setup Broker client configuration

If you are accessing Spacelift via a brokered connection for private networks, you need to configure the broker client. Contact your Roadie administrator for specific broker configuration requirements for Spacelift.

## Features

The Spacelift plugin provides the following features:

- **Stack Overview**: View all your Spacelift stacks with their current status and basic information
- **Run History**: Display recent runs for each stack with status, timing, and outcome details
- **Stack Details**: Access detailed information about stack configuration, branch, and last deployment
- **Direct Links**: Quick access to view resources directly in the Spacelift web interface
- **Real-time Updates**: Automatic polling every 10 seconds to keep information current
- **Infrastructure Monitoring**: Track the health and status of your Infrastructure-as-Code deployments

## Architecture

The Spacelift plugin uses a simple architecture where:

1. **Frontend Plugin**: Provides the user interface components within Backstage
2. **Backend Plugin**: Handles authentication and communication with the Spacelift API
3. **Data Flow**: Frontend requests data from Backend, Backend authenticates with Spacelift and fetches data via GraphQL

The backend plugin manages JWT token handling and caching, while the frontend automatically polls for updates to keep the displayed information current.

## Permissions and Security

**Important Security Considerations:**

- The plugin operates using the permissions granted to the configured Spacelift API Key
- No additional user-level permission handling is implemented within Backstage
- It is the responsibility of the Backstage administrator to configure appropriate Backstage permissions to control access to the Spacelift plugin pages
- Ensure the API key has only the minimum necessary permissions for the intended use case

## Troubleshooting

### Spacelift information not appearing

1. Verify that the Spacelift connection configuration is correct in the administration panel
2. Check that the API Key ID and API Key Secret are valid and properly configured
3. Ensure the Host URL is correct and does not include `https://`
4. Verify that the Spacelift API is accessible from your Roadie instance

### Authentication issues

1. Confirm that the Spacelift API Key ID and Secret are correct
2. Ensure the API key has not expired
3. Check that the API key has appropriate permissions to read stack and run information
4. Verify that your Spacelift instance is accessible

### Plugin not visible

1. Ensure both backend and frontend plugins are properly installed
2. Check that the frontend plugin has been added to the Backstage navigation
3. Verify that you have the necessary Backstage permissions to access the Spacelift page

## Compatibility

The Spacelift plugin is compatible with:

- **Backend**: Requires Backstage `@backstage/backend-plugin-api` >= 1.3.0
- **Frontend**: Requires Backstage `@backstage/core-components` >= 0.17.1, `@backstage/core-plugin-api` >= 1.10.6

We recommend using this plugin with Backstage version 1.17.0 or later to ensure full compatibility.

## References

- [Spacelift Backend Plugin on npm](https://www.npmjs.com/package/@spacelift-io/backstage-integration-backend)
- [Spacelift Frontend Plugin on npm](https://www.npmjs.com/package/@spacelift-io/backstage-integration-frontend)
- [Spacelift Plugin GitHub Repository](https://github.com/spacelift-io/backstage-plugins)
- [Official Spacelift Documentation](https://docs.spacelift.io/)
- [Spacelift Backstage Integration Guide](https://docs.spacelift.io/integrations/external-integrations/backstage)