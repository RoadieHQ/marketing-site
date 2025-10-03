---
title: Adding a new check
publishedDate: '2023-05-12T21:00:00.0Z'
description: Add new check.
---

After navigating to Tech Insights → Checks page and clicking ‘Add check’ button, you’ll be asked to describe your Check as below:

### About

![About section](./create-check-about.webp)

- Give a unique name to your check
- Give a proper description about this check. This input accepts markdown

### Conditions

![Conditions section](./create-check-conditions.webp)

- Select your data source from the `Data Source` select field.
- Select your `Fact` from the `Fact` select field.
- Choose an operator
- Fill in the value for the selected operator

You can add multiple conditions to your check by clicking the `+ ADD CONDITION` button.

![Multiple Conditions](./create-check-multiple-conditions.webp)

- Select the logic between your conditions from the radio buttons
- Fill in your check the same way as in the previous step

You can test out your check by clicking the `Dry Run` button

![Dry Run](./create-check-dry-run.webp)

Select an entity that you want to test your check against.

![Try Check Result](./create-check-try-check.webp)

### Fix Link

You can provide an optional link to some documentation that explains to your users how to make this check pass.

These links can be dynamically generated from the entity that the fact relates to like so `/docs/{{metadata.namespace}}/{{kind}}/{{metadata.name}}` or you can use annotation values to complete links for external services, for instance a link to the GitHub source editor for a YAML file like so `https://github.com/{{ metadata.annotations['github.com/project-slug'] }}/edit/main/catalog-info.yaml`.

![Fix Link section](./create-check-fix-link.webp)

### Applies to

You can define filters to target which entities should this check run against
In the Applies to section you can select which entites will be included in this check and which entities will be excluded.

![Applies To section](./create-check-entity-filter.webp)

The above configuration means the Check will run against components with type library that does not have the tag infrastructure

Providing multiple selection in a single input results in an `OR` relation between the selections.
Selecting from multiple input fields(Type, Tags, Kind) end up with a relation `AND` between the fields.

For example:
Selecting `type: service, tags: infrastructure` will exclude every entity Which has type service `AND` contains an infrastructure tag. However it won't exclude services which does not contain the tag, or components that contain only the tag but they are not services.

### Save

If you are still uncertain if you want to publish the check, you can save it as a draft an publish it later.

![Check draft](./create-check-draft.webp)

Publishing a check based on [Draft Data Source](../data-sources/) will publish that Data Source as well and vice versa.

After you have added the check, make sure to refresh check results so it is taken into calculation from that moment on.

![Refresh check](./refresh-results-check.webp)
