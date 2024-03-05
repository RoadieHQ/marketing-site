---
title: Configuring Okta Team / User Provider
publishedDate: '2022-08-02T17:00:00.0Z'
description: How to configure Roadie to collect users from Okta.

humanName: Okta
logoImage: '../../../assets/logos/okta/okta_logo.png'
integrationType: Catalog data source
---

## Introduction

Roadie Backstage can automatically ingest users and groups for your organisation from a few sources. One of these is [Okta](https://www.okta.com/) where you may already have all your users and groups/teams defined.

In order to use the Okta organization plugin, Roadie needs an Okta API token, and the organization URL to communicate with Okta's APIs. On this page, you'll learn how to set up these two fields in your Roadie Admin panel. 


## Steps

### Step 1: Obtain an Okta API token
Obtain an [Okta API token](https://developer.okta.com/docs/guides/create-an-api-token/) to use with Roadie Backstage.

### Step 2: Set the Okta API token

Set the `OKTA_TOKEN` secret in the secrete manager of your Roadie Backstage Admin panel, located in the following path:

```text
https://<tenant-name>.roadie.so/administration/settings/secrets
```

### Step 3: Set the Okta Organization URL

Set the Okta Organization URL in the Okta configuration page of your Roadie Backstage Admin panel, located in the following path:
```text
https://<tenant-name>.roadie.so/administration/settings/okta
```

## Data

It will ingest a subset of data for all groups and all users in your Okta organisation.

## Filter Users and Groups

From the `Okta` settings page, linked above, you can configure a filter for users and groups. This filter query is passed to the `Okta` API and therefore supports the [Okta filter language](https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter). 

## References

- [Okta docs for creating API tokens](https://developer.okta.com/docs/guides/create-an-api-token/)
