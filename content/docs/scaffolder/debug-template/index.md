---
title: Debug your nunjucks template
publishedDate: '2022-10-28'
description: Template to fetch and render the content of your skeleton template
---

## Template

## Actions used

- fetch:template
- fs:read
- debug:log

- [`fetch:template`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/template.ts)
- `fs:read`
- [`debug:log`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)

You can check the available actions if you visit `/templates/actions`.

## Walkthrough

You can use this template by registering it from [roadie-demo/scaffolder-examples](https://github.com/roadie-demo/scaffolder-examples/tree/main/debug-template/template.yaml) repo

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: debug-template
  title: Debug the nunjucks template
  description: This template will render the provided file and displays it in the scaffolder logs
  owner: group:default/engineering
  type: service

  parameters:
    - title: Document front content
      properties:
        rfcNumber:
          title: rfcNumber
          type: string
        rfcTitle:
          title: RFC Title
          type: string
        abstract:
          title: Document Abstract (optional draft version)
          type: string
          ui:widget: textarea

  steps:
    - id: fetch-template
      action: fetch:template
      input:
        url: https://github.com/roadie-demo/scaffolder-examples/tree/main/debug-template/skeleton
        templateFileExtension: true
        values:
          rfcNumber: ${{ parameters.rfcNumber }}
          rfcTitle: ${{ parameters.rfcTitle }}
          abstract: ${{ parameters.abstract }}

    - id: read-file
      name: Read File
      action: fs:read
      input:
        path: ./template.md

    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: ${{ steps['read-file'].output.content }}
```

# Breakdown

### Parameters

This section configures the frontend for your template. Essentially these values will be provided from the backstage ui to the template.

1. param

   This renders 3 separate input fields for the template. These inputs can be referenced by the `steps` via their key name inside the properties object.

```yaml
- title: Document front content
  properties:
    rfcNumber:
      title: rfcNumber
      type: string
    rfcTitle:
      title: RFC Title
      type: string
    abstract:
      title: Document Abstract (optional draft version)
      type: string
      ui:widget: textarea
```

### Steps

#### fetch-template

Uses the fetch:template. It fetches the template skeleton from the hardcoded URL and puts everything into the `docs/rfcs/<rfcnumber>` folder.
The provided values object will be used to replace the values inside the skeleton template by nunjucks.

```yaml
- id: fetch-template
  action: fetch:template
  input:
    url: https://github.com/roadie-demo/scaffolder-examples/tree/main/debug-template/skeleton
    templateFileExtension: true
    targetPath: docs/rfcs/${{ parameters.rfcNumber }}
    values:
      rfcNumber: ${{ parameters.rfcNumber }}
      rfcTitle: ${{ parameters.rfcTitle }}
      abstract: ${{ parameters.abstract }}
```

#### read-file

Uses the fs:read action. It reads the hard coded `./template.md` file's content into memory.

```yaml
- id: read-file
  name: Read File
  action: fs:read
  input:
    path: ./template.md
```

#### log-message

Uses the debug:log action. It prints out the content of the previously read file to the logs. The `steps[id].output` is used to access the output of the referenced step.

```yaml
- id: log-message
  name: Log Message
  action: debug:log
  input:
    listWorkspace: false
    message: ${{ steps['read-file'].output.content }}
```
