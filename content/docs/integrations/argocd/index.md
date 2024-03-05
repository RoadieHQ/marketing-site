---
title: Argo CD Plugin
publishedDate: '2022-01-31T21:00:00.0Z'
description: How to configure the Argo CD plugin on Roadie.

humanName: Argo CD
logoImage: '../../../assets/logos/argo-cd/argo-cd-logo.png'
integrationType: OSS plugin
---

## Introduction

The Argo CD plugin can present the current status of an application in your Roadie Backstage catalog.

![Argo CD Overview Card](./argo-overview.png)

This page explains how to configure it in Roadie Backstage.

## Prerequisites

1. You must be an admin in Roadie. By default, all users are admins. Learn how to designate certain users as admins [here](/docs/getting-started/create-admin-group/).

## Step 1: Create an API token

Roadie requires an API token to be able to connect to Argo CD.

You can generate a token via the Argo CD CLI or UI. 

Via the CLI run:

```bash
argocd account generate-token --account <your-account> --id <optional-id>
```

Alternatively, visit the Argo CD UI at `/settings/accounts/<your-account>` click "Generate New" in the "Tokens" section.

## Step 2: Configure Roadie with your Argo CD endpoint

Enter your Argo CD server API endpoint (or [broker endpoint](/docs/integrations/broker/)) into Roadie.

1. Click "Administration" in the sidebar, then "Settings" in the tabs.
2. Find "Argo CD" in the Configuration sidebar.
3. Enter your Argo CD server API endpoint.
4. Add the Argo CD API token in the Secrets section.
5. Click "Save" then "Apply & Restart". 

NB: You can use the [Roadie Broker](/docs/integrations/broker/) if your ArgoCD API is not publicly accessible. 

![Set Argo CD Config](./config.png)

## Step 3: Add the UI elements

The Argo CD plugin provides two type of UI elements. 

The `EntityArgoCDOverviewCard` presents the current status of an application: 

![Argo CD Overview Card](./argo-overview.png)

The `EntityArgoCDHistoryCard` displays the deployment history of an appliction:

![Argo CD History Card](./argo-history.png)

Both can be [added to component dashboards](/docs/getting-started/updating-the-ui/#updating-dashboards).

The `EntityArgoCDContent` displays similar information to the history card and can be [added as a tab](/docs/getting-started/updating-the-ui#updating-tabs) to component layouts.

![Argo CD Tab](./argo-tab.png)

## Step 4: Add annotations
Add one of the following annotations to the yaml config file of a component

```
metadata:
  annotations:
    argocd/app-name: <your-app-name>
```

```
metadata:
  annotations:
    argocd/app-selector: <app-selector>
```

## Multiple Argo CD Instances

If you require integrating with multiple Argo CD servers contact Roadie via the in-app chat widget and we will enable it for you.

## References

- [Argo CD Backstage plugin codebase](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/backstage-plugin-argo-cd)
