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
export default async function uploadImageAsset(imagePath, humanName, assetType = 'Logo') {
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
