---
title: Roadie Backstage Entity Validator
publishedDate: '2022-06-29T12:00:00.0Z'
description: Using the Roadie Backstage Validator
---

## Introduction

Roadie provides many additional utilities to make your experience with Backstage smoother. One of these is the [Backstage Entity Validator](https://github.com/RoadieHQ/backstage-entity-validator). With this validator you can confirm that the entity descriptor files you are creating for Backstage conform to the needed format and prerequisites so that the work properly with Backstage and Roadie.


The Entity Validator is enabled automatically when you install the Roadie GitHub app to your GitHub organization. The validator automatically checks your pull requests and validates Backstage files included in them.

## Configuration

The validator has a configuration file option to optionally exclude Backstage descriptor files from validation. The validator included in Roadie GitHub app reads a file called `.roadierc` and determines configuration based on that. The format of the `.roadierc` file is yaml. 

If you want to exclude files from validation you can use a glob pattern of file definitions to exclude. An example configuration would look like something like below:

```yaml
validator:
  exclude:
    - 'catalog-*.yaml'
```


## Further reading

1. The [Backstage Entity Validator repository](https://github.com/RoadieHQ/backstage-entity-validator).

