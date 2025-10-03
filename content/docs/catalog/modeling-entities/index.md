---
title: Modeling Entities in the Catalog
publishedDate: '2024-08-14T14:49:47.0Z'
description: How to model your organisation in the Catalog
---

### Kinds

Your organisation can be modeled in Roadie's Catalog using a variety of different top level `Kinds` which are intended to be broad buckets

Roadie is fully compatible with all `Kinds` found on Backstage, the docs explaining the underlying schema approach can be found [here](https://backstage.io/docs/features/software-catalog/system-model/#core-entities).

### Types

Kinds are combined with a `spec.type` field that can be used to more precisely describe the category. For instance the `Component` Kind could have a type of `website` or `internal-tooling` or `external-library` to describe a wide variety of software types and contexts.

Similarly, it is common for organisations to have multiple logical groupings at higher levels like `System` and `Domain` such as "Bounded Context" or "Value Stream". These can also be modeled using `spec.type` and then displayed in their own tab on the Catalog page using our custom Catalog Tab editor.

The `spec.type` field is not constrained - you can add anything you like, but it is best practice to:

- Establish a convention such as lowercase and kebab case for new types
- Not use types that should be in a different Kind - i.e. infrastructure as code should be a series of `Resource` kinds rather than `Component` kinds with a type of `iac`.
- Agree a limited set of types for each Kind and encourage care/consensus in adding new ones (having too many, overly specific types can make them less useful sometimes as it can become harder to find things)
- Clean up duplicates with different formating regularly by checking available select options for the type filter on Catalog pages

### Available Kinds

| Kind      | [Metadata Fields](https://backstage.io/docs/features/software-catalog/descriptor-format/#common-to-all-kinds-the-metadata) (\* required) | [Spec Fields](https://backstage.io/docs/features/software-catalog/descriptor-format/#contents) (\* required) | Available `spec` Relationships                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Component | name\*,namespace,title,description,annotations,labels,tags,links                                                                         | type*,lifecycle*                                                                                             | owner\*,system,dependsOn,dependencyOf,providesApis,consumesApis,subcomponentOf,hasPart,partOf |
| Resource  | ""                                                                                                                                       | type\*                                                                                                       | owner\*,system,dependsOn,dependencyOf,hasPart,partOf                                          |
| API       | ""                                                                                                                                       | type*,lifecycle*,definition\*                                                                                | owner\*,system,dependsOn,dependencyOf,partOf                                                  |
| Template  | ""                                                                                                                                       | type\*,parameters,steps                                                                                      | owner                                                                                         |
| System    | ""                                                                                                                                       | type                                                                                                         | owner,domain,dependsOn,dependencyOf,parentOf,childOf,hasPart,partOf                           |
| Domain    | ""                                                                                                                                       | type                                                                                                         | owner,subdomainOf,dependsOn,dependencyOf,parentOf,childOf,hasPart,partOf                      |
| Product   | ""                                                                                                                                       | type                                                                                                         | owner,system,dependsOn,dependencyOf,parentOf,childOf,hasPart,partOf,managedBy                 |
| User      | ""                                                                                                                                       | profile                                                                                                      | memberOf\*,managedBy,manages                                                                  |
| Group     | ""                                                                                                                                       | type\*,profile                                                                                               | members,managedBy,children\*,parent                                                           |

More information on relationships can be found [here](../showing-dependencies)

### Further Reading

- Backstage Docs on their base Kinds and entity formats - [https://backstage.io/docs/features/software-catalog/descriptor-format](https://backstage.io/docs/features/software-catalog/descriptor-format)
- [How to add entities and use them in Roadie](../../getting-started/adding-a-catalog-item)
