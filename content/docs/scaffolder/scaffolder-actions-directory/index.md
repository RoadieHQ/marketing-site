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

| **Key**              | **Description**                                                                                            | **Type**    | **Example** |
|----------------------|------------------------------------------------------------------------------------------------------------|-------------|-------------|
| `url`                | Relative path or absolute URL pointing to the single file to fetch.                                         | `string`    |             |
| `targetPath`         | Target path within the working directory to download the file as.                                           | `string`    |             |
| `values`             | Values to pass on to the templating engine.                                                                 | `object`    |             |
| `cookiecutterCompat` | Enable features to maximize compatibility with templates built for fetch:cookiecutter.                      | `boolean`   |             |
| `replace`            | If set, replaces the file in targetPath instead of overwriting the existing one.                            | `boolean`   |             |
| `trimBlocks`         | Controls trimming of block white spaces in templates, if applicable.                                        | `boolean`   |             |
| `lstripBlocks`       | Controls stripping of left-hand whitespace before block-level structures.                                   | `boolean`   |             |
| `token`              | An optional token to use for authentication when reading the resources.                                     | `string`    |             |

#### Examples
```yaml
steps:
  - action: fetch:template:file
    id: fetch-template-file
    name: Fetch template file
    input:
      url: './skeleton.txt'
      targetPath: './target/skeleton.txt'
      values:
        name: 'test-project'
        count: 1234
        itemList: ['first', 'second', 'third']

```
This example fetches a single template from a relative path and substitutes the values name, count, and itemList into the file during the templating process. This allows for dynamic content creation based on the input values.
#### Outputs
`None`

#### Links

[code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/templateFile.ts)

### `fetch:rails`
Downloads a Rails template from a given URL, applies templating using Rails, and optionally runs it inside a Docker container.

#### Inputs

| **Key**                     | **Description**                                                              | **Type**               | **Example** |
|-----------------------------|------------------------------------------------------------------------------|------------------------|-------------|
| `url`                       | Relative path or absolute URL pointing to the directory tree to fetch         | `string`               |             |
| `targetPath`                | Target path within the working directory to download the contents to          | `string`               |             |
| `values`                    | Values to pass on to Rails for templating                                     | `object`               |             |
| `values.railsArguments`      | Arguments to pass to the `rails new` command                                 | `object`               |             |
| `values.railsArguments.minimal` | Preconfigure a minimal Rails app                                           | `boolean`              |             |
| `values.railsArguments.skipBundle` | Don't run `bundle install`                                             | `boolean`              |             |
| `values.railsArguments.skipWebpackInstall` | Don't run Webpack install                                      | `boolean`              |             |
| `values.railsArguments.skipTest`  | Skip test files                                                          | `boolean`              |             |
| `values.railsArguments.skipActionCable` | Skip Action Cable files                                            | `boolean`              |             |
| `values.railsArguments.skipActionMailer` | Skip Action Mailer files                                          | `boolean`              |             |
| `values.railsArguments.skipActionMailbox` | Skip Action Mailbox gem                                          | `boolean`              |             |
| `values.railsArguments.skipActiveStorage` | Skip Active Storage files                                        | `boolean`              |             |
| `values.railsArguments.skipActionText` | Skip Action Text gem                                               | `boolean`              |             |
| `values.railsArguments.skipActiveRecord` | Skip Active Record files                                          | `boolean`              |             |
| `values.railsArguments.force` | Overwrite files that already exist                                          | `boolean`              |             |
| `values.railsArguments.api`   | Preconfigure smaller stack for API-only apps                                 | `boolean`              |             |
| `values.railsArguments.template` | Path to an application template (filesystem path or URL)                 | `string`               |             |
| `values.railsArguments.webpacker` | Preconfigure Webpack with a specific framework (e.g. react, vue, etc.)   | `string (enum)`        |             |
| `values.railsArguments.database` | Preconfigure for selected database (e.g. mysql, postgresql, etc.)         | `string (enum)`        |             |
| `values.railsArguments.railsVersion` | Set up the app with a Gemfile pointing to a specific Rails version    | `string (enum)`        |             |
| `imageName`                  | Specify a Docker image to run `rails new`. Used when a local Rails is not found | `string`               |             |


#### Examples
```yaml
steps:
  - id: fetch-base
    name: Fetch Base
    action: fetch:rails
    input:
      url: ./template
      values:
        name: ${{ parameters.name }}
        owner: ${{ parameters.owner }}
        system: ${{ parameters.system }}
        railsArguments: ${{ parameters.railsArguments }}
```
This step fetches the specified Rails template and configures it with the provided values and Rails arguments, enabling customization based on user input during scaffolding.

#### Outputs
| **Key**           | **Description**                                         | **Type**   |
|-------------------|---------------------------------------------------------|------------|
| `targetPath`      | Path where the template will be downloaded and processed | `string`   |
| `outputPath`      | The result directory where the generated files are copied | `string`   |

#### Links
[code](https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-rails)

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
[code](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-http-request)


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


### `debug:fs:read:plus`

#### Inputs

#### Examples
```yaml
steps:
  - action: debug:fs:read:plus
    id: debug-fs-read
    name: Read files
    input:
      files:
        - ./catalog-info.yaml
        - some-file.txt
      useMainLogger: true

```

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
[code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/register.ts)

### `catalog:register:plus`
Registers entities from a catalog descriptor file in the software catalog.
#### Inputs

| **Key**              | **Description**                                                             | **Type**       | **Example** |
|----------------------|-----------------------------------------------------------------------------|----------------|-------------|
| `catalogInfoUrl`      | An absolute URL pointing to the catalog info file location                  | `string`       |             |
| `optional`            | Permit the registered location to optionally exist. Default: `false`        | `boolean`      |             |




#### Examples
```yaml
steps:
  - action: catalog:register:plus
    id: register-with-catalog
    name: Register with the catalog
    input:
      infos:
        - catalogInfoUrl: http://github.com/backstage/backstage/blob/master/catalog-info.yaml

```

#### Outputs
| **Key**              | **Description**                                         | **Type**     |
|----------------------|---------------------------------------------------------|--------------|
| `entityRef`           | Reference to the entity that was registered             | `string`     |
| `catalogInfoUrl`      | The URL of the catalog info that was registered         | `string`     |


#### Links
[code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/catalog/register.ts)

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
[code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/write.ts)

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
[code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/fetch.ts)

### `catalog:query:plus`
Creates a template action that queries a catalog using provided filters, fields, and ordering parameters. It utilizes Backstage's `CatalogApi` for fetching catalog entities and allows customization through a schema for input and output data.

#### Inputs
| **Key**            | **Description**          | **Type**                 | **Example** |
|--------------------|--------------------------|--------------------------|-------------|
| `fields`           | Fields to be retrieved    | `array` of `string`       |             |
| `limit`            | Limit for query results   | `number`                 |             |
| `filter`           | Filter query for entities | `any`                    |             |
| `orderFields.field`| Field to order by         | `string`                 |             |
| `orderFields.order`| Sort order                | `string`, enum: `asc`, `desc` |             |
| `fullTextFilter.term` | Search term for full-text filtering | `string`        |             |
| `fullTextFilter.fields`| Fields for full-text filtering | `array` of `string` |             |

#### Examples
```yaml
steps:
  - action: catalog:query:plus
    id: query-in-catalog
    name: Query in catalog
    input:
      queries:
        - limit: 2
          fields:
            - metadata.name
          filter:
            metadata.annotations.backstage.io/template-origin: template:default/java-api
            relations.dependsOn: ${{ parameters.component_ref }}
```
This step queries the catalog for up to 2 entities, retrieving only the `metadata.name` field, filtered by a specific template origin annotation and a dependency relation based on the provided `component_ref` parameter.

#### Outputs
| **Key**  | **Description**            | **Type**            |
|----------|----------------------------|---------------------|
| `results`| The queried catalog results | `array` of `array` of `Entity` |


#### Links
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/catalog/query.ts)

### `catalog:relation:plus`
Query entities based on relations. It uses a schema-based validation approach for input and output, interacting with a catalog of entities through a `CatalogClient`.

#### Inputs
| **Key**               | **Description**                                                  | **Type**                          | **Example** |
|-----------------------|------------------------------------------------------------------|-----------------------------------|-------------|
| `relations`           | List of entity relations.                                        | `array` of `object`               |             |
| `relations.type`       | The type of the relation.                                        | `string`                          |             |
| `relations.targetRef`  | The entity reference of the target for this relation.            | `string`                          |             |
| `optional`            | Optional flag indicating whether the property is optional.       | `boolean` or `undefined`          |             |
| `defaultKind`         | Default kind for the entity.                                     | `string` or `undefined`           |             |
| `defaultNamespace`     | Default namespace for the entity.                                | `string` or `undefined`           |             |
| `relationType`        | The type of relation for the entity.                             | `string` or `undefined`           |             |

#### Examples
```yaml
steps:
  - action: catalog:relation:plus
    id: query-in-relations
    name: Query in relations
    input:
      queries:
        - relations:
            - type: apiProvidedBy
              targetRef: component/default:customers-service
            - type: ownedBy
              targetRef: group/default:dream-devs
          optional: true
          relationType: apiProvidedBy
```

This step defines an action `catalog:relation:plus` to query entity relations, filtering by the apiProvidedBy relation type, with optional entities related to customers-service and dream-devs.

#### Outputs
| **Key**     | **Description**                                   | **Type**                  |
|-------------|---------------------------------------------------|---------------------------|
| `results`   | List of entities (or null) matching the query.    | `array` of `array` of `Entity` or `null` |


#### Links
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/catalog/relations.ts)

