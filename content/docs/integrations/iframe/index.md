---
title: IFrame Plugin
publishedDate: '2022-04-25T10:00:00.0Z'
description: How to enable the IFrame plugin

humanName: IFrame Plugin
logoImage: 'iframe.png'
integrationType: OSS plugin
---

## Introduction

This is a plugin that renders an Iframe card that can be added to your component/homepage.

## Add IFrame card to your Component

1.  In Roadie, find and select the service via the Component Catalog or Search.
    Once you are there, please click the cog item.

    ![cogwheel](cog.png)

2.  Click the plus sign to add a new Card.
    ![plus](plus.png)

3.  Select `EntityIFrameCard` from the list.
    ![card](entity-card.png)

    Click add.

You should now see a card like this:
![](no-props.png)

This can be configured with [this](./#configure-iframe-props) section.

## Add IFrame card to your HomePage

### Setup

To use this plugin make sure you already have the [Backstage Home plugin](https://github.com/backstage/backstage/blob/master/plugins/home/README.md) enabled.

### Add IFrame card to your homepage

1.  To enable this plugin go to your `Home` page via the sidebar.

    Once you are on the home page click on the cogwheel icon.

    ![cogwheel](homepage.png)

2.  Click the plus sign to add a new Card.
    ![plus](plus-homepage.png)

3.  Select `HomePageIFrameCard` from the list.
    ![add card](homepage-add-card.png)

    Click add

You should now see a card like this:
![iframe homepage](no-props.png)

This can be configured with [this](./#configure-iframe-props) section.

### Configure Iframe Homepage props

Now configure the props of the plugin to display the correct url for your Iframe.

1.  Click on the `wrench` icon to edit the props of the component (see image below).

![wrench](wrench.png)

Then enter the following props.

![](props.png)

``` json
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

Based on what you enter, the card should now look similar to this.
![card](card.png)

## Add IFrame card to your Entity Page
You may also add the IFrameCard to an entity page. It works in the same way as the Homepage IFrame card except that it can take the option `src` or `srcFromAnnotation`.

- `src` is url location of the iframe
- `srcFromAnnotation` is a refernce to an entity annotation containing a source url for the iframe.

## Note

### Authentication
This plugin does **not** support authenticated methods. You can alternatively embed credentials in the url like so
```
https://username:password@yourdomain.com
```

### CSP
Content Security Policy (CSP) is a layer of security added to web applications to avoid certain attacks like Cross site scripting (XSS). This is done by returning a header `Content-Security-Policy` on the server side. It restricts the access to the WebApp by adding a policy. This policy is then validated on the browser to ensure that no malicious attacks can occur on the domain.

Since this is controlled by the WebPage Admins, it may happen that you are unable to load the content you wish in your IFrame. This is a limitation of this plugin.


For more information on this plugin, please visit [here](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-iframe/README.md).

## References

- [Content Security Policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

