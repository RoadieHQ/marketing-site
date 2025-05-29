---
title: Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: How to run Roadie locally
---

## Prerequisites

1. You must have the `roadie-local` CLI installed.
2. Ensure your docker compose version is at least `2.23.1`. If not, please update to the latest version [using the official docs](https://docs.docker.com/compose/).


## Getting Started


1. Set the the license environment variable

```bash
export ROADIE_LICENSE=<license_key>
```

2. Run Roadie Local

The following command will start Roadie on a URL. Open the URL in your browser.

```bash
./roadie-local start
```

3. Log in

The following users are hardcoded to get you started.

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

```bash
# Basic usage - provide your OAuth config file
./roadie-local start -c /path/to/your/config.yaml

# With domain name (defaults to https)
./roadie-local start -c /path/to/your/config.yaml -d your-domain.example.com

# With HTTPS protocol
./roadie-local start -c /path/to/your/config.yaml -d your-domain.example.com -p https

# With custom docker-compose file
./roadie-local start -c /path/to/your/config.yaml -f /path/to/docker-compose.yaml

# All options together
./roadie-local start -c /path/to/your/config.yaml -d your-domain.example.com -p https -f /path/to/docker-compose.yaml
```

The same options apply to the `restart` command:

```bash
./roadie-local restart -c path/to/oauth/config.yaml -d your-domain.example.com -p https
```

### Global Command Line Options

In addition to command-specific options, the CLI supports these global options:

```bash
# Enable debug output (shows full command execution logs)
./roadie-local --debug start -c /path/to/your/config.yaml
```

The debug flag is especially helpful when troubleshooting deployment issues on different environments like EC2 instances, as it shows the complete Docker Compose command execution output.

### Update the version of Roadie Local

```bash
./roadie-local version list
./roadie-local version use <version>
./roadie-local restart -c /path/to/your/config.yaml -d your-domain.example.com -p https
```