### catalog:timestamping
Adds the `backstage.io/createdAt` annotation containing the current timestamp to your entity object#### Inputs

#### Examples
```yaml
steps:
  - id: timestamp
    name: Add Timestamp to catalog-info.yaml
    action: catalog:timestamping
```
#### Outputs

#### Links
[npm package](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator)

### catalog:scaffolded-from
Adds `scaffoldedFrom` spec containing the template entityRef to your entity object
#### Inputs

#### Examples
```yaml
steps:
  - id: append-templateRef
    name: Append the entityRef of this template to the entityRef
    action: catalog:scaffolded-from
```

#### Outputs

#### Links
[npm package](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator)

### catalog:annotate
Allows you to annotate your entity object with specified label(s), annotation(s) and spec property(ies)

#### Inputs

#### Examples
```yaml
steps:
  - id: add-fields-to-catalog-info
    name: Add a few fields into `catalog-info.yaml` using the generic action
    action: catalog:annotate
    input:
      labels:
        custom: ${{ parameters.label }}
        other: "test-label"
      annotations:
        custom.io/annotation: ${{ parameters.label }}
        custom.io/other: "value"
```

#### Outputs

#### Links
[npm package](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator)

## Notifications

### `notification:send`
Creates a template action for sending notifications via the Backstage Notification Service. It takes in recipients, severity, and other optional parameters, then sends notifications with the specified payload and error handling.

#### Inputs
| **Key**       | **Description**                                                                                       | **Type**               | **Example** |
|---------------|-------------------------------------------------------------------------------------------------------|------------------------|-------------|
| `recipients`  | The recipient of the notification, either broadcast or entity. If using entity, `entityRef` must be provided | `string` (enum: 'broadcast', 'entity') |             |
| `entityRefs`  | The entity references to send the notification to, required if using recipient of entity               | `string[]`             |             |
| `title`       | Notification title                                                                                     | `string`               |             |
| `info`        | Notification description                                                                               | `string`               |             |
| `link`        | Notification link                                                                                      | `string`               |             |
| `severity`    | Notification severity                                                                                  | `string` (enum: 'low', 'normal', 'high', 'critical') |             |
| `scope`       | Notification scope                                                                                     | `string`               |             |
| `optional`    | Do not fail the action if the notification sending fails                                               | `boolean`              |             |


#### Examples
```yaml
steps:
  - id: sendNotification
    action: notification:send
    name: Send Notification
    input:
      recipients: broadcast
      title: Test notification
```
This triggers the "send notification" action with a broadcast recipient and a title "Test notification"
#### Outputs
None

#### Links
[code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-notifications/src/actions/sendNotification.ts)

## File Operations

### `fs:delete`

This action deletes the given files or directories in the workspace. It has one input parameter `files` that can be provided an array of file paths or directory paths to delete.


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
[code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/delete.ts)

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
[code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/rename.ts)

### `fs:rename:plus

Defines a file renaming action for Backstage, allowing users to rename files and directories within a workspace.

#### Inputs
| **Key**              | **Description**                                         | **Type**        | **Example** |
|----------------------|---------------------------------------------------------|-----------------|-------------|
| `from`               | The source location of the file to be renamed            | `string`        |             |
| `to`                 | The destination of the new file                         | `string`        |             |
| `overwrite`          | Overwrite existing file or directory, default is `false`| `boolean?`      |             |
| `files`              | Array of files to rename, each using `commonParams`      | `Array<object>` |             |
| `commonParams`       | Optional shared parameters for all files                | `object?`       |             |

#### Examples
```yaml
steps:
  - action: fs:rename:plus
    id: renameFiles
    name: Rename files
    input:
      commonParams:
        overwrite: true
      files:
        - from: file1.txt
          to: file1Renamed.txt
          overwrite: false
        - from: file2.txt
          to: file2Renamed.txt
          overwrite: false
        - from: file3.txt
          to: file3Renamed.txt
```

#### Outputs
| **Key**   | **Description**                        | **Type**        |
|-----------|----------------------------------------|-----------------|
| `results` | Array of results of the rename actions | `Array<any>`    |

