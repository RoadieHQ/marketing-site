---
title: GraphiQL Plugin
publishedDate: '2022-03-07T10:00:00.0Z'
lastValidated: '2022-03-07T10:00:00.0Z'
description: How to add GraphiQL to Backstage

humanName: GraphiQL
logoImage: '../../../assets/logos/graphiql/logo-ql.webp'
integrationType: Integration
---

## At a Glance

|                            |                                                                                                  |
| -------------------------: | ------------------------------------------------------------------------------------------------ |
|          **Prerequisites** | You'll need your GraphQL endpoint URLs.                                                          |
|         **Considerations** |                                                                                                  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Introduction

The [Backstage GraphiQL plugin](/backstage/plugins/graphiQL) integrates with GraphiQL to provide a UI playground for querying GraphQL endpoints directly from Roadie.

![GraphiQL UI](./graphiql-ui.webp)

## Configuration

### Configure the GraphiQL endpoints

Configure the GraphQL endpoints to use in your GraphiQL plugin via `Administration -> Settings -> GraphiQL`. Each endpoint needs a title and a URL. The title will be used to identify the endpoint in the GraphiQL UI, while the URL is the GraphQL endpoint URL you want to query.

![graphiql-config.webp](./graphiql-config.webp)

### Authentication

Currently, the GraphiQL plugin only supports authentication via the UI, which means that you'll need to configure the authentication using the `Headers` tab in the GraphiQL UI in JSON format.

## References

- [Backstage GraphiQL plugin](/backstage/plugins/graphiQL)
