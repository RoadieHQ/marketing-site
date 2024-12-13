---
title: Manipulate YAML file
publishedDate: '2023-08-03'
description: An introduction template utilizing the YAML editing actions
---

## Actions used

- `debug:log`
- `roadiehq:utils:fs:write`
- `roadiehq:utils:merge`
- `roadiehq:utils:fs:parse`
- `roadiehq:utils:serialize:yaml`

You can check the available actions if you visit `/create/actions`.

## Walkthrough

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: yaml-file-mutations
  title: YAML file manipulations
  description: Demonstrates how to merge an existing YAML object into a YAML file in the workspace
spec:
  owner: group:default/engineering
  type: service

  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: Template execution started

    - id: create-file
      name: Create file
      action: roadiehq:utils:fs:write
      input:
        path: ./template.yaml
        content: >
          extend:
            me: i am a random yaml
            this: will be extended by the scaffolder action

    - id: merge
      name: Merge
      action: roadiehq:utils:merge
      input:
        path: ./template.yaml
        content: >
          foo: bar

    - id: parse
      name: read file
      action: roadiehq:utils:fs:parse
      input:
        path: ./template.yaml
        parser: yaml

    - id: serialize
      name: Serialize
      action: roadiehq:utils:serialize:yaml
      input:
        data: ${{ steps['parse'].output.content }}

    - id: log
      name: Console.log
      action: debug:log
      input:
        message: |
          Content: `${{ steps['serialize'].output.serialized }}`
```

## Breakdown

### Parameters

We didnt use any parameters for this demonstration as we don't need any user input to showcase the power of these actions.

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
- id: create-file
  name: Create file
  action: roadiehq:utils:fs:write
  input:
    path: ./template.yaml
    content: >
      extend:
        me: i am a yaml
        this: will be extended by the scaffolder action
```

We use this action to create a YAML file into the root of the workspace with the content:

```yaml
# template.yaml
extend:
  me: i am a yaml
  this: will be extended by the scaffolder action
```

#### roadiehq:utils:merge

```yaml
- id: merge
  name: Merge
  action: roadiehq:utils:merge
  input:
    path: ./template.yaml
    content: >
      foo: bar
```

This action will merge the `input.content` into the file you specify in the `input.path` property. After the merge our template.yaml file will look like this:

```yaml
# template.yaml
extend:
  me: i am a yaml
  this: will be extended by the scaffolder action
foo: bar
```

#### roadiehq:utils:fs:parse

```yaml
- id: parse
  name: read file
  action: roadiehq:utils:fs:parse
  input:
    path: ./template.yaml
    parser: yaml
```

We use this action to parse the file specified at `input.path` because we know it is a YAML file we can use the `input.parser` with the value `yaml`. This will make the content of the file to be parsed into an object.

#### roadiehq:utils:serialize:yaml

```yaml
- id: serialize
  name: Serialize
  action: roadiehq:utils:serialize:yaml
  input:
    data: ${{ steps['parse'].output.content }}
```

We use this action to serialize the content of the output of `roadiehq:utils:fs:parse` action so we can write it out to the console of the scaffolder.

#### debug:log

```yaml
- id: log
  name: Console.log
  action: debug:log
  input:
    message: |
      Content: `${{ steps['serialize'].output.serialized }}`
```

This action will log the output of the previous `roadiehq:utils:serialize:yaml` action with the id of `serialize`.
