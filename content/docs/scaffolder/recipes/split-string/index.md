---
title: Using the split function to process comma-separated strings
publishedDate: '2025-08-28'
description: An example template that uses the Nunjucks split filter to split a comma-separated string and process each value
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
   name: split-string-example
   title: Split comma-separated string and process each value
   description: This scaffolder takes a comma-separated string input and processes each value individually.
spec:
   owner: roadie
   type: service
   parameters:
      properties:
         things:
            title: Comma-separated list of things
            type: string
            description: Enter items separated by commas (e.g., "item1,item2,item3")
   steps:
      - id: log-each-string
        name: Log each string
        action: debug:log
        each: ${{ parameters.things | split(",") }}
        input:
           message: ${{ each.value }}
```

## Breakdown

### Parameters

This section configures the frontend for your template. The user provides a single string input that contains multiple values separated by commas.

```yaml
   things:
      title: Comma-separated list of things
      type: string
      description: Enter items separated by commas (e.g., "item1,item2,item3")
```

### Steps

#### debug:log with split function

This step demonstrates how to use the Nunjucks `split` filter to convert a comma-separated string into an array, then iterate over each value using the `each` keyword.

```yaml
- id: log-each-string
  name: Log each string
  action: debug:log
  each: ${{ parameters.things | split(",") }}
  input:
    message: ${{ each.value }}
```

The `split(",")` filter takes the input string and splits it at each comma, creating an array of individual strings. The `each` keyword then iterates over this array, making each value available as `each.value`.

### How it works

1. User enters: `"apple,banana,cherry"`
2. The `split(",")` filter converts it to: `["apple", "banana", "cherry"]`
3. The `each` iteration processes each item:
   - First iteration: `each.value = "apple"`
   - Second iteration: `each.value = "banana"`
   - Third iteration: `each.value = "cherry"`

## Use Cases

This pattern is useful for:
- Processing lists of repository names, service names, or component names
- Creating multiple resources based on a simple string input
- Converting user-friendly comma-separated input into actionable data

## Further reading

- You can also [use for loops to repeat scaffolder steps](/docs/scaffolder/recipes/loops-in-steps/) with array parameters
- Learn about [variables in scaffolder](/docs/scaffolder/recipes/variables-in-scaffolder/) for more complex data manipulation