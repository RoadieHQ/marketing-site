---
title: GitLab
publishedDate: '2022-04-04T14:00:00.0Z'
description: You can store a catalog item as YAML in a code repository in GitLab and import it into the Roadie catalog.

category: catalog-source
order: 4
humanName: GitLab
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
          gitlab.com/project-slug: roadie-demo/artist-web
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
          gitlab.com/project-slug: roadie-demo/artist-api
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

###  Generate GitLab personal access token (PAT)

In your GitLab instance navigate to your User Settings > Access Tokens page. In GitLab cloud the URL is `https://gitlab.com/-/profile/preferences`. Within this page you can generate a token to grant Roadie access to read your entity manifest files.

1. Click 'Add new token'
2. Create an access token with _at least_ permissions `api`, `read_repository`, `write_repository`.

![GitLab](./gitlab-token-opts.webp)

### Store GitLab token as a secret in Roadie

Navigate to `https://<your-tenant>.roadie.so/administration/settings/secrets` and locate a secret with a name `GITLAB_TOKEN`. Update the value of this secret with the token created in the step above.

### Create a catalog file in code repository

In one of the GitLab repos in your project create a `catalog-info.yaml` with the contents shown in the panel on the right.

### Import the catalog file

Copy the URL of the catalog file you created by visiting the file in your browser and copying the url from the location bar. The URL may look like this: `https://gitlab.com/<group-name>/<project-name>/-/blob/main/catalog-info.yaml?ref_type=heads`.

Visit the import page in Roadie. `https://<your tenant>.roadie.so/import/entity`, and paste the URL into the box. Click analyze and then import.

![import.webp](import.webp)

Now you can click on the entity link to visit the entity that you have just created.

### Next Steps
* At this point you may want to enable [auto discovery](/docs/integrations/gitlab-provider/) using GitLab, this allows Roadie to discover new catalog files as they are created.
* [Explore the Getting Started Repo](https://gitlab.com/roadie-demo/getting-started) for examples of scaffolder templates.
* [Use a scaffolder template](https://gitlab.com/roadie-demo/getting-started/-/tree/main/scaffolder/register-new-component?ref_type=heads) to give users a streamlined interface that they can use to generate the YAML file you used earlier in this tutorial.
* [Add a TechDocs page](/docs/getting-started/technical-documentation/) to the component you now have in the catalog.
