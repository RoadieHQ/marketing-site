---
title: Configuring Okta Team / User Provider
publishedDate: '2022-08-02T17:00:00.0Z'
description: How to configure Roadie to collect users from Okta.

humanName: Okta
integrationType: OSS plugin
---

## Introduction

In order to use the Okta organization plugin, Roadie needs an Okta API token, and the organization URL to communicate with Okta APIs. On this page, you'll learn how to set up this API token in your Roadie Admin panel. 

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
