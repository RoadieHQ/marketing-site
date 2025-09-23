#!/usr/bin/env node

import { parseArgs } from 'util';

import processPlugin from './processPlugin.mjs';

async function main() {
  try {
    // Parse command line arguments
    const { values } = parseArgs({
      args: process.argv.slice(2),
      options: {
        plugins: {
          type: 'string',
          short: 'p'
        },
        help: {
          type: 'boolean',
          short: 'h'
        }
      }
    });

    if (values.help) {
      console.log(`
Usage: node migrate_backstage_plugins_to_contentful.mjs --plugins <plugin1,plugin2,...>

Options:
  --plugins, -p   Comma-separated list of plugin names (without .md extension)
  --help, -h      Show this help message

Examples:
  node migrate_backstage_plugins_to_contentful.mjs --plugins argo-cd
  node migrate_backstage_plugins_to_contentful.mjs --plugins argo-cd,kubernetes,prometheus
      `);
      process.exit(0);
    }

    if (!values.plugins) {
      console.error('Error: --plugins flag is required');
      console.log('Use --help for usage information');
      process.exit(1);
    }

    const pluginNames = values.plugins.split(',').map(name => name.trim()).filter(name => name);
    
    if (pluginNames.length === 0) {
      console.error('Error: No valid plugin names provided');
      process.exit(1);
    }

    console.log(`Starting migration for ${pluginNames.length} plugin(s): ${pluginNames.join(', ')}`);

    const results = [];
    for (const pluginName of pluginNames) {
      const result = await processPlugin(pluginName);
      results.push(result);
    }

    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    console.log('\n=== Migration Summary ===');
    console.log(`Total plugins: ${results.length}`);
    console.log(`Successful: ${successful.length}`);
    console.log(`Failed: ${failed.length}`);

    if (successful.length > 0) {
      console.log('\nSuccessful migrations:');
      successful.forEach(r => console.log(`  ✓ ${r.pluginName} (${r.entryId})`));
    }

    if (failed.length > 0) {
      console.log('\nFailed migrations:');
      failed.forEach(r => console.log(`  ✗ ${r.pluginName}: ${r.error}`));
      process.exit(1);
    }

    console.log('\n✓ All plugins migrated successfully!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
