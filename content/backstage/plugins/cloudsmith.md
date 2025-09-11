---
humanName: Cloudsmith
heading: 'Backstage Cloudsmith Plugin'
lead: 'See your Cloudsmith usage, repository stats, audit logs and security scanning'
npmjsPackage: @roadiehq/backstage-plugin-cloudsmith
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage Cloudsmith Plugin | Roadie'
  description: |
    See your Cloudsmith usage, repository stats, audit logs and security scanning.

logoImage: '../../assets/logos/cloudsmith/cloudsmith-logo.png'

coverImage: '../../assets/cloudsmith-plugin.png'
coverImageAlt: 'A screenshot of Cloudsmith plugin showing 4 components in more detail.'

# Instructions for someone who wants to use this plugin.
# languages used here must be listed in the .babelrc

gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin into Backstage
    language: bash
    code: yarn add @roadiehq/backstage-plugin-github-pull-requests

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/components/home/Homepage.tsx

      import {
        CloudsmithStatsCard,
        CloudsmithQuotaCard,
        CloudsmithRepositoryAuditLogCard,
        CloudsmithRepositorySecurityCard,
        } from '@roadiehq/backstage-plugin-cloudsmith';

  - intro: 'Add the card to your Backstage catalog.'
    language: typescript
    code: |
      // packages/app/src/components/home/Homepage.tsx
      <Grid item xs={12} md={6}>
        <CloudsmithStatsCard repo="repo-name" owner="org-name"/>
      </Grid>

      <Grid item xs={12} md={6}>
        <CloudsmithQuotaCard  owner='org-name'/>
      </Grid>

      <Grid item xs={12} md={6}>
        <CloudsmithRepositoryAuditLogCard owner='org-name' repo='repo-name'/>
      </Grid>

      <Grid item xs={12} md={6}>
        <CloudsmithRepositorySecurityCard owner='org-name' repo='repo-name'/>
      </Grid>
---

## Authentication

In order to authenticate with Cloudsmith, make sure that you have a environmnet variable setup `$CLOUDSMITH_API_KEY` in order to authenticate with your repo.
