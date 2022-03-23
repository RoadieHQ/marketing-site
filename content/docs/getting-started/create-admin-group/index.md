---
title: Designating admins
publishedDate: '2022-03-21T21:00:00.0Z'
description: How to designate yourself as an admin of Roadie Backstage.
---

## Introduction

You often want to allow power users to edit the layouts and install plugins while preventing
ordinary users from making unintended changes to the application setup. Roadie Backstage has a
concept of admins to enable this.

## Prerequisites

You will need to have [installed the Roadie GitHub app](/docs/gettting-started/install-github-app/) before proceeding with this step.

## Create an admin group and user

Roadie admins have special powers such as the ability to add and remove Backstage plugins. We use GitHub Teams to designate admins.

1. Visit GitHub Teams in your organization's GitHub account and click the New Team button.

2. Set the Team name to `roadie-backstage-admin`. This is a special value and must be an exact match.

3. Enter a Description such as "Users with Backstage administration abilities.".

4. Leave Parent team unselected and click the Create Team button.

![Form for creating a team on GitHub](./github-create-team-form.png)

5. Ensure you are logged in to GitHub from Roadie. Click the link in the sidebar to do this.

![A link that says "Log in to GitHub"](./sidebar-log-into-github.png)

⚠️  &nbsp;It can take some time for Roadie to refresh the list of teams from GitHub teams. If you do not see admin functions immediately, please wait a few minutes and try again.
