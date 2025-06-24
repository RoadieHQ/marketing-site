---
title: Configuring Rootly
publishedDate: '2021-07-28T21:00:00.0Z'
description: How to configure the Rootly plugin on roadie.
humanName: Rootly
logoImage: '../../../assets/logos/rootly/logo.webp'
integrationType: OSS plugin
---

## Introduction

In order to use the Rootly plugin, Roadie needs an API token to communicate with Rootly's APIs.

These are set within backstage at the following url:

```text
https://<tenant-name>.roadie.so/administration/settings/secrets
```

This page describes how to create and set up the API token.

## Steps

### Step 1: Create an API token

In order for the Backstage integration to work we must first generate our api key. These can be found from:

- [Rootly](https://rootly.com/api#/) for your rootly plugin

### Step 2: Store the credentials in Roadie

Visit `https://<tenant-name>.roadie.so/administration/rootly` and enter the token value from above into `ROOTLY_API_KEY`.

### Step 3: Annotate your entities

If you want to link entities in Roadie with data in Rootly you'll need to [add an annotation](https://github.com/rootlyhq/backstage-plugin/tree/master?tab=readme-ov-file#annotations). For example, for a Service component entity you would annotate with either `rootly.com/service-slug` or `rootly.com/service-id`. 

### Step 4: (Optional) Configure Additional Organizations

1. Visit the **Administration > Settings** page in Roadie
2. Click on **Rootly** under the **Collaboration & Incident Management** section or search for it.
3. In the **Additional Organizations** section, click **Add** to add a new organization
4. For each organization, provide:
   - **Organization ID**: A unique identifier for the organization in Roadie (e.g., `org2`, `production`)
   - **Organization Secret Variable**: The name of the secret holding the organization's API key (e.g., `CUSTOMER_SECRET_1`)
5. Click **Save** to apply the configuration
6. You'll need to add the `rootly.com/organization-id` annotation to associate entities with additional organisations. Otherwise they will use the "default" organization (e.g. the ROOTLY_API_KEY).

## References

- [Rootly backstage plugin](https://github.com/rootlyhq/backstage-plugin)
