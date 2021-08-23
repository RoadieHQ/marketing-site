---
title: Plugins migration to monorepo
date: '2021-08-23T16:00:00.0Z'
description:  Major change in the way we handle our plugins.
author:
  name: Irma Solakovic
tags: ['updates']
---

Contributing to the Backstage community has been one of the top goals in our roadmap. We have focused on developing plugins for developers with the goal of making their job more efficient. Over time, we produced multiple plugins contained within their own repositories. This is sometimes referred to as a multirepo approach as opposed to a monorepo with a single repository that contains multiple plugins. Our multirepo setup was a reasonable approach to begin with.

Although a number of teams have embraced monorepos, there are reasons why we have stayed away up until now. We started to face challenges with the increasing number of plugins that we maintain. One of the main challenges was with dependency management across all of our repositories which eventually became very complex. Instead, we wanted to have an automated, simple solution that would not be so time consuming and would give us a solid ground for additional features we have in mind. So, we made a decision to migrate all of our plugins to the [RoadieHQ/backstage-roadie-plugins](https://github.com/RoadieHQ/backstage-roadie-plugins) monorepo.

## Improvements

There are a number of improvements we introduced by moving to monorepo.

# 1) Better control of dependency management.

As mentioned previously, we wanted to simplify internal and third-party dependency management. Having plugins in different repositories raised concerns about having diamond dependency conflicts and challenges of having different versions of the same dependency in different repositories.

Testing specific versions of a dependency is easier because it gives us the ability to test for breaking changes and backwards compatibility across the entire codebase when an update is needed. It is easier and faster to follow Backstage team updates so that we can make sure our plugins work with the latest versions of the Backstage packages.
# 2) Better visibility of all the plugins.

It is easier for contributors to test against other plugins and possibly make multiple plugin changes in a single commit or pull request. It can also help encourage more collaboration and code reuse.
# 3) One place to store all configs and tests.

We can reuse and improve CI/CD configuration and tests across all of our plugins at the same time without needing to have  separate and sometimes duplicated configuration per plugin.

# 4) Easier to keep track of upstream updates.

We created a workflow that runs periodically to check for updates from the Backstage team. The workflow automatically creates a pull request with updates to the package versions for all of the plugins. The workflow also runs checks to ensure everything works as expected once the changes are merged to the main branch.

## Challenges

The monorepo approach is not withouts its challenges. We believed we would stumble across a few, especially in terms of building and publishing packages.

# 1) Build Pipelines

Ensuring builds are efficient and practical is a challenge regardless of the team size or codebase. The monorepo approach results in a lot of source code in one place. We recognized that it may take more time for CI to run all required tasks in order to approve every pull request. Ultimately, we did not see a substantial increase to build time for our monorepo..

# 2) Manage publishing of the packages

Although all plugins are contained within a single source code repository, each plugin is individually published to NPM. We needed a tool that would allow us to publish multiple packages but also optimize the workflow to ensure only packages that have changes are published.

We decided to use [Lerna](https://lerna.js.org/) to manage our monorepo. We settled on a semi-automatic build and publish workflow. The package versioning is done manually and the publishing is done automatically. Lerna helps with detecting changes in the packages and only publishes the ones that have updated versions.

## Conclusion

All of the plugins we developed and maintain are gradually being migrated to the [RoadieHQ/backstage-roadie-plugins](https://github.com/RoadieHQ/backstage-roadie-plugins) repository.

Plugin users will not notice any difference with how they consume our plugins from NPM. This migration does make a difference for plugin contributors. You can read more about contributing in our [CONTRIBUTING.md](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/CONTRIBUTING.md) file.

This type of structural change is always a bit difficult at the start but we are confident it will result in a better experience for our plugin users. We always welcome contributions to our plugins and hope that this change will also make it easier to contribute.
