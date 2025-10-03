---
title: Permissions
publishedDate: '2024-06-14T21:00:00.0Z'
description: How to configure access control permissions in Roadie.
---

## Introduction

Role-based access control in Roadie allows rules to be set about which users have access to which features and information.

This can be set at a coarse level (i.e. whole features of the application) or at a fine-grain level (i.e. the ability to view specific entities within the catalog).

A good example of a permission is the ability to allow users to see a Scaffolder template. Let's say this template has the ability to change a cloud budget for a given service. Not everyone within an organisation may have that ability. A permissions attached to that Template would allow the team governing Roadie to limit access to that template.

## Features

- **User Management** user roles can be managed via the no-code Roadie Admin UI or ingested from an Identity Provider via the identity token.
- **Custom Roles** can be created to manage subsets of users
- **Custom Policies** can be created to cater for specific permissions
- **Custom Permissions** can be created and consumed in Custom Policies (from a custom plugin for example)

## Structure

Role-based access control in Roadie is made up:

- **Users**: users have Roles which grant them permissions to execute certain tasks within Roadie or view certain information
- **Roles**: which are attached to users. They are groups of policies.
- **Policies**: which are groups of permissions, rolled up into Roles.
- **Permissions**: granular code-level gates that evaluate whether an individual users has access to a given piece of functionality.

## Backstage Permissions Framework

Roadies role-based access control system is inspired by the Bacsktage Permissions framework. More information on that framework in general can be found in Backstage docs but is not necessary to understand when interacting with Roadie:

- Backstage docs on [policy definitions](https://backstage.io/docs/permissions/writing-a-policy/).
- Backstage docs on [custom rules](https://backstage.io/docs/permissions/custom-rules/).
