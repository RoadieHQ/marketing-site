#!/usr/bin/env node

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
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

function mapToContentfulFields(frontmatter, body, logoAssetId = null, coverImageAssetId = null) {
  const installationInstructions = frontmatter.gettingStarted 
    ? convertGettingStartedToMarkdown(frontmatter.gettingStarted)
    : '';
    
  const fields = {
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

  // Add logo asset reference if provided
  if (logoAssetId) {
    fields.logoImage = logoAssetId;
  }

  // Add cover image asset reference if provided
  if (coverImageAssetId) {
    fields.coverImage = coverImageAssetId;
  }

  return fields;
}

// Get MIME type from file extension
function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

// Upload file to Contentful and create asset (generic function)
async function uploadImageAsset(imagePath, humanName, assetType = 'Logo') {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_CONTENT_MANAGEMENT_API_TOKEN;
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID || 'master';

  if (!accessToken || !spaceId) {
    throw new Error('Missing required environment variables for Contentful');
  }

  // Resolve the full path to the image
  const imagePathFromRoot = imagePath.split('/').slice(2);
  const fullImagePath = join(__dirname, '..', 'content', ...imagePathFromRoot);
  
  try {
    // Read the file
    const fileBuffer = readFileSync(fullImagePath);
    const fileName = imagePath.split('/').pop();
    const mimeType = getMimeType(fullImagePath);

    // Step 1: Upload file to Contentful
    console.log(`  Uploading ${assetType.toLowerCase()} file: ${fileName}`);
    const uploadResponse = await fetch(`https://upload.contentful.com/spaces/${spaceId}/uploads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/octet-stream',
      },
      body: fileBuffer
    });

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      throw new Error(`Failed to upload file: ${uploadResponse.status} ${uploadResponse.statusText}\n${errorText}`);
    }

    const upload = await uploadResponse.json();
    console.log(`  ✓ File uploaded with ID: ${upload.sys.id}`);

    // Step 2: Create asset
    console.log(`  Creating ${assetType.toLowerCase()} asset for ${humanName}...`);
    const assetData = {
      fields: {
        title: {
          'en-US': `${humanName} Plugin ${assetType}`
        },
        file: {
          'en-US': {
            fileName: fileName,
            contentType: mimeType,
            uploadFrom: {
              sys: {
                type: 'Link',
                linkType: 'Upload',
                id: upload.sys.id
              }
            }
          }
        }
      }
    };

    const assetResponse = await fetch(`https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json'
      },
      body: JSON.stringify(assetData)
    });

    if (!assetResponse.ok) {
      const errorText = await assetResponse.text();
      throw new Error(`Failed to create asset: ${assetResponse.status} ${assetResponse.statusText}\n${errorText}`);
    }

    const asset = await assetResponse.json();
    console.log(`  ✓ Asset created with ID: ${asset.sys.id}`);

    // Step 3: Process the asset (required to make it available)
    console.log(`  Processing ${assetType.toLowerCase()} asset...`);
    const processResponse = await fetch(`https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets/${asset.sys.id}/files/en-US/process`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Contentful-Version': asset.sys.version
      }
    });

    if (!processResponse.ok) {
      const errorText = await processResponse.text();
      throw new Error(`Failed to process asset: ${processResponse.status} ${processResponse.statusText}\n${errorText}`);
    }

    console.log(`  ✓ ${assetType} asset processed successfully`);

    // Return asset reference for linking
    return {
      sys: {
        type: 'Link',
        linkType: 'Asset',
        id: asset.sys.id
      }
    };

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`  ⚠ ${assetType} file not found: ${fullImagePath}`);
      return null;
    }
    throw error;
  }
}

// Upload logo image asset
async function uploadLogoAsset(logoImagePath, humanName) {
  return uploadImageAsset(logoImagePath, humanName, 'Logo');
}

// Upload cover image asset  
async function uploadCoverImageAsset(coverImagePath, humanName) {
  return uploadImageAsset(coverImagePath, humanName, 'Cover Image');
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

    // Handle logo image upload if present
    let logoAssetId = null;
    if (frontmatter.logoImage) {
      console.log(`Processing logo image: ${frontmatter.logoImage}`);
      logoAssetId = await uploadLogoAsset(frontmatter.logoImage, frontmatter.humanName);
      if (logoAssetId) {
        console.log(`✓ Logo uploaded and linked`);
      }
    }

    // Handle cover image upload if present
    let coverImageAssetId = null;
    if (frontmatter.coverImage) {
      console.log(`Processing cover image: ${frontmatter.coverImage}`);
      coverImageAssetId = await uploadCoverImageAsset(frontmatter.coverImage, frontmatter.humanName);
      if (coverImageAssetId) {
        console.log(`✓ Cover image uploaded and linked`);
      }
    }

    const contentfulFields = mapToContentfulFields(frontmatter, body, logoAssetId, coverImageAssetId);

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
