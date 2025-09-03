---
title: Configuring LaunchDarkly plugin
publishedDate: '2024-08-28T21:00:00.0Z'
lastValidated: '2024-08-28T21:00:00.0Z'
description: How to configure LaunchDarkly plugin on Roadie.

humanName: LaunchDarkly
logoImage: '../../../assets/logos/launchdarkly/logo-launchdarkly.webp'
integrationType: OSS plugin
---

## Introduction

The LaunchDarkly plugin allows you to view feature flags on an entity page in Backstage. 

This page explains how to configure it in Roadie Backstage.

## At a Glance

| | |
|---: | --- |
| **Prerequisites** | <ol><li>You must be an admin in Roadie. Learn how to designate certain users as admins [here](/docs/getting-started/assigning-admins/).</li><li>You must have the correct permissions assigned in LaunchDarkly to be able to create a read only API token</li></ol><br />**Configuration Data:** <ul><li>API Token</li></ul> |
| **Considerations** | |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Step 1: Create a LaunchDarkly API token

Roadie requires an API token to be able to connect to LaunchDarkly.

You can learn how to generate an API token for your user by visiting https://docs.launchdarkly.com/home/account/api

## Step 2: Configure Roadie with your LaunchDarkly API token

Visit the secrets page in Roadie at `/administration/secrets` and enter the API token you generated for LaunchDarkly in the secret called `LAUNCHDARKLY_API_KEY` 

## Step 3: Add the UI elements

The LaunchDarkly plugin provides a card that can be displayed on an entity page.

The `EntityLaunchdarklyOverviewCard` displays the feature flags for the entities LaunchDarkly context.
This card can be [added to component dashboards](/docs/details/updating-the-ui/#updating-dashboards).

## Step 4: Modify your catalog files to contain references to the LaunchDarkly context

The LaunchDarkly plugin uses three annotations to determine the project, environment and context to display the feature flags. Those annotations are shown below.


```yaml
// catalog-info.yaml
metadata:
  annotations:
    launchdarkly.com/context: '{"kind":"tenant","key":"roadie","name":"roadie"}'
    launchdarkly.com/project-key: default
    launchdarkly.com/environment-key: production

```
