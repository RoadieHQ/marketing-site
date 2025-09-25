import normalizeHeadingLevels from './normalizeHeadingLevels.mjs';
import processMarkdownImages from './processMarkdownImages.mjs';

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


export default async function mapToContentfulFields(
  frontmatter,
  body,
  logoAssetId = null,
  coverImageAssetId = null,
  slug,
  absMarkdownPath,
) {
  const installationInstructions = frontmatter.gettingStarted 
    ? convertGettingStartedToMarkdown(frontmatter.gettingStarted)
    : '';
    
  // Normalize heading levels in intro and notes content
  const normalizedIntroduction = normalizeHeadingLevels(frontmatter.intro);
  const normalizedNotes = normalizeHeadingLevels(body.trim());
  
  // Process images in introduction and notes content
  console.log('Processing images in introduction...');
  const processedIntroduction = await processMarkdownImages(normalizedIntroduction, frontmatter.humanName, absMarkdownPath);
  
  console.log('Processing images in notes...');  
  const processedNotes = await processMarkdownImages(normalizedNotes, frontmatter.humanName, absMarkdownPath);
    
  const fields = {
    humanName: frontmatter.humanName,
    slug,
    heading: frontmatter.heading,
    lead: frontmatter.lead,
    npmPackageName: frontmatter.npmjsPackage,
    codeLocation: frontmatter.codeLocation,
    attributionText: frontmatter.attribution?.text,
    introduction: processedIntroduction,
    seoTitle: frontmatter.seo?.title,
    // Strips out newlines in the seo description and replaces thenwith a single whitespace.
    seoDescription: frontmatter.seo?.description?.replace(/\s*\n\s*/g, ' '),
    availableOnRoadie: frontmatter.availableOnRoadie,
    roadieDocsPath: frontmatter.roadieDocsPath,
    installationInstructions: installationInstructions,
    notes: processedNotes,
  };

  if (frontmatter.attribution?.href) {
    fields.attributionUrl = frontmatter.attribution?.href;
  }

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
