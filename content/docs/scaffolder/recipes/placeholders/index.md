---
title: Refer to steps defined in another repo
publishedDate: '2024-12-03'
description: If you want to have a centrally defined, re-useable step you can use the following pattern
---

## Template

## Actions used

- [`placeholders`](https://backstage.io/docs/features/software-catalog/descriptor-format#substitutions-in-the-descriptor-format)
- [`debug:log`](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)

You can check the available actions in Roadie if you visit `/create/actions`.

### Relative path

```yaml
---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: re-useable-step-example
  title: Example of sourcing a step from a constant
spec:
  owner: roadie
  type: service

  steps:
    - $yaml: './constants/log.yaml'
```

./constants/log.yaml

```yaml
id: log-message
action: debug:log
input:
  message: 'Hello there'
```

### External file

```yaml
---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: re-useable-step-example
  title: Example of sourcing a step from a constant
spec:
  owner: roadie
  type: service

  steps:
    - $yaml: 'https://github.com/RoadieHQ/software-templates/tree/main/scaffolder-templates/steps/log.yaml'
```

https://github.com/RoadieHQ/software-templates/tree/main/scaffolder-templates/steps/log.yaml

```yaml
id: log-message
action: debug:log
input:
  message: 'Hello there'
```
