---
title: Backstage by Spotify - The Ultimate Guide
date: '2022-02-05T12:11:00.0Z'
description: This is the description
---

## What is it?

Backstage is an open platform for building developer portals. It was created inside Spotify in 2015 and used internally there for a number of years before being open-sourced in March 2020. It was donated to the CNCF the same year and is currently in incubation.

Trends like microservices, SaaS sprawl, serverless and no-code create a chaotic ecosystem for engineers. Engineering stacks are becoming more complex, onboarding takes longer and collaboration is more difficult.

A developer portal is an internal website which allows a company’s developers make sense of the internal engineering ecosystem. It gives them a place to look up information about their tooling, services and architecture, answer questions about what other teams are working on and how things are running, and perform their day to day work. It can be thought of as a single pane of glass or a hub for software development. It aspires to improve software development effectiveness by helping developers focus on what they do best.

On a practical level, Spotify Backstage is a collection of TypeScript libraries which can be combined together to create a developer portal. The developer portal is typically organized and centered around a service catalog.

A service catalog, or software catalog, is a list of all of the internal software available inside a company. In Backstage, this can include services, systems, resources such as S3 buckets, and other concepts. The catalog allows users to “look up” internal systems to find information about them.

## Who is using it?

Backstage has been adopted by more than 85 companies, including Netflix, American Airlines, Roku, Expedia Group, GoCardless and Wayfair.

## The origins of Backstage

*This section was written by Roadie Engineering Manager Martina Iglesias Fernández. She previously worked on the Backstage Core Team at Spotify and was in the room on the day Backstage was first conceived.*

Backstage was conceived inside Spotify at a time when the company was experiencing rapid growth. New engineers were joining every week, and with them, the number of microservices was increasing.

Collectively, Spotify’s engineering team realized that it was becoming harder and harder to know what we had running in production and who was responsible for each component.

Eventually, one of the platform teams had the great idea to build a catalog of all microservices which would model our systems and components. The catalog was called System-Z.

System-Z started as a place where we could register microservices and their metadata. There would be a link to where its code lives, the name of a who owns it, and the name of the product owner. Eventually it grew to include information about its relation to other components. Groups of microservices began to be organized into cohesive systems.

This re-organization process an effect on the whole organization because ownership became very important. One of the key learnings was that many services were owned by individuals rather than by teams. When they made this key insight, they knew something had to change.

Luckily, the same team that built System-Z was building the internal microservices framework. This meant they could do something amazing. They added built-in endpoints on each microservice that would return API documentation based on introspection. This API documentation a game changer because it came directly from the code and it was very easy to keep up to date. This move was the beginning of System-Z becoming the main hub for documentation.

As the usage of System-Z grew, we realized it was also the perfect place for to put frontend UIs for developer infrastructure tools. So many tools that previously only had a CLI were extended to also have a UI frontend inside System-Z.

This huge growth of usage and features lead to what is known as Backstage today.

## Problems tackled by Spotify Backstage

Spotify Backstage helps to solve a number of different problems.

### Lack of discoverability

Imagine you’re a software engineer who has joined a fast growing 200 person engineering team and it’s your first week on the job. You might have many questions... How do people ship code here? How do you create services? Is there a GeoCoding API available? Do we have a tool for linting code? What languages are typically used here? What do the teams around me do?

Modern engineering organizations are complex and rapidly changing organisms and it is not easy to get up to speed. Even when you’re an established part of the team, answering a simple question might take days of chasing people through multiple Slack hops. And remote work is not making things easier.

Backstage solves this problem by collecting software, tools, teams, people and other assets into one place where they can be easily searched and organized.

### Opaque software ownership

The first step towards effective collaboration and InnerSourcing is to be able to easily understand who does what. The person who wrote a any particular piece of code may have left the job years ago, so who is responsible for it? Who should get called if it starts causing issues in production? Frequently, this question is not always easy easy to answer.

Backstage solves this problem by tracking teams and software assets, and making it easy to create a clear linkage between them.

### Slow service creation

The path to production is frequently fraught with delays. You may have to talk to networking, security, platform, compliance, finance and a host of other stakeholders before you can get a line of code to run. These functions exist for good reason, but it can be tricky to create a clear path to navigate through them when doing something new. This hurts the pace of innovation and increases the time to value for new services.

Backstage solves this problem by making it easy to define pre-approved templates and create new software from them. These templates can include docs, tie-ins to Continuous Integration and Continuous Delivery tools, automatic monitoring setup and anything else you might need. This speeds up team by giving them a Golden Path to Production.

### Stretched best practices

Once teams start shipping quickly, the production ecosystem can become complex. The best teams will have docs, runbooks, monitoring, logging, Ci/CD, code review, protected branches and a host of other best practices. But not all projects have the expertise or resources to build in these best practices. We need a way to spot these struggling services and get them up to code.

Because Spotify Backstage tracks all the services and teams, it is the perfect place to detect when a standard is not being upheld and nudge the team who own it in a better direction.

### Production heterogeneity

