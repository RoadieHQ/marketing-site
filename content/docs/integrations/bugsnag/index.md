---
title: Bugsnag
lastUpdated: '2021-09-30T11:00:00.0Z'
description: How to create Bugsnag API Token for Bugsnag plugin.
---

## Introduction

In order to use the Bugsnag plugin, Roadie needs an API token to communicate with Bugsnag APIs.


This is set within backstage at the following url:

```text
https://<tenant-name>.roadie.so/administration/settings/secrets
```

This page describes how to create and set up the Busnag Personal Access (API) token.

## Steps

### Step 1: Create an API token

Start by visiting the account settings page in Bugsnag : https://app.bugsnag.com/settings/{organizationaname}/my-account/auth-tokens.

Click on the "Generate new token" button.

   ![Personal Tokens screen in Bugsnag with no tokens defined](./generate-api-token.png)

On the modal window you can give the token a description so you can recognize it later, e.g. "Roadie Backstage" and finally Bugsnag will show you the API token once. Make note of this token, you will only be able to see it once.

### Step 2: Store the token in Roadie
Visit `https://<tenant-name>.roadie.so/administration/settings/secrets` and enter the token value from above into `BUGSNAG_PERSONAL_TOKEN`.


## References

- [Bugsnag docs for authentication](https://bugsnagapiv2.docs.apiary.io/#introduction/authentication)
