This is the Gatsby generator for the Roadie marketing site. https://roadie.io

## Layout and sections

The code for the actual marketing website and our docs site is in the src folder.

- Some pages use Contentful to inject content i.e. `src/pages/backstage-weekly`.
- The docs site top level tab content is found at `src/doc/layouts`

All the rest of the content is written in Markdown and rendered by Gatsby using the React components in found in `src`.

The `content` folder contains all the rest of the static marketing (`roadie.io`) and docs (`roadie.io/docs/`) content.

There are two different sections listing Backstage plugins:

- generic open source docs for all backstage plugins at `content/backstage/plugins`
- guides for our own customer using any plugins currently bundled with Roadie at `content/docs/integrations`.

The `content/details` section contains a mix of more specific detailed guides to a variety of Roadie Backstage features.

## Getting started for local development

Export an environment variable for `CONTENTFUL_ACCESS_TOKEN` with the value set as the key for Content Preview API
access token found in 1Password.

```shell
git clone git@github.com:RoadieHQ/marketing-site.git
cd marketing-site
cp .env.sample .env
# Edit the environment variables in the .env file. You will need to lookup the Contentful API key in 1password.
yarn install
yarn start
```

Open http://localhost:8000 in your browser.

## Building for production

```shell
cp .env.sample .env
# Edit the environment variables in the .env file.
env $(cat .env | xargs) yarn build
yarn serve
```

Open http://localhost:9000 in your browser.

## Viewing a preview for a PR

Go to https://app.netlify.com/sites/roadie/deploys and get the link generated for the preview deployment.
