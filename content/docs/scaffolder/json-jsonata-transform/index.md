---
title: Transform JSON files with JSONata
publishedDate: '2023-08-03'
description: An introduction template utilizing the roadiehq:utils:jsonata:json:transform
---

## Actions used

- `debug:log`
- `roadiehq:utils:fs:write`
- `roadiehq:utils:jsonata:json:transform`

You can check the available actions if you visit `/create/actions`.

## Walkthrough

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: json-jsonata-transform
  title: JSONata transformation
  description: An example to showcase how to use the `roadiehq:utils:jsonata:json:transform` action to transform a JSON file
spec:
  owner: group:default/engineering
  type: service

  parameters:
    - title: Inputs
      properties:
        data:
          title: Data in JSON format
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
        path: ./data.json
        content: ${{ parameters.data }}

    - id: transform
      name: transform
      action: roadiehq:utils:jsonata:json:transform
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

The first parameter, `data` is used to get a JSON structured data to perform the JSONata transformations on.

The second parameter, `expression` is used to provide the JSONata expression that will be performed on the input that provided in the previous input field.

### Steps

#### debug:log

Uses the debug:log action to output a log message to the backstage scaffolder UI. The message here is a general hard-coded message that indicates that the template execution has started

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
    path: ./data.json
    content: ${{ parameters.data }}
```

We write the user input `data` into a temporary file. We will call this file `data.json` for this example. We need to write it to the workspace becuase the following action `roadiehq:utils:jsonata:json:transform` performs the transform on an actual file.

#### roadiehq:utils:jsonata:json:transform

```yaml
- id: transform
  name: transform
  action: roadiehq:utils:jsonata:json:transform
  input:
    path: ${{ steps['write'].output.path }}
    expression: ${{ parameters.expression }}
```

It has two required inputs `path` and `expression` in this example template path coming from the output of the previous step and expression is the user input. The `input.path` is going to be the file that contains the data that we perform the JSONata transformation on. The `input.expression` is going the be the JSONata expression we run on the data.

To demonstrate the result of this action let's say we execute this template with the following user input:

- `input.path` = '{"Name" : "Foo Bar"}'
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

This action will log the result of the previous step. The output of this step will look very similar to the following:

```txt
4 2023-08-07T01:08:59.852Z info: {
5  "message": "Result: `\"Foo Bar\"`\n"
6 }
```
