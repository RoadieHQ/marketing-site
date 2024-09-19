---
title: Scaffolder Actions Directory
publishedDate: '2024-08-08'
description: Directory of available scaffolder actions
---


## Directory of available scaffolder actions

In this page you can find a directory of some available Scaffolder actions and their examples. You can find a full list of available actions to your Roadie instance by visiting the following page from within Roadie:

`https://<tenant-name>.roadie.so/templates/actions`

| Category            | Name                                            | Description                                                                                                                                                                                                | Source                                                                                                                                                                               | Inputs                                                                                             |
|---------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Downloading Content | [fetch:plain](#fetchplain)                      | Downloads content and places it in the workspace.                                                                                                                                                          | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/plain.ts)                  | url,targetPath,token                                                                               |
| Downloading Content | [fetch:template](#fetchtemplate)                | Downloads a directory containing templated files using [nunjucks](https://mozilla.github.io/nunjucks/). It then renders all the template variables into the files, and places the result in the workspace. | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/template.ts                | url,targetPath,token,values,copyWithoutTemplating,cookiecutterCompat,templateFileExtension,replace |
| Downloading Content | [fetch:plain:file](#fetchplainfile)             | Downloads single file and places it in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.                                                                          | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/plainFile.ts)              | url,targetPath,token                                                                               |
| HTTP Requests       | [http:backstage:request](#httpbackstagerequest) | Runs an HTTP request against the Backstage Backend API and handles the response.                                                                                                                           | [@roadiehq/scaffolder-backend-module-http-request](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-http-request) | method*,path*,headers,params,body,logRequestPath,continueOnBadResponse                             |
| Debugging           | [debug:log](#debuglog)                          | Log a message to the UI output.                                                                                                                                                                            | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)                    | message*,listWorkspace                                                                             |
| Debugging           | [debug:wait](#debugwait)                        | Waits for a certain period of time.                                                                                                                                                                        | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/wait.ts)                   | minutes,seconds,miliseconds                                                                        |
| Catalog             | [catalog:register](#catalogregister)            | Registers an entity in the catalog.                                                                                                                                                                        | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/register.ts)             | (catalogInfoUrl*,optional) (repoContentsUrl*,catalogInfoPath,optional)                             |
| Catalog             | [catalog:write](#catalogwrite)                  | Writes the catalog-info.yaml for your template                                                                                                                                                             | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/write.ts)                | filePath,entity*                                                                                   |
| Catalog             | [catalog:fetch](#catalogfetch)                  | Fetches an entity or entities from the catalog by entity reference(s).                                                                                                                                     | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/fetch.ts)                | entityRef,entityRefs,optional,defaultKind,defaultNamespace                                         |
| File Operations     | [fs:delete](#fsdelete)                          | Deletes files and directories in the workspace                                                                                                                                                             | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/delete.ts)            | files*                                                                                             |
| File Operations     | [fs:rename](#fsrename)                          | Renames files and directories in the workspace, essentially moving them.                                                                                                                                   | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/rename.ts)            | files*                                                                                             |
| File Operations     | [fs:append](#fsappend)                          | Adds text to the end of an existing file in the workspace.                                                                                                                                                 | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/append.ts)            | file*,text*                                                                                        |
| File Operations     | [fs:read](#fsread)                              | Reads a file from the workspace and outputs its content to be used in a subsequent step.                                                                                                                   | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/read.ts)              | path*                                                                                              |
|                     |                                                 |                                                                                                                                                                                                            |                                                                                                                                                                                      |                                                                                                    |
|                     |                                                 |                                                                                                                                                                                                            |                                                                                                                                                                                      |                                                                                                    |
|                     |                                                 |                                                                                                                                                                                                            |                                                                                                                                                                                      |                                                                                                    |
|                     |                                                 |                                                                                                                                                                                                            |                                                                                                                                                                                      |                                                                                                    |
|                     |                                                 |                                                                                                                                                                                                            |                                                                                                                                                                                      |                                                                                                    |

## Download content

### `fetch:plain`

Downloads directory content and places it in the workspace.

```yaml
steps:
  - action: fetch:plain
    id: fetch-plain
    name: Fetch plain
    input:
      url: ./plain
```

Optionally, if you would prefer the data to be downloaded to a subdirectory in the workspace you may specify the 'targetPath' input option.

```yaml
steps:
  - action: fetch:plain
    id: fetch-plain
    name: Fetch plain
    input:
      url: ./plain
      targetPath: fetched-data
```

#### Outputs
None


### `fetch:plain:file`

Downloads single file and places it in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.

```yaml
steps:
  - action: fetch:plain:file
    id: fetch-plain-file
    name: Fetch plain file
    input:
      url: ./plain.json
```

#### Outputs
None


### `fetch:template`

This downloads a directory containing templated files. It then renders all the template variables into the files and directory names and content, and places the result in the workspace.

```yaml
steps:
  - action: fetch:template
    id: fetch-template
    name: Fetch template
    input:
      url: ./template
      values:
        name: ${{ parameters.name }}
```

The templated files themselves can contain references to the values in the following way `${{ values.name }}`. It uses the nunjucks templating language. More details can be found [here](https://mozilla.github.io/nunjucks/).

i.e.
`./template/README.md`

```
# ${{ values.name }} service

This is a service Readme example. Please update me.
```

Optionally, if you would prefer the data to be downloaded to a subdirectory in the workspace you may specify the 'targetPath' input option.

```yaml
steps:
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

```yaml
steps:
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

```yaml
steps:
  - action: fetch:template
    id: fetch-template
    name: Fetch template
    input:
      url: ./template
      templateFileExtension: true
      values:
        name: ${{ parameters.name }}
```

#### Outputs

The `fetch:template` action does not output any data.

---

## HTTP Requests

### `http:backstage:request`

This action allows the Scaffolder task to run an HTTP request against the Backstage Backend API and handle the response. It can be useful for extending the scaffolder to call out to third party APIs. You can do this by configuring a proxy and then calling the proxy with this action.

The path should always point to a proxy entry with the following format: `/proxy/<proxy-path>/<external-api-path>` - i.e.: `/proxy/snyk/org/<some-org>/projects` or `/proxy/circleci/api/projects` (NB: the CircleCI proxy path is `circleci/api/` but Snyk is just `snyk/`)

```yaml
steps:
  - action: http:backstage:request
    id: http-request
    name: Create a thing on the acme service
    input:
      method: GET
      path: '/proxy/snyk/org/<some-org>/project/<some-project-id>'
```

You can optionally add request `params`.

```yaml
steps:
  - action: http:backstage:request
    id: http-request
    name: Create a thing on the acme service
    input:
      method: POST
      path: '/proxy/acme/thing'
      params:
        state: 'bar'
```

The `headers` parameter allows setting headers on the request:

```yaml
steps:
  - action: http:backstage:request
    id: http-request
    name: Create a thing on the acme service
    input:
      method: GET
      path: '/proxy/circleci/api/projects'
    headers:
      Accept: 'application/json'
```

The `body` param allows you to set a request body. This is most likely going to be useful for `POST` requests.

```yaml
steps:
  - action: http:backstage:request
    id: http-request
    name: Create a thing on the acme service
    input:
      method: POST
      path: '/api/proxy/acme/thing'
      body: 'thingname=abc1'
```

You can also have the action generate a `json` formatted body by setting a custom "Content-Type" header to "application/json" and then providing an object to the `body` param.

```yaml
steps:
  - action: http:backstage:request
    id: http-request
    name: Create a thing on the acme service
    input:
      method: POST
      path: '/api/proxy/acme/thing'
      headers:
        'Content-Type': 'application/json'
      body:
        thingname: 'foo'
```

#### Inputs:

| key                     | description                                                                                                                  | value                                                         | example                                                                          |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|----------------------------------------------------------------------------------|
| `method`                | The method type of the request                                                                                               | 'GET','HEAD','OPTIONS','POST','UPDATE','DELETE','PUT','PATCH' | GET                                                                              |
| `path`                  | The url path you want to query                                                                                               | `string`                                                      | '/proxy/snyk/org/${{ parameters.orgName }}/projects/${{ parameters.projectId }}' |
| `headers`               | The headers you would like to pass to your request                                                                           | `object`                                                      | Accept: application/json                                                         |
| `params`                | The query parameters you would like to pass to your request                                                                  | `object`                                                      | kind: Component                                                                  |
| `body`                  | The body you would like to pass to your request                                                                              | 'object','string','array'                                     | type: TEST                                                                       |
| `logRequestPath`        | Option to turn request path logging off. Defaults to `true`                                                                  | `boolean`                                                     | false                                                                            |
| `continueOnBadResponse` | Return response code and body and continue to next scaffolder step if the response status is 4xx or 5xx. Defaults to `false` | `boolean`                                                     | true                                                                             |


#### Outputs

| Name    | Description                                                    | Type     |
| ------- |----------------------------------------------------------------|:---------|
| code    | Status code of the http response                               | `string` |
| headers | Object containing all of the response headers and their values | `object` |
| body    | Body of the response. If content-type header is `application/json` this will be a parsed object. Otherwise, it will contain an object with a single param `message` containing a string representing the body of the response.| `object`  |

---

### Debugging

### `debug:log`

Use the `debug:log` action to print some information to the task console.

```yaml
steps:
  - action: debug:log
    id: debug-log
    name: Log Hello World
    input:
      message: 'Hello, World!'
```

#### Inputs:
- `message`: Text to log in the Backstage UI. You can log variables like so: 'Hello, ${{ parameters.name }}'
- `listWorkspace`: List all files in the workspace. If used with "with-contents", also the file contents are listed.
  - values: `with-filenames`,`with-contents`

#### Outputs

The `debug:log` action does not have any outputs.

### `debug:wait`

Waits for a certain period of time.

#### Inputs

| key           | description         | value    | example |
|---------------|---------------------|----------|---------|
| `minutes`     | Minutes to wait     | `number` | 2       |
| `seconds`     | Seconds to wait     | `number` | 30      |
| `miliseconds` | Miliseconds to wait | `number` | 3000    |

#### Outputs

None

--- 

## Catalog

### `catalog:register`

This action manually registers a entity with the catalog.

You may want to do this if you haven't [enabled autodiscovery](/docs/getting-started/autodiscovery/) of components or if you're using a filename which doesn't match your autodiscovery pattern.

It has two sets of options. The first allows you to configure the location as a complete url through `catalogInfoUrl`.

```yaml
steps:
  - action: catalog:register
    id: register-with-catalog
    name: Manually register with the catalog
    input:
      catalogInfoUrl: https://github.com/RoadieHQ/sample-service/blob/master/catalog-info-1.yaml
      # optional: false # default
```

The second allows you to configure the repo containing the catalog file through `repoContentsUrl` and optionally a filepath through `catalogInfoPath `. You might use this along with the publish:github action.

```yaml
steps:
  - action: catalog:register
    id: register-with-catalog
    name: Manually register with the catalog
    input:
      repoContentsUrl: ${{ steps["publish-repository"].output.repoContentsUrl }}
      # catalogInfoPath: catalog-info.yaml # default
      # optional: false # default
```

In both cases you can pass an `optional` flag which determines if the location can be created before the catalog files exists.

#### Inputs

Either `catalogInfoUrl` must be specified or `repoContentsUrl` must be specified. 

| key               | description                                                                                           | value     | example                                                                          |
|-------------------|-------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------------------------------------|
| `catalogInfoUrl`  | An absolute URL pointing to the catalog info file location                                            | `string`  | GET                                                                              |
| `optional`        | Permit the registered location to optionally exist. Default: false                                    | `boolean` | '/proxy/snyk/org/${{ parameters.orgName }}/projects/${{ parameters.projectId }}' |
| `repoContentsUrl` | An absolute URL pointing to the root of a repository directory tree                                   | `string`  | Accept: application/json                                                         |
| `catalogInfoPath` | A relative path from the repo root pointing to the catalog info file, defaults to /catalog-info.yaml' | `string`  | kind: Component                                                                  |

### `catalog:write`

This action creates a `catalog-info.yaml` file into the workspace directory. It takes an object that will be serialized as YAML into the body of the file.

```yaml
steps:
  - action: catalog:write
    id: create-catalog-info-file
    name: Create catalog file
    input:
      entity:
        apiVersion: backstage.io/v1alpha1
        kind: Component
        metadata:
          name: test
          annotations: {}
        spec:
          type: service
          lifecycle: production
          owner: default/owner
```

If you would like to create the catalog file in a custom location you can do that with the `filePath` option.

```yaml
steps:
  - action: catalog:write
    id: create-catalog-info-file
    name: Create catalog file
    input:
      filePath: '.backstage/catalog-info.yaml'
      entity:
        apiVersion: backstage.io/v1alpha1
        kind: Component
        metadata:
          name: test
          annotations: {}
        spec:
          type: service
          lifecycle: production
          owner: default/owner
```

#### Inputs

| key        | description                                                                                           | value    | example                     |
|------------|-------------------------------------------------------------------------------------------------------|----------|-----------------------------|
| `filePath` | Defaults to catalog-info.yaml                                            | `string` | backstage/catalog-info.yaml |
| `entity`*  | A full entiy definition matching the entity schema                                                    | `object` |                             |


#### Outputs
None

### `catalog:fetch`

This action fetches an entity or entities from the catalog by entity reference(s).

```yaml
steps:
  - action: catalog:fetch
    id: catalog-entity-fetch
    name: Fetch Catalog Entity
    input:
      entityRef: component:default/customer-service
```

You can also use default input parameters for kind and namespace `defaultKind`, `defaultNamespace` and specify `optional: true` if you want the step to continue if the entity or entities do not exist.

```yaml
steps:
  - action: catalog:fetch
    id: catalog-entity-fetch
    name: Fetch Catalog Entity
    input:
      entityRef: component:default/customer-service
```

This action can be combined with parameter values from `EntityPicker` like so:

```yaml
...
parameters:
  properties:
    entity:
      type: string
      ui:field: EntityPicker
steps:
  - action: catalog:fetch
    id: catalog-entity-fetch
    name: Fetch Catalog Entity
    input:
      entityRef: ${{ parameters.entity }}
```

#### Inputs

| key         | description                                           | value    | example                        |
|-------------|-------------------------------------------------------|----------|--------------------------------|
| `entityRef` | An entity reference for the entity you want to fetch. | `string` | component:default/test-service |

#### Outputs

An `entity` object following the [schema of Backstage entities](https://backstage.io/docs/features/software-catalog/descriptor-format/) or `entities` which is an array of entity objects. 


## File Operations

### `fs:delete`

This action deletes the given files or directories in the workspace. It has one input parameter `files` that can be provided an array of file paths or directory paths to delete.

If a directory is used, all the files inside a directory are deleted. If the given file or directory does not exist the function does nothing.

```yaml
steps:
  - action: fs:delete
    id: delete-filds
    name: Delete files
    input:
      files:
        - files/deleteme
        - otherfiletodelete
```

#### Inputs

| key        | description                                           | value    | example       |
|------------|-------------------------------------------------------|----------|---------------|
| `files` | A list of files and directories that will be deleted. | `string` | - somefile.js |

#### Outputs

The `fs:delete` action does not have any outputs.

### `fs:rename`

This action allows you to move `files` within the workspace. The `files` option takes an array of objects containing `from` and `to` options.

```yaml
steps:
  - action: fs:rename
    id: rename-files
    name: Rename files
    input:
      files:
        - from: copyfrom
          to: copyto
        - from: copyfrom1
          to: copyto1
```

#### Inputs

| key     | description                                                             | value    | example                                       |
|---------|-------------------------------------------------------------------------|----------|-----------------------------------------------|
| `files` | A list of objects with a `from` and `to` field representing file paths. | `object` | {'from': 'a/file.yaml', 'to': 'b/file.yaml' } |


#### Outputs
None

### `fs:append`

Appends text to a file within the workspace

```yaml
steps:
  - id: append
    name: Append to file
    action: fs:append
    input:
      file: ${{ parameters.file }}
      text: ${{ parameters.text }}
```

#### Inputs

| key     | description                                          | value    | example                     |
|---------|------------------------------------------------------|----------|-----------------------------|
| `file`* | A path to the file.                                  | `string` | backstage/catalog-info.yaml |
| `text`* | The text to be added to the end of the file content. | `string` | Lorem ipsum                 |


#### Outputs

The `fs:append` action does not produce outputs.

### `fs:read`

Reads a file from the workspace and outputs its content to be used in a subsequent step.

```yaml
steps:
  - id: read
    name: Reads a file
    action: fs:read
    input:
      path: ${{ parameters.path }}
```

#### Inputs

| key     | description                                          | value    | example                     |
|---------|------------------------------------------------------|----------|-----------------------------|
| `path`* | A path to the file.                                  | `string` | backstage/catalog-info.yaml |


#### Outputs

The `fs:read` action produces one output.

| Name    | Description         |
| ------- | ------------------- |
| content | Content of the file |

### `roadiehq:utils:fs:replace`

This action replaces found string in files with content defined in input.

**Required params:**

- files: Collection of files and their replacing configuration. See structure of collection item below.
- files[].file: Path to the file to be modified
- files[].find: A text to be replaced
- files[].replaceWith: A text to be used to replace above

```yaml
steps:
  - id: Replace text in file
    name: Replace
    action: roadiehq:utils:fs:replace
    input:
      files:
        - file: './file.1'
          find: 'i_want_to_replace_this'
          replaceWith: ${{ parameters.templated_text }}
```

#### Outputs

The `roadiehq:utils:fs:replace` action does not have any outputs.

### `roadiehq:utils:fs:parse`

Reads a file from the workspace and optionally parses it.

**Params:**

| Name   | Description                                                        |
| ------ | ------------------------------------------------------------------ |
| path\* | Path to the file to read.                                          |
| parser | Optionally parse the content to an object. (yaml, json, multiyaml) |

```yaml
spec:
  owner: roadie
  type: service
  parameters:
    - title: Path
      properties:
        path:
          title: Path to the file
          type: string
          description: The path you want to get on your backstage instance
        parser:
          type: 'string'
          enum: ['yaml', 'json', 'multiyaml']

  steps:
    - id: roadiehq-utils-fs-parse
      name: backstage request
      action: roadiehq:utils:fs:parse
      input:
        path: ${{ parameters.path }}
        parser: ${{ parameters.parser }}
```

#### Outputs

The `roadiehq:utils:fs:parse` action produces one output.

| Name    | Description         |
| ------- | ------------------- |
| content | Content of the file |

### `roadiehq:utils:serialize:yaml`

Allows performing serialization on an object

**Params:**

| Name     | Description                             |
| -------- | --------------------------------------- |
| data\*   | Input data to perform serialization on. |
| replacer | Replacer array                          |
| options  | YAML stringify options                  |

**options:**

| Name          | Description                                                                                                                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| indent\*      | (default: 2) - indentation width to use (in spaces)                                                                                                                                                                                                                        |
| noArrayIndent | (default: false) - when true, will not add an indentation level to array elements                                                                                                                                                                                          |
| skipInvalid   | (default: false) - do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types                                                                                                                                       |
| flowLevel     | (default: -1) - specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere                                                                                                                                        |
| sortKeys      | (default: false) - if true, sort keys when dumping YAML. If a function, use the function to sort the keys                                                                                                                                                                  |
| lineWidth     | (default: 80) - set max line width. Set -1 for unlimited width                                                                                                                                                                                                             |
| noRefs        | (default: false) - if true, don't convert duplicate objects into references                                                                                                                                                                                                |
| noCompatMode  | (default: false) - if true don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1                                                                                                                     |
| condenseFlow  | (default: false) - if true flow sequences will be condensed, omitting the space between a, b. Eg. '[a,b]', and omitting the space between key: value and quoting the key. Eg. '{"a":b}' Can be useful when using yaml for pretty URL query params as spaces are %-encoded. |
| quotingType   | (' or ", default: ') - strings will be quoted using this quoting style. If you specify single quotes, double quotes will still be used for non-printable characters.                                                                                                       |
| forceQuotes   | (default: false) - if true, all non-key strings will be quoted even if they normally don't need to.                                                                                                                                                                        |

```yaml
steps:
  - id: roadiehq-utils-serialize-yaml
    name: serialize yaml
    action: roadiehq:utils:serialize:yaml
    input:
      data: { 'foo': 'bar' }
      options:
        noArrayIndent: true
```

#### Outputs

The `roadiehq:utils:serialize:yaml` action produces one output.

| Name       | Description                      |
| ---------- | -------------------------------- |
| serialized | Output result from serialization |

### `roadiehq:utils:serialize:json`

Allows performing serialization on an object

**Params:**

| Name     | Description                             |
| -------- | --------------------------------------- |
| data\*   | Input data to perform serialization on. |
| replacer | Replacer array                          |
| space    | Space character                         |

```yaml
steps:
  - id: roadiehq-utils-serialize-json
    name: serialize json
    action: roadiehq:utils:serialize:json
    input:
      data: { 'foo': 'bar' }
      replacer:
        - foo
        - bar
      space: '#'
```

#### Outputs

The `roadiehq:utils:serialize:json` action produces one output.

| Name       | Description                      |
| ---------- | -------------------------------- |
| serialized | Output result from serialization |

### `roadiehq:utils:jsonata`

Allows performing JSONata operations and transformations on input objects and produces the output result as a step output.

**Params:**

| Name         | Description                                |
| ------------ | ------------------------------------------ |
| data\*       | Input data to be transformed               |
| expression\* | JSONata expression to perform on the input |

```yaml
steps:
  - id: transform
    name: Transform with jsonata
    action: roadiehq:utils:jsonata
    input:
      data: foo
      expression: <JSONata expression to perform on the input>
```

#### Outputs

The `roadiehq:utils:jsonata` action produces one output.

| Name   | Description                |
| ------ | -------------------------- |
| result | Output result from JSONata |

### `roadiehq:utils:jsonata:yaml:transform`

Allows performing JSONata operations and transformations on a YAML file in the workspace. The result can be read from the result step output.

**Params:**

| Name         | Description                                |
| ------------ | ------------------------------------------ |
| path\*       | Input path to read yaml file               |
| expression\* | JSONata expression to perform on the input |
| options      | YAML stringify options                     |

**options:**

| Name          | Description                                                                                                                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| indent\*      | (default: 2) - indentation width to use (in spaces)                                                                                                                                                                                                                        |
| noArrayIndent | (default: false) - when true, will not add an indentation level to array elements                                                                                                                                                                                          |
| skipInvalid   | (default: false) - do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types                                                                                                                                       |
| flowLevel     | (default: -1) - specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere                                                                                                                                        |
| sortKeys      | (default: false) - if true, sort keys when dumping YAML. If a function, use the function to sort the keys                                                                                                                                                                  |
| lineWidth     | (default: 80) - set max line width. Set -1 for unlimited width                                                                                                                                                                                                             |
| noRefs        | (default: false) - if true, don't convert duplicate objects into references                                                                                                                                                                                                |
| noCompatMode  | (default: false) - if true don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1                                                                                                                     |
| condenseFlow  | (default: false) - if true flow sequences will be condensed, omitting the space between a, b. Eg. '[a,b]', and omitting the space between key: value and quoting the key. Eg. '{"a":b}' Can be useful when using yaml for pretty URL query params as spaces are %-encoded. |
| quotingType   | (' or ", default: ') - strings will be quoted using this quoting style. If you specify single quotes, double quotes will still be used for non-printable characters.                                                                                                       |
| forceQuotes   | (default: false) - if true, all non-key strings will be quoted even if they normally don't need to.                                                                                                                                                                        |

```yaml
steps:
  - id: transform
    name: Transform YAML
    action: roadiehq:utils:jsonata:yaml:transform
    input:
      path: a/b/test.txt
      expression: <JSONata expression to perform on the input>
      options:
        noArrayIndent: true
```

#### Outputs

The `roadiehq:utils:jsonata:yaml:transform` action produces one output.

| Name   | Description                               |
| ------ | ----------------------------------------- |
| result | Output result from JSONata yaml transform |

### `roadiehq:utils:jsonata:json:transform`

Allows performing JSONata operations and transformations on a JSON file in the workspace. The result can be read from the result step output.

**Params:**

| Name         | Description                                |
| ------------ | ------------------------------------------ |
| path\*       | Input path to read yaml file               |
| expression\* | JSONata expression to perform on the input |
| replacer     | Replacer array                             |
| space        | Space character                            |

```yaml
steps:
  - id: transform
    name: Transform JSON
    action: roadiehq:utils:jsonata:json:transform
    input:
      path: a/b/test.txt
      expression: <JSONata expression to perform on the input>
      replacer:
        - foo
        - bar
      space: '#'
```

#### Outputs

The `roadiehq:utils:jsonata:json:transform` action produces one output.

| Name   | Description                               |
| ------ | ----------------------------------------- |
| result | Output result from JSONata json transform |

### `json:merge`

Merge new data into an existing JSON file.

**Params:**

| Name      | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| path\*    | Path to existing file to append.                                           |
| content\* | This will be merged into to the file. Can be either an object or a string. |

```yaml
steps:
  - id: merge
    name: JSON merge
    action: json:merge
    input:
      path: foo
      content: bar
```

#### Outputs

The `json:merge` action produces one output.

| Name | Description                           |
| ---- | ------------------------------------- |
| path | Path to the file that got appended to |

### `roadiehq:utils:json:merge`

Merge new data into an existing JSON file.

**Params:**

| Name      | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| path\*    | Path to existing file to append.                                           |
| content\* | This will be merged into to the file. Can be either an object or a string. |

```yaml
steps:
  - id: merge
    name: JSON merge
    action: roadiehq:utils:json:merge
    input:
      path: foo
      content: bar
```

#### Outputs

The `roadiehq:utils:json:merge` action produces one output.

| Name | Description                           |
| ---- | ------------------------------------- |
| path | Path to the file that got appended to |

### `roadiehq:utils:merge`

Merges data into an existing structured file.

**Params:**

| Name      | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| path\*    | Path to existing file to append.                                           |
| content\* | This will be merged into to the file. Can be either an object or a string. |
| options\* | YAML stringify options (for YAML output only)                              |

**options:**

| Name          | Description                                                                                                                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| indent\*      | (default: 2) - indentation width to use (in spaces)                                                                                                                                                                                                                        |
| noArrayIndent | (default: false) - when true, will not add an indentation level to array elements                                                                                                                                                                                          |
| skipInvalid   | (default: false) - do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types                                                                                                                                       |
| flowLevel     | (default: -1) - specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere                                                                                                                                        |
| sortKeys      | (default: false) - if true, sort keys when dumping YAML. If a function, use the function to sort the keys                                                                                                                                                                  |
| lineWidth     | (default: 80) - set max line width. Set -1 for unlimited width                                                                                                                                                                                                             |
| noRefs        | (default: false) - if true, don't convert duplicate objects into references                                                                                                                                                                                                |
| noCompatMode  | (default: false) - if true don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1                                                                                                                     |
| condenseFlow  | (default: false) - if true flow sequences will be condensed, omitting the space between a, b. Eg. '[a,b]', and omitting the space between key: value and quoting the key. Eg. '{"a":b}' Can be useful when using yaml for pretty URL query params as spaces are %-encoded. |
| quotingType   | (' or ", default: ') - strings will be quoted using this quoting style. If you specify single quotes, double quotes will still be used for non-printable characters.                                                                                                       |
| forceQuotes   | (default: false) - if true, all non-key strings will be quoted even if they normally don't need to.                                                                                                                                                                        |

```yaml
steps:
  - id: merge
    name: JSON merge
    action: roadiehq:utils:merge
    input:
      path: foo
      content: bar
      options:
        noArrayIndent: true
```

#### Outputs

The `roadiehq:utils:merge` action produces one output.

| Name | Description                           |
| ---- | ------------------------------------- |
| path | Path to the file that got appended to |

### `roadiehq:utils:fs:write`

Creates a file with the content on the given path

**Params:**

| Name      | Description               |
| --------- | ------------------------- |
| path\*    | Relative path to the file |
| content\* | Content of the file       |

```yaml
steps:
  - id: create
    name: Create file
    action: roadiehq:utils:fs:write
    input:
      path: foo
      content: bar
```

#### Outputs

The `roadiehq:utils:fs:write` action produces one output.

| Name | Description                    |
| ---- | ------------------------------ |
| path | Path to the newly created file |

### `roadiehq:utils:zip`

Zips the content of the path

**Params:**

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| path\*       | Relative path to the file                 |
| outputPath\* | The name of the result of the zip command |

```yaml
steps:
  - id: zip
    name: Zip the workspace
    action: roadiehq:utils:zip
    input:
      path: foo
      outputPath: bar
```

#### Outputs

The `roadiehq:utils:zip` action produces one output.

| Name       | Description                   |
| ---------- | ----------------------------- |
| outputPath | Path to the newly created zip |

### `roadiehq:utils:fs:append`

Append content to the end of the given file, it will create the file if it does not exist.

**Params:**

| Name      | Description                       |
| --------- | --------------------------------- |
| path\*    | Path to existing file to append.  |
| content\* | This will be appended to the file |

```yaml
steps:
  - id: append
    name: Append to file
    action: roadiehq:utils:fs:append
    input:
      path: foo
      content: bar
```

#### Outputs

The `roadiehq:utils:fs:append` action produces one output.

| Name | Description                           |
| ---- | ------------------------------------- |
| path | Path to the file that got appended to |

## GitHub

### `publish:github`

This action creates a new GitHub repository and publishes the files in the workspace directory to the repository. There is one mandatory parameter `repoUrl`. The repo url picker described in the `string` parameter description above.

The `repoUrl` must be in the format `github.com?repo=<reponame>&owner=<owner org>`

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
```

By default it will create a repository with a `master` branch. If you prefer to use `main` you can do the following:

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      defaultBranch: main
```

The `access` input parameter adds an admin collaborator to the repository. It can be a reference to a GitHub user or a team in GitHub.

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      access: AcmeInc/engineering
```

You can [protect the default branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) from being pushed to directly by using `protectDefaultBranch` if your repository is part of a Github Pro account.

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      protectDefaultBranch: true
```

You can enable code owner reviews using the `requireCodeOwnerReviews` option:

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      requireCodeOwnerReviews: true
```

The `repoVisibility` option allows the repository to be made public. By default it will be a private repository.

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      repoVisibility: 'public'
```

To cause merges to delete the source branch, you can enable the `deleteBranchOnMerge` setting.

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      deleteBranchOnMerge: true
```

If you want to disable merge commits, squash merge and rebase merge you can do that with the settings `allowMergeCommit`, `allowSquashMerge` and `allowRebaseMerge`. By default, these are enabled.

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      allowMergeCommit: false
      allowSquashMerge: false
      allowRebaseMerge: false
```

By default the repository will be populated with the files contained in the workspace directory. If you need to use a subdirectory, you can use the `sourcePath` option.

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      sourcePatch: './repoRoot'
```

Collaborators can be added to the repository using the `collaborators` option. It takes an array of `username` or `team` and `access`. `username` is the GitHub username to allow collaboration.

The `access` option gives the user specific type of permissions. The options are `pull`, `push`, `admin`, `maintain` or `triage`. these equate to:

- pull (read)
- push (write)
- triage (triage)
- admin (admin)
- maintain (maintain - only for public repos)

The `team` value should be the Github team slug and should not include the org-name as a prefix.

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      collaborators:
        - user: user1
          access: admin
        - team: github-team-name
          access: pull
```

The `topics` allows adding topics to the created repository when its created.

```yaml
steps:
  - action: publish:github
    id: publish-repository
    name: Publish Repository to Github
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      topics:
        - java
        - ruby
```

#### Outputs

The `publish:github` action produces two step outputs.

| Name            | Description                                   |
| --------------- | --------------------------------------------- |
| remoteUrl       | Url for the newly created repository          |
| repoContentsUrl | Url that shows the contents of the repository |

These outputs can be retrieved by a subsequent step using:

```yaml
steps:
  - id: log-message
    name: Log Message
    action: debug:log
    input:
      message: 'RemoteURL: ${{ steps["publish-repository"].output.remoteUrl }}, ${{ steps["publish-repository"].output.repoContentsUrl }}!'
```

### `publish:github:pull-request`

This action creates a pull request against a pre-existing repository using the files contained in the workspace directory. The most basic example is:

```yaml
steps:
  - action: publish:github:pull-request
    id: create-pull-request
    name: Create a pull request
    input:
      repoUrl: 'github.com?repo=reponame&owner=AcmeInc'
      branchName: ticketNumber-123
      title: 'Make some changes to the files'
      description: 'This pull request makes changes to the files in the reponame repository in the AcmeInc organization'
```

If the updated code is contained in a subdirectory to the workspace directory, you can use the `sourcePath` to select it. If the files you want to target to update are in a subdirectory of the repository you can use the `targetPath` option.

```yaml
steps:
  - action: publish:github:pull-request
    id: create-pull-request
    name: Create a pull request
    input:
      repoUrl: 'github.com?repo=reponame&owner=AcmeInc'
      branchName: ticketNumber-123
      title: 'Make some changes to the files'
      description: 'This pull request makes changes to the files in the reponame repository in the AcmeInc organization'
      sourcePath: ./subdirectory
      targetPath: ./subdirectory
```

You can use the user that runs the scaffolder template to open the PR rather than opening it on behalf of the Roadie Github App by specifying the token field.
The token can be injected by the RepoUrlPicker parameter as documented [here](https://backstage.io/docs/features/software-templates/writing-templates#using-the-users-oauth-token)

```yaml
parameters:
  - title: Choose a location
    required:
      - repoUrl
    properties:
      repoUrl:
        title: Repository Location
        type: string
        ui:field: RepoUrlPicker
        ui:options:
          # Here's the option you can pass to the RepoUrlPicker
          requestUserCredentials:
            secretsKey: USER_OAUTH_TOKEN
            additionalScopes:
              github:
                - workflow
          allowedHosts:
            - github.com
steps:
  - action: publish:github:pull-request
    id: create-pull-request
    name: Create a pull request
    input:
      repoUrl: 'github.com?repo=reponame&owner=AcmeInc'
      branchName: ticketNumber-123
      title: 'Make some changes to the files'
      description: 'This pull request makes changes to the files in the reponame repository in the AcmeInc organization'
      # here's where the secret can be used
      token: ${{ secrets.USER_OAUTH_TOKEN }}
```

NB: The branch you use for the pull request must be a new branch for the repo.

#### Outputs

The `publish:github:pull-request` action produces two outputs.

| Name              | Description                          |
| ----------------- | ------------------------------------ |
| remoteUrl         | Url to the new pull request          |
| pullRequestNumber | Shows the number of the pull request |

They can be accessed in subsequent steps as follows:

```yaml
steps:
  - id: log-message
    name: Log Message
    action: debug:log
    input:
      message: 'RemoteURL: ${{ steps["create-pull-request.output.remoteUrl }}, ${{ steps["create-pull-request"].output.pullRequestNumber }}!'
```

### `github:actions:dispatch`

The `github:actions:dispatch` action allows you to trigger the execution of a GitHub action on a repository. The `repoUrl` option is a repo url for GitHub. The `RepoUrlPicker` documented above can generate this value. The `workflowId` can be the workflow id from the GitHub API or you can just use the filename for the workflow file itself. The `branchOrTagName` indicates which commit to run the workflow against.

This example will run the workflow defined in the "my-workflow-file.yaml" file on the "newreponame" repository on the "main" branch.

```yaml
steps:
  - action: github:actions:dispatch
    id: trigger-build
    name: Trigger Build
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      workflowId: 'my-workflow-file.yaml'
      branchOrTagName: 'main'
```

If the workflow takes additional inputs, you can pass these along with the `workflowInputs` option.

```yaml
steps:
  - action: github:actions:dispatch
    id: trigger-build
    name: Trigger Build
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      workflowId: 'my-workflow-file.yaml'
      branchOrTagName: 'main'
      workflowInputs:
        parameter1: value1
        parameter2: value2
```

#### Outputs

The `github:actions:dispatch` action does not have any outputs.

### `github:webhook`

You can configure a webhook on an existing repository in GitHub using this action. It takes `repoUrl` and `webhookUrl`. The `repoUrl` option needs to be in a GitHub repo format. The `RepoUrlPicker` documented above will generate a URL in the correct format.

```yaml
steps:
  - action: github:webhook
    id: add-webhook
    name: Add Webhook
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      webhookUrl: 'https://webhook-handler-service.abc/handle-webhook'
```

You can configure a webhook secret using the `webhookSecret` option. You will likely want to provide this via an output from a previous step.

```yaml
steps:
  - action: github:webhook
    id: add-webhook
    name: Add Webhook
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      webhookUrl: 'https://webhook-handler-service.abc/handle-webhook'
      webhookSecret: 'mysupersecretwebhooksecret'
```

You can configure the types of `events` that trigger the webhook. For a full list of options see [here](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)

```yaml
steps:
  - action: github:webhook
    id: add-webhook
    name: Add Webhook
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      webhookUrl: 'https://webhook-handler-service.abc/handle-webhook'
      events:
        - push
        - pull_request
```

If you would like the webhook to receive every event, you can set the events to contain "\*".

```yaml
steps:
  - action: github:webhook
    id: add-webhook
    name: Add Webhook
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      webhookUrl: 'https://webhook-handler-service.abc/handle-webhook'
      events:
        - '*'
```

By default the payload of the webhook is form encoded, if you prefer json you can use `contentType: json`

```yaml
steps:
  - action: github:webhook
    id: add-webhook
    name: Add Webhook
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      webhookUrl: 'https://webhook-handler-service.abc/handle-webhook'
      contentType: json
```

You can disable SSL on the webhook request using the `insecureSsl` option, but it is not advised.

```yaml
steps:
  - action: github:webhook
    id: add-webhook
    name: Add Webhook
    input:
      repoUrl: 'github.com?repo=newreponame&owner=AcmeInc'
      webhookUrl: 'https://webhook-handler-service.abc/handle-webhook'
      insecureSsl: true
```

#### Outputs

The `github:webhook` action does not have any outputs.

## Azure

## `azure:repo:clone`

Clone a repo from Azure DevOps into the workspace. See input options [in the application](/docs/scaffolder/writing-templates/#actions)

```yaml
    - id: cloneAzureRepo
      name: Clone Azure Repo
      action: azure:repo:clone
      input:
        remoteUrl: "https://<MY_AZURE_ORGANIZATION>@dev.azure.com/<MY_AZURE_ORGANIZATION>/<MY_AZURE_PROJECT>/_git/<MY_AZURE_REPOSITORY>"
        branch: "main"
        targetPath: ./sub-directory
```

## `azure:repo:push`

Push changes to an Azure repository. See input options [in the application](/docs/scaffolder/writing-templates/#actions)

```yaml    
    - id: pushAzureRepo
      name: Push to Remote Azure Repo
      action: azure:repo:push
      input:
        branch: <MY_AZURE_REPOSITORY_BRANCH>
        sourcePath: ./sub-directory
        gitCommitMessage: Add ${{ parameters.name }} project files
```

## `azure:repo:pr`

Create a PR in Azure. See input options [in the application](/docs/scaffolder/writing-templates/#actions)

```yaml
    - id: pullRequestAzureRepo
      name: Create a Pull Request to Azure Repo
      action: azure:repo:pr
      input:
        sourceBranch: <MY_AZURE_REPOSITORY_BRANCH>
        targetBranch: "main"
        repoId: <MY_AZURE_REPOSITORY>
        title: ${{ parameters.name }}
        project: <MY_AZURE_PROJECT>
        supportsIterations: false
```

## Gitlab

## `publish:gitlab`

Initializes a git repository of the content in the workspace, and publishes it to GitLab. See input options [in the application](/docs/scaffolder/writing-templates/#actions)

```yaml
steps:
  - id: publish
    action: publish:gitlab
    name: Publish to GitLab
    input:
      repoUrl: gitlab.com?repo=project_name&owner=group_name
```

## `publish:gitlab:merge-request`

Create a merge request in GitLab. See input options [in the application](/docs/scaffolder/writing-templates/#actions)

```yaml
steps:
  - id: createMergeRequest
    action: publish:gitlab:merge-request
    name: Create a Merge Request
    input:
      repoUrl: gitlab.com?repo=repo&owner=owner
      title: Create my new MR
      description: This MR is really good
      sourcePath: ./path/to/my/changes
      branchName: new-mr
      assignee: my-assignee
```

## Bitbucket

### `publish:bitbucket`

This action creates a new Bitbucket repository and publishes the files in the workspace directory to the repository. There is one mandatory parameter `repoUrl`. The repo url picker described in the `string` parameter description above.

The `repoUrl` must be in the format `bitbucket.org?repo=<project name>&workspace=<workspace name>&project=<project name>`

```yaml
steps:
  - action: publish:bitbucket
    id: publish-repository
    name: Publish Repository to Bitbucket
    input:
      repoUrl: 'bitbucket.org?repo=newprojectname&workspace=workspacename&project=projectname'
```

You can optionally add a `description` to the new repository.

```yaml
steps:
  - action: publish:bitbucket
    id: publish-repository
    name: Publish Repository to Bitbucket
    input:
      repoUrl: 'bitbucket.org?repo=newprojectname&workspace=workspacename&project=projectname'
      description: 'My new project'
```

By default the project will be created as a private repository. It can be made public using the `repoVisibility` option.

```yaml
steps:
  - action: publish:bitbucket
    id: publish-repository
    name: Publish Repository to Bitbucket
    input:
      repoUrl: 'bitbucket.org?repo=newprojectname&workspace=workspacename&project=projectname'
      repoVisibility: 'public'
```

By default the repository is created with a "master" branch. If you would like to use "main" instead you can us the `defaultBranch` option.

```yaml
steps:
  - action: publish:bitbucket
    id: publish-repository
    name: Publish Repository to Bitbucket
    input:
      repoUrl: 'bitbucket.org?repo=newprojectname&workspace=workspacename&project=projectname'
      defaultBranch: 'main'
```

By default the repository will be populated with the files contained in the workspace directory. If you need to use a subdirectory, you can use the `sourcePath` option.

```yaml
steps:
  - action: publish:bitbucket
    id: publish-repository
    name: Publish Repository to Bitbucket
    input:
      repoUrl: 'bitbucket.org?repo=newprojectname&workspace=workspacename&project=projectname'
      sourcePatch: './repoRoot'
```

#### Outputs

The `publish:bitbucket` action produces the following outputs.

| Name            | Description                                   |
| --------------- | --------------------------------------------- |
| remoteUrl       | Url for the newly created repository          |
| repoContentsUrl | Url that shows the contents of the repository |
