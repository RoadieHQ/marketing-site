---
title: Check Component type is valid
publishedDate: '2022-10-06'
description: Managing Scorecards.
---

In Backstage, the `spec.type` is important to the build up your [system model](https://roadie.io/blog/modelling-software-backstage/) in the Catalog. However, `spec.type` can accept arbitrary strings. You can use Tech Insights to ensure all your components are following your desired schema.

Create a check with the following attributes:

| Field         | Input                                                                       |
| ------------- | --------------------------------------------------------------------------- |
| Name          | Backstage Component type must be valid.                                     |
| Description   | Only a small number of Component types are valid. service, website, library |
| Data source   | Entity Metadata (this is built-in).                                         |
| Fact          | Type                                                                        |
| Fact operator | Is One Of                                                                   |
| Value         | library,website,service,documentation                                       |

Make sure to adapt the Value field according to the types you want to support.
