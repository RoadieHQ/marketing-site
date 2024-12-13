---
title: Create RFC template
publishedDate: '2022-10-28'
description: An introduction template to creating an RFC
---

## Template

## Actions used

- [`debug:log`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)
- [`fetch:template`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/template.ts)
- [`fs:rename`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/rename.ts)
- [`publish:github:pull-request`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/publish/githubPullRequest.ts)

You can check the available actions if you visit `/create/actions`.

## Walkthrough

You can use this template by registering it from [roadie-demo/scaffolder-examples](https://github.com/roadie-demo/scaffolder-examples/tree/main/create-rfc/template.yaml) repo

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: create-rfc-template
  title: Create a new RFC flavored markdown document
  description: Create a new RFC flavored markdown document
spec:
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
    - title: Repository to place document
      properties:
        repoUrl:
          content:
            type: string
          description: Name of repository
          ui:field: RepoUrlPicker
          ui:options:
            allowedHosts:
              - github.com

  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: Creating ${{ parameters.rfcNumber }}/index.md

    - id: fetch-template
      action: fetch:template
      input:
        url: https://github.com/roadie-demo/scaffolder-examples/tree/main/create-rfc/skeleton
        templateFileExtension: true
        targetPath: docs/rfcs/${{ parameters.rfcNumber }}
        values:
          rfcNumber: ${{ parameters.rfcNumber }}
          rfcTitle: ${{ parameters.rfcTitle }}
          abstract: ${{ parameters.abstract }}

    - id: move-rfc
      action: fs:rename
      input:
        files:
          - from: docs/rfcs/${{ parameters.rfcNumber }}/template.md
            to: docs/rfcs/${{ parameters.rfcNumber }}/index.md

    - id: create-pull-request
      name: create-pull-request
      action: publish:github:pull-request
      input:
        repoUrl: ${{ parameters.repoUrl }}
        branchName: RFC-${{ parameters.rfcNumber }}_${{ parameters.rfcTitle | replace(" ", "-") | replace("\"", "") | replace ("'", "") | lower }}
        title: RFC-${{ parameters.rfcNumber }} - ${{ parameters.rfcTitle }}
        description: ${{ parameters.abstract }}
```

## Breakdown

### Parameters

This section configures the frontend for your template. Essentially these values will be provided from the backstage ui to the template.

1. param
   This renders 3 separate input fields for the template.

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

2. param
   This uses a custom ui:field option to provide a repository url.

```yaml
- title: Repository to place document
  properties:
    repoUrl:
      content:
        type: string
      description: Name of repository
      ui:field: RepoUrlPicker
      ui:options:
        allowedHosts:
          - github.com
```

### Steps

#### debug:log

Uses the debug:log action to output a log message to the backstage scaffolder UI. The message text is coming from the rfcNumber parameter that is provided by the user.

```yaml
- id: log-message
  name: Log Message
  action: debug:log
  input:
    listWorkspace: false
    message: Creating ${{ parameters.rfcNumber }}/index.md
```

#### fetch:template

Uses the fetch:template. It fetches the template skeleton from the hardcoded URL and puts everything into the `docs/rfcs/<rfcnumber>` folder.
The provided values object will be used to replace the values inside the skeleton template by nunjucks.

```yaml
- id: fetch-template
  action: fetch:template
  input:
    url: https://github.com/roadie-demo/scaffolder-examples/tree/main/create-rfc/skeleton
    templateFileExtension: true
    targetPath: docs/rfcs/${{ parameters.rfcNumber }}
    values:
      rfcNumber: ${{ parameters.rfcNumber }}
      rfcTitle: ${{ parameters.rfcTitle }}
      abstract: ${{ parameters.abstract }}
```

#### fs:rename

Uses the fs:rename action. It essentially moves a file inside the current workspace.

```yaml
- id: move-rfc
  action: fs:rename
  input:
    files:
      - from: docs/rfcs/${{ parameters.rfcNumber }}/template.md
        to: docs/rfcs/${{ parameters.rfcNumber }}/index.md
```

#### publish:github:pull-request

Uses the publish:github:pull-request action. It opens a PR with the current workspace as the payload. Make sure your `branchName` is unique each time you run this action.

```yaml
- id: create-pull-request
  name: create-pull-request
  action: publish:github:pull-request
  input:
    repoUrl: ${{ parameters.repoUrl }}
    branchName: RFC-${{ parameters.rfcNumber }}_${{ parameters.rfcTitle | replace(" ", "-") | replace("\"", "") | replace ("'", "") | lower }}
    title: RFC-${{ parameters.rfcNumber }} - ${{ parameters.rfcTitle }}
    description: ${{ parameters.abstract }}
```
