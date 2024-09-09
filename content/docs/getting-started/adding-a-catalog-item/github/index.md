---
title: GitHub
publishedDate: '2022-04-04T14:00:00.0Z'
description: You can store a catalog item as YAML in a code repository on GitHub and import it into the Roadie catalog.

category: catalog-source
order: 1
humanName: GitHub
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
          github.com/project-slug: roadie-demo/artist-web
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
          github.com/project-slug: roadie-demo/artist-api
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

### Install the GitHub App

Installing the GitHub App will allow Roadie to access the YAML metadata files that Backstage needs to operate. Learn more about the [permissions required](/docs/integrations/github-app-permissions/).

1. Click the Administration link in the bottom left of the application.

![A link that says "Administration"](./administration-link.webp)

2. From **Settings** > **Integrations** > **GitHub**, press `INSTALL THE APP`.

![A button that says "Add GitHub App"](./add-github-app.webp)

4. Choose your GitHub organization and follow the steps to install the app.

### Upload a catalog item to a repository

In one of the GitHub repos in your project create a `catalog-info.yaml` with the contents shown in the panel on the right.

### Import the catalog file

Copy the URL of the catalog file you created by visiting the file in your browser and copying the url from the location bar. The URL may look like this: `https://github.com/<org-name>/<repo-name>/blob/<branch-name>/catalog-info.yaml`.

Visit the import page in Roadie. `https://<your tenant>.roadie.so/import/entity`, and paste the URL into the box. Click analyze and then import.

![Import](import.webp)

Now you can click on the entity link to visit the entity that you have just created.

### Next Steps

* [Configure auto-discovery](/docs/integrations/github-discovery/) so that Roadie can automatically discover and import catalog-info.yaml files.
* [Explore the Getting Started Repo](https://github.com/roadie-demo/getting-started/tree/main) for examples of scaffolder templates.
* [Use a scaffolder template](https://github.com/roadie-demo/getting-started/tree/main/scaffolder/register-new-component) to give users a streamlined interface that they can use to generate the YAML file you used earlier in this tutorial.
* [Add a TechDocs page](/docs/getting-started/technical-documentation/) to the component you now have in the catalog.
