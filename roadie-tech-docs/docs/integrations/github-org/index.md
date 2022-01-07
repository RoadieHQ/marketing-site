
## Introduction

Roadie can load your organization team structure and employees from GitHub teams.

This page describes how to do that.

## Prerequisites

- You must be using *GitHub* or *Okta* for sign-in 
- You will need a git repository for the configuration of Backstage.
- You must install the Roadie GitHub app in your organisation with access to all repositories **or** The GitHub token configured in the backstage secrets must have the `read:user` and `user:email` scopes.

## Steps

1. If using Okta configure okta to return a field `githubUsername` in the ID token with profile scope & let the Roadie team know so we can configure your cluster.
2. If the name of your organization was "acme", you would create a file in the github repository called github-org.yaml with the following contents:

   ```yaml
   apiVersion: backstage.io/v1alpha1
   kind: Location
   metadata:
     name: github-organizations
     description: Configuration to load data from github teams
   spec:
     type: github-org
     targets:
       - https://github.com/acme
   ```

2. Next go to the catalog import page in backstage e.g. https://<tenant-name>.roadie.so/catalog-import
3. Enter the url to that file you created.

## Confirming it worked

Within the next couple of minutes, you should see the org structure loaded into backstage.
