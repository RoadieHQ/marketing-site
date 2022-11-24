---
title: Configuring Rootly
publishedDate: '2021-07-28T21:00:00.0Z'
description: How to configure the Rootly plugin on roadie.
humanName: Rootly
logoImage: '../../../assets/logos/rootly/logo.png'
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

Visit `https://<tenant-name>.roadie.so/administration/settings/secrets` and enter the token value from above into `ROOTLY_API_KEY`.

## References

- [Rootly backstage plugin](https://github.com/rootlyhq/backstage-plugin)
