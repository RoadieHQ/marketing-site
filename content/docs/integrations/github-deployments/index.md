---
title: Github Deployments Plugin
publishedDate: '2022-03-29T14:00:00.0Z'
description: How to use the Github Deployments plugin

humanName: Github Deployments
logoImage: '../../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.png'
integrationType: OSS plugin
---

The Github Deployments plugin will display a table of the last n deployments made through Github Actions. 

![github-deployments-screenshot](./screenshot.png)
Credit: [Andrew Johnson](https://github.com/anderoo)


## Prerequisites
- The [Roadie Github App installed](/docs/getting-started/install-github-app)
- A `github.com/project-slug` annotation present in your `catalog-info.yaml` file

## Adding the Plugin

Ask a Roadie Admin to add the `EntityGithubDeploymentsCard` as a new tab in an Entity [using the Dynamic UI editor](/docs/getting-started/configuring-backstage-plugins).

It should then pick up and display any deployments for the repository listed in the `github.com/project-slug` annotation.
