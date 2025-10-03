---
title: Using for Loops to repeat scaffolder steps
publishedDate: '2024-01-26'
description: An example template that uses the Scaffolder step `each` key word to repeat a step
---

## Template

## Actions used

- [`debug:log`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)

You can check the available actions if you visit `/create/actions`.

## Walkthrough

### Example Template

```yaml
---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: loop-template-example
  title: Loop through items to repeat a scaffolder step
  description: This scaffolder takes user input and loops through those into a log output.
spec:
  owner: roadie
  type: service
  parameters:
    properties:
      things:
        title: List of things
        type: array
        items:
          type: string
          title: A thing
  steps:
    - id: log-message
      name: Log Parsed Contents
      each: ${{ parameters.things }}
      action: debug:log
      input:
        message: 'contents: ${{ each.value }}!'
```

## Breakdown

### Parameters

This section configures the frontend for your template. Essentially these values will be provided from the backstage ui to the template.

This renders a list of input fields where you can input a string value. The value of these string is stored into an array which is called `things`

```yaml
things:
  title: List of things
  type: array
  items:
    type: string
    title: A thing
```

### Steps

#### debug:log

Logs the contents of the file which was parsed in the previous steps. Uses the form input `things` and outputs a debug log line for each value.

```yaml
- id: log-message
  name: Log Parsed Contents
  each: ${{ parameters.things }}
  action: debug:log
  input:
    message: 'contents: ${{ each.value }}!'
```

## Further reading

- You can also [make use of looping in template files](/docs/scaffolder/loops-in-templates/).
