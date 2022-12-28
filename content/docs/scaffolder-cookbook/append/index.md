---
title: Append content to a file
publishedDate: '2022-12-28'
description: How to append some user defined content to a file and create a new file if it doesn't exist
---

## Template

## Actions used

- [`fetch:plain`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/fetch/template.ts)
- [`roadiehq:utils:fs:append`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/filesystem/rename.ts)
- [`publish:github:pull-request`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/publish/githubPullRequest.ts)
- [`debug:log`](https://github.com/backstage/backstage/blob/54b9f073d13d878fce652c9ec8b8cdfc5fd85c6a/plugins/scaffolder-backend/src/scaffolder/actions/builtin/debug/log.ts)

You can check the available actions if you visit `/create/actions`.


```yaml
---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: append-file-template-example
  title: Append To File template example
  description: Example template to append to a file with on the given path with the given content in the workspace.
spec:
  owner: roadie
  type: service

  parameters:
    - title: Append To File 1
      properties:
        repository:
          title: Repository name
          type: string
          description: The name of the repository
        org:
          title: Repository Organisation
          type: string
          description: The Github org that the repository is in
        path:
          title: Path
          type: string
          description: The path to the file
        content:
          title: Content
          type: string
          description: The content to append to the file
        pr_branch:
          title: PR Branch
          type: string
          description: The new branch name to make a pr from
  steps:
    - id: fetch-repo
      name: Fetch repo
      action: fetch:plain
      input:
        url: https://github.com/sblausten/sample-service/
    - id: appendFile
      name: Append To File Or Create New
      action: roadiehq:utils:fs:append
      input:
        path: ${{ parameters.path }}
        content: ${{ parameters.content }}
    - id: publish-pr
      name: Publish PR
      action: publish:github:pull-request
      input:
        repoUrl: github.com?repo=${{ parameters.repository }}&owner=${{ parameters.org }}
        branchName:  ${{ parameters.pr_branch }}
        title: Add test content to ${{ parameters.path }}
        description: Test append or create file
    - id: log-message
      name: Log PR URL
      action: debug:log
      input:
        message: 'RemoteURL: ${{ steps["publish-pr"].output.remoteUrl }}'
```