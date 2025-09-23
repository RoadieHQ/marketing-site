export default async function createContentfulEntry(fields) {
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

