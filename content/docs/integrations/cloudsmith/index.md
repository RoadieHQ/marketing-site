---
title: Configuring Cloudsmith plugin
publishedDate: '2024-08-30T08:00:00.0Z'
description: How to configure Cloudsmith plugin on Roadie.

humanName: Cloudsmith
logoImage: '../../../assets/logos/cloudsmith/cloudsmith-logo.png'
integrationType: OSS plugin
---

## Introduction

The Cloudsmith plugin allows you to display statistics about a Cloudsmith repository to the homepage.

This page explains how to configure it in Roadie.

## At a Glance

| | |
|---: | --- |
| **Prerequisites** |1. You must be an admin in Roadie. Learn how to [designate certain users as admins here](/docs/getting-started/assigning-admins/). <br /> 2. You must have the correct permissions assigned in Cloudsmith to be able to create a read only API key |
| **Configuration Data:** | <ul><li>API Token</li></ul> |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Prerequisites



## Step 1: Create a Cloudsmith API key

Roadie requires an API key to be able to connect to Cloudsmith.

You can learn how to generate an API key for your user by visiting https://help.cloudsmith.io/docs/api-key

## Step 2: Configure Roadie with your Cloudsmith API key

Visit the secrets page in Roadie at `/administration/secrets` and enter the API key you generated for Cloudsmith in the secret called `CLOUDSMITH_API_KEY` 

## Step 3: Add the UI elements

The Cloudsmith plugin provides a four cards that can be displayed on the homepage.

These cards can be [added to component dashboards](/docs/details/updating-the-ui/#updating-dashboards).

### CloudsmithStatsCard

The `CloudsmithStatsCard` shows statistics about a repository in Cloudsmith.

| Option | Description |
|---------|--------------|
| repo-name | The name of the Cloudsmith repository |
| owner | The organization name of the Cloudsmith owner of the repository |

### CloudsmithQuotaCard

The `CloudsmithQuotaCard` shows the quotas remaining across a Cloudsmith organisation.

| Option | Description |
|---|---|
| owner | The Cloudsmith organization name |

### CloudsmithRepositoryAuditLogCard

The `CloudsmithRepositoryAuditLogCard` shows the autit log for a repository.

| Option | Description |
|---------|--------------|
| repo-name | The name of the Cloudsmith repository |
| owner | The organization name of the Cloudsmith owner of the repository |


### CloudsmithRepositorySecurityCard
The `CloudsmithRepositorySecurityCard` displays the security informantion about a repository.

| Option | Description |
|---------|--------------|
| repo-name | The name of the Cloudsmith repository |
| owner | The organization name of the Cloudsmith owner of the repository |

