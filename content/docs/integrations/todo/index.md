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

This plugin is particularly useful for teams who want to maintain visibility into technical debt, track pending improvements, and ensure that TODO comments don't get forgotten over time.

## At a Glance

| | |
|---: | --- |
| **Prerequisites** | **Backend Plugin:** <ul><li>TODO Backend plugin must be installed and configured</li></ul> **Repository Access:** <ul><li>Integration setup for source code repositories</li></ul> |
| **Considerations** | Supports TODO and FIXME tags in multiple programming languages. Uses Leasot parser for comment detection. |
| **Supported Environments** | ☒ Private Network via Broker <br /> ☒ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## TODO Entity Configuration

### Step 1: Add the TODO Tab

The TODO plugin is available as a tab on entity pages in Roadie. Contact your Roadie administrator to enable this plugin if it's not already available.

### Step 2: Backend Plugin Configuration

The TODO plugin requires the TODO Backend plugin to be installed and configured. This backend plugin handles the scanning of repositories and parsing of TODO comments.

The backend plugin must be configured with appropriate repository integrations to access your source code.

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

### Language Support

The plugin supports TODO comments in most programming languages including:
- JavaScript/TypeScript
- Python
- Java
- C/C++
- Go
- Rust
- PHP
- Ruby
- And many more

## Connection Configuration Steps

### Step 1: Configure Repository Integrations

Make sure you have configured [integrations](/docs/getting-started/configuring-backstage-plugins/) for all repositories you want to scan for TODO comments. This typically includes:

- GitHub integration for GitHub repositories
- GitLab integration for GitLab repositories
- Bitbucket integration for Bitbucket repositories
- Other SCM integrations as needed

### Step 2: Backend Plugin Setup

The TODO Backend plugin must be properly configured to:
- Access your repositories through the configured integrations
- Parse TODO comments using the Leasot parser
- Index and store TODO items for display in the frontend

Contact your Roadie administrator to ensure the backend plugin is properly configured for your organization.

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

## Viewing TODO Items

Once configured, the TODO plugin displays:
- A table of all TODO items found in the entity's repository
- File locations where each TODO comment is found
- The content of each TODO comment
- Author information (if specified in the comment)
- Line numbers for easy navigation to the source

## Troubleshooting

### TODO items not appearing

1. Verify that the TODO Backend plugin is installed and configured
2. Check that repository integrations are properly set up
3. Ensure the entity's repository is accessible through the configured integrations
4. Confirm that TODO comments follow supported formats
5. Check that files containing TODOs are not in ignored directories (dot-files/directories)

### Comments not being detected

1. Verify that your TODO comments use supported formats:
   - `// TODO: description`
   - `// FIXME: description`
   - `// TODO(author): description`
   - `// @todo: description /author`
2. Ensure comments are not trailing comments (at the end of code lines)
3. Check that the file type is supported by the Leasot parser

### Performance issues

1. Large repositories with many TODO comments may take time to scan
2. Consider excluding unnecessary directories through backend configuration
3. Contact your Roadie administrator if scanning performance is problematic

## Best Practices

### Writing Effective TODO Comments

1. **Be specific**: Clearly describe what needs to be done
   ```javascript
   // TODO: Replace deprecated API call with new v2 endpoint
   ```

2. **Include context**: Add author or ticket references when helpful
   ```javascript
   // TODO(alice): Optimize this query - see ticket #123
   ```

3. **Use appropriate tags**: Use FIXME for bugs, TODO for improvements
   ```javascript
   // FIXME: Handle null case to prevent crashes
   // TODO: Add caching to improve performance
   ```

### Managing Technical Debt

1. Regularly review TODO items displayed in the plugin
2. Prioritize FIXME items as they often indicate bugs
3. Convert important TODOs into proper tickets in your issue tracker
4. Remove completed TODO comments promptly

## References

- [TODO Plugin on npm](https://www.npmjs.com/package/@backstage-community/plugin-todo)
- [TODO Backend Plugin on npm](https://www.npmjs.com/package/@backstage-community/plugin-todo-backend)
- [Leasot Parser Documentation](https://github.com/pgilad/leasot)
- [Backstage Integrations Documentation](https://backstage.io/docs/integrations/)