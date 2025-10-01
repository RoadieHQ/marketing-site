---
title: Configuring GitHub Enterprise
publishedDate: '2022-07-28T21:00:00.0Z'
description: How to connect the Roadie catalog to GitHub Enterprise.
---

## Introduction

This tutorial will guide you through the steps required to connect Roadie to your GitHub org in GitHub Enterprise.

## Prerequisites

- Please let the Roadie support team know about your intention to configure GitHub Enterprise so we can enable it on our side.
- You will need to ensure that the GitHub Enterprise instance is available to our [IP addresses](/docs/details/allowlisting-roadie-traffic/).

## Step 1: Create an OAuth App in GitHub

Create an [OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) on GitHub and generate a secret key. Keep note of the client ID and secret key.

## Step 2: Create a personal access token

Create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in GitHub with the `repo` permissions.

## Step 3: Configure the GitHub Enterprise secrets

Go to the secrets configuration page in Backstage:

`https://<tenant-name>.roadie.so/administration/secrets`

And add the secrets for `GHE_TOKEN`, `GHE_CLIENT_ID` and `GHE_CLIENT_SECRET`.

## Next steps

Now that a connection to GitHub is established, you can [make yourself an admin on Roadie](/docs/getting-started/assigning-admins/).

To automatically load catalog files from repositories please see [how to set up GitHub Discovery](/docs/integrations/github-discovery/)

To load users and groups from GitHub Teams please see [GitHub teams documentation](/docs/integrations/github-teams/).
