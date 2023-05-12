---
title: Checks
publishedDate: '2022-11-15'
description: Managing Scorecards.
---

# Managing Scorecards

Scorecards are collections of multiple Checks, which may come from different Data Sources.

In order to manage Scorecards, go to Tech Insights → Scorecards page.

In this page you will get an overview of all existing Scorecards, but also have an ability of creating new Scorecards as well as adding them to the Catalog page, so they’re visible to your team.

![Scorecard overview](./scorecard-overview.png)

Clicking the title of the scorecard will lead to scorecard details and results for catalog components.

![Scorecard details](./scorecard-details.png)

![Scorecard results](./scorecard-result.png)

### Adding a Scorecard

Once you click the “Add Scorecard” button, you’ll be prompted to fill in the details about the Scorecard, including the Checks you want to include and to which entities to apply it to, as shown below:

![Create Scorecard](./create-scorecard.png)

1 - General information about scorecard (Name and Description).

2 - Checks you wish to include in the scorecard. Clicking ‘Add’ button will lead to opening the dialog.

![Add check](./add-check.png)

Within the dialog you select all the checks you want to include. In case you want to add or remove some of the checks later you can do it later ‘Edit’ functionality.

![Edit Scorecard](./edit-scorecard.png)

3 - Select which kind and type of components this scorecard applies to.

4 - Owner which can be either a user or a group.

Once you are happy with the created scorecard, save it and you should be able to see it in overview screen.

Same as for the [Data Source](../data-sources/) [Checks](../checks/), you can save a scorecard as a draft until you are completely happy with it and certaing you want to publish it. 

** Note that publishing a draft scorecard will publish all draft Checks and Data Source it is based on.**

### Adding a Scorecard to the Catalog

In order to show a Scorecard in the Catalog Entity page, as shown below, you’ll have to define it from the Tech Insights → Scorecards page.

![Scorecard Catalog](./scorecard-catalog.png)

Once you’re in Tech Insights → Scorecards, find a Scorecard you wish to add. From kebab menu select ‘Add to Catalog’

![Add Scorecard to catalog](./add-to-catalog-scorecard.png)

Then select option which best applies to your use case.

![Add Scorecard](./add-scorecard-to-catalog.png)

Scorecard should now be visible under the layout page you have selected.


### Adding a Scorecard to the Catalog - the hard way

You can also add a Scorecard in the normal way as a widget on a Component Overview page or as a tab. 

You will need to add a prop to the widget to tell it which Scorecard to show for the component using the `scorecardId` field like so:

```json
{
  "scorecardId": "0e9cf72e-a279-4aa7-8296-9a0f5752ca9c"
}
```
You can find the id for the Scorecard in the url when viewing the Scorecard you want to display i.e. `/tech-insights/scorecards/1beea874-fa64-4bc1-b04d-977f8c6a071b`. 
