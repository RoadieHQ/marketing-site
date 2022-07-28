---
title: Configuring GitHub Enterprise
publishedDate: '2022-07-28T21:00:00.0Z'
description: How to connect the Roadie catalog to GitHub Enterprise.
---

## Introduction

This tutorial will guide you through the steps required to connect Roadie to your GitHub org in GitHub Enterprise.

## Prerequisites

Please let the Roadie support team know about your intention to configure GitHub enterprise, because we need to do some manual steps to enable it for you.

## Step 1: Create an OAuth App in GitHub

Create an OAuth App in GitHub https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app and generate a secret key. Keep note of the client ID and secret key.

## Step 2: Create a personal access token

Create a personal access token in GitHub https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token.

## Step 3: Configure the GitHub Enterprise secrets

Go to the secrets configuration page in Backstage `https://<your-tenant>.roadie.so/administration/settings/secrets` and set the secrets `GHE_TOKEN`, `GHE_CLIENT_ID` and `GHE_CLIENT_SECRET`.

## Next steps

Now that a connection to GitHub is established, you can [make yourself an admin on Roadie](/docs/getting-started/create-admin-group/).

To automatically load catalog files from repositories please see [here](/docs/integrations/github-discovery/)

To load users and groups from GitHub Teams please see [GitHub teams documentation](/docs/integrations/github-teams/).
