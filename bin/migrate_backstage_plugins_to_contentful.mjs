#!/usr/bin/env node

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { load } from 'js-yaml';
import { parseArgs } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('No frontmatter found in markdown file');
  }
  
  const frontmatterYaml = match[1];
  const body = match[2];
  
  try {
    const frontmatter = load(frontmatterYaml);
    return {
      frontmatter,
      body
    };
  } catch (error) {
    throw new Error(`Failed to parse YAML frontmatter: ${error.message}`);
  }
}

function convertGettingStartedToMarkdown(gettingStarted) {
  if (!Array.isArray(gettingStarted)) {
    return '';
  }
  
  return gettingStarted.map((step) => {
    let markdown = '';
    
    // Add the intro text as a paragraph
    if (step.intro) {
      markdown += `${step.intro}\n\n`;
    }
    
    // Add the code block if present
    if (step.code) {
      const language = step.language || '';
      markdown += `\`\`\`${language}\n${step.code.trim()}\n\`\`\`\n\n`;
    }
    
    return markdown;
  }).join('').trim();
}

function mapToContentfulFields(frontmatter, body) {
  const installationInstructions = frontmatter.gettingStarted 
    ? convertGettingStartedToMarkdown(frontmatter.gettingStarted)
    : '';
    
  return {
    humanName: frontmatter.humanName,
    heading: frontmatter.heading,
    lead: frontmatter.lead,
    npmPackageName: frontmatter.npmjsPackage,
    codeLocation: frontmatter.codeLocation,
    attributionText: frontmatter.attribution?.text,
    introduction: frontmatter.intro,
    seoTitle: frontmatter.seo?.title,
    seoDescription: frontmatter.seo?.description,
    availableOnRoadie: frontmatter.availableOnRoadie,
    roadieDocsPath: frontmatter.roadieDocsPath,
    installationInstructions: installationInstructions,
    notes: body.trim()
  };
}

async function createContentfulEntry(fields) {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_CONTENT_MANAGEMENT_API_TOKEN;
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID || 'master';

  if (!accessToken) {
    throw new Error('CONTENTFUL_CONTENT_MANAGEMENT_API_TOKEN environment variable is required');
  }

  if (!spaceId) {
    throw new Error('CONTENTFUL_SPACE_ID environment variable is required');
  }
  
  const url = `https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries`;
  
  const entry = {
    fields: {}
  };
  
  // Map each field to Contentful format (with locale)
  Object.entries(fields).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      entry.fields[key] = {
        'en-US': value
      };
    }
  });
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/vnd.contentful.management.v1+json',
      'X-Contentful-Content-Type': 'backstagePlugin'
    },
    body: JSON.stringify(entry)
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create Contentful entry: ${response.status} ${response.statusText}\n${errorText}`);
  }
  
  return await response.json();
}

async function processPlugin(pluginName) {
  console.log(`\nProcessing plugin: ${pluginName}`);
  
  const markdownPath = join(__dirname, '..', 'content', 'backstage', 'plugins', `${pluginName}.md`);
  
  try {
    const markdownContent = readFileSync(markdownPath, 'utf-8');
    
    const { frontmatter, body } = parseFrontmatter(markdownContent);
    console.log(`✓ Parsed frontmatter for ${pluginName}`);

    const contentfulFields = mapToContentfulFields(frontmatter, body);

    console.log(`Creating Contentful entry for ${pluginName}...`);
    const entry = await createContentfulEntry(contentfulFields);

    console.log(`✓ Successfully created Contentful entry for ${pluginName}`);
    console.log(`  Entry ID: ${entry.sys.id}`);
    console.log(`  Entry URL: https://app.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID || 'master'}/entries/${entry.sys.id}`);
    
    return { success: true, pluginName, entryId: entry.sys.id };
  } catch (error) {
    console.error(`✗ Failed to process ${pluginName}: ${error.message}`);
    return { success: false, pluginName, error: error.message };
  }
}

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
