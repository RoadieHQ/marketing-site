---
title: Enforce branch protection
publishedDate: '2023-08-16'
description: How to enforce GitHub branch protection on production software with Tech Insights.
---

Branch protection can bring an extra layer of security to your organization by ensuring that code must be reviewed and tested before being merged. With Tech Insights, you can ensure teams are using branch protection on their software.

Roadie automatically collects this information and you can view reports or create checks about that data.
In this tutorial, we’re going to:

1. Automatically scan Components in the Backstage catalog and record whether or not features like branch protection and required reviews are turned on or off for their GitHub repositories.
2. Visualize the percentage of components with branch protection turned on or off.

As we go through this process, you’ll learn how to create Data Sources that interact with the GitHub APIs.

## Prerequisites

1. You must have [installed the Roadie GitHub App](../../getting-started/install-github-app/).

## Visualise the percentage of Components with branch protection

In order to view the data, you can click Tech Insights > Data Sources > GitHub Settings Data Source

You can then expand the "Fact Visualization" section and select the item that you want to view across your GitHub repositories.
![viz.png](./viz.png)

This chart tells us that 81% of Components have branch protection turned on in their repositories.
