---
title: GraphiQL Plugin
publishedDate: '2022-03-07T10:00:00.0Z'
description: How to add GraphiQL to Backstage

humanName: GraphiQL
logoImage: '../../../assets/logos/graphiql/logo-ql.png'
integrationType: Integration
---

## Introduction

The [Backstage GraphiQL plugin](/backstage/plugins/graphiQL) integrates with GraphiQL to provide a UI playground for querying GraphQL endpoints directly from Roadie.

![GraphiQL UI](./graphiql-ui.png)

## Prerequisites

You'll need your GraphQL endpoint URLs.

## Configuration

### Configure the GraphiQL endpoints

Configure the GraphQL endpoints to use in your GraphiQL plugin via `Administration -> Settings -> GraphiQL`. Each endpoint needs a title and a URL. The title will be used to identify the endpoint in the GraphiQL UI, while the URL is the GraphQL endpoint URL you want to query.

![graphiql-config.png](./graphiql-config.png)

### Authentication

Currently, the GraphiQL plugin only supports authentication via the UI, which means that you'll need to configure the authentication using the `Headers` tab in the GraphiQL UI in JSON format.

## References

- [Backstage GraphiQL plugin](/backstage/plugins/graphiQL)
