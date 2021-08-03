---
title: Backstage TechDocs - How to embed lucid chart diagrams
date: '2021-08-03T10:30:00.0Z'
description: TechDocs converts markdown files to Backstage docs so your engineering teams can find them and it is very useful. But how do we embed diagrams from lucid chart.
tags: ['tutorial', 'techdocs', 'lucid chart']
author:
  name: Brian Fletcher
---

TechDocs is the core Backstage feature which transforms markdown documentation into HTML and displays it inside Backstage where your engineering teams can find it.

You can easily embed diagrams from lucid charts and other external sources in techdocs. Start by exporting the generated iframe from the external application. For example if you are using lucid charts you can click the Share button in the top right.

![button.png](button.png)

This will show a dialog as follows.

![dialog.png](dialog.png)

Click advanced and then click embed.

![embed-dialog.png](embed-dialog.png)

You can choose to adjust the size of the embedded diagrams.

Copy the html snippet and click the "Activate Embedded Code" button.

![embed-code-button.png](embed-code-button.png)

Now copy the code snippet into your techdocs files as it is and you will get diagrams in your techdocs that update when the diagrams are changed in lucid chart.

![embedded-diagram-in-techdocs.png](embedded-diagram-in-techdocs.png)