---
title: Transform YAML files with JSONata
publishedDate: '2023-08-03'
description: An introduction template utilizing the roadiehq:utils:jsonata:yaml:transform
---

## Actions used

- `debug:log`
- `roadiehq:utils:fs:write`
- `roadiehq:utils:jsonata:yaml:transform`

You can check the available actions if you visit `/create/actions`.

## Walkthrough

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: yaml-jsonata-transform
  title: YAML JSONata transformation
  description: An example to showcase how to use the `roadiehq:utils:jsonata:yaml:transform` action to transform a YAML
spec:
  owner: group:default/engineering
  type: service

  parameters:
    - title: Inputs
      properties:
        data:
          title: Data in YAML format
          type: string
        expression:
          title: Expression
          type: string
  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: Template execution started

    - id: write
      name: Write
      action: roadiehq:utils:fs:write
      input:
        path: ./data.yaml
        content: ${{ parameters.data }}

    - id: transform
      name: transform
      action: roadiehq:utils:jsonata:yaml:transform
      input:
        path: ${{ steps['write'].output.path }}
        expression: ${{ parameters.expression }}

    - id: log
      name: Console.log
      action: debug:log
      input:
        message: |
          Result: `${{ steps['transform'].output.result }}`
```

## Breakdown

### Parameters

Here we use two parameters to get user input to create a sandbox to test out the power of this action.

The first parameter, `data` is used to get a YAML structured data to perform the jsonata transformations on.

The second parameter, `expression` is used to provide the JSONata expression that will be performed on the input that provided in the previous input field.

### Steps

#### debug:log

Uses the debug:log action to output a log message to the Backstage scaffolder UI. The message here is a general hard-coded message that indicates that the template execution has started.

```yaml
- id: log-message
  name: Log Message
  action: debug:log
  input:
    message: Template execution started
```

#### roadiehq:utils:fs:write

```yaml
- id: write
  name: Write
  action: roadiehq:utils:fs:write
  input:
    path: ./data.yaml
    content: ${{ parameters.data }}
```

We write the user input `data` into a temporary file. We will call this file `data.yaml` for this example. We need to write it to the workspace becuase the following action `roadiehq:utils:jsonata:yaml:transform` performs the transform on an actual file.

#### roadiehq:utils:jsonata:yaml:transform

```yaml
- id: transform
  name: transform
  action: roadiehq:utils:jsonata:yaml:transform
  input:
    path: ${{ steps['write'].output.path }}
    expression: ${{ parameters.expression }}
```

It has two required inputs `path` and `expression` in this example template path coming from the output of the previous step and expression is the user input. The `input.path` is going to be the file that contains the data that we perform the JSONata transformation on. The `input.expression` is going the be the JSONata expression we run on the data.

To demonstrate the result of this action let's say we execute this template with the following user input:

- `input.path` = Name: Yaml Jones
- `input.expression` = "Name"

#### debug:log

```yaml
- id: log
  name: Console.log
  action: debug:log
  input:
    message: |
      Result: `${{ steps['transform'].output.result }}`
```

This action will log the result of the previous step(`tranform`). The output of this step will look very similar to the following:

```txt
2 2023-08-07T01:22:25.738Z info: {
3  "message": "Result: `Yaml Jones\n`\n"
4 }
```
