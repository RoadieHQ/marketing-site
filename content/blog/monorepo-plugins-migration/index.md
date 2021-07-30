---
title: Plugins migration to monorepo
date: '2021-07-30T16:00:00.0Z'
description:  Major change in the way we handle our plugins.
author:
  name: Irma Solakovic
tags: ['updates']
---

Contributing to the Backstage community has been one of the top goals in our roadmap, so we have focused on developing plugins, we have recognised as being mostly used among developers. Hence having them integrated into Backstage makes the work more efficient. This resulted in multiple plugins being contained in single repositories, or Multirepo approach, which was a good solution at the given time. 

Although a number of teams have embraced monorepos, there are reasons why we have stayed away up until now, but with the increase of the plugins there were challenges we were facing. This could be seen mostly in the term of dependency management in all of the repositories, which eventually became very time tricky. Instead, we wanted to have an automated, simple solution which wouldn't be so time consuming and would give us a solid ground for additional features we have in mind. So we made a final decision and started migrating the plugins to the https://github.com/RoadieHQ/backstage-roadie-plugins repository monorepo.

## Improvements

There are a number of improvements we introduced by moving to monorepo.

# 1) Better control of dependency management.

As mentioned previously, we wanted to simplify internal and third-party dependency management. Having plugins in different repositories raised concerns about having diamond dependency problem and challenges of having different versions of the same dependency in different repositories.

With the monorepo approach, testing specific version of dependency is easier because it gives us the ability to test for breaking changes and backwards compatibility across entire codebase when an update is needed. Having that said, it becomes easier and faster to make sure we follow Backstage team updates, and respond to the changes faster, making sure our plugins work with the latest versions of the Backstage packages.

# 2) Better visibility of all the plugins.

In the new monorepo, all plugins are included in the same repository. This means it is easier for contributors to test against other plugins and possibly make multiple plugins changes in the single commit. Hopefully this encourages collaboration and code reuse.

# 3) One place to store all configs and tests.

Since all the plugins are located inside this monorepo, improving and reusing written CI/CD configuration and tests (without additional configs per plugin) is working out-of-the-box.

# 3) Easier to keep track of upstream updates.

We created workflow running periodically to check for the updates from Backstage team and automatically create PR which updates the package version in all of the plugins.

## Challenges

We have been stumbled upon several challenges along the path, especially in the term of build and effective pipelines. Also, having several packages/plugins published on https://www.npmjs.com/ meant we need to make sure publishing will work.

# 1) Build Pipelines

Ensuring builds are efficient and practical is a challenge regardless of the team-size or code base. Because we will be having a lot of source code in one place, we understand it may take more time for CI to run everything in order to approve every PR. However, we still believe this isn't significally reflected in our case.

We have created separate workflows for automated check for updates from Backstage team, creating PRs and running checks in order to check everything works as expected once it is merged to main branch and published. Publishing is also handled separately.


# 2) Manage publishing of the packages

We have decided to use https://lerna.js.org/ for managing and publishing packages as we needed a tool which will optimize the workflow and this seemed as a good solution for us.

We settled with semi-automatic process for this, so package versioning is done manually and publish is done automatically. Lerna helps with detecting changes in the packages and only publish the ones with the updated versions. 

## Conclusion

All of the plugins we developed and maintain are being gradually migrated to the https://github.com/RoadieHQ/backstage-roadie-plugins repository.

All of the plugins published on https://www.npmjs.com/ will work and will remain the same for consumers of the plugins, only difference will be for the contributors, but you can read more details in https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/CONTRIBUTING.md. 

This type of changes are always a bit difficult at the start but we are confident this change will result in smoother experience for the users of the plugins and easier contributions, which we always welcome.

