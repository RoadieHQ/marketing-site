---
title: Designating admins
publishedDate: '2022-03-21T21:00:00.0Z'
description: How to designate yourself as an admin of Roadie Backstage.
---

## Introduction

You often want to allow power users to edit the layouts and install plugins while preventing
ordinary users from making unintended changes to the application setup. Roadie Backstage has a
concept of admins to enable this. This uses a Group entity in the catalog and users associated with that group are "admins". 

## Setup

You can set up this group and its associated users manually by defining the group as a normal backstage entity and loading 
it into the catalog, or automatically using a Group discovery mechanism for Github Teams, AzureAD or Okta. 


## Using GitHub teams

⚠️  For automatic Admin group management using Github you will need to have [installed the Roadie GitHub app](/docs/getting-started/install-github-app/) before proceeding with this step.

To automatically designate admins you can use a GitHub Team in your Github Org.

1. Visit GitHub Teams in your organization's GitHub account and click the New Team button.

2. Set the Team name to `roadie-backstage-admin`. This is a special value and must be an exact match.

3. Enter a Description such as "Users with Roadie Backstage administration abilities.".

4. Leave Parent team unselected and click the Create Team button.

![Form for creating a team on GitHub](./github-create-team-form.png)

5. Ensure you are logged in to GitHub from Roadie. Click the link in the sidebar to do this.

![A link that says "Log in to GitHub"](./sidebar-log-into-github.png)

6. Add [team discovery for your Github Org](/docs/details/location-management/#github-autodiscovery-and-organization-autodiscovery) to load the admin team in Roadie by adding it in the GitHub integration settings page at Administration > Settings > GitHub.

⚠️  &nbsp;It can take some time for Roadie to refresh the list of teams from GitHub teams once the discovery location is added. If you do not see admin functions immediately, please wait a few minutes and try again.


## Using Azure AD

Follow the [steps laid out here](https://roadie.io/docs/integrations/ms-graph-org-provider/) to configure the AzureAD integration for Roadie. 

Then create a team called `roadie-backstage-admin` in AzureAD. This is a special name and must be an exact match. Add any admin users you want to this group and make sure it can be discovered by your AzureAD discovery settings. 

Once it is imported by the integration, you should immediately see non-admins being prevented from accessing settings pages.


## Using Okta

Follow the [steps laid out here](https://roadie.io/docs/integrations/okta/) to configure the Okta integration for Roadie.

Then create a team called `roadie-backstage-admin` in Okta. This is a special name and must be an exact match. Add any admin users you want to this group and make sure it is loaded into the catalog.

Once it is imported by the Okta plugin, you should immediately see non-admins being prevented from accessing settings pages. 


## Manual group configuration

In case you don't want to manage admin access via a third party service, you can also manually add groups into your Roadie instance.

1. Make a note of the user entity that is assigned to you on the account page of users. You can find this information from `https://<your-tenant>.roadie.so/Account`.
   * In case you have not logged into GitHub, this is usually the first part of your email address before the `@` symbol.

2. Create a `catalog-info.yaml` entity definition for `roadie-backstage-admin` group
   ```yaml 
    apiVersion: backstage.io/v1alpha1
    kind: Group
    metadata:
      name: roadie-backstage-admin
      description: Administrators of Roadie
    spec:
      type: team
      profile:
        displayName: Admins
        email: admins@roadie.io
        picture: https://avatars.dicebear.com/api/identicon/roadie-backstage-admin.svg
      children: []
    ```
Note that the name of the administration group needs to be `roadie-backstage-admin` to grant users assigned to that group access to the administration section of the Roadie instance.



3. Create a `catalog-info.yaml` entity definition for administrator users and assign to admin group
    ```yaml
    apiVersion: backstage.io/v1alpha1
    kind: User
    metadata:
      name: my-username-before-at-symbol
    spec:
      profile:
        displayName: My Na-me
        email: my-username-before-at-symbol@domain.com
        picture: https://avatars.dicebear.com/api/avataaars/my-username-before-at-symbol.svg
      memberOf: [roadie-backstage-admin]
    ```

> Users and groups don't necessarily need to reside in different files. If you want to use a single file to import multiple entities, separate multiple yaml documents within a file with three horizontal lines `---`.

4. Import both group and user entity definitions to your Roadie instance
   1. Navigate to `https://<your-tenant>.roadie.so/catalog-import` and input the path to the entity definitions file(s).

Once they are all imported, you should immediately see non-admins being prevented from accessing settings pages. 

