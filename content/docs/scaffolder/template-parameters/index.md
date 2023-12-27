---
title: Scaffolder Template Parameters
publishedDate: '2023-09-05T10:53:00.0Z'
description:  How to add and work with parameters to your Backstage Scaffolder templates
---

## Parameters

The parameters property in a scaffolder template yaml file is a list of parameters that can be prompted from the user when they run a template. 

Each array element contains the configuration for a single page of items to be filled by the user running the template. Each parameter page must contain `title` and `properties`.

The parameters yaml is based on [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/). You can find the available syntax options there.

You can choose to break up the parameter prompting into `form steps` or collect all the parameters in one single step.

There are also prebuilt widgets to use for common parameters like selecting an owner.

### Field descriptions

You can display a more human description to a field value by using `title` and `description`

```yaml
parameters:
  properties:
    name:
      type: string
      title: 'Name'
      description: 'Name to say hello to'
```

### Previewing your form parameters

Template Preview, which is accessible via `Tools > Template Preview` provides a preview page for templates, where you can see a live preview of the template form. This is done in order to provide an easy way to preview scaffolder template form UIs without running your own local instance of the plugin or committing changes to the template.

![parameters-preview](./parameters-preview.png)


### Types

Each parameter can be one of a few types: `string`, `number`, `array` or `object`. 

Here is the most basic example:

```yaml
parameters:
  properties:
    name:
      type: string
```

#### `string`

You may collect text data from the user by using the string type. Here is the most basic example. It will prompt the user for a name.

```yaml
parameters:
  properties:
    name:
      type: string
```

#### `number`

You can allow the user to enter a number using the `number` type:

```yaml
parameters:
  properties:
    size:
      type: number
```

#### `object`

The `object` allows the collection of more complex types of data from the user. It contains the `properties` option to add variables to the object as follows:

```yaml
parameters:
  properties:
    person:
      type: object
      properties:
        name:
          type: string
        age:
          type: number
```

You may choose to make an object property to be mandatory using the `required` property.

```yaml
parameters:
  properties:
    person:
      type: object
      required:
        - name
      properties:
        name:
          type: string
        age:
          type: number
```

#### `array`

You can prompt for an array of properties using the array option. The `items` option can be any type: `array`, `object`, `string` or `number` as you like.

```yaml
parameters:
  properties:
    languages:
      type: array
      items:
        type: string
```

If you would like to prompt the user to add entity tags, you can use the `ui:field: EntityTagPicker` as shown below.

```yaml
parameters:
  properties:
    entityTags:
      type: array
      ui:field: EntityTagsPicker
```


### Options and Defaults

If you would like to default the value of a field you can use the `default` option:

```yaml
parameters:
  properties:
    name:
      type: string
      default: 'world!'
```

If you would like to prompt the users for a fixed list of options, you may use the `enum` option.

```yaml
parameters:
  properties:
    size:
      type: number
      enum: [50, 100, 200]
```

### Prebuild Widgets

#### Entity picker

You can prompt the user with a list of catalog entities using the `ui:field: EntityPicker` option as follows:

```yaml
parameters:
  properties:
    entity:
      type: string
      ui:field: EntityPicker
```

#### Owned entity picker

Alternatively if you would like the user to only select entities that they already own, you might want to use the OwnedEntityPicker.

```yaml
parameters:
  properties:
    ownedEntity:
      type: string
      ui:field: OwnedEntityPicker
```

#### Entity name picker

If you would like a little validation when the user enters an Entity name, you can use the EntityNamePicker. It will prevent the user from entering an entity name that is not an acceptable entity name.

```yaml
parameters:
  properties:
    ownedEntity:
      type: string
      ui:field: EntityNamePicker
```

#### Repository picker

The respository picker can allow the user to select the name and location of a new repository. The picker restricts the target location of the repository to make it a little easier for the user to select a target location.

The following example, will only allow the user to enter a new repository name targeting the GitHub using the AcmeInc organization.

```yaml
parameters:
  properties:
    repoUrl:
      type: string
      ui:field: RepoUrlPicker
      ui:options:
        allowedHosts:
          - github.com
        allowedOwners:
          - AcmeInc
```

The `RepoUrlPicker` uses the `allowedHosts` to decide how to build the repo url output value. If you use `bitbucket.org` it will output a valid repo url for Bitbucket.

```yaml
parameters:
  properties:
    repoUrl:
      type: string
      ui:field: RepoUrlPicker
      ui:options:
        allowedHosts:
          - bitbucket.org
```

#### Owner picker

The owner picker, allows the user to select a user / group in the Backstage catalog. e.g.

```yaml
parameters:
  properties:
    owner:
      type: string
      ui:field: OwnerPicker
```

This returns a variable in the format `group:<namespace>/<group-or-user-name>`. You can extract the entity name using replace when you refer to the parameter like so: `${{ parameters.owner | replace(\"group:.*/\", \"\") }}`

#### Picker from external API source

This custom scaffolder field, makes an API call to the Backstage backend and allows the result to be rendered to a list.

```yaml
parameters:
  properties:
    custom:
      title: custom
      type: string
      description: Custom field from external API

      # Use `SelectFieldFromApi` to configure the select field for the entry.
      ui:field: SelectFieldFromApi

      ui:options:
        # The Path on the Backstage API and the parameters to fetch the data for the dropdown
        path: 'catalog/entity-facets'
        params:
          facet: 'kind'

        # This selects the array element from the API fetch response. It finds the array with the name kind
        # under the facets object
        arraySelector: 'facets.kind'

        # (Optional) This selects the field in the array to use for the value of each select item. If its not specified
        # it will use the value of the item directly.
        valueSelector: 'count'
        # (Optional) This selects the field in the array to use for the label of each select item.
        labelSelector: 'value'
```

### Form Steps

It might be jarring for your user to enter a lot of parameters one after another on the same page, especially if some properties require validation. As such Backstage have provided form steps.

You can make use of form steps using the following example.

```yaml
parameters:
  - title: 'Fill in the Name'
    properties:
      name:
        type: string
  - title: 'Fill in the Age'
    properties:
      age:
        type: number
```

### Input Validation

You can use [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/) to perform validation on input fields using a regex or character counts.

```yaml
parameters:
  properties:
    name:
        title: Simple text input
        type: string
        description: Description about input
        maxLength: 8
        pattern: '^([a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$'
        ui:autofocus: true
        ui:help: 'Hint: additional description...'
```

### Outputs

Parameters can be retrieved later on by steps using parameter outputs. Here is an example of a parameter `name` being used by a `debug:log` step.

```yaml
parameters:
  properties:
    name:
      type: string
steps:
  - id: log-message
    name: Log Message
    action: debug:log
    input:
      message: 'Hello, ${{ parameters.name }}!'
```

If you need to reference elements of an array parameter you can refer to them using the following syntax:

```yaml
steps:
  - id: log-message
    name: Log Message
    action: debug:log
    input:
      message: 'Hello, ${{ parameters.names[0] }}!'
```

An `object` parameter values can be reference in the way you might expect.

```yaml
steps:
  - id: log-message
    name: Log Message
    action: debug:log
    input:
      message: 'Hello, ${{ parameters.person.name }}!'
```

### More Reading

You can read more about parameter configuration in the official backstage docs [here](https://backstage.io/docs/features/software-templates/writing-templates).

