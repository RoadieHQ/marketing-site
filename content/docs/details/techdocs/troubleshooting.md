---
title: Troubleshooting TechDocs
publishedDate: '2024-03-07'
description: Troubleshooting TechDocs
---


## Visual differences in rendered output
Backstage is using [MkDocs](https://www.mkdocs.org/user-guide/) and [python-markdown](https://python-markdown.github.io/) to render the markdown files for TechDocs. 

Each markdown implementation renders HTML differently. e.g. markdown files as displayed in GitHub can often look different within Backstage TechDocs.

Backstage uses an opinionated theme based on [material-mkdocs](https://github.com/backstage/mkdocs-techdocs-core#theme).

NB: Some styles will always be overridden regardless of the `mkdocs-material` plugin theme settings and this can cause unexpected behavior for those who override the theme setting in a `mkdocs.yaml` file.


## Plugin not working as expected
Make sure you have added the extension to the root `mkdocs.yml` file in your repo. Some are added under the `plugins` key and some under `markdown_extensions`. 

Read the docs for the plugin you are working with to find out which it is.

```yaml
...
plugins:
  - monorepo
markdown_extensions:
  - pymdownx.snippets:
      check_paths: true
... 
```

## Nest Markdown in a collapsable section

If you would like to nest markdown in a collapsable section, you can use the HTML `details` component and the `md_in_html` markdown plugin.

First add the `md_in_html` to the `mkdocs.yaml` file.

```yaml
markdown_extensions:
  - md_in_html
```

Then add the following `details` section to the markdown file.

```markdown
<details markdown="1">
<summary>Collabsable Title</summary>

Content of the collapsable and an image below

![asdf](align.jpg)

</details>
```

## Nest Image within a list

If you would like to nest an image within a list so that it appears as part of the list item, you will need a line break and spacing before the image. e.g.

```markdown
- Item 1

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  ![image1](image1.jpg)

- Item 2

  ![image2](image2.jpg)
```

## Slow TechDocs builds

Larger TechDocs repositories can take some time to build when being updated or viewed for the first time. 

There are two ways around this currently:

1. Make sure your entity with the relevant TechDocs annotation is listed in the root `catalog-info.yaml` file of your repo and the docs are in a root `docs/` folder. If this is the case AND your admins have set up the [correct autodiscovery](/docs/integrations/github-discovery/#steps-to-add-new-auto-discovery-paths) in Roadie for Github based repositories, changes to your docs should be built when they are merged to the default repository branch, so you won't have to wait for docs to build when viewing them.

2. Your organisation can start [building and publishing TechDocs via your own CI pipelines](/docs/details/techdocs/build-via-ci) so that the latest version is always ready to view in Roadie. 

