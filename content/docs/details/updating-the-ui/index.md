---
title: Updating the Backstage UI
publishedDate: '2021-10-22T12:00:00.0Z'
description: How to configure the Backstage UI Layout
---

## Introduction

Roadie allows you to configure which plugins you want to use via our UI. This guide explains the different types of
plugin components and the different places they can be integrated into the app.

## Prerequisites

You must be an admin to edit the UI layout. Please complete [this guide](/docs/getting-started/assigning-admins/) before moving on to this one.

## About Plugins

Backstage is a plugin based application where each plugin provides a certain piece of functionality. A plugin may
integrate with some external system such as GitHub to display information for a certain Entity e.g. Show pull request
information for a particular service.

You can read more about Backstage plugins [here](https://backstage.io/docs/plugins/).

Backstage plugins can provide [three different types](https://backstage.io/docs/plugins/composability#naming-patterns) of UI elements:

1. Card - These are tiles which can be arranged into dashboards in the software catalog. E.g. The About card.
2. Content - These are tabs which can be integrated with the catalog. E.g. The TechDocs tab.
3. Page - These are top-level pages in Backstage, outside of the catalog. Accessible via links in the sidebar. E.g. The catalog itself is a Page.

## Updating the Catalog Layout

Admin users can add components to catalog pages to configure what is displayed to users when they view an entity. Layouts are configured
per entity **kind** and **type**. For example, "User" and "Group" are each kinds
of entity and so User entities have a different layout to Group entities. Similarly, Component entities have types such
as "Service", "Library", "Website", etc and different types can have different layouts. However, a particular entity can't
have its own layout; A particular Group or service can't have a unique layout. This is to encourage a consistent UX.

## Updating Tabs

To add a tab click the plus icon at the end of the tab list.

![Add tab button](./add-tab-button.jpg)

Then select the component to add via the autocomplete and give the tab a display name and click "Create".

NB: When choosing a name please make sure it starts with something unique. (There is currently a
[bug in opensource backstage](https://github.com/backstage/backstage/issues/7741) which means that if you create a new
component that shares the same initial name as an existing one (i.e. `Api` and `Api Visualiser`), you will not be able
to select the new component.)

![Add tab dialog](./add-tab-screen.jpg)

To rearrange or delete tabs select the "pencil" edit icon on the far right of the tab bar.

![Edit tab layout](./edit-tab-layout.jpg)

Then drag and drop to rearrange or click the "x" icon to remove a tab then _click the save icon_ on the right hand side.

![Move tab](./move-tab.jpg)

## Updating Dashboards

To edit a dashboard click the cog icon on the top right of the dashboard below the tab bar.

![Edit Dashboard Button](./edit-grid-button.jpg)

This will switch the dashboard into an edit view. You can drag and drop to rearrange or click the dustbin icon to remove a card.

![Edit dashboard view](./move-card.jpg)

To add a card click the plus icon in the menu on the top right of the dashboard.

![Add card button](./add-card-button.jpg)

Then select the card to add and click "Add".

![Add card dialog](./add-card-dialog.jpg)

You can adjust the position of the new card as above. When you're finished don't forget to save your changes!

![Save layout button](./save-layout-button.jpg)

Entities will have one "Overview" dashboard by default but you can add others. Simply create a tab selecting "Dashboard" as the component to add.

![Add a dashboard](./add-dashboard.jpg)

## Updating the Sidebar

Page components are displayed in the sidebar. To edit the sidebar, visit "Administration" and you will find "Sidebar" under "Roadie Settings"

![Edit Sidebar Page - before](./edit-sidebar-page-before.jpeg)

You can then choose to display or hide any pages. You can also edit and delete Custom pages using the "🗑" and "✎" icons.

![Move or delete Sidebar items](./move-delete-sidebar-items.jpeg)

To add a new Custom page, click the "New Custom page" button.

Select a component in the autocomplete. Adjust the title and path as necessary and click "Add". You can optionally choose a custom icon for the new page.

![Add page screen](./add-custom-page-for-sidebar.jpeg)

Your new page will appear as part of the visible items, both in the Sidebar Settings page and the Sidebar

![Edit Sidebar Page - after](./edit-sidebar-page-after.jpeg)

### Sidebar Links

You can create sidebar entries to other pages in Roadie for quick access or to embedded external websites using the iFrame plugin. 

**Links to embedded external sites** can be added using `@roadiehq/backstage-plugin-iframe: IFramePage`. 

![Configuring an iFrame for Google search](iframe-link.jpg)

Custom props are required specifying the iFrame compatible site like so:

```json
{
  "title": "Google",
  "iframe": {
    "src": "https://www.google.com/webhp?igu=1"
  }
}
```

**Links to internal pages** such as a specific domain entity page can be added using the path like so:

You can copy the path from the page you want to route to. 

![Link to internal page](link-internal.jpg)


## Updating the home page

To edit the home page click the cog icon on the top right of the dashboard below the header.

![Edit Home Page Button](./edit-home-page-button.webp)

This will switch the home page into an edit view. You can drag and drop to rearrange or resize, click the dust-bin icon
to remove a card then click the save icon.

![Edit home page view](./edit-home-page-view.webp)

To add a card click the plus icon in the menu on the top right.

![Add home page card button](./add-home-page-card-button.webp)

Then select the card to add and click "Add".

![Add home page card dialog](./add-home-page-card-dialog.webp)

You can adjust the position of the new card as above. When you're finished don't forget to save your changes!

![Save home page button](./save-home-page-button.webp)

## Adding props

It is possible to add props to cards on the homepage and catalog dashboards. To do this, enter edit mode by clicking the
cog icon and click the spanner icon for your desired card.

![Edit props button](./edit-props-button.webp)

Currently, it is necessary to provide props **as JSON**. Once you have entered your props click the save icon in the card then
again in the dashboard menu to save the layout.

![Save props button](./save-props-button.webp)
