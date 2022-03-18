This is the Gatsby generator for the Roadie marketing site. https://roadie.io

## Getting started for local development

Export an environment variable for `CONTENTFUL_ACCESS_TOKEN` with the value set as the key for Content Preview API
access token found here https://app.contentful.com/spaces/hcqpbvoqhwhm/api/keys/57ApCBey2YsTGSjZopsRzJ

```shell
git clone git@github.com:RoadieHQ/marketing-site.git
cd marketing-site
cp .env.sample .env
# Edit the environment variables in the .env file. You will need to lookup the Contentful API key in 1password.
yarn install
env $(cat .env | xargs) yarn start
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
