---
title: Developer portals are a superpower
date: '2021-05-12T21:00:00.0Z'
description: A rebuttal of a post by AWS guru Corey Quinn, who claims that developer portals are an anti-pattern.
author:
  name: David Tuite
---

Last week, Cloud Economist and AWS guru Corey Quinn, wrote a blog post declaring that [developer portals are an anti-pattern](https://www.lastweekinaws.com/blog/developer-portals-are-an-anti-pattern/). He mentioned Backstage, and explained why he believed that it was taking the industry in the wrong direction.

Despite generally excellent commentary on all things tech, in this case Corey's arguments are mistaken.

Corey's case against developer portals, and specifically Backstage, is centred around two main arguments:

1. Building in-house tooling to wrangle cloud services "robs a company’s engineers of an opportunity to develop reusable skills."
2. "Developer portals inherently lag the underlying service’s capabilities".

Let's look at each argument in turn, and see why Backstage and its vibrant open-source community, is part of a better engineering future.

## In-house tooling

Corey's first argument is that

> building in-house tooling to wrangle cloud services [...] robs a company’s engineers of an opportunity to develop reusable skills.

This broad argument can be applied to any in-house tool, not just developer portals and Backstage. Building a bespoke continuous integration tool will rob engineers of an opportunity to learn how to use GitHub Actions or Circle CI for example.

It's odd to see Backstage mentioned in this context because Backstage is actually part of the solution to this problem, rather than an exacerbating factor.

Backstage's open source nature means that it can be deployed inside any company. If you use [Roadie](https://roadie.io) then you can use it as a SaaS tool just like GitHub Actions, Circle CI or any other reusable tool.

If the project eventually turns out to be as successful as something like Kubernetes, you will be able to leave a company which has Backstage, join a new one, and fire up Backstage on day one to learn about the ecosystem around you.

In fact, Backstage brings an opinionated UI/UX which increases the chance that skills will be transferable between companies, even if the internals are customized to the tools and cloud vendor of each companies choosing.

## Capability lag

Corey's second point is that

> developer portals inherently lag the underlying service’s capabilities

This is true of any downstream technology dependency. Features must be released in the upstream project before they can be exposed to users. Amazon's Elastic Kubernetes Service will lag new Kubernetes releases, AWS Lambda will lag new NodeJS versions. Yet, thousands of companies use these services every day.

Backstage is not trying to completely hide underlying technologies from its users. If you have a special case or you need a cutting edge feature, you are absolutely free to jump into the PagerDuty UI or call the Kubernetes API directly. Backstage doesn't block this.

Backstage's goal is to handle the use cases which make up 80% of work. Reading docs, checking who is on call, re-triggering builds and so on.

The fact that Backstage is open-source software will help ensure that this lag is minimised. An [array of open-source plugins](https://backstage.io/plugins) are already being created by the community. If a feature is not supported, you can add it for yourself and for everyone else who is using that plugin. At Roadie, we are actively funding the maintanance and improvement of these plugins.

Each day, a large proportion of Spotify's engineering organization choose to use Backstage, not because they are forced to, but because it adds value for them.

## Proofpoints

As evidence of the apparent ills of developer portals, Corey offers up the fact that he hasn't seen Backstage deployed in any company other than Spotify.

The reality is that Expedia Group, Zalando, and American Airlines have all chosen Backstage for their internal developer portal. The adopters list has [many more participants listed](https://github.com/backstage/backstage/blob/master/ADOPTERS.md).

Let's be clear, we are still early in the curve of Backstage adoption. The open-source version is just over a year old. It was released early and with limited functionality in place. Spotify are rapidly iterating, alongside the community and with their input, rather than simply dropping a finished product.

This development style means that open-source Backstage isn't quite baked enough for some companies. That is ok. The community is flourishing, the CNCF is backing it, and Spotify and Roadie are heavily invested in building a powerhouse project.

## Roadie

Of course, I'm biased in my belief that Backstage will succeed. I spent years working on a developer portal and service catalog at Workday, and I've seen the value first hand, both for the business and the end user.

Our vision is to make Backstage as ubiquitous, powerful, and pleasant to use as GitHub. Backstage will be a reusable skill for engineers all over the world. They will use it because it improves their work lives and gives them access to the information they need to do their jobs. Long live developer portals.

If you share this vision, [join us](https://careers.roadie.io).
