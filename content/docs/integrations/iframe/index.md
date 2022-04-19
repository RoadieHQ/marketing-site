---
title: IFrame Plugin
publishedDate: '2022-04-19T10:00:00.0Z'
description: How to enable the IFrame plugin

humanName: IFrame Plugin
logoImage: 'iframe.png'
integrationType: OSS plugin
---

## Introduction

This is a plugin that renders an Iframe card that can be added to your entity page

### Add IFrame card to your Entity

1.  To enable this plugin go to your entity page

    Once you are there, please click the cog item

    ![cogwheel](cog.png)

2.  Click the plus sign to add a new Card
    ![plus](plus.png)

3.  Select `EntityIFrameCard` from the list.
    ![](entity-card.png)

    Click add.

You should now see a card like this
![](no-props.png)

## Configure plugin via props

Now configure the props of the plugin to point to your desired location.

1.  Click on the `wrench` icon to edit the props of the component.
    ![](props.png)

    ```json
    {
      "src": "<your src>",
      "title": "<card title>"
    }
    ```

    - `src` is url location of the iframe (without this, it will render text)
    - `title` the title you want to associate the iframe with (optional)
    - `height` the height of the iframe tag (optional)
    - `width` the wifth of the iframe tag(optional)

2.  Click Save

Now it should load and render the iframe card as per your specifications.

Based on what you enter, the card should now look like this
![](card.png)

## Note

This plugin does **not** support authenicated methods. You can alternatively embed credentials in the url like so
```
https://username:password@yourdomain.com
```

For more information on this plugin, please visit [here](https://www.npmjs.com/package/@roadiehq/backstage-plugin-iframe).

