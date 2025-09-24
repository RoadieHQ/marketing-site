import { readFileSync } from 'fs';
import { dirname, join, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

//
// Upload file to Contentful and create asset (generic function)
export default async function uploadImageAsset(imagePath, humanName, assetType = 'Logo', waitForProcessing = false) {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_CONTENT_MANAGEMENT_API_TOKEN;
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID || 'master';

  if (!accessToken || !spaceId) {
    throw new Error('Missing required environment variables for Contentful');
  }

  // Resolve the full path to the image
  const imagePathFromRoot = imagePath.split('/').slice(2);
  const fullImagePath = join(__dirname, '..', '..', 'content', ...imagePathFromRoot);
  
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
    
    // For content images, use assetType as the title directly (it's the alt text)
    // For logo/cover images, use the traditional format
    const assetTitle = (assetType === 'Logo' || assetType === 'Cover Image') 
      ? `${humanName} Plugin ${assetType}`
      : assetType; // For content images, assetType is the alt text
    
    const assetData = {
      fields: {
        title: {
          'en-US': assetTitle
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

    const assetUploadResponse = await fetch(`https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json'
      },
      body: JSON.stringify(assetData)
    });

    if (!assetUploadResponse.ok) {
      const errorText = await assetUploadResponse.text();
      throw new Error(`Failed to create asset: ${assetUploadResponse.status} ${assetUploadResponse.statusText}\n${errorText}`);
    }

    const assetUpload = await assetUploadResponse.json();

    console.log(`  ✓ Asset created with ID: ${assetUpload.sys.id}`);

    // Step 3: Process the asset (required to make it available)
    console.log(`  Sending ${assetType.toLowerCase()} asset for processing...`);
    const processResponse = await fetch(`https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets/${assetUpload.sys.id}/files/en-US/process`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Contentful-Version': assetUpload.sys.version
      }
    });

    if (!processResponse.ok) {
      const errorText = await processResponse.text();
      throw new Error(`Failed to send asset: ${processResponse.status} ${processResponse.statusText}\n${errorText} for processing.`);
    }

    if (!waitForProcessing) {
      console.log(`  ✓ ${assetType} asset sent for processing successfully. Not waiting for processing to finish.`);
      return {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: assetUpload.sys.id,
        }
      };
    }

    const retries = 3
    for (let attempt = 1; attempt <= retries; attempt++) {
      await new Promise(resolve => setTimeout(resolve, 10000 * attempt));

      try {
        const assetResponse = await fetch(`https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets/${assetUpload.sys.id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/vnd.contentful.management.v1+json'
          },
        });

        if (!assetResponse.ok) {
          throw new Error(`Failed to find asset: ${assetUpload.sys.id} after procssing.`);
        }

        const asset = await assetResponse.json();

        if (!asset.fields.file) {
          throw new Error(`Asset: ${assetUpload.sys.id} has not finished processing.`);
        }
        console.log(`  ✓ Asset processed successfully: ${asset.fields.file.url}`);

        // Return asset reference for linking
        return {
          sys: {
            type: 'Link',
            linkType: 'Asset',
            id: asset.sys.id,
            url: asset.fields.file.url,
          }
        };
      } catch (error) {
        console.log(`  ⏳ Attempt ${attempt} failed with error: ${error.message}`);
      }

      if (attempt < retries) {
        console.log("Retrying...");
      }
    }
    
    throw new Error(`All ${retries} attempts failed`);

    // Wait for the asset to process.

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`  🚫 ${assetType} file not found: ${fullImagePath}`);
      return null;
    }
    throw error;
  }
}
