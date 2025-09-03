---
title: Github Deployments Plugin
publishedDate: '2022-03-29T14:00:00.0Z'
lastValidated: '2022-03-29T14:00:00.0Z'
description: How to use the Github Deployments plugin

humanName: Github Deployments
logoImage: '../../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.webp'
integrationType: OSS plugin
---

## At a Glance
| | |
|---: | --- |
| **Prerequisites** |<ul><li>The [Roadie Github App installed](/docs/getting-started/adding-a-catalog-item)</li><li>A `github.com/project-slug` annotation present in your `catalog-info.yaml` file</li></ul> |
| **Considerations** |  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

The Github Deployments plugin will display a table of deployments for this repo made through Github Actions. 

![github-deployments-screenshot](./screenshot.webp)
Credit: [Andrew Johnson](https://github.com/anderoo)


## Adding the Plugin

Ask a Roadie Admin to add the `EntityGithubDeploymentsCard` as a new tab in an Entity [using the Dynamic UI editor](/docs/getting-started/configuring-backstage-plugins).

It should then pick up and display any deployments for the repository listed in the `github.com/project-slug` annotation.

You can configure how many deployments are shown per page by passing in props to the card when adding it or editing it like so:

```json
{
  "last": 10,
  "lastStatuses": 2
}
```
