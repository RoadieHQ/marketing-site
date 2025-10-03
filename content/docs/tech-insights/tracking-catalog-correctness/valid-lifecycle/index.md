---
title: Check Component lifecycle is valid
publishedDate: '2022-10-06'
description: Managing Scorecards.
---

The `spec.lifecycle` of a component can be a useful indicator of the maturity of a component. However, it is an arbitrary string in the Backstage spec, and the catalog can get confusing when people enter arbitrary values.

You can enforce a small number of valid values with the following check:

| Field         | Input                                                  |
| ------------- | ------------------------------------------------------ |
| Name          | Backstage component metadata lifecycle should be valid |
| Description   | Only a small number of lifecycles are supported.       |
| Data source   | Entity Metadata (this is built-in).                    |
| Fact          | Lifecycle                                              |
| Fact operator | Is One Of                                              |
| Value         | production,deprecated,experimental                     |

Make sure to adapt the Value field according to the lifecycles you want to support.
