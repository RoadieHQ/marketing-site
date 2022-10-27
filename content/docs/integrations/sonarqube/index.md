---
title: Configuring SonarQube
publishedDate: '2021-07-28T21:00:00.0Z'
description: How to configure the SonarQube plugin on roadie.
humanName: SonarQube
logoImage: '../../../assets/logos/sonarqube/logo-sonar.png'
integrationType: OSS plugin
---

## Introduction

In order to use the SonarQube plugin, Roadie needs an API token to communicate with SonarQube's APIs.


These are set within backstage at the following url:

```text
https://<tenant-name>.roadie.so/administration/settings/secrets
```

This page describes how to create and set up the API token.

## Steps

### Step 1: Create an API token

In order for the Backstage integration to work we must first generate our api key. These can be found from:
 * [Sonarcloud](https://sonarcloud.io/account/security) for your sonarcloud plugin

### Step 2: Store the credentials and SonarQube URL in Roadie
Visit `https://<tenant-name>.roadie.so/administration/settings/secrets` and enter the token value from above into `SONARQUBE_API_TOKEN`.


![Cloud based configuration](./cloud.png)

## References

- [SonarQube backstage plugin](https://www.npmjs.com/package/@backstage/plugin-sonarqube/)
