---
title: Buildkite Plugin
lastUpdated: '2022-01-12T21:00:00.0Z'
description: How to add Buildkite pipelines to your components
---

## Introduction

The [Backstage Buildkite plugin](https://roadie.io/backstage/plugins/buildkite/) integrates with Buildkite to show your build information inside Backstage where it can be associated with your services.

![buildkite-plugin-overview.png](buildkite-plugin-overview.png)

## Add Buildkite to one of your components

### Add the Buildkite annotation
First, add an annotation in the `catalog-info.yaml` file for a service that uses Buildkite like so: 
```yaml
metadata:
  annotations:
    buildkite.com/project-slug: <buildkiteorganization/buildkitepipeline>
```

### Add you API Key
You will need to create an API key for your Org in Buildkite with read permissions.

Then add it to Roadie via Administration -> Settings -> Secrets -> BUILDKITE_TOKEN

![Add BUILDKITE_TOKEN to Secrets in Settings Page](../../../assets/add-secrets.png)

### Add the plugin
In Roadie, find and select the service via the Component Catalog or Search.

Click the plus icon to add a new plugin for your component.

![Add the plugin](../../../assets/add-plugin.png)

Select the EntityBuildkiteContent card from the drop-down and click Create.

![add-buildkite-content.png](add-buildkite-content.png)

You should now see your Buildkite pipeline runs inside Roadie!

![View all builds in buildkite plugin](buildkite-plugin-overview.png)

You can then click in individual builds to see more info. 

![View single build in buildkite plugin](buildkite-plugin-build.png)

