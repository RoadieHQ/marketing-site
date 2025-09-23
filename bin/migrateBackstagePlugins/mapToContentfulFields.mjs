import normalizeHeadingLevels from './normalizeHeadingLevels.mjs';

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


export default function mapToContentfulFields(
  frontmatter,
  body,
  logoAssetId = null,
  coverImageAssetId = null
) {
  const installationInstructions = frontmatter.gettingStarted 
    ? convertGettingStartedToMarkdown(frontmatter.gettingStarted)
    : '';
    
  // Normalize heading levels in intro and notes content
  const normalizedIntroduction = normalizeHeadingLevels(frontmatter.intro);
  const normalizedNotes = normalizeHeadingLevels(body.trim());
    
  const fields = {
    humanName: frontmatter.humanName,
    heading: frontmatter.heading,
    lead: frontmatter.lead,
    npmPackageName: frontmatter.npmjsPackage,
    codeLocation: frontmatter.codeLocation,
    attributionText: frontmatter.attribution?.text,
    introduction: normalizedIntroduction,
    seoTitle: frontmatter.seo?.title,
    seoDescription: frontmatter.seo?.description,
    availableOnRoadie: frontmatter.availableOnRoadie,
    roadieDocsPath: frontmatter.roadieDocsPath,
    installationInstructions: installationInstructions,
    notes: normalizedNotes
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
