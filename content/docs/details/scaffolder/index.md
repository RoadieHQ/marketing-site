---
title: Scaffolder
publishedDate: '2022-05-13T10:53:00.0Z'
description: Initialize projects and trigger automation from within Backstage. You can prompt parameter inputs and combine scaffolder actions in order to build a scaffolder template to run within Backstage.
---

# Overview
Imagine you’re an engineer looking to create a new microservice. You want to get started as quickly as possible, with minimal boilerplate and red-tape to jump through. At the same time, engineering organizations benefit from having consistency in production, and often put gates in place to enforce it.

Instead of creating blockers for engineering teams, you can use the Roadie scaffolder and quickly create new microservices, while helping to ensure that production remains mostly consistent.

Engineers can choose a pre-defined software template, fill out a few form fields to provide values like the name of the GitHub repo that the new service will occupy, and click a button to run the template and create a new service.

# Components of a Template
You can configure a Scaffolder _template_ to be triggered on demand by Backstage users. Your template contains one or more _steps_ which run sequentially during execution of a template. You may optionally specify all _steps_ while the template execution is running inside an ephemeral container that is destroyed after the execution completes.

A Scaffolder _template_ is a configurable process that will run one or more Scaffolder _steps_. The template will be run when a user visits the "Create Component" page in Backstage. `https://<tenant-name>.roadie.so/create`.

![create-a-new-component](./create-a-new-component.png)

Templates are defined by a Backstage Entity YAML file with a _Template_ kind and imported into the Backstage catalog.  You can create multiple templates, each of which can perform a different set of steps. For example, you can have one _template_ that creates a React application, and another that creates a serverless app.

Here is an example of a very basic Scaffolder _template_ that prompts the user for a name, and then prints back the text "Hello, name!"

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: hello-world-template
  title: Hello World
  description: Says Hello to a specified name.
spec:
  owner: backstage/techdocs-core
  type: service

  parameters:
    - title: You are about to say hello to your first Backstage Template
      required:
        - name
      properties:
        name:
          title: Name
          type: string
          description: Name to say hello to
          ui:autofocus: true
          ui:options:
            rows: 5

  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: 'Hello, {{ parameters.name }}!'
```

# Header Section

The header section is required for every _template_ and contains information to configure the task and show details about the task on the "Create Component" page.

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: hello-world-template
  title: Hello World
  description: Says Hello to a specified name.
spec:
  owner: default/engineering
  type: service
```

## apiVersion
This is a required field and should be set to `scaffolder.backstage.io/v1beta3`

## kind
A Scaffolder template is also an Entity in Backstage. In order to configure this entity as a template you must set the kind to `Template`


## metadata
The metadata field contains some data that appears on the template card that appears on the "Create Component" page.

## spec
The spec field contains `owner` and `type`. Owner refers to the Backstage group or user that owns the Scaffolder task e.g. `default/engineering`. Type refers to the type of template. It can be set to anything and appears on the scaffolder template card in the "Create Component" page.

# Parameters
The parameters is a list of parameter pages that can be prompted from the user when they run a template. Each array element contains the configuration for a single page of items to be filled by the user running the template. The parameter pages must contain `title`, `required` and `properties`.

```yaml
  ...
  parameters:
    - title: You are about to say hello to your first Backstage Template
      required:
        - name
      properties:
        name:
          title: Name
          type: string
          description: Name to say hello to
```

The `title` configures the text on the top of the page, `required` allows you to make specific fields mandatory and others optional. And `properties` provides a list of properties for the user to enter.

You can read more about parameter configuration in the official backstage docs here https://backstage.io/docs/features/software-templates/writing-templates.

# Steps
Steps define the actions that are taken by the scaffolder template when it is run as a task. The scaffolder initially creates a temporary directory referred to as the _workspace_, in which files are downloaded, generated, updated and pushed to some external system. Each step that is defined is run in order.

Parameters taken from the user earlier may be used in the action steps using the syntax `${{ parameters.name }}`.

## fetch:plain

Downloads content and places it in the workspace.

```yaml
steps
  - action: fetch:plain
    id: fetch-plain
    name: Fetch plain
    input:
      url: ./plain
```

Optionally, if you would prefer the data to be downloaded to a subdirectory in the workspace you may specify the 'targetPath' input option.

```yaml
steps
  - action: fetch:plain
    id: fetch-plain
    name: Fetch plain
    input:
      url: ./plain
      targetPath: fetched-data
```

## fetch:template

This downloads a directory containing templated files. It then renders all of the templates variables into the files and directory names and content, and places the result in the workspace.

```
steps
  - action: fetch:template
    id: fetch-template
    name: Fetch template
    input:
      url: ./template
      values:
        name: ${{ parameters.name }}
```

The templated files themselves can contain refererces to the values in the following way `${{ values.name }}`. It uses TODO figure out templating language name and link it here.

Optionally, if you would prefer the data to be downloaded to a subdirectory in the workspace you may specify the 'targetPath' input option.

```
steps
  - action: fetch:template
    id: fetch-template
    name: Fetch template
    input:
      url: ./template
      targetPath: fetched-data
      values:
        name: ${{ parameters.name }}
```

You can also choose to not template specific files downloaded by the task by using the `copyWithoutRender` option. It may use file paths or globs.

```
steps
  - action: fetch:template
    id: fetch-template
    name: Fetch template
    input:
      url: ./template
      copyWithoutRender:
        - README.md
        - src/**.ts
      values:
        name: ${{ parameters.name }}
```

If you would like to limit the templating to very specific files, you can optionally add the `.njk` extension to the files and use the `templateFileExtension` option.

```
steps
  - action: fetch:template
    id: fetch-template
    name: Fetch template
    input:
      url: ./template
      templateFileExtension: true
      values:
        name: ${{ parameters.name }}
```

## action:n
TODO

# Troubleshooting
Writing templates can be a little cumbersome at times. We have compiled a list of errors that we have seen in the past, that might help you determine the cause of your issue.

## Resource not accessible by integration
This error is referring to actions that interact GitHub. It means that the Roadie GitHub app is unable to read, create or update the resource/s that are being touched by the Scaffolder step.