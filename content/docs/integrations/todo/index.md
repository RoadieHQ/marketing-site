---
title: Configuring TODO Comments
publishedDate: '2025-07-28T10:45:00.0Z'
description: How to configure the TODO plugin to track and manage TODO comments in your source code in Roadie.
humanName: TODO
logoImage: '../../../assets/logos/todo/todo-logo.webp'
integrationType: OSS plugin
---

## Introduction

The TODO plugin helps you track and manage TODO comments in your source code directly from Backstage. It scans your repositories for TODO and FIXME comments, providing a centralized view of technical debt and pending tasks across your codebase.

## At a Glance

|                            |                                                                                                           |
|---------------------------:|-----------------------------------------------------------------------------------------------------------|
|         **Considerations** | Supports TODO and FIXME tags in multiple programming languages. Uses Leasot parser for comment detection. |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted          |

## TODO Entity Configuration

### Step 1: Add the TODO Tab

The TODO plugin is available as a tab on entity pages in Roadie. Take a look [Customising the Roadie UI page](/docs/details/updating-the-ui/) for more information.

## Supported Comment Formats

The plugin uses the [Leasot](https://github.com/pgilad/leasot) parser, which supports a wide range of programming languages and comment formats. By default, it recognizes the following patterns:

### Basic TODO Comments
```javascript
// TODO: Ideally this would be working
// FIXME: Nobody knows why this is here
```

### TODO Comments with Author
```javascript
// TODO(username): Not sure why this works, investigate
// @todo: This worked last Monday /username
```

### Supported Tags
- `TODO` - General tasks or improvements needed
- `FIXME` - Issues that need to be fixed
- `@todo` - Alternative TODO format with @ prefix

## Plugin Behavior

### What Gets Scanned
- All source code files in your repositories
- Comments in supported programming languages
- TODO and FIXME tags with various formats

### What Gets Ignored
- Dot-files and dot-directories (e.g., `.git/`, `.vscode/`)
- Trailing comments (comments at the end of code lines)
- Binary files and non-text files

### Example of Ignored Format
```javascript
function reverse(str: string) {
  return str.reverse(); // TODO: optimize - This will NOT be detected
}
```

## References

- [TODO Plugin on npm](https://www.npmjs.com/package/@backstage-community/plugin-todo)
- [TODO Backend Plugin on npm](https://www.npmjs.com/package/@backstage-community/plugin-todo-backend)
- [Leasot Parser Documentation](https://github.com/pgilad/leasot)
- [Backstage Integrations Documentation](https://backstage.io/docs/integrations/)