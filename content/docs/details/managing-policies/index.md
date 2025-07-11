---
title: Managing Policies
publishedDate: '2024-11-05T21:00:00.0Z'
description: How to configure and manage policies in Roadie for access control.
---

## Introduction

**This feature is part of a paid add-on. If you want access, please contact our support or sales teams.**

In Roadie, **policies** are integral components of the permissions framework, governing access control within the platform. They define the rules and conditions under which users can perform specific actions on various resources, such as services, components, or documentation.

**Key aspects of policies:**

- **Authorization Decisions:** Policies determine whether a user is permitted to execute a particular action. For instance, a policy might allow only the owner of a service to delete it from the catalog.
- **Conditional Logic:** Policies can incorporate complex conditions, such as verifying if a user belongs to a specific group or possesses certain attributes, to make nuanced authorization decisions.
- **Customization:** Administrators have the flexibility to craft custom policies tailored to their organization's unique requirements, ensuring that access controls align with internal processes and security standards.

By implementing policies, Roadie ensures that access to resources is managed effectively, enhancing security and maintaining the integrity of the development environment.

To configure this in Roadie we provide a UI for **Policies Management** and you can access it at: `https://<tenant name>.roadie.so/administration/manage-users/policies`.

Currently, a set of permissions is available from the upstream Backstage project, with the option to create and validate new permissions.

- Built-in policies cannot be modified or removed, but they can be added to or removed from roles.
- Each policy can be configured with an effect to either **ALLOW** or **DENY** the specified permissions and the conditions set for the policy.

<div role="alert">
  <div class="docs-cta__info_title">Contradicting Policy Effects</div>
  <div  class="docs-cta__info_message">
    <p>
      When a Role is assigned more than one policy with contradicting effects, **DENY** will take precedence.
    </p>
  </div>
</div>

### Conditions for Configurable Permissions

Some permissions allow configuration with a set of conditions, particularly those starting with `catalog.entity.`. These conditions enable access customization based on defined rules. Currently, these are the available rules:

| Rule Name             | Parameters            | Description                                                                 |
| --------------------- | --------------------- | --------------------------------------------------------------------------- |
| isEntityOwner         | None                  | Checks if the user is the owner of the entity.                              |
| isUserEntity          | None                  | Checks if the entity represents the current user.                           |
| hasOwnEntityName      | None                  | Validates that the entity has its own unique name.                          |
| hasOwnEntityNamespace | None                  | Confirms that the entity has its own designated namespace.                  |
| hasEntityKind         | `kinds`               | Checks if the entity is of a specific kind (e.g., Component, API).          |
| hasSpec               | `key`, `value`        | Verifies the entity’s specification includes a specific key-value pair.     |
| hasMetadata           | `key`, `value`        | Ensures the entity metadata contains a specific key-value pair.             |
| hasLabel              | `label`               | Checks if the entity includes a specific label in its metadata.             |
| hasAnnotation         | `annotation`, `value` | Validates the presence of a particular annotation in the entity’s metadata. |
