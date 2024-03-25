---
title: GitHub
publishedDate: '2022-04-04T14:00:00.0Z'
description: How to configure the GitHub to create a catalog item.

humanName: GitHub
examples:
  component:
    language: yaml
    content: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: artist-web
        description: The place to be, for great artists
      spec:
        type: website
        lifecycle: production
        owner: artist-relations-team
        system: artist-engagement-portal
        dependsOn:
          - resource:default/artists-db
        providesApis:
          - artist-api
  resource:
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
  api:
    language: yaml
    content: |
      apiVersion: backstage.io/v1alpha1
      kind: API
      metadata:
        name: artist-api
        description: Retrieve artist details
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
---

# Install the GitHub App

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Use a personal access token

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Upload a catalog item to a repository

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Import the catalog item into Roadie

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Enable auto discovery

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
