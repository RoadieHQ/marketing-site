---
title: Adding Components
publishedDate: '2022-01-30T14:00:00.0Z'
description: How to add components such as services or websites to the Backstage catalog.
---

## Introduction

This tutorial will show you how to add components such as services or websites to the Backstage catalog.

## Prerequisite 

You must instal the GitHub App in order to import components in private repositories. The steps to do this are [here](/docs/getting-started/install-github-app/).

## Step 1: Create your 'catalog-info.yaml' file

Create a file called `catalog-info.yaml` in the root of your GitHub repo and add content like this to it:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service-1
  title: Sample Service 1 # optional, human readable component name
  description: |
    A service for testing Backstage functionality. Configured for
    GitHub Actions.
  annotations:
    github.com/project-slug: roadiehq/sample-service
spec:
  type: service
  owner: my-team-name
  lifecycle: production
```

## Step 2: Import Your Component YAML file into Backstage

Backstage scans your GitHub Org for new updates and automatically discovers YAML files which are found in the root of the default branch and are called `catalog-info.yaml`.

Components can be manually added to Backstage by using the catalog importer available at `/catalog-import`. 

To do this, simply copy/paste the URL of the YAML file into the importer (see video below).

[![Adding a Component](https://cdn.loom.com/sessions/thumbnails/b96f07f0579a423f8cb762e8c1b7f3fe-with-play.gif)](https://www.loom.com/share/b96f07f0579a423f8cb762e8c1b7f3fe "Adding a Component")

## Step 3: View your Component

Click the Home link in the Backstage sidebar to go back to the catalog where you should see your component. Depending on the type of component you imported, you might have to cycle through the tabs until you see your component.

![See your new component](./viewcomponent.jpg)

## TroubleShooting FAQs

**Component Not Appearing?**

If your component is not appearing make sure Backstage has permissions to read the repo that you added the yaml file to.

You can check this by going to the Github settings of a repo that Backstage already has access to, then follow `Settings>Integrations>Configure`, and making sure your repo is listed in the allowed repos:

![repo permissions](./repopermissions.png)

## What Next? 

Let's [add some docs to the component we just created](/docs/getting-started/technical-documentation/) so that others in your organization can easily learn how to use it.
