import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import parseFrontmatter from './parseFrontmatter.mjs';
import uploadImageAsset from './uploadImageAsset.mjs';
import createContentfulEntry from './createContentfulEntry.mjs';
import mapToContentfulFields from './mapToContentfulFields.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Upload logo image asset
async function uploadLogoAsset(logoImagePath, humanName) {
  return uploadImageAsset(logoImagePath, humanName, 'Logo');
}

// Upload cover image asset  
async function uploadCoverImageAsset(coverImagePath, humanName) {
  return uploadImageAsset(coverImagePath, humanName, 'Cover Image');
}

export default async function processPlugin(pluginName) {
  console.log(`\nProcessing plugin: ${pluginName}`);
  
  const markdownPath = join(__dirname, '..', '..', 'content', 'backstage', 'plugins', `${pluginName}.md`);
  
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