Half the teams are using PostgreSQL and half are on MySQL. Half are using Go and half are using TypeScript. Half have docs, half don’t, and the other have docs that can’t be found 😃.

This fracturing makes operations more difficult, since the operations people won’t always have the expertise on hand to debug a technology. 

It also makes it more difficult to collaborate. The ramp up time is increased if you’re switching to a team with a different core language. You might even be trying to add a feature to another team’s service. This is slow if there are no docs and different technologies used.

Backstage’s software templates make the hogeneous option the quickest way for developers to get started, so they tend to choose them over forging their own path. At the same time, if they need to do something bespoke, they can always break out of the system.

## The main features of Backstage by Spotify

### Software catalog

The software catalog lists all of the software assets in your company, and allows you to associate them with engineering teams and the people on them. It supports many different kinds of software asset, including Websites, Services and Libraries. It also supports infrastructure assets called Resources.

Each entity in the software catalog is described by a specification, usually written in YAML. Here is an example of a basic Service, as represented in Backstage.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service
  title: Sample Servicew
  description: This is where you explain what the service is.
  annotations:
    github.com/project-slug: RoadieHQ/sample-service
    backstage.io/kubernetes-label-selector: 'app.kubernetes.io/name=sample-service'
spec:
  type: service
  owner: engineering
  lifecycle: experimental
```

### Plugins

Most of Backstage’s functionality, including the software catalog, is delivered in the form of plugins. The plugins allow you to mix and match the tools which make sense in your particular situation. For example, if you use Opsgenie instead of PagerDuty, there is a plugin you can add for that.

Plugins typically export UI components which you can code into your Backstage application so others at your company can use them. Plugins can be written in JavaScript or TypeScript.

### TechDocs

TechDocs provides a way to host technical documentation inside Backstage. Technical documentation is often a challenge because it is time consuming to write, often forgotten, and not easily found.

Backstage uses a docs-like-code approach where documentation is written in the form of Markdown and stored alongside the code. The markdown files are then transformed into HTML and rendered inside Backstage where they are searchable and organized by Software Component. This makes them easy to find, which means they get used. This makes them more likely to be written in the first place.

### Software templates

Software templates allow you to encode your organization’s best practices into YAML templates which can be used to scaffold new services. Each template will typically do a few things:

1. Grab a pre-approved skeleton codebase from a known location.
2. Pass some parameters into it to customize it.
3. Create a new code repository and place the customized codebase in there.
4. Hook the codebase up to tools like Continuous Integration, monitoring and logging.

### Kubernetes

The Kubernetes plugin is a core part of Backstage. It connects to your Kubernetes clusters and provides people with an easy way to see how software is running in the clusters. It makes it easy to look up running pods, image versions and deployment errors.

## The use cases of Spotify Backstage

Backstage is oriented around three main use cases: Create, Manage and Explore.

### Create

Creating a new microservice, mobile feature, data pipeline, or other software asset, is made easier by the software templates and scaffolder. Within a few clicks you can go from nothing to having a fleshed out component which is already connected to all of your favorite tools.

### Manage

Backstage plugins come together to pull information into one place so it becomes easier for teams to manage a number of microservices, and for an organization to manage hundreds of them. Instead of switching between tools you can do everything you need in one place.

### Explore

Since everything can live in Backstage, your tools, software and teams all become more discoverable and approachable. This improves collaboration and engineering effectiveness.

## How to get started with Spotify Backstage

There are 2 ways to get started with Backstage. Self-hosting and Software-as-a-Service hosting with Roadie. We’ll cover the high level differences here, but if you need more information, check out 10 reasons to get Backstage from Roadie.

- [ ]  Link the text above to the post

### Self-hosting

Self-hosting Backstage requires creating your own Backstage codebase by combining together the core Backstage TypeScript libraries. Then you will install a few plugins which make sense for your use case.

Please refer to the getting started guide for the exact steps and instructions, but the process is something like:

1. Generate a new Backstage application using the command line utility provided. Provide access to a database like PostgreSQL.
2. Configure authentication via GitHub or another authentication provider. There are various ways to do this, including token based authentication, a GitHub app and Oauth2.
3. Install a plugin, then edit the code of your Backstage app to get them to show up in the UI.
4. Build your Backstage app into a Docker container.
5. Deploy your Backstage Docker container via a supported mechanism in your company.
6. Add more plugins, rebuild the application and redeploy it.

### Roadie

Roadie is a SaaS Backstage provider. It allows you to get set up with Backstage quickly, simply by providing some configuration and dragging and dropping some plugins to the places you want them. The main advantages of Roadie are:

1. Reduced time to value because you can get Backstage set up quickly.
2. Reduced maintenance cost because we upgrade Backstage for you every week.
3. We work with your teams to help you *adopt* Backstage, not just run it.
4. Many plugins are supported straight out of the box.
5. We provide support via Slack, Discord and other channels.

To learn more about the value of Roadie, please check out our comprehensive post: 10 reasons to get Backstage from Roadie.
