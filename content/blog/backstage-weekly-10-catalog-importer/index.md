---
title: Backstage Weekly 10 - Easier service onboarding
date: '2020-11-23T21:00:00.0Z'
description: Onboard your services to Backstage by using the GitHub repo importer that Roadie has developed and contributed.
---

The Backstage service catalog can unlock productivity gains across your entire engineering organization. However, it's only useful when the catalog data is complete and correct. Users who search Backstage for services and come up empty will be less likely to continue using it.

For this reason, it must be easy to onboard onto Backstage and get services into the catalog.

With this in mind, Roadie is developing and contributing an improved GitHub repo importer for Backstage.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fD1mUJ2GYfI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Once this feature is merged and released ([#3121](https://github.com/backstage/backstage/pull/3121)), simply navigate to `/catalog-import` in Backstage and paste in the URL of a GitHub repo you'd like to import.

Backstage will automatically open a pull request against the repo to add a `catalog-info.yaml` file. Merge that and the component will appear in the Backstage catalog.

There's still a ton of work to do to make this even easier to use.

Planned work includes a host of repo processors which will make sensible guesses about what your repos contain and who owns them. If your repo is mostly HTML and CSS, it's probably a website. If it only has one main contributor, they are probably the owner. There are countless ways that automation work in this area can help Backstage be authoritative and trustworthy.

Please try this out and send any comments to `feedback@roadie.io`.

## Merged last week...

56 pull requests were merged last week. Here are the highlights...

### Add configuration schema support

Backstage's flexible plugin framework is a huge part of its power. But different plugins need different configuration, and it can get complex when you use many plugins at the same time.

[#3264](https://github.com/backstage/backstage/pull/3264) provides the ability for plugins to define a configuration schema. When this is used, users can use the CLI to validate their Backstage config to ensure they have provided all the config that each plugin needs.

Not only does this mean fewer runtime errors, it also unlocks interesting features like editor autocompletion for Backstage config files ([#3366](https://github.com/backstage/backstage/issues/3366)).

The docs for Backstage configuration have been updated and are available [here](https://backstage.io/docs/conf/defining).

### Microsoft Graph

Oliver Sand from SDA-SE added an integration with the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview) and Azure AD. This allows Backstage to directly import data about employees and the teams they are part of.

In future, you'll be able to assign ownership of services to the teams they who maintain them, all powered by data from Azure AD. [#3293](https://github.com/backstage/backstage/pull/3293)

### The stability index is live

[Documentation](https://backstage.io/docs/overview/stability-index) which shows the stability of various Backstage components has been added. Stability is communicated with a number, with higher numbers inferring increased stability.

For example, you should expect frequent breaking changes if you use the `catalog-client` package because it has a stability index of 0.

The `core` package on the other hand has a stability index of 2. This means you can expect a 2 week deprecation period before breaking changes occur.

The Backstage team is laser focussed on stability and reliability at the moment and this is part of that effort.

## Roadie news

We also dropped a [Buildkite plugin](https://roadie.io/backstage/plugins/buildkite) recently. It works just like the existing plugins for CI tools like CircleCI and GitHub Actions.

A JIRA plugin is on the way and something for ArgoCD is in development.
