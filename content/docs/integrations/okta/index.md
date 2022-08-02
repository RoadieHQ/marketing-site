---
title: Configuring Okta Team / User Provider
publishedDate: '2022-08-02T17:00:00.0Z'
description: How to configure Roadie to collect users from Okta.

humanName: Okta
integrationType: OSS plugin
---

## Introduction

In order to use the Okta organization entity plugin, Roadie needs an API token, and the organization url to communicate with Okta APIs.

This page describes how to create and set up the API token.

## Prerequisites
You will need to [configure an Okta API token](https://developer.okta.com/docs/guides/create-an-api-token/) for use by Backstage.

## Steps

### Step 1: Set the Okta API token

Visit the secrets page in the Backstage UI and set the `OKTA_TOKEN` secret.

```text
https://<tenant-name>.roadie.so/administration/settings/secrets
```

### Step 2: Set the Okta Organization URL

Visit the Okta configuration page in Backstage and set the Organization URL.
```text
https://<tenant-name>.roadie.so/administration/settings/okta
```

## References

- [Okta docs for creating API tokens](https://developer.okta.com/docs/guides/create-an-api-token/)
