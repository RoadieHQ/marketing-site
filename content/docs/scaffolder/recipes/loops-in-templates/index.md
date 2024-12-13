---
title: Using for Loops in Templates
publishedDate: '2023-12-11'
description: An example template that uses Nunjucks builtin looping functionality
---

## Template

## Actions used

- [`debug:log`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)
- [`fetch:template`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/template.ts)
- [`roadiehq:utils:fs:parse`](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/fs/parseFile.ts)

You can check the available actions if you visit `/create/actions`.

## Walkthrough

### Example Template

```yaml
---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
   name: loop-template-example
   title: Loop through items in a template
   description: This scaffolder takes user input and loops through those into a template file.
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
      - id: fetch-template
        name: Fetch catalog-info file template
        action: fetch:template
        input:
           url: ./skeleton
           replace: true
           values:
              things: ${{ parameters.things }}
      - id: parse
        name: Parse file
        action: roadiehq:utils:fs:parse
        input:
           path: 'file.md'

      - id: log-message
        name: Log Parsed Contents
        action: debug:log
        input:
           message: "contents: ${{ steps['parse'].output.content }}!"
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

#### fetch:template

The `fetch:template` action retrieves a folder from the location `./skeleton`, which resides in the same repository as the template. It passes on the parameters defined in the template as an array of strings to the template. The values passed in to the template are usable under a value called `things`. 

```yaml
- id: fetch-template
  name: Fetch catalog-info file template
  action: fetch:template
  input:
     url: ./skeleton
     replace: true
     values:
        things: ${{ parameters.things }}
```

#### roadiehq:utils:fs:parse

Parses the contents of a file called `file.md` from the workspace. The contents are stored into an output value called `content`. 

```yaml
- id: parse
  name: Parse file
  action: roadiehq:utils:fs:parse
  input:
     path: 'file.md'
```

#### debug:log

Logs the contents of the file which was parsed in the previous steps. Uses the output from the `parse` step and retrieves value called `content` from its output.

```yaml
- id: log-message
  name: Log Parsed Contents
  action: debug:log
  input:
     message: "contents: ${{ steps['parse'].output.content }}!"
```

### The skeleton folder

The skeleton folder contains a single file called `file.md`. The contents of this file are as follows:
```md

{%- if(values.things.length) %}
A List of items
  {%- for thing in values.things %}
  - ${{ thing }}
  {%- endfor %}
{%- endif %}

```

The file is a Nunjucks template file which expects a collection of `things` to be passed into it. If the passed in value exists and has a length (larger than 0), it will loop over the passed in values and list them out in a markdown list format.

## Further reading

- You can also [repeat a step for each entry in an array](/docs/scaffolder/loops-in-steps/).
