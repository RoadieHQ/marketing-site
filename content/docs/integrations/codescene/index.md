---
title: CodeScene
publishedDate: '2022-12-14T10:00:00.0Z'
lastValidated: '2022-12-14T10:00:00.0Z'
description: How to use the CodeScene plugin

humanName: CodeScene
logoImage: '../../../assets/logos/codescene/codescene.webp'
integrationType: OSS Plugin
---

## Introduction

This page describes how to set up the CodeScene plugin on Roadie.

## At a Glance
| | |
|---: | --- |
| **Prerequisites** | You'll need a CodeScene account and a basic Auth token. |
| **Considerations** | <ul><li>Basic API Token</li></ul> |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Prerequisites



## Step 1: Configure the CodeScene API token

Navigate to `/administration/codescene` and click the edit icon beside the `CODESCENE_AUTH_CREDENTIALS` secret then
enter your basic auth token.

![Set Auth](./credentials.webp)


## Step 2: Configure the CodeScene Instance URL

Navigate to `/administration/codescene` and enter your CodeScene instance url then click "save" and then "Apply & restart". 

![Set Config](./config.webp)

## Step 3: Create a Link to the CodeScene plugin

Enter the [sidebar edit mode](/docs/getting-started/updating-the-ui#updating-the-sidebar) and click the add icon. Then,
enter `Link` as the component, enter a title and set the path to `/code-scene` (exactly this value). Click Save.

Note: It might take some moments for the secret you configured to be available to the backend. You can check its status
on the secrets page.

![Create Link](./link.webp)

## More information:

* [CodeScene plugin](https://github.com/backstage/community-plugins/tree/main/workspaces/codescene/plugins/codescene)
