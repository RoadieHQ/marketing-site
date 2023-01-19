---
title: Cloudsmith
publishedDate: '2023-01-11T10:00:00.0Z'
description: How to use the Cloudsmith plugin

humanName: Cloudsmith
integrationType: OSS Plugin
---

## Introduction

This page describes how to set up the Cloudsmith plugin on Roadie.

![Cloudsmith plugin screenshot](./cloudsmith-plugin.png)

## Prerequisites

You'll need a Cloudsmith account and an API token.

### Step 1: Configure the Cloudsmith API token

Navigate to your [Cloudsmith account settings](https://cloudsmith.io/user/settings/api/) and copy your API key.

![Cloudsmith API Key location](./api-step.png)

Once you have your API Key, save it to environment variable called `CLOUDSMITH_API_KEY` on your system.

### Step 2: Import the Cloudsmith plugin and display it

In your `packages/app/src/components/home/Homepage.tsx` file, add the following import statement:

![Example Code](./example-code.png)

```ts
import {
    CloudsmithStatsCard,
    CloudsmithQuotaCard,
    CloudsmithRepositoryAuditLogCard,
    CloudsmithRepositorySecurityCard,
} from '@roadiehq/backstage-plugin-cloudsmith';
```
    
Then, add the following component to the `grid` array:
    
```html
<Grid item xs={12} md={6}>
    <CloudsmithStatsCard repo="repo-name" owner="org-name"/>
</Grid>

<Grid item xs={12} md={6}>
    <CloudsmithQuotaCard owner='org-name'/>
</Grid>

<Grid item xs={12} md={6}>
    <CloudsmithRepositoryAuditLogCard owner='org-name' repo='repo-name'/>
</Grid>

<Grid item xs={12} md={6}>
    <CloudsmithRepositorySecurityCard owner='org-name' repo='repo-name'/>
</Grid>
```