---
title: Buildkite Plugin
lastUpdated: '2022-11-18T21:00:00.0Z'
description: How to add Buildkite pipelines to your components
---

## Introduction

The Backstage Buildkite plugin integrates with Buildkite to show your build information inside Backstage where it can be associated with your services.

![buildkite-plugin-overview.png]('../../../assets/buildkite-plugin-overview.png')

## Add a Catalog Graph card to a dashboard

Click the cog icon on the top right of a component Dashboard (or the default Overview) page. Then click the plus icon to add a new card.

![edit_layout.png](edit_layout.png)

![add_card.png](add_card.png)

Select the EntityBuildkiteContent card from the drop down and click Create.

![add-buildkite-card.png](add-buildkite-card.png)

### Add you API Key
You will need to create an API key for your Org in Buildkite with read permissions.
Then add it in Roadie via Administration -> Settings -> Secrets -> BUILDKITE_TOKEN 

![Add BUILDKITE_TOKEN to Secrets in Settings Page](../../../assets/add-secrets.png)
