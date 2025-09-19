---
title: Backstage Scaffolder Actions Directory
publishedDate: '2024-08-08'
description: Directory of all open source Backstage scaffolder actions
---

This page is a comprehensive directory of all open source Scaffolder actions available for Backstage with instructions and examples for each action.

Roadie comes bundled with a select set of actions to use out of the box. If you would like to use one that is not included, please contact Roadie support. 

If you want to add an action to this list, please [raise an issue on our repo](https://github.com/RoadieHQ/marketing-site/issues) or contribute a PR with the addition.

**NB:**
- A subset of available actions in Roadie can also be **found at the following page inside your Roadie app**: `https://<tenant-name>.roadie.so/create/actions`
- We do not list actions created for hackathons and talks that are not maintained or intended for widespread use.

## Actions Summary Table

**Generic Tools:**

| Category                  | Name                                                                        | Description                                                                                                                                                               | Ready to use in Roadie |
|---------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| Downloading Content       | [fetch:plain](#fetchplain)                                                  | Downloads directory content and places it in the workspace.                                                                                                               | ✅️                     |
| Downloading Content       | [fetch:plain:plus](#fetchplainplus)                                         | Downloads directory content and places it in the workspace for multiple urls.                                                                                             |                        |
| Downloading Content       | [fetch:template](#fetchtemplate)                                            | Downloads a directory containing templated files using [nunjucks](https://mozilla.github.io/nunjucks/),merges variables in, and writes result to the workspace.           | ✅️                     |
| Downloading Content       | [fetch:template:plus](#fetchtemplateplus)                                   | Downloads multiple directories containing templated files using [nunjucks](https://mozilla.github.io/nunjucks/),merges variables in, and writes results to the workspace. |                        |
| Downloading Content       | [fetch:plain:file](#fetchplainfile)                                         | Downloads single file and places it in the workspace.                                                                                                                     | ✅️                     |
| Downloading Content       | [fetch:plain:file:plus](#fetchplainfileplus)                                | Downloads files and places them in the workspace for multiple urls.                                                                                                       |                        |
|                           |
| HTTP Requests             | [http:backstage:request](#httpbackstagerequest)                             | Runs an HTTP request against the Backstage Backend API and handles the response.                                                                                          | ✅️                     |
|                           |
| Debugging                 | [debug:log](#debuglog)                                                      | Log a message to the UI output.                                                                                                                                           | ✅️                     |
| Debugging                 | [debug:wait](#debugwait)                                                    | Waits for a certain period of time.                                                                                                                                       |                        |
|                           |
| File Operations           | [fs:delete](#fsdelete)                                                      | Deletes files and directories in the workspace                                                                                                                            | ✅️                     |
| File Operations           | [fs:rename](#fsrename)                                                      | Renames files and directories in the workspace, essentially moving them.                                                                                                  | ✅️                     |
| File Operations           | [roadiehq:utils:fs:replace](#roadiehqutilsfsreplace)                        | Replaces found string in files with content defined in input.                                                                                                             | ✅️                     |
| File Operations           | [roadiehq:utils:fs:parse](#roadiehqutilsfsparse)                            | Reads a file from the workspace and outputs content to be used in next steps.                                                                                             | ✅️                     |
| File Operations           | [roadiehq:utils:fs:write](#roadiehqutilsfswrite)                            | Creates a file with the content on the given path.                                                                                                                        | ✅️                     |
| File Operations           | [roadiehq:utils:fs:append](#roadiehqutilsfsappend)                          | Creates a file with the content on the given path.                                                                                                                        | ✅️                     |
| File Operations           | [roadiehq:utils:merge](#roadiehqutilsmerge)                                 | Merge data into an existing JSON or YAML file.                                                                                                                            | ✅️                     |
| File Operations           | [roadiehq:utils:zip](#roadiehqutilszip)                                     | Compresses content to a zip file in the workspace.                                                                                                                        | ✅️                     |
|                           |
| Parsing and Serialization | [roadiehq:utils:serialize:yaml](#roadiehqutilsserializeyaml)                | Converts YAML to a string.                                                                                                                                                | ✅️                     |
| Parsing and Serialization | [roadiehq:utils:serialize:json](#roadiehqutilsserializejson)                | Converts JSON to a formated string.                                                                                                                                       | ✅️                     |
| Parsing and Serialization | [json](#json)                                                               | Parse JSON data from various encoded content sources such as Base64, files, raw data, or URLs.                                                                            |                        |
| Parsing and Serialization | [yaml](#yaml)                                                               | Parse YAML data from various encoded content sources such as Base64, files, raw data, or URLs.                                                                            |                        |
| Parsing and Serialization | [xml](#xml)                                                                 | Parse XML into JSON using various options and processing pipes, utilizing the `xml-js` library for conversion.                                                            |                        |
|                           |
| Infrastructure management | [ske:configure-resource](#skeconfigure-resource)                            | Creates and configures Kratix resources from Backstage                                                                                                                    | ✅️                     |
| Content Manipulation      | [roadiehq:utils:jsonata](#roadiehqutilsjsonata)                             | Performs JSONata operations and transformations on input objects.                                                                                                         | ✅️                     |
| Content Manipulation      | [roadiehq:utils:jsonata:yaml:transform](#roadiehqutilsjsonatayamltransform) | Performs JSONata operations and transformations on a YAML file in the workspace.                                                                                          | ✅️                     |
| Content Manipulation      | [roadiehq:utils:jsonata:json:transform](#roadiehqutilsjsonatajsontransform) | Performs JSONata operations and transformations on a JSON file in the workspace.                                                                                          | ✅️                     |
| Content Manipulation      | [json:merge-files](#jsonmerge-files)                                        | Merges multiple JSON files into a single JSON object stored in a new file in the workspace.                                                                               |                        |
| Content Manipulation      | [json:merge-file](#jsonmerge-file)                                          | Uses [JSON-merger syntax](https://www.npmjs.com/package/json-merger#operations) to manipulate a single JSON file and store the result in a new file in the workspace.     |                        |
| Content Manipulation      | [roadiehq:utils:json:merge](#roadiehqutilsjsonmerge)                        | Merge new data into an existing JSON file.                                                                                                                                | ✅️                     |
| Content Manipulation      | [regex:replace](#regexreplace)                                              | Validate an input structure using the `zod` library to perform regex replacements on input values.                                                                        |                        |
| Content Manipulation      | [regex:fs:replace:plus](#regexfsreplaceplus)                                | Enable regex-based search and replacement across files using glob patterns.                                                                                               |                        | 
|                           |
| Other Utils               | [uuid:v4:gen:plus](#uuidv4genplus)                                          | Generates a list of UUIDv4 values, allowing users to specify the number of UUIDs to generate.                                                                             |                        |
| Other Utils               | [roadiehq:utils:sleep](#roadiehqutilssleep)                                 | Halts the scaffolding process for the given amount of seconds.                                                                                                            | ✅️                     |

| Other Utils               | [vars:plus](#varsplus)                                                      | Handles and logs input variables, returning the same input as the output in a formatted structure.                                                                        |                        |


**Backstage Specific:**

| Category      | Name                                               | Description                                                                                              | Ready to use in Roadie |
|---------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------|------------------------|
| Catalog       | [catalog:register](#catalogregister)               | Registers an entity in the catalog.                                                                      | ✅️                     |
| Catalog       | [catalog:register:plus](#catalogregisterplus)      | Registers multiple entities in the catalog.                                                              |                        |
| Catalog       | [catalog:write](#catalogwrite)                     | Writes the catalog-info.yaml for your template                                                           | ✅️                     |
| Catalog       | [catalog:fetch](#catalogfetch)                     | Fetches an entity or entities from the catalog by entity reference(s).                                   | ✅️                          |
| Catalog       | [catalog:query:plus](#catalogqueryplus)            | Queries the catalog using provided filters, fields, and ordering parameters.                             |                        |
| Catalog       | [catalog:relation:plus](#catalogrelationplus)      | Query entities based on relations.                                                                       |                        |
| Catalog       | [catalog:timestamping](#catalogtimestamping)       | Adds the `backstage.io/createdAt` annotation containing the current timestamp to your entity object.     |                        |
| Catalog       | [catalog:scaffolded-from](#catalogscaffolded-from) | Adds `scaffoldedFrom` spec containing the template entityRef to your entity object.                      |                        |
| Catalog       | [catalog:annotate](#catalogannotate)               | Allows you to annotate your entity object with specified label(s), annotation(s) and spec property(ies). |                        |
|          
| Notifications | [notification:send](#varsplus)                     | Sends notifications via the Backstage Notification Service.                                              |                        |


**Language / protocol / infrastructure:**

| Category             | Name                                                                         | Description                                                                                                                                                               | Ready to use in Roadie |
|----------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| Git                  | [git](#git)                                                                  | Allows execution of Git commands within a specified working directory.                                                                                                    |                        |
|                      |
| HCL                  | [hcl:merge](#hclmerge)                                                       | Create an action for merging two HCL contents.                                                                                                                            |                        |
| HCL                  | [hcl:merge:write](#hclmergewrite)                                            | Merge two HCL content strings and write the merged result to a specified output path.                                                                                     |                        |
| HCL                  | [hcl:merge:files](#hclmergefiles)                                            | Merge two HCL files specified by their paths.                                                                                                                             |                        |
| HCL                  | [hcl:merge:files:write](#hclmergefileswrite)                                 | Merge two HCL files and write the merged content to a specified output path, with input validation.                                                                       |                        |
|                      |
| Kubernetes           | [kubernetes:create-namespace](#kubernetescreate-namespace)                   | Creates a Kubernetes namespace, leveraging the Kubernetes API and Backstage's catalog client to fetch cluster information.                                                |                        |
| Kubernetes           | [deploy:kubernetes](#deploykubernetes)                                       | Action for deploying Kubernetes manifests within a Backstage application, using the Kubernetes API to apply the provided YAML or JSON resources.                          |                        |
| Kubernetes           | [kube:apply](#kubeapply)                                                     | Action for applying Kubernetes manifests in a Backstage application.                                                                                                      |                        |
| Kubernetes           | [kube:delete](#kubedelete)                                                   | Action for deleting Kubernetes resources.                                                                                                                                 |                        |
| Kubernetes           | [kube:job:wait](#kubejobwait)                                                | Action that waits for a Kubernetes job to complete based on specified labels and a namespace.                                                                             |                        | 
|                      |
| Maven                | [maven](#maven)                                                              | Runs Maven commands in a specified working directory with optional arguments.                                                                                             |                        |
|                      |
| NPM                  | [npm:init](#npminit)                                                         | Action that automates running the `npm init -y` command in a specified workspace directory.                                                                               |                        |
| NPM                  | [npm:install](#npminstall)                                                   | Action that installs an npm package quietly based on the provided package name.                                                                                           |                        |
| NPM                  | [npm:exec](#npmexec)                                                         | Action for executing `npm exec` commands in a task workspace directory, using specific arguments provided in the input.                                                   |                        |
| NPM                  | [npm:config](#npmconfig)                                                     | Action that runs an `npm config` command with specified arguments in a task's workspace directory.                                                                        |                        |
|                      |
| Odo                  | [devfile:odo:command](#devfileodocommand)                                    | Action for executing OpenShift Do (odo) commands in a workspace.                                                                                                          |                        |
| Odo                  | [devfile:odo:component:init](#devfileodocomponentinit)                       | Action to initialize an ODO (OpenShift Do) component using a Devfile within Backstage.                                                                                    |                        |
|                      |
| Pulumi               | [pulumi:new](#puluminew)                                                     | Action for creating a new Pulumi project, including input validation and execution of necessary commands to set up the project.                                           |                        |
| Pulumi               | [pulumi:up](#pulumiup)                                                       | Runs Pulumi to manage cloud resources, either in a local or remote workspace based on the provided configuration.                                                         |                        |


**3rd Party Tools:**

| Category        | Name                                                                          | Description                                                                                                                                                                 | Ready to use in Roadie |
|-----------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| Ansible         | [ansible:jobTemplate:launch](#ansiblejobtemplatelaunch)                       | Action for launching an Ansible job template and waiting for it to complete.                                                                                                |                        |
| Ansible         | [ansible-controller:jobTemplate:launch](#ansible-controllerjobtemplatelaunch) | Triggers the launch of an Ansible job template via the Ansible controller API.                                                                                              |                        |
| Ansible         | [argocd:create-resources](#argocdcreate-resources)                            | Action for creating Argo CD resources using Backstage's scaffolding plugin.                                                                                                 |                        | 
|                 |
| AWS             | [roadiehq:aws:s3:cp](#roadiehqawss3cp)                                        | Action that uploads files from a local directory to an AWS S3 bucket using specified parameters.                                                                            |                        |
| AWS             | [roadiehq:aws:ecr:create](#roadiehqawsecrcreate)                              | Creates an AWS Elastic Container Registry (ECR) repository.                                                                                                                 |                        |
| AWS             | [roadiehq:aws:secrets-manager:create](#roadiehqawssecrets-managercreate)      | Creates a new secret in AWS Secrets Manager using the Backstage scaffolder plugin.                                                                                          |                        |
| AWS             | [opa:get-env-providers](#opaget-env-providers)                                | Retrieves AWS environment provider data based on a reference to an AWS environment entity.                                                                                  |                        |
| AWS             | [opa:create-secret](#opacreate-secret)                                        | Creates secrets in AWS Secrets Manager.                                                                                                                                     |                        |
| AWS             | [opa:createRepoAccessToken:gitlab](#opacreaterepoaccesstokengitlab)           | Creates a GitLab repository access token and stores it in AWS Secrets Manager.                                                                                              |                        |
| AWS             | [opa:get-platform-metadata](#opaget-platform-metadata)                        | Retrieves metadata about the OPA (Open Policy Agent) on AWS platform.                                                                                                       |                        |
| AWS             | [opa:get-ssm-parameters](#opaget-ssm-parameters)                              | Retrieves AWS SSM parameter values for specified environment providers.                                                                                                     |                        |
| AWS             | [aws:cloudcontrol:create](#awscloudcontrolcreate)                             | Action for creating resources using AWS Cloud Control API.                                                                                                                  |                        |
|                 |
| Azure           | [publish:azure](#publishazure)                                                | Action to initialize a Git repository and publish it to Azure DevOps.                                                                                                       |                        |
| Azure           | [git:clone:azure](#gitcloneazure)                                             | Clones repositories from Azure DevOps Git, allowing for multiple repositories to be cloned with the same Git reference.                                                     |                        |
| Azure           | [git:commit:azure](#gitcommitazure)                                           | Commits and pushes changes to an Azure DevOps Git repository, processing parameters and handling Git operations.                                                            |                        |
| Azure           | [pipeline:create:azure](#pipelinecreateazure)                                 | Automates the creation of Azure DevOps pipelines from Git repositories.                                                                                                     |                        |
| Azure           | [azure:pipeline:create](#azurepipelinecreate)                                 | Creates an Azure Pipeline through the Azure DevOps REST API using Backstage's scaffolding plugin.                                                                           |                        |
| Azure           | [azure:pipeline:run](#azurepipelinerun)                                       | Defines an Azure DevOps pipeline runner action using Backstage's scaffolder plugin.                                                                                         |                        |
| Azure           | [azure:pipeline:permit](#azurepipelinepermit)                                 | Defines an Azure DevOps pipeline permission management action for Backstage scaffolding.                                                                                    |                        |
| Azure           | [azure:repo:clone](#azurerepoclone)                                           | Action for cloning an Azure repository into a specified workspace directory using Backstage's scaffolding plugin.                                                           | ✅️                     |
| Azure           | [azure:repo:push](#azurerepopush)                                             | Action that pushes content from a local workspace to a remote Azure repository.                                                                                             | ✅️                     |
| Azure           | [azure:repo:pr](#azurerepopr)                                                 | Action for creating a pull request in Azure DevOps.                                                                                                                         | ✅️                     |
|                 |
| Bitbucket       | [publish:bitbucket](#publishbitbucket)                                        | (Deprected for publish:bitbucketCloud and publish:bitbucketServer) Creates a new Bitbucket repository and publishes the files in the workspace directory to the repository. | ✅️                     |
| Bitbucket       | [publish:bitbucketCloud](#publishbitbucketCloud)                              | Creates and initializes a Bitbucket Cloud repository and publishes content to it from a workspace.                                                                          | ✅️                     |
| Bitbucket       | [bitbucket:pipelines:run](#bitbucketpipelinesrun)                             | Triggers a run of a Bitbucket Cloud pipeline using the Backstage framework.                                                                                                 |                        |
| Bitbucket       | [publish:bitbucketCloud:pull-request](#publishbitbucketcloudpull-request)     | Action for publishing a pull request to a Bitbucket Cloud repository using Backstage's scaffolding system.                                                                  |                        |
| Bitbucket       | [publish:bitbucketServer](#publishbitbucketserver)                            | Creates a new repository in Bitbucket Server.                                                                                                                               | ✅️                     |
| Bitbucket       | [publish:bitbucketServer:pull-request](#publishbitbucketserverpull-request)   | Opens a pull request on a Bitbucket Server repository to merge two existing branches.                                                                                       |                        | 
|                 |
| CNEO            | [cnoe:kubernetes:apply](#cnoekubernetesapply)                                 | Action for applying Kubernetes manifests using `kubectl`, either from a string, an object, or a file path, with support for namespaced configurations.                      |                        |
| CNEO            | [cnoe:verify:dependency](#cnoeverifydependency)                               | Verify resource dependencies for CNOE.                                                                                                                                      |                        |
| CNEO            | [cnoe:utils:sanitize](#cnoeutilssanitize)                                     | Action for sanitizing resources defined in a YAML document by removing empty fields, before further processing.                                                             |                        |
|                 |
| Codacy          | [codacy:add-repo](#codacyadd-repo)                                            | Action for adding a repository to Codacy using its API.                                                                                                                     |                        |
|                 |
| Confluence      | [confluence:transform:markdown](#confluencetransformmarkdown)                 | Action that transforms Confluence content into Markdown format and updates a GitHub repository with the new Markdown files and modified `mkdocs.yml` configuration.         |                        |
|                 |
| Cue             | [cue:cueflow](#cuecueflow)                                                    | This action fetches some template content, runs a Cue command on it, and copies output files to a specified directory.                                                      |                        |
|                 |
| Gerrit          | [publish:gerrit:review](#publishgerritreview)                                 | Action for creating a new Gerrit review by committing and pushing changes to a Git repository.                                                                              |                        |
| Gerrit          | [publish:gerrit](#publishgerrit)                                              | Action that initializes a Git repository with content from the workspace and publishes it to a Gerrit repository.                                                           |                        |
| Gerrit          | [publish:gitea](#publishgitea)                                                | This action initializes a git repository from workspace content and publishes it to a Gitea repository.                                                                     |                        |
|                 |
| GitHub          | [publish:github](#publishgithub)                                              | Creates a new GitHub repository and publishes files from the workspace to the repository.                                                                                   | ✅️                     |
| GitHub          | [publish:github:pull-request](#publishgithubpull-request)                     | Creates a pull request in a pre-existing repository using files from the workspace.                                                                                         | ✅️                     |
| GitHub          | [github:actions:dispatch](#githubactionsdispatch)                             | Allows you to trigger the execution of a GitHub action on a repository.                                                                                                     | ✅️                     |
| GitHub          | [github:webhook](#githubwebhook)                                              | Configures a webhook on an existing GitHub repository, requiring `repoUrl` and `webhookUrl`.                                                                                | ✅️                     |
| GitHub          | [github:autolinks:create](#githubautolinkscreate)                             | Create autolink references for GitHub repositories, linking keywords to specific URLs in issues, pull requests, or commits.                                                 |  ✅️                     |
| GitHub          | [github:deployKey:create](#githubdeploykeycreate)                             | Creates and stores GitHub Deploy Keys, with the option to encrypt and store the private key as a GitHub secret.                                                             |   ✅️                      |
| GitHub          | [github:environment:create](#githubenvironmentcreate)                         | Creates deployment environments on GitHub with branch or tag policies and environment variables.                                                                            |  ✅️                     |
| GitHub          | [github:issues:label](#githubissueslabel)                                     | Adds labels to pull requests or issues on GitHub.                                                                                                                           | ✅️                     |
| GitHub          | [github:pages:enable](#githubpagesenable)                                     | Enables GitHub Pages for a repository with options for build type, source branch, and source path.                                                      | ✅️                     |   
| GitHub          | [github:repo:create](#githubrepocreate)                                       | Creates GitHub repositories programmatically with various settings and collaborators.                                                                                       | ✅️                      |
| GitHub          | [github:repo:push](#githubrepopush)                                           | Initializes a git repository in a workspace and pushes it to GitHub with options to configure branch protection and repository settings.                                    |  ✅️                     |
| GitHub          | [parse:repo-url:plus](#parserepo-urlplus)                                     | Parses GitHub repository URLs and extracts relevant metadata based on a specified schema.                                                                                   |                        |
|                 |
| GitLab          | [publish:gitlab](#publishgitlab)                                              | Initializes a Git repository of the content in the workspace and publishes it to GitLab.                                                                                    | ✅️                     |
| GitLab          | [publish:gitlab:merge-request](#publishgitlabmerge-request)                   | Creates a merge request in a GitLab repository.                                                                                                                             | ✅️                     |
| GitLab          | [gitlab:repo:push](#gitlabrepopush)                                           | Automates the process of pushing commits to a GitLab repository.                                                                                                            | ✅️                     |
| GitLab          | [gitlab:group:ensureExists](#gitlabgroupensureExists)                         | Ensures that a GitLab group or sub-groups exist, creating them if they do not.                                                                                              | ✅️                     |
| GitLab          | [gitlab:issues:create](#gitlabissuescreate)                                   | Action to create GitLab issues, including input validation using Zod, GitLab API calls, and error handling.                                                                 | ✅️                     |
| GitLab          | [gitlab:issue:edit](#gitlabissueedit)                                         | Validates input and output data using `zod` and interacts with GitLab's API to edit issue properties such as labels and assignees.                                          | ✅  ️                   |
| GitLab          | [gitlab:pipeline:trigger](#gitlabpipelinetrigger)                             | Automates the creation and triggering of a GitLab pipeline using specific input parameters.                                                                                 | ✅️                     |
| GitLab          | [gitlab:projectAccessToken:create](#gitlabprojectAccessTokencreate)           | Action that creates a project access token in GitLab.                                                                                                                       | ✅    ️                 |
| GitLab          | [gitlab:projectVariable:create](#gitlabprojectVariablecreate)                 | Action for creating project variables in GitLab.                                                                                                                            | ✅ ️                    |
| GitLab          | [gitlab:projectDeployToken:create](#gitlabprojectDeployTokencreate)           | Action that creates a GitLab project deploy token.                                                                                                                          | ✅ ️                    |
|                 |
| Humanitec       | [humanitec:create-app](#humaniteccreate-app)                                  | Action for creating applications in Humanitec, using a YAML setup file to define application properties.                                                                    |                        |
|                 |
| Microsoft Teams | [ms-teams:sendMessage](#ms-teamssendmessage)                                  | Action that sends messages to a Microsoft Teams channel using a specified webhook URL.                                                                                      |                        |
|                 |
| PagerDuty       | [pagerduty:service:create](#pagerdutyservicecreate)                           | Action for the Backstage scaffolder plugin that allows users to create a PagerDuty service.                                                                                 |                        |
|                 |
| Quay            | [quay:create-repository](#quaycreate-repository)                              | Action for creating a repository in Quay.io.                                                                                                                                |                        |
|                 |
| Sonarqube       | [sonarqube:create-project](#sonarqubecreate-project)                          | Action for creating a project in SonarQube via the Backstage Scaffolder plugin.                                                                                             |                        |
|                 |
| ServiceNow      | [servicenow:now:table:createRecord](#servicenownowtablecreaterecord)          | Action for Backstage's Scaffolder, allowing users to insert a record into a specified ServiceNow.                                                                           |                        |
| ServiceNow      | [servicenow:now:table:deleteRecord](#servicenownowtabledeleteRecord)          | Action for deleting a record from a ServiceNow table.                                                                                                                       |                        |
| ServiceNow      | [servicenow:now:table:modifyRecord](#servicenownowtablemodifyRecord)          | Action handler that modifies a record in a ServiceNow table.                                                                                                                |                        |
| ServiceNow      | [servicenow:now:table:retrieveRecord](#servicenownowtableretrieveRecord)      | Action handler that retrieves a record in a ServiceNow table.                                                                                                               |                        |
| ServiceNow      | [servicenow:now:table:retrieveRecords](#servicenownowtableretrieverecords)    | Action handler that retrieves records in a ServiceNow table.                                                                                                                |                        |
| ServiceNow      | [servicenow:now:table:updateRecord](#servicenownowtableupdaterecord)          | Action handler that updates a record in a ServiceNow table.                                                                                                                 |                        |
|                 |
| Slack           | [slack:sendMessage:conversation](#slacksendmessageconversation)               | Sends a Slack message to a specific conversation using the Slack API.                                                                                                       |                        |
| Slack           | [slack:sendMessage:webhook](#slacksendmessagewebhook)                         | Sends a message to Slack via a webhook URL.                                                                                                                                 |                        |
|                 |
| Sentry          | [sentry:create-project](#sentrycreate-project)                                | Action to create a new project in Sentry.                                                                                                                                   |                        |
|                 |
| Torque          | [torque:create-app](#torquecreate-app)                                        | Action for managing applications in Torque.                                                                                                                                 |                        |
|                 |
| Webex           | [webex:webhooks:sendMessage](#webexwebhookssendmessage)                       | Action that sends messages to Webex Incoming Webhooks.                                                                                                                      |                        |
|                 |
| Yeoman          | [run:yeoman](#runyeoman)                                                      | Action for running a Yeoman generator in Backstage scaffolder.                                                                                                              |                        |


## Generic Tools

### Download content

#### `fetch:plain`
✅️ Ready to use in Roadie

Downloads directory content and places it in the workspace.

##### **Inputs**
| Key        | Description                                                                                | Type   | Example         |
|------------|--------------------------------------------------------------------------------------------|--------|-----------------|
| url        | Relative path or absolute URL pointing to the directory tree to fetch                       | string | '../assets'     |
| targetPath | Target path within the working directory to download the contents to                        | string | 'assets-copy'    |
| token      | An optional token to use for authentication when reading the resources                      | string | 'sku1263kjh280' |

##### **Examples**
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

##### ****Outputs****
None

##### **Links:**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/plain.ts)


-----


#### `fetch:plain:plus`
Downloads directory content and places it in the workspace for multiple urls.

##### **Inputs**

| Key                       | Description                                                                                                                                                  | Type   | Example                                                                                |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|----------------------------------------------------------------------------------------|
| `commonParams`            |                                                                                                                                                              | object | { 'targetPath': './' }                                                                 |
| `commonParams.url`        | Relative path or absolute URL pointing to the directory tree to fetch. If only a single directory needs to be fetched this can be used instead of `sources`. | string | `https://github.com/backstage/community/tree/main/backstage-community-sessions/assets` |
| `commonParams.targetPath` | Target path within the working directory to download the contents to. Used as the default path for downloads from urls in `sources`.                         | string | `downloads`                                                                            |
| `sources`                 | An array of objects containing URL and optionally a target path. If no TargetPath is specified the parameter from commonParams is used.                      | array  | [ { 'url': './assets' } ]                                                              |
| `sources[0].url`*         | Relative path or absolute URL pointing to the directory tree to fetch                                                                                        | string  | '../assets'                                                                            |
| `sources[0].targetPath`   | Target path within the working directory to download the contents to.                                                                                        | string  | 'downloads'                                                                            |

##### **Examples**

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

##### **Outputs**
| Key     | Description                                                          | Type  |
|---------|----------------------------------------------------------------------|-------|
| results | An array of paths that have been written to in the working directory | array |

##### **Links:**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/main/exemples.md#fetchplainplus)
- [How to add it to Backstage](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/main/README.md#get-started)


-----


#### `fetch:plain:file`
✅️ Ready to use in Roadie

Downloads single file and places it in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.

##### **Inputs**
| Key        | Description                                                            | Type   | Example               |
|------------|------------------------------------------------------------------------|--------|-----------------------|
| url        | Relative path or absolute URL pointing to the file to fetch            | string | '../assets/test.json' |
| targetPath | Target directory within the working directory to download the file to  | string | 'assets-copy'         |
| token      | An optional token to use for authentication when reading the resources | string | 'sku1263kjh280'       |

##### **Examples**
```yaml
steps:
  - action: fetch:plain:file
    id: fetch-plain-file
    name: Fetch plain file
    input:
      url: ./plain.json
```

##### **Outputs**
None

##### **Links:**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/plainFile.ts)


-----


#### `fetch:plain:file:plus`

##### **Inputs**

| Key                       | Description                                                                                                                                 | Type   | Example                                                                               |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|--------|---------------------------------------------------------------------------------------|
| `commonParams`            |                                                                                                                                             | object | { 'targetPath': './test.json' }                                                                 |
| `commonParams.url`        | Relative path or absolute URL pointing to the file to fetch. If only a single file needs to be fetched this can be used instead of `files`. | string | `https://github.com/backstage/community/tree/main/backstage-community-sessions/assets/test.json` |
| `commonParams.targetPath` | Target path within the working directory to download the contents to. Used as the default path for downloads from urls in `sources`.        | string | `downloads`                                                                           |
| `files`                   | An array of objects containing URL and optionally a target path. If no TargetPath is specified the parameter from commonParams is used.     | array  | [ { 'url': './assets/test.json' } ]                                                             |
| `files[0].url`*         | Relative path or absolute URL pointing to the file to fetch                                                                                 | string | '../assets/test.json'                                                                 |
| `files[0].targetPath`   | Target path within the working directory to download the file to.                                                                           | string | 'downloads'                                                                           |

##### **Examples**

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

##### **Outputs**
| Key     | Description                                                       | Type  |
|---------|-------------------------------------------------------------------|-------|
| results | An array of paths that have been written to in the working directory | array |

##### **Links:**
- [How to add it to Backstage](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/main/README.md#get-started)
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#fetchplainfileplus)


-----


#### `fetch:template`
✅️ Ready to use in Roadie

Downloads a directory containing templated files, then renders all the template variables into the files, directory names and content using [Nunjucks](https://mozilla.github.io/nunjucks/), and places the result in the workspace.

##### **Inputs**
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

##### **Examples**
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
## ${{ values.name }} service

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

##### **Outputs**

The `fetch:template` action does not output any data.

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/template.ts)


-----


#### `fetch:template:plus`
Downloads multiple directories containing templated files, then renders all the template variables into the files, directory names and content using [Nunjucks](https://mozilla.github.io/nunjucks/), and places the results in the workspace.

##### **Inputs**
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


##### **Examples**

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

##### **Outputs**
| Key     | Description           | Type  |
|---------|-----------------------|-------|
| results | Array of results data | array |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/main/src/actions/builtin/fetch/template.ts)


-----


#### `fetch:cookiecutter`
*[Deprecated for `fetch:template` used with `cookiecutterCompat: true` input parameter.](https://backstage.io/docs/features/software-templates/builtin-actions#migrating-from-fetchcookiecutter-to-fetchtemplate)*

##### **Links:**
- [Code](https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-cookiecutter)


-----


#### `fetch:template:file`

Downloads a single file and templates variables into file. Then places the result in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.

##### **Inputs**

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

##### **Examples**
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
##### **Outputs**
`None`

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/templateFile.ts)


-----


#### `fetch:rails`
Downloads a Rails template from a given URL, applies templating using Rails, and optionally runs it inside a Docker container.

##### **Inputs**

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


##### **Examples**
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

##### **Outputs**
| **Key**           | **Description**                                         | **Type**   |
|-------------------|---------------------------------------------------------|------------|
| `targetPath`      | Path where the template will be downloaded and processed | `string`   |
| `outputPath`      | The result directory where the generated files are copied | `string`   |

##### **Links**
- [Code](https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-rails)


-----


### HTTP Request Scaffolder Actions

#### `http:backstage:request`
✅️ Ready to use in Roadie

This action allows the Scaffolder task to run an HTTP request against the Backstage Backend API and handle the response. It can be useful for extending the scaffolder to call out to third party APIs. You can do this by configuring a proxy and then calling the proxy with this action.

##### **Inputs:**

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

##### **Examples**

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

##### **Outputs**

| Name    | Description                                                    | Type     |
| ------- |----------------------------------------------------------------|:---------|
| code    | Status code of the http response                               | `string` |
| headers | Object containing all of the response headers and their values | `object` |
| body    | Body of the response. If content-type header is `application/json` this will be a parsed object. Otherwise, it will contain an object with a single param `message` containing a string representing the body of the response.| `object`  |

---

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-http-request)


-----


### Debugging Scaffolder Actions

#### `debug:log`
✅️ Ready to use in Roadie

Use the `debug:log` action to print some information to the task console.

##### **Inputs:**
- `message`: Text to log in the Backstage UI. You can log variables like so: 'Hello, ${{ parameters.name }}'
- `listWorkspace`: List all files in the workspace. If used with "with-contents", also the file contents are listed.
    - values: `with-filenames`,`with-contents`

##### **Examples**
```yaml
steps:
  - action: debug:log
    id: debug-log
    name: Log Hello World
    input:
      message: 'Hello, World!'
```

##### **Outputs**
The `debug:log` action does not have any outputs.


-----


#### `debug:wait`
Waits for a certain period of time.

##### **Inputs**

| key           | description         | value    | example |
|---------------|---------------------|----------|---------|
| `minutes`     | Minutes to wait     | `number` | 2       |
| `seconds`     | Seconds to wait     | `number` | 30      |
| `miliseconds` | Miliseconds to wait | `number` | 3000    |

##### **Outputs**
None


-----


#### `debug:fs:read:plus`
Logs file content.

##### **Inputs**
| key        | description                                           | type    | example       |
|------------|-------------------------------------------------------|---------|---------------|
| `files` | A list of files and directories that will be deleted. | `array` | - somefile.js |

##### **Examples**
```yaml
steps:
  - action: debug:fs:read:plus
    id: debug-fs-read
    name: Read files
    input:
      files:
        - ./catalog-info.yaml
        - some-file.txt
```

##### **Outputs**
| **Key**   | **Description**                    | **Type**                                 |
|-----------|------------------------------------|------------------------------------------|
| `results` | Array of files and their contents. | `array<{file: string, content: string}>` |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/HEAD/exemples.md#debugfsreadplus)


-----


### File Operation Scaffolder Actions

#### `fs:delete`
✅️ Ready to use in Roadie

This action deletes the given files or directories in the workspace. It has one input parameter `files` that can be provided an array of file paths or directory paths to delete.

##### **Inputs**

| key        | description                                           | type    | example       |
|------------|-------------------------------------------------------|---------|---------------|
| `files` | A list of files and directories that will be deleted. | `array` | - somefile.js |

##### **Examples**
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

##### **Outputs**

The `fs:delete` action does not have any outputs.

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/delete.ts)


-----


#### `fs:rename`
✅️ Ready to use in Roadie

This action allows you to move `files` within the workspace. The `files` option takes an array of objects containing `from` and `to` options.

##### **Inputs**
| key     | description                                                             | type     | example                                       |
|---------|-------------------------------------------------------------------------|----------|-----------------------------------------------|
| `files` | A list of objects with a `from` and `to` field representing file paths. | `object` | {'from': 'a/file.yaml', 'to': 'b/file.yaml' } |

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/rename.ts)


-----


#### `fs:rename:plus

Defines a file renaming action for Backstage, allowing users to rename files and directories within a workspace.

##### **Inputs**
| **Key**              | **Description**                                         | **Type**        | **Example** |
|----------------------|---------------------------------------------------------|-----------------|-------------|
| `from`               | The source location of the file to be renamed            | `string`        |             |
| `to`                 | The destination of the new file                         | `string`        |             |
| `overwrite`          | Overwrite existing file or directory, default is `false`| `boolean?`      |             |
| `files`              | Array of files to rename, each using `commonParams`      | `Array<object>` |             |
| `commonParams`       | Optional shared parameters for all files                | `object?`       |             |

##### **Examples**
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

##### **Outputs**
| **Key**   | **Description**                        | **Type**        |
|-----------|----------------------------------------|-----------------|
| `results` | Array of results of the rename actions | `Array<any>`    |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/filesystem/rename.ts)


-----


#### `roadiehq:utils:fs:replace`
✅️ Ready to use in Roadie

This action replaces found string in files with content defined in input.

##### **Inputs**

| key                  | description                                                                          | type      | example                                                                                     |
|----------------------|--------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------------------------------|
| `files`*             | Array of files and their replacing configuration.                                    | `array`   | [{'file': './backstage/catalog-info.yaml', 'find': 'Component', 'replaceWith': 'Resource'}] |
| `files[].file`       | Path to the file to be modified                                                      | `string`  | ./backstage/catalog-info.yaml                                                               |
| `files[].find`       | The string to be replaced. A Regex can be used if `matchRegex` is true.              | `string`  | 'Component'                                                                                 |
| `files[].matchRegex`  | Specifies if the find value should be used as a Regex expression. Defaults to false. | `boolean` | true                                                                                        |
| `files[].replaceWith` | The string to be used to replace above                                               | `string`  | 'Resource'                                                                                  |

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/fs/replaceInFile.ts)


-----


#### `roadiehq:utils:fs:parse`
✅️ Ready to use in Roadie

Reads a file from the workspace and optionally parses it.

##### **Inputs**

| key      | description                                    | type     | example                       |
|----------|------------------------------------------------|----------|-------------------------------|
| `path`*  | Path to the file to read.                      | `string` | ./backstage/catalog-info.yaml |
| `parser` | Select a parser for the matching content type. | `string` | 'yaml', 'json', 'multiyaml'   |

##### **Examples**

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

##### **Outputs**

The `roadiehq:utils:fs:parse` action produces one output.

| Key     | Description         | type            | 
|---------| ------------------- |-----------------|
| content | Content of the file | `string` / `object` |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/fs/parseFile.ts)


-----


#### `roadiehq:utils:fs:write`
✅️ Ready to use in Roadie

Creates a file with the content on the given path

##### **Inputs**

| Name               | Description                                              | Type      | Example                   |
|--------------------|----------------------------------------------------------|-----------|---------------------------|
| path*              | Relative path to the file                                | `string`  | './content/manifest.json' |
| content*           | Content of the file                                      | `string`  | '{"a":"b"}'               |
| preserveFormatting | Preserve formatting for JSON content. Defaults to false. | `boolean` | true                      |

##### **Example**
```yaml
steps:
  - id: create
    name: Create file
    action: roadiehq:utils:fs:write
    input:
      path: foo
      content: bar
```

##### **Outputs**

The `roadiehq:utils:fs:write` action produces one output.

| Name | Description                    | Type     |
|------|--------------------------------|----------|
| path | Path to the newly created file | `string` |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/fs/writeFile.ts)


-----


#### `roadiehq:utils:fs:append`
✅️ Ready to use in Roadie

Append content to the end of the given file, it will create the file if it does not exist.

##### **Inputs**
| Name      | Description                       |
| --------- | --------------------------------- |
| path\*    | Path to existing file to append.  |
| content\* | This will be appended to the file |

##### **Example**
```yaml
steps:
  - id: append
    name: Append to file
    action: roadiehq:utils:fs:append
    input:
      path: foo
      content: bar
```

##### **Outputs**

The `roadiehq:utils:fs:append` action produces one output.

| Name | Description                           |
| ---- | ------------------------------------- |
| path* | Path to the file that got appended to |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/fs/appendFile.ts)


-----


#### `roadiehq:utils:merge`

Merges data into an existing structured file.

##### **Inputs**

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

##### **Example**
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

##### **Outputs**

The `roadiehq:utils:merge` action produces one output.

| Name | Description                        | Type    |
| ---- |------------------------------------|---------|
| path | Path to the file that got updated. | `string` |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/merge/merge.ts)


-----


#### `roadiehq:utils:zip`
✅️ Ready to use in Roadie

Compresses the content found in the Scaffolder workspace at the path specified, to a new compressed file in the workspace.

##### **Input**

| Name        | Description                                                   | Type     | Example            |
|-------------|---------------------------------------------------------------|----------|--------------------|
| path*       | Relative path to the file or directory.                       | `string` | `./error_logs.txt` |
| outputPath* | Path of the new zip file that will be saved to the workspace. | `string` | `./error_logs.zip` |

##### **Examples**
```yaml
steps:
  - id: zip
    name: Zip the workspace
    action: roadiehq:utils:zip
    input:
      path: ./error_logs.txt
      outputPath: ./error_logs.zip
```

##### **Outputs**

The `roadiehq:utils:zip` action produces one output.

| Name       | Description                                          | Type    |
| ---------- |------------------------------------------------------|---------|
| outputPath | Path to the newly created zip file in the workspace. | `string` |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/zip.ts)


-----


#### `zip:decompress:plus`
Decompress ZIP files from various sources, such as base64, files, or URLs, and saves them to specified destinations while handling errors.

##### **Inputs**
| **Key**           | **Description**                                           | **Type**           | **Example** |
|-------------------|-----------------------------------------------------------|--------------------|-------------|
| `content`         | Zip File Content.                                         | `string`           |             |
| `destination`     | Relative path of destination files.                       | `string`           |             |
| `encoding`        | Indicate if input "content" field has encoded in "base64", "file" or "url". | `'base64' | 'file' | 'url'` |             |
| `skipErrors`      | Not throw on errors, allowing next actions to proceed.     | `boolean`          |             |

##### **Examples**

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

##### **Outputs**
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

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/zip/zip-decompress.ts)


-----


#### `glob:plus`
Allows users to match files using glob patterns and various options for customizing the file search.

##### **Inputs**

| **Key**                        | **Description**                                                                                              | **Type**         | **Example** |
|---------------------------------|--------------------------------------------------------------------------------------------------------------|------------------|-------------|
| `patterns`*                      | List of glob patterns to match files.                                                                         | `array[string]`  |             |
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

##### **Examples**
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

##### **Outputs**
| **Key**   | **Description**            | **Type**         |
|-----------|----------------------------|------------------|
| `results` | Array of matched file paths | `array[string]`  |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/glob.ts)


-----


### Parsing and Serialization Actions

#### `json`

Process JSON data from various encoded content sources such as Base64, files, raw data, or URLs.

##### **Inputs**

| **Key**         | **Description**                                                                          | **Type**            | **Example** |
|-----------------|------------------------------------------------------------------------------------------|---------------------|-------------|
| `content`*       | JSON source content                                                                      | `string`            |             |
| `encoding`*      | Indicates if input `content` field is encoded in `base64`, `file`, `raw`, or `url`.       | `string`            |             |
| `sources`       | An array of fields containing the source JSON data and encoding information.              | `array` of `object` |             |
| `commonParams`  | (Optional) Common parameters shared by multiple sources for content and encoding          | `Partial<FieldsType>`|             |

##### **Examples**
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

##### **Outputs**

| **Key**  | **Description**                    | **Type**      |
|----------|------------------------------------|---------------|
| `results`| Array of parsed JSON objects       | `array` of `object`|

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/json/json.ts)


-----


#### `roadiehq:utils:serialize:json`
✅️ Ready to use in Roadie

Converts JSON to a string format.

##### **Inputs**

| Name     | Description                                                                                                                            | Type                | Example                   |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|---------------------|---------------------------|
| data*    | Input data to perform serialization on.                                                                                                | `object` / `array`  | { a: "a", b: { c: "c" } } |
| replacer | Array of keys that should be included in output. If specified, keys not in this array will be excluded.                                | `array`             | ['a', 'b', 'c']           |
| space    | The number of spaces to add after each property. If >=1 it adds newlines after each property. If a string it adds that string instead. | `number` / `string` | 1                         |

##### **Examples**
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

##### **Outputs**

The `roadiehq:utils:serialize:json` action produces one output.

| Name       | Description                      | Type     |
|------------|----------------------------------|----------|
| serialized | Output result from serialization | `string` |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/serialize/json.ts)


-----


#### `xml`
Parse XML into JSON using various options and processing pipes, utilizing the `xml-js` library for conversion.

##### **Inputs**

| Key                    | Description                                                                                                       | Type           | Example |
|-----------------------|-------------------------------------------------------------------------------------------------------------------|----------------|---------|
| content*               | XML source content                                                                                               | `string`       |         |
| encoding*              | Indicate if input "content" field has encoded in "base64", "file", "raw" or "url".                            | `string`       |         |
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

##### **Examples**
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

##### **Outputs**
| Key       | Description                   | Type         |
|-----------|-------------------------------|--------------|
| results   | Array of parsed XML objects.  | `array`      |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/xml/xml.ts)
- [NPM](https://www.npmjs.com/package/@k3tech/backstage-plugin-scaffolder-backend-module-parsings)


-----


#### `yaml`
Parse YAML content from various sources using the Backstage scaffolder framework.

##### **Inputs**
| **Key**               | **Description**                                                           | **Type**               | **Example** |
|-----------------------|---------------------------------------------------------------------------|------------------------|-------------|
| `content`*             | YAML source content                                                       | `string`               |             |
| `encoding`*            | Indicates if input "content" is encoded in "base64", "file", "raw", or "url" | `string`               |             |

##### **Examples**
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

##### **Outputs**

| **Key**   | **Description**                   | **Type**    |
|-----------|-----------------------------------|-------------|
| `results` | Array of parsed YAML content      | `array[]`   |


##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-parsings/blob/main/src/actions/yaml/yaml.ts)


-----


#### `roadiehq:utils:serialize:yaml`
✅️ Ready to use in Roadie

Converts valid YAML to a string format.

##### **Inputs**
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

##### **Examples**

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

##### **Outputs**

The `roadiehq:utils:serialize:yaml` action produces one output.

| Name       | Description                      | Type    |
| ---------- | -------------------------------- |---------|
| serialized | Output result from serialization | `string` |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/serialize/yaml.ts)


-----


### Content Manipulation Scaffolder Actions

#### `roadiehq:utils:jsonata`
✅️ Ready to use in Roadie

Allows performing JSONata operations and transformations on input objects and produces the output result as a step output.

##### **Inputs**
| Name        | Description                                | Type               | Example          |
| ----------- | ------------------------------------------ |--------------------|------------------|
| data*       | Input data to be transformed               | `object` / `array` | `{ a: "a" }`     |
| expression* | JSONata expression to perform on the input | `string`            | `users[0].email` |

##### **Examples**
```yaml
steps:
  - id: transform
    name: Transform with jsonata
    action: roadiehq:utils:jsonata
    input:
      data: { users: [{ email: 'a@b.com', name: 'a' }] }
      expression: 'users[0].email'
```

##### **Outputs**
The `roadiehq:utils:jsonata` action produces one output.

| Name   | Description                | Type                                     |
| ------ | -------------------------- |------------------------------------------|
| result | Output result from JSONata | `object` / `array` / `string` / `number` |


-----


#### `roadiehq:utils:jsonata:yaml:transform`
✅️ Ready to use in Roadie

Allows performing JSONata operations and transformations on a YAML file in the workspace. The result can be read from the result step output.

##### **Inputs**
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

##### **Outputs**

The `roadiehq:utils:jsonata:yaml:transform` action produces one output.

| Name   | Description                               |
| ------ | ----------------------------------------- |
| result | Output result from JSONata yaml transform |


-----


#### `roadiehq:utils:jsonata:json:transform`
✅️ Ready to use in Roadie

Allows performing JSONata operations and transformations on a JSON file in the workspace. The result can be read from the result step output.

##### **Inputs**
| Name         | Description                                                                                                                                                                                                              | Type                | Example                  |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|--------------------------|
| path\*       | Input path to read json file                                                                                                                                                                                             | `string`            | 'backstage/package.json' |
| expression\* | JSONata expression to perform on the input                                                                                                                                                                               | `string`            | 'engines.node'           |
| as           | Returns result as a JSON string or an object                                                                                                                                                                             | `string`            | 'string' / 'object'      |
| replacer     | If `string` is specified for the `as` field, this filters the output by specifiying an array of keys that should be included in output. If specified, keys not in this array will be excluded.                           | `array`             | ['a', 'b', 'c']          |
| space        | If `string` is specified for the `as` field, this defines the number of spaces to add after each property in the resulting string. If >=1 it adds newlines after each property. If a string it adds that string instead. | `number` / `string` | 1                        |

##### **Examples**

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

##### **Outputs**

The `roadiehq:utils:jsonata:json:transform` action produces one output.

| Name   | Description                               | Type               |
| ------ | ----------------------------------------- |--------------------|
| result | Output result from JSONata json transform | `string` / `object` |

-----


#### `json:merge-file`

Merges JSON files into a single JSON object stored in a new file in the workspace.

##### **Inputs**
| Name             | Description                                                                                                                                    | Type     | Example                                    |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------------------------------|
| inputFile\*      | The file in the working directory to merge.                                                                                                    | `string` | 'package.json'                             |
| outputFileName\* | The name of the file to write to.                                                                                                              | `string` | 'package.json.updated'                     |
| outputFilePath   | The directory path to output the file to. This is combined with the file name to form the full path. Defaults to the task's working directory. | `string` | 'updates'                                  |
| jsonMergeOptions | Options to pass to the JSON mergeFiles function. [See options here.](https://www.npmjs.com/package/json-merger#config)                         | `object` | { 'defaultArrayMergeOperation': 'concat' } |

##### **Examples**

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

##### **Outputs**
None

-----


#### `json:merge-files`

Merges JSON files into a single JSON object stored in a new file in the workspace.

##### **Inputs**
| Name             | Description                                                                                                                                    | Type     | Example                                    |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------------------------------|
| inputFiles\*     | The file in the working directory to merge.                                                                                                    | `array`  | ['package1.json', 'package2.json']         |
| outputFileName\* | The name of the file to write to.                                                                                                              | `string` | 'package3.json'                            |
| outputFilePath   | The directory path to output the file to. This is combined with the file name to form the full path. Defaults to the task's working directory. | `string` | 'updates'                                  |
| jsonMergeOptions | Options to pass to the JSON mergeFiles function. [See options here.](https://www.npmjs.com/package/json-merger#config)                         | `object` | { 'defaultArrayMergeOperation': 'concat' } |

##### **Examples**

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

##### **Outputs**
None

-----


#### `roadiehq:utils:json:merge`
✅️ Ready to use in Roadie

Merge new data into an existing JSON file.

##### **Inputs**
| Name            | Description                                                                                                     | Type                | Example                                                      |
|-----------------|-----------------------------------------------------------------------------------------------------------------|---------------------|--------------------------------------------------------------|
| path\*          | Path to existing file to append.                                                                                | `string`            | 'package.json'                                               |
| content\*       | This will be merged into to the file. Can be either an object or a string.                                      | `string` / `object` | { 'workspaces': { 'packages': ['packages/*', 'plugins/*'] } } |
| mergeArrays     | Where a value is an array the merge function should concatenate the provided array value with the target array. | `boolean`           | true                                                         |
| matchFileIndent | Make the output file indentation match that of the specified input file.                                        | `boolean`           | true                                                         |

##### **Examples**

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

##### **Outputs**

The `roadiehq:utils:json:merge` action produces one output.

| Name | Description                           | Type     |
|------|---------------------------------------|----------|
| path | Path to the file that got appended to | `string` |

-----


#### `regex:replace`
Validate an input structure using the `zod` library.
##### **Inputs**
| Key           | Description                                                                 | Type                            | Example |
|---------------|-----------------------------------------------------------------------------|---------------------------------|---------|
| `regExps`*     | Array of regex objects with patterns, flags, replacements, and values       | `array`                         |         |
| `pattern`*     | The regex pattern to match the value, like in `String.prototype.replace()`   | `string`                        |         |
| `flags`       | Optional array of regex flags (`g`, `m`, `i`, `y`, `u`, `s`, `d`)           | `array`                         |         |
| `replacement`* | The replacement value for the regex, like in `String.prototype.replace()`    | `string`                        |         |
| `values`*      | Array of objects containing key-value pairs for regex input values           | `array`                         |         |
| `key`*         | Key to access the regex value                                               | `string`                        |         |
| `value`*       | Input value of the regex                                                    | `string`                        |         |
##### **Examples**
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

##### **Outputs**
| Key        | Description                                                            | Type     |
|------------|------------------------------------------------------------------------|----------|
| `pattern`  | A validated regex pattern that can be passed to the RegExp constructor  | `string` |
| `flags`    | A validated set of flags that modify regex behavior                    | `array`  |
| `values`   | Validated key-value pairs of regex input                               | `array`  |

##### **Links**
- [Code](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/regex-actions/src/actions/regex/replace.ts)
- [npm package](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-regex)

-----


#### `regex:fs:replace:plus`
Enable regex-based search and replacement across files using glob patterns.

##### **Inputs**
| **Key**         | **Description**                                                             | **Type**    | **Example** |
|-----------------|-----------------------------------------------------------------------------|-------------|-------------|
| `pattern`*       | Regex expression to evaluate in file contents from `file`.                  | `string`    |             |
| `glob` *         | Expression glob to find files to evaluate                                   | `string`    |             |
| `replacement`*   | Replacement expression based on the `pattern` field                         | `string`    |             |
| `flags`         | Regex flags like d, g, i, m, s, u, v or y (optional)                        | `string`    |             |

##### **Examples**
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

##### **Outputs**

| **Key**   | **Description**                                   | **Type**     |
|-----------|---------------------------------------------------|--------------|
| `results` | Array containing objects with the results of the regex operation | `array<object>` |


##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/regex-fs-replace.ts)

-----


### Other utils

#### `uuid:v4:gen:plus`
Generates a list of UUIDv4 values, with inputs for specifying the number of UUIDs and outputs in the form of an array of generated UUID strings.

##### **Inputs**

| **Key**          | **Description**             | **Type**      | **Example** |
|------------------|-----------------------------|---------------|-------------|
| `amount`*         | Amount of UUIDs to generate  | `number`      |             |

##### **Examples**
Generate 3 UUID's

```yaml
steps:
  - action: uuid:v4:gen:plus
    id: uuid-v4-gen
    name: UUID gen
    input:
      amount: 3

```

##### **Outputs**

| **Key**         | **Description**                      | **Type**    |
|-----------------|--------------------------------------|-------------|
| `results`       | List of generated UUIDs (UUIDv4)     | `array<string>` | 

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/uuid.ts)

-----


#### `roadiehq:utils:sleep`
✅️ Ready to use in Roadie

Halts the scaffolding for the given amount of seconds

##### **Inputs**

| **Key**          | **Description**            | **Type**      | **Example** |
|------------------|----------------------------|---------------|-------------|
| `amount`*         | Number of seconds to sleep | `number`      | 3           |

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/src/actions/sleep.ts)

-----


#### `vars:plus`
Handle and log input variables, and return the same input as the output in a formatted structure.

##### **Inputs**
| **Key**    | **Description**         | **Type**      | **Example** |
|------------|-------------------------|---------------|-------------|
| `input`*    | The input object passed to the action | `object` |             |

##### **Examples**
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

##### **Outputs**
| **Key**    | **Description**           | **Type**    |
|------------|---------------------------|-------------|
| `result`   | Parsed input parameters    | `object`    |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/vars.ts)

-----

## ske:configure-resource

This action creates and configures resources in Syntasso Kratix Enterprise (SKE) from Roadie.

### Parameters

| Parameter   | Description                               | Default | Required |
|-------------|-------------------------------------------|---------|----------|
| manifest    | Kubernetes manifest in YAML format        | -       | Yes      |

##### **Examples**

```yaml
- action: ske:configure-resource
  id: ske-configure-resource
  input:
    manifest: |
      apiVersion: marketplace.kratix.io/v1alpha1
      kind: jenkins
      metadata:
        name: ${{ parameters.objname }}
        namespace: ${{ parameters.objnamespace}}
      spec: ${{ parameters.spec | dump }}
  name: Create a Jenkins
```


## Backstage Specific

### Catalog Scaffolder Actions

#### `catalog:register`
✅️ Ready to use in Roadie

This action manually registers an entity in the catalog.

You may want to do this if you haven't [enabled autodiscovery](/docs/getting-started/autodiscovery/) of components or if you're using a filename which doesn't match your autodiscovery pattern.

It has two sets of options. The first allows you to configure the location as a complete url through `catalogInfoUrl`.
The second allows you to configure the repo containing the catalog file through `repoContentsUrl` and optionally a filepath through `catalogInfoPath `. You might use this along with the publish:github action.
In both cases you can pass an `optional` flag which determines if the location can be created before the catalog files exists.

##### **Examples**

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

##### **Inputs**

Either `catalogInfoUrl` must be specified or `repoContentsUrl` must be specified.

| key               | description                                                                                           | value     | example                                                                          |
|-------------------|-------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------------------------------------|
| `catalogInfoUrl`  | An absolute URL pointing to the catalog info file location                                            | `string`  | GET                                                                              |
| `optional`        | Permit the registered location to optionally exist. Default: false                                    | `boolean` | '/proxy/snyk/org/${{ parameters.orgName }}/projects/${{ parameters.projectId }}' |
| `repoContentsUrl` | An absolute URL pointing to the root of a repository directory tree                                   | `string`  | Accept: application/json                                                         |
| `catalogInfoPath` | A relative path from the repo root pointing to the catalog info file, defaults to /catalog-info.yaml' | `string`  | kind: Component                                                                  |

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/register.ts)

-----


#### `catalog:register:plus`
Registers entities from a catalog descriptor file in the software catalog.

##### **Inputs**

| **Key**              | **Description**                                                             | **Type**       | **Example** |
|----------------------|-----------------------------------------------------------------------------|----------------|-------------|
| `catalogInfoUrl`      | An absolute URL pointing to the catalog info file location                  | `string`       |             |
| `optional`            | Permit the registered location to optionally exist. Default: `false`        | `boolean`      |             |

##### **Examples**
```yaml
steps:
  - action: catalog:register:plus
    id: register-with-catalog
    name: Register with the catalog
    input:
      infos:
        - catalogInfoUrl: http://github.com/backstage/backstage/blob/master/catalog-info.yaml

```

##### **Outputs**
| **Key**              | **Description**                                         | **Type**     |
|----------------------|---------------------------------------------------------|--------------|
| `entityRef`           | Reference to the entity that was registered             | `string`     |
| `catalogInfoUrl`      | The URL of the catalog info that was registered         | `string`     |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/catalog/register.ts)

-----


#### `catalog:write`
✅️ Ready to use in Roadie

This action creates a `catalog-info.yaml` file into the workspace directory. It takes an object that will be serialized as YAML into the body of the file.

##### **Inputs**

| key        | description                                                                                           | value    | example                     |
|------------|-------------------------------------------------------------------------------------------------------|----------|-----------------------------|
| `filePath` | Defaults to catalog-info.yaml                                            | `string` | backstage/catalog-info.yaml |
| `entity`*  | A full entiy definition matching the entity schema                                                    | `object` |                             |

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/write.ts)

-----


#### `catalog:fetch`
✅️ Ready to use in Roadie

This action fetches an entity or entities from the catalog by entity reference(s).

##### **Inputs**

| key         | description                                           | value    | example                        |
|-------------|-------------------------------------------------------|----------|--------------------------------|
| `entityRef` | An entity reference for the entity you want to fetch. | `string` | component:default/test-service |

##### **Examples**
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

##### **Outputs**

An `entity` object following the [schema of Backstage entities](https://backstage.io/docs/features/software-catalog/descriptor-format/) or `entities` which is an array of entity objects.

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin/catalog/fetch.ts)

-----


#### `catalog:query:plus`
Queries the catalog using provided filters, fields, and ordering parameters. It utilizes Backstage's `CatalogApi` for fetching catalog entities and allows customization through a schema for input and output data.

##### **Inputs**
| **Key**            | **Description**          | **Type**                 | **Example** |
|--------------------|--------------------------|--------------------------|-------------|
| `fields`           | Fields to be retrieved    | `array` of `string`       |             |
| `limit`            | Limit for query results   | `number`                 |             |
| `filter`           | Filter query for entities | `any`                    |             |
| `orderFields.field`| Field to order by         | `string`                 |             |
| `orderFields.order`| Sort order                | `string`, enum: `asc`, `desc` |             |
| `fullTextFilter.term` | Search term for full-text filtering | `string`        |             |
| `fullTextFilter.fields`| Fields for full-text filtering | `array` of `string` |             |

##### **Examples**
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

##### **Outputs**
| **Key**  | **Description**            | **Type**            |
|----------|----------------------------|---------------------|
| `results`| The queried catalog results | `array` of `array` of `Entity` |


##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/catalog/query.ts)

-----


#### `catalog:relation:plus`
Query entities based on relations. It uses a schema-based validation approach for input and output.

##### **Inputs**
| **Key**               | **Description**                                                  | **Type**                          | **Example** |
|-----------------------|------------------------------------------------------------------|-----------------------------------|-------------|
| `relations`           | List of entity relations.                                        | `array` of `object`               |             |
| `relations.type`       | The type of the relation.                                        | `string`                          |             |
| `relations.targetRef`  | The entity reference of the target for this relation.            | `string`                          |             |
| `optional`            | Optional flag indicating whether the property is optional.       | `boolean` or `undefined`          |             |
| `defaultKind`         | Default kind for the entity.                                     | `string` or `undefined`           |             |
| `defaultNamespace`     | Default namespace for the entity.                                | `string` or `undefined`           |             |
| `relationType`        | The type of relation for the entity.                             | `string` or `undefined`           |             |

##### **Examples**
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

##### **Outputs**
| **Key**     | **Description**                                   | **Type**                  |
|-------------|---------------------------------------------------|---------------------------|
| `results`   | List of entities (or null) matching the query.    | `array` of `array` of `Entity` or `null` |


##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/catalog/relations.ts)

-----


#### `catalog:timestamping`
Adds the `backstage.io/createdAt` annotation containing the current timestamp to your entity object

##### **Inputs**
None

##### **Examples**
```yaml
steps:
  - id: timestamp
    name: Add Timestamp to catalog-info.yaml
    action: catalog:timestamping
```

##### **Outputs**
None

##### **Links**
- [npm package](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator)

-----


#### `catalog:scaffolded-from`
Adds `scaffoldedFrom` spec containing the template entityRef to your entity object

##### **Inputs**
None

##### **Examples**
```yaml
steps:
  - id: append-templateRef
    name: Append the entityRef of this template to the entityRef
    action: catalog:scaffolded-from
```

##### **Outputs**
None

##### **Links**
- [npm package](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator)

-----


#### `catalog:annotate`
Allows you to annotate your entity object with specified label(s), annotation(s) and spec property(ies).

##### **Inputs**

##### **Examples**
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

##### **Outputs**

##### **Links**
- [npm package](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-annotator)

-----


### Notifications Scaffolder Actions

#### `notification:send`
Sends notifications via the Backstage Notification Service. It takes in recipients, severity, and other optional parameters, then sends notifications with the specified payload and error handling.

##### **Inputs**
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

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-notifications/src/actions/sendNotification.ts)

-----


## Language / protocol / infrastructure

### Git Scaffolder Actions

#### `git`
Allows execution of Git commands within a specified working directory.

##### **Inputs**

| **Key**                | **Description**                                                                 | **Type**       | **Example** |
|------------------------|---------------------------------------------------------------------------------|----------------|-------------|
| `command`*              | The Git command to run                                                           | `string`       |             |
| `workingDirectory`*      | Working directory within the scaffolder workspace to execute the command in      | `string`       |             |
| `args`                 | Arguments to pass to the Git command                                             | `string[]`     |             |

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/arhill05/backstage-plugin-scaffolder-git-actions/blob/master/src/actions/git.ts)
[Package](https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-git-actions)

-----


### HCL/Terraform Scaffolder Actions

#### `hcl:merge`
Create an action for merging two HCL contents.

##### **Inputs**

| Key               | Description                       | Type                | Example |
|-------------------|-----------------------------------|---------------------|---------|
| `aSourceContent`*  | The HCL content to be merged      | `string`            |         |
| `bSourceContent`*  | The HCL content to be merged      | `string`            |         |

##### **Examples**

##### **Outputs**
| Key   | Description                     | Type       |
|-------|---------------------------------|------------|
| `hcl` | The merged HCL content          | `string`   |

##### **Links**
- [Code](https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts)

-----


#### `hcl:merge:write`
Merge two HCL content strings and write the merged result to a specified output path.

##### **Inputs**

| Key               | Description                                        | Type         | Example |
|-------------------|----------------------------------------------------|--------------|---------|
| `aSourceContent`*  | The HCL content to be merged                       | `string`     |         |
| `source content`*  | The HCL content to be merged                       | `string`     |         |
| `outputPath`      | The path to write the merged HCL content to       | `string`     |         |

##### **Examples**

##### **Outputs**
None


##### **Links**
- [Code](https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts)

-----


#### `hcl:merge:files`
Merge two HCL files specified by their paths.

##### **Inputs**
| Key          | Description                                        | Type              | Example |
|--------------|----------------------------------------------------|-------------------|---------|
| `aSourcePath`* | The path to the HCL file to be merged             | `string`          |         |
| `bSourcePath`* | The path to the HCL file to be merged             | `string`          |         |

##### **Examples**

##### **Outputs**
| Key | Description                                  | Type     |
|-----|----------------------------------------------|----------|
| `hcl` | The merged HCL content from the two files   | `string` |

##### **Links**
- [Code](https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts)

-----


#### `hcl:merge:files:write`
Merge two HCL files and writing the merged content to a specified output path, with input validation using Zod.

##### **Inputs**
| Key          | Description                                        | Type             | Example |
|--------------|----------------------------------------------------|------------------|---------|
| `aSourcePath`* | The path to the HCL file to be merged              | `string`         |         |
| `bSourcePath`* | The path to the HCL file to be merged              | `string`         |         |
| `outputPath`  | The path to write the merged HCL content to        | `string`         |         |

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/seatgeek/backstage-plugins/blob/main/plugins/scaffolder-backend-module-hcl/src/actions/hcl/hcl.ts)

-----


### Kubernetes Scaffolder Actions

#### `kubernetes:create-namespace`
Creates a Kubernetes namespace, leveraging Kubernetes API and Backstage's catalog client to fetch cluster information.

##### **Inputs**
| Key          | Description                                                                 | Type         | Example |
|--------------|-----------------------------------------------------------------------------|--------------|---------|
| `namespace`*  | Name of the namespace to be created                                         | `string`     |         |
| `clusterRef` | Cluster resource entity reference from the catalog                          | `string`     |         |
| `url`       | URL of the Kubernetes API, used if `clusterRef` is not provided            | `string`     |         |
| `token`*      | Bearer token to authenticate with                                           | `string`     |         |
| `skipTLSVerify` | Skip TLS certificate verification, not recommended for production use, defaults to false | `boolean`    |         |
| `caData`     | Certificate Authority base64 encoded certificate                            | `string`     |         |
| `labels`     | Labels that will be applied to the namespace.                              | `string`     |         |

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [NPM](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-kubernetes-dynamic)
- [Code](https://github.com/janus-idp/backstage-plugins/tree/main/plugins/kubernetes-actions)

-----


#### `deploy:kubernetes`
Action for deploying Kubernetes manifests within a Backstage application, using the Kubernetes API to apply the provided YAML or JSON resources.

In this format, the **Inputs** table summarizes the parameters required for the action, while the **Outputs** table outlines the expected output from the action.

##### **Inputs**
| Key          | Description                                                 | Type         | Example |
|--------------|-------------------------------------------------------------|--------------|---------|
| `manifest`*   | YAML or JSON manifest for the Kubernetes resource to be applied | `any`        |         |
| `clusterUrl`* | URL of the Kubernetes API                                  | `string`     |         |
| `authToken`*  | Bearer token to authenticate with the Kubernetes API       | `string`     |         |

##### **Outputs**

| Key         | Description                                           | Type                |
|-------------|-------------------------------------------------------|---------------------|
| `result`    | Result of the applied Kubernetes manifest             | `KubernetesObject`  |

##### **Links**
- [Code](https://github.com/pfeifferj/backstage-plugin-scaffolder-kubernetes-deploy/blob/main/src/actions/k8s-apply.ts)

-----


#### `kube:apply`

Action for applying Kubernetes manifests in a Backstage application.

##### **Inputs**
| Key        | Description                                                   | Type            | Example |
|------------|---------------------------------------------------------------|------------------|---------|
| `manifest`* | The resource manifest to apply in the Platform cluster        | `string`         |         |
| `namespaced`* | Whether the API is namespaced or not                        | `boolean`        |         |

##### **Examples**
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

##### **Outputs**

| Key             | Description                                               | Type            |
|-----------------|-----------------------------------------------------------|------------------|
| `metadata`      | Metadata about the applied resource                       | `object`        |
| `namespace`     | The namespace of the applied resource                     | `string`        |
| `name`          | The name of the applied resource                          | `string`        |
| `response`      | The response object from the Kubernetes API              | `object`        | 

##### **Links**
- [Code](https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/apply.ts)

-----


#### `kube:delete`
Action for deleting Kubernetes resources.

##### **Inputs**
| Key          | Description                                 | Type           | Example |
|--------------|---------------------------------------------|----------------|---------|
| `apiVersion`* | The apiVersion of the resource              | `string`       |         |
| `kind`*      | The kind of the resource                    | `string`       |         |
| `name`*      | The name of the resource                    | `string`       |         |
| `namespace`  | The namespace of the resource               | `string`       |         |

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/delete.ts)

-----


#### `kube:job:wait`
Action that waits for a Kubernetes job to complete based on specified labels and a namespace.

Note: The output properties for `conditions` have been generalized; you may want to specify the exact structure depending on your use case.

##### **Inputs**
| Key       | Description                                                   | Type                                 | Example |
|-----------|---------------------------------------------------------------|--------------------------------------|---------|
| labels*    | The labels of the job resource to wait on                    | `Record<string, string>`            |         |
| namespace | The namespace of the resource to wait on, e.g. default       | `string`                             |         |

##### **Examples**
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

##### **Outputs**
| Key        | Description                                                   | Type                                 |
|------------|---------------------------------------------------------------|--------------------------------------|
| conditions | The conditions of the job once it has completed               | `Array<{ type: string; status: string; ... }>` | 

##### **Links**
- [Code](https://github.com/kirederik/backstage-k8s-scaffolder-actions/blob/main/src/actions/wait.ts)

-----


### Maven Scaffolder Actions

#### `maven`
Runs Maven commands in a specified working directory with optional arguments.

##### **Inputs**
| **Key**                | **Description**                                            | **Type**        | **Example** |
|------------------------|------------------------------------------------------------|-----------------|-------------|
| `command`*              | The Maven command to execute                                | `string`        |             |
| `workingDirectory`      | Directory within the scaffolder workspace to run the command | `string`        |             |
| `args`                 | Arguments to pass to the command                           | `string[]`      |             |

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [NPM](https://www.npmjs.com/package/@gcornacchia/backstage-plugin-scaffolder-maven-actions)
- [Code](https://github.com/gcornacchia/backstage-plugin-scaffolder-maven-actions/blob/develop/src/actions/maven.ts)

-----


### NPM Scaffolder Actions

#### `npm:init`
Action that automates running the `npm init -y` command in a specified workspace directory.

##### **Inputs**

| **Key**               | **Description**                                                | **Type**         | **Example** |
|-----------------------|----------------------------------------------------------------|------------------|-------------|
| `ctx.workspacePath`    | The path of the workspace directory where `npm init` will be run | `string`         |             |
| `ctx.logStream`        | The stream used to log the execution of the shell command       | `Stream`         |             |
| `ctx.logger.info`      | Method for logging informational messages                      | `function`       |             |
| `ctx.logger.error`     | Method for logging error messages                              | `function`       |             |

##### **Examples**
```yaml
steps:
    - id: npm-init
      name: init
      action: npm:init
```

##### **Outputs**

| **Key**          | **Description**                        | **Type**   |
|------------------|----------------------------------------|------------|
| `npm:init`       | Action ID for identifying this template action | `string`   |
| `npm`            | Command for running `npm init` retrieved via `getNpmCommand` | `string`   |
| `executeShellCommand` | Function executing the npm command in the shell | `function` |


##### **Links**
- [Code](https://github.com/arhill05/backstage-plugin-scaffolder-npm-actions/blob/master/src/actions/init/init.ts))

-----


#### `npm:install`
Action for a Backstage Scaffolder plugin that installs an npm package quietly based on the provided package name.

##### **Inputs**

| **Key**               | **Description**               | **Type**     | **Example** |
|-----------------------|-------------------------------|--------------|-------------|
| `packageToInstall`*     | Name of the package to install | `string`     |             |

##### **Examples**
```yaml
  - id: npm-install
    name: install
    action: npm:install
    input:
      packageToInstall: ${{ parameters.packageToInstall }}
```

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/arhill05/backstage-plugin-scaffolder-npm-actions/blob/master/src/actions/install/install.ts))

-----


#### `npm:exec`
Action for executing `npm exec` commands in a task workspace directory, using specific arguments provided in the input.

##### **Inputs:**

| Key         | Description                                      | Type        | Example |
|-------------|--------------------------------------------------|-------------|---------|
| `arguments` | The arguments to pass to the npm exec command     | `array`     |         |
| `arguments.items` | The individual string arguments in the array | `string`    |         |

##### **Examples**
```yaml
  - id: npm-exec
    name: exec
    action: npm:exec
    input:
      args: ${{ parameters.execArgs }}
```

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/arhill05/backstage-plugin-scaffolder-npm-actions/blob/master/src/actions/exec/exec.ts))

-----


#### `npm:config`
For the Backstage scaffolder plugin that runs an `npm config` command with specified arguments in a task's workspace directory.

##### **Inputs**

| **Key**       | **Description**                                      | **Type**           | **Example** |
|---------------|------------------------------------------------------|--------------------|-------------|
| `arguments`*   | The arguments to pass to the npm config command       | `array of strings` |             |

##### **Examples**
```yaml
  - id: npm-config
    name: config
    action: npm:config
    input:
      args: ${{ parameters.execArgs }}
```

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/arhill05/backstage-plugin-scaffolder-npm-actions/blob/master/src/actions/config/config.ts))

-----


### Odo Scaffolder Actions
[OpenShift Do](https://developers.redhat.com/products/odo/overview).

#### `devfile:odo:command`
Action for executing OpenShift Do (odo) commands in a workspace.

##### **Inputs**

| **Key**            | **Description**                                             | **Type**    | **Example** |
|--------------------|-------------------------------------------------------------|-------------|-------------|
| `command`*          | The odo command to run from the scaffolder workspace         | `string`    |             |
| `args`             | Arguments to pass to the command                            | `array`     |             |

##### **Examples**
```yaml
  steps:
    - id: generic-odo-command
      name: Execute odo command
      action: devfile:odo:command
      input:
        command: ${{ parameters.command }} # e.g.: 'analyze'
        args: ${{ parameters.args }} # e.g.: ['-o', 'json']
```

##### **Outputs**
| **Key**              | **Description**                                   | **Type**    |
|----------------------|---------------------------------------------------|-------------|
| `GLOBALODOCONFIG`     | Path to the temporary odo config file             | `string`    |
| `ODO_TRACKING_CONSENT`| Telemetry tracking consent setting for odo        | `string`    |
| `TELEMETRY_CALLER`    | Caller context for telemetry (set to `backstage`) | `string`    |

##### **Links**
- [NPM](https://www.npmjs.com/package/@backstage-community/plugin-scaffolder-backend-module-odo)
- [Code](https://github.com/backstage/community-plugins/blob/main/workspaces/odo/plugins/scaffolder-backend-module-odo/src/actions/odo.ts)

-----


#### `devfile:odo:component:init`
Action to initialize an ODO (OpenShift Do) component using a Devfile within a Backstage scaffolder template.

##### **Inputs**
| **Key**            | **Description**                     | **Type**      | **Example** |
|--------------------|-------------------------------------|---------------|-------------|
| `devfile`*          | The Devfile to use                  | `string`      |             |
| `version`*          | The Devfile Stack version           | `string`      |             |
| `starter_project`  | The starter project                 | `string`      |             |
| `name`*             | The new component name              | `string`      |             |

##### **Examples**
```yaml
steps:
    - id: odo-init
      name: Generate
      action: devfile:odo:component:init
      input:
        name: ${{ parameters.name }}
        devfile: ${{ parameters.devfile_data.devfile }}
        version: ${{ parameters.devfile_data.version }}
        starter_project: ${{ parameters.devfile_data.starter_project }}
```

##### **Outputs**
None

##### **Links**
- [NPM](https://www.npmjs.com/package/@backstage-community/plugin-scaffolder-backend-module-odo)
- [Code](https://github.com/backstage/community-plugins/blob/main/workspaces/odo/plugins/scaffolder-backend-module-odo/src/actions/odo-init.ts)

-----


### Pulumi Scaffolder Actions

#### `pulumi:new`
Action for creating a new Pulumi project, including input validation and execution of necessary commands to set up the project.

##### **Inputs**

| Key            | Description                                                                            | Type                                     | Example |
|----------------|----------------------------------------------------------------------------------------|------------------------------------------|---------|
| `template`*     | The Pulumi template to use, this can be a built-in template or a URL to a template   | `string`                                 |         |
| `stack`*        | The name of the Pulumi stack                                                           | `string`                                 |         |
| `organization`* | The organization to which the Pulumi stack belongs                                     | `string`                                 |         |
| `name`*         | The name of the Pulumi project                                                          | `string`                                 |         |
| `description`  | The Pulumi project description to use                                                  | `string`                                 |         |
| `config`       | The Pulumi project config to use                                                       | `object`                                 |         |
| `secretConfig` | The Pulumi project secret config to use                                                | `object`                                 |         |
| `args`         | The Pulumi command arguments to run                                                    | `string[]`                               |         |
| `folder`*       | The folder to run Pulumi in                                                            | `string`                                 |         |

##### **Examples**
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

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/pulumi/pulumi-backstage-plugin/tree/main/plugins/backstage-scaffolder-backend-pulumi#pulumi-new-action

-----


#### `pulumi:up`
Runs Pulumi to manage cloud resources, either in a local or remote workspace based on the provided configuration.

##### **Inputs**

| Key                          | Description                                                                    | Type                                                                                     | Example |
|------------------------------|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------|
| `stack`*                       | The name of the Pulumi stack.                                                 | `string`                                                                                 |        |
| `organization`*               | The organization name for the Pulumi stack.                                  | `string`                                                                                 |        |
| `name`*                       | The name of the Pulumi project.                                               | `string`                                                                                 |        |
| `deployment`*                 | This flag indicates that Pulumi Deployment will be used.                     | `boolean`                                                                                |        |
| `repoUrl`                    | The Pulumi project repo URL to use, when using Pulumi Deployment.            | `string`                                                                                 |        |
| `repoBranch`                 | The Pulumi project repo branch to use, when using Pulumi Deployment.         | `string`                                                                                 |        |
| `repoProjectPath`            | The Pulumi project repo path to use, when using Pulumi Deployment.           | `string`                                                                                 |        |
| `config`                     | The Pulumi project config to use.                                            | `object`                                                                                 |        |
| `providerCredentialsFromEnv` | The Pulumi project provider credentials to use.                              | `array of string`                                                                        |        |
| `secretConfig`               | The Pulumi project secret config to use.                                     | `object`                                                                                 |        |
| `outputs`                    | The Pulumi project outputs to return.                                        | `array of string`                                                                        |        |
| `preRunCommands`             | The Pulumi project pre-run commands to execute.                              | `array of string`                                                                        |        |
| `suppressProgress`           | Suppress progress output.                                                    | `boolean`                                                                                |        |

##### **Examples**
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

##### **Outputs**
| Key        | Description                           | Type                                                           |
|------------|---------------------------------------|----------------------------------------------------------------|
| (dynamic)  | The Pulumi project outputs to return. | `record of { [key: string]: { value: any; } }`                |

##### **Links**
- [Code](https://github.com/pulumi/pulumi-backstage-plugin/tree/main/plugins/backstage-scaffolder-backend-pulumi#pulumi-up-action

-----

-----


## 3rd Party Tools

### Ansible Scaffolder Actions

#### `ansible:jobTemplate:launch`
Action for launching an Ansible job template and waiting for it to complete.

##### **Inputs**

| **Key**            | **Description**                          | **Type**            | **Example** |
|--------------------|------------------------------------------|---------------------|-------------|
| `ansibleConfig`     | Configuration for Ansible, including URL and token. | `object`            |             |
| `jobTemplateId`*     | The ID of the Ansible job template to be launched. | `number`            |             |

##### **Outputs**
| **Key**  | **Description**                              | **Type**    |
|----------|----------------------------------------------|-------------|
| `job`    | Information for the Ansible job that was run. | `object`    |

##### **Links**
- [Code](https://github.com/KiwiGDC/backstage-kawx/blob/main/plugins/scaffolder-backend-module-kawx/src/actions/run/run.ts)

-----


#### `ansible-controller:job_template:launch`
Triggers the launch of an Ansible job template via the Ansible controller API.

##### **Inputs**
| **Key**        | **Description**                              | **Type**      | **Example** |
|----------------|----------------------------------------------|---------------|-------------|
| `controller`*   | Specifies the controller to be used          | `string`      |             |
| `job_template`* | Name of the job template to be executed      | `string`      |             |
| `extra_vars`   | Additional variables passed to the job       | `object`      |             |

##### **Examples**
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

##### **Outputs**
| **Key**  | **Description**               | **Type**     |
|----------|-------------------------------|--------------|
| `job`    | Status and details of the job  | `object`     |

##### **Links**
- [NPM](https://www.npmjs.com/package/@mycloudlab/scaffolder-backend-module-ansible-controller)
- [Code](https://github.com/mycloudlab/scaffolder-backend-module-ansible-controller/blob/main/src/actions/ansible-controller/launch.ts)

-----


### ArgoCD Scaffolder Actions

#### `argocd:create-resources`
Action for creating Argo CD resources using Backstage's scaffolding plugin.

##### **Inputs**
| Key              | Description                                                                                          | Type               | Example |
|------------------|------------------------------------------------------------------------------------------------------|--------------------|---------|
| `projectName`    | The name of the project as it will show up in Argo CD. By default, it uses the application name.    | `string`           |         |
| `appName`*        | The name of the app as it will show up in Argo CD.                                                  | `string`           |         |
| `argoInstance`*   | The name of the Argo CD Instance to deploy to.                                                     | `string`           |         |
| `namespace`*      | The namespace Argo CD will target for resource deployment.                                          | `string`           |         |
| `repoUrl`*        | The Repo URL that will be programmed into the Argo CD project and application.                     | `string`           |         |
| `path`*           | The path of the resources Argo CD will watch in the mentioned repository.                           | `string`           |         |
| `labelValue`     | The label Backstage will use to find applications in Argo CD.                                       | `string`           |         |

##### **Examples**
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

##### **Outputs**

| Key        | Description                                      | Type         |
|------------|--------------------------------------------------|--------------|
| `argoInstance` | The Argo CD instance to which resources are deployed. | `string`     |
| `appName`     | The name of the application in Argo CD.             | `string`     |
| `projectName`  | The name of the project in Argo CD.                 | `string`     |
| `namespace`    | The namespace where resources are deployed.         | `string`     |
| `sourceRepo`   | The repository URL for the application resources.   | `string`     |
| `sourcePath`   | The path within the repository where resources are located. | `string`  |
| `labelValue`   | The label used to identify the application in Argo CD. | `string`  |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-argocd

-----


### AWS Scaffolder Actions

#### `roadiehq:aws:s3:cp`
Action that uploads files from a local directory to an AWS S3 bucket using specified parameters.

##### **Inputs**
| Key                              | Description                                                              | Type           | Example |
|----------------------------------|--------------------------------------------------------------------------|----------------|---------|
| `bucket`*                         | The bucket to copy the given path                                        | `string`       |         |
| `region`*                         | AWS region                                                              | `string`       |         |
| `path`                           | A Glob pattern that lists the files to upload. Defaults to everything in the workspace | `string`       |         |
| `prefix`                         | Prefix to use in the s3 key.                                           | `string`       |         |
| `endpoint`                       | The fully qualified endpoint of the web service.                        | `string`       |         |
| `s3ForcePathStyle`              | Whether to force path style URLs for S3 objects                          | `boolean`      |         |

##### **Examples**
```yaml
steps:
  - id: uploadToS3
    name: Upload to S3
    action: roadiehq:aws:s3:cp
    input:
      region: eu-west-1
      bucket: ${{ parameters.bucket }}
```

##### **Outputs**
| Key          | Description                             | Type    |
|--------------|-----------------------------------------|---------|
| `files`      | List of files that were successfully uploaded | `array`  | 
| `error`      | Error message if the upload fails       | `string` | 

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-aws

-----


#### `roadiehq:aws:ecr:create`
This TypeScript code defines a Backstage template action for creating an AWS Elastic Container Registry (ECR) repository.

##### **Inputs**

| Key                | Description                                                                                       | Type   | Example |
|--------------------|---------------------------------------------------------------------------------------------------|--------|---------|
| `repoName`*         | The name of the ECR repository.                                                                   | string |         |
| `tags`             | List of tags.                                                                                     | array  |         |
| `imageMutability`  | Set image mutability to true or false.                                                            | boolean|         |
| `scanOnPush`       | The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository. | boolean|         |
| `region`*           | AWS region to create ECR on.                                                                      | string |         |

##### **Examples**
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

##### **Outputs**

| Key                    | Description                                                                                      | Type   |
|------------------------|--------------------------------------------------------------------------------------------------|--------|
| `repository.repositoryUri` | URI of the created ECR repository.                                                              | string |

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-aws

-----


#### `roadiehq:aws:secrets-manager:create`
Action for creating a new secret in AWS Secrets Manager using the Backstage scaffolder plugin.

##### **Inputs**
| Key                | Description                                          | Type      | Example |
|--------------------|------------------------------------------------------|-----------|---------|
| `name`*             | The name of the secret to be created                | `string`  |         |
| `description`      | The description of the secret to be created         | `string`  |         |
| `value`            | The string value to be encrypted in the new secret   | `string`  |         |
| `tags`             | AWS tags to be added to the secret                  | `array`   |         |
| `profile`          | AWS profile to use                                   | `string`  |         |
| `region`*           | AWS region to create the secret on                  | `string`  |         |

##### **Examples**
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

##### **Outputs**

| Key                | Description                                          | Type      |
|--------------------|------------------------------------------------------|-----------|
| `secretArn`        | The ARN of the created secret                        | `string`  |
| `name`             | The name of the created secret                       | `string`  |
| `description`      | The description of the created secret                | `string`  |
| `tags`             | The tags associated with the created secret          | `array`   | 

##### **Links**
- [Code](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-aws/src/actions/secrets-manager/create.ts)

-----


#### `opa:get-env-providers`
Action that retrieves AWS environment provider data based on a reference to an AWS environment entity from the Backstage catalog.

##### **Inputs**
| **Key**               | **Description**                                                | **Type**          | **Example** |
|-----------------------|----------------------------------------------------------------|-------------------|-------------|
| `environmentRef`*    | The entity reference identifier for an AWS Environment         | `string`          |             |

##### **Outputs**
| **Key**                    | **Description**                                                                                       | **Type**      |
|----------------------------|-------------------------------------------------------------------------------------------------------|---------------|
| `envName`*                | The AWS environment name                                                                               | `string`      |
| `envShortName`*           | The short AWS environment name (e.g., dev, qa, prod)                                                   | `string`      |
| `envRef`*                 | The entity reference ID of the environment                                                            | `string`      |
| `envDeployManualApproval`*| Whether manual approval is required for deploying to the environment                                   | `boolean`     |
| `envProviders`*           | The AWS environment providers, including details such as name, type, account, region, VPC, and subnets | `array`       |

##### **Links**
- [Code](https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/scaffolder-backend-module-aws-apps/src/actions/get-env-providers/get-env-providers.ts)

-----


#### `opa:create-secret`
Action that creates secrets in AWS Secrets Manager.

##### **Inputs**

| **Key**           | **Description**                                                        | **Type**           | **Example** |
|-------------------|------------------------------------------------------------------------|--------------------|-------------|
| `secretName`*    | The name of the secret to create in Secrets Manager                    | `string`           |             |
| `description`     | An optional description of the secret                                  | `string`           |             |
| `region`          | The AWS region where the new secret should be created                  | `string`           |             |
| `tags`            | Key/value pairs to apply as tags to any created AWS resources          | `array` of `object`|             |
| `tags.Key`        | The tag key to apply to the resource                                   | `string`           |             |
| `tags.Value`      | The tag value to apply to the resource                                 | `string`, `number`, `boolean` |     |
secretName*, description, region, tags


##### **Outputs**

| **Key**          | **Description**                  | **Type**  |
|------------------|----------------------------------|-----------|
| `secretARN`      | The ARN of the created secret    | `string`  |

##### **Links**
- [NPM](https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage)
- [Code](https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/scaffolder-backend-module-aws-apps/src/actions/create-secret/create-secret.ts)

-----


#### `opa:createRepoAccessToken:gitlab`
Action for creating a GitLab repository access token and storing it in AWS Secrets Manager.

##### **Inputs**
| Key                  | Description                                                                                   | Type   | Example |
|----------------------|-----------------------------------------------------------------------------------------------|--------|---------|
| `repoUrl`*             | Repository Location                                                                          | string |         |
| `projectId`*           | Project Id                                                                                   | number |         |
| `secretArn`*           | Arn of the SecretsManager secret where the access token will be stored                      | string |         |
| `region`               | AWS Region (defaults to `backend.platformRegion` if not provided)                           | string |         |

##### **Outputs**

| Key           | Description                                 | Type   |
|---------------|---------------------------------------------|--------|
| `token`         | The generated repository access token      | string |
| `expirationDate`| The expiration date of the access token    | string | 

##### **Links**
- [NPM](https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage)
- [Code](https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/scaffolder-backend-module-aws-apps/src/actions/create-repo-access-token/create-repoAccesstoken.ts)

-----


#### `opa:get-platform-metadata`
Action that retrieves metadata about the OPA (Open Policy Agent) on AWS platform, specifically fetching the AWS region where the solution is deployed.

##### **Inputs**

| Key                  | Description                                                 | Type      | Example |
|----------------------|-------------------------------------------------------------|-----------|---------|
| `envConfig`*         | Configuration options for the action                        | `Config`  |         |

##### **Outputs**

| Key                  | Description                                                                      | Type      |
|----------------------|----------------------------------------------------------------------------------|-----------|
| `platformRegion`*   | *The AWS region where the OPA on AWS solution is deployed*                      | `string`  |

##### **Links**
- [NPM](https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage)
- [Code](https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/scaffolder-backend-module-aws-apps/src/actions/get-platform-metadata/get-platform-metadata.ts)

-----


#### `opa:get-ssm-parameters`
Action that retrieves AWS SSM parameter values for specified environment providers.

##### **Inputs**

| Key                  | Description                                                                       | Type         | Example |
|----------------------|-----------------------------------------------------------------------------------|--------------|---------|
| paramKeys*           | The SSM parameter keys to look up                                                | `string[]`   |         |
| envProviders*        | The AWS environment providers containing account and region info                 | `EnvironmentProvider[]` |         |

##### **Outputs**
| Key      | Description                                                                     | Type                    |
|----------|---------------------------------------------------------------------------------|-------------------------|
| params  | Map of SSM parameters, keyed off of the environment provider name              | `object`                |

##### **Links**
- [NPM](https://www.npmjs.com/package/@aws/plugin-scaffolder-backend-aws-apps-for-backstage)
- [Code](https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/scaffolder-backend-module-aws-apps/src/actions/get-ssm-parameters/get-ssm-parameters.ts)

-----


#### `aws:cloudcontrol:create`
This action creates AWS resources using the AWS Cloud Control API.

##### **Inputs**
| Key           | Description           | Type      | Example                                                       |
|---------------|-----------------------|-----------|---------------------------------------------------------------|
| typeName*     | The AWS resource type | `string`  | 'AWS::ECR::Repository'                                        |
| desiredState* |                       | `string`  | '{"RepositoryName": "${{ parameters.name }}-ecr-repository"}' |
| wait*         |                       | `boolean` | true                                                          |
| maxWaitTime*  |                       | `number`  | 20                                                            |

##### **Examples**
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

##### **Outputs**
Unknown

##### **Links**
- [NPM](https://www.npmjs.com/package/@alithya-oss/plugin-scaffolder-backend-module-aws-core)
- [Installation](https://www.npmjs.com/package/@alithya-oss/plugin-scaffolder-backend-module-aws-core?activeTab=readme)

-----


### Azure Scaffolder Actions

#### `publish:azure`
✅️ Ready to use in Roadie

Action to initialize a Git repository and publish it to Azure DevOps.

##### **Inputs**
| Key                  | Description                                                                                                                    | Type                | Example |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------|---------|
| `repoUrl`*            | Repository Location                                                                                                          | `string`            |         |
| `description`        | Repository Description                                                                                                       | `string`            |         |
| `defaultBranch`      | Sets the default branch on the repository. The default value is 'master'.                                                  | `string`            |         |
| `gitCommitMessage`   | Sets the commit message on the repository. The default value is 'initial commit'.                                           | `string`            |         |
| `gitAuthorName`      | Sets the default author name for the commit. The default value is 'Scaffolder'.                                             | `string`            |         |
| `gitAuthorEmail`     | Sets the default author email for the commit.                                                                                | `string`            |         |
| `sourcePath`         | Path within the workspace that will be used as the repository root. If omitted, the entire workspace will be published.     | `string`            |         |
| `token`              | The token to use for authorization to Azure.                                                                                 | `string`            |         |

##### **Examples**
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

##### **Outputs**
| Key                  | Description                                                                           | Type                |
|----------------------|--------------------------------------------------------------------------------------|---------------------|
| `remoteUrl`          | A URL to the repository with the provider                                            | `string`            |
| `repoContentsUrl`    | A URL to the root of the repository                                                  | `string`            |
| `repositoryId`       | The Id of the created repository                                                      | `string`            |
| `commitHash`         | The git commit hash of the initial commit                                             | `string`            |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-azure/src/actions/azure.ts)

-----


#### `git:clone:azure`
This action clones repositories from Azure DevOps.

##### **Inputs**
| **Key**        | **Description**                                                | **Type**        | **Example** |
|----------------|----------------------------------------------------------------|-----------------|-------------|
| `repoUrl`*      | Repo URL to be parsed with `parseRepoUrl`                      | `string`        |             |
| `fromRef`      | Git references (branch, tag, or commit ID) to checkout; default is `'master'` | `string`        |             |
| `targetPath`   | Relative path on the workspace to store repository contents; default is `'./'` | `string`        |             |

##### **Examples**

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

This clones two Azure DevOps repositories using the same Git reference (`main`).

##### **Outputs**
| **Key**  | **Description**                                  | **Type**  |
|----------|--------------------------------------------------|-----------|
| `results` | Array of results containing repository clone details | `array<object>` |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/repos/git-clone-azure.ts)

-----


#### `git:commit:azure`
Action for committing and pushing changes to an Azure DevOps Git repository.

##### **Inputs**
| **Key**            | **Description**                                                                                          | **Type**      | **Example** |
|--------------------|----------------------------------------------------------------------------------------------------------|---------------|-------------|
| `toBranch`*         | New branch to commit and push.                                                                            | `string`      |             |
| `commitMessage`*    | Commit message string.                                                                                    | `string`      |             |
| `targetPath`       | Relative path on workspace where repository contents are stored, default is `'./'`.                       | `string`      |             |

##### **Examples**

```yaml
steps:
  - action: GIT_COMMIT_AZURE
    id: git-azure-commit
    name: Commit to azure repo same ref
    input:
      commonParams:
        toBranch: ref/heads/main
        commitMessage: "Add some files"
      params:
        - targetPath: ./repo-1
        - targetPath: ./repo-2
```
Step to commit and push changes to an Azure DevOps Git repository on the `main` branch for two different repositories (`./repo-1` and `./repo-2`) using the specified commit message.

##### **Outputs**

| **Key**     | **Description**                                                 | **Type**    |
|-------------|-----------------------------------------------------------------|-------------|
| `results`   | Array of objects containing the results of the commit operation. | `array`     |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/repos/git-commit-azure.ts)

-----


#### `pipeline:create:azure`
Automates the creation of Azure DevOps pipelines from Git repositories.

##### **Inputs**
| **Key**          | **Description**                                                         | **Type**     | **Example** |
|------------------|-------------------------------------------------------------------------|--------------|-------------|
| `pipelinePath`    | Path to the pipeline in the repository                                 | `string`     |             |
| `yamlFilename`    | Path to pipeline YAML file (default: `.azuredevops/azure-pipelines.yaml`) | `string`     |             |
| `pipelineName`    | Name of the pipeline                                                   | `string`     |             |
| `defaultBranch`   | Default branch reference (default: `refs/heads/main`)                  | `string`     |             |
| `repoUrl`*         | Repository URL to be parsed with `parseRepoUrl`                        | `string`     |             |

pipelinePath, yamlFilename, pipelineName, defaultBranch, repoUrl*

##### **Examples**

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

##### **Outputs**
| **Key**  | **Description**                            | **Type**   |
|----------|--------------------------------------------|------------|
| `results`| The result array with pipeline creation responses | `array<object>` |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-azure-devops/blob/main/src/actions/piepline/pipeline-create-azure.ts)

-----


#### `azure:pipeline:create`
This creates an Azure Pipeline through the Azure DevOps REST API using Backstage's scaffolding plugin.

##### **Inputs**
| **Key**              | **Description**                                                                     | **Type**     | **Example** |
|----------------------|-------------------------------------------------------------------------------------|--------------|-------------|
| `createApiVersion`    | The Azure Create Pipeline API version to use. Defaults to 6.1-preview.1.            | `string`     |             |
| `server`             | The host of Azure DevOps. Defaults to dev.azure.com.                                 | `string`     |             |
| `organization`*        | The name of the Azure DevOps organization.                                          | `string`     |             |
| `project`*            | The name of the Azure project.                                                      | `string`     |             |
| `folder`*             | The name of the folder of the pipeline.                                              | `string`     |             |
| `name`               | The name of the pipeline.                                                           | `string`     |             |
| `repositoryId`       | The ID of the repository.                                                           | `string`     |             |
| `repositoryName`     | The name of the repository.                                                         | `string`     |             |
| `yamlPath`           | The location of the Azure DevOps Pipeline definition file. Defaults to /azure-pipelines.yaml. | `string`     |             |
| `token`              | Optional. Token for Azure API authentication. If not provided, uses credentials from integration. | `string`     |             |

##### **Examples**
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

##### **Outputs**
| **Key**       | **Description**                                      | **Type**  |
|---------------|------------------------------------------------------|-----------|
| `pipelineId`  | The ID of the created Azure pipeline.                | `string`  |
| `pipelineUrl` | The URL to the created Azure pipeline in Azure DevOps. | `string`  |

##### **Links**
- [Code](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/createAzurePipeline.ts)

-----


#### `azure:pipeline:run`
Defines an Azure DevOps pipeline runner action using Backstage's scaffolder plugin.

##### **Inputs**
| **Key**               | **Description**                                                | **Type**   | **Example** |
|-----------------------|----------------------------------------------------------------|------------|-------------|
| `runApiVersion`        | The Azure Run Pipeline API version to use. Defaults to 7.0     | `string`   |             |
| `buildApiVersion`      | The Builds API version to use. Defaults to 6.1-preview.6       | `string`   |             |
| `server`               | The host of Azure DevOps. Defaults to dev.azure.com            | `string`   |             |
| `organization`         | The name of the Azure DevOps organization                      | `string`   |             |
| `pipelineId`*           | The pipeline ID                                                | `string`   |             |
| `project`*              | The name of the Azure project                                  | `string`   |             |
| `branch`               | The branch of the pipeline's repository                        | `string`   |             |
| `pipelineParameters`   | The values needed as parameters to start a build               | `object`   |             |

##### **Examples**
```yaml
    - id: runAzurePipeline
      name: Run Azure Pipeline
      action: azure:pipeline:run
      input:
        organization: ${{ (parameters.repoUrl | parseRepoUrl)['organization'] }}
        pipelineId: ${{ steps.createAzurePipeline.output.pipelineId }}
        project: ${{ (parameters.repoUrl | parseRepoUrl)['owner'] }}
```

##### **Outputs**
| **Key**         | **Description**                                        | **Type**   |
|-----------------|--------------------------------------------------------|------------|
| `pipelineRunId` | ID of the initiated Azure pipeline run                  | `number`   |
| `pipelineUrl`   | URL to the Azure pipeline run                          | `string`   |
| `status`        | Status of the pipeline run (e.g., inProgress, completed)| `string`   |

##### **Links**
- [Code](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/runAzurePipeline.ts)

-----


#### `azure:pipeline:permit`
Defines an Azure DevOps pipeline permission management action for Backstage scaffolding.

##### **Inputs**
| **Key**              | **Description**                                           | **Type**    | **Example** |
|----------------------|-----------------------------------------------------------|-------------|-------------|
| `permitsApiVersion`   | The Azure Permits Pipeline API version to use. Defaults to `7.1-preview.1`. | `string`    |             |
| `server`             | The host of Azure DevOps. Defaults to `dev.azure.com`.     | `string`    |             |
| `organization`*       | The name of the Azure DevOps organization.                | `string`    |             |
| `project`*            | The name of the Azure DevOps project.                     | `string`    |             |
| `resourceId`*         | The resource ID for which permissions are being changed.  | `string`    |             |
| `resourceType`*       | The type of the resource (e.g., `endpoint`).              | `string`    |             |
| `authorized`*         | A boolean indicating whether to authorize (`true`) or unauthorize (`false`) the pipeline. | `boolean`   |             |
| `pipelineId`*         | The ID of the Azure pipeline to be authorized/unauthorized. | `string`    |             |
| `token`              | An optional token for Azure DevOps API authentication. If not provided, it uses the credentials from the integration. | `string`    |             |

##### **Examples**
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

##### **Outputs**
| **Key**              | **Description**                                           | **Type**    |
|----------------------|-----------------------------------------------------------|-------------|
| `response.ok`        | A boolean indicating if the pipeline permissions were successfully changed. | `boolean`   |
| `response.status`    | The HTTP status code of the pipeline permissions change request. | `number`    |

##### **Links**
- [NPM](https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-pipelines)
- [Code](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-pipelines/blob/main/src/actions/run/permitAzurePipeline.ts)

-----


#### `azure:repo:clone`
✅️ Ready to use in Roadie

Action for cloning an Azure DevOps repository into a specified workspace directory, handling authentication via personal access tokens or bearer tokens.

##### **Inputs**

| **Key**            | **Description**                                      | **Type**     | **Example** |
|--------------------|------------------------------------------------------|--------------|-------------|
| `remoteUrl`*        | The Git URL to the repository.                       | `string`     |             |
| `branch`           | The branch to checkout to.                           | `string`     |             |
| `targetPath`       | The subdirectory of the working directory to clone the repository into. | `string` |             |
| `server`           | The hostname of the Azure DevOps service. Defaults to `dev.azure.com`. | `string` |             |
| `token`            | The token to use for authorization.                  | `string`     |             |

##### **Examples**
```yaml
    - id: cloneAzureRepo
      name: Clone Azure Repo
      action: azure:repo:clone
      input:
        remoteUrl: "https://<MY_AZURE_ORGANIZATION>@dev.azure.com/<MY_AZURE_ORGANIZATION>/<MY_AZURE_PROJECT>/_git/<MY_AZURE_REPOSITORY>"
        branch: "main"
        targetPath: ./sub-directory
```

##### **Outputs**
| **Key**          | **Description**                    | **Type**    |
|------------------|------------------------------------|-------------|
| `repositoryId`   | The ID of the cloned repository.    | `string`    |

##### **Links**
- [Code](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/cloneAzureRepo.ts)

-----


#### `azure:repo:push`
✅️ Ready to use in Roadie

Action that pushes content from a local workspace to a remote Azure repository.

##### **Inputs**
| Key                 | Description                                                                                   | Type     | Example |
|---------------------|-----------------------------------------------------------------------------------------------|----------|---------|
| `branch`*            | The branch to checkout to.                                                                    | `string` |         |
| `sourcePath`        | The subdirectory of the working directory containing the repository.                         | `string` |         |
| `gitCommitMessage`  | Sets the commit message on the repository. The default value is 'Initial commit'.            | `string` |         |
| `gitAuthorName`     | Sets the default author name for the commit. The default value is 'Scaffolder'.             | `string` |         |
| `gitAuthorEmail`    | Sets the default author email for the commit.                                               | `string` |         |

##### **Examples**
```yaml
    - id: pushAzureRepo
      name: Push to Remote Azure Repo
      action: azure:repo:push
      input:
        branch: <MY_AZURE_REPOSITORY_BRANCH>
        sourcePath: ./sub-directory
        gitCommitMessage: Add ${{ parameters.name }} project files
```

##### **Outputs**
None

##### **Links**
- [NPM](https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories)
- [Code](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/pushAzureRepo.ts)

-----


#### `azure:repo:pr`
✅️ Ready to use in Roadie

Action for creating a pull request in Azure DevOps.

##### **Inputs**

| Key                    | Description                                                   | Type     | Example |
|-----------------------|---------------------------------------------------------------|----------|---------|
| organization         | The name of the organization in Azure DevOps.                 | string   |         |
| sourceBranch          | The branch to merge into the source.                          | string   |         |
| targetBranch          | The branch to merge into (default: main).                    | string   |         |
| title*                | The title of the pull request.                                | string   |         |
| description           | The description of the pull request.                          | string   |         |
| repoId*               | Repo ID of the pull request.                                  | string   |         |
| project               | The Project in Azure DevOps.                                  | string   |         |
| supportsIterations     | Whether or not the PR supports iterations.                    | boolean  |         |
| server                | The hostname of the Azure DevOps service. Defaults to dev.azure.com | string   |         |
| token                 | The token to use for authorization.                           | string   |         |
| autoComplete          | Enable auto-completion of the pull request once policies are met | boolean  |         |

##### **Examples**
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

##### **Outputs**
| Key                   | Description                                               | Type     |
|----------------------|-----------------------------------------------------------|----------|
| pullRequestId        | The ID of the created pull request                        | number   |

##### **Links**
- [NPM](https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories)
- [Code](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories/blob/main/src/actions/run/pullRequestAzureRepo.ts)

-----


### Bitbucket Scaffolder Actions

#### `publish:bitbucket`
This action creates a new Bitbucket repository and publishes the files in the workspace directory to the repository. There is one mandatory parameter `repoUrl`. The repo url picker described in the `string` parameter description above.

##### **Input**

| **Key**               | **Description**                                                                                                        | **Type**       | **Example** |
|-----------------------|------------------------------------------------------------------------------------------------------------------------|----------------|-------------|
| `repoUrl`*             | Repository Location                                                                                                    | `string`       |             |
| `description`         | Repository Description                                                                                                 | `string`       |             |
| `repoVisibility`      | Repository Visibility (private or public)                                                                              | `string`       |             |
| `defaultBranch`       | Sets the default branch on the repository. The default value is 'master'                                                | `string`       |             |
| `sourcePath`          | Path within the workspace that will be used as the repository root. If omitted, the entire workspace is used.           | `string`       |             |
| `enableLFS`           | Enable LFS for the repository (only available for hosted Bitbucket).                                                    | `boolean`      |             |
| `token`               | The token to use for authorization to BitBucket                                                                         | `string`       |             |
| `gitCommitMessage`    | Sets the commit message on the repository. The default value is 'initial commit'                                        | `string`       |             |
| `gitAuthorName`       | Sets the default author name for the commit. The default value is 'Scaffolder'                                          | `string`       |             |
| `gitAuthorEmail`      | Sets the default author email for the commit.                                                                           | `string`       |             |

##### **Examples**
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

##### **Outputs**

The `publish:bitbucket` action produces the following outputs.

| Name            | Description                                   |
| --------------- | --------------------------------------------- |
| remoteUrl       | Url for the newly created repository          |
| repoContentsUrl | Url that shows the contents of the repository |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket/src/actions/bitbucket.ts)

-----


#### `publish:bitbucketCloud`
Action that creates and initializes a Bitbucket Cloud repository and publishes content to it from a workspace.

##### **Inputs**
| **Key**              | **Description**                                                                 | **Type**         | **Example** |
|----------------------|---------------------------------------------------------------------------------|------------------|-------------|
| `repoUrl`*            | Repository location                                                             | `string`         |             |
| `description`        | Repository description                                                          | `string`         |             |
| `repoVisibility`     | Repository visibility (private or public)                                        | `string`         |             |
| `defaultBranch`      | Sets the default branch on the repository (default is 'master')                  | `string`         |             |
| `gitCommitMessage`   | Sets the commit message on the repository (default is 'initial commit')          | `string`         |             |
| `sourcePath`         | Path within the workspace to use as the repository root                          | `string`         |             |
| `token`              | Authentication token for Bitbucket Cloud                                         | `string`         |             |

##### **Examples**
```yaml
steps:
  - id: publish
    action: publish:bitbucketCloud
    name: Publish to Bitbucket Cloud
    input:
      repoUrl: bitbucket.org?repo=repo&workspace=workspace&project=project
      description: Initialize a git repository
```
This publishes content to Bitbucket Cloud by initializing a repository, providing the repository URL, workspace, project, and a description for the repository.

##### **Outputs**
| **Key**           | **Description**                                 | **Type**   |
|-------------------|-------------------------------------------------|------------|
| `remoteUrl`       | URL to the repository with the provider          | `string`   |
| `repoContentsUrl` | URL to the root of the repository                | `string`   |
| `commitHash`      | Git commit hash of the initial commit            | `string`   |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloud.ts)

-----


#### `bitbucket:pipelines:run`
Triggers a run of a Bitbucket Cloud pipeline using the Backstage framework.

##### **Inputs**

| **Key**            | **Description**                    | **Type**      | **Example** |
|--------------------|------------------------------------|---------------|-------------|
| `workspace`*        | The Bitbucket workspace to run the pipeline in | `string`      |             |
| `repo_slug`*        | The repository identifier where the pipeline is triggered | `string`      |             |
| `body`             | Optional body to pass to the pipeline trigger request | `object`      |             |
| `token`            | Optional authorization token for Bitbucket API requests | `string`      |             |

##### **Examples**
```yaml
steps:
  - action: bitbucket:pipelines:run
    id: run-bitbucket-pipeline
    name: Run an example bitbucket pipeline
    input:
      workspace: test-workspace
      repo_slug: test-repo-slug
      body:
        target:
          commit:
            type: commit
            hash: a3c4e02c9a3755eccdc3764e6ea13facdf30f923
          selector:
            type: custom
            pattern: Deploy to production
          type: pipeline_ref_target
          ref_name: master
          ref_type: branch
```

##### **Outputs**
| **Key**           | **Description**                     | **Type**      |
|-------------------|-------------------------------------|---------------|
| `buildNumber`     | The build number of the triggered pipeline | `number`      |
| `repoUrl`         | A URL to the repository where the pipeline was triggered | `string`      |
| `repoContentsUrl` | A URL to view the pipeline in Bitbucket Cloud | `string`      |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloudPipelinesRun.ts)

-----


#### `publish:bitbucketCloud:pull-request`
Action for publishing a pull request to a Bitbucket Cloud repository using Backstage's scaffolding system.

##### **Inputs**

| **Key**            | **Description**                                      | **Type**    | **Example** |
|--------------------|------------------------------------------------------|-------------|-------------|
| `repoUrl`*          | Repository Location                                   | `string`    |             |
| `title`*            | Pull Request title                                    | `string`    |             |
| `description`      | The description of the pull request                   | `string`    |             |
| `targetBranch`     | Branch to apply changes to. Default is 'master'.      | `string`    |             |
| `sourceBranch`*     | Branch to copy changes from                           | `string`    |             |
| `token`            | Token for authorization to Bitbucket Cloud            | `string`    |             |
| `gitAuthorName`    | Author name for the commit. Default is 'Scaffolder'.  | `string`    |             |
| `gitAuthorEmail`   | Author email for the commit                           | `string`    |             |

##### **Examples**

```yaml
steps:
  - action: 'publish:bitbucketCloud:pull-request'
    id: 'publish-bitbucket-cloud-pull-request-target-branch'
    name: 'Creating pull request on bitbucket cloud'
    input:
      repoUrl: 'bitbucket.org?workspace=workspace&project=project&repo=repo'
      title: 'My pull request'
      sourceBranch: 'my-feature-branch'
      targetBranch: 'development'
```

##### **Outputs**
| **Key**            | **Description**                          | **Type**    |
|--------------------|------------------------------------------|-------------|
| `pullRequestUrl`    | A URL to the pull request with the provider | `string`    |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-cloud/src/actions/bitbucketCloudPullRequest.ts)

-----


#### `publish:bitbucketServer`
Creates a new repository in Bitbucket Server.

##### **Inputs**

| **Key**              | **Description**                                                                                              | **Type**           | **Example** |
|----------------------|--------------------------------------------------------------------------------------------------------------|--------------------|-------------|
| `repoUrl`*            | Repository Location                                                                                          | `string`           |             |
| `description`        | Repository Description                                                                                        | `string`           |             |
| `repoVisibility`     | Repository Visibility                                                                                         | `string (enum: ['private', 'public'])` |             |
| `defaultBranch`      | Default branch on the repository (default value is 'master')                                                  | `string`           |             |
| `sourcePath`         | Path within the workspace used as the repository root                                                         | `string`           |             |
| `enableLFS`          | Enable Git Large File Storage (LFS) for the repository                                                        | `boolean`          |             |
| `token`              | Authentication token for Bitbucket Server                                                                    | `string`           |             |
| `gitCommitMessage`   | Git commit message (default value is 'initial commit')                                                        | `string`           |             |
| `gitAuthorName`      | Author name for the commit (default value is 'Scaffolder')                                                    | `string`           |             |
| `gitAuthorEmail`     | Author email for the commit                                                                                   | `string`           |             |

##### **Examples**

```yaml
steps:
  - action: publish:bitbucketServer
    id: publish-bitbucket-server-minimal
    name: Publish To Bitbucket Server
    input:
      repoUrl: 'hosted.bitbucket.com?project=project&repo=repo'
      description: 'This is a test repository'
      repoVisibility: 'private'
      defaultBranch: 'main'
      sourcePath: 'packages/backend'
      enableLFS: false
      token: 'test-token'
      gitCommitMessage: 'Init check commit'
      gitAuthorName: 'Test User'
      gitAuthorEmail: 'test.user@example.com'
```

This publishes a repository to Bitbucket Server, specifying repository details, visibility, commit information, and optional configuration like enabling LFS.

##### **Outputs**

| **Key**            | **Description**                                      | **Type**   |
|--------------------|------------------------------------------------------|------------|
| `remoteUrl`        | A URL to the repository with the provider             | `string`   |
| `repoContentsUrl`  | A URL to the root of the repository                   | `string`   |
| `commitHash`       | The git commit hash of the initial commit             | `string`   |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-server/src/actions/bitbucketServer.ts)

-----


#### `publish:bitbucketServer:pull-request`
Opens a pull request on a Bitbucket Server repository to merge two existing branches.

##### **Inputs**

| **Key**            | **Description**                                             | **Type**    | **Example** |
|--------------------|-------------------------------------------------------------|-------------|-------------|
| `repoUrl`*          | Repository Location (URL)                                    | `string`    |             |
| `title`*            | The title for the pull request                               | `string`    |             |
| `description`      | The description of the pull request                          | `string`    |             |
| `targetBranch`     | Branch of repository to apply changes to. Defaults to 'master'| `string`    |             |
| `sourceBranch`*     | Branch of repository to copy changes from                    | `string`    |             |
| `token`            | Authorization token for Bitbucket Server                     | `string`    |             |
| `gitAuthorName`    | Author name for the commit. Defaults to 'Scaffolder'          | `string`    |             |
| `gitAuthorEmail`   | Author email for the commit                                  | `string`    |             |

##### **Examples**

```yaml
steps:
  - action: publish:bitbucketServer:pull-request
    id: publish-bitbucket-server-pull-request-minimal
    name: Creating pull request on bitbucket server
    input:
      repoUrl: hosted.bitbucket.com?project=project&repo=repo
      title: My pull request
      sourceBranch: my-feature-branch
      description: This is a detailed description of my pull request
```

This example creates a pull request on a Bitbucket Server, including action type, identification, name, and input parameters like repository URL, title, source branch, and description.

##### **Outputs**
| **Key**            | **Description**                                         | **Type**    |
|--------------------|---------------------------------------------------------|-------------|
| `pullRequestUrl`    | A URL to the pull request created in the Bitbucket Server | `string`    |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-bitbucket-server/src/actions/bitbucketServerPullRequest.ts)

-----


### CNEO Scaffolder Actions

#### `cnoe:kubernetes:apply`
Action for applying Kubernetes manifests using `kubectl`, either from a string, an object, or a file path, with support for namespaced configurations and cluster authentication.

##### **Inputs**
| Key                 | Description                                                  | Type    | Example |
|---------------------|--------------------------------------------------------------|---------|---------|
| `manifestString`    | The manifest to apply in the cluster. Must be a string.     | `string`|         |
| `manifestObject`    | The manifest to apply in the cluster. Must be an object.    | `object`|         |
| `manifestPath`      | The path to the manifest file.                               | `string`|         |
| `namespaced`*        | Whether the API is namespaced or not.                        | `boolean`|         |
| `clusterName`       | The name of the cluster to apply this.                       | `string`|         |

##### **Outputs**

| Key   | Description                                                | Type    |
|-------|------------------------------------------------------------|---------|
|       | The object returned by Kubernetes by performing this operation | `object`|

##### **Links**
- [Code](https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/k8s-apply.ts)

-----


#### `cnoe:verify:dependency`
Verify resource dependencies for CNOE.

##### **Inputs**
| Key         | Description                       | Type                  | Example |
|-------------|-----------------------------------|-----------------------|---------|
| verifiers*   | The list of verifiers            | `array` of `string`   |         |

##### **Outputs**

None

##### **Links**
- [Code](https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/verify.ts)

-----


#### `cnoe:utils:sanitize`
Action for sanitizing resources defined in a YAML document by removing empty fields, before further processing.

##### **Inputs**

| Key       | Description                         | Type   | Example |
|-----------|-------------------------------------|--------|---------|
| `document`* | The document to be sanitized        | string |         |

##### **Outputs**

| Key        | Description             | Type   |
|------------|-------------------------|--------|
| `sanitized`| The sanitized document   | string |         |

##### **Links**
- [Code](https://github.com/cnoe-io/plugin-scaffolder-actions/blob/HEAD/src/actions/sanitize.ts)

-----


### Codacy Scaffolder Actions

#### `codacy:add-repo`
Action for adding a repository to Codacy using its API.

##### **Inputs**
| Key        | Description                        | Type   | Example |
|------------|------------------------------------|--------|---------|
| `provider` | The name of the code hosting provider. | `string` |         |
| `owner`    | The username or organization name that owns the repository. | `string` |         |
| `repository` | The name of the repository to add. | `string` |         |

##### **Examples**
```yaml
steps:
  - id: add-repo
    name: Add Repository to Codacy
    action: codacy:add-repo
    input:
      provider: gh|gl|bb
      owner: your-organization-or-username
      repository: ${{ parameters.repoName }}
```

This example adds a specified repository from a given code hosting provider (GitHub, GitLab, or Bitbucket) to Codacy, using the organization or username as the owner and a parameter for the repository name.

##### **Outputs**

| Key     | Description                              | Type   |
|---------|------------------------------------------|--------|
| `data`  | Response data from Codacy upon successful addition of the repository. | `object` |

##### **Links**
- [Code](https://github.com/codacy/backstage-plugin/blob/main/src/actions/codacy.ts)

-----


### Confluence Scaffolder Actions

#### `confluence:transform:markdown`
Action that transforms Confluence content into Markdown format and updates a GitHub repository with the new Markdown files and modified `mkdocs.yml` configuration.

##### **Inputs**
| Key               | Description                                                                                                                           | Type         | Example |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------|--------------|--------|
| `confluenceUrls`  | Paste your Confluence URL. Ensure it follows this format: `https://{confluence+base+url}/display/{spacekey}/{page+title}` or `https://{confluence+base+url}/spaces/{spacekey}/pages/1234567/{page+title}` for Confluence Cloud. | array        |        |
| `repoUrl`         | GitHub Repo URL, specifying the location of the `mkdocs.yml` file inside the GitHub repository where you want to store the document. | string       |        |

##### **Outputs**
| Key      | Description                                     | Type   |
|----------|-------------------------------------------------|--------|
| `repo`   | The name of the repository.                     | string |
| `owner`  | The owner of the repository.                    | string |

##### **Links**
- [Code](https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-confluence-to-markdown

-----


### Cue Scaffolder Actions

#### `cue:cueflow`
This action fetches some template content, runs a Cue command on it, and copies output files to a specified directory.

##### **Inputs**
| Key           | Description                                                                             | Type    | Example |
|---------------|-----------------------------------------------------------------------------------------|---------|---------|
| `url`*         | Relative path or absolute URL pointing to the directory tree to fetch                   | `string`|         |
| `cuePkg`      | Cue package name, default is "config"                                                  | `string`|         |
| `cueCmd`      | Cue command name, default is "run"                                                     | `string`|         |
| `cueOutDir`   | Cue output dir, default is "out"                                                       | `string`|         |
| `values`      | Values to pass on to the templating engine                                              | `object`|         |
| `targetPath`  | Target path within the working directory to generate contents to. Defaults to the working directory root. | `string`|         |

##### **Outputs**
| Key          | Description                                   | Type   |
|--------------|-----------------------------------------------|--------|
| `out`        | Output directory containing generated files   | `string`|

##### **Links**
- [Code](https://github.com/shoukoo/backstage-plugin-scaffolder-cuelang/blob/main/src/actions/cueflow.ts)

-----


### Gerrit Scaffolder Actions

#### `publish:gerrit:review`

Action for creating a new Gerrit review by committing and pushing changes to a Git repository.
##### **Inputs**

| Key                   | Description                                                             | Type                  | Example |
|-----------------------|-------------------------------------------------------------------------|-----------------------|---------|
| `repoUrl`*             | Repository Location                                                     | `string`              |         |
| `branch`              | Branch of the repository the review will be created on                 | `string`              |         |
| `sourcePath`          | Subdirectory of working directory containing the repository              | `string`              |         |
| `gitCommitMessage`*    | Sets the commit message on the repository.                              | `string`              |         |
| `gitAuthorName`       | Sets the default author name for the commit. The default value is 'Scaffolder' | `string`              |         |
| `gitAuthorEmail`      | Sets the default author email for the commit.                           | `string`              |         |

##### **Examples**
```yaml
steps:
  - id: publish
    action: publish:gerrit:review
    name: Publish new gerrit review
    input:
      repoUrl: gerrithost.org?repo=repo&owner=owner
      gitCommitMessage: Initial Commit Message
      branch: develop
```

This publishes a new Gerrit review, specifying the repository URL, commit message, and branch to use.

##### **Outputs**

| Key                    | Description                                     | Type     |
|------------------------|-------------------------------------------------|----------|
| `reviewUrl`            | A URL to the review                            | `string` |
| `repoContentsUrl`      | A URL to the root of the repository           | `string` |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gerrit/src/actions/gerritReview.ts)

-----


#### `publish:gerrit`
Action that initializes a Git repository with content from the workspace and publishes it to a Gerrit repository.

##### **Inputs**
| Key                 | Description                                                                      | Type        | Example |
|---------------------|----------------------------------------------------------------------------------|-------------|---------|
| `repoUrl`           | Repository Location                                                              | `string`    |         |
| `description`       | Repository Description                                                            | `string`    |         |
| `defaultBranch`     | Sets the default branch on the repository. The default value is 'master'        | `string`    |         |
| `gitCommitMessage`  | Sets the commit message on the repository. The default value is 'initial commit'| `string`    |         |
| `gitAuthorName`     | Sets the default author name for the commit. The default value is 'Scaffolder'  | `string`    |         |
| `gitAuthorEmail`    | Sets the default author email for the commit.                                   | `string`    |         |
| `sourcePath`        | Path within the workspace that will be used as the repository root.            | `string`    |         |

##### **Examples**

```yaml
steps:
  - id: publish
    action: publish:gerrit
    name: Publish to Gerrit
    input:
      repoUrl: 'gerrit.com?repo=repo&owner=owner'
      description: 'Initialize a gerrit repository'
```
This publishes content to a Gerrit repository.

##### **Outputs**
| Key                 | Description                                                             | Type        |
|---------------------|-------------------------------------------------------------------------|-------------|
| `remoteUrl`*         | A URL to the repository with the provider                               | `string`    |
| `repoContentsUrl`   | A URL to the root of the repository                                      | `string`    |
| `commitHash`        | The git commit hash of the initial commit                                | `string`    |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gerrit/src/actions/gerrit.ts)

-----


### Gitea Scaffolder Actions

#### `publish:gitea`
This action initializes a git repository from workspace content and publishes it to a Gitea repository.

##### **Inputs**
| Key                     | Description                                                                                               | Type     | Example |
|------------------------|-----------------------------------------------------------------------------------------------------------|----------|---------|
| `repoUrl`*              | Repository Location                                                                                       | `string` |         |
| `description`          | Repository Description                                                                                     | `string` |         |
| `defaultBranch`        | Sets the default branch on the repository. The default value is 'main'                                   | `string` |         |
| `repoVisibility`       | Sets the visibility of the repository. The default value is 'public'.                                    | `string` |         |
| `gitCommitMessage`     | Sets the commit message on the repository. The default value is 'initial commit'                         | `string` |         |
| `gitAuthorName`        | Sets the default author name for the commit. The default value is 'Scaffolder'                          | `string` |         |
| `gitAuthorEmail`       | Sets the default author email for the commit.                                                            | `string` |         |
| `sourcePath`           | Path within the workspace that will be used as the repository root. If omitted, the entire workspace will be published as the repository. | `string` |         |

##### **Examples**

```yaml
steps:
  - id: publish
    action: publish:gitea
    name: Publish to Gitea
    input:
      repoUrl: 'gitea.com?repo=repo&owner=owner'
      defaultBranch: 'main'
      repoVisibility: 'private'
```
This publishes a repository to Gitea.

##### **Outputs**
| Key                     | Description                                                                                               | Type     |
|------------------------|-----------------------------------------------------------------------------------------------------------|----------|
| `remoteUrl`            | A URL to the repository with the provider                                                                 | `string` |
| `repoContentsUrl`      | A URL to the root of the repository                                                                       | `string` |
| `commitHash`           | The git commit hash of the initial commit                                                                 | `string` |

##### **Links**
- [NPM](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-gitea)
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitea/src/actions/gitea.ts)

-----


### GitHub Scaffolder Actions

#### `publish:github`
✅️ Ready to use in Roadie

This action creates a new GitHub repository and publishes the files in the workspace directory to the repository.

##### **Inputs**

| **Key**                           | **Description**                                                                                         | **Type**                                 | **Example** |
|------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------|-------------|
| `repoUrl`*                          | The URL of the repository where the content will be published.                                           | `string`                                 |             |
| `description`                      | Optional description of the repository.                                                                 | `string`                                 |             |
| `homepage`                         | Optional homepage URL for the repository.                                                               | `string`                                 |             |
| `access`                           | The user who should have access to the newly created repository. Uses the personal account user by default                                           | `string`                                 |             |
| `defaultBranch`                    | The default branch for the repository (e.g., master or main).                                            | `string`                                 |             |
| `protectDefaultBranch`             | Whether to protect the default branch.                                                                  | `boolean`                                |             |
| `protectEnforceAdmins`             | Whether to enforce branch protection for admins.                                                        | `boolean`                                |             |
| `deleteBranchOnMerge`              | Whether to delete the branch after merging pull requests.                                                | `boolean`                                |             |
| `gitCommitMessage`                 | Custom commit message for the initial commit.                                                            | `string`                                 |             |
| `gitAuthorName`                    | Author name for the initial commit.                                                                     | `string`                                 |             |
| `gitAuthorEmail`                   | Author email for the initial commit.                                                                    | `string`                                 |             |
| `allowRebaseMerge`                 | Whether to allow rebase merging.                                                                        | `boolean`                                |             |
| `allowSquashMerge`                 | Whether to allow squash merging.                                                                        | `boolean`                                |             |
| `squashMergeCommitTitle`           | Title for squash merge commits, can be either 'PR_TITLE' or 'COMMIT_OR_PR_TITLE'.                        | `'PR_TITLE' | 'COMMIT_OR_PR_TITLE'`        |             |
| `squashMergeCommitMessage`         | Message for squash merge commits, can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK'.                       | `'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK'`|             |
| `allowMergeCommit`                 | Whether to allow regular merge commits.                                                                 | `boolean`                                |             |
| `allowAutoMerge`                   | Whether to allow auto-merging pull requests.                                                            | `boolean`                                |             |
| `sourcePath`                       | Path to the source code to be pushed to the repository.                                                  | `string`                                 |             |
| `bypassPullRequestAllowances`      | Users, teams, or apps that can bypass pull request requirements.                                         | `object`                                 |             |
| `requiredApprovingReviewCount`     | Number of required approving reviews for pull requests.                                                  | `number`                                 |             |
| `restrictions`                     | Restrictions on which users, teams, or apps can push to the branch.                                      | `object`                                 |             |
| `requireCodeOwnerReviews`          | Whether to require code owner reviews for pull requests.                                                 | `boolean`                                |             |
| `dismissStaleReviews`              | Whether to dismiss stale reviews when new commits are pushed.                                            | `boolean`                                |             |
| `requiredStatusCheckContexts`      | Status checks required to pass before merging.                                                           | `string[]`                               |             |
| `requireBranchesToBeUpToDate`      | Whether branches must be up to date with the base branch before merging.                                 | `boolean`                                |             |
| `requiredConversationResolution`   | Whether to require conversation resolution before merging.                                               | `boolean`                                |             |
| `requireLastPushApproval`          | Whether to require approval of the last push in a pull request.                                          | `boolean`                                |             |
| `repoVisibility`                   | The visibility of the repository (private, internal, or public).                                         | `'private' | 'internal' | 'public'`     |             |
| `collaborators`                    | List of users or teams with specific access to the repository.                                           | `Array<object>`                          |             |
| `hasProjects`                      | Whether to enable GitHub Projects for the repository.                                                    | `boolean`                                |             |
| `hasWiki`                          | Whether to enable GitHub Wiki for the repository.                                                        | `boolean`                                |             |
| `hasIssues`                        | Whether to enable GitHub Issues for the repository.                                                      | `boolean`                                |             |
| `token`                            | GitHub access token for authentication.                                                                 | `string`                                 |             |
| `topics`                           | List of topics to apply to the repository.                                                               | `string[]`                               |             |
| `repoVariables`                    | Custom variables to set for the repository.                                                              | `object`                                 |             |
| `secrets`                          | Secret values to store in the repository.                                                                | `object`                                 |             |
| `oidcCustomization`                | Customization for OIDC tokens used in the repository.                                                    | `object`                                 |             |
| `requiredCommitSigning`            | Whether to require commit signing.                                                                       | `boolean`                                |             |
| `customProperties`                 | Additional custom properties for repository creation.                                                    | `object`                                 |             |

##### **Examples**
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

##### **Outputs**
| **Key**           | **Description**                                           | **Type**     |
|-------------------|-----------------------------------------------------------|--------------|
| `remoteUrl`       | The remote URL of the repository where the content is published. | `string`     |
| `repoContentsUrl` | The URL to view the contents of the repository.            | `string`     |
| `commitHash`      | The hash of the initial commit pushed to the repository.   | `string`     |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/github.ts)

-----


#### `publish:github:pull-request`
✅️ Ready to use in Roadie

This action creates a pull request against a pre-existing repository using the files contained in the workspace directory.

##### **Inputs**

| Key                   | Description                                                                                                   | Type    | Example |
|-----------------------|---------------------------------------------------------------------------------------------------------------|---------|---------|
| `repoUrl`*             | Accepts the format 'github.com?repo=reponame&owner=owner' where 'reponame' is the repository name and 'owner' is an organization or username. | `string`|         |
| `branchName`*          | The name for the branch.                                                                                     | `string`|         |
| `targetBranchName`    | The target branch name of the merge request.                                                                 | `string`|         |
| `title`*               | The name for the pull request.                                                                                | `string`|         |
| `description`*         | The description of the pull request.                                                                         | `string`|         |
| `draft`               | Create a draft pull request.                                                                                 | `boolean`|        |
| `sourcePath`          | Subdirectory of the working directory to copy changes from.                                                  | `string`|         |
| `targetPath`          | Subdirectory of the repository to apply changes to.                                                          | `string`|         |
| `token`               | The token to use for authorization to GitHub.                                                                | `string`|         |
| `reviewers`           | The users that will be added as reviewers to the pull request.                                               | `array` |         |
| `teamReviewers`       | The teams that will be added as reviewers to the pull request.                                               | `array` |         |
| `commitMessage`       | The commit message for the pull request commit.                                                              | `string`|         |
| `update`              | Update pull request if it already exists.                                                                    | `boolean`|        |
| `forceFork`           | Create pull request from a fork.                                                                              | `boolean`|        |
| `gitAuthorName`       | Sets the default author name for the commit. The default value is the authenticated user or 'Scaffolder'.    | `string`|         |
| `gitAuthorEmail`      | Sets the default author email for the commit. The default value is the authenticated user or 'scaffolder@backstage.io'. | `string`|         |
| `forceEmptyGitAuthor` | Forces the author to be empty. This is useful when using a Github App, allowing the commit to be verified on Github. | `boolean`|        |

##### **Examples**
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

##### **Outputs**

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

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubPullRequest.ts)
-----

-----


#### `github:actions:dispatch`
✅️ Ready to use in Roadie

This action allows you to trigger the execution of a GitHub action on a repository. The `repoUrl` option is a repo url for GitHub. The `RepoUrlPicker` documented above can generate this value. The `workflowId` can be the workflow id from the GitHub API or you can just use the filename for the workflow file itself. The `branchOrTagName` indicates which commit to run the workflow against.

##### **Examples**
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

##### **Outputs**

The `github:actions:dispatch` action does not have any outputs.

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubActionsDispatch.ts)

-----


#### `github:webhook`
✅️ Ready to use in Roadie

You can configure a webhook on an existing repository in GitHub using this action. It takes `repoUrl` and `webhookUrl`. The `repoUrl` option needs to be in a GitHub repo format. The `RepoUrlPicker` documented above will generate a URL in the correct format.

##### **Examples**
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

##### **Outputs**

The `github:webhook` action does not have any outputs.

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubWebhook.ts)

-----


#### `github:autolinks:create`
✅️ Ready to use in Roadie

Action to create autolink references for GitHub repositories, which automatically link certain keywords to specific URLs in issues, pull requests, or commits.

##### **Inputs**
| Key          | Description                                                                                                                                                                       | Type              | Example |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------|
| `repoUrl`    | Accepts the format 'github.com?repo=reponame&owner=owner' where 'reponame' is the new repository name and 'owner' is an organization or username.                             | `string`          |        |
| `keyPrefix`  | This prefix appended by certain characters will generate a link any time it is found in an issue, pull request, or commit.                                                      | `string`          |        |
| `urlTemplate`| The URL must contain `<num>` for the reference number. `<num>` matches different characters depending on the value of `isAlphanumeric`.                                         | `string`          |        |
| `isAlphanumeric` | Whether this autolink reference matches alphanumeric characters. If true, the `<num>` parameter of the `urlTemplate` matches alphanumeric characters A-Z (case insensitive), 0-9, and -. If false, this autolink reference only matches numeric characters. Default: true | `boolean`         |        |
| `token`      | The token to use for authorization to GitHub.                                                                                                                                   | `string`          |        |

##### **Examples**

```yaml
steps:
  - action: 'github:autolinks:create'
    name: 'Create an autolink reference'
    input:
      repoUrl: 'github.com?repo=repo&owner=owner'
      keyPrefix: 'TICKET-'
      urlTemplate: 'https://example.com/TICKET?query=<num>'
      isAlphanumeric: false
```

This performs the autolink creation action in a GitHub repository.

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubAutolinks.ts)

-----


#### `github:deployKey:create`
✅️ Ready to use in Roadie

Action for Backstage that creates and stores GitHub Deploy Keys, including the ability to encrypt and store the associated private key as a GitHub secret.

##### **Inputs**
| Key                  | Description                                                                                                                                    | Type                      | Example |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|---------|
| `repoUrl`*            | Accepts the format 'github.com?repo=reponame&owner=owner' where 'reponame' is the new repository name and 'owner' is an organization or username | `string`                  |         |
| `publicKey`*          | Generated from ssh-keygen. Begins with 'ssh-rsa', 'ecdsa-sha2-nistp256', 'ecdsa-sha2-nistp384', 'ecdsa-sha2-nistp521', 'ssh-ed25519', 'sk-ecdsa-sha2-nistp256@openssh.com', or 'sk-ssh-ed25519@openssh.com'. | `string`                  |         |
| `privateKey`*         | SSH Private Key generated from ssh-keygen                                                                                                   | `string`                  |         |
| `deployKeyName`*      | Name of the Deploy Key                                                                                                                        | `string`                  |         |
| `privateKeySecretName` | Name of the GitHub Secret to store the private key related to the Deploy Key. Defaults to: 'KEY_NAME_PRIVATE_KEY' where 'KEY_NAME' is the name of the Deploy Key | `string`                  |         |
| `token`              | The token to use for authorization to GitHub                                                                                                  | `string`                  |         |

##### **Examples**
The YAML representation of the provided steps describes a process for creating and storing a GitHub Deploy Key, specifying the necessary inputs such as repository URL, public key, private key, and the deploy key name.


```yaml
steps:
  - action: github:deployKey:create
    name: Create and store a Deploy Key
    input:
      repoUrl: github.com?repo=repository&owner=owner
      publicKey: pubkey
      privateKey: privkey
      deployKeyName: Push Tags
```
This is for creating and storing a GitHub Deploy Key, specifying the necessary inputs such as repository URL, public key, private key, and the deploy key name.

##### **Outputs**

| Key                      | Description                                                                      | Type                      |
|--------------------------|----------------------------------------------------------------------------------|---------------------------|
| `privateKeySecretName`   | The GitHub Action Repo Secret Name for the Private Key                          | `string`                  |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubDeployKey.ts)

-----


#### `github:environment:create`
✅️ Ready to use in Roadie

Action for creating deployment environments on GitHub.

##### **Inputs**
| Key                             | Description                                                                                                         | Type                                | Example |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------|---------|
| `repoUrl`*                       | Accepts the format 'github.com?repo=reponame&owner=owner' where 'reponame' is the new repository name and 'owner' is an organization or username | `string`                            |         |
| `name`*                          | Name of the deployment environment to create                                                                        | `string`                            |         |
| `deploymentBranchPolicy`        | The type of deployment branch policy for this environment. To allow all branches to deploy, set to null.          | `object`                            |         |
| `customBranchPolicyNames`       | The name pattern that branches must match in order to deploy to the environment.                                   | `array`                             |         |
| `customTagPolicyNames`         | The name pattern that tags must match in order to deploy to the environment.                                      | `array`                             |         |
| `environmentVariables`          | Environment variables attached to the deployment environment                                                       | `object`                            |         |
| `secrets`                      | Secrets attached to the deployment environment                                                                     | `object`                            |         |
| `token`                         | The token to use for authorization to GitHub                                                                        | `string`                            |         |
| `waitTimer`                    | The time to wait before creating or updating the environment (in milliseconds)                                     | `integer`                           |         |
| `preventSelfReview`            | Whether to prevent self-review for this environment                                                                  | `boolean`                           |         |
| `reviewers`                    | Reviewers for this environment                                                                                      | `array`                             |         |

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubEnvironment.ts)

-----


#### `github:issues:label`
✅️ Ready to use in Roadie

Action to add labels to pull requests or issues on GitHub.

##### **Inputs**
| **Key**      | **Description**                                                                                      | **Type**       | **Example** |
|--------------|------------------------------------------------------------------------------------------------------|----------------|-------------|
| `repoUrl`*    | Accepts the format `'github.com?repo=reponame&owner=owner'` where 'reponame' is the repository name and 'owner' is an organization or username | `string`       |             |
| `number`*     | The pull request or issue number to add labels to                                                     | `number`       |             |
| `labels`*     | The labels to add to the pull request or issue                                                        | `string[]`     |             |
| `token`      | The GitHub token to use for authorization                                                             | `string`       |             |

##### **Examples**
```yaml
steps:
  - action: 'github:issues:label'
    name: 'Add labels to pull request or issue with token'
    input:
      repoUrl: 'github.com?repo=repo&owner=owner'
      number: '1'
      labels: 
        - 'bug'
        - 'documentation'
      token: 'gph_YourGitHubToken'
```
This action adds the labels "bug" and "documentation" to issue or pull request #1 in a GitHub repository, using a provided GitHub token for authentication.

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubIssuesLabel.ts)

-----


#### `github:pages:enable`
✅️ Ready to use in Roadie

Action for enabling GitHub Pages for a specified repository, with various customization options such as the build type, source branch, and source path.

##### **Inputs**

| **Key**          | **Description**                                                                                      | **Type**     | **Example** |
|------------------|------------------------------------------------------------------------------------------------------|--------------|-------------|
| `repoUrl`*        | Accepts the format 'github.com?repo=reponame&owner=owner' where 'reponame' is the repository name and 'owner' is an organization or username | `string`     |             |
| `buildType`      | The GitHub Pages build type - "legacy" or "workflow". Default is "workflow"                           | `string`     |             |
| `sourceBranch`   | The GitHub Pages source branch. Default is "main"                                                     | `string`     |             |
| `sourcePath`     | The GitHub Pages source path - "/" or "/docs". Default is "/"                                         | `string`     |             |
| `token`          | The token to use for authorization to GitHub                                                          | `string`     |             |

##### **Examples**
```yaml
steps:
  - action: 'github:pages:enable'
    id: 'github-pages-custom-path'
    name: 'Enable GitHub Pages with Custom Source Path'
    input:
      repoUrl: 'github.com?repo=customPathRepo&owner=customOwner'
      sourcePath: '/docs'
      token: 'gph_YourGitHubToken'
```

This YAML specifies a step that enables GitHub Pages for the repository `customPathRepo` owned by `customOwner`, using the source path `/docs` and an authorization token.

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubPagesEnable.ts)

-----


#### `github:repo:create`
✅️ Ready to use in Roadie

The code defines a Backstage action for creating GitHub repositories programmatically, allowing customization of repository settings, collaborators, and configurations.

##### **Inputs**

| **Key** | **Description** | **Type** | **Example** |
| --- | --- | --- | --- |
| `repoUrl`* | The URL of the repository | `string` | |
| `description` | Description of the repository | `string` | |
| `homepage` | The homepage URL for the repository | `string` | |
| `access` | Access level for the repository | `string` | |
| `deleteBranchOnMerge` | Whether to delete branch after merging | `boolean` | |
| `gitAuthorName` | Name of the git author | `string` | |
| `gitAuthorEmail` | Email of the git author | `string` | |
| `allowRebaseMerge` | Allow rebase merging | `boolean` | |
| `allowSquashMerge` | Allow squash merging | `boolean` | |
| `squashMergeCommitTitle` | Title for squash merge commits | `'PR_TITLE' \| 'COMMIT_OR_PR_TITLE'` | |
| `squashMergeCommitMessage` | Message for squash merge commits | `'PR_BODY' \| 'COMMIT_MESSAGES' \| 'BLANK'` | |
| `allowMergeCommit` | Allow merge commits | `boolean` | |
| `allowAutoMerge` | Enable automatic merging | `boolean` | |
| `requireCodeOwnerReviews` | Require code owner reviews | `boolean` | |
| `bypassPullRequestAllowances` | Bypass pull request restrictions | `object` | |
| `requiredApprovingReviewCount` | Number of required reviews for approval | `number` | |
| `restrictions` | Restrictions on who can push to branches | `object` | |
| `requiredStatusCheckContexts` | Required status checks before merging | `string[]` | |
| `requireBranchesToBeUpToDate` | Require branches to be up to date | `boolean` | |
| `requiredConversationResolution` | Require conversations to be resolved before merging | `boolean` | |
| `repoVisibility` | Visibility of the repository | `'private' \| 'internal' \| 'public'` | |
| `collaborators` | List of collaborators for the repository | `Array<object>` | |
| `hasProjects` | Whether the repository has GitHub Projects enabled | `boolean` | |
| `hasWiki` | Whether the repository has a Wiki | `boolean` | |
| `hasIssues` | Whether the repository has Issues enabled | `boolean` | |
| `token` | Access token for GitHub authentication | `string` | |
| `topics` | List of topics for the repository | `string[]` | |
| `repoVariables` | Repository-level environment variables | `object` | |
| `secrets` | Secrets to store in the repository | `object` | |
| `oidcCustomization` | OIDC customization settings | `object` | |
| `requireCommitSigning` | Require commit signing | `boolean` | |
| `customProperties` | Custom properties for the repository | `object` | |

##### **Examples**
```yaml
steps:
  - action: 'github:repo:create'
    name: 'Create a new GitHub repository with a description'
    input:
      repoUrl: 'github.com?repo=repo&owner=owner'
      description: 'My new repository'
```
Creates a new GitHub repository with a specified URL and description.

##### **Outputs**

| **Key** | **Description** | **Type** |
| --- | --- | --- |
| `remoteUrl` | The remote URL of the newly created GitHub repository | `string` |
| `repoContentsUrl` | URL to the repository contents | `string` |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubRepoCreate.ts)

-----


#### `github:repo:push`
✅️ Ready to use in Roadie

Action that initializes a git repository in a workspace and pushes it to GitHub, with options to configure branch protection, commit rules, and other repository settings.

##### **Inputs**

| **Key**                        | **Description**                                                                                | **Type**                    | **Example** |
|---------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------|-------------|
| `repoUrl`8                       | Repository URL (GitHub repository in the format: `owner/repo`)                                | `string`                    |             |
| `requireCodeOwnerReviews`       | Whether to require code owner reviews for pull requests                                       | `boolean`                   |             |
| `dismissStaleReviews`           | Whether to dismiss stale reviews when new commits are pushed                                  | `boolean`                   |             |
| `requiredStatusCheckContexts`   | The list of status checks that must pass before a merge                                       | `string[]`                  |             |
| `bypassPullRequestAllowances`   | Allows bypassing pull request requirements for specified users, teams, or apps                | `object`                    |             |
| `requiredApprovingReviewCount`  | The number of approving reviews required for pull requests                                    | `number`                    |             |
| `restrictions`                  | Restricts who can push to the protected branch (users, teams, and apps)                       | `object`                    |             |
| `requireBranchesToBeUpToDate`   | Whether branches need to be up to date before merging                                         | `boolean`                   |             |
| `requiredConversationResolution`| Whether to require conversation resolution before merging                                    | `boolean`                   |             |
| `requireLastPushApproval`       | Whether the last push must be approved before merging                                         | `boolean`                   |             |
| `defaultBranch`                 | The default branch name for the repository                                                    | `string`                    |             |
| `protectDefaultBranch`          | Whether to protect the default branch from being force-pushed                                 | `boolean`                   |             |
| `protectEnforceAdmins`          | Whether to enforce protections for admin users                                                | `boolean`                   |             |
| `gitCommitMessage`              | The commit message for the initial commit                                                     | `string`                    |             |
| `gitAuthorName`                 | The name of the author for the git commit                                                     | `string`                    |             |
| `gitAuthorEmail`                | The email of the author for the git commit                                                    | `string`                    |             |
| `sourcePath`                    | The path to the content to push to the repository                                             | `string`                    |             |
| `token`                         | The token for GitHub authentication (if not provided via integration)                        | `string`                    |             |
| `requiredCommitSigning`         | Whether commit signing is required                                                           | `boolean`                   |             |

##### **Examples**

```yaml
steps:
  - action: github:repo:push
    name: Create test repo with testuser as owner.
    input:
      repoUrl: github.com?repo=test&owner=testuser
```
This create a test repository with a specified owner.

##### **Outputs**

| **Key**              | **Description**                                      | **Type**   |
|----------------------|------------------------------------------------------|------------|
| `remoteUrl`          | The clone URL of the repository                      | `string`   |
| `repoContentsUrl`    | URL to the repository contents (e.g., on the default branch) | `string`   |
| `commitHash`         | The hash of the commit made                          | `string`   |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-github/src/actions/githubRepoPush.ts)

-----


#### `parse:repo-url:plus`
Action that parses repository URLs and extracts relevant metadata based on a specified schema.

##### **Inputs**

| Key        | Description                            | Type    | Example |
|------------|----------------------------------------|---------|---------|
| reposUrls  | An array of repository URLs to parse   | `array` |         |

##### **Examples**
Parse Repo Url like "host?owner=any&organization=any&workspace=any&project=any"
```yaml
steps:
  - action: parse:repo-url:plus
    id: parse-repos-url
    name: Parse Repos URLs
    input:
      reposUrls:
        - host?owner=any&organization=any&workspace=any&project=any
```

##### **Outputs**

| Key          | Description                                  | Type     |
|--------------|----------------------------------------------|----------|
| results      | An array of objects containing parsed repo specifications | `array`  |
| results.repo | The name of the repository                   | `string` |
| results.host | The host of the repository                   | `string` |
| results.owner | The owner of the repository                 | `string` |
| results.organization | The organization associated with the repository | `string` |
| results.workspace | The workspace associated with the repository | `string` |
| results.project | The project associated with the repository | `string` |

##### **Links**
- [Code](https://github.com/kode3tech/k3t-backstage-plugin-scaffolder-backend-module-plus/blob/29e02a71d9488efa726d805a86d25c15dd5b6a37/src/actions/builtin/extras/parse-repo-url.ts)

-----


### Gitlab Scaffolder Actions

#### `publish:gitlab`
✅️ Ready to use in Roadie

Initializes a git repository of the content in the workspace, and publishes it to GitLab. See input options [in the application](/docs/scaffolder/writing-templates/#actions)

##### **Inputs**

| **Key**                | **Description**                                                                                                                | **Type**        | **Example** |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------|-----------------|-------------|
| `repoUrl`*              | Accepts the format `'gitlab.com?repo=project_name&owner=group_name'` where 'project_name' is the repository name and 'group_name' is a group or username | `string`        |             |
| `repoVisibility`        | Sets the visibility of the repository. The default value is `'private'`. (deprecated, use settings.visibility instead)          | `string`        |             |
| `defaultBranch`         | Sets the default branch on the repository. The default value is `'master'`.                                                    | `string`        |             |
| `gitCommitMessage`      | Sets the commit message on the repository. The default value is `'initial commit'`.                                             | `string`        |             |
| `gitAuthorName`         | Sets the default author name for the commit. The default value is `'Scaffolder'`.                                               | `string`        |             |
| `gitAuthorEmail`        | Sets the default author email for the commit.                                                                                   | `string`        |             |
| `sourcePath`            | Path within the workspace that will be used as the repository root. If omitted, the entire workspace will be published.         | `string`        |             |
| `token`                 | The token to use for authorization to GitLab.                                                                                   | `string`        |             |
| `setUserAsOwner`        | Set the token user as owner of the newly created repository.                                                                    | `boolean`       |             |
| `topics`                | Topic labels to apply on the repository. (deprecated, use settings.topics instead)                                              | `array<string>` |             |
| `settings.path`         | Repository name for new project. Generated based on name if not provided (generated as lowercase with dashes).                  | `string`        |             |
| `settings.auto_devops_enabled` | Enable Auto DevOps for this project.                                                                                    | `boolean`       |             |
| `settings.ci_config_path`      | Custom CI config path for this project.                                                                                 | `string`        |             |
| `settings.description`        | Short project description.                                                                                               | `string`        |             |
| `settings.merge_method`       | Merge Methods (merge, rebase_merge, ff).                                                                                 | `string`        |             |
| `settings.squash_option`      | Set squash option for the project (never, always, default_on, default_off).                                               | `string`        |             |
| `settings.topics`             | Topic labels to apply on the repository.                                                                                  | `array<string>` |             |
| `settings.visibility`         | The visibility of the project. Can be private, internal, or public. The default value is private.                         | `string`        |             |
| `branches.name`         | Branch name.                                                                                                                   | `string`        |             |
| `branches.protect`      | Will mark branch as protected. The default value is `'false'`.                                                                 | `boolean`       |             |
| `branches.create`       | If branch does not exist, it will be created from the provided ref. The default value is `'false'`.                             | `boolean`       |             |
| `branches.ref`          | Branch reference to create branch from. The default value is `'master'`.                                                        | `string`        |             |
| `projectVariables.key`  | The key of a variable; must have no more than 255 characters; only A-Z, a-z, 0-9, and _ are allowed.                            | `string`        |             |
| `projectVariables.value` | The value of a variable.                                                                                                       | `string`        |             |
| `projectVariables.description` | The description of the variable. The default value is `null`.                                                            | `string`        |             |
| `projectVariables.variable_type` | The type of a variable. The default value is `'env_var'`.                                                              | `string`        |             |
| `projectVariables.protected` | Whether the variable is protected. The default value is `'false'`.                                                         | `boolean`       |             |
| `projectVariables.raw`   | Whether the variable is in raw format. The default value is `'false'`.                                                         | `boolean`       |             |
| `projectVariables.environment_scope` | The environment scope of the variable. The default value is `' * '`.                                               | `string`        |             |

##### **Examples**
```yaml
    - id: publish
      name: Publish
      action: publish:gitlab
      input:
        description: This is ${{ parameters.name }}
        repoUrl: ${{ parameters.repoUrl }}?owner=${{ steps.createGitlabGroup.output.groupId }}
        sourcePath: pimcore
        defaultBranch: main
```

##### **Outputs**

| **Key**          | **Description**                                     | **Type**  |
|------------------|-----------------------------------------------------|-----------|
| `remoteUrl`      | A URL to the repository with the provider.           | `string`  |
| `repoContentsUrl`| A URL to the root of the repository.                 | `string`  |
| `projectId`      | The ID of the project.                               | `string`  |
| `commitHash`     | The git commit hash of the initial commit.           | `string`  |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlab.ts)

-----


#### `publish:gitlab:merge-request`
✅️ Ready to use in Roadie

Action for creating a GitLab merge request.

##### **Inputs**
| **Key**              | **Description**                                                                                                        | **Type**      | **Example** |
|----------------------|------------------------------------------------------------------------------------------------------------------------|---------------|-------------|
| `repoUrl`*            | Repository Location in the format `'gitlab.com?repo=project_name&owner=group_name'`                                     | `string`      |             |
| `projectid`          | Project ID/Name(slug) of the GitLab project (deprecated)                                                               | `string`      |             |
| `title`              | The name for the merge request                                                                                         | `string`      |             |
| `description`        | The description of the merge request                                                                                   | `string`      |             |
| `branchName`*         | Source branch name of the merge request                                                                                 | `string`      |             |
| `targetBranchName`   | Target branch name of the merge request                                                                                 | `string`      |             |
| `sourcePath`         | Subdirectory of the working directory to copy changes from                                                              | `string`      |             |
| `targetPath`         | Subdirectory of the repository to apply changes to                                                                      | `string`      |             |
| `token`              | Authentication token for authorization to GitLab                                                                        | `string`      |             |
| `commitAction`       | Action for the git commit: `create`, `update`, `delete`, or `auto` (automatic commit action based on file existence)     | `string`      |             |
| `removeSourceBranch` | Option to delete the source branch after the merge request is merged (default: `false`)                                  | `boolean`     |             |
| `assignee`           | User to whom the merge request will be assigned                                                                         | `string`      |             |

##### **Examples**
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

##### **Outputs**
| **Key**            | **Description**                                  | **Type**      |
|--------------------|--------------------------------------------------|---------------|
| `targetBranchName` | Target branch name of the merge request           | `string`      |
| `projectid`        | GitLab Project ID/Name(slug)                      | `string`      |
| `projectPath`      | GitLab Project path                               | `string`      |
| `mergeRequestUrl`  | URL link to the merge request in GitLab           | `string`      |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabMergeRequest.ts)

-----


#### `gitlab:repo:push`
✅️ Ready to use in Roadie

Action that automates the process of pushing commits to a GitLab repository.

##### **Inputs**
| **Key**           | **Description**                                                                                         | **Type**        | **Example** |
|-------------------|---------------------------------------------------------------------------------------------------------|-----------------|-------------|
| `repoUrl`*         | The GitLab repository location in the format `'gitlab.com?repo=project_name&owner=group_name'`.          | `string`        |             |
| `branchName`*      | The name of the branch where the commit will be applied.                                                 | `string`        |             |
| `commitMessage`*   | The message to use for the commit.                                                                       | `string`        |             |
| `sourcePath`      | Subdirectory of the working directory to copy changes from.                                              | `string`        |             |
| `targetPath`      | Subdirectory of the repository to apply changes to.                                                      | `string`        |             |
| `token`           | The authentication token used for GitLab authorization.                                                  | `string`        |             |
| `commitAction`    | The action to use for the commit (`create`, `update`, or `delete`). Defaults to `create`.                | `string` (enum) |             |

##### **Examples**
```yaml
steps:
  - id: pushChanges
    action: gitlab:repo:push
    name: Push changes to gitlab repository
    input:
      repoUrl: gitlab.com?repo=repo&owner=owner
      commitMessage: Initial Commit
      branchName: feature-branch
      commitAction: update
```

This YAML defines a step that updates a specific branch in a GitLab repository with an initial commit using the `gitlab:repo:push` action.

##### **Outputs**

| **Key**         | **Description**                            | **Type**   |
|-----------------|--------------------------------------------|------------|
| `projectid`     | The GitLab project ID or name (slug).       | `string`   |
| `projectPath`   | The GitLab project path.                    | `string`   |
| `commitHash`    | The commit hash of the latest commit.       | `string`   |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabRepoPush.ts)

-----


#### `gitlab:group:ensureExists`
✅️ Ready to use in Roadie

For ensuring that a GitLab group or sub-groups exist, creating them if they do not.

##### **Inputs**
| **Key**         | **Description**                                      | **Type**                          | **Example** |
|-----------------|------------------------------------------------------|-----------------------------------|-------------|
| `host`          | The GitLab host URL                                  | `string`                          |             |
| `repoUrl`       | The repository URL to use                            | `string`                          |             |
| `token`         | The token to authenticate with GitLab                | `string`                          |             |
| `path`          | A path of group names that are ensured to exist       | `string[]` (array of strings)     |             |

##### **Examples**
```yaml
    - id: createGitlabGroup
      name: Ensure Gitlab group exists
      action: gitlab:group:ensureExists
      input:
        repoUrl: ${{ parameters.repoUrl }}
        path:
          - path
          - to
          - group
```

##### **Outputs**

| **Key**   | **Description**                      | **Type**    |
|-----------|--------------------------------------|-------------|
| `groupId` | The id of the innermost sub-group    | `number?`   |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabGroupEnsureExists.ts)

-----


#### `gitlab:issues:create`
✅️ Ready to use in Roadie

Action to create GitLab issues, including the input validation using Zod, GitLab API calls, and error handling.

##### **Inputs**
| **Key**                                  | **Description**                                           | **Type**                 | **Example** |
|------------------------------------------|-----------------------------------------------------------|--------------------------|-------------|
| `projectId`                              | Project ID                                                | `number`                 |             |
| `title`                                  | Title of the issue                                         | `string`                 |             |
| `assignees`                              | IDs of the users to assign the issue to                    | `array<number>`           |             |
| `confidential`                           | Issue confidentiality                                      | `boolean`                |             |
| `description`                            | Issue description (max 1,048,576 characters)               | `string`                 |             |
| `createdAt`                              | Creation date/time in format `YYYY-MM-DDTHH:mm:ssZ`        | `string`                 |             |
| `dueDate`                                | Due date/time in format `YYYY-MM-DDTHH:mm:ssZ`             | `string`                 |             |
| `discussionToResolve`                    | ID of a discussion to resolve (with merge request option)  | `string`                 |             |
| `epicId`                                 | ID of the linked Epic                                      | `number`                 |             |
| `labels`                                 | Labels to apply                                            | `string`                 |             |
| `issueType`                              | Type of the issue (based on `IssueType` enum)              | `nativeEnum<IssueType>`  |             |
| `mergeRequestToResolveDiscussionsOf`     | IID of a merge request to resolve all issues               | `number`                 |             |
| `milestoneId`                            | Global ID of a milestone to assign the issue               | `number`                 |             |
| `weight`                                 | The issue weight                                           | `number`                 |             |

##### **Examples**
```yaml
    - id: gitlabIssue
      name: Issues
      action: gitlab:issues:create
      input:
        repoUrl: ${{ parameters.repoUrl }}
        token: ${{ secrets.USER_OAUTH_TOKEN }}
        projectId: 1111111
        title: Test Issue
        assignees:
          - 2222222
        description: This is the description of the issue
        confidential: true
        createdAt: 2022-09-27 18:00:00.000
        dueDate: 2024-09-28 12:00:00.000
        epicId: 3333333
        labels: phase1:label1,phase2:label2
```

##### **Outputs**
| **Key**    | **Description**    | **Type**   |
|------------|--------------------|------------|
| `issueUrl` | URL of the created issue  | `string`   |
| `issueId`  | ID of the created issue   | `number`   |
| `issueIid` | IID of the created issue  | `number`   |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabIssueCreate.ts)

-----


#### `gitlab:issue:edit`
✅️ Ready to use in Roadie

This uses schemas to validate the input and output data using `zod` and interacts with GitLab's API to edit issue properties such as labels, assignees, and other metadata.

##### **Inputs**

| **Key**              | **Description**                                                                                                                                   | **Type**                               | **Example** |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|-------------|
| `repoUrl`            | The URL of the GitLab repository.                                                                                                                 | `string`                               |             |
| `projectId`          | The global ID or URL-encoded path of the project owned by the authenticated user.                                                                  | `number`                               |             |
| `issueIid`           | The internal ID of a project's issue.                                                                                                             | `number`                               |             |
| `addLabels`          | Comma-separated label names to add to an issue. If a label does not already exist, this creates a new project label and assigns it to the issue.    | `string (optional)`                    |             |
| `assignees`          | IDs of the users to assign the issue to.                                                                                                           | `array<number> (optional)`             |             |
| `confidential`       | Updates an issue to be confidential.                                                                                                              | `boolean (optional)`                   |             |
| `description`        | The description of an issue. Limited to 1,048,576 characters.                                                                                      | `string (optional)`                    |             |
| `discussionLocked`   | Flag indicating if the issue’s discussion is locked. Only project members can add or edit comments when locked.                                    | `boolean (optional)`                   |             |
| `dueDate`            | The due date in the format YYYY-MM-DD.                                                                                                             | `string (optional)`                    |             |
| `epicId`             | ID of the epic to add the issue to. Valid values are greater than or equal to 0.                                                                   | `number (optional)`                    |             |
| `issueType`          | Updates the type of issue (e.g., issue, incident, test_case, or task).                                                                             | `enum (optional)`                      |             |
| `labels`             | Comma-separated label names for an issue. Set to an empty string to unassign all labels.                                                           | `string (optional)`                    |             |
| `milestoneId`        | The global ID of a milestone to assign the issue to. Set to 0 or provide an empty value to unassign a milestone.                                   | `number (optional)`                    |             |
| `removeLabels`       | Comma-separated label names to remove from an issue.                                                                                               | `string (optional)`                    |             |
| `stateEvent`         | The state event of an issue (e.g., close, reopen).                                                                                                 | `enum (optional)`                      |             |
| `title`              | The title of an issue.                                                                                                                             | `string (optional)`                    |             |
| `updatedAt`          | When the issue was updated. Date-time string, ISO 8601 formatted (e.g., YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss.SSSZ).                         | `string (optional)`                    |             |
| `weight`             | The issue weight. Valid values are from 0 to 10.                                                                                                   | `number (optional)`                    |             |
| `token`              | The token used for GitLab API authentication.                                                                                                      | `string`                               |             |

##### **Examples**
```yaml
steps:
  - id: gitlabIssue
    name: EditIssues
    action: gitlab:issue:edit
    input:
      # commonGitlabConfigExample
      projectId: 12
      title: Test Issue
      assignees:
        - 18
      description: This is the edited description of the issue
      updatedAt: '2024-05-10T18:00:00.000Z'
      dueDate: '2024-09-28'
```

##### **Outputs**
| **Key**         | **Description**                                        | **Type**    |
|-----------------|--------------------------------------------------------|-------------|
| `issueUrl`      | The web URL of the issue.                              | `string`    |
| `projectId`     | The project ID the issue belongs to.                   | `number`    |
| `issueId`       | The unique ID of the issue.                            | `number`    |
| `issueIid`      | The internal ID of a project's issue.                  | `number`    |
| `state`         | The state event of the issue (e.g., open, closed).     | `string`    |
| `title`         | The title of the issue.                                | `string`    |
| `updatedAt`     | The last updated time of the issue (ISO 8601 format).  | `string`    |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabIssueEdit.ts)

-----


#### `gitlab:pipeline:trigger`
✅️ Ready to use in Roadie

This automates the creation and triggering of a GitLab pipeline using specific input parameters and outputs the result.

##### **Inputs**

| **Key**               | **Description**                                                                            | **Type**                    | **Example** |
|-----------------------|--------------------------------------------------------------------------------------------|-----------------------------|-------------|
| `repoUrl`             | Repository URL containing the project                                                      | `string`                    |             |
| `projectId`           | Project Id                                                                                 | `number`                    |             |
| `tokenDescription`    | Pipeline token description                                                                 | `string`                    |             |
| `token`               | Token used for authenticating with GitLab API                                               | `string`                    |             |
| `branch`              | Project branch on which the pipeline is triggered                                           | `string`                    |             |
| `variables`           | A record of key-value pairs containing the pipeline variables (optional)                    | `record<string, string>`    |             |

##### **Examples**
```yaml
steps:
  - id: 'triggerPipeline'
    name: 'Trigger Project Pipeline'
    action: 'gitlab:pipeline:trigger'
    input:
      projectId: 12
      tokenDescription: 'This is the text that will appear in the pipeline token'
      token: 'glpt-xxxxxxxxxxxx'
      branch: 'main'
      variables:
        var_one: 'one'
        var_two: 'two'
      # Include commonGitlabConfigExample if needed
      # Add any other common properties here
```

##### **Outputs**
| **Key**        | **Description**      | **Type**        |
|----------------|----------------------|-----------------|
| `pipelineUrl`  | Pipeline URL         | `string`        |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabPipelineTrigger.ts)

-----


#### `gitlab:projectAccessToken:create`
✅️ Ready to use in Roadie

Action that creates a project access token in GitLab.

##### **Inputs**
| Key          | Description                                            | Type                       | Example |
|--------------|--------------------------------------------------------|----------------------------|---------|
| `projectId`  | Project ID/Name(slug) of the GitLab Project           | `number` or `string`      |         |
| `token`      | The token to use for authorization to GitLab          | `string`                   |         |
| `name`       | Name of Access Key                                     | `string`                   |         |
| `repoUrl`    | URL to GitLab instance                                 | `string`                   |         |
| `accessLevel`| Access Level of the Token, 10 (Guest), 20 (Reporter), 30 (Developer), 40 (Maintainer), and 50 (Owner) | `number` |         |
| `scopes`     | Scopes for a project access token                      | `string[]`                |         |
| `expiresAt`  | Expiration date of the access token in ISO format (YYYY-MM-DD). If Empty, it will set to the maximum of 365 days. | `string` |         |

##### **Examples**
```yaml
    - id: gitlab-access-token
      name: Gitlab Project Access Token
      action: gitlab:projectAccessToken:create
      input:
        repoUrl: ${{ parameters.repoUrl }}
        projectId: "${{ steps['publish-manifest'].output.projectId }}"
        name: ${{ parameters.name }}-access-token
        accessLevel: 40
        scopes: ['read_repository', 'write_repository']
```

##### **Outputs**

| Key          | Description               | Type   |
|--------------|---------------------------|--------|
| `access_token` | Access Token              | `string` |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabProjectAccessTokenCreate.ts)

-----


#### `gitlab:projectVariable:create`
✅️ Ready to use in Roadie

Action for creating project variables in GitLab.

##### **Inputs**

| Key                        | Description                                                                                        | Type                       | Example |
|---------------------------|----------------------------------------------------------------------------------------------------|----------------------------|---------|
| `repoUrl`                 | The URL of the GitLab repository                                                                    | `string`                   |         |
| `projectId`               | Project ID                                                                                         | `number | string`         |         |
| `key`                     | The key of a variable; must have no more than 255 characters; only A-Z, a-z, 0-9, and _ are allowed | `string`                   |         |
| `value`                   | The value of a variable                                                                             | `string`                   |         |
| `variableType`            | Variable Type (env_var or file)                                                                    | `string`                   |         |
| `variableProtected`       | Whether the variable is protected                                                                    | `boolean`                  |         |
| `masked`                  | Whether the variable is masked                                                                       | `boolean`                  |         |
| `raw`                     | Whether the variable is expandable                                                                   | `boolean`                  |         |
| `environmentScope`        | The environment_scope of the variable                                                                | `string`                   |         |
| `token`                   | The token for authentication                                                                        | `string`                   |         |

##### **Examples**
```yaml
    - id: gitlab-project-variable
      name: Gitlab Project Variable
      action: gitlab:projectVariable:create
      input:
        repoUrl: ${{ parameters.repoUrl }}
        projectId: "${{ steps['publish'].output.projectId }}"
        key: 'VARIABLE_NAME'
        value: "${{ steps['gitlab-access-token'].output.access_token }}"
        variableType: 'env_var'
        masked: true
        variableProtected: false
        raw: false
        environmentScope: '*'
```

##### **Outputs**
None

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabProjectVariableCreate.ts)

-----


#### `gitlab:projectDeployToken:create`
✅️ Ready to use in Roadie

Action that creates a GitLab project deploy token.

##### **Inputs**

| Key         | Description                   | Type                       | Example |
|-------------|-------------------------------|----------------------------|---------|
| projectId  | Project ID                    | `number` or `string`      |         |
| name       | Deploy Token Name             | `string`                   |         |
| username   | Deploy Token Username          | `string` (optional)        |         |
| scopes     | Scopes                        | `array of string` (optional)|         |

##### **Examples**
```yaml
    - id: gitlab-deploy-token
      name: Create Deploy Token
      action: gitlab:projectDeployToken:create
      input:
        repoUrl: ${{ parameters.repoUrl }}
        projectId: "${{ steps['publish'].output.projectId }}"
        name: ${{ parameters.name }}-secret
        username: ${{ parameters.name }}-secret
        scopes: ['read_registry']
```

##### **Outputs**

| Key          | Description                     | Type                      |
|--------------|---------------------------------|---------------------------|
| deploy_token | Deploy Token                    | `string`                  |
| user         | User                            | `string`                  |

##### **Links**
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-gitlab/src/actions/gitlabProjectDeployTokenCreate.ts)

-----


### Humanitec Scaffolder Actions

#### `humanitec:create-app`
Action for creating applications in Humanitec, using a YAML setup file to define application properties.

##### **Inputs**

| Key        | Description                     | Type                           | Example |
|------------|---------------------------------|--------------------------------|--------|
| appId*      | The unique identifier for the application | `string`                       |        |
| setupFile  | The path to the YAML file containing app setup information | `string`                       |        |

##### **Outputs**
None

##### **Links**
- [NPM](https://www.npmjs.com/package/@humanitec/backstage-plugin-scaffolder-backend-module)
- [Code](https://github.com/humanitec/humanitec-backstage-plugins/blob/main/plugins/humanitec-backend-scaffolder-module/src/actions/create-app.ts)

-----


### Microsoft Teams Scaffolder Actions

#### `ms-teams:sendMessage`
Action that sends messages to a Microsoft Teams channel using a specified webhook URL.

##### **Inputs**

| Key           | Description                                                                                  | Type   | Example |
|---------------|----------------------------------------------------------------------------------------------|--------|---------|
| `message`     | The message to send via webhook                                                              | string |         |
| `webhookUrl`  | The Microsoft Teams webhook URL to send the request to. The URL must either be specified here or in the Backstage config | string |         |

##### **Examples**
```yaml
 steps:
    - id: send-ms-teams-message
      name: Send message
      action: ms-teams:sendMessage
      input:
        message: "Hello, world!"
        webhookUrl: "https://your-url.com" # optional if the URL is supplied in the app-config.yaml
```

##### **Outputs**
None

##### **Links**
- [NPM](https://www.npmjs.com/package/@grvpandey11/backstage-plugin-scaffolder-backend-module-ms-teams)

-----


### Pagerduty Scaffolder Actions

#### `pagerduty:service:create`
Action that allows users to create a PagerDuty service.

##### **Inputs**

| **Key**               | **Description**                                | **Type**      | **Example** |
|-----------------------|------------------------------------------------|---------------|-------------|
| `name`*                | Name of the service                            | `string`      |             |
| `description`*         | Description of the service                     | `string`      |             |
| `escalationPolicyId`*   | Escalation policy ID for the service           | `string`      |             |
| `alertGrouping`        | Alert grouping parameters (optional)           | `string`      |             |

##### **Outputs**
| **Key**               | **Description**                                | **Type**     |
|-----------------------|------------------------------------------------|--------------|
| `serviceUrl`          | PagerDuty Service URL                          | `string`     |
| `serviceId`           | PagerDuty Service ID                           | `string`     |
| `integrationKey`      | Backstage Integration Key                      | `string`     |

##### **Links**
- [Code](https://github.com/PagerDuty/backstage-plugin-scaffolder-actions/blob/main/src/actions/custom.ts)
- [@pagerduty/backstage-plugin-scaffolder-actions](https://www.npmjs.com/package/@pagerduty/backstage-plugin-scaffolder-actions)

-----


### Quay Scaffolder Actions

#### quay:create-repository
Action for creating a repository in Quay.io.

##### **Input**

| Parameter Name |  Type  | Required | Description                                                                       | Example                                  |
| -------------- | :----: | :------: | --------------------------------------------------------------------------------- | ---------------------------------------- |
| name           | string |   Yes    | Quay repository name                                                              | foo                                      |
| visibility     | string |   Yes    | Visibility setting for the created repository, either public or private           | public                                   |
| description    | string |   Yes    | Description for the created repository                                            | This if foo repository                   |
| token          | string |   Yes    | Authentication token, see [docs](https://docs.quay.io/api/)                       | UW1dLVdCTj8uZWNuIW97K1k0XiBkSmppVU9MYzFT |
| baseUrl        | string |    No    | Base url of a quay instance, defaults to <https://quay.io>                        | <https://foo.quay.io>                    |
| namespace      | string |    No    | Namespace to create repository in, defaults to the namespace the token belongs to | bar                                      |
| repoKind       | string |    No    | Created repository kind, either image or application, if empty defaults to image  | image                                    |

##### **Examples**
```yaml
action: quay:create-repository
id: create-quay-repo
name: Create quay repo
input:
  baseUrl: https://quay.io
  token: UW1dLVdCTj8uZWNuIW97K1k0XiBkSmppVU9MYzFT
  name: foo
  visibility: public
  description: This is a foo repository
  namespace: bar
  repoKind: image
```

##### **Output**

| Name          |  Type  | Description                                |
| ------------- | :----: | ------------------------------------------ |
| repositoryUrl | string | Quay repository URL created by this action |

##### **Links**
- [@janus-idp/backstage-scaffolder-backend-module-quay](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-quay)
- [Code](https://github.com/janus-idp/backstage-plugins/tree/main/plugins/quay-actions

-----


### Sonarqube Scaffolder Actions

#### `sonarqube:create-project`
Action for creating a project in SonarQube via the Backstage Scaffolder plugin.

##### **Inputs**

| **Key**      | **Description**                                                                                   | **Type**     | **Example**                  |
|--------------|---------------------------------------------------------------------------------------------------|--------------|------------------------------|
| `baseUrl`*    | SonarQube server base URL. Example: `"https://sonar-server.com"`                                    | `string`     |                              |
| `name`*       | Name of the project to be created in SonarQube. Example: `"My Project"`                            | `string`     |                              |
| `key`*        | Key of the project to identify the project in SonarQube. Example: `"my-project"`                   | `string`     |                              |
| `branch`     | Name of the main branch of the project. If not provided, the default main branch will be used      | `string`     |                              |
| `visibility` | Whether the project should be visible to everyone or specific groups. Values: `"public"`, `"private"` | `string`     |                              |
| `token`      | SonarQube authentication token. Use instead of username and password                               | `string`     |                              |
| `username`   | SonarQube username. Required if no token is provided                                                | `string`     |                              |
| `password`   | SonarQube password. Required if no token is provided                                                | `string`     |                              |

##### **Examples**
```yaml
  steps:
    - id: create-sonar-project
      name: Create SonarQube project
      action: sonarqube:create-project
      input:
        baseUrl: ${{ parameters.baseUrl }}
        token: ${{ parameters.authParams.token }}
        username: ${{ parameters.authParams.username }}
        password: ${{ parameters.authParams.password }}
        name: ${{ parameters.name }}
        key: ${{ parameters.key }}
        branch: ${{ parameters.branch }}
        visibility: ${{ parameters.visibility }}
```

##### **Outputs**
| **Key**        | **Description**                     | **Type**     |
|----------------|-------------------------------------|--------------|
| `projectUrl`   | SonarQube project URL created by this action | `string`     |

##### **Links**
- [@janus-idp/backstage-scaffolder-backend-module-sonarqube](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-sonarqube)
- [Code](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/sonarqube-actions/src/actions/createSonarQubeProject.ts)

-----


### ServiceNow Scaffolder Actions

#### `servicenow:now:table:createRecord`
Action for Backstage's Scaffolder, allowing users to insert a record into a specified ServiceNow.

##### **Input**

| Parameter Name                |              Type              | Required | Description                                                                                |
| ----------------------------- | :----------------------------: | :------: | ------------------------------------------------------------------------------------------ |
| `tableName`                   |            `string`            |   Yes    | Name of the table in which to save the record                                              |
| `requestBody`                 | `Record<PropertyKey, unknown>` |    No    | Field name and the associated value for each parameter to define in the specified record   |
| `sysparmDisplayValue`         | `enum("true", "false", "all")` |    No    | Return field display values (true), actual values (false), or both (all) (default: false)  |
| `sysparmExcludeReferenceLink` |           `boolean`            |    No    | True to exclude Table API links for reference fields (default: false)                      |
| `sysparmFields`               |           `string[]`           |    No    | An array of fields to return in the response                                               |
| `sysparmInputDisplayValue`    |           `boolean`            |    No    | Set field values using their display value (true) or actual value (false) (default: false) |
| `sysparmSuppressAutoSysField` |           `boolean`            |    No    | True to suppress auto generation of system fields (default: false)                         |
| `sysparmView`                 |            `string`            |    No    | Render the response according to the specified UI view (overridden by sysparm_fields)      |

##### **Output**

| Name     |              Type              | Description                      |
| -------- | :----------------------------: | -------------------------------- |
| `result` | `Record<PropertyKey, unknown>` | The response body of the request |

##### **Links**
- [@janus-idp/backstage-scaffolder-backend-module-servicenow](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow)
- [Code](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/servicenow-actions/src/actions/servicenow/now/table/create-record.ts)

-----


#### `servicenow:now:table:deleteRecord`
Action for deleting a record from a ServiceNow table.

##### **Inputs**
| Parameter Name         |   Type    | Required | Description                                                       |
| ---------------------- | :-------: | :------: | ----------------------------------------------------------------- |
| `tableName`            | `string`  |   Yes    | Name of the table in which to delete the record                   |
| `sysId`                | `string`  |   Yes    | Unique identifier of the record to delete                         |
| `sysparmQueryNoDomain` | `boolean` |    No    | True to access data across domains if authorized (default: false) |

##### **Outputs**
None

##### **Links**
- [@janus-idp/backstage-scaffolder-backend-module-servicenow](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow)
- [Code](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/servicenow-actions/src/actions/servicenow/now/table/delete-record.ts)

-----


#### `servicenow:now:table:modifyRecord`
Action handler that modifies a record in a ServiceNow table.

##### **Input**

| Parameter Name                |              Type              | Required | Description                                                                                |
| ----------------------------- | :----------------------------: | :------: | ------------------------------------------------------------------------------------------ |
| `tableName`                   |            `string`            |   Yes    | Name of the table in which to modify the record                                            |
| `sysId`                       |            `string`            |   Yes    | Unique identifier of the record to modify                                                  |
| `requestBody`                 | `Record<PropertyKey, unknown>` |    No    | Field name and the associated value for each parameter to define in the specified record   |
| `sysparmDisplayValue`         | `enum("true", "false", "all")` |    No    | Return field display values (true), actual values (false), or both (all) (default: false)  |
| `sysparmExcludeReferenceLink` |           `boolean`            |    No    | True to exclude Table API links for reference fields (default: false)                      |
| `sysparmFields`               |           `string[]`           |    No    | An array of fields to return in the response                                               |
| `sysparmInputDisplayValue`    |           `boolean`            |    No    | Set field values using their display value (true) or actual value (false) (default: false) |
| `sysparmSuppressAutoSysField` |           `boolean`            |    No    | True to suppress auto generation of system fields (default: false)                         |
| `sysparmView`                 |            `string`            |    No    | Render the response according to the specified UI view (overridden by sysparm_fields)      |
| `sysparmQueryNoDomain`        |           `boolean`            |    No    | True to access data across domains if authorized (default: false)                          |

##### **Output**

| Name     |              Type              | Description                      |
| -------- | :----------------------------: | -------------------------------- |
| `result` | `Record<PropertyKey, unknown>` | The response body of the request |

##### **Links**
- [@janus-idp/backstage-scaffolder-backend-module-servicenow](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow)
- [Source Code](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/servicenow-actions/src/actions/servicenow/now/table/modify-record.ts))

-----


#### `servicenow:now:table:retrieveRecord`
Action handler that retrieves a record in a ServiceNow table.

##### **Input**

| Parameter Name                |              Type              | Required | Description                                                                               |
| ----------------------------- | :----------------------------: | :------: | ----------------------------------------------------------------------------------------- |
| `tableName`                   |            `string`            |   Yes    | Name of the table from which to retrieve the record                                       |
| `sysId`                       |            `string`            |   Yes    | Unique identifier of the record to retrieve                                               |
| `sysparmDisplayValue`         | `enum("true", "false", "all")` |    No    | Return field display values (true), actual values (false), or both (all) (default: false) |
| `sysparmExcludeReferenceLink` |           `boolean`            |    No    | True to exclude Table API links for reference fields (default: false)                     |
| `sysparmFields`               |           `string[]`           |    No    | An array of fields to return in the response                                              |
| `sysparmView`                 |            `string`            |    No    | Render the response according to the specified UI view (overridden by sysparm_fields)     |
| `sysparmQueryNoDomain`        |           `boolean`            |    No    | True to access data across domains if authorized (default: false)                         |

##### **Output**

| Name     |              Type              | Description                      |
| -------- | :----------------------------: | -------------------------------- |
| `result` | `Record<PropertyKey, unknown>` | The response body of the request |

- [@janus-idp/backstage-scaffolder-backend-module-servicenow](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow)
- [Source Code](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/servicenow-actions/src/actions/servicenow/now/table/retrieve-record.ts))

-----


#### `servicenow:now:table:retrieveRecords`
Action handler that retrieves records in a ServiceNow table.

##### **Inputs**

| Parameter Name                    |              Type              | Required | Description                                                                               |
| --------------------------------- | :----------------------------: | :------: | ----------------------------------------------------------------------------------------- |
| `tableName`                       |            `string`            |   Yes    | Name of the table from which to retrieve the records                                      |
| `sysparmQuery`                    |            `string`            |    No    | An encoded query string used to filter the results                                        |
| `sysparmDisplayValue`             | `enum("true", "false", "all")` |    No    | Return field display values (true), actual values (false), or both (all) (default: false) |
| `sysparmExcludeReferenceLink`     |           `boolean`            |    No    | True to exclude Table API links for reference fields (default: false)                     |
| `sysparmSuppressPaginationHeader` |           `boolean`            |    No    | True to suppress pagination header (default: false)                                       |
| `sysparmFields`                   |           `string[]`           |    No    | An array of fields to return in the response                                              |
| `sysparmLimit`                    |             `int`              |    No    | The maximum number of results returned per page (default: 10,000)                         |
| `sysparmView`                     |            `string`            |    No    | Render the response according to the specified UI view (overridden by sysparm_fields)     |
| `sysparmQueryCategory`            |            `string`            |    No    | Name of the query category (read replica category) to use for queries                     |
| `sysparmQueryNoDomain`            |           `boolean`            |    No    | True to access data across domains if authorized (default: false)                         |
| `sysparmNoCount`                  |           `boolean`            |    No    | Do not execute a select count(\*) on table (default: false)                               |

##### **Outputs**
| Name     |              Type              | Description                      |
| -------- | :----------------------------: | -------------------------------- |
| `result` | `Record<PropertyKey, unknown>` | The response body of the request |

##### **Links**
- [@janus-idp/backstage-scaffolder-backend-module-servicenow](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow)

-----


#### `servicenow:now:table:updateRecord`
Action handler that updates a record in a ServiceNow table.

##### **Inputs**
| Parameter Name                |              Type              | Required | Description                                                                                |
| ----------------------------- | :----------------------------: | :------: | ------------------------------------------------------------------------------------------ |
| `tableName`                   |            `string`            |   Yes    | Name of the table in which to update the record                                            |
| `sysId`                       |            `string`            |   Yes    | Unique identifier of the record to update                                                  |
| `requestBody`                 | `Record<PropertyKey, unknown>` |    No    | Field name and the associated value for each parameter to define in the specified record   |
| `sysparmDisplayValue`         | `enum("true", "false", "all")` |    No    | Return field display values (true), actual values (false), or both (all) (default: false)  |
| `sysparmExcludeReferenceLink` |           `boolean`            |    No    | True to exclude Table API links for reference fields (default: false)                      |
| `sysparmFields`               |           `string[]`           |    No    | An array of fields to return in the response                                               |
| `sysparmInputDisplayValue`    |           `boolean`            |    No    | Set field values using their display value (true) or actual value (false) (default: false) |
| `sysparmSuppressAutoSysField` |           `boolean`            |    No    | True to suppress auto generation of system fields (default: false)                         |
| `sysparmView`                 |            `string`            |    No    | Render the response according to the specified UI view (overridden by sysparm_fields)      |
| `sysparmQueryNoDomain`        |           `boolean`            |    No    | True to access data across domains if authorized (default: false)                          |

##### **Outputs**
| Name     |              Type              | Description                      |
| -------- | :----------------------------: | -------------------------------- |
| `result` | `Record<PropertyKey, unknown>` | The response body of the request |

##### **Links**
- [@janus-idp/backstage-scaffolder-backend-module-servicenow](https://www.npmjs.com/package/@janus-idp/backstage-scaffolder-backend-module-servicenow)

-----


### Slack Scaffolder Actions

#### `slack:sendMessage:conversation`
Action for sending Slack messages to a specific conversation using the Slack API.

##### **Inputs**
| **Key**               | **Description**                                                                                   | **Type**    | **Example** |
|-----------------------|---------------------------------------------------------------------------------------------------|-------------|-------------|
| `message`*             | The message to send via webhook.                                                                  | `string`    |             |
| `conversationId`       | The ID of the conversation to send the message to. If both conversation ID and name are specified, the ID will be used. | `string`    |             |
| `conversationName`     | The name of the conversation to send the message to. Used only if the conversation ID is not specified. | `string`    |             |
| `token`               | The token to authenticate with the Slack API. This can be specified in the app config or the input. | `string`    |             |

##### **Examples**
```yaml
  - id: send-slack-message
    name: Send slack message via Slack API
    action: slack:sendMessage:conversation
    input:
      message: "Hello, world!"
      conversationId: "abc123" # optional if the conversationId is supplied in the app-config.yaml, or the conversationName is supplied at all
      conversationName: "general" # optional if the conversationName is supplied in the app-config.yaml, or the conversationId is supplied at all
```

##### **Outputs**

| **Key**       | **Description**                                                                     | **Type**       |
|---------------|-------------------------------------------------------------------------------------|----------------|
| `conversationIdToUse` | The ID of the conversation that the message is being sent to.                  | `string`       |
| `result`      | The result object containing the response from Slack's `postMessage` API.             | `ChatPostMessageResponse` |

##### **Links**
- [Code](https://github.com/arhill05/backstage-plugin-scaffolder-backend-module-slack/blob/main/src/actions/slack/send-slack-message-via-slack-api.ts))
- [@mdude2314/backstage-plugin-scaffolder-backend-module-slack](https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-backend-module-slack)

-----


#### `slack:sendMessage:webhook`
Action that sends a message to Slack via a webhook URL.

##### **Inputs**
| **Key**        | **Description**                                                                    | **Type**   | **Example** |
|----------------|------------------------------------------------------------------------------------|------------|-------------|
| `message`*      | The message to send via the webhook                                                | `string`   |             |
| `webhookUrl`   | The webhook URL to send the request to. Can be passed as input or from the config.  | `string`   |             |

##### **Examples**
```yaml
 steps:
    # this step is an example of using the webhook action
    - id: send-slack-message
      name: Send slack message via Slack webhook
      action: slack:sendMessage:webhook
      input:
        message: "Hello, world!"
        webhookUrl: "https://example.com" # optional if the URL is supplied in the app-config.yaml
```

##### **Outputs**
None

##### **Links**
- [@mdude2314/backstage-plugin-scaffolder-backend-module-slack](https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-backend-module-slack)

-----


### Sentry Scaffolder Actions

#### `sentry:create-project`
Action to create a new project in Sentry.

##### **Inputs**

| Key                  | Description                                                                           | Type   | Example |
|----------------------|---------------------------------------------------------------------------------------|--------|---------|
| `organizationSlug`*   | The slug of the organization the team belongs to                                      | string |         |
| `teamSlug`*           | The slug of the team to create a new project for                                     | string |         |
| `name`*               | The name for the new project                                                          | string |         |
| `slug`               | Optional slug for the new project. If not provided, a slug is generated from the name | string |         |
| `authToken`          | Authenticate via bearer auth token. Requires scope: project:write                    | string |         |

##### **Examples**

```yaml
steps:
  - id: create-sentry-project
    action: sentry:project:create
    name: Create a Sentry project with provided project slug.
    input:
      organizationSlug: my-org
      teamSlug: team-a
      name: Scaffolded project A
      slug: scaff-proj-a
      authToken: a14711beb516e1e910d2ede554dc1bf725654ef3c75e5a9106de9aec13d5df96
```

This YAML configuration outlines a step for creating a Sentry project.

##### **Outputs**

| Key  | Description                               | Type   |
|------|-------------------------------------------|--------|
| `id` | The ID of the created project in Sentry  | string |
| `result` | The result object returned from Sentry  | object |

##### **Links**
- [Code](https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-sentry
- [Code](https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend-module-sentry/src/actions/createProject.ts))

-----


### Torque Scaffolder Actions

#### `torque:create-app`
Action for managing applications in Torque.

##### **Inputs**
| Key                | Description                                                 | Type               | Example |
|--------------------|-------------------------------------------------------------|--------------------|---------|
| `serviceName`*      | The name of the service that will be created in Torque      | `string`           |         |
| `assetRepo`*        | The asset repo that will be connected to Torque             | `string`           |         |
| `blueprintRepo`*    | The blueprints repo that will be connected to Torque        | `string`           |         |
| `namespace`*        | The namespace of the environment runner                     | `string`           |         |
| `blueprintName`*    | The name of a blueprint that will be a source for sandbox environment | `string`           |         |
| `serviceAccount`    | A service account to be used for connecting to the execution host | `string`           |         |
| `repoType`         | The type of repository (e.g., GitHub or Bitbucket)         | `string`           |         |

##### **Examples**
```yaml
  - name: Deploy with Torque
    id: torque-app-id
    action: torque:create-app
    input:
      serviceName: ${{ parameters.componentName }} # The name of service that will be created in Torque. 
      # Will be used as space, assets repo, blueprint repo and grain names
      assetRepo: ${{ steps.publish.output.remoteUrl }} # The asset repo that will be connected to Torque
      blueprintRepo: ${{ steps.publish.output.remoteUrl }} # The blueprints repo that will be connected to Torque
      serviceAccount: 'default' # A k8s service account to assign to agent
      namespace: default # A k8s namespace to assign to agent
      blueprintName: ${{ parameters.componentName }} # The name of a blueprint you that will be a source for sandbox environment
```

##### **Outputs**

| Key               | Description                                                  | Type               |
|-------------------|--------------------------------------------------------------|--------------------|
| `success`         | Indicates whether the operation was successful               | `boolean`          |
| `error`           | Contains error details if the operation failed               | `string | null`    |
| `environmentId`   | The ID of the created sandbox environment                    | `string`           |
| `spaceName`       | The name of the created space                                 | `string`           | 

##### **Links**
- [@qtorque/backstage-plugin-torque-backend](https://www.npmjs.com/package/@qtorque/backstage-plugin-torque-backend)
- [Code](https://github.com/QualiTorque/torque-backstage-plugin/blob/main/packages/torque-backend/src/actions/create-app.ts)

-----


### Webex Scaffolder Actions

#### `webex:webhooks:sendMessage`
Action that sends messages to Webex Incoming Webhooks.

##### **Inputs**
| Key       | Description                                     | Type                               | Example |
|-----------|-------------------------------------------------|------------------------------------|---------|
| format    | The message content format                       | `enum` ('text', 'markdown')       |         |
| message*   | The message to send via webhook(s)              | `string`                           |         |
| webhooks*  | The Webex Incoming Webhooks to send a message to| `string[]` (non-empty array)      |         |

##### **Examples**
Once the action is registered, you can use it in your scaffolder templates to send messages via Webex Incoming Webhooks.

Here's an example template:
```yaml
spec:
  steps:
    - id: send-webex-message
      name: Send Webex Message
      action: webex:webhooks:sendMessage
      input:
        format: "markdown"
        message: "# This Could Be Us"
        webhooks:
          - "https://webexapis.com/v1/webhooks/incoming/<SPACE_ID>"
          - "https://webexapis.com/v1/webhooks/incoming/<SPACE_ID>" # optional ability to message multiple spaces
```

##### **Outputs**
| Key            | Description                             | Type              |
|----------------|-----------------------------------------|-------------------|
| failedMessages  | List of messages that failed to send   | `string[]`        |

##### **Links**
- [@coderrob/backstage-plugin-scaffolder-backend-module-webex](https://www.npmjs.com/package/@coderrob/backstage-plugin-scaffolder-backend-module-webex)
- [Source Code](https://github.com/Coderrob/backstage-plugin-scaffolder-backend-module-webex/blob/main/src/actions/sendWebhooksMessageAction.ts)

-----


### Yeoman Scaffolder Actions

#### `run:yeoman`
Action that runs a Yeoman generator.

##### **Inputs**
| Key       | Description                                            | Type        | Example |
|-----------|--------------------------------------------------------|-------------|--------|
| `namespace`* | Yeoman generator namespace, e.g: node:app           | `string`    |        |
| `args`    | Arguments to pass on to Yeoman for templating         | `array`     |        |
| `options` | Options to pass on to Yeoman for templating           | `object`    |        |

##### **Examples**

```yaml
steps:
  - id: 'run:yeoman'
    action: 'run:yeoman'
    name: 'Running a yeoman generator'
    input:
      namespace: 'node:app'
      options:
        option1: 'value1'
        option2: 'value2'
```

This example defines a step in a process that involves running a Yeoman generator.
The input to this action includes the `namespace` set to `'node:app'`, indicating which Yeoman generator to use.

##### **Outputs**
None

##### **Links**
- [Backstage Plugin](https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-yeoman)


-----

