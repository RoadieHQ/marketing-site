import uploadImageAsset from './uploadImageAsset.mjs';

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
export default async function processMarkdownImages(markdownContent, humanName) {
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
      console.log(`  ⚠ Skipping external image: ${image.imagePath}`);
      continue;
    }

    // Skip URLs that are already Contentful assets
    if (image.imagePath.includes('images.ctfassets.net')) {
      console.log(`  ⚠ Skipping existing Contentful asset: ${image.imagePath}`);
      continue;
    }

    try {
      console.log(`  Processing image: ${image.imagePath} (alt: "${image.altText}")`);
      
      // Upload image to Contentful
      const assetReference = await uploadImageAsset(
        image.imagePath, 
        humanName, 
        image.altText || 'Image' // Use alt text as asset title
      );

      if (assetReference) {
        // Get the asset ID from the reference
        const assetId = assetReference.sys.id;
        
        // We need to wait for the asset to be processed and get the actual file URL
        // For now, we'll use the asset ID pattern that Contentful uses
        // The actual CDN URL will be available after processing
        const spaceId = process.env.CONTENTFUL_SPACE_ID;
        const contentfulUrl = `//images.ctfassets.net/${spaceId}/${assetId}`;
        
        // Replace the image reference in the markdown
        const newImageReference = `![${image.altText}](${contentfulUrl})`;
        
        // Update the content by replacing the original reference
        updatedContent = updatedContent.substring(0, image.index) + 
                        newImageReference + 
                        updatedContent.substring(image.index + image.fullMatch.length);
        
        console.log(`  ✓ Replaced image reference with Contentful URL: ${contentfulUrl}`);
        
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
        console.log(`  ⚠ Failed to upload image, keeping original reference: ${image.imagePath}`);
      }

    } catch (error) {
      console.log(`  ⚠ Error processing image ${image.imagePath}: ${error.message}`);
    }
  }

  return updatedContent;
}

// Export the parsing function for testing
export { parseMarkdownImages };
