import uploadImageAsset from './uploadImageAsset.mjs';
import path from 'node:path';

// Parse markdown content for image references
function parseMarkdownImages(markdownContent) {
  if (!markdownContent) {
    return [];
  }

  // Match markdown image syntax: ![alt text](image path)
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const images = [];
  let match;

  while ((match = imageRegex.exec(markdownContent)) !== null) {
    images.push({
      fullMatch: match[0],
      altText: match[1],
      imagePath: match[2],
      index: match.index
    });
  }

  return images;
}

// Upload images and replace references in markdown
export default async function processMarkdownImages(markdownContent, humanName, absMarkdownFilePath) {
  if (!markdownContent) {
    return markdownContent;
  }

  const images = parseMarkdownImages(markdownContent);
  
  if (images.length === 0) {
    return markdownContent;
  }

  console.log(`  Found ${images.length} image(s) in markdown content`);

  let updatedContent = markdownContent;

  // Process images from end to start to maintain string indices
  for (let i = images.length - 1; i >= 0; i--) {
    const image = images[i];
    
    // Skip external URLs (http/https)
    if (image.imagePath.startsWith('http://') || image.imagePath.startsWith('https://')) {
      console.log(`  ⚠️ Skipping external image: ${image.imagePath}`);
      continue;
    }

    // Skip URLs that are already Contentful assets
    if (image.imagePath.includes('images.ctfassets.net')) {
      console.log(`  ⚠️ Skipping existing Contentful asset: ${image.imagePath}`);
      continue;
    }

    try {
      console.log(`  Processing image: ${image.imagePath} (alt: "${image.altText}")`);

      const baseDir = path.dirname(absMarkdownFilePath);
      const absoluteImagePath = path.resolve(baseDir, image.imagePath);
      
      // Upload image to Contentful
      const assetReference = await uploadImageAsset(
        absoluteImagePath,
        humanName, 
        image.altText || 'Image',
        true,
      );

      if (assetReference) {
        const newImageReference = `![${image.altText}](${assetReference.sys.url})`;
        
        // Update the content by replacing the original reference
        updatedContent = updatedContent.substring(0, image.index) + 
                        newImageReference + 
                        updatedContent.substring(image.index + image.fullMatch.length);
        
        console.log(`  ✓ Replaced image reference with Contentful URL: ${assetReference.sys.url}`);
        
        // Adjust indices for remaining images since we changed the string length
        const lengthDifference = newImageReference.length - image.fullMatch.length;
        for (let j = 0; j < i; j++) {
          if (images[j].index < image.index) {
            // This image comes before the one we just replaced, no adjustment needed
          } else {
            // This shouldn't happen since we're processing from end to start
            images[j].index += lengthDifference;
          }
        }
      } else {
        console.log(`  🚫 Failed to upload image, keeping original reference: ${image.imagePath}`);
      }

    } catch (error) {
      console.log(`  🚫 Error processing image ${image.imagePath}: ${error.message}`);
    }
  }

  return updatedContent;
}

// Export the parsing function for testing
export { parseMarkdownImages };
