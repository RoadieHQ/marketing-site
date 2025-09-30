---
title: Azure DevOps
publishedDate: '2022-04-04T14:00:00.0Z'
description: You can store a catalog item as YAML in a code repository in Azure DevOps and import it into the Roadie catalog.

category: catalog-source
order: 3
humanName: Azure DevOps
examples:
  - name: Component
    language: yaml
    content: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: artist-web
        description: The place to be, for great artists
        annotations:
          dev.azure.com/project-repo: roadie-demo/artist-web
          backstage.io/techdocs-ref: dir:.
      spec:
        type: website
        lifecycle: production
        owner: artist-relations-team
        system: artist-engagement-portal
        dependsOn:
          - resource:default/artists-db
        providesApis:
          - artist-api
  - name: Resource
    language: yaml
    content: |
      apiVersion: backstage.io/v1alpha1
      kind: Resource
      metadata:
        name: artists-db
        description: Stores artist details
      spec:
        type: database
        owner: artist-relations-team
        system: artist-engagement-portal
  - name: API
    language: yaml
    content: |
      apiVersion: backstage.io/v1alpha1
      kind: API
      metadata:
        name: artist-api
        description: Retrieve artist details
        annotations:
          dev.azure.com/project-repo: roadie-demo/artist-api
          backstage.io/techdocs-ref: dir:.
      spec:
        type: openapi
        lifecycle: production
        owner: artist-relations-team
        system: artist-engagement-portal
        definition: |
          openapi: "3.0.0"
          info:
            version: 1.0.0
            title: Artist API
            license:
              name: MIT
          servers:
            - url: http://artist.spotify.net/v1
          paths:
            /artists:
              get:
                summary: List all artists
  - name: System
    language: yaml
    content: |
      apiVersion: backstage.io/v1alpha1
      kind: System
      metadata:
        name: artist-engagement-portal
        description: Handy tools to keep artists in the loop
      spec:
        owner: artist-relations-team
        domain: artists
  - name: Domain
    language: yaml
    content: |
      apiVersion: backstage.io/v1alpha1
      kind: Domain
      metadata:
        name: artists
        description: Everything about artists
      spec:
        owner: artist-relations-team
---

###  Generate Azure DevOps personal access token (PAT)

In your Azure DevOps navigate to the User Settings > Tokens page in `https://dev.azure.com/<your-organization>/_usersSettings/tokens`. Within this page you can generate a token to grant Roadie access to read your entity manifest files.

1. Click 'New Token'
2. Create an access token with _at least_ repository Read permissions.

![Azure DevOps Token Options](./azure-devops-opts.webp)

### Store Azure access token as a secret in Roadie

Navigate to `https://<tenant-name>.roadie.so/administration/settings/secrets` and locate a secret with a name `AZURE_TOKEN`. Update the value of this secret with the token created in the step above.

### Create a catalog file in code repository

In one of the Azure DevOps repos in your project create a `catalog-info.yaml` with the contents shown in the panel on the right.

### Import the catalog file

Copy the URL of the catalog file you created by visiting the file in your browser and copying the url from the location bar. The URL may look like this: `https://dev.azure.com/<organization-name>/<project-name>/_git/<repo-name>?path=/catalog-info.yaml`.

Visit the import page in Roadie. `https://<tenant-name>.roadie.so/import/entity`, and paste the URL into the box. Click analyze and then import.

![import.webp](import.webp)

Now you can click on the entity link to visit the entity that you have just created.

### Next Steps
* At this point you may want to enable [auto discovery](/docs/integrations/azure-devops-provider/) using Azure DevOps, this allows Roadie to discover new catalog files as they are created.
* [Add a TechDocs page](/docs/getting-started/technical-documentation/) to the component you now have in the catalog.
