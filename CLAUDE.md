# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Gatsby-based marketing and documentation site for Roadie.io. The site serves:
- Marketing pages at `roadie.io`
- Documentation at `roadie.io/docs/`
- Backstage plugin documentation
- Blog posts, case studies, and changelog

## Common Development Commands

### Local Development
```bash
# Start development server (uses Netlify Dev, runs on port 8888)
yarn start

# Direct Gatsby development (runs on port 8000)
yarn develop

# Clean Gatsby cache
yarn clean
```

### Building & Testing
```bash
# Build for production (includes prebuild step)
yarn build

# Serve production build (runs on port 9000)
yarn serve

# Run Cypress e2e tests
yarn test

# Run Jest unit tests
yarn test:unit

# Lint code
yarn lint

# Format code
yarn format
```

### Deployment
```bash
# Preview deployment to Netlify
yarn preview
```

## Environment Setup

Required environment variables (see `.env.sample`):
- `CONTENTFUL_ACCESS_TOKEN` - Contentful API key (found in 1Password)
- `CONTENTFUL_SPACE_ID` - Contentful space ID
- `ROADIE_API_TOKEN` - Required for build (downloads OpenAPI docs)
- `GITHUB_TOKEN` - Required for build (downloads Roadie Local releases)
- `SITE_RECAPTCHA_KEY` - reCAPTCHA key for forms

## Architecture

### Content Sources

1. **Markdown Files** (`/content`)
   - `content/docs/` - Documentation pages
   - `content/backstage/plugins/` - Generic Backstage plugin docs
   - `content/legal-notices/` - Legal pages
   - `content/team/` - Team member profiles

2. **Contentful CMS**
   - Blog posts
   - Backstage Weekly content
   - Backstage Bites videos
   - Case studies
   - Changelog entries
   - Plugin pages

3. **External APIs** (fetched during build)
   - OpenAPI specifications from `api.roadie.so`
   - Roadie Local CLI builds from GitHub releases
   - NPM package data (stored in Netlify Blobs)

### Page Generation

Pages are dynamically created in `gatsby-node.mjs` using the `createPages` API:

- **Blog posts**: `/blog/{slug}` (from Contentful)
- **Docs**: `/docs/{path}` (from Markdown)
- **Plugins**: `/backstage/plugins/{slug}` (from Contentful)
- **Case studies**: `/case-studies/{slug}` (from Contentful)
- **Changelog**: `/changelog/` and `/changelog/{slug}` (from Contentful, paginated)
- **Backstage Bites**: `/backstage-bites/{slug}` (from Contentful)
- **Legal notices**: `/legal-notices/{slug}` (from Markdown)
- **Tags**: `/tags/{tag}` (from blog post tags)

Templates are in `src/templates/` and page creation logic is in `src/pageCreation/`.

### Component Structure

- `src/components/` - React components organized by feature
- `src/pages/` - Gatsby static pages (index, pricing, etc.)
- `src/templates/` - Templates for dynamically generated pages
- `src/hooks/` - Custom React hooks
- `src/stylesheets/` - Global styles and Tailwind imports

### Styling

- **Tailwind CSS** - Primary styling framework
- **PostCSS** - CSS processing
- Configuration in `tailwind.config.js` and `postcss.config.js`
- Theme constants in `src/theme.mjs`

### Build Process

1. **Prebuild** (`bin/fetch_api_docs_and_roadie_local.js`):
   - Downloads OpenAPI specs to `static/`
   - Downloads Roadie Local CLI builds to `static/downloads/roadie-local/`
   - Creates version index for CLI downloads

2. **Main Build** (`gatsby build`):
   - Fetches content from Contentful
   - Processes Markdown files
   - Generates pages dynamically
   - Indexes content in Algolia (production only)
   - Stores NPM package data in Netlify Blobs

### Search

- **Algolia** - Search indexing and autocomplete
- Queries defined in `src/queries/agolia.mjs`
- Indexing skips on preview/PR builds
- Search UI components use `@algolia/autocomplete-js`

### Deployment & Environments

- **Production**: `roadie.io` (SITE_NAME=roadie, CONTEXT=production)
- **Preview**: `preview.roadie.io` (SITE_NAME=roadie-preview) - Uses Contentful preview API
- **PR Previews**: Deploy previews on Netlify (CONTEXT=deploy-preview)

Different environments use different Contentful hosts:
- Production uses `cdn.contentful.com`
- Preview/local uses `preview.contentful.com`

## Testing

- **Cypress**: E2e tests in `cypress/e2e/`
- **Jest**: Unit tests (run with `yarn test:unit`)
- Test config in `cypress.config.mjs` and root-level Jest config

## Code Quality

- **ESLint**: `.eslintrc.js` for linting rules
- **Prettier**: `.prettierrc` for formatting
- **Husky**: Pre-commit hooks run linter and formatter on staged files
- **Sentry**: Error tracking configured in `sentry.config.js`

## Important Notes

- URLs always use trailing slashes (`trailingSlash: 'always'` in Gatsby config)
- The site uses CSP headers configured in `src/gatsby/cspDirectives.mjs`
- Module resolution allows importing from `components/` as an alias
- SVG files with `.inline.svg` extension are imported as React components
- The docs site structure is found at `src/doc/layouts` (note: typo in original README)
