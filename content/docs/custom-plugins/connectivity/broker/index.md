---
title: Using the Broker with Custom Plugins
publishedDate: '2022-07-24T18:27:00.0Z'
description: How to use the Roadie Broker connection to connect to your internal infrastructure with Custom Plugins
---

Roadie provides secure connectivity from your Roadie instance bundled plugins as well as your self-built custom plugins to your internal infrastructure. To have a closer look how this functionality is constructed and what the underlying architecture is, you can take a look at [Roadie Broker documentation.](/docs/integrations/broker/).



# TODO: Add broker code example with accept.json

```typescript

export const MyBrokerConnectingComponent = () => {
    const { entity } = useEntity();
    console.info(`Displaying data for ${JSON.stringify(entity)}`);
    return (
        <Page themeId="tool">
        <Content>
            <ContentHeader title="My Plugin">
            <SupportButton>My Custom Roadie Plugin</SupportButton>
    </ContentHeader>
    <Grid container spacing={3} direction="column">
        <Grid item>
        <ExampleFetchComponent />
        </Grid>
        </Grid>
        </Content>
        </Page>
);
};

```