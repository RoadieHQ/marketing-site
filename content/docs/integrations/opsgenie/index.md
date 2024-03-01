---
title: Configuring Opsgenie
publishedDate: '2021-09-02T21:00:00.0Z'
description: How to configure the Opsgenie plugin on roadie.

humanName: Opsgenie
logoImage: '../../../assets/logos/opsgenie/logo-opsgenie.png'
integrationType: OSS plugin
---

## Introduction

This page describes how to set up the Opsgenie plugin.

## Steps

### Step 1: Create an API token

In order for the Backstage integration to work we must first generate our api key.

In order to create a key [create an Integration](https://support.atlassian.com/opsgenie/docs/create-a-default-api-integration/) of type API and copy the key displayed.

### Step 2: Store the credentials in Roadie

Visit `https://<tenant-name>.roadie.so/administration/settings/secrets` and enter the key into the `OPSGENIE_API_KEY` secret.

![Set OPSGENIE_API_KEY via UI](./secret.png)

### Step 3: Configure Roadie with your Opsgenie account details

Visit `https://<tenant-name>.roadie.so/administration/settings/opsgenie` and enter the following:
* The domain of your Opsgenie app (e.g. `https://my-app.app.eu.opsgenie.com/`)
* The API endpoint you use (e.g. US / EU )

![Set Opsgenie Config](./config.png)

### Step 4: Add the Opsgenie UI elements

The Opsgenie plugin provides two type of UI elements. 

The card `EntityOpsgenieAlertsCard` displays alerts for particular components and can be [added to component dashboards](/docs/getting-started/updating-the-ui/#updating-dashboards). 

The overview page `OpsgeniePage` can be also be [added to the sidebar](/docs/getting-started/updating-the-ui#updating-the-sidebar). 
You can override the default page size of 6 for the On-Call list by adding props to the sidebar component when adding it of: 
```json
{
  "onCallListCardsCount": 48
}
```

## References

- [Opsgenie backstage plugin](https://github.com/K-Phoen/backstage-plugin-opsgenie)
