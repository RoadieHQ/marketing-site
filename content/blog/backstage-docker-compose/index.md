---
title: Running Backstage with Docker Compose
date: '2020-05-25T21:00:00.0Z'
description: Docker Compose is an easy way to run Backstage for development or light use. Here's a setup which will get you started with Backstage quickly.
---

To run Backstage and the Lighthouse plugin with Docker Compose we need three things

1. Postgres so that Lighthouse has a place to store the data it generates.
2. The Lighthouse Audit Service
3. Backstage

Here's a `docker-compose.yml` file which allows them to run together and inter-communicate.

```yaml
version: '3'
services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: backstage
      POSTGRES_DB: backstage
      POSTGRES_HOST_AUTH_METHOD: trust
    volumes:
      - ./data/db:/var/lib/postgresql/data

  backstage:
    image: spotify/backstage
    ports:
      - '3000:80'
    depends_on:
      - lighthouse

  lighthouse:
    image: spotify/lighthouse-audit-service
    environment:
      LAS_PORT: 3003
      LAS_CORS: 'true'
      PGDATABASE: backstage
      PGUSER: backstage
      PGHOST: db
    ports:
      - '3003:3003'
    depends_on:
      - db
```

Some notes about the above:

1. Do not use `POSTGRES_HOST_AUTH_METHOD=trust` in a production setup. It's fine for experimenting but it will allow absolutely any connection to your database. That would not be good in production or staging.
2. The `volumes` setting for `pg` will store the postgres data in a `data` directory in the place you run `docker-compose up` from. You can configure it to store the data somewhere else if you like.
3. The `ports` for `backstage` specify that traffic to `localhost:3000` on your machine should be forwarded to port `80` on the Backstage container. This is slightly different to running Backstage with `yarn start`, where you would expect Backstage to run directly on port `3000`. When Backstage is dockerized it is put behind a basic nginx reverse proxy which listens on port `80`. This `ports` setting will replicate the behavior of `yarn start` despite the nginx proxy.
4. `PGHOST` must be set to `db` for the `lighthouse` service so that Lighthouse can communicate with the postgres database. [Docker networking supports using service names for networking like this](https://docs.docker.com/compose/networking/).
5. The `lighthouse` service must expose the port `3003`. This was surprising to me as I expected Backstage to communicate with Lighthouse via the Docker network rather than by using `localhost` on my machine. However, it turns out that when you visit the Backstage Lighthouse plugin on `http://localhost:3000/lighthouse`, requests to the Lighthouse Audit service actually originate from your browser rather than from the Backstage backend.

Put that `docker-compose.yml` in a directory then run the following command to prepare postgres with a user and database for using Backstage.

```shell
docker-compose up db
```

Once it has stated that the "database system is ready to accept connections" you can kill the process and start everything together.

```shell
docker-compose up
```

Once that settles down, Backstage will be available on [localhost:3000](http://localhost:3000).
