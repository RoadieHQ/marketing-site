#!/usr/bin/env node

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { load } from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse YAML frontmatter
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

// Convert gettingStarted array to markdown
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

// Map frontmatter fields to Contentful fields
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

// Create Contentful entry
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

async function main() {
  try {
    const markdownPath = join(__dirname, '..', 'content', 'backstage', 'plugins', 'argo-cd.md');
    const markdownContent = readFileSync(markdownPath, 'utf-8');
    
    const { frontmatter, body } = parseFrontmatter(markdownContent);
    console.log('Parsed frontmatter');

    const contentfulFields = mapToContentfulFields(frontmatter, body);

    console.log('Parsed frontmatter fields:');
    console.log(JSON.stringify(contentfulFields, null, 2));

    console.log('\nCreating Contentful entry...');
    const entry = await createContentfulEntry(contentfulFields);

    console.log('Successfully created Contentful entry:');
    console.log(`Entry ID: ${entry.sys.id}`);
    console.log(`Entry URL: https://app.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID || 'master'}/entries/${entry.sys.id}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
