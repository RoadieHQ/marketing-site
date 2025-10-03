---
title: Roadie Backstage Entity Validator
publishedDate: '2022-06-29T12:00:00.0Z'
description: Using the Roadie Backstage Validator
---

## Introduction

Roadie provides many additional utilities to make your experience with Backstage smoother. One of these is the [Backstage Entity Validator](https://github.com/RoadieHQ/backstage-entity-validator). With this validator you can confirm that the entity descriptor files you are creating for Backstage conform to the schema and can be ingested by Backstage. The validator does not check the validity of entity references such as the "owner" field.

The Entity Validator is enabled automatically when you install the Roadie GitHub app to your GitHub organization. The validator automatically checks your pull requests and validates Backstage files included in them. The GitHub app check files with `.yml` or `.yaml` type and that have an `apiVersion` containing a string `backstage.io`, thus indicating that it is a Backstage descriptor file.

## Configuration

The validator has a configuration file option to optionally exclude Backstage descriptor files from validation. The validator included in Roadie GitHub app reads a file called `.roadierc` from the repository root and determines configuration based on that. The format of the `.roadierc` file is yaml.

If you want to exclude files from validation you can use a glob pattern of file definitions to exclude. An example configuration would look like something like below:

```yaml
validator:
  exclude:
    - 'catalog-*.yaml'
```

## Schemas

The validator is based on the published [Backstage schemas](https://backstage.io/docs/features/software-catalog/descriptor-format) which can be referred to in the Backstage docs along with two additional Kinds - [Repository](../repositories) and Product. A list of Kinds available in Roadie can be [found here](../modeling-entities).

## Further reading

1. The [Backstage Entity Validator repository](https://github.com/RoadieHQ/backstage-entity-validator).
2. [Backstage Entity Schemas](https://backstage.io/docs/features/software-catalog/descriptor-format)
