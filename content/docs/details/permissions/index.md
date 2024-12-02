---
title: Permissions
publishedDate: '2024-06-14T21:00:00.0Z'
description: How to configure access control permissions in Roadie.
---

## Introduction

Roadie permissions allow rules to be set about which users have acces to which features and information.

This can be set at a coarse level (i.e. whole features of the application) or at a fine-grain level (i.e. the ability to view specific entities within the catalog).

A good example of a permission is the ability to allow users to see a Scaffolder Template. Let's say this Template has the ability to change a cloud budget for a given service. Not everyone within an organisation may have that ability. A permissions attached to that Template would allow the team governing Roadie to limit access to that Template. 

## Features

- **User Management** user roles can be managed via the no-code Roadie Admin UI or ingested from an Identity Provider via the identity token.
- **Custom Roles** can be created to manage subsets of users
- **Custom Policies** can be created to cater for specific permissions
- **Custom Permissions** can be created and consumed in Custom Policies (from a custom plugin for example)

## Structure

Roadie permissions are made up:

- **Users**: users have Roles which grant them permissions to execute certain tasks within Roadie or view certain information
- **Roles**: which are attached to users. They are groups of policies. 
- **Policies**: which are groups of permissions, rolled up into Roles. 
- **Permissions**: granular code-level gates that evaluate whether an individual users has access to a given piece of functionality.

## Backstage Permissions Framework

Roadies Permissions system is based on the Bacsktage Permissions framework. More information on the framework in general can be found in Backstage docs:

- Backstage docs on [policy definitions](https://backstage.io/docs/permissions/writing-a-policy/).
- Backstage docs on [custom rules](https://backstage.io/docs/permissions/custom-rules/).