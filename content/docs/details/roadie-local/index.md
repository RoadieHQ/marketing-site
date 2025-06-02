---
title: Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: How to run Roadie locally
---

## Prerequisites

1. You must have the `roadie-local` CLI installed.
2. Ensure your docker compose version is at least `2.23.1`. If not, please update to the latest version [using the official docs](https://docs.docker.com/compose/).


## Getting Started


1. Set license environment variable

```bash
export ROADIE_LICENSE=<license_key>
```

2. Run Roadie Local

The following command will start Roadie on a URL. Open the URL in your browser.

```bash
./roadie-local start
```

3. Log in

The following users are hard-coded to get you started.

| Username | Password |
|-----------|------------|
| admin | roadie |
| maintainer | roadie |
| reader | roadie |


4. To stop Roadie Local

```bash
./roadie-local stop
```

## More command line options

### Command Line Options

The CLI supports additional command line arguments to configure your environment:

The `-c` flag allows passing a custom config file, for example, when [configuring a custom
authentication provider](/custom-authentication/).

```bash
./roadie-local start -c /path/to/your/config.yaml
```

The `-d` flag allows passing a [custom domain](/custom-domain/).

```bash
./roadie-local start -d your-domain.example.com
```

The `-f` flag allows passing a custom docker compose file.

```bash
./roadie-local start -f /path/to/docker-compose.yaml
```

The same options apply to the `restart` command.

```bash
./roadie-local restart -c path/to/oauth/config.yaml
```

### Global Command Line Options

In addition to command-specific options, the CLI supports a global `--debug` flag, which will
print full command execution logs.

```bash
./roadie-local --debug start
```

The debug flag is especially helpful when troubleshooting deployment issues on different 
environments like EC2 instances, as it shows the complete Docker Compose command execution output.

### Update the version of Roadie Local

```bash
./roadie-local version list
./roadie-local version use <version>
./roadie-local restart
```
