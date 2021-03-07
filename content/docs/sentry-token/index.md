---
title: Sentry token
lastUpdated: '2021-02-23T21:00:00.0Z'
description: How to create a Sentry Token with permissions for use in Backstage.
---

## Introduction

In order to use the Backstage Sentry plugin with Roadie, you must securely provide Roadie with an API key which it can use to access the Sentry API.

## Steps

1. Create an internal application in the Sentry UI. Do this at the organization level, rather than the personal level.

2. Give the application a name and a Webhook URL.

3. Give the application the ability to read issues and projects.

   ![Creating an internal application in the Sentry UI](../.plugins/notes/sentry-create-internal-application-1590x1621.png)

4. Once you have an internal application, you can create a token and enter the token into Roadie using the secrets page.
