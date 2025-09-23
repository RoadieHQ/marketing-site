import { parseMarkdownImages } from './processMarkdownImages.mjs';

describe('parseMarkdownImages', () => {
  test('should handle empty or null input', () => {
    expect(parseMarkdownImages('')).toEqual([]);
    expect(parseMarkdownImages(null)).toEqual([]);
    expect(parseMarkdownImages(undefined)).toEqual([]);
  });

  test('should parse single image reference', () => {
    const input = 'Here is an image: ![Alt Text](path/to/image.png)';
    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      fullMatch: '![Alt Text](path/to/image.png)',
      altText: 'Alt Text',
      imagePath: 'path/to/image.png',
      index: 18
    });
  });

  test('should parse multiple image references', () => {
    const input = `First image: ![Image One](img1.png)
    
Some content here.

Second image: ![Image Two](img2.jpg) and more text.`;

    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      fullMatch: '![Image One](img1.png)',
      altText: 'Image One',
      imagePath: 'img1.png',
      index: 13
    });
    expect(result[1]).toEqual({
      fullMatch: '![Image Two](img2.jpg)',
      altText: 'Image Two', 
      imagePath: 'img2.jpg',
      index: 75
    });
  });

  test('should handle images with empty alt text', () => {
    const input = 'Image with no alt: ![](image.png)';
    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      fullMatch: '![](image.png)',
      altText: '',
      imagePath: 'image.png',
      index: 19
    });
  });

  test('should handle images with relative paths', () => {
    const input = 'Relative image: ![Screenshot](../../assets/screenshot.webp)';
    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      fullMatch: '![Screenshot](../../assets/screenshot.webp)',
      altText: 'Screenshot',
      imagePath: '../../assets/screenshot.webp',
      index: 16
    });
  });

  test('should handle images with complex alt text', () => {
    const input = 'Complex alt: ![Argo CD Plugin Overview - showing deployment status](../images/preview.png)';
    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      fullMatch: '![Argo CD Plugin Overview - showing deployment status](../images/preview.png)',
      altText: 'Argo CD Plugin Overview - showing deployment status',
      imagePath: '../images/preview.png',
      index: 13
    });
  });

  test('should handle images with special characters in path', () => {
    const input = 'Special chars: ![Test](images/file%20with%20spaces.png)';
    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      fullMatch: '![Test](images/file%20with%20spaces.png)',
      altText: 'Test',
      imagePath: 'images/file%20with%20spaces.png',
      index: 15
    });
  });

  test('should not parse text that looks like images but is not markdown', () => {
    const input = `This is not an image: [Alt Text](path.png)
    And this is not: ! [Alt Text](path.png)
    Neither is this: ![Alt Text] (path.png)`;
    
    const result = parseMarkdownImages(input);
    expect(result).toHaveLength(0);
  });

  test('should handle mixed content with images and other markdown', () => {
    const input = `# Title

Some paragraph with ![inline image](img1.png) in the middle.

## Section

Here's a code block:
\`\`\`javascript
const code = "example";
\`\`\`

And another image: ![Second Image](img2.png)

- List item with ![list image](img3.png)
- Another item`;

    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(3);
    expect(result[0].altText).toBe('inline image');
    expect(result[1].altText).toBe('Second Image');
    expect(result[2].altText).toBe('list image');
  });

  test('should preserve order of images as they appear in text', () => {
    const input = `![First](1.png) middle text ![Second](2.png) end text ![Third](3.png)`;
    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(3);
    expect(result[0].altText).toBe('First');
    expect(result[1].altText).toBe('Second');
    expect(result[2].altText).toBe('Third');
    expect(result[0].index).toBeLessThan(result[1].index);
    expect(result[1].index).toBeLessThan(result[2].index);
  });

  test('should handle images at start and end of content', () => {
    const input = `![Start Image](start.png)

Middle content here.

![End Image](end.png)`;

    const result = parseMarkdownImages(input);
    
    expect(result).toHaveLength(2);
    expect(result[0].altText).toBe('Start Image');
    expect(result[1].altText).toBe('End Image');
    expect(result[0].index).toBe(0);
  });
});