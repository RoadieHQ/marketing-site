---
title: Configuring Custom Plugins
publishedDate: '2021-06-17T12:11:00.0Z'
description: How to configure a custom Backstage plugin to Roadie
---

# TODO: replace everything from below. Create examples for both approaches. Text + Video


### Easy Way

1. Register [the provided scaffolder template](https://github.com/RoadieHQ/software-templates/blob/main/scaffolder-templates/roadie-plugin/template.yaml) in your Roadie application
2. Run the scaffolder template to generate a Roadie compatible monorepo to build your Backstage plugins
3. Clone and install dependencies in the generated monorepo
    1. This can be done following the instructions provided in the repository README.md file
4. Run the develop script as instructed in the readme
5. Register your plugin and components on your Roadie instance.
    1. Navigate to [`https://<your-tenant>.roadie.so/administration/federated-plugins`](https://roadie.roadie.so/administration/federated-plugins)
    2. Insert values provided on the CLI tool output when running the develop script


![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8efb374f-77b2-4eef-b603-7950fbbfec5b/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a750274d-82f5-45f2-83cd-c3cfd2ca4a38/Untitled.png)

### A Little bit more difficult way

If you have an already existing plugin that you want to convert to Roadie compatible version, you can take these steps.

1. Install Roadie CLI as a command line tool `npm install -g @roadiehq/roadie-cli` or `yarn add global @roadiehq/roadie-cli` (depending on your tool of choice)
2. Run the Roadie CLI with wanted parameters to build you Roadie compatible plugin
3. Register your plugin and components on your Roadie instance.
    1. Navigate to [`https://<your-tenant>.roadie.so/administration/federated-plugins`](https://roadie.roadie.so/administration/federated-plugins)
    2. Insert values provided on the CLI tool output when running the develop script

