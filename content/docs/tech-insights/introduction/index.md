---
title: Introduction to Tech Insights
publishedDate: '2022-11-15'
description: An introduction about Tech Insights plugin.
---

Roadie Tech Insights helps you keep track of all of your software assets and make sure they meet your quality and compliance targets.

Roadie Tech Insights lets you create Scorecards to track what matters to you about your assets in the Backstage catalog. It does this by ingesting data via Data Sources, and then aggregating Checks on that data.

Therefore, in order to create [Scorecards](../scorecards/index.md), you will need to add [Data Sources](../data-sources/index.md) and define [Checks](../checks//index.md) on such data. Roadie provides a user interface to build all three of these, this page describes how to set each one of them.

## Prerequisites

- Roadie Tech Insights is a paid add-on. If you are not sure about whether or not you have it or would like to include it, please reach out to our sales team.
- You must be an administrator for your Roadie instance to enable and manage Tech Insights. See (access section for more details.)[#users-access]

## Enable Roadie Tech Insights

To enable Roadie Tech Insights, go to Administration → Settings → Plugins → Tech Insights, or navigate to `https://[organisation]/administration/settings/tech-insights` and tick the enabled box as shown below:

![Enable Tech Insights](./enable-tech-insights.png)

## Users access

Anyone who is part of the `roadie-backstage-admin` group in Roadie will have write access to Tech Insights.

However, if you want to grant write access to the feature to some users, but do not wish to make them parts of main admin group (`roadie-backstage-admin`), you can create a group called `roadie-tech-insights-admin` and add them as a members there.

If it exists, anyone who is part of the `roadie-tech-insights-admin` group in Roadie will have write access to Tech Insights.

By default, no other users will have access, unless you check 'Visible to all users' checkbox under Administration → Settings → Plugins → Tech Insights page. 

This will grant Read access to all users which are not part of `roadie-backstage-admin` nor `roadie-tech-insights-admin` groups.

Once Roadie Tech Insights is enabled, you’ll find a link in the sidebar as below:

![Sidebar Tech Insights](./sidebar-tech-insights.png)

## Next steps

Now that you have enabled Roadie Tech Insights and verified you have access to the Tech Insights page you’ll be able to create [Data Sources](../data-sources/), define [Check](../checks/) for your Data Sources, and compose [Scorecards](../scorecards/) with said Checks.
