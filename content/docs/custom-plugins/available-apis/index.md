---
title: Available APIs when developing Roadie plugins
publishedDate: '2023-07-26T17:11:00.0Z'
description: A list of useful and commonly available patterns to use when building plugins
---

Backstage and Roadie provide many in-built custom APIs which are useful when developing your custom plugins. Below is a list of most used ones with examples on how to get started with them and what they provide. For more information about the utility API structure and architecture, take a look at [Backstage documentation around the area](https://backstage.io/docs/api/utility-apis)

### useEntity

`useEntity` [React hook](https://react.dev/reference/react) provides the ability for plugin developers to easily get the Entity information when developing plugins to Roadie. The hook can be called within Roadie plugins that are exposed within the _Entity pages_, namely `Card` and `Content` component types.

The hook returns an object with an `entity` property, which contains the whole entity definition. This is useful for cases where you would for example need to identify and locate an annotation from the entity, so you can use the annotation value in subsequent requests to third party services.

An example usage to retrieve and display all entity information in a 'dump-like' fashion:

```tsx
import React, { useEffect } from 'react';
import { StructuredMetadataTable } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';

export const MyPluginContentComponent = () => {
  const { entity } = useEntity();
  return <StructuredMetadataTable metadata={entity} />;
};
```

The code above would produce a view like this:
![A test entity view displaying information](entity-dump-useEntity-hook.webp)

### useApi

`useApi` is a generic hook which provides the ability to retrieve implementations of already registered APIs in the frontend application. See below for actual APIs available in Roadie application that you can use to your advantage when developing a plugin.

#### discoveryApi

`discoveryApi` provides connectivity to the Roadie backend APIs. The API can be used to identify the correct endpoints to call when, for example, integrating with third party services via the Roadie proxy.

```tsx
import React, { useCallback, useState } from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';
import { discoveryApiRef, useApi } from '@backstage/core-plugin-api';
import { StructuredMetadataTable } from '@backstage/core-components';

export const MyComponent = () => {
  const discoveryApi = useApi(discoveryApiRef);
  const { entity } = useEntity();
  const [myEndPointInfo, setMyEndpointInfo] = useState<object | undefined>();

  const btnClicked = useCallback(async () => {
    const proxyUrl = await discoveryApi.getBaseUrl('proxy');
    const url = `${proxyUrl}/my-proxy`;
    const uid = entity.metadata.uid;
    const res = await fetch(`${url}/get-info/${uid!}`);
    setMyEndpointInfo(await res.json());
  }, [discoveryApi]);

  return (
    <div>
      <Button onClick={btnClicked}>Get info from my endpoint</Button>
      {myEndPointInfo && <StructuredMetadataTable metadata={myEndPointInfo} />}
    </div>
  );
};
```

#### identityApi

`identifyApi` provides information about the currently logged in user. This API can be used to target individuals or decorate requests with relevant user information.

```tsx
import React, { useState } from 'react';
import useAsync from 'react-use/lib/useAsync';
import {
  BackstageUserIdentity,
  ProfileInfo,
  identityApiRef,
  useApi,
} from '@backstage/core-plugin-api';
import { StructuredMetadataTable } from '@backstage/core-components';

export const MyPluginContentComponent = () => {
  const identityApi = useApi(identityApiRef);

  const [userInfo, setUserInfo] = useState<BackstageUserIdentity | undefined>();
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | undefined>();

  useAsync(async () => {
    const userInfo = await identityApi.getBackstageIdentity();
    const profileInfo = await identityApi.getProfileInfo();
    setUserInfo(userInfo);
    setProfileInfo(profileInfo);
  }, [identityApi]);

  return (
    <div>
      {userInfo && <StructuredMetadataTable metadata={userInfo} />}
      {profileInfo && <StructuredMetadataTable metadata={profileInfo} />}
    </div>
  );
};
```

![A dump of information displaying currently logged in user](userinfo_identityApi_dump.webp)

#### errorApi

`errorApi` provides the ability to inform the user about errorenous states or actions. This API is a thin wrapper around the more generic `alertApi` which can be used for other kinds of notifications.

```tsx
import React from 'react';
import { useApi, errorApiRef } from '@backstage/core-plugin-api';

export const MyComponent = () => {
  const errorApi = useApi(errorApiRef);

  // Signal to the app that something went wrong, and display the error to the user.
  const handleError = (error) => {
    errorApi.post(error);
  };

  // the rest of the component ...
};
```

#### alertApi

`alertApi` provides the possibility to display notifications to the user in a form of a UI toast message. These notifications can be of multiple different variants, like `error`, `info`, `warning`.

```tsx
import React from 'react';
import { alertApiRef, useApi } from '@backstage/core-plugin-api';

export const MyComponent = () => {
  const alertApi = useApi(alertApiRef);

  // Display a notification to the user that something good has happened
  const notifySuccess = () => {
    alertApi.post({
      message: 'New climate neutral aviation fuel has been invented!',
      severity: 'success',
      display: 'transient',
    });
  };

  // the rest of the component ...
};
```

#### analyticsApi

`analyticsApi` can be used to trigger analytics events to the application. These events are stored by Roadie in our analytics provider. If you need access to see further visibility of your analytics triggered events, contact Roadie via usual support channels.

```tsx
import React, { useCallback } from 'react';
import { analyticsApi, useApi } from '@backstage/core-plugin-api';
import { Button } from '@material-ui/core';

export const MyComponent = () => {
  const analyticsApi = useApi(analyticsApiRef);

  const btnClicked = useCallback(() => {
    analyticsApi.captureEvent({
      attributes: { component: 'MyComponent' },
      subject: 'test-subject',
      value: 1,
      action: 'button-click',
      context: {
        extension: 'my-custom-plugin',
        pluginId: 'my-custom-plugin',
        routeRef: 'myPluginRouteRef',
      },
    });
  }, [analyticsApi]);

  return (
    <div>
      <Button onClick={btnClicked}>Click me!</Button>
    </div>
  );
};
```
