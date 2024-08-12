---
title: Displaying Fact Data
publishedDate: '2024-08-12T14:33:22.0Z'
description: Roadie Plugins to display fact data directly
---

## Introduction

Tech Insights in Roadie provides the capabilities to automatically retrieve and store relevant data for your entities. With this data you can enhance the Tech Insights visibility within your Roadie instance and easily keep track, visualize and display important information for your entities. 

## Components

Roadie provides various different components to display fact data. These range from overall fact gathering table views to more fine-grained fact info displaying widgets. The use cases for the former larger components are to provide and overview of retrieved fact data within the system, allowing users to keep themselves up to date with the latest information at a glance. The more fine-grained, entity level, fact displaying widgets can be used to display relevant current and historical information about collected facts. 



### Tech Insights Fact Page

Tech Insights Fact Page allows you to create a tabular view of facts collected to the system. These facts can range across different data sources. You can also define your own entity filtering to select only the relevant entities for this specific view.
 

![tech_insights_fact_table.png](tech_insights_fact_table.png)

You can add the table view as a `Page` component (`TechInsightsFactPage`) into the sidebar of your application. The configuration of the component can be done on either via the JSON options provided on the page add/edit screen, or more easily from within the page itself. 

The configuration options include selecting the filtering of entities to display, and wanted columns that should be added to the table.


![page_settings_1.png](page_settings_1.png)
![page_settings_2.png](page_settings_2.png)

Additionally there is the possibility to create bar or pie charts on any column in the table by using the _kebab menu_ and selecting "Show as graph".

![show_graph_menu.png](show_graph_menu.png)


### Tech Insights Facts Home Page Card

The Tech Insights Facts Home Page Card is a variant of the above Tech Insights page. It provides the same functionality but automatically limits the displayed entities to the ones that are owned by the current user in the application.

You can add the table view as a `Card` component (`TechInsightsFactsHomePageCard`) into the home page of your Roadie application. The configuration of the component from within the page itself, using the cog icon on the top right corner.

![home_page_table.png](home_page_table.png) 

The configuration options for this component contain only the column selection for values to be displayed on the table.

![home_page_config.png](home_page_config.png)


### Fact Data Graph Card

Fact Data Graph Card allows you to display historical graph of numerical Fact values that have been gathered into the system. This allows you to follow trends on open issues or vulnerability counts or similar.

You can add the table view as a `Card` component (`FactDataGraphCard`) into the entity page of your Roadie application. The configuration of the component from within the page itself, using the cog icon on the top right corner.

![graph_card_view.png](graph_card_view.png)

The configuration of this card allows you to configure either Bar, Line or Area chart types. It let's you select the color of the graph, what data to display and what date range of data should be displayed.
![graph_card_config.png](graph_card_config.png)

### Fact Info Card

Fact Info Card allows you to display individual fact values in a card format on the entity. This let's you highlight the most relevant information and make it visible at a glance.  

You can add the table view as a `Card` component (`FactInfoCard`) into the entity page of your Roadie application. The configuration of the component from within the page itself, using the cog icon on the top right corner.

![info_card_view.png](info_card_view.png)

The configuration options for the Fact Info Card expects you to select the facts you want displayed and additionally exposes the possibility to add a link to the card itself to let the user navigate to another location for additional information.

![info_card_config.png](info_card_config.png)
