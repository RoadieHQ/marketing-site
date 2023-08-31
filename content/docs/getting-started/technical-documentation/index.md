---
title: Using Tech Docs
publishedDate: '2022-01-30T21:00:00.0Z'
updatedAt: '2022-02-21T13:00:00.0Z'
description: How to add technical documentation to components tracked in Backstage.
---

## Introduction

The Tech Docs feature of Roadie Backstage allows markdown files written alongside the code of your components to appear in Backstage as styled HTML documentation. Because this documentation is centralized in Backstage, it is more likely to be found and used by other people in your organization.

![a page of basic documentation for a service in the Backstage service catalog](./sample-service-docs-backstage.png)

## Adding documentation to a component

Under the hood, Backstage uses the popular [MkDocs library](https://www.mkdocs.org/) to render documentation.

## Prerequisites
In order to write and view changes to docs you will need to install:

- NodeJS: You will need an active [LTS release of NodeJS](https://nodejs.org/en/about/releases/).
- Docker: Please refer to the [installation instructions for Docker](https://docs.docker.com/engine/install/).
- npx: `npm install -g npx`

### Step 1: Add the MkDocs configuration file

Create a file called `mkdocs.yml` in the root of a component you want to document in Backstage. Inside that YAML file, add the following content, replacing `{component-name}` with the human name of your component. 

```yaml
site_name: '{component-name}'

plugins:
  - techdocs-core

# Uncomment to add extensions if desired
#markdown_extensions:
#  - markdown_inline_mermaid
```

Note that `techdocs-core` plugin is automatically added to Roadie tech docs build and can be omitted from the plugins list if wanted.

### Step 2: Add markdown documentation

Create a directory called `docs` in the root of your component. Inside that directory, create a file called `index.md` with some markdown content inside. No frontmatter is required.

```markdown
This is the documentation.
```

Your component's directory structure should now look something like this:

```
├── README.md
├── catalog-info.yaml
├── docs
│   └── index.md
├── mkdocs.yml
└── src
    └── // The code of your component
```

Ensure you publish this new content to GitHub.

### Step 3: Update the YAML metadata

We can use the `catalog-info.yaml` file of our component to tell Backstage where to find the documentation.

To do this, add the `backstage.io/techdocs-ref` annotation to the list of annotations. 

If your docs are in the root of the repo, as described above, you can set the tech docs annotation to this:

```yaml
annotations:
  backstage.io/techdocs-ref: dir:.
```

If your docs are located elsewhere, you must explicitly point to them like this:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service
  description: # ...
  annotations:
    backstage.io/techdocs-ref: url:https://github.com/your-org/your-repo/tree/main
spec:
  type: service
  owner: engineering
  lifecycle: experimental
```

⚠️  The GitHub URL **must** be prefixed with `url:` or the documentation will not render in Backstage.

### Step 4: Test your documentation
You can generate / serve your docs locally to view what they would look like when they are deployed to Roadie.

To generate the docs to the site directory of the project you can run the following command:

```bash
npx @techdocs/cli generate --docker-image roadiehq/techdocs
```

To start a local server at port 3000 containing the generated docs, you can run the following command:
```bash
npx @techdocs/cli serve --docker-image roadiehq/techdocs
```

NB: We have seen some issues generating and serving plantuml and mermaid diagrams sometimes on M1 Macbooks due to unresolved 
bugs in open source dependencies. Please reach out to us anyway if you run into any difficulties.

### Step 5: Publish your documentation

Commit the changes made in steps 1 through 3 to your repository. Roadie Backstage will pick up the changes shortly after they are merged to the default branch.

## Viewing documentation in Backstage

To view your documentation in Backstage, first find the service in your service catalog and click it to open the Overview page.

On the Overview page, click Docs in the tab bar. You should now see your documentation.

![a page of basic documentation for a service in the Backstage service catalog](./sample-service-docs-backstage.png)

## Adding more docs

Let's add a page called Local Development to our docs.

All that is required is to create a markdown file called `local-development.md` inside the `docs` directory of our component.

Add some content to it.

Commit and merge these changes to the default branch of your repo on GitHub and Backstage will pick up the changes after
a short period of time.

![a new page called local development with a code block and some navigation](./local-development-docs-backstage.png)

By default, the structure of the docs pages will mirror that of the file system. You can also explicitly describe your 
page structure using the `nav` object in your `mkdocs.yaml`. Both approaches are described [here](https://www.mkdocs.org/user-guide/writing-your-docs/#file-layout).

Similarly, MkDocs will determine a title for your document according to [these rules](https://www.mkdocs.org/user-guide/writing-your-docs/#meta-data).


## Troubleshooting

### Visual differences in rendered output
Backstage is using [MkDocs](https://www.mkdocs.org/user-guide/) and [python-markdown](https://python-markdown.github.io/) to render the markdown files for Tech Docs. Each markdown implementation renders HTML differently. e.g. markdown files as displayed in GitHub can often look different within Backstage Tech Docs.

### Nest Markdown in a collapsable section

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

### Nest Image within a list

If you would like to nest an image within a list so that it appears as part of the list item, you will need a line break and spacing before the image. e.g.

```markdown
- Item 1

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  ![image1](image1.jpg)

- Item 2

  ![image2](image2.jpg)
```

### Slow Tech Docs builds

Larger tech docs repositories can take some time to build when being updated or viewed for the first time. 

There are two ways around this currently:

1. Make sure your entity with the relevant tech docs annotation is listed in the root `catalog-info.yaml` file of your 
repo and the docs are in a root `docs/` folder. If this is the case AND your admins have set up the [correct autodiscovery](docs/integrations/github-discovery/#steps-to-add-new-auto-discovery-paths) 
in Roadie for Github based repositories, changes to your docs should be built when they are merged to the default repository 
branch, so you won't have to wait for docs to build when viewing them.
2. Your organisation can start [building and publishing tech docs via your own CI pipelines](#building-techdocs-via-ci) so that the latest version is always ready to view in Roadie. 

## Further reading

1. Backstage Tech Docs uses MkDocs under the hood and the [MkDocs configuration and user guide](https://www.mkdocs.org/user-guide/) will broadly apply to your Backstage documentation setup. In particular, the ["Writing your docs"](https://www.mkdocs.org/user-guide/writing-your-docs/) page is a good place to start
2. You can see the rendering rules used by the plugin here - [https://python-markdown.github.io/](https://python-markdown.github.io/) NB: they are slightly different from Github Flavoured Markdown.
3. The [official Backstage Tech Docs guide](https://backstage.io/docs/features/techdocs/techdocs-overview).

## Next steps

If you use OpenAPI specs in your organization you can [learn how to associate them with your components](/docs/getting-started/openapi-specs).
