---
title: CodeScene
publishedDate: '2022-12-14T10:00:00.0Z'
description: How to use the CodeScene plugin

humanName: CodeScene
integrationType: OSS Plugin
---

## Introduction

This page describes how to set up the CodeScene plugin on Roadie.

## Prerequisites

You'll need a CodeScene account and a basic Auth token.

## Step 1: Configure the CodeScene API token

Navigate to `/administration/settings/secrets` and click the edit icon beside the `CODESCENE_AUTH_CREDENTIALS` secret then
enter your basic auth token.

![Set Auth](./credentials.png)

## Step 2: Create a Link to the CodeScene plugin

Enter the [sidebar edit mode](/docs/getting-started/updating-the-ui#updating-the-sidebar) and click the add icon. Then,
enter `Link` as the component, enter a title and set the path to `/code-scene` (exactly this value). Click Save.

![Create Link](./link.png)

## More information:

* [CodeScene plugin](https://github.com/backstage/backstage/tree/master/plugins/codescene)
