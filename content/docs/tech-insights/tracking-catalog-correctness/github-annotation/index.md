---
title: Check the GitHub annotation is set
publishedDate: '2022-10-06'
description: Managing Scorecards.
---

The GitHub annotation powers more functionalities in Backstage than any other. Frequently, the GitHub project slug is used to load data related to the associated entity.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: marketing-site
  annotations:
    github.com/project-slug: RoadieHQ/marketing-site
```

Backstage works best when the GitHub project-slug annotation is set on as many components as possible.

To create a check to ensure that the annotation is set, use the following attributes:

| Field         | Input                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------- |
| Name          | GitHub annotation must be set on Backstage Component metadata                                |
| Description   | Setting the component metadata will allow many Backstage GitHub plugins and features to work |
| Data source   | Entity Metadata (built-in).                                                                  |
| Fact          | Annotation keys (this returns a list of all of the annotation keys on an entity)             |
| Fact operator | Contains                                                                                     |
| Value         | github.com/project-slug                                                                      |

Once this check completes its first run, you should see data come in showing the Backstage entities which need improvement.
