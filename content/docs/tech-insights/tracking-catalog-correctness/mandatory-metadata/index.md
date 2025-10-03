---
title: Check mandatory Backstage metadata is set
publishedDate: '2022-10-06'
description: Managing Scorecards.
---

Entity metadata such, as the title and description, is pretty much necessary to make the Backstage Catalog useful. You can use Tech Insights to find components which are not fully filled out.

For example, you can create a check with the following attributes to find services which are missing the title metadata:

| Field         | Input                                                         |
| ------------- | ------------------------------------------------------------- |
| Name          | Ensure titles are present on Backstage entities.              |
| Description   | A title is a human readable name for the Backstage component. |
| Data source   | Entity Metadata (built-in).                                   |
| Fact          | Has Title                                                     |
| Fact operator | Is True                                                       |

Roadie provides other metadata values to check for, such as the description, tags, lifecycle, namespace, and owner.
