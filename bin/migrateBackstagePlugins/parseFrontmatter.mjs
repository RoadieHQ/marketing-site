import { load } from 'js-yaml';

export default function parseFrontmatter(content) {
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
