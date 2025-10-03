---
title: Make a PR in Azure DevOps
publishedDate: '2024-04-25'
description: Clone a repo in Azure DevOps make changes, push and create a PR.
---

## Actions used

- [`azure:repo:clone`](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories)
- `fetch:template`
- [`azure:repo:push`](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories)
- [`azure:repo:pr`](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories)

For more information on these actions and others visit `/create/actions` in your Roadie application.

## Template

You can create a template with this content or import [from here](https://github.com/roadie-demo/scaffolder-examples/blob/main/azure-actions/template.yaml).

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: azure-repo-demo
  title: Azure Repository Test
  description: Clone and push to an Azure repository example.
spec:
  owner: roadie
  type: service

  parameters:
    - title: Fill in some steps
      required:
        - name
      properties:
        name:
          title: Project name
          type: string
          description: Choose a unique project name.
          ui:field: EntityNamePicker
          ui:autofocus: true
        sourceBranch:
          title: Source Branch
          type: string
          default: master
        remoteBranch:
          title: Remote Branch
          type: string
          default: scaffolder
  steps:
    - id: cloneAzureRepo
      name: Clone Azure Repo
      action: azure:repo:clone
      input:
        remoteUrl: 'https://roadie-demo@dev.azure.com/roadie-demo/Sample-Services/_git/sample-service'
        branch: ${{ parameters.sourceBranch }}
        targetPath: ./sub-directory

    - id: fetch
      name: Template Skeleton
      action: fetch:template
      input:
        url: ./skeleton
        targetPath: ./sub-directory
        values:
          name: ${{ parameters.name }}

    - id: pushAzureRepo
      name: Push to Remote Azure Repo
      action: azure:repo:push
      input:
        branch: ${{ parameters.remoteBranch }}
        sourcePath: ./sub-directory
        gitCommitMessage: Add ${{ parameters.name }} project files

    - id: pullRequestAzureRepo
      name: Create a Pull Request to Azure Repo
      action: azure:repo:pr
      input:
        sourceBranch: ${{ parameters.remoteBranch }}
        targetBranch: 'master'
        repoId: sample-service
        title: ${{ parameters.name }}
        project: Sample-Services
        organization: roadie-demo
        supportsIterations: false

  output:
    links:
      - title: Pull Request
        url: 'https://dev.azure.com/roadie-demo/Sample-Services/_git/sample-service/pullrequest/${{ outputs.pullRequestAzureRepo.pullRequestId}}'
```

## Further Reading

- The Azure actions [docs](https://github.com/Parfuemerie-Douglas/scaffolder-backend-module-azure-repositories)
