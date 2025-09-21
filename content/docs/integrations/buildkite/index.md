---
title: Buildkite Plugin
publishedDate: '2022-01-12T21:00:00.0Z'
lastValidated: '2022-01-12T21:00:00.0Z'
description: How to add Buildkite pipelines to your components

humanName: Buildkite
logoImage: 'assets/logos/buildkite/buildkite-logo.webp'
integrationType: OSS plugin
---

## Introduction

The [Backstage Buildkite plugin](https://roadie.io/backstage/plugins/buildkite/) integrates with Buildkite to show your build information inside Backstage where it can be associated with your services.

![buildkite-plugin-overview.webp](buildkite-plugin-overview.webp)

## At a Glance
| | |
|---: | --- |
| **Prerequisites** |  |
| **Considerations** |  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Add Buildkite to one of your components

### Add the Buildkite annotation
First, add an annotation in the `catalog-info.yaml` file for a service that uses Buildkite like so: 
```yaml
metadata:
  annotations:
    buildkite.com/project-slug: <buildkiteorganization/buildkitepipeline>
```

### Add your API Key
You will need to create an API key for your Org in Buildkite with read permissions.

Then add it to Roadie at `/administration/buildkite`.

![Add BUILDKITE_TOKEN in Settings Page](./add-secret.webp)

### Add the plugin
In Roadie, find and select the service via the Component Catalog or Search.

Click the plus icon to add a new plugin for your component.

![Add the plugin](./add-plugin.webp)

Select the EntityBuildkiteContent card from the drop-down and click Create.

![add-buildkite-content.webp](./add-buildkite-content.webp)

You should now see your Buildkite pipeline runs inside Roadie!

![View all builds in buildkite plugin](./buildkite-plugin-overview.webp)

You can then click in individual builds to see more info. 

![View single build in buildkite plugin](./buildkite-plugin-build.webp)

