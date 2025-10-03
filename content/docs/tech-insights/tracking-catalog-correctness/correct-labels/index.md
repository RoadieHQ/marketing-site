---
title: Check labels are being used correctly
publishedDate: '2022-10-06'
description: Managing Scorecards.
---

Backstage allows adding “labels” to entities in the Catalog. Some teams use labels as a way to specify the “tier” of a service, amongst other use cases.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: service-1
  labels:
    tier: 3
spec:
  type: service
  owner: sample-team
  lifecycle: production
```

There are typically two problems with using labels in Backstage.

1. Not all teams will add the `tier` label to their components.
2. Teams will make up their own labels, and duplicate labels will frequently emerge.

We suggest people using our Tech Insights functionality to create checks to help teams manage labels.

### Enforcing mandatory labels

You can use Tech Insights to find components which do not meet the minimum requirements for labels.

Imagine you wanted `tier` and `region` to be mandatory. To get a list of components wihch have not added the `tier` label, you would create a check with the following attributes:

| Field         | Input                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| Name          | Mandatory Backstage labels                                                                                         |
| Description   | Adding these labels will help other people in the company understand how to find and interact with your component. |
| Data source   | Entity Metadata (this is built-in).                                                                                |
| Fact          | Label keys (this returns a list of all of the label keys on an entity)                                             |
| Fact operator | Contains                                                                                                           |
| Value         | tier,region                                                                                                        |

With this check in place, we can now get a list of all services which have not added the `tier` and `region` labels.

Here’s a video showing how to construct this check:

https://www.loom.com/share/7c60ba8a6e924868982e9faf96f1a6a4

### Enforcing allowable (but optional) labels

In order to find duplicate labels, the best practice is to establish and maintain a list of allowed labels. For example, you may wish to allow the labels `tier` and `region`, but not the label `location`.

To get a list of components wihch have added unallowed label, you would create a check with the following attributes:

| Field         | Input                                                                  |
| ------------- | ---------------------------------------------------------------------- |
| Name          | Allowed Backstage labels                                               |
| Description   |                                                                        |
| Data source   | Entity Metadata (this is built-in).                                    |
| Fact          | Label keys (this returns a list of all of the label keys on an entity) |
| Fact operator | Contains                                                               |
| Value         | tier,region                                                            |

To change the list of allowable labels, simple edit the check and add to the Value field.
