---
title: Writing Catalog Entity Yaml
publishedDate: '2022-12-01T12:00:00.0Z'
description: How to represent things in the Catalog 
---

## Introduction

To represent something in Roadie Backstage you will generally need to write some YAML to describe it and upload the file to the SCM you have [linked to Roadie](/docs/getting-started/install-github-app) such as a Github repository.

The base file to describe entities is by default named `catalog-info.yaml` but you can name it anything you like. 

The simplest version of a Component entity would look something like this:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: search-service
spec:
  type: service
  owner: RoadieHQ
  lifecycle: production
```

You can see how to add this to Roadie Backstage once you've pushed it to your repository [here](/docs/getting-started/adding-components/). 

## Catalog Entity Schemas

You can find all the supported schema information for representing a wide variety of entity types in Roadie Backstage in the Backstage documentation here [https://backstage.io/docs/features/software-catalog/descriptor-format#contents](https://backstage.io/docs/features/software-catalog/descriptor-format#contents


