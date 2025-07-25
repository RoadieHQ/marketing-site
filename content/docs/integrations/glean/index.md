---
title: Configuring Glean
publishedDate: '2025-07-25T11:39:00.0Z'
description: How to configure the Glean plugin to pull your Roadie data into Glean for unified search capabilities.
humanName: Glean
logoImage: '../../../assets/logos/backstage/mark-negative.svg'
integrationType: OSS plugin
---

## Introduction

The Glean plugin allows you to pull your Roadie data into Glean to enable unified search capabilities across your organization. This integration helps centralize your organization's knowledge and makes it searchable through Glean's powerful search interface.

Glean is an enterprise search platform that connects to various data sources and provides intelligent search capabilities across your organization's tools and content.

## At a Glance

| | |
|---: | --- |
| **Prerequisites** | **Configuration Data:** <ul><li>Glean API Index URL</li><li>Glean Data Source</li></ul> |
| **Considerations** | Requires proper Glean API access and data source configuration. |
| **Supported Environments** | ☒ Private Network via Broker <br /> ☒ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Basic Configuration

Settings and configuration to use this plugin (integration) and/or enable features.

### API Index URL

The index URL of the Glean API. This is the endpoint where Roadie will send your data to be indexed in Glean.

### Data Source

The data source of the Glean API to use. This identifies which data source in Glean should receive the Roadie data. 

For more information about data sources, see: [Glean Data Sources Documentation](https://support.glean.com/hc/en-us/articles/30038992119451-Data-Sources)

## Connection Configuration Steps

### Step 1: Configure Glean Connection

Visit `https://<tenant-name>.roadie.so/administration/glean` to configure your Glean connection.

Configure the following settings:

- **API Index URL**: The index URL of your Glean API instance
- **Data Source**: The data source identifier for Glean to categorize the Roadie data

### Step 2: Set Environment Variables (Alternative)

Alternatively, you can configure Glean using environment variables in your app-config.yaml:

```yaml
glean:
  apiIndexUrl: ${GLEAN_API_INDEX_URL}
  dataSource: ${GLEAN_DATA_SOURCE}
```

### Step 3: (Optional, for brokered connections) Setup Broker client configuration

If you are accessing Glean via a brokered connection for private networks, you need to configure the broker client. Contact your Roadie administrator for specific broker configuration requirements for Glean.

## Features

The Glean plugin provides the following features:

- **Data Synchronization**: Automatically syncs your Roadie catalog data to Glean
- **Unified Search**: Makes your Roadie entities searchable through Glean's interface
- **Real-time Updates**: Keeps Glean data synchronized with changes in your Roadie catalog
- **Metadata Indexing**: Indexes entity metadata, documentation, and relationships

## Troubleshooting

### Data not appearing in Glean

1. Verify that the API Index URL is correctly configured and accessible
2. Ensure the Data Source identifier matches your Glean configuration
3. Check that your Glean instance has the necessary permissions to receive data
4. Verify network connectivity between Roadie and your Glean instance

### Authentication issues

1. Confirm that the Glean API credentials are correct
2. Ensure the API has the necessary permissions to write to the specified data source
3. Check if the Glean instance requires specific authentication methods
4. Verify that the Glean API is accessible from Roadie

### Synchronization issues

1. Check the plugin logs for any error messages
2. Verify that the data source configuration in Glean is correct
3. Ensure that the API Index URL is responding correctly
4. Contact your Glean administrator to verify data source permissions

## References

- [Glean Backend Plugin on npm](https://www.npmjs.com/package/@roadiehq/backstage-plugin-glean-backend)
- [Glean Data Sources Documentation](https://support.glean.com/hc/en-us/articles/30038992119451-Data-Sources)
- [Glean Documentation](https://support.glean.com/)