import normalizeHeadingLevels from './normalizeHeadingLevels.mjs';

describe('normalizeHeadingLevels', () => {
  test('should handle empty or null input', () => {
    expect(normalizeHeadingLevels('')).toBe('');
    expect(normalizeHeadingLevels(null)).toBe('');
    expect(normalizeHeadingLevels(undefined)).toBe('');
  });

  test('should convert H1 headings to H3', () => {
    const input = '# Main Title\nSome content here.';
    const expected = '### Main Title\nSome content here.';
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should convert H2 headings to H3', () => {
    const input = '## Section Title\nSome content here.';
    const expected = '### Section Title\nSome content here.';
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should keep H3 as H3 when no H1/H2 present', () => {
    const input = '### Subsection Title\nSome content here.';
    const expected = '### Subsection Title\nSome content here.';
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should convert H3 to H4 when H1/H2 are present', () => {
    const input = `# Main Title
Some content.

### Subsection Title
More content.`;
    const expected = `### Main Title
Some content.

#### Subsection Title
More content.`;
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should convert H4, H5, H6 to bold text', () => {
    const input = `#### Details
##### More Details
###### Even More Details`;
    const expected = `**Details**
**More Details**
**Even More Details**`;
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should handle complex document with mixed headings', () => {
    const input = `# Main Title
Introduction paragraph.

## Section One
Content for section one.

### Subsection A
Details about subsection A.

#### Deep heading
##### Deeper heading
###### Deepest heading

### Subsection B
More content.

## Section Two
Final section content.`;

    const expected = `### Main Title
Introduction paragraph.

### Section One
Content for section one.

#### Subsection A
Details about subsection A.

**Deep heading**
**Deeper heading**
**Deepest heading**

#### Subsection B
More content.

### Section Two
Final section content.`;

    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should handle document starting with H3 (no H1/H2)', () => {
    const input = `### First Section
Some content.

### Second Section
More content.

#### Details
##### More Details`;

    const expected = `### First Section
Some content.

### Second Section
More content.

**Details**
**More Details**`;

    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should handle headings with multiple spaces', () => {
    const input = `#    Title with extra spaces
##     Another title
###      And another`;
    const expected = `### Title with extra spaces
### Another title
#### And another`;
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should preserve non-heading content', () => {
    const input = `# Title
This is a paragraph.

- List item 1
- List item 2

\`\`\`javascript
const code = "example";
\`\`\`

## Another section
More content.`;

    const expected = `### Title
This is a paragraph.

- List item 1
- List item 2

\`\`\`javascript
const code = "example";
\`\`\`

### Another section
More content.`;

    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should handle headings at the end of content', () => {
    const input = `Some initial content.

# Final Title`;
    const expected = `Some initial content.

### Final Title`;
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should handle edge case with only hash symbols', () => {
    const input = `# 
## 
### Content`;
    const expected = `### 
### 
#### Content`;
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should not modify lines that look like headings but are not', () => {
    const input = `This is not a # heading
# But this is a heading
Also not a#heading
And this # is not at start`;
    const expected = `This is not a # heading
### But this is a heading
Also not a#heading
And this # is not at start`;
    expect(normalizeHeadingLevels(input)).toBe(expected);
  });

  test('should handle consecutive headings', () => {
    const input = `# Title One
## Title Two
### Title Three
#### Title Four
##### Title Five
###### Title Six`;

    const expected = `### Title One
### Title Two
#### Title Three
**Title Four**
**Title Five**
**Title Six**`;

    expect(normalizeHeadingLevels(input)).toBe(expected);
  });
});
