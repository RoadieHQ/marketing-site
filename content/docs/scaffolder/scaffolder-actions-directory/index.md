---
title: Scaffolder Actions Directory
publishedDate: '2024-08-08'
description: Directory of available scaffolder actions
---


# Directory of available scaffolder actions

This page attempts to provide a comprehensive directory of all open source Scaffolder actions available for Backstage with instructions and examples for each action. 

If you want to add an action please [raise an issue on our repo](https://github.com/RoadieHQ/marketing-site/issues) or contribute a PR with the addition.

NB: 
- We do not list actions created for hackathons and talks that are not maintained or intended for widespread use.
- A subset of available actions in Roadie can be found at the following page inside the Roadie app: `https://<tenant-name>.roadie.so/templates/actions`


| Category             | Name                                                                        | Description                                                                                                                                                               | Source                                                                                                                                                                               | Inputs                                                                                             |
|----------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Downloading Content  | [fetch:plain](#fetchplain)                                                  | Downloads directory content and places it in the workspace.                                                                                                               | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/plain.ts)                  | url,targetPath,token                                                                               |
| Downloading Content  | [fetch:plain:plus](#fetchplainplus)                                         | Downloads directory content and places it in the workspace for multiple urls.                                                                                             | [@k3tech/backstage-plugin-scaffolder-backend-module-plus](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/tree/main)                                | commonParams,sources                                                                               |
| Downloading Content  | [fetch:template](#fetchtemplate)                                            | Downloads a directory containing templated files using [nunjucks](https://mozilla.github.io/nunjucks/),merges variables in, and writes result to the workspace.           | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/template.ts)               | url,targetPath,token,values,copyWithoutTemplating,cookiecutterCompat,templateFileExtension,replace |
| Downloading Content  | [fetch:template:plus](#fetchtemplateplus)                            | Downloads multiple directories containing templated files using [nunjucks](https://mozilla.github.io/nunjucks/),merges variables in, and writes results to the workspace. | [@k3tech/backstage-plugin-scaffolder-backend-module-plus](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/tree/main)                                | commonParams,templates                                                                              |
| Downloading Content  | [fetch:plain:file](#fetchplainfile)                                         | Downloads single file and places it in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.                                         | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/plainFile.ts)              | url,targetPath,token                                                                               |
| Downloading Content  | [fetch:plain:file:plus](#fetchplainfileplus)                                | Downloads files and places them in the workspace for multiple urls.                                                                                                       | [@k3tech/backstage-plugin-scaffolder-backend-module-plus](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/tree/main)                                | commonParams,files                                                                                 |
| HTTP Requests        | [http:backstage:request](#httpbackstagerequest)                             | Runs an HTTP request against the Backstage Backend API and handles the response.                                                                                          | [@roadiehq/scaffolder-backend-module-http-request](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-http-request) | method*,path*,headers,params,body,logRequestPath,continueOnBadResponse                             |
| Debugging            | [debug:log](#debuglog)                                                      | Log a message to the UI output.                                                                                                                                           | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)                    | message*,listWorkspace                                                                             |
| Debugging            | [debug:wait](#debugwait)                                                    | Waits for a certain period of time.                                                                                                                                       | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/wait.ts)                   | minutes,seconds,miliseconds                                                                        |
| Catalog              | [catalog:register](#catalogregister)                                        | Registers an entity in the catalog.                                                                                                                                       | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/register.ts)             | (catalogInfoUrl*,optional) (repoContentsUrl*,catalogInfoPath,optional)                             |
| Catalog              | [catalog:write](#catalogwrite)                                              | Writes the catalog-info.yaml for your template                                                                                                                            | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/write.ts)                | filePath,entity*                                                                                   |
| Catalog              | [catalog:fetch](#catalogfetch)                                              | Fetches an entity or entities from the catalog by entity reference(s).                                                                                                    | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/fetch.ts)                | entityRef,entityRefs,optional,defaultKind,defaultNamespace                                         |
| File Operations      | [fs:delete](#fsdelete)                                                      | Deletes files and directories in the workspace                                                                                                                            | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/delete.ts)            | files*                                                                                             |
| File Operations      | [fs:rename](#fsrename)                                                      | Renames files and directories in the workspace, essentially moving them.                                                                                                  | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/rename.ts)            | files*                                                                                             |
| File Operations      | [fs:append](#fsappend)                                                      | Adds text to the end of an existing file in the workspace.                                                                                                                | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/append.ts)            | file*,text*                                                                                        |
| File Operations      | [fs:read](#fsread)                                                          | Reads a file from the workspace and outputs its content to be used in a subsequent step.                                                                                  | [@backstage/plugin-scaffolder-backend](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/read.ts)              | path*                                                                                              |
| File Operations      | [roadiehq:utils:fs:replace](#roadiehqutilsfsreplace)                        | Replaces found string in files with content defined in input.                                                                                                             | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | files*                                                                                             |
| File Operations      | [roadiehq:utils:fs:parse](#roadiehqutilsfsparse)                            | Reads a file from the workspace and outputs content to be used in next steps.                                                                                             | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | path*,parser                                                                                       |
| File Operations      | [roadiehq:utils:fs:write](#roadiehqutilsfswrite)                            | Creates a file with the content on the given path.                                                                                                                        | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | path*,content*,preserveFormatting                                                                  |
| File Operations      | [roadiehq:utils:fs:append](#roadiehqutilsfsappend)                          | Creates a file with the content on the given path.                                                                                                                        | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | path*,content*,preserveFormatting                                                                  |
| File Operations      | [roadiehq:utils:merge](#roadiehqutilsmerge)                                 | Merge data into an existing JSON or YAML file.                                                                                                                            | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | path*,content*,mergeArrays,preserveYamlComments,options                                            |
| File Operations      | [roadiehq:utils:zip](#roadiehqutilszip)                                     | Compresses content to a zip file in the workspace.                                                                                                                        | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | path*,content*,preserveFormatting                                                                  |
| Serialization        | [roadiehq:utils:serialize:yaml](#roadiehqutilsserializeyaml)                | Converts YAML to a string.                                                                                                                                                | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | data*,options                                                                                      |
| Serialization        | [roadiehq:utils:serialize:json](#roadiehqutilsserializejson)                | Converts JSON to a formated string.                                                                                                                                       | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | data*,space,replacer                                                                               |
| Content Manipulation | [roadiehq:utils:jsonata](#roadiehqutilsjsonata)                             | Performs JSONata operations and transformations on input objects.                                                                                                         | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | data*,expression*                                                                                  |
| Content Manipulation | [roadiehq:utils:jsonata:yaml:transform](#roadiehqutilsjsonatayamltransform) | Performs JSONata operations and transformations on a YAML file in the workspace.                                                                                          | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | path*,expression*,options                                                                          |
| Content Manipulation | [roadiehq:utils:jsonata:json:transform](#roadiehqutilsjsonatajsontransform) | Performs JSONata operations and transformations on a JSON file in the workspace.                                                                                          | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | path*,expression*,as,replacer,space                                                                |
| Content Manipulation | [json:merge-files](#jsonmergefiles)                                         | Merges multiple JSON files into a single JSON object stored in a new file in the workspace.                                                                               | [@mdude2314/backstage-plugin-scaffolder-json-merge-actions](https://github.com/arhill05/backstage-plugin-scaffolder-json-merge-actions)                                              | inputFile*,outputFileName*,outputFilePath,jsonMergeOptions                                         |
| Content Manipulation | [json:merge-file](#jsonmergefile)                                           | Uses [JSON-merger syntax](https://www.npmjs.com/package/json-merger#operations) to manipulate a single JSON file and store the result in a new file in the workspace.     | [@mdude2314/backstage-plugin-scaffolder-json-merge-actions](https://github.com/arhill05/backstage-plugin-scaffolder-json-merge-actions)                                              | inputFiles*,outputFileName*,outputFilePath,jsonMergeOptions                                        |
| Content Manipulation | [roadiehq:utils:json:merge](#roadiehqutilsjsonmerge)                        | Merge new data into an existing JSON file.                                                                                                                                | [@roadiehq/scaffolder-backend-module-utils](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-utils)               | path*,content*,matchFileIndent,mergeArrays                                                         |
|                      |                                                                             |                                                                                                                                                                           |                                                                                                                                                                                      |                                                                                                    |

## Download content

### `fetch:plain`

Downloads directory content and places it in the workspace.

#### Inputs
| Key        | Description                                                                                | Type   | Example         |
|------------|--------------------------------------------------------------------------------------------|--------|-----------------|
| url        | Relative path or absolute URL pointing to the directory tree to fetch                       | string | '../assets'     |
| targetPath | Target path within the working directory to download the contents to                        | string | 'assets-copy'    |
| token      | An optional token to use for authentication when reading the resources                      | string | 'sku1263kjh280' |


#### Examples
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

#### Links:
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/plain.ts)

### `fetch:plain:plus`

Downloads directory content and places it in the workspace for multiple urls.

#### Inputs

| Key                       | Description                                                                                                                                                  | Type   | Example                                                                                |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|----------------------------------------------------------------------------------------|
| `commonParams`            |                                                                                                                                                              | object | { 'targetPath': './' }                                                                 |
| `commonParams.url`        | Relative path or absolute URL pointing to the directory tree to fetch. If only a single directory needs to be fetched this can be used instead of `sources`. | string | `https://github.com/backstage/community/tree/main/backstage-community-sessions/assets` |
| `commonParams.targetPath` | Target path within the working directory to download the contents to. Used as the default path for downloads from urls in `sources`.                         | string | `downloads`                                                                            |
| `sources`                 | An array of objects containing URL and optionally a target path. If no TargetPath is specified the parameter from commonParams is used.                      | array  | [ { 'url': './assets' } ]                                                              |
| `sources[0].url`*         | Relative path or absolute URL pointing to the directory tree to fetch                                                                                        | string  | '../assets'                                                                            |
| `sources[0].targetPath`   | Target path within the working directory to download the contents to.                                                                                        | string  | 'downloads'                                                                            |

#### Examples

Downloads content and places it in the workspace.
```yaml
steps:
  - action: fetch:plain:plus
    id: fetch-plain
    name: Fetch plain
    input:
      commonParams:
        targetPath: ./
      sources:
        - url: https://github.com/backstage/community/tree/main/backstage-community-sessions/assets
```

Optionally, if you would prefer the data to be downloaded to a diferent subdirectory in the workspace for each url you may specify the ‘targetPath’ input option.
```yaml
steps:
  - action: fetch:plain:plus
    id: fetch-plain
    name: Fetch plain
    input:
      sources:
        - url: https://github.com/backstage/community/tree/main/backstage-community-sessions/assets
          targetPath: fetched-data

```

#### Outputs
| Key     | Description                                                          | Type  |
|---------|----------------------------------------------------------------------|-------|
| results | An array of paths that have been written to in the working directory | array |

#### Links:
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/main/exemples.md#fetchplainplus)
- [How to add it to Backstage](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/main/README.md#get-started)

### `fetch:plain:file`

Downloads single file and places it in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.

#### Inputs
| Key        | Description                                                            | Type   | Example               |
|------------|------------------------------------------------------------------------|--------|-----------------------|
| url        | Relative path or absolute URL pointing to the file to fetch            | string | '../assets/test.json' |
| targetPath | Target directory within the working directory to download the file to  | string | 'assets-copy'         |
| token      | An optional token to use for authentication when reading the resources | string | 'sku1263kjh280'       |


#### Examples
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

#### Links:
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/plainFile.ts)

### `fetch:plain:file:plus`

#### Inputs

| Key                       | Description                                                                                                                                 | Type   | Example                                                                               |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|--------|---------------------------------------------------------------------------------------|
| `commonParams`            |                                                                                                                                             | object | { 'targetPath': './test.json' }                                                                 |
| `commonParams.url`        | Relative path or absolute URL pointing to the file to fetch. If only a single file needs to be fetched this can be used instead of `files`. | string | `https://github.com/backstage/community/tree/main/backstage-community-sessions/assets/test.json` |
| `commonParams.targetPath` | Target path within the working directory to download the contents to. Used as the default path for downloads from urls in `sources`.        | string | `downloads`                                                                           |
| `files`                   | An array of objects containing URL and optionally a target path. If no TargetPath is specified the parameter from commonParams is used.     | array  | [ { 'url': './assets/test.json' } ]                                                             |
| `files[0].url`*         | Relative path or absolute URL pointing to the file to fetch                                                                                 | string | '../assets/test.json'                                                                 |
| `files[0].targetPath`   | Target path within the working directory to download the file to.                                                                           | string | 'downloads'                                                                           |

#### Examples

Downloads multiple files from different urls and places them in a directory in the workspace.
```yaml
steps:
  - action: fetch:plain:file:plus
    id: fetch-files
    name: Fetch files
    input:
      commonParams:
        targetPath: ./downloads
      files:
        - url: https://github.com/backstage/community/tree/main/backstage-community-sessions/assets/test.json
```

Optionally, if you would prefer the files to be downloaded to a different subdirectory in the workspace for each url you may specify the ‘targetPath’ input option.
```yaml
steps:
  - action: fetch:plain:file:plus
    id: fetch-files
    name: Fetch files
    input:
      files:
        - url: https://github.com/backstage/community/tree/main/backstage-community-sessions/assets/test.json
          targetPath: fetched-data

```

#### Outputs
| Key     | Description                                                       | Type  |
|---------|-------------------------------------------------------------------|-------|
| results | An array of paths that have been written to in the working directory | array |

#### Links:
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#fetchplainplus)
- [How to add it to Backstage](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/main/README.md#get-started)

https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#fetchplainfileplus

### `fetch:template`
Downloads a directory containing templated files, then renders all the template variables into the files, directory names and content using [Nunjucks](https://mozilla.github.io/nunjucks/), and places the result in the workspace.

#### Inputs
| Key                   | Description                                                                                                           | Type             | Example |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------|------------------|---------|
| url                   | Relative path or absolute URL pointing to the directory tree to fetch                                                 | string           |         |
| targetPath            | Target path within the working directory to download the contents to. Defaults to the working directory root.         | string           |         |
| values                | Values to pass on to the templating engine                                                                            | object           |         |
| copyWithoutRender     | [Deprecated] An array of glob patterns. Files or directories matching these are copied without template processing    | array of strings |         |
| copyWithoutTemplating | An array of glob patterns. Contents of matched files are copied without being processed but paths are rendered        | array of strings |         |
| cookiecutterCompat    | Enable compatibility features for templates built for `fetch:cookiecutter`                                            | boolean          |         |
| templateFileExtension | If set, only files with the given extension will be templated. If set to `true`, the default extension `.njk` is used | string/boolean   |         |
| replace               | If set, replace files in `targetPath` instead of skipping existing ones                                               | boolean          |         |
| token                 | Optional token for authentication when reading resources                                                              | string           |         |
| trimBlocks            | If set, template rendering will trim blocks                                                                           | boolean          |         |
| lstripBlocks          | If set, template rendering will strip leading whitespace in blocks                                                    | boolean          |         |

#### Examples
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

#### Links
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/template.ts)

### `fetch:template:plus`
Downloads multiple directories containing templated files, then renders all the template variables into the files, directory names and content using [Nunjucks](https://mozilla.github.io/nunjucks/), and places the results in the workspace.

#### Inputs
| Key                                | Description                                                                             | Type              | Example                       |
|------------------------------------|-----------------------------------------------------------------------------------------|-------------------|-------------------------------|
| commonParams                       | Common parameters including URL, targetPath, and other template fields                  | object            | { 'copyWithoutRender': true } |
| templates                          | Array of template fields including URL and targetPath                                   | array of objects  |                               |
| templates[0].url                   | Relative path or absolute URL pointing to the directory tree to fetch                   | string            |                               |
| templates[0].targetPath            | Target path within the working directory to download the contents to. Defaults to root  | string            |                               |
| templates[0].values                | Values to pass on to the templating engine                                              | object            |                               |
| templates[0].copyWithoutRender     | [Deprecated] An array of glob patterns. Any files/directories copied without processing | array of strings  |                               |
| templates[0].copyWithoutTemplating | An array of glob patterns. Contents copied without processing, but paths are rendered   | array of strings  |                               |
| templates[0].cookiecutterCompat    | Enable features to maximize compatibility with templates built for fetch:cookiecutter   | boolean           |                               |
| templates[0].templateFileExtension | File extension for templating. If `true`, `.njk` is used                                | string or boolean |                               |
| templates[0].replace               | Replace files in targetPath instead of skipping existing ones                           | boolean           |                               |


#### Examples

```yaml
steps:
  - action: fetch:template:plus
    id: fetch-multiple-templates
    name: Fetch templates
    input:
      commonParams:
        cookiecutterCompat: true
      templates: 
        - url: ./template
          values:
            name: ${{ parameters.name }}
      
```

#### Outputs
| Key     | Description           | Type  |
|---------|-----------------------|-------|
| results | Array of results data | array |

#### Links
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/main/src/actions/builtin/fetch/template.ts)

### `fetch:cookiecutter`
*[Deprecated for `fetch:template` used with `cookiecutterCompat: true` input parameter.](https://backstage.io/docs/features/software-templates/builtin-actions#migrating-from-fetchcookiecutter-to-fetchtemplate)*
https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-cookiecutter

### `fetch:template:file`

Downloads a single file and templates variables into file. Then places the result in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.

#### Inputs
| Field                | Type      | Required | Description                                                               |
|----------------------|-----------|----------|---------------------------------------------------------------------------|
| `url`                | `string`  | Yes      | Relative path or absolute URL pointing to the single file to fetch        |
| `targetPath`         | `string`  | Yes      | Target path within the working directory to download the file as          |
| `values`             | `object`  | No       | Values to pass on to the templating engine                                |
| `cookiecutterCompat` | `boolean` | No       | Enable features for compatibility with fetch:cookiecutter templates       |
| `replace`            | `boolean` | No       | Replace the file in targetPath instead of skipping existing ones          |
| `token`              | `string`  | No       | Optional token to use for authentication when reading resources           |

#### Examples

#### Outputs

#### Links

https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-rails

### `fetch:rails`

#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-rails

## HTTP Requests

### `http:backstage:request`

This action allows the Scaffolder task to run an HTTP request against the Backstage Backend API and handle the response. It can be useful for extending the scaffolder to call out to third party APIs. You can do this by configuring a proxy and then calling the proxy with this action.

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

The path should always point to a proxy entry with the following format: `/proxy/<proxy-path>/<external-api-path>` - i.e.: `/proxy/snyk/org/<some-org>/projects` or `/proxy/circleci/api/projects` (NB: the CircleCI proxy path is `circleci/api/` but Snyk is just `snyk/`)

#### Examples

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

#### Outputs

| Name    | Description                                                    | Type     |
| ------- |----------------------------------------------------------------|:---------|
| code    | Status code of the http response                               | `string` |
| headers | Object containing all of the response headers and their values | `object` |
| body    | Body of the response. If content-type header is `application/json` this will be a parsed object. Otherwise, it will contain an object with a single param `message` containing a string representing the body of the response.| `object`  |

---

#### Links


## Debugging

### `debug:log`

Use the `debug:log` action to print some information to the task console.
#### Inputs:
- `message`: Text to log in the Backstage UI. You can log variables like so: 'Hello, ${{ parameters.name }}'
- `listWorkspace`: List all files in the workspace. If used with "with-contents", also the file contents are listed.
  - values: `with-filenames`,`with-contents`

#### Examples
```yaml
steps:
  - action: debug:log
    id: debug-log
    name: Log Hello World
    input:
      message: 'Hello, World!'
```

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

### `debug:fs:read:plus`

#### Inputs

#### Examples

#### Outputs

#### Links
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#debugfsreadplus)

## Catalog

### `catalog:register`

This action manually registers a entity with the catalog.

You may want to do this if you haven't [enabled autodiscovery](/docs/getting-started/autodiscovery/) of components or if you're using a filename which doesn't match your autodiscovery pattern.

It has two sets of options. The first allows you to configure the location as a complete url through `catalogInfoUrl`.
The second allows you to configure the repo containing the catalog file through `repoContentsUrl` and optionally a filepath through `catalogInfoPath `. You might use this along with the publish:github action.
In both cases you can pass an `optional` flag which determines if the location can be created before the catalog files exists.

#### Examples

```yaml
steps:
  - action: catalog:register
    id: register-with-catalog
    name: Manually register with the catalog
    input:
      catalogInfoUrl: https://github.com/RoadieHQ/sample-service/blob/master/catalog-info-1.yaml
      # optional: false # default
```

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

#### Inputs

Either `catalogInfoUrl` must be specified or `repoContentsUrl` must be specified. 

| key               | description                                                                                           | value     | example                                                                          |
|-------------------|-------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------------------------------------|
| `catalogInfoUrl`  | An absolute URL pointing to the catalog info file location                                            | `string`  | GET                                                                              |
| `optional`        | Permit the registered location to optionally exist. Default: false                                    | `boolean` | '/proxy/snyk/org/${{ parameters.orgName }}/projects/${{ parameters.projectId }}' |
| `repoContentsUrl` | An absolute URL pointing to the root of a repository directory tree                                   | `string`  | Accept: application/json                                                         |
| `catalogInfoPath` | A relative path from the repo root pointing to the catalog info file, defaults to /catalog-info.yaml' | `string`  | kind: Component                                                                  |

#### Outputs
None

#### Links
[//]: # (TODO:)

### `catalog:register:plus`
[//]: # (TODO:)
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#register-with-the-catalog-1

### `catalog:write`
This action creates a `catalog-info.yaml` file into the workspace directory. It takes an object that will be serialized as YAML into the body of the file.

#### Inputs

| key        | description                                                                                           | value    | example                     |
|------------|-------------------------------------------------------------------------------------------------------|----------|-----------------------------|
| `filePath` | Defaults to catalog-info.yaml                                            | `string` | backstage/catalog-info.yaml |
| `entity`*  | A full entiy definition matching the entity schema                                                    | `object` |                             |

#### Examples
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

#### Outputs
None

#### Links
[//]: # (TODO:)

### `catalog:fetch`

This action fetches an entity or entities from the catalog by entity reference(s).

#### Inputs

| key         | description                                           | value    | example                        |
|-------------|-------------------------------------------------------|----------|--------------------------------|
| `entityRef` | An entity reference for the entity you want to fetch. | `string` | component:default/test-service |

#### Examples
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

#### Outputs

An `entity` object following the [schema of Backstage entities](https://backstage.io/docs/features/software-catalog/descriptor-format/) or `entities` which is an array of entity objects. 

#### Links
[//]: # (TODO:)

### `catalog:query:plus`
[//]: # (TODO:)
#### Inputs

#### Examples

#### Outputs

#### Links
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#catalogqueryplus)

### `catalog:relation:plus`
[//]: # (TODO:)
#### Inputs

#### Examples

#### Outputs

#### Links
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#catalogrelationplus)

### catalog:timestamping
[//]: # (TODO:)
#### Inputs

#### Examples

#### Outputs

#### Links
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator

### catalog:scaffolded-from
[//]: # (TODO:)
#### Inputs

#### Examples

#### Outputs

#### Links
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator

### catalog:annotate
[//]: # (TODO:)

#### Inputs

#### Examples

#### Outputs

#### Links
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator

## Notifications

### `notification:send`
[//]: # (TODO:)

#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-notifications/src/actions/sendNotification.ts

## File Operations

### `fs:delete`

This action deletes the given files or directories in the workspace. It has one input parameter `files` that can be provided an array of file paths or directory paths to delete.

If a directory is used, all the files inside a directory are deleted. If the given file or directory does not exist the function does nothing.

#### Inputs

| key        | description                                           | type     | example       |
|------------|-------------------------------------------------------|----------|---------------|
| `files` | A list of files and directories that will be deleted. | `string` | - somefile.js |

#### Examples
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

#### Outputs

The `fs:delete` action does not have any outputs.

#### Links
[//]: # (TODO:)

### `fs:rename`

This action allows you to move `files` within the workspace. The `files` option takes an array of objects containing `from` and `to` options.

#### Inputs
| key     | description                                                             | type     | example                                       |
|---------|-------------------------------------------------------------------------|----------|-----------------------------------------------|
| `files` | A list of objects with a `from` and `to` field representing file paths. | `object` | {'from': 'a/file.yaml', 'to': 'b/file.yaml' } |

#### Examples
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

#### Outputs
None

#### Links
[//]: # (TODO:)

### `fs:rename:plus

[//]: # (TODO:)
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#fsrenameplus`

### `fs:append`

Appends text to a file within the workspace

#### Inputs

| key     | description                                          | type     | example                     |
|---------|------------------------------------------------------|----------|-----------------------------|
| `file`* | A path to the file.                                  | `string` | backstage/catalog-info.yaml |
| `text`* | The text to be added to the end of the file content. | `string` | Lorem ipsum                 |

#### Examples
```yaml
steps:
  - id: append
    name: Append to file
    action: fs:append
    input:
      file: ${{ parameters.file }}
      text: ${{ parameters.text }}
```

#### Outputs

The `fs:append` action does not produce outputs.

#### Links
[//]: # (TODO:)

### `fs:read`

Reads a file from the workspace and outputs its content to be used in a subsequent step.

#### Inputs

| key     | description                                          | type     | example                     |
|---------|------------------------------------------------------|----------|-----------------------------|
| `path`* | A path to the file.                                  | `string` | backstage/catalog-info.yaml |

#### Examples
```yaml
steps:
  - id: read
    name: Reads a file
    action: fs:read
    input:
      path: ${{ parameters.path }}
```

#### Outputs

The `fs:read` action produces one output.

| Name    | Description         |
| ------- | ------------------- |
| content | Content of the file |

#### Links
[//]: # (TODO:)

### `roadiehq:utils:fs:replace`

This action replaces found string in files with content defined in input.

#### Inputs

| key                  | description                                                                          | type      | example                                                                                     |
|----------------------|--------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------------------------------|
| `files`*             | Array of files and their replacing configuration.                                    | `array`   | [{'file': './backstage/catalog-info.yaml', 'find': 'Component', 'replaceWith': 'Resource'}] |
| `files[].file`       | Path to the file to be modified                                                      | `string`  | ./backstage/catalog-info.yaml                                                               |
| `files[].find`       | The string to be replaced. A Regex can be used if `matchRegex` is true.              | `string`  | 'Component'                                                                                 |
| `files[].matchRegex`  | Specifies if the find value should be used as a Regex expression. Defaults to false. | `boolean` | true                                                                                        |
| `files[].replaceWith` | The string to be used to replace above                                               | `string`  | 'Resource'                                                                                  |


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

#### Examples
[//]: # (TODO:)

#### Outputs
None

#### Links
[//]: # (TODO:)

### `roadiehq:utils:fs:parse`

Reads a file from the workspace and optionally parses it.

#### Inputs

| key      | description                                    | type     | example                       |
|----------|------------------------------------------------|----------|-------------------------------|
| `path`*  | Path to the file to read.                      | `string` | ./backstage/catalog-info.yaml |
| `parser` | Select a parser for the matching content type. | `string` | 'yaml', 'json', 'multiyaml'   |

#### Examples

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

| Key     | Description         | type            | 
|---------| ------------------- |-----------------|
| content | Content of the file | `string` / `object` |

#### Links
[//]: # (TODO:)

### `roadiehq:utils:fs:write`

Creates a file with the content on the given path

#### Inputs

| Name               | Description                                              | Type      | Example                   |
|--------------------|----------------------------------------------------------|-----------|---------------------------|
| path*              | Relative path to the file                                | `string`  | './content/manifest.json' |
| content*           | Content of the file                                      | `string`  | '{"a":"b"}'               |
| preserveFormatting | Preserve formatting for JSON content. Defaults to false. | `boolean` | true                      |

```yaml
steps:
  - id: create
    name: Create file
    action: roadiehq:utils:fs:write
    input:
      path: foo
      content: bar
```

#### Examples
[//]: # (TODO:)

#### Outputs

The `roadiehq:utils:fs:write` action produces one output.

| Name | Description                    | Type     |
|------|--------------------------------|----------|
| path | Path to the newly created file | `string` |

#### Links
[//]: # (TODO:)

### `roadiehq:utils:fs:append`

Append content to the end of the given file, it will create the file if it does not exist.

#### Inputs
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

#### Examples
[//]: # (TODO:)

#### Outputs

The `roadiehq:utils:fs:append` action produces one output.

| Name | Description                           |
| ---- | ------------------------------------- |
| path | Path to the file that got appended to |

#### Links
[//]: # (TODO:)

### `roadiehq:utils:merge`

Merges data into an existing structured file.

#### Inputs

| Key      | Description                                                                                                                     | Type                | Example          |
|----------|---------------------------------------------------------------------------------------------------------------------------------|---------------------|------------------|
| path*    | Path to existing file of JSON or YAML content.                                                                                  | `string`            |                  |
| content* | This will be merged into to the file.                                                                                           | `string` / `object` | { 'a': 'thing' } |
| mergeArrays* | When the file content is an array will attempt to concatenate the provided value with the array in the file. Defaults to false. | `boolean`           | true             |
| preserveYamlComments* | Will preserve standalone and inline comments in YAML files. Defaults to false.                                                  | `boolean`           | true             |
| options* | YAML stringify options (for YAML output only)                                                                                   | `boolean`            | true             |

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

#### Example
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

| Name | Description                        | Type    |
| ---- |------------------------------------|---------|
| path | Path to the file that got updated. | `string` |

#### Links
[//]: # (TODO:)

### `roadiehq:utils:zip`

Compresses the content found in the Scaffolder workspace at the path specified, to a new compressed file in the workspace.

#### Input

| Name        | Description                                                   | Type     | Example            |
|-------------|---------------------------------------------------------------|----------|--------------------|
| path*       | Relative path to the file or directory.                       | `string` | `./error_logs.txt` |
| outputPath* | Path of the new zip file that will be saved to the workspace. | `string` | `./error_logs.zip` |

```yaml
steps:
  - id: zip
    name: Zip the workspace
    action: roadiehq:utils:zip
    input:
      path: ./error_logs.txt
      outputPath: ./error_logs.zip
```

#### Examples
[//]: # (TODO:)

#### Outputs

The `roadiehq:utils:zip` action produces one output.

| Name       | Description                                          | Type    |
| ---------- |------------------------------------------------------|---------|
| outputPath | Path to the newly created zip file in the workspace. | `string` |

#### Links
[//]: # (TODO:)

### `zip:decompress:plus`
[//]: # (TODO:)

#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#zipdecompressplus

### `glob:plus`
[//]: # (TODO:)

#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#globplus

## Serialization

### `roadiehq:utils:serialize:yaml`

Converts valid YAML to a string format.

#### Inputs

| Name    | Description                                    | Type     | Example                 |
| ------- |------------------------------------------------|----------|-------------------------|
| data*   | Input YAML object to perform serialization on. | `object` | { 'a': 'b' }            |
| options | YAML stringify options                         | `object`  | { 'skipInvalid': 'true' |

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

#### Examples
[//]: # (TODO:)

#### Outputs

The `roadiehq:utils:serialize:yaml` action produces one output.

| Name       | Description                      | Type    |
| ---------- | -------------------------------- |---------|
| serialized | Output result from serialization | `string` |

#### Links
[//]: # (TODO:)

### `roadiehq:utils:serialize:json`

Converts JSON to a string format.

#### Inputs

| Name     | Description                                                                                                                            | Type                | Example                   |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|---------------------|---------------------------|
| data*    | Input data to perform serialization on.                                                                                                | `object` / `array`  | { a: "a", b: { c: "c" } } |
| replacer | Array of keys that should be included in output. If specified, keys not in this array will be excluded.                                | `array`             | ['a', 'b', 'c']           |
| space    | The number of spaces to add after each property. If >=1 it adds newlines after each property. If a string it adds that string instead. | `number` / `string` | 1                         |

```yaml
steps:
  - id: roadiehq-utils-serialize-json
    name: serialize json
    action: roadiehq:utils:serialize:json
    input:
      data: { a: "a", b: { c: "c" } }
      replacer:
        - a
        - b
        - c
      space: 1
```

#### Examples
[//]: # (TODO:)

#### Outputs

The `roadiehq:utils:serialize:json` action produces one output.

| Name       | Description                      | Type     |
|------------|----------------------------------|----------|
| serialized | Output result from serialization | `string` |

#### Links
[//]: # (TODO:)

## Parsing

### `xml`
[//]: # (TODO:)

#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/xml/xml.ts
https://www.npmjs.com/package/@k3tech/backstage-plugin-scaffolder-backend-module-parsings

### `yaml`
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/yaml/yaml.ts

### `json`
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/json/json.ts

## Content manipulation

### `roadiehq:utils:jsonata`

Allows performing JSONata operations and transformations on input objects and produces the output result as a step output.

#### Inputs
| Name        | Description                                | Type               | Example          |
| ----------- | ------------------------------------------ |--------------------|------------------|
| data*       | Input data to be transformed               | `object` / `array` | `{ a: "a" }`     |
| expression* | JSONata expression to perform on the input | `string`            | `users[0].email` |

#### Examples
```yaml
steps:
  - id: transform
    name: Transform with jsonata
    action: roadiehq:utils:jsonata
    input:
      data: { users: [{ email: 'a@b.com', name: 'a' }] }
      expression: 'users[0].email'
```

#### Outputs
The `roadiehq:utils:jsonata` action produces one output.

| Name   | Description                | Type                                     |
| ------ | -------------------------- |------------------------------------------|
| result | Output result from JSONata | `object` / `array` / `string` / `number` |

### `roadiehq:utils:jsonata:yaml:transform`

Allows performing JSONata operations and transformations on a YAML file in the workspace. The result can be read from the result step output.

#### Inputs
| Name         | Description                                | Type     | Example                                             |
| ------------ | ------------------------------------------ |----------|-----------------------------------------------------|
| path\*       | Input path to read yaml file               | `string` | 'backstage/catalog-info.yaml'                       |
| expression\* | JSONata expression to perform on the input | `string` | 'metadata.annotations.`backstage.io/kubernetes-id`' |
| options      | YAML stringify options                     | `object`  | { 'indent': 4 }                                     |

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

#### Inputs
| Name         | Description                                                                                                                                                                                                              | Type                | Example                  |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|--------------------------|
| path\*       | Input path to read json file                                                                                                                                                                                             | `string`            | 'backstage/package.json' |
| expression\* | JSONata expression to perform on the input                                                                                                                                                                               | `string`            | 'engines.node'           |
| as           | Returns result as a JSON string or an object                                                                                                                                                                             | `string`            | 'string' / 'object'      |
| replacer     | If `string` is specified for the `as` field, this filters the output by specifiying an array of keys that should be included in output. If specified, keys not in this array will be excluded.                           | `array`             | ['a', 'b', 'c']          |
| space        | If `string` is specified for the `as` field, this defines the number of spaces to add after each property in the resulting string. If >=1 it adds newlines after each property. If a string it adds that string instead. | `number` / `string` | 1                        |

#### Examples

```yaml
steps:
  - id: transform
    name: Transform JSON
    action: roadiehq:utils:jsonata:json:transform
    input:
      path: a/b/test.json
      expression: 'users[0]'
      as: 'object'
```

```yaml
steps:
  - id: transform
    name: Transform JSON
    action: roadiehq:utils:jsonata:json:transform
    input:
      path: a/b/test.json
      expression: 'users[0]'
      as: 'string'
      replacer:
        - email
        - name
        - prefix
      space: 1
```

#### Outputs

The `roadiehq:utils:jsonata:json:transform` action produces one output.

| Name   | Description                               | Type               |
| ------ | ----------------------------------------- |--------------------|
| result | Output result from JSONata json transform | `string` / `object` |

### `json:merge-file`

Merges JSON files into a single JSON object stored in a new file in the workspace.

#### Inputs
| Name             | Description                                                                                                                                    | Type     | Example                                    |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------------------------------|
| inputFile\*      | The file in the working directory to merge.                                                                                                    | `string` | 'package.json'                             |
| outputFileName\* | The name of the file to write to.                                                                                                              | `string` | 'package.json.updated'                     |
| outputFilePath   | The directory path to output the file to. This is combined with the file name to form the full path. Defaults to the task's working directory. | `string` | 'updates'                                  |
| jsonMergeOptions | Options to pass to the JSON mergeFiles function. [See options here.](https://www.npmjs.com/package/json-merger#config)                         | `object` | { 'defaultArrayMergeOperation': 'concat' } |

#### Examples

```yaml
    - id: merge-files
      name: Merge files
      action: json:merge-file
      input:
        inputFile: "file-1.json"
        outputFileName: results.json
        outputFilePath: updated
        jsonMergeOptions:
          defaultArrayMergeOperation: "concat"
```

#### Outputs
None

### `json:merge-files`

Merges JSON files into a single JSON object stored in a new file in the workspace.

#### Inputs
| Name             | Description                                                                                                                                    | Type     | Example                                    |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------------------------------|
| inputFiles\*     | The file in the working directory to merge.                                                                                                    | `array`  | ['package1.json', 'package2.json']         |
| outputFileName\* | The name of the file to write to.                                                                                                              | `string` | 'package3.json'                            |
| outputFilePath   | The directory path to output the file to. This is combined with the file name to form the full path. Defaults to the task's working directory. | `string` | 'updates'                                  |
| jsonMergeOptions | Options to pass to the JSON mergeFiles function. [See options here.](https://www.npmjs.com/package/json-merger#config)                         | `object` | { 'defaultArrayMergeOperation': 'concat' } |

#### Examples

```yaml
    - id: merge-files
      name: Merge files
      action: json:merge-file
      input:
        inputFiles: ['file-1.json', 'file-2.json']
        outputFileName: result.json
        outputFilePath: updated
        jsonMergeOptions:
          defaultArrayMergeOperation: "concat"
```

#### Outputs
None

### `roadiehq:utils:json:merge`

Merge new data into an existing JSON file.

#### Inputs
| Name            | Description                                                                                                     | Type                | Example                                                      |
|-----------------|-----------------------------------------------------------------------------------------------------------------|---------------------|--------------------------------------------------------------|
| path\*          | Path to existing file to append.                                                                                | `string`            | 'package.json'                                               |
| content\*       | This will be merged into to the file. Can be either an object or a string.                                      | `string` / `object` | { 'workspaces': { 'packages': ['packages/*', 'plugins/*'] } } |
| mergeArrays     | Where a value is an array the merge function should concatenate the provided array value with the target array. | `boolean`           | true                                                         |
| matchFileIndent | Make the output file indentation match that of the specified input file.                                        | `boolean`           | true                                                         |

#### Examples

```yaml
steps:
  - id: merge
    name: JSON merge
    action: json:merge
    input:
      path: 'package.json'
      content: 
        engines:
          node: '18'
```

```yaml
steps:
  - id: merge
    name: JSON merge
    action: roadiehq:utils:json:merge
    input:
      path: 'package.json'
      mergeArrays: true
      matchFileIndent: true
      content: 
        workspaces: 
          packages: 
           - 'packages/*'
           - 'plugins/*'
```

#### Outputs

The `roadiehq:utils:json:merge` action produces one output.

| Name | Description                           | Type     |
|------|---------------------------------------|----------|
| path | Path to the file that got appended to | `string` |

### `regex:replace`
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-regex

### `regex:fs:replace:plus`
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#regexfsreplaceplus

## Other utils

### `uuid:v4:gen:plus`
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#uuidv4genplus

### `vars:plus`
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#varsplus


# Language / protocol / infrastructure

## Git

### `git`
https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-git-actions

## HCL

### `hcl:merge`
[//]: # (TODO:)
https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts

### `hcl:merge:write`
[//]: # (TODO:)
https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts

### `hcl:merge:files`
[//]: # (TODO:)
https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts

### `hcl:merge:files:write`
[//]: # (TODO:)
https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts

## Pulumi

### `pulumi:new`
https://github.com/pulumi/pulumi-backstage-plugin/tree/main/plugins/backstage-scaffolder-backend-pulumi#pulumi-new-action
### `pulumi:up`
https://github.com/pulumi/pulumi-backstage-plugin/tree/main/plugins/backstage-scaffolder-backend-pulumi#pulumi-up-action

## Kubernetes

### `kubernetes:create-namespace`
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-kubernetes-dynamic

### `deploy:kubernetes`
[//]: # (TODO:)
https://github.com/pfeifferj/backstage-plugin-scaffolder-kubernetes-deploy/blob/main/src/actions/k8s-apply.ts

### `kube:apply`
[//]: # (TODO:)
https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/apply.ts

### `kube:delete`
[//]: # (TODO:)
https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/delete.ts

### `kube:job:wait`
[//]: # (TODO:)
https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/wait.ts

## Maven

### `maven`
https://www.npmjs.com/package/@gcornacchia/backstage-plugin-scaffolder-maven-actions


# 3rd Party Tools

## Ansible

### `ansible:jobTemplate:launch`
[//]: # (TODO:)
https://github.com/KiwiGDC/backstage-kawx/blob/main/plugins/scaffolder-backend-module-kawx/src/actions/run/run.ts

### `ansible-controller:job_template:launch`
[//]: # (TODO:)
https://www.npmjs.com/package/@mycloudlab/scaffolder-backend-module-ansible-controller

## ArgoCD

### `argocd:create-resources`
[//]: # (TODO:)

## AWS

### `roadiehq:aws:s3:cp`
[//]: # (TODO:)

### `roadiehq:aws:ecr:create`
[//]: # (TODO:)

### `roadiehq:aws:secrets-manager:create`
[//]: # (TODO:)

### `opa:get-env-providers`
[//]: # (TODO:)
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `opa:create-secret`
[//]: # (TODO:)
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `opa:createRepoAccessToken:gitlab`
[//]: # (TODO:)
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `opa:get-platform-metadata`
[//]: # (TODO:)
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `opa:get-ssm-parameters`
[//]: # (TODO:)
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `aws:cloudcontrol:create`
[//]: # (TODO:)
https://www.npmjs.com/package/@alithya-oss/plugin-scaffolder-backend-module-aws-core

## Azure

### `publish:azure`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-azure/src/actions/azure.ts

### `azure:repo:clone`

[//]: # (TODO:)

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

### `git:clone:azure`
[//]: # (TODO:)
clone multiple repos
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/repos/git-clone-azure.ts

### `azure:repo:push`
[//]: # (TODO:)
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

### `azure:repo:pr`
[//]: # (TODO:)
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

### `git:commit:azure`
[//]: # (TODO:)
commit and push to branch
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/repos/git-commit-azure.ts

### `azure:pipeline:create`
[//]: # (TODO:)
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/tree/main
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/createAzurePipeline.ts

### `pipeline:create:azure`
[//]: # (TODO:)
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/piepline/pipeline-create-azure.ts

### `azure:pipeline:run`
[//]: # (TODO:)
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/tree/main
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/runAzurePipeline.ts

### `azure:pipeline:permit`
[//]: # (TODO:)
https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-pipelines
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/tree/main
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/permitAzurePipeline.ts

### `azure:repo:clone`
[//]: # (TODO:)
https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/cloneAzureRepo.ts

### `azure:repo:push`
[//]: # (TODO:)
https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/pushAzureRepo.ts

### `azure:repo:pr`
[//]: # (TODO:)
https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/pullRequestAzureRepo.ts

## Bitbucket

### `publish:bitbucket`
[//]: # (TODO:)
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

### `publish:bitbucketCloud`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloud.ts

### `bitbucket:pipelines:run`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloudPipelinesRun.ts

### `publish:bitbucketCloud:pull-request`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloudPullRequest.ts

### `publish:bitbucketServer`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-server/src/actions/bitbucketServer.ts

### `publish:bitbucketServer:pull-request`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-server/src/actions/bitbucketServerPullRequest.ts

## CNEO

### `cnoe:kubernetes:apply`
[//]: # (TODO:)
https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/k8s-apply.ts

### `cnoe:verify:dependency`
[//]: # (TODO:)
https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/verify.ts

### `cnoe:utils:sanitize`
[//]: # (TODO:)
https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/sanitize.ts

## Codacy

### `codacy:add-repo`
[//]: # (TODO:)
https://github.com/codacy/backstage-plugin

## Confluence

### `confluence:transform:markdown`
[//]: # (TODO:)
https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-confluence-to-markdown

## Cue

### `cue:cueflow`
[//]: # (TODO:)
https://github.com/shoukoo/backstage-plugin-scaffolder-cuelang/blob/main/src/actions/cueflow.ts

## Gerrit

### `publish:gerrit:review`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gerrit/src/actions/gerritReview.ts

### `publish:gerrit`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gerrit/src/actions/gerrit.ts

## Gitea

### `publish:gitea`
[//]: # (TODO:)
https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-gitea

## GitHub

### `publish:github`
[//]: # (TODO:)

This action creates a new GitHub repository and publishes the files in the workspace directory to the repository. There is one mandatory parameter `repoUrl`. The repo url picker described in the `string` parameter description above.

The `repoUrl` must be in the format `github.com?repo=<reponame>&owner=<owner org>`

#### Examples
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
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubPullRequest.ts

This action creates a pull request against a pre-existing repository using the files contained in the workspace directory. 

#### Examples
The most basic example is:

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
[//]: # (TODO:)

The `github:actions:dispatch` action allows you to trigger the execution of a GitHub action on a repository. The `repoUrl` option is a repo url for GitHub. The `RepoUrlPicker` documented above can generate this value. The `workflowId` can be the workflow id from the GitHub API or you can just use the filename for the workflow file itself. The `branchOrTagName` indicates which commit to run the workflow against.

#### Examples
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
[//]: # (TODO:)

You can configure a webhook on an existing repository in GitHub using this action. It takes `repoUrl` and `webhookUrl`. The `repoUrl` option needs to be in a GitHub repo format. The `RepoUrlPicker` documented above will generate a URL in the correct format.

#### Examples
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

### `github:autolinks:create`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubAutolinks.ts

### `github:deployKey:create`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubDeployKey.ts

### `github:environment:create`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubEnvironment.ts

### `github:issues:label`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubIssuesLabel.ts

### `github:pages:enable`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubPagesEnable.ts

### `github:repo:create`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubRepoCreate.ts

### `github:repo:push`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubRepoPush.ts

### `parse:repo-url:plus`
[//]: # (TODO:)
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#parserepo-urlplus

## Gitlab

### `publish:gitlab`

Initializes a git repository of the content in the workspace, and publishes it to GitLab. See input options [in the application](/docs/scaffolder/writing-templates/#actions)

[//]: # (TODO:)

#### Examples
```yaml
steps:
  - id: publish
    action: publish:gitlab
    name: Publish to GitLab
    input:
      repoUrl: gitlab.com?repo=project_name&owner=group_name
```

### `publish:gitlab:merge-request`
[//]: # (TODO:)
Create a merge request in GitLab. See input options [in the application](/docs/scaffolder/writing-templates/#actions)

#### Examples
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

### `gitlab:repo:push`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabRepoPush.ts

### `gitlab:group:ensureExists`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabGroupEnsureExists.ts

### `gitlab:issues:create`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabIssueCreate.ts

### `gitlab:issue:edit`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabIssueEdit.ts

### `gitlab:pipeline:trigger`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabPipelineTrigger.ts

### `gitlab:projectAccessToken:create`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabProjectAccessTokenCreate.ts

### `gitlab:projectVariable:create`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabProjectVariableCreate.ts

### `gitlab:projectDeployToken:create`
[//]: # (TODO:)
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabProjectDeployTokenCreate.ts

## Humanitec

### `humanitec:create-app`
[//]: # (TODO:)
https://www.npmjs.com/package/@humanitec/backstage-plugin-scaffolder-backend-module

## Microsoft Teams

### `ms-teams:sendMessage`
[//]: # (TODO:)
https://www.npmjs.com/package/@grvpandey11/backstage-plugin-scaffolder-backend-module-ms-teams

## NPM

### `npm:init`
[//]: # (TODO:)
https://github.com/arhill05/backstage-plugin-scaffolder-npm-actions

### `npm:install`
[//]: # (TODO:)
https://github.com/arhill05/backstage-plugin-scaffolder-npm-actions

### `npm:exec`
[//]: # (TODO:)
https://github.com/arhill05/backstage-plugin-scaffolder-npm-actions

### `npm:config`
[//]: # (TODO:)
https://github.com/arhill05/backstage-plugin-scaffolder-npm-actions

## Odo

### `devfile:odo:command`
[//]: # (TODO:)
https://www.npmjs.com/package/@backstage-community/plugin-scaffolder-backend-module-odo

### `devfile:odo:component:init`
[//]: # (TODO:)
https://www.npmjs.com/package/@backstage-community/plugin-scaffolder-backend-module-odo

## Pagerduty

### `pagerduty:service:create`
[//]: # (TODO:)
https://github.com/PagerDuty/backstage-plugin-scaffolder-actions/blob/main/src/actions/custom.ts
https://www.npmjs.com/package/@pagerduty/backstage-plugin-scaffolder-actions

## Quay

### quay:create-repository
[//]: # (TODO:)
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-quay

## Sonarqube

### `sonarqube:create-project`
[//]: # (TODO:)
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-sonarqube

## ServiceNow

### `servicenow:now:table:createRecord`
[//]: # (TODO:)
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow
### `servicenow:now:table:deleteRecord`
[//]: # (TODO:)
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow
### `servicenow:now:table:modifyRecord`
[//]: # (TODO:)
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow
### `servicenow:now:table:retrieveRecord`
[//]: # (TODO:)
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow
### `servicenow:now:table:retrieveRecords`
[//]: # (TODO:)
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow
### `servicenow:now:table:updateRecord`
[//]: # (TODO:)
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow

## Slack

### `slack:sendMessage:conversation`
[//]: # (TODO:)
https://github.com/arhill05/backstage-plugin-scaffolder-backend-module-slack/blob/main/src/actions/slack/send-slack-message-via-slack-api.ts

### `slack:sendMessage:webhook`
[//]: # (TODO:)
https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-backend-module-slack

## Sentry

### `sentry:create-project`
[//]: # (TODO:)
https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-sentry
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-sentry/src/actions/createProject.ts

## Torque

### `torque:create-app`
[//]: # (TODO:)
https://www.npmjs.com/package/@qtorque/backstage-plugin-torque-backend

## Webex

### `webex:webhooks:sendMessage`
[//]: # (TODO:)
https://www.npmjs.com/package/@coderrob/backstage-plugin-scaffolder-backend-module-webex

## Yeoman

### `run:yeoman`
[//]: # (TODO:)
https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-yeoman

