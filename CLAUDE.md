# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Environment Setup

```bash
cp .env.sample .env
# Edit the environment variables in the .env file. You will need to lookup the Contentful API key in 1password.
yarn install
```

### Development Server

```bash
env $(cat .env | xargs) yarn start
# or
yarn start-with-env
```

Opens at http://localhost:8000

### Build and Testing

```bash
yarn build          # Build for production
yarn serve          # Serve production build at http://localhost:9000
yarn test           # Run Cypress E2E tests
yarn test:unit      # Run Jest unit tests
yarn lint           # ESLint code analysis
yarn format         # Prettier code formatting
```

### Other Commands

```bash
yarn clean          # Clean Gatsby cache
yarn preview        # Build and deploy to Netlify preview
yarn tech-docs:build   # Convert tech docs
yarn tech-docs:clean   # Clean tech docs
```

## Architecture

### Technology Stack

- **Framework**: Gatsby.js (React-based static site generator)
- **Styling**: Tailwind CSS + PostCSS
- **Content Management**: Contentful CMS for dynamic content
- **Testing**: Cypress (E2E) + Jest (unit tests)
- **Deployment**: Netlify with preview deployments

### Project Structure

#### Content Architecture

- `content/` - All static markdown content
  - `content/backstage/plugins/` - Generic open source Backstage plugin docs
  - `content/docs/integrations/` - Customer guides for Roadie-bundled plugins
  - `content/docs/` - Documentation site content
  - `content/assets/` - Static assets (images, videos)
  - `content/team/` - Team member profiles

#### Source Code Structure

- `src/components/` - Reusable React components organized by domain
  - `landing/` - Homepage and marketing components
  - `doc/` - Documentation-specific components
  - `forms/` - Form components with validation
  - `pricing/` - Pricing page components
  - `CallToAction/` - CTA components for lead generation
- `src/pages/` - Gatsby page components (auto-generates routes)
- `src/templates/` - Dynamic page templates for content types
- `src/gatsby/` - Gatsby-specific configuration and plugins

#### Key Integrations

- **Contentful**: Dynamic content for blog posts, case studies, team pages
- **Algolia**: Search functionality for documentation
- **Netlify Forms**: Contact forms and lead capture
- **Google Analytics & Plausible**: Analytics tracking
- **Sentry**: Error monitoring

### Content Management

Two distinct plugin documentation sections:

1. Generic Backstage plugins (`content/backstage/plugins/`) - for all users
2. Roadie customer guides (`content/docs/integrations/`) - for Roadie users specifically

Dynamic content is managed through Contentful and includes blog posts, case studies, changelog entries, and team member profiles.

### Build Process

1. `prebuild` script fetches API docs and Roadie Local content
2. Gatsby processes markdown content and Contentful data
3. Static site generation with optimized images and assets
4. Deployment to Netlify with automatic preview deployments for PRs

### Testing Strategy

- **Unit Tests**: Jest for component logic
- **E2E Tests**: Cypress for critical user flows (forms, navigation)
- **Linting**: ESLint with React and accessibility rules
- **Formatting**: Prettier for consistent code style
