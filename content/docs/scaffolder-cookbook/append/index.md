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
  name: append-to-file-template
  title: Append To File template example
  description: Template to append content to a file in a repo and raise a PR for the change. NB - This will create a new file if a file does not exist at the path given.
spec:
  owner: roadie
  type: service

  parameters:
    - title: PR Data
      properties:
        repository:
          title: Repository name
          type: string
          description: The name of the repository
        org:
          title: Repository Organisation
          type: string
          description: The Github org that the repository is in
        pr_branch:
          title: PR Branch
          type: string
          description: The new branch to make a pr from
    - title: Append content
      properties:
        path:
          title: Path
          type: string
          description: The path to the file you want to append this content to in the scaffolder workspace
        content:
          title: Text area input
          type: string
          description: Add your new entity
          ui:widget: textarea
          ui:options:
            rows: 10
          ui:help: 'Make sure it is valid by checking the schema at `/tools/entity-preview`'
          ui:placeholder: |

            ---
            apiVersion: backstage.io/v1alpha1
              kind: Component
              metadata:
                name: backstage
              spec:
                type: library
                owner: CNCF
                lifecycle: experimental
  steps:
    - id: fetch-repo
      name: Fetch repo
      action: fetch:plain
      input:
        url: https://github.com/${{ parameters.org }}/${{ parameters.repository }}
    - id: append-file
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
        title: Add entity to ${{ parameters.path }}
        description: PR created from Roadie Backstage scaffolder
    - id: log-message
      name: Log PR URL
      action: debug:log
      input:
        message: 'PR url: ${{ steps["publish-pr"].output.remoteUrl }}'
```