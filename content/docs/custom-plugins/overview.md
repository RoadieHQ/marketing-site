---
title: Roadie Custom Plugins
publishedDate: '2023-07-21T12:11:00.0Z'
description: Extending Roadie with your own custom plugins and functionality
---


Roadie provides customers with the ability to bring their own plugins, making it a highly customizable platform. With a tailored plugin interface and integration points, customers can seamlessly create custom functionalities fitting their specific requirements. Once developed, deploying plugins to Roadie is a straightforward process, facilitated by the platform's plugin management system. 

Custom plugins are a feature of the [Growth Plan](/pricing/).


> Roadie is iterating on the next version of custom plugins and making effort to more easily develop, build and deploy your own plugins to the Roadie application.
We have released an early version of the new approach as a both scaffolder template and the needed tools to surround this initiative.


## Getting Started

When developing custom plugins for Roadie for the first time, it is recommended to go through one of the step-by-step examples listed on [the getting started page](/docs/custom-plugins/getting-started/).


Other important documentation around Roadie custom plugins: 

* [Developing Roadie compatible custom plugins](/docs/custom-plugins/developing/)
* [Registering your plugins to your Roadie instance](/docs/custom-plugins/plugin-registration/)
* [Deploying your custom plugins](/docs/custom-plugins/deploying/)
* [Testing new versions of your custom plugins](/docs/custom-plugins/testing/)
* [Connecting to your internal infrastructure using the Broker](/docs/custom-plugins/connectivity/broker/)
* [Connecting to third party services using the proxy](/docs/custom-plugins/connectivity/proxy/)
* [Example workflows and approaches to plugin development](/docs/custom-plugins/getting-started/)
* [A list of common APIs and examples of their usage](/docs/custom-plugins/available-apis/)


## Prerequisites

Contact us to enable custom plugins on your instance. If you want host your plugins at Roadie, instead of self-hosting, you can ask us to provide you access to the deployment location.

## Capabilities

1. Develop, test and deploy your own plugins directly against your Roadie instance. You can bring you own familiar development flow to quickly test out and  experiment with new features, as well as deploy production ready functionality securely to your Roadie instance.
2. Host your own plugins on a static web host, S3, or even localhost. This allows you to host and use open-source Backstage plugins that Roadie does not yet officially support.


## Roadie Plugin Development and Deployment in short


Roadie offers a powerful plugin system that allows customers to extend the application's functionality according to their specific needs. This documentation outlines the steps for developing, testing, and deploying custom plugins to Roadie.

### Plugin Development

Roadie plugins can be standard Backstage plugins and all open source plugins are also fully compatible to be enhanced and built on. Plugins are usually developed using the React frontend library, but alternative frontend frameworks can be used as well. For simple plugins you can even use the Backstage CLI to scaffold a plugin skeleton for yourself.

There are two tools Roadie provides that can be used to get started developing a custom plugin.

- Roadie CLI: https://www.npmjs.com/package/@roadiehq/roadie-cli
- Template: https://github.com/roadie-demo/scaffolder-examples/blob/main/roadie-plugin/template.yaml

The Scaffolder template provides an entry point to create a monorepo which can host the custom plugin code. This can be used as the first step to Roadie plugin development and can be built on by creating subsequent plugins using the same patterns within the same monorepo.

The Roadie CLI is a tool which can be used to develop, build and deploy plugin code in a way that it is compatible with a running Roadie application.


Take a closer look at how to get started and how to use the tools to build your own plugin in the [documentation dedicated to custom plugin development.](/docs/custom-plugins/developing/)


### Plugin Deployment

Roadie plugins can be deployed to any static web hosting solution. Roadie also provides a way to host plugins on Roadie infrastructure where they are secured and use the same authentication method as the rest of your Roadie instance functionality.

Once your custom plugin is fully developed and tested, the steps to deploy it to Roadie are simple:

1. **Build the Plugin**: Use Roadie CLI to compile your plugin into a format compatible with Roadie's plugin management system.
2. **Deploy the Plugin**: Deploy to Roadie infrastructure with a single command using the Roadie CLI, or alternatively decide to self-host the plugin and deploy to any other static hosting solution.
3. **Register the Plugin**: Use the Roadie administration interface to install and register your custom plugin on your Roadie instance.


Take a look at different deployment options and instruction from the [documentation dedicated to custom plugin deployments.](/docs/custom-plugins/deploying/) and see how to register your plugin in [the documentation outlining the simple registration steps.](/docs/custom-plugins/plugin-registration)


### Plugin Testing

The plugins developed for Roadie can range from simple React components to small applications built with other standard frontend development technologies. During the development cycle Roadie provides a safe sandbox mode where the plugin can be tested against mocked or real entities within the Roadie application. 

When using the Roadie provided template, you can also build and test the plugins in standalone mode using the standard test frameworks.  

* To test out `Page` type plugins, use the [**Sandbox**](/docs/details/sandbox-mode/) pages, located in `https://<tenant-name>.roadie.so/administration/admin-sandbox`
* To test out `Card` or `Content` type plugins, use [**Preview Entities**](/docs/details/previewing-changes/#using-the-entity-preview-page) that can be configured in `https://<tenant-name>.roadie.so/import/entity-preview`


### Plugin Maintenance

Backstage development moves at a fast pace and to manually keep up with all the breaking changes might be laborious. Roadie's custom plugin build tools try their best to build bridges between breaking version changes in the underlying Backstage platform and custom plugins built with Roadie tools. If there are changes that are not possible to be automatically fixed, Roadie is an expert on keeping version compatibility and forward fixing version inconsistencies due to the vast portfolio of open source plugins that we have developed. 


