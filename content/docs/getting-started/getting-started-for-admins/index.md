---
title: Configuring Roadie
lastUpdated: '2021-04-15T21:00:00.0Z'
description: How to set up Roadie before rolling it out across your organization.
---

## Introduction

This tutorial will guide you through the steps required to set Roadie up for basic use within your organization. Once completed, you will:

 1. Be an admin user of Roadie.
 2. Have connected Roadie to your organization's GitHub account.

There are 3 kinds of Backstage resource used in this tutorial.

1. The `User` entity represents an employee at your company.
2. The `Group` entity represents a team or larger organizational structure.
3. The `Component` entity represents a piece of software like a website or backend service.

## Prerequisites

In order to complete this guide, you will need the following things:

1. Access to a Roadie account. If you do not yet have access, please [join the waiting list](/evaluation-request).
2. A GitHub Cloud or GitHub Enterprise Cloud account.
3. A test service on GitHub which you can make changes to.

## Connect Roadie to GitHub

Roadie needs to connect to GitHub in order to function. This can be setup by installing the Roadie GitHub App.
Installing the GitHub App will allow Roadie to:

1.  Access the YAML metadata files that Backstage needs to operate.
2.  Read your GitHub organisation's users and team structure into backstage.  
3.  Make requests from the browser on your behalf e.g. listing open pull requests.

You can find a link to install the GitHub app in the Backstage application:

1. Click the Administration link in the bottom left
2. Click the Settings tab along the top of the Administration page and then the Integrations link
3. Click on the link to install the GitHub app.
4. Follow the steps to install the App
5. You may need to wait up to 2 minutes for the GitHub integration to become active

### Important Note!

When you install the GitHub app you will have an option to lock down access to a select few repositories in your GitHub org. There is currently an upstream limitation which prevents GitHub Teams from being synced into Backstage unless you select the “All repositories” option. 

Choosing “Only select repositories” will correctly lock down access but will break some important functionality due to the sync problem.

We are working to contribute a fix upstream that will allow you to choose limited respositories, but for now please choose the “All repositories” option.

![Install GitHub App](./install-github-app.png)

## Add an admin group and user

Roadie admins have special powers such as the ability to add and remove Backstage plugins. We will use GitHub teams to create an admin group for Roadie.

ℹ️  &nbsp;Admin groups are **not** a security measure. They hide certain UX features from regular users in order to simplify the experience. Backstage does not currently support role based access control (RBAC).

### Step 1. Create an admin group on GitHub teams

Visit GitHub Teams in your organization's GitHub account and click the New Team button.

Set the Team name to `roadie-backstage-admin`. This is a special value and must be an exact match.

Enter a Description such as "Users with Backstage administration abilities.".

Leave Parent team unselected and click the Create team button.

![Form for creating a team on GitHub](./github-create-team-form.png)

By default, GitHub adds your account to the team as a member. You are now an admin on Roadie and should have access to two main features:

1. Access to the Secrets panel via the "Administration" link in the sidebar.
2. The ability to add and remove plugin cards and tabs (see red-circled icons).

![Standard Backstage interface with some admin features highlighted with circles](./admin-features-edit-page.png)

ℹ️  &nbsp;It can take some time for Roadie to refresh the list of teams from GitHub teams. If you do not see admin functions immediately, please wait a few minutes and try again.

## Next steps

Let's [add a component to Backstage](/docs/getting-started/adding-components/).
