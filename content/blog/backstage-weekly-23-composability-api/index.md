---
title: Backstage Weekly 23 - Plugin composability update
date: '2021-04-19T21:00:00.0Z'
description: The last pieces are in place for the new Backstage plugin composability API. All the links you need are below. We also have a technical TechDocs deep dive. Try saying that 10 times fast!
tags: ['newsletter']
---

This week we're pulling in a few links from around the web which relate to developer productivity and engineering effectiveness. After all, that's probably why you're using Backstage.

## News roundup

### Build times matter

Backstage is ultimately a tool for improving developer happiness and productivity. One of the best ways to make developers happier is to reduce lead time. Don't believe it? Check out the replies to this tweet from observability hero Charity Majors.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">people really do leave their jobs over build times. i am not making this up. <br><br>the impact your deploy pipeline has on developer productivity and happiness is HARDCORE. <a href="https://t.co/z49xUxXWsk">https://t.co/z49xUxXWsk</a></p>&mdash; Charity Majors (@mipsytipsy) <a href="https://twitter.com/mipsytipsy/status/1382619734781272066?ref_src=twsrc%5Etfw">April 15, 2021</a></blockquote>

### Backstage TechDocs deep dive

We published a deep dive explainer for the TechDocs feature of Backstage on the Roadie blog.

It explains how TechDocs works, the components involved, the Basic architecture, the Recommended architecture, how to switch and anything else you might like to know.

Check it out on the Roadie blog. [How TechDocs Works](https://roadie.io/blog/how-techdocs-works/).

### Open Mic recordings

Recordings from the Backstage Open Mic event on the 31st of March are now up on Vimeo. You can see Roadie engineer Iain Billett explain [how we host and operate Backstage on Kubernetes](https://vimeo.com/536715621) or listen to Dominik Henneke from SDA SE talk about [the API docs plugin they contributed](https://vimeo.com/536718418).

<iframe src="https://player.vimeo.com/video/536715621?color=9bf0e1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/536715621">Roadie&#039;s Multi-Tenant Backstage Architecture</a> from <a href="https://vimeo.com/frontsidesoftware">Frontside Software</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

### Optimizing micro-feedback loops in engineering

Tim Cochran previously talked about how Backstage helps to maximize developer effectiveness on [Martin Fowler’s blog](https://martinfowler.com/articles/developer-effectiveness.html).

This week he’s back and explaining how to measure and improve the micro-feedback loops that engineers deal with every working day. Check it out on [the LeadDev](https://leaddev.com/productivity-eng-velocity/optimizing-micro-feedback-loops-engineering).

## Merged to Backstage in the last 2 weeks

94 pull requests were merged. Here are the highlights...

### Last steps on the composability API

The grand migration to the new Backstage plugin composability API is now complete 🍾. The core team merged the final and biggest piece of the puzzle in [#4822](https://github.com/backstage/backstage/pull/4822).

To recap, the core principle of the new composability system is that plugins should have clear boundaries and connections. Plugins should be able to be loaded when needed and should prevent internal crashes from breaking the rest of the app. They should also enable navigation to other plugins and provide extension points for other plugins to build upon.

We have already migrated [all Roadie plugins](https://github.com/RoadieHQ), including the JIRA, ArgoCD, GitHub Pull Requests and GitHub Insights plugins, to the composability API.

There are extensive [notes in the changelog](https://github.com/backstage/backstage/releases/tag/release-2021-04-08) to help you smoothly upgrade your Backstage app.

### GCS URL Reader

Roadie engineering manager, Martina, added a Google Cloud Storage Reader to Backstage so you can push your catalog YAMLs there and have Backstage read them. This is useful if you use Google Cloud and want to build up your catalog with automation or from an existing internal service catalog. [#4954](https://github.com/backstage/backstage/pull/4954)

That’s all for this week. Get upgrading folks! 🚀
