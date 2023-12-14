---
title: Assigning Scaffolder Variables
publishedDate: '2023-12-14'
description: An example template displaying how to use JSONata to assign variables into Scaffolder context  
---

## Template

## Actions used

- [`debug:log`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)
- [`roadiehq:utils:jsonata`](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/jsonata/jsonata.ts)

You can check the available actions if you visit `/templates/actions`.

## Walkthrough

### Example Template

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: variable-assignment
  description: Uses JSONata hackery to assign variables to the template execution context
spec:
  type: service
  owner: user:guest
  parameters:
    properties:
      input:
        title: "Add a string separated by :"
        type: string
  steps:
    - id: log-result
      name: Display input params
      action: debug:log
      input:
        message: "${{ parameters.input }}"
    - id: assign-variables
      name: Assign variables from parameters
      action: roadiehq:utils:jsonata
      input:
        data:
          item: ${{ parameters.input }}
        expression: "(
                        $name := $substringBefore($.item, ':');
                        $id := $substringAfter($.item, ':');
                        {
                          'name': $name,
                          'id': $id
                        }
                      )"
    - id: log-result
      name: Display retrieved params
      action: debug:log
      input:
        message: "name ${{ steps['assign-variables'].output.result.name }} id ${{ steps['assign-variables'].output.result.id }}"

```

## Breakdown

### Parameters

This section configures the frontend for your template. Essentially these values will be provided from the backstage ui to the template. In this case expected value is a string, with an instruction to have a `:` character somewhere in the string

```yaml
  input:
    title: "Add a string separated by :"
    type: string
```

### Steps

#### debug:log

As a first step we simply log the input that user of this template has put in.

```yaml
- id: log-result
  name: Display input params
  action: debug:log
  input:
    message: "${{ parameters.input }}"
```

#### roadiehq:utils:jsonata

The `roadiehq:utils:jsonata` step is the meat of this simple template recipe. We use the JSONata action to take a constructed object input in the `data` input field. This `data` input contains the parameter that user has put in via the UI when they are running the scaffolder template. this allows us to construct an object that JSONata can work on.  

The `expression` input option takes in a JSONata expression which allows us to use the JSONata function context. This allows us to assign variables and construct a return JSON object which then can be used on other scaffolder steps. For more information about JSONata variable binding and functions in general, take a look at the docs in: https://docs.jsonata.org/programming#variable-binding.

```yaml
- id: assign-variables
  name: Assign variables from parameters
  action: roadiehq:utils:jsonata
  input:
    data:
      item: ${{ parameters.input }}
    expression: "(
                    $name := $substringBefore($.item, ':');
                    $id := $substringAfter($.item, ':');
                    {
                      'name': $name,
                      'id': $id
                    }
                  )"
```

#### debug:log

Finally on the last step we log the contents of the "variables", output result values, that we have bound to the JSONata steps context and can use on other scaffolder steps.

```yaml
- id: log-result
  name: Display retrieved params
  action: debug:log
  input:
    message: "name ${{ steps['assign-variables'].output.result.name }} id ${{ steps['assign-variables'].output.result.id }}"
```
