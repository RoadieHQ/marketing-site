---
title: Refer to parameter values in another repo
publishedDate: '2022-10-28'
description: If you want to have a centrally defined re-useable parameter value such as a list of product you can use the following pattern
---

## Template

## Actions used

- [`placeholders`](https://backstage.io/docs/features/software-catalog/descriptor-format#substitutions-in-the-descriptor-format)
- [`debug:log`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)

You can check the available actions if you visit `/create/actions`.

### Relative file

```yaml
---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: global-param-example
  title: Example of sourcing params from a constant
spec:
  owner: roadie
  type: service

  parameters:
    - $yaml: ./constants/products.yaml

  steps:
    - id: log-message
      name: List selected product
      action: debug:log
      input:
        message: 'Selected product: ${{ parameters.product }}'
```


./constants/products.yaml
```yaml
title: Select Product
properties:
  product:
    title: Product
    type: string
    enum: ["Search", "CRM", "Onboarding"]
```

### External File

```yaml
---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: global-param-example
  title: Example of sourcing params from a constant
spec:
  owner: roadie
  type: service

  parameters:
    - $yaml: https://github.com/RoadieHQ/software-templates/tree/main/scaffolder-templates/parameters/products.yaml

  steps:
    - id: log-message
      name: List selected product
      action: debug:log
      input:
        message: 'Selected product: ${{ parameters.product }}'
```


https://github.com/RoadieHQ/software-templates/tree/main/scaffolder-templates/parameters/products.yaml
```yaml
title: Select Product
properties:
  product:
    title: Product
    type: string
    enum: ["Search", "CRM", "Onboarding"]
```