---
title: Managing Roles
publishedDate: '2024-06-14T21:00:00.0Z'
description: How to configure roles using permissions.
---

## Introduction

Roadie comes with RBAC out of the box. We provide 4 default roles: `admin`, `viewer`, `maintainer` and `tech-insights-admin`. It is possible to also define custom roles - please contact our sales team if this is something you are interested in.

| Name                | Description                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| admin               | Can perform any action in Roadie                                                                                               |
| viewer              | Can only view data within Roadie                                                                                               |
| maintainer          | Can read and write data, but cannot access administration settings or tech insights editing                                    |
| tech-insights-admin | Can edit scorecards, checks and data sources in tech insights. This role requires one of viewer / maintainer to work correctly |

## Assigning Roles

There are two ways to assign a role to a user in Roadie:

- Assign roles in the user management screen
- We can enable a feature that allows you to add a `roles` field in your id token provided to Roadie during login.

### User Management

- Visit the user management section in `https://<tenant name>.roadie.so/administration/settings/manage-users`.
- Find the name of the user you would like to assign a role to.
- Click the edit pencil and then add the roles you would like to assign the user.

### Roles from Identity providers id token

If your Roadie tenant uses a custom identity provider and you’d like to manage user roles through it, we can enable this feature upon request—just reach out to our support team.

To include roles in the ID token, structure the token like this:

```json
{
  "sub": "77d0c4cb-706c-4aa4-b18e-bed538a33aa7",
  "roles": ["viewer", "tech-insights-admin"]
}
```

## Setting the default roles

If a user has no role associated yet, e.g. if it is the first time they have logged in and there are no roles associated with the user, then the user is allowed the policies associated with the default roles. There can be many default roles.

To edit the default roles:

- Visit `http://<tenant name>.roadie.so/administration/manage-users/roles`
- Click the edit pencil beside the roles you would like to be the default roles
- The click "Set as default role" and save.
- You can perform similar steps to make a role no longer a default role.

## Creating custom roles

**This feature is a paid add-on of the Role-Based Access Control feature. If you want access, please contact our support or sales teams.**

Users with the permissions required to set new or custom roles can do so using the User Management area in the Adminstration section. New roles are composed of policies. To understand how to set custom policies, please review the [Managing Policies](/docs/details/managing-policies/) section.
