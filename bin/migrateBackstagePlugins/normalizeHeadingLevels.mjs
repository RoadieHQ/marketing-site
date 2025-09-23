export default function normalizeHeadingLevels(markdownContent) {
  if (!markdownContent) {
    return '';
  }

  const lines = markdownContent.split('\n');
  const normalizedLines = [];
  let wasUnderH1OrH2 = false; // Track if we've seen h1 or h2 headings
  
  for (const line of lines) {
    // Match heading lines (lines that start with # characters)
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    
    if (headingMatch) {
      const hashCount = headingMatch[1].length;
      const headingText = headingMatch[2];
      
      if (hashCount === 1 || hashCount === 2) {
        // Convert h1 and h2 to h3
        wasUnderH1OrH2 = true;
        normalizedLines.push(`### ${headingText}`);
      } else if (hashCount === 3) {
        // If we've seen h1/h2 before, convert h3 to h4
        // Otherwise, keep as h3
        if (wasUnderH1OrH2) {
          normalizedLines.push(`#### ${headingText}`);
        } else {
          normalizedLines.push(`### ${headingText}`);
        }
      } else if (hashCount >= 4) {
        // Convert h4, h5, h6 to bold text
        normalizedLines.push(`**${headingText}**`);
      }
    } else {
      // Non-heading line, keep as-is
      normalizedLines.push(line);
      
      // Reset the h1/h2 tracking if we encounter a blank line
      // This helps with documents that have multiple sections
      if (line.trim() === '') {
        // Keep wasUnderH1OrH2 state to maintain hierarchy within the document
      }
    }
  }
  
  return normalizedLines.join('\n');
}
