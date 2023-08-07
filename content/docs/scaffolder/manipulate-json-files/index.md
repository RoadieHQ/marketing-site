---
title: Manipulate a JSON file
publishedDate: '2023-08-03'
description: An introduction template utilizing the JSON editing actions
---

## Actions used

- `debug:log`
- `roadiehq:utils:fs:write`
- `roadiehq:utils:merge`
- `roadiehq:utils:fs:parse`
- `roadiehq:utils:serialize:json`

You can check the available actions if you visit `/create/actions`.

## Walkthrough

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: json-file-mutations
  title: JSON file manipulations
  description: Demonstrates how to merge an existing JSON object into a JSON file in the workspace
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
        path: ./template.json
        content: >
          {
            "existsing": "content",
            "nested": {
              "one" :{
                "kinda": "deep"
                }
            }
          }

    - id: merge
      name: Merge
      action: roadiehq:utils:merge
      input:
        path: ./template.json
        content: >
          {"foo": "bar"}

    - id: parse
      name: read file
      action: roadiehq:utils:fs:parse
      input:
        path: ./template.json
        parser: json

    - id: serialize
      name: Serialize
      action: roadiehq:utils:serialize:json
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
    path: ./template.json
    content: >
      {
        "existsing": "content",
        "nested": {
          "one": {
            "kinda: "deep"
          }
        }
      }
```

We use this action to create a test JSON file into the root of the workspace with the content:

```json
{
  "existsing": "content",
  "nested": {
    "one": {
      "kinda": "deep"
    }
  }
}
```

#### roadiehq:utils:merge

```yaml
- id: merge
  name: Merge
  action: roadiehq:utils:merge
  input:
    path: ./template.json
    content: >
      {"foo": "bar"}
```

This action will merge the `input.content` into the file you specify in the `input.path` property. After the merge our `template.json` file will look like this:

```json
{
  "existsing": "content",
  "nested": { "one": { "kinda": "deep" } },
  "foo": "bar"
}
```

#### roadiehq:utils:fs:parse

```yaml
- id: parse
  name: read file
  action: roadiehq:utils:fs:parse
  input:
    path: ./template.json
    parser: json
```

We use this action to parse the file specified at `input.path` because we know it is a JSON file we can use the `input.parser` with the value `json`. This will make the content of the file to be parsed into an object properly.

#### roadiehq:utils:serialize:json

```yaml
- id: serialize
  name: Serialize
  action: roadiehq:utils:serialize:json
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

This action will log the output of the previous `roadiehq:utils:serialize:json` action with the id of `serialize`.