#### Links
[code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/filesystem/rename.ts)

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
[code]()

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
[//]: # (TODO: links)

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
[//]: # (TODO: examples)

#### Outputs
None

#### Links
[//]: # (TODO: links)

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
[//]: # (TODO: links)

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
[//]: # (TODO: examples)

#### Outputs

The `roadiehq:utils:fs:write` action produces one output.

| Name | Description                    | Type     |
|------|--------------------------------|----------|
| path | Path to the newly created file | `string` |

#### Links
[//]: # (TODO: links)

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
[//]: # (TODO: examples)

#### Outputs

The `roadiehq:utils:fs:append` action produces one output.

| Name | Description                           |
| ---- | ------------------------------------- |
| path | Path to the file that got appended to |

#### Links
[//]: # (TODO: links)

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
[//]: # (TODO: links)

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
[//]: # (TODO: examples)

#### Outputs

The `roadiehq:utils:zip` action produces one output.

| Name       | Description                                          | Type    |
| ---------- |------------------------------------------------------|---------|
| outputPath | Path to the newly created zip file in the workspace. | `string` |

#### Links
[//]: # (TODO: links)

### `zip:decompress:plus`
Decompress ZIP files from various sources, such as base64, files, or URLs, and saves them to specified destinations while handling errors.

#### Inputs
| **Key**           | **Description**                                           | **Type**           | **Example** |
|-------------------|-----------------------------------------------------------|--------------------|-------------|
| `content`         | Zip File Content.                                         | `string`           |             |
| `destination`     | Relative path of destination files.                       | `string`           |             |
| `encoding`        | Indicate if input "content" field has encoded in "base64", "file" or "url". | `'base64' | 'file' | 'url'` |             |
| `skipErrors`      | Not throw on errors, allowing next actions to proceed.     | `boolean`          |             |

#### Examples
```yaml
steps:
  - action: zip:decompress:plus
    id: zip-decompress
    name: Decompress multiple files.
    input:
      commonParams:
        encoding: file
      sources:
        - content: ./compressed-1.zip
          destination: ./tmp.zip-1/
        - content: ./compressed-2.zip
          destination: ./tmp.zip-2/
```
Defines a workflow step that decompresses multiple ZIP files (from local file paths) into specified destination directories using a custom zip:decompress:plus action.
#### Outputs
| **Key**         | **Description**                        | **Type**            |
|-----------------|----------------------------------------|---------------------|
| `results`       | List of results for each source input. | `Array<OutputFields>` |
| `success`       | Indicates if the decompression was successful. | `boolean`        |
| `files`         | List of decompressed files.            | `array`             |
| `mode`          | File permissions mode.                 | `number`            |
| `mtime`         | Modification time of the file.         | `string`            |
| `path`          | Path of the decompressed file.         | `string`            |
| `type`          | Type of the decompressed file (file/directory). | `string`        |
| `errorMessage`  | Error message if decompression failed. | `string`            |
#### Links
[code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/zip/zip-decompress.ts)

### `glob:plus`
Allows users to match files using glob patterns and various options for customizing the file search.

#### Inputs

| **Key**                        | **Description**                                                                                              | **Type**         | **Example** |
|---------------------------------|--------------------------------------------------------------------------------------------------------------|------------------|-------------|
| `patterns`                      | List of glob patterns to match files.                                                                         | `array[string]`  |             |
| `options.absolute`              | Return the absolute path for entries.                                                                         | `boolean`        |             |
| `options.baseNameMatch`         | If set to `true`, patterns without slashes will be matched against the basename of the path if it contains slashes. | `boolean`        |             |
| `options.braceExpansion`        | Enables Bash-like brace expansion.                                                                            | `boolean`        |             |
| `options.caseSensitiveMatch`    | Enables a case-sensitive mode for matching files.                                                             | `boolean`        |             |
| `options.concurrency`           | Specifies the maximum number of concurrent requests from a reader to read directories.                        | `number`         |             |
| `options.deep`                  | Specifies the maximum depth of a read directory relative to the start directory.                              | `number`         |             |
| `options.dot`                   | Allow patterns to match entries that begin with a period (`.`).                                               | `boolean`        |             |
| `options.extglob`               | Enables Bash-like `extglob` functionality.                                                                    | `boolean`        |             |
| `options.followSymbolicLinks`   | Indicates whether to traverse descendants of symbolic link directories.                                       | `boolean`        |             |
| `options.globstar`              | Enables recursively repeating a pattern containing `**`.                                                      | `boolean`        |             |
| `options.ignore`                | An array of glob patterns to exclude matches.                                                                 | `array[string]`  |             |
| `options.markDirectories`       | Mark the directory path with the final slash.                                                                 | `boolean`        |             |
| `options.objectMode`            | Returns objects (instead of strings) describing entries.                                                      | `boolean`        |             |
| `options.onlyDirectories`       | Return only directories.                                                                                      | `boolean`        |             |
| `options.onlyFiles`             | Return only files.                                                                                            | `boolean`        |             |
| `options.stats`                 | Enables object mode (`objectMode`) with an additional `stats` field.                                          | `boolean`        |             |
| `options.suppressErrors`        | Suppresses only `ENOENT` errors by default. Set to `true` to suppress any error.                              | `boolean`        |             |
| `options.throwErrorOnBrokenSymbolicLink` | Throw an error when symbolic link is broken if `true`, or safely return `lstat` call if `false`.       | `boolean`        |             |
| `options.unique`                | Ensures that the returned entries are unique.                                                                 | `boolean`        |             |
| `options.gitignore`             | Respect ignore patterns in `.gitignore` files that apply to the globbed files.                                | `boolean`        |             |


#### Examples
```yaml
steps:
  - action: glob:plus
    id: glob
    name: List files
    input:
      patterns:
        - "**/*.y[a?]ml"
```
This step uses the `glob:plus` action to list all files matching the pattern `"**/*.y[a?]ml"`, which includes `.yaml` and `.yml` files.

#### Outputs
| **Key**   | **Description**            | **Type**         |
|-----------|----------------------------|------------------|
| `results` | Array of matched file paths | `array[string]`  |

#### Links
[code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/glob.ts)

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
[//]: # (TODO: examples)

#### Outputs

The `roadiehq:utils:serialize:yaml` action produces one output.

| Name       | Description                      | Type    |
| ---------- | -------------------------------- |---------|
| serialized | Output result from serialization | `string` |

#### Links
[//]: # (TODO: links)

### `roadiehq:utils:serialize:json`

Converts JSON to a string format.

#### Inputs

| Name     | Description                                                                                                                            | Type                | Example                   |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|---------------------|---------------------------|
| data*    | Input data to perform serialization on.                                                                                                | `object` / `array`  | { a: "a", b: { c: "c" } } |
| replacer | Array of keys that should be included in output. If specified, keys not in this array will be excluded.                                | `array`             | ['a', 'b', 'c']           |
| space    | The number of spaces to add after each property. If >=1 it adds newlines after each property. If a string it adds that string instead. | `number` / `string` | 1                         |



#### Examples
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
#### Outputs

The `roadiehq:utils:serialize:json` action produces one output.

| Name       | Description                      | Type     |
|------------|----------------------------------|----------|
| serialized | Output result from serialization | `string` |

#### Links
[Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/serialize/json.ts)

## Parsing

### `xml`
Parse XML into JSON using various options and processing pipes, utilizing the `xml-js` library for conversion.

#### Inputs

| Key                    | Description                                                                                                       | Type           | Example |
|-----------------------|-------------------------------------------------------------------------------------------------------------------|----------------|---------|
| content               | XML source content                                                                                               | `string`       |         |
| encoding              | Indicate if input "content" field has encoded in "base64", "file", "raw" or "url".                            | `string`       |         |
| options.pipes         | Ordered pipes to transform nodes values by type.                                                                | `object`       |         |
| options.compact       | Whether to produce detailed object or compact object.                                                           | `boolean`      |         |
| options.trim          | Whether to trim whitespace characters that may exist before and after the text.                                 | `boolean`      |         |
| options.nativeType     | Whether to attempt converting text of numerals or boolean values to native type.                               | `boolean`      |         |
| options.nativeTypeAttributes | Whether to attempt converting attributes of numerals or boolean values to native type.                  | `boolean`      |         |
| options.addParent     | Whether to add parent property in each element object that points to parent object.                             | `boolean`      |         |
| options.alwaysArray   | Whether to always put sub elements as an item inside an array.                                                  | `boolean`      |         |
| options.alwaysChildren | Whether to always generate elements property even when there are no actual sub elements.                       | `boolean`      |         |
| options.instructionHasAttributes | Whether to parse contents of Processing Instruction as attributes or not.                          | `boolean`      |         |
| options.ignoreDeclaration | Whether to ignore parsing declaration property.                                                             | `boolean`      |         |
| options.ignoreInstruction | Whether to ignore parsing processing instruction property.                                                  | `boolean`      |         |
| options.ignoreAttributes | Whether to ignore parsing attributes of elements.                                                            | `boolean`      |         |
| options.ignoreComment  | Whether to ignore parsing comments of the elements.                                                            | `boolean`      |         |
| options.ignoreCdata   | Whether to ignore parsing CData of the elements.                                                                | `boolean`      |         |
| options.ignoreDoctype  | Whether to ignore parsing Doctype of the elements.                                                             | `boolean`      |         |
| options.ignoreText    | Whether to ignore parsing texts of the elements.                                                                | `boolean`      |         |

#### Examples
```yaml
steps:
  - action: xml
    id: xml-parse
    name: Parse xml files
    input:
      commonParams:
        encoding: raw
      sources:
        - content: "<books><book>nature calls</book></books>"
```
Parse multiple Xmls contents from various sources types.

#### Outputs
| Key       | Description                   | Type         |
|-----------|-------------------------------|--------------|
| results   | Array of parsed XML objects.  | `array`      |

#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/xml/xml.ts
https://www.npmjs.com/package/@k3tech/backstage-plugin-scaffolder-backend-module-parsings

### `yaml`
Parse YAML content from various sources using the Backstage scaffolder framework.

#### Inputs
| **Key**               | **Description**                                                           | **Type**               | **Example** |
|-----------------------|---------------------------------------------------------------------------|------------------------|-------------|
| `content`             | YAML source content                                                       | `string`               |             |
| `encoding`            | Indicates if input "content" is encoded in "base64", "file", "raw", or "url" | `string`               |             |

#### Examples
```yaml
steps:
  - action: YAML_ID
    id: yaml-parse
    name: Parse yaml files
    input:
      commonParams:
        encoding: raw
      sources:
        - content: |
            key: value
        - content: |
            anotherkey: another value
```
This YAML defines a pipeline step that parses two YAML files using the action identified by `YAML_ID`, with `raw` encoding for the content.

#### Outputs

| **Key**   | **Description**                   | **Type**    |
|-----------|-----------------------------------|-------------|
| `results` | Array of parsed YAML content      | `array[]`   |


#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/yaml/yaml.ts

### `json`

Process JSON data from various encoded content sources such as Base64, files, raw data, or URLs.

#### Inputs

| **Key**         | **Description**                                                                          | **Type**            | **Example** |
|-----------------|------------------------------------------------------------------------------------------|---------------------|-------------|
| `content`       | JSON source content                                                                      | `string`            |             |
| `encoding`      | Indicates if input `content` field is encoded in `base64`, `file`, `raw`, or `url`.       | `string`            |             |
| `sources`       | An array of fields containing the source JSON data and encoding information.              | `array` of `object` |             |
| `commonParams`  | (Optional) Common parameters shared by multiple sources for content and encoding          | `Partial<FieldsType>`|             |

#### Examples
```yaml
steps:
  - action: json
    id: json-parse
    name: Parse Json files
    input:
      commonParams:
        encoding: raw
      sources:
        - content: '{"key": "value"}'
```

This uses the `json` action to parse a raw JSON object from a content source with a common parameter of encoding set to "raw".

#### Outputs

| **Key**  | **Description**                    | **Type**      |
|----------|------------------------------------|---------------|
| `results`| Array of parsed JSON objects       | `array` of `object`|

#### Links
[code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/json/json.ts)

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
Validate an input structure using the `zod` library.
#### Inputs
| Key           | Description                                                                 | Type                            | Example |
|---------------|-----------------------------------------------------------------------------|---------------------------------|---------|
| `regExps`     | Array of regex objects with patterns, flags, replacements, and values       | `array`                         |         |
| `pattern`     | The regex pattern to match the value, like in `String.prototype.replace()`   | `string`                        |         |
| `flags`       | Optional array of regex flags (`g`, `m`, `i`, `y`, `u`, `s`, `d`)           | `array`                         |         |
| `replacement` | The replacement value for the regex, like in `String.prototype.replace()`    | `string`                        |         |
| `values`      | Array of objects containing key-value pairs for regex input values           | `array`                         |         |
| `key`         | Key to access the regex value                                               | `string`                        |         |
| `value`       | Input value of the regex                                                    | `string`                        |         |
#### Examples
```yaml
steps:
  - id: regexValues
    action: regex:replace
    name: Regex Values
    input:
      regExps:
        - pattern: 'dog'
          replacement: 'monkey'
          values:
            - key: 'eg1'
              value: exampleValue
```
Defines a workflow step that processes regex values by replacing instances of "dog" with "monkey" in the provided input value.

#### Outputs
| Key        | Description                                                            | Type     |
|------------|------------------------------------------------------------------------|----------|
| `pattern`  | A validated regex pattern that can be passed to the RegExp constructor  | `string` |
| `flags`    | A validated set of flags that modify regex behavior                    | `array`  |
| `values`   | Validated key-value pairs of regex input                               | `array`  |

#### Links
[code](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/regex-actions/src/actions/regex/replace.ts)
[npm package](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-regex)

### `regex:fs:replace:plus`
Enable regex-based search and replacement across files using glob patterns.

#### Inputs
| **Key**         | **Description**                                                             | **Type**    | **Example** |
|-----------------|-----------------------------------------------------------------------------|-------------|-------------|
| `pattern`       | Regex expression to evaluate in file contents from `file`.                  | `string`    |             |
| `glob`          | Expression glob to find files to evaluate                                   | `string`    |             |
| `replacement`   | Replacement expression based on the `pattern` field                         | `string`    |             |
| `flags`         | Regex flags like d, g, i, m, s, u, v or y (optional)                        | `string`    |             |

#### Examples
Replace in files using Regex and Glob

```yaml
steps:
  - action: regex:fs:replace:plus
    id: regex-fs-replace
    name: Replace in files
    input:
      glob: "**/*.y[a?]ml"
      pattern: a
      replacement: b
      flags: g

```
Replace on xml keeping original indentarion useful to Yaml, Json and XML formats.

```yaml
steps:
  - action: regex:fs:replace:plus
    id: regex-fs-replace
    name: Append spring-kafka
    input:
      pattern: ([\t ]+)</dependencies>
      glob: pom.xml
      replacement: |-
        $1	<dependency>
        $1		<!-- added from backstage -->
        $1		<groupId>org.springframework.kafka</groupId>
        $1		<artifactId>spring-kafka</artifactId>
        $1	</dependency>
        $1</dependencies>

```

#### Outputs

| **Key**   | **Description**                                   | **Type**     |
|-----------|---------------------------------------------------|--------------|
| `results` | Array containing objects with the results of the regex operation | `array<object>` |


#### Links
[Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/regex-fs-replace.ts)

## Other utils

### `uuid:v4:gen:plus`
Generates a list of UUIDv4 values, with inputs for specifying the number of UUIDs and outputs in the form of an array of generated UUID strings.

#### Inputs

| **Key**          | **Description**             | **Type**      | **Example** |
|------------------|-----------------------------|---------------|-------------|
| `amount`         | Amount of UUIDs to generate  | `number`      |             |

#### Examples
Generate 3 UUID's

```yaml
steps:
  - action: uuid:v4:gen:plus
    id: uuid-v4-gen
    name: UUID gen
    input:
      amount: 3

```

#### Outputs

| **Key**         | **Description**                      | **Type**    |
|-----------------|--------------------------------------|-------------|
| `results`       | List of generated UUIDs (UUIDv4)     | `array<string>` | 

#### Links
[Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/uuid.ts)

### `vars:plus`
Handle and log input variables, and return the same input as the output in a formatted structure.

#### Inputs
| **Key**    | **Description**         | **Type**      | **Example** |
|------------|-------------------------|---------------|-------------|
| `input`    | The input object passed to the action | `object` |             |

#### Examples
Proxy vars to reuse on next actions

```yaml
steps:
  - action: vars:plus
    id: reusable-vars
    name: Proxy vars
    input:
      foo: my-prefixed-${{ parameters.name | lower }}-foo
      bar: bar-${{ parameters.value | lower }}

```

#### Outputs
| **Key**    | **Description**           | **Type**    |
|------------|---------------------------|-------------|
| `result`   | Parsed input parameters    | `object`    |

#### Links
[Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/vars.ts)

# Language / protocol / infrastructure

## Git

### `git`
Allows execution of Git commands within a specified working directory.

#### Inputs

| **Key**                | **Description**                                                                 | **Type**       | **Example** |
|------------------------|---------------------------------------------------------------------------------|----------------|-------------|
| `command`              | The Git command to run                                                           | `string`       |             |
| `workingDirectory`      | Working directory within the scaffolder workspace to execute the command in      | `string`       |             |
| `args`                 | Arguments to pass to the Git command                                             | `string[]`     |             |

#### Examples
```yaml
 steps:
    - id: git
      name: git
      action: git
      input:
        command: ${{ parameters.command }} # ex: 'commit' - will make the scaffolder run the `git commit` command
        workingDirectory: ${{ parameters.workingDirectory }} # ex: './my-working-directory' - will execute the command in the specified directory relative to the scaffolder workspace
        args: ${{ parameters.args }} # ex: ['-m', 'My commit message'] - will add '-m My commit message' to the arguments passed to the git command
```
Example of using the generic git action.
#### Outputs
None

#### Links
[Code](https://github.com/arhill05/backstage-plugin-scaffolder-git-actions/blob/master/src/actions/git.ts)
[Package](https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-git-actions)

## HCL

### `hcl:merge`
Create an action for merging two HCL contents.

#### Inputs

| Key               | Description                       | Type                | Example |
|-------------------|-----------------------------------|---------------------|---------|
| `aSourceContent`  | The HCL content to be merged      | `string`            |         |
| `bSourceContent`  | The HCL content to be merged      | `string`            |         |

#### Examples

#### Outputs
| Key   | Description                     | Type       |
|-------|---------------------------------|------------|
| `hcl` | The merged HCL content          | `string`   |

#### Links
https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts

### `hcl:merge:write`
Merge two HCL content strings and write the merged result to a specified output path.

#### Inputs

| Key               | Description                                        | Type         | Example |
|-------------------|----------------------------------------------------|--------------|---------|
| `aSourceContent`  | The HCL content to be merged                       | `string`     |         |
| `bSourceContent`  | The HCL content to be merged                       | `string`     |         |
| `outputPath`      | The path to write the merged HCL content to       | `string`     |         |

#### Examples

#### Outputs
None


#### Links
[Code](https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts)

### `hcl:merge:files`
Merge two HCL files specified by their paths.

#### Inputs
| Key          | Description                                        | Type              | Example |
|--------------|----------------------------------------------------|-------------------|---------|
| `aSourcePath` | The path to the HCL file to be merged             | `string`          |         |
| `bSourcePath` | The path to the HCL file to be merged             | `string`          |         |

#### Examples

#### Outputs
| Key | Description                                  | Type     |
|-----|----------------------------------------------|----------|
| `hcl` | The merged HCL content from the two files   | `string` |

#### Links
https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts

### `hcl:merge:files:write`
Merge two HCL files and writing the merged content to a specified output path, with input validation using Zod.

#### Inputs
| Key          | Description                                        | Type             | Example |
|--------------|----------------------------------------------------|------------------|---------|
| `aSourcePath` | The path to the HCL file to be merged              | `string`         |         |
| `bSourcePath` | The path to the HCL file to be merged              | `string`         |         |
| `outputPath`  | The path to write the merged HCL content to        | `string`         |         |

#### Examples

#### Outputs
None

#### Links
https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts

## Pulumi

### `pulumi:new`
Action for creating a new Pulumi project, including input validation and execution of necessary commands to set up the project.
#### Inputs

| Key            | Description                                                                            | Type                                     | Example |
|----------------|----------------------------------------------------------------------------------------|------------------------------------------|---------|
| `template`     | The Pulumi template to use, this can be a built-in template or a URL to a template   | `string`                                 |         |
| `stack`        | The name of the Pulumi stack                                                           | `string`                                 |         |
| `organization` | The organization to which the Pulumi stack belongs                                     | `string`                                 |         |
| `name`         | The name of the Pulumi project                                                          | `string`                                 |         |
| `description`  | The Pulumi project description to use                                                  | `string`                                 |         |
| `config`       | The Pulumi project config to use                                                       | `object`                                 |         |
| `secretConfig` | The Pulumi project secret config to use                                                | `object`                                 |         |
| `args`         | The Pulumi command arguments to run                                                    | `string[]`                               |         |
| `folder`       | The folder to run Pulumi in                                                            | `string`                                 |         |

#### Examples
```yaml
steps:
  - id: pulumi-new-component
    name: Cookie cut the component Pulumi project
    action: pulumi:new
    input:
      name: "${{ parameters.component_id }}-infrastructure"
      description: ${{ parameters.description | dump }}
      organization: ediri
      stack: ${{ parameters.stack }}
      template: "https://github.com/my-silly-organisation/microservice-civo/tree/main/infrastructure-${{ parameters.cloud }}-${{ parameters.language }}"
      config:
        "node:node_count": "${{ parameters.nodeCount }}"
      folder: .
```
This example creates a new Pulumi project for a component, using specified parameters such as name, description, organization, stack, template URL, configuration settings, and folder.
#### Outputs
None
#### Links
https://github.com/pulumi/pulumi-backstage-plugin/tree/main/plugins/backstage-scaffolder-backend-pulumi#pulumi-new-action

### `pulumi:up`
Runs Pulumi to manage cloud resources, either in a local or remote workspace based on the provided configuration.
#### Inputs

| Key                          | Description                                                                    | Type                                                                                     | Example |
|------------------------------|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------|
| `stack`                       | The name of the Pulumi stack.                                                 | `string`                                                                                 |        |
| `organization`               | The organization name for the Pulumi stack.                                  | `string`                                                                                 |        |
| `name`                       | The name of the Pulumi project.                                               | `string`                                                                                 |        |
| `deployment`                 | This flag indicates that Pulumi Deployment will be used.                     | `boolean`                                                                                |        |
| `repoUrl`                    | The Pulumi project repo URL to use, when using Pulumi Deployment.            | `string`                                                                                 |        |
| `repoBranch`                 | The Pulumi project repo branch to use, when using Pulumi Deployment.         | `string`                                                                                 |        |
| `repoProjectPath`            | The Pulumi project repo path to use, when using Pulumi Deployment.           | `string`                                                                                 |        |
| `config`                     | The Pulumi project config to use.                                            | `object`                                                                                 |        |
| `providerCredentialsFromEnv` | The Pulumi project provider credentials to use.                              | `array of string`                                                                        |        |
| `secretConfig`               | The Pulumi project secret config to use.                                     | `object`                                                                                 |        |
| `outputs`                    | The Pulumi project outputs to return.                                        | `array of string`                                                                        |        |
| `preRunCommands`             | The Pulumi project pre-run commands to execute.                              | `array of string`                                                                        |        |
| `suppressProgress`           | Suppress progress output.                                                    | `boolean`                                                                                |        |


#### Examples
```yaml
steps:
    - id: pulumi-deploy-infrastructure
      name: Deploy the infrastructure using Pulumi CLI
      action: pulumi:up
      input:
        deployment: false
        name: "${{ parameters.component_id }}-infrastructure"
        repoUrl: "https://github.com/${{ (parameters.repoUrl | parseRepoUrl)['owner'] }}/${{ (parameters.repoUrl | parseRepoUrl)['repo'] }}"
        repoProjectPath: .
        organization: ediri
        outputs:
          - kubeconfig
          - ClusterId
        stack: ${{ parameters.stack }}
```
This example uses the Pulumi CLI to deploy infrastructure, specifying parameters such as the deployment type, project details, organization name, stack, and the expected outputs.
#### Outputs
| Key        | Description                           | Type                                                           |
|------------|---------------------------------------|----------------------------------------------------------------|
| (dynamic)  | The Pulumi project outputs to return. | `record of { [key: string]: { value: any; } }`                |

#### Links
https://github.com/pulumi/pulumi-backstage-plugin/tree/main/plugins/backstage-scaffolder-backend-pulumi#pulumi-up-action

## Kubernetes

### `kubernetes:create-namespace`
Creates a Kubernetes namespace, leveraging Kubernetes API and Backstage's catalog client to fetch cluster information.

#### Inputs
| Key          | Description                                                                 | Type         | Example |
|--------------|-----------------------------------------------------------------------------|--------------|---------|
| `namespace`  | Name of the namespace to be created                                         | `string`     |         |
| `clusterRef` | Cluster resource entity reference from the catalog                          | `string`     |         |
| `url`       | URL of the Kubernetes API, used if `clusterRef` is not provided            | `string`     |         |
| `token`      | Bearer token to authenticate with                                           | `string`     |         |
| `skipTLSVerify` | Skip TLS certificate verification, not recommended for production use, defaults to false | `boolean`    |         |
| `caData`     | Certificate Authority base64 encoded certificate                            | `string`     |         |
| `labels`     | Labels that will be applied to the namespace.                              | `string`     |         |

#### Examples
```yaml
steps:
    - id: create-kubernetes-namespace
      name: Create kubernetes namespace
      action: kubernetes:create-namespace
      input:
        namespace: ${{ parameters.namespace }}
        clusterRef: ${{ parameters.clusterRef }}
        url: ${{ parameters.url }}
        token: ${{ parameters.token }}
        skipTLSVerify: ${{ parameters.skipTLSVerify }}
        caData: ${{ parameters.caData }}
        labels: ${{ parameters.labels }}
```
This example creates a Kubernetes namespace using the `kubernetes:create-namespace` action, with inputs sourced from specified parameters.

#### Outputs
None



#### Links
https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-kubernetes-dynamic
https://github.com/janus-idp/backstage-plugins/tree/main/plugins/kubernetes-actions

### `deploy:kubernetes`
Action for deploying Kubernetes manifests within a Backstage application, using the Kubernetes API to apply the provided YAML or JSON resources.

In this format, the **Inputs** table summarizes the parameters required for the action, while the **Outputs** table outlines the expected output from the action.
#### Inputs
| Key          | Description                                                 | Type         | Example |
|--------------|-------------------------------------------------------------|--------------|---------|
| `manifest`   | YAML or JSON manifest for the Kubernetes resource to be applied | `any`        |         |
| `clusterUrl` | URL of the Kubernetes API                                  | `string`     |         |
| `authToken`  | Bearer token to authenticate with the Kubernetes API       | `string`     |         |

#### Examples

#### Outputs

| Key         | Description                                           | Type                |
|-------------|-------------------------------------------------------|---------------------|
| `result`    | Result of the applied Kubernetes manifest             | `KubernetesObject`  |

#### Links
https://github.com/pfeifferj/backstage-plugin-scaffolder-kubernetes-deploy/blob/main/src/actions/k8s-apply.ts

### `kube:apply`
Action for applying Kubernetes manifests in a Backstage application.
#### Inputs

| Key        | Description                                                   | Type            | Example |
|------------|---------------------------------------------------------------|------------------|---------|
| `manifest` | The resource manifest to apply in the Platform cluster        | `string`         |         |
| `namespaced` | Whether the API is namespaced or not                        | `boolean`        |         |
#### Examples
```yaml
steps:
    - action: kube:apply
      id: k-apply
      name: Create a Resouce
      input:
        namespaced: true
        manifest: |
          apiVersion: example.group.bar/v1
          kind: Foo
          metadata:
            name: ${{ parameters.name }}
            namespace: default
```

#### Outputs

| Key             | Description                                               | Type            |
|-----------------|-----------------------------------------------------------|------------------|
| `metadata`      | Metadata about the applied resource                       | `object`        |
| `namespace`     | The namespace of the applied resource                     | `string`        |
| `name`          | The name of the applied resource                          | `string`        |
| `response`      | The response object from the Kubernetes API              | `object`        | 

#### Links
https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/apply.ts

### `kube:delete`
Action for deleting Kubernetes resources.

#### Inputs
| Key          | Description                                 | Type           | Example |
|--------------|---------------------------------------------|----------------|---------|
| `apiVersion` | The apiVersion of the resource              | `string`       |         |
| `kind`      | The kind of the resource                    | `string`       |         |
| `name`      | The name of the resource                    | `string`       |         |
| `namespace`  | The namespace of the resource               | `string`       |         |

#### Examples
```yaml
steps:
    - action: kube:delete
      id: k-delete
      name: Delete
      input:
        apiVersion: example.group.bar/v1
        kind: Foo
        namespace: ${{parameters.namespace}}
        name: ${{ parameters.name }}
```

#### Outputs
None

#### Links
https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/delete.ts

### `kube:job:wait`
Action that waits for a Kubernetes job to complete based on specified labels and a namespace.

Note: The output properties for `conditions` have been generalized; you may want to specify the exact structure depending on your use case.
#### Inputs

| Key       | Description                                                   | Type                                 | Example |
|-----------|---------------------------------------------------------------|--------------------------------------|---------|
| labels    | The labels of the job resource to wait on                    | `Record<string, string>`            |         |
| namespace | The namespace of the resource to wait on, e.g. default       | `string`                             |         |

#### Examples
```yaml
steps:
  - action: kube:job:wait
    id: k-wait
    name: Wait for a Job to complete
    input:
      labels:
        job-name: foo-bar
        # more labels
```
This is a step example that waits for a Kubernetes job with the label `job-name: foo-bar` to complete, using the `kube:job:wait` action and assigning it the ID `k-wait`.
#### Outputs
| Key        | Description                                                   | Type                                 |
|------------|---------------------------------------------------------------|--------------------------------------|
| conditions | The conditions of the job once it has completed               | `Array<{ type: string; status: string; ... }>` | 

#### Links
https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/wait.ts

## Maven

### `maven`
Runs Maven commands in a specified working directory with optional arguments.

#### Inputs
| **Key**                | **Description**                                            | **Type**        | **Example** |
|------------------------|------------------------------------------------------------|-----------------|-------------|
| `command`              | The Maven command to execute                                | `string`        |             |
| `workingDirectory`      | Directory within the scaffolder workspace to run the command | `string`        |             |
| `args`                 | Arguments to pass to the command                           | `string[]`      |             |

#### Examples
```yaml
steps:
  - id: maven
    name: maven
    action: maven
    input:
      command: ${{ parameters.command }} # ex: 'clean package' 
      workingDirectory: ${{ parameters.workingDirectory }} # ex: './my-working-directory' - will execute the command in the specified directory relative to the scaffolder workspace
      args: ${{ parameters.args }} # ex: ['-P', 'Profile'] - will add '-P Profile' to the arguments passed to the maven command
```

#### Outputs
None

#### Links
https://www.npmjs.com/package/@gcornacchia/backstage-plugin-scaffolder-maven-actions
https://github.com/gcornacchia/backstage-plugin-scaffolder-maven-actions/blob/develop/src/actions/maven.ts

# 3rd Party Tools

## Ansible

### `ansible:jobTemplate:launch`
Action for launching an Ansible job template and waiting for it to complete.

#### Inputs

| **Key**            | **Description**                          | **Type**            | **Example** |
|--------------------|------------------------------------------|---------------------|-------------|
| `ansibleConfig`     | Configuration for Ansible, including URL and token. | `object`            |             |
| `jobTemplateId`     | The ID of the Ansible job template to be launched. | `number`            |             |

#### Examples

#### Outputs
| **Key**  | **Description**                              | **Type**    |
|----------|----------------------------------------------|-------------|
| `job`    | Information for the Ansible job that was run. | `object`    |

#### Links
https://github.com/KiwiGDC/backstage-kawx/blob/main/plugins/scaffolder-backend-module-kawx/src/actions/run/run.ts

### `ansible-controller:job_template:launch`
Triggers the launch of an Ansible job template via the Ansible controller API.

#### Inputs
| **Key**        | **Description**                              | **Type**      | **Example** |
|----------------|----------------------------------------------|---------------|-------------|
| `controller`   | Specifies the controller to be used          | `string`      |             |
| `job_template` | Name of the job template to be executed      | `string`      |             |
| `extra_vars`   | Additional variables passed to the job       | `object`      |             |
#### Examples
```yaml
steps:
  - id: call-ansible
    name: Calling ansible to launch
    action: ansible-controller:job_template:launch
    input:
      controller: my-controller
      job_template: Demo Job Template
      extra_vars:
        execution_count: ${{ parameters.execution_count }}
        fail_execution: ${{ parameters.fail_execution }}
```
Configure your template call to ansible.

#### Outputs
| **Key**  | **Description**               | **Type**     |
|----------|-------------------------------|--------------|
| `job`    | Status and details of the job  | `object`     |

#### Links
https://www.npmjs.com/package/@mycloudlab/scaffolder-backend-module-ansible-controller
https://github.com/mycloudlab/scaffolder-backend-module-ansible-controller/blob/main/src/actions/ansible-controller/launch.ts

## ArgoCD

### `argocd:create-resources`
Action for creating Argo CD resources using Backstage's scaffolding plugin.

#### Inputs
| Key              | Description                                                                                          | Type               | Example |
|------------------|------------------------------------------------------------------------------------------------------|--------------------|---------|
| `projectName`    | The name of the project as it will show up in Argo CD. By default, it uses the application name.    | `string`           |         |
| `appName`        | The name of the app as it will show up in Argo CD.                                                  | `string`           |         |
| `argoInstance`   | The name of the Argo CD Instance to deploy to.                                                     | `string`           |         |
| `namespace`      | The namespace Argo CD will target for resource deployment.                                          | `string`           |         |
| `repoUrl`        | The Repo URL that will be programmed into the Argo CD project and application.                     | `string`           |         |
| `path`           | The path of the resources Argo CD will watch in the mentioned repository.                           | `string`           |         |
| `labelValue`     | The label Backstage will use to find applications in Argo CD.                                       | `string`           |         |

#### Examples
```yaml
steps:
  - id: create-argocd-resources
    name: Create ArgoCD Resources
    action: argocd:create-resources
    input:
      appName: ${{ parameters.name }}-nonprod
      argoInstance: ${{ parameters.argoinstance }}
      namespace: ${{ parameters.namespace }}
      repoUrl: ${{ steps.publish.output.remoteUrl }}
      labelValue: ${{ parameters.name }}
      path: "kubernetes/nonprod"
```
This creates Argo CD resources by invoking the `argocd:create-resources` action, using specified parameters for application name, Argo CD instance, namespace, repository URL, label value, and resource path.

#### Outputs

| Key        | Description                                      | Type         |
|------------|--------------------------------------------------|--------------|
| `argoInstance` | The Argo CD instance to which resources are deployed. | `string`     |
| `appName`     | The name of the application in Argo CD.             | `string`     |
| `projectName`  | The name of the project in Argo CD.                 | `string`     |
| `namespace`    | The namespace where resources are deployed.         | `string`     |
| `sourceRepo`   | The repository URL for the application resources.   | `string`     |
| `sourcePath`   | The path within the repository where resources are located. | `string`  |
| `labelValue`   | The label used to identify the application in Argo CD. | `string`  |

#### Links
https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-argocd

## AWS

### `roadiehq:aws:s3:cp`
Action that uploads files from a local directory to an AWS S3 bucket using specified parameters.

#### Inputs
| Key                              | Description                                                              | Type           | Example |
|----------------------------------|--------------------------------------------------------------------------|----------------|---------|
| `bucket`                         | The bucket to copy the given path                                        | `string`       |         |
| `region`                         | AWS region                                                              | `string`       |         |
| `path`                           | A Glob pattern that lists the files to upload. Defaults to everything in the workspace | `string`       |         |
| `prefix`                         | Prefix to use in the s3 key.                                           | `string`       |         |
| `endpoint`                       | The fully qualified endpoint of the web service.                        | `string`       |         |
| `s3ForcePathStyle`              | Whether to force path style URLs for S3 objects                          | `boolean`      |         |

#### Examples
```yaml
steps:
  - id: uploadToS3
    name: Upload to S3
    action: roadiehq:aws:s3:cp
    input:
      region: eu-west-1
      bucket: ${{ parameters.bucket }}
```

#### Outputs
| Key          | Description                             | Type    |
|--------------|-----------------------------------------|---------|
| `files`      | List of files that were successfully uploaded | `array`  | 
| `error`      | Error message if the upload fails       | `string` | 

#### Links
https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-aws

### `roadiehq:aws:ecr:create`
This TypeScript code defines a Backstage template action for creating an AWS Elastic Container Registry (ECR) repository.

#### Inputs

| Key                | Description                                                                                       | Type   | Example |
|--------------------|---------------------------------------------------------------------------------------------------|--------|---------|
| `repoName`         | The name of the ECR repository.                                                                   | string |         |
| `tags`             | List of tags.                                                                                     | array  |         |
| `imageMutability`  | Set image mutability to true or false.                                                            | boolean|         |
| `scanOnPush`       | The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository. | boolean|         |
| `region`           | AWS region to create ECR on.                                                                      | string |         |


#### Examples
```yaml
steps:
    - id: create-ecr
      name: Create ECR Rrepository
      action: roadiehq:aws:ecr:create
      input:
        repoName: ${{ parameters.RepoName }}
        tags: ${{parameters.Tags}}
        imageMutability: ${{parameters.ImageMutability}}
        scanOnPush: ${{parameters.ScanOnPush}}
        region: ${{parameters.Region}}
```
This creates an AWS Elastic Container Registry (ECR) repository by utilizing the `roadiehq:aws:ecr:create` action and passing in parameters for the repository name, tags, image mutability, scan-on-push setting, and AWS region.
#### Outputs

| Key                    | Description                                                                                      | Type   |
|------------------------|--------------------------------------------------------------------------------------------------|--------|
| `repository.repositoryUri` | URI of the created ECR repository.                                                              | string |

#### Links
https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-aws

### `roadiehq:aws:secrets-manager:create`
Action for creating a new secret in AWS Secrets Manager using the Backstage scaffolder plugin.

#### Inputs
| Key                | Description                                          | Type      | Example |
|--------------------|------------------------------------------------------|-----------|---------|
| `name`             | The name of the secret to be created                | `string`  |         |
| `description`      | The description of the secret to be created         | `string`  |         |
| `value`            | The string value to be encrypted in the new secret   | `string`  |         |
| `tags`             | AWS tags to be added to the secret                  | `array`   |         |
| `profile`          | AWS profile to use                                   | `string`  |         |
| `region`           | AWS region to create the secret on                  | `string`  |         |

#### Examples
```yaml
steps:
    - id: createSecret
      name: create secret - prod
      action: roadiehq:aws:secrets-manager:create
      input:
        name: ${{ parameters.Name }}
        description: ${{ parameters.Description }}
        value: ${{ parameters.Value }}
        tags: ${{parameters.Tags}}
        profile: ${{parameters.Profile}}
        region: ${{parameters.Region}}
```
#### Outputs

| Key                | Description                                          | Type      |
|--------------------|------------------------------------------------------|-----------|
| `secretArn`        | The ARN of the created secret                        | `string`  |
| `name`             | The name of the created secret                       | `string`  |
| `description`      | The description of the created secret                | `string`  |
| `tags`             | The tags associated with the created secret          | `array`   | 

#### Links
https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-aws

### `opa:get-env-providers`
#### Inputs

#### Examples

#### Outputs

#### Links

### `opa:create-secret`
#### Inputs

#### Examples

#### Outputs

#### Links
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `opa:createRepoAccessToken:gitlab`
#### Inputs

#### Examples

#### Outputs

#### Links
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `opa:get-platform-metadata`
#### Inputs

#### Examples

#### Outputs

#### Links
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `opa:get-ssm-parameters`
#### Inputs

#### Examples

#### Outputs

#### Links
https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage

### `aws:cloudcontrol:create`
#### Inputs

#### Examples
```yaml
steps:
  - id: create-ecr-repository
    name: Create ECR Repository
    action: aws:cloudcontrol:create
    input:
      typeName: 'AWS::ECR::Repository'
      desiredState: '{"RepositoryName": "${{ parameters.name }}-ecr-repository"}'
      wait: true
      maxWaitTime: 20
```

#### Outputs

#### Links
https://www.npmjs.com/package/@alithya-oss/plugin-scaffolder-backend-module-aws-core

## Azure

### `publish:azure`
Action to initialize a Git repository and publish it to Azure DevOps, along with its input and output schemas.


#### Inputs

| Key                  | Description                                                                                                                    | Type                | Example |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------|---------|
| `repoUrl`            | Repository Location                                                                                                          | `string`            |         |
| `description`        | Repository Description                                                                                                       | `string`            |         |
| `defaultBranch`      | Sets the default branch on the repository. The default value is 'master'.                                                  | `string`            |         |
| `gitCommitMessage`   | Sets the commit message on the repository. The default value is 'initial commit'.                                           | `string`            |         |
| `gitAuthorName`      | Sets the default author name for the commit. The default value is 'Scaffolder'.                                             | `string`            |         |
| `gitAuthorEmail`     | Sets the default author email for the commit.                                                                                | `string`            |         |
| `sourcePath`         | Path within the workspace that will be used as the repository root. If omitted, the entire workspace will be published.     | `string`            |         |
| `token`              | The token to use for authorization to Azure.                                                                                 | `string`            |         |

#### Examples
```yaml
steps:
  - id: publish
    action: publish:azure
    name: Publish to Azure
    input:
      repoUrl: 'dev.azure.com?organization=organization&project=project&repo=repo'
      description: 'Initialize a git repository'
```

This performs an action to publish content to Azure DevOps by initializing a Git repository with a specified URL and description.

#### Outputs
| Key                  | Description                                                                           | Type                |
|----------------------|--------------------------------------------------------------------------------------|---------------------|
| `remoteUrl`          | A URL to the repository with the provider                                            | `string`            |
| `repoContentsUrl`    | A URL to the root of the repository                                                  | `string`            |
| `repositoryId`       | The Id of the created repository                                                      | `string`            |
| `commitHash`         | The git commit hash of the initial commit                                             | `string`            |
#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-azure/src/actions/azure.ts

### `azure:repo:clone`
Action for cloning an Azure DevOps repository into a specified workspace directory, handling authentication via personal access tokens or bearer tokens.

#### Inputs

| **Key**            | **Description**                                      | **Type**     | **Example** |
|--------------------|------------------------------------------------------|--------------|-------------|
| `remoteUrl`        | The Git URL to the repository.                       | `string`     |             |
| `branch`           | The branch to checkout to.                           | `string`     |             |
| `targetPath`       | The subdirectory of the working directory to clone the repository into. | `string` |             |
| `server`           | The hostname of the Azure DevOps service. Defaults to `dev.azure.com`. | `string` |             |
| `token`            | The token to use for authorization.                  | `string`     |             |


#### Examples
```yaml
    - id: cloneAzureRepo
      name: Clone Azure Repo
      action: azure:repo:clone
      input:
        remoteUrl: "https://<MY_AZURE_ORGANIZATION>@dev.azure.com/<MY_AZURE_ORGANIZATION>/<MY_AZURE_PROJECT>/_git/<MY_AZURE_REPOSITORY>"
        branch: "main"
        targetPath: ./sub-directory
```

#### Outputs
| **Key**          | **Description**                    | **Type**    |
|------------------|------------------------------------|-------------|
| `repositoryId`   | The ID of the cloned repository.    | `string`    |

#### Links
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/cloneAzureRepo.ts


### `git:clone:azure`
This code defines a Backstage Scaffolder action for cloning repositories from Azure DevOps Git and another for launching job templates in an Ansible controller.

#### Inputs
| **Key**        | **Description**                                                | **Type**        | **Example** |
|----------------|----------------------------------------------------------------|-----------------|-------------|
| `repoUrl`      | Repo URL to be parsed with `parseRepoUrl`                      | `string`        |             |
| `fromRef`      | Git references (branch, tag, or commit ID) to checkout; default is `'master'` | `string`        |             |
| `targetPath`   | Relative path on the workspace to store repository contents; default is `'./'` | `string`        |             |

#### Examples

```yaml
steps:
  - action: GIT_CLONE_AZURE
    id: git-azure-clone
    name: Clone from azure repo same ref
    input:
      commonParams:
        fromRef: ref/heads/main
      params:
        - repoUrl: dev.azure.com?owner=backstage-demo&organization=k3tech&repo=my-repo-1
          targetPath: ./repo-1
        - repoUrl: dev.azure.com?owner=backstage-demo&organization=k3tech&repo=my-repo-2
          targetPath: ./repo-2
```

### Description
This clones two Azure DevOps repositories using the same Git reference (`main`).

#### Outputs
| **Key**  | **Description**                                  | **Type**  |
|----------|--------------------------------------------------|-----------|
| `results` | Array of results containing repository clone details | `array<object>` |

#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/repos/git-clone-azure.ts

### `azure:repo:push`
The provided TypeScript code defines a function `pushAzureRepoAction` that creates a template action for pushing content from a local workspace to a remote Azure repository using Backstage's scaffolding plugin.

#### Inputs
| **Key**             | **Description**                                                          | **Type**     | **Example** |
|---------------------|--------------------------------------------------------------------------|--------------|-------------|
| `branch`            | The branch to checkout to.                                                | `string`     |             |
| `sourcePath`        | The subdirectory of the working directory containing the repository.       | `string`     |             |
| `gitCommitMessage`   | The commit message for the repository. Default is "Initial commit".       | `string`     |             |
| `gitAuthorName`      | The default author name for the commit. Default is "Scaffolder".          | `string`     |             |
| `gitAuthorEmail`     | The default author email for the commit.                                 | `string`     |             |

#### Examples
```yaml    
    - id: pushAzureRepo
      name: Push to Remote Azure Repo
      action: azure:repo:push
      input:
        branch: <MY_AZURE_REPOSITORY_BRANCH>
        sourcePath: ./sub-directory
        gitCommitMessage: Add ${{ parameters.name }} project files
```

#### Outputs

| **Key**        | **Description**                                       | **Type**     |
|----------------|-------------------------------------------------------|--------------|
| `commitMessage`| The commit message used for the commit.                | `string`     |
| `gitAuthorInfo`| Information about the Git author (name and email).     | `object`     |
| `branch`       | The branch where changes were pushed.                  | `string`     |

#### Links
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/pushAzureRepo.ts


### `azure:repo:pr`
Action that creates a pull request (PR) in an Azure DevOps repository using customizable inputs.

#### Inputs
| **Key**                | **Description**                                                               | **Type**    | **Example** |
|------------------------|-------------------------------------------------------------------------------|-------------|-------------|
| `organization`          | The name of the organization in Azure DevOps.                                 | `string`    |             |
| `sourceBranch`          | The branch to merge into the source.                                          | `string`    |             |
| `targetBranch`          | The branch to merge into (default: main).                                     | `string`    |             |
| `title`                 | The title of the pull request.                                                | `string`    |             |
| `description`           | The description of the pull request.                                          | `string`    |             |
| `repoId`                | Repo ID of the pull request.                                                  | `string`    |             |
| `project`               | The Project in Azure DevOps.                                                  | `string`    |             |
| `supportsIterations`     | Whether or not the PR supports iterations.                                    | `boolean`   |             |
| `server`                | The hostname of the Azure DevOps service (defaults to `dev.azure.com`).       | `string`    |             |
| `token`                 | The token to use for authorization.                                           | `string`    |             |
| `autoComplete`          | Enable auto-completion of the pull request once policies are met.             | `boolean`   |             |

#### Examples
```yaml
    - id: pushAzureRepo
      name: Push to Remote Azure Repo
      action: azure:repo:push
      input:
        branch: <MY_AZURE_REPOSITORY_BRANCH>
        sourcePath: ./sub-directory
        gitCommitMessage: Add ${{ parameters.name }} project files
```

#### Outputs
| **Key**           | **Description**                            | **Type**   |
|-------------------|--------------------------------------------|------------|
| `pullRequestId`    | The ID of the created pull request.        | `number`   |

#### Links
Create a PR in Azure. See input options [in the application](/docs/scaffolder/writing-templates/#actions)
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/pullRequestAzureRepo.ts

### `git:commit:azure`
Action for committing and pushing changes to an Azure DevOps Git repository. It sets up the input schema, processes parameters, handles Git operations, and pushes changes to the repository.

#### Inputs

| **Key**            | **Description**                                                                                          | **Type**      | **Example** |
|--------------------|----------------------------------------------------------------------------------------------------------|---------------|-------------|
| `toBranch`         | New branch to commit and push.                                                                            | `string`      |             |
| `commitMessage`    | Commit message string.                                                                                    | `string`      |             |
| `targetPath`       | Relative path on workspace where repository contents are stored, default is `'./'`.                       | `string`      |             |

#### Examples

```yaml
steps:
  - action: GIT_COMMIT_AZURE
    id: git-azure-commit
    name: Commit to azure repo same ref
    input:
      commonParams:
        toBranch: ref/heads/main
        commitMessage: chore: backstage git:commit:azure
      params:
        - targetPath: ./repo-1
        - targetPath: ./repo-2
```
Step to commit and push changes to an Azure DevOps Git repository on the `main` branch for two different repositories (`./repo-1` and `./repo-2`) using the specified commit message.

#### Outputs

| **Key**     | **Description**                                                 | **Type**    |
|-------------|-----------------------------------------------------------------|-------------|
| `results`   | Array of objects containing the results of the commit operation. | `array`     |
#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/repos/git-commit-azure.ts

### `azure:pipeline:create`
This creates an Azure Pipeline through the Azure DevOps REST API using Backstage's scaffolding plugin.

#### Inputs
| **Key**              | **Description**                                                                     | **Type**     | **Example** |
|----------------------|-------------------------------------------------------------------------------------|--------------|-------------|
| `createApiVersion`    | The Azure Create Pipeline API version to use. Defaults to 6.1-preview.1.            | `string`     |             |
| `server`             | The host of Azure DevOps. Defaults to dev.azure.com.                                 | `string`     |             |
| `organization`        | The name of the Azure DevOps organization.                                          | `string`     |             |
| `project`            | The name of the Azure project.                                                      | `string`     |             |
| `folder`             | The name of the folder of the pipeline.                                              | `string`     |             |
| `name`               | The name of the pipeline.                                                           | `string`     |             |
| `repositoryId`       | The ID of the repository.                                                           | `string`     |             |
| `repositoryName`     | The name of the repository.                                                         | `string`     |             |
| `yamlPath`           | The location of the Azure DevOps Pipeline definition file. Defaults to /azure-pipelines.yaml. | `string`     |             |
| `token`              | Optional. Token for Azure API authentication. If not provided, uses credentials from integration. | `string`     |             |


#### Examples
```yaml
 - id: createAzurePipeline
      name: Create Azure Pipeline
      action: azure:pipeline:create
      input:
        organization: ${{ (parameters.repoUrl | parseRepoUrl)['organization'] }}
        project: ${{ (parameters.repoUrl | parseRepoUrl)['owner'] }}
        folder: "my-azure-pipelines-folder"
        name: ${{ parameters.name }}
        repositoryId: ${{ steps.publish.output.repositoryId }}
        repositoryName: ${{ (parameters.repoUrl | parseRepoUrl)['repo'] }}
        yamlPath: <optional value to your azure pipelines yaml file, defaults to ./azure-pipelines.yaml>
```

#### Outputs
| **Key**       | **Description**                                      | **Type**  |
|---------------|------------------------------------------------------|-----------|
| `pipelineId`  | The ID of the created Azure pipeline.                | `string`  |
| `pipelineUrl` | The URL to the created Azure pipeline in Azure DevOps. | `string`  |

#### Links
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/tree/main
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/createAzurePipeline.ts

### `pipeline:create:azure`
Automates the creation of Azure DevOps pipelines from Git repositories.

#### Inputs
| **Key**          | **Description**                                                         | **Type**     | **Example** |
|------------------|-------------------------------------------------------------------------|--------------|-------------|
| `pipelinePath`    | Path to the pipeline in the repository                                 | `string`     |             |
| `yamlFilename`    | Path to pipeline YAML file (default: `.azuredevops/azure-pipelines.yaml`) | `string`     |             |
| `pipelineName`    | Name of the pipeline                                                   | `string`     |             |
| `defaultBranch`   | Default branch reference (default: `refs/heads/main`)                  | `string`     |             |
| `repoUrl`         | Repository URL to be parsed with `parseRepoUrl`                        | `string`     |             |

#### Examples

```yaml
steps:
  - action: PIPELINE_CREATE_AZURE
    id: pipeline-create-azure
    name: Create pipelines
    input:
      commonParams:
        defaultBranch: 'ref/heads/main'
        pipelinePath: 'my-microsservices'
        yamlFilename: '.azure-pipeline.yaml'
      params:
        - repoUrl: './repo-1'
          pipelineName: 'repo-1'
        - repoUrl: './repo-2'
          pipelineName: 'repo-2'
```

This creates Azure pipelines for two repositories (`repo-1` and `repo-2`), using common parameters such as the default branch, pipeline path, and YAML filename.


#### Outputs
| **Key**  | **Description**                            | **Type**   |
|----------|--------------------------------------------|------------|
| `results`| The result array with pipeline creation responses | `array<object>` |

#### Links
https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/piepline/pipeline-create-azure.ts

### `azure:pipeline:run`
### Code Description:
Defines an Azure DevOps pipeline runner action using Backstage's scaffolder plugin.

#### Inputs
| **Key**               | **Description**                                                | **Type**   | **Example** |
|-----------------------|----------------------------------------------------------------|------------|-------------|
| `runApiVersion`        | The Azure Run Pipeline API version to use. Defaults to 7.0     | `string`   |             |
| `buildApiVersion`      | The Builds API version to use. Defaults to 6.1-preview.6       | `string`   |             |
| `server`               | The host of Azure DevOps. Defaults to dev.azure.com            | `string`   |             |
| `organization`         | The name of the Azure DevOps organization                      | `string`   |             |
| `pipelineId`           | The pipeline ID                                                | `string`   |             |
| `project`              | The name of the Azure project                                  | `string`   |             |
| `branch`               | The branch of the pipeline's repository                        | `string`   |             |
| `pipelineParameters`   | The values needed as parameters to start a build               | `object`   |             |
#### Examples
```yaml
    - id: runAzurePipeline
      name: Run Azure Pipeline
      action: azure:pipeline:run
      input:
        organization: ${{ (parameters.repoUrl | parseRepoUrl)['organization'] }}
        pipelineId: ${{ steps.createAzurePipeline.output.pipelineId }}
        project: ${{ (parameters.repoUrl | parseRepoUrl)['owner'] }}
```

#### Outputs
| **Key**         | **Description**                                        | **Type**   |
|-----------------|--------------------------------------------------------|------------|
| `pipelineRunId` | ID of the initiated Azure pipeline run                  | `number`   |
| `pipelineUrl`   | URL to the Azure pipeline run                          | `string`   |
| `status`        | Status of the pipeline run (e.g., inProgress, completed)| `string`   |

#### Links
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/tree/main
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/runAzurePipeline.ts

### `azure:pipeline:permit`
Defines an Azure DevOps pipeline permission management action for Backstage scaffolding.

#### Inputs
| **Key**              | **Description**                                           | **Type**    | **Example** |
|----------------------|-----------------------------------------------------------|-------------|-------------|
| `permitsApiVersion`   | The Azure Permits Pipeline API version to use. Defaults to `7.1-preview.1`. | `string`    |             |
| `server`             | The host of Azure DevOps. Defaults to `dev.azure.com`.     | `string`    |             |
| `organization`       | The name of the Azure DevOps organization.                | `string`    |             |
| `project`            | The name of the Azure DevOps project.                     | `string`    |             |
| `resourceId`         | The resource ID for which permissions are being changed.  | `string`    |             |
| `resourceType`       | The type of the resource (e.g., `endpoint`).              | `string`    |             |
| `authorized`         | A boolean indicating whether to authorize (`true`) or unauthorize (`false`) the pipeline. | `boolean`   |             |
| `pipelineId`         | The ID of the Azure pipeline to be authorized/unauthorized. | `string`    |             |
| `token`              | An optional token for Azure DevOps API authentication. If not provided, it uses the credentials from the integration. | `string`    |             |
#### Examples
```yaml
    - id: permitAzurePipeline
      name: Change Azure Pipeline Permissions
      action: azure:pipeline:permit
      input:
        organization: ${{ (parameters.repoUrl | parseRepoUrl)['organization'] }}
        project: ${{ (parameters.repoUrl | parseRepoUrl)['owner'] }}
        resourceId: <serviceEndpointId>
        resourceType: endpoint
        authorized: true
        pipelineId: ${{ steps.createAzurePipeline.output.pipelineId }}
```
#### Outputs
| **Key**              | **Description**                                           | **Type**    |
|----------------------|-----------------------------------------------------------|-------------|
| `response.ok`        | A boolean indicating if the pipeline permissions were successfully changed. | `boolean`   |
| `response.status`    | The HTTP status code of the pipeline permissions change request. | `number`    |

#### Links
https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-pipelines
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/tree/main
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/permitAzurePipeline.ts

### `azure:repo:clone`
Action for cloning an Azure repository into a specified workspace directory using Backstage's scaffolding plugin.

#### Inputs
| Key         | Description                                                      | Type    | Example |
|-------------|------------------------------------------------------------------|---------|---------|
| `remoteUrl` | The Git URL to the repository.                                   | `string`|         |
| `branch`    | The branch to checkout to.                                       | `string`|         |
| `targetPath`| The subdirectory of the working directory to clone the repository into. | `string`|         |
| `server`    | The hostname of the Azure DevOps service. Defaults to `dev.azure.com`. | `string`|         |
| `token`     | The token to use for authorization.                              | `string`|         |

#### Examples
```yaml
steps:
  - id: cloneAzureRepo
    name: Clone Azure Repo
    action: azure:repo:clone
    input:
      remoteUrl: "https://<MY_AZURE_ORGANIZATION>@dev.azure.com/<MY_AZURE_ORGANIZATION>/<MY_AZURE_PROJECT>/_git/<MY_AZURE_REPOSITORY>"
      branch: "main"
      targetPath: ./sub-directory
```

#### Outputs
None

#### Links
https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/cloneAzureRepo.ts

### `azure:repo:push`
Action that pushes content from a local workspace to a remote Azure repository.

#### Inputs
| Key                 | Description                                                                                   | Type     | Example |
|---------------------|-----------------------------------------------------------------------------------------------|----------|---------|
| `branch`            | The branch to checkout to.                                                                    | `string` |         |
| `sourcePath`        | The subdirectory of the working directory containing the repository.                         | `string` |         |
| `gitCommitMessage`  | Sets the commit message on the repository. The default value is 'Initial commit'.            | `string` |         |
| `gitAuthorName`     | Sets the default author name for the commit. The default value is 'Scaffolder'.             | `string` |         |
| `gitAuthorEmail`    | Sets the default author email for the commit.                                               | `string` |         |

#### Examples
```yaml
    - id: pushAzureRepo
      name: Push to Remote Azure Repo
      action: azure:repo:push
      input:
        branch: <MY_AZURE_REPOSITORY_BRANCH>
        sourcePath: ./sub-directory
        gitCommitMessage: Add ${{ parameters.name }} project files
```

#### Outputs

None

#### Links
https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/pushAzureRepo.ts

### `azure:repo:pr`
Action that pushes content from a local workspace to a remote Azure repository.

#### Inputs
| Key                 | Description                                                                                   | Type     | Example |
|---------------------|-----------------------------------------------------------------------------------------------|----------|---------|
| `branch`            | The branch to checkout to.                                                                    | `string` |         |
| `sourcePath`        | The subdirectory of the working directory containing the repository.                         | `string` |         |
| `gitCommitMessage`  | Sets the commit message on the repository. The default value is 'Initial commit'.            | `string` |         |
| `gitAuthorName`     | Sets the default author name for the commit. The default value is 'Scaffolder'.             | `string` |         |
| `gitAuthorEmail`    | Sets the default author email for the commit.                                               | `string` |         |

#### Examples
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
        organization: <MY_AZURE_ORGANIZATION>
        supportsIterations: false
```

#### Outputs
None

#### Links
https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories
https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/pullRequestAzureRepo.ts

## Bitbucket

### `publish:bitbucket`
This action creates a new Bitbucket repository and publishes the files in the workspace directory to the repository. There is one mandatory parameter `repoUrl`. The repo url picker described in the `string` parameter description above.

[//]: # (TODO: imputs)

#### Examples
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

#### Links
[//]: # (TODO: links)

### `publish:bitbucketCloud`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloud.ts

### `bitbucket:pipelines:run`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloudPipelinesRun.ts

### `publish:bitbucketCloud:pull-request`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloudPullRequest.ts

### `publish:bitbucketServer`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-server/src/actions/bitbucketServer.ts

### `publish:bitbucketServer:pull-request`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-server/src/actions/bitbucketServerPullRequest.ts

## CNEO

### `cnoe:kubernetes:apply`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/k8s-apply.ts

### `cnoe:verify:dependency`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/verify.ts

### `cnoe:utils:sanitize`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/sanitize.ts

## Codacy

### `codacy:add-repo`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/codacy/backstage-plugin

## Confluence

### `confluence:transform:markdown`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-confluence-to-markdown

## Cue

### `cue:cueflow`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/shoukoo/backstage-plugin-scaffolder-cuelang/blob/main/src/actions/cueflow.ts

## Gerrit

### `publish:gerrit:review`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gerrit/src/actions/gerritReview.ts

### `publish:gerrit`
#### Inputs

#### Examples

#### Outputs

#### Links
https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gerrit/src/actions/gerrit.ts

## Gitea

### `publish:gitea`
#### Inputs

#### Examples

#### Outputs

#### Links
https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-gitea

## GitHub

### `publish:github`
#### Inputs

#### Examples

#### Outputs

#### Links

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
#### Inputs

#### Examples

#### Outputs

#### Links
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
