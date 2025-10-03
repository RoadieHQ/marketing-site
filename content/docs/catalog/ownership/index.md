---
title: Ownership in Backstage Entities
publishedDate: '2023-05-11T14:49:47.0Z'
description: How ownership works in Backstage
---

Ownership of an entity should be a single reference to a person or team primarily responsible for that entity.

It is represented in Backstage by the [`spec.owner` field](https://backstage.io/docs/features/software-catalog/descriptor-format/#specowner-required) using a user or team [entity reference](https://backstage.io/docs/features/software-catalog/references/#string-references) in the following pattern `[<kind>:][<namespace>/]<name>` like so:

- `group:roadiehq/engineering-team`
- `user:default/davidtuite`

The kind and namespace are both optional and default to the kind of the entity itself, and the `default` namespace.

Compound entity refs can be specified if special characters are in any of the three references like so:

```yaml
spec:
  owner:
    kind: Group
    namespace: default
    name: finance:international/legal
```

### Using a Code Owners file

Code Owners is an approach to defining ownership of a repository or section of code by using a file that lives alongside that code.

This `CODEOWNERS` file can be used by Roadie Backstage to decorate ownership automatically on entities rather than manually defining ownership in the entity spec definition. This is achieved through the CodeOwnersProcessor in Backstage.

Most major SCM providers will look for a file at `./CODEOWNERS`, `./docs/CODEOWNERS`, or `./.<scm-name>/CODEOWNERS`. See [Github](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) and [Gitlab](https://docs.gitlab.com/ee/user/project/codeowners/) docs here.

This approach to defining ownership of an entity in Backstage is preferable only if your CODEOWNERS file is kept up to date and is accurate. Otherwise it may be better to define ownership in the entity definition so users can know where to go to update it. Codeowners decoration is opaque in Backstage currently, so it may be difficult to know where the source of an Entity's ownership is coming from unless you are aware of the CODEOWNERS file.

Roadie will attempt to use a value from the CODEOWNERS file if an entity doesn't have an owner field with a value or the value is an empty string. If you want to force the usage of a CODEOWNERS file even if an entity already has an owner defined, you can add an annotation `roadie.io/use-codeowners` with a value `true` to the entity and it will always default to use the CODEOWNERS file.
