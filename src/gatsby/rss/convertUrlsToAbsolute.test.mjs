import { convertUrlsToAbsolute } from './convertUrlsToAbsolute.mjs';

describe('convertUrlsToAbsolute', () => {
  describe('markdown links', () => {
    it('should convert single relative link to absolute', () => {
      const input = '[something](/hello)';
      const expected = '[something](https://roadie.io/hello)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should convert multiple relative links to absolute', () => {
      const input = '[link1](/path1) and [link2](/path2)';
      const expected = '[link1](https://roadie.io/path1) and [link2](https://roadie.io/path2)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should convert relative links with trailing slashes', () => {
      const input = '[docs](/docs/)';
      const expected = '[docs](https://roadie.io/docs/)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should convert relative links with query parameters', () => {
      const input = '[search](/search?q=test)';
      const expected = '[search](https://roadie.io/search?q=test)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should convert relative links with anchors', () => {
      const input = '[section](/docs/getting-started#installation)';
      const expected = '[section](https://roadie.io/docs/getting-started#installation)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should not modify absolute URLs', () => {
      const input = '[external](https://example.com/path)';
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });

    it('should not modify relative URLs without leading slash', () => {
      const input = '[relative](./path) and [other](../path)';
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });

    it('should not modify anchor-only links', () => {
      const input = '[anchor](#section)';
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });

    it('should handle empty link text', () => {
      const input = '[](/hello)';
      const expected = '[](https://roadie.io/hello)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should handle complex link text with special characters', () => {
      const input = '[Check out **this** _cool_ `feature`!](/features)';
      const expected = '[Check out **this** _cool_ `feature`!](https://roadie.io/features)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });
  });

  describe('markdown images', () => {
    it('should convert relative image to absolute', () => {
      const input = '![alt text](/images/photo.jpg)';
      const expected = '![alt text](https://roadie.io/images/photo.jpg)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should convert multiple relative images to absolute', () => {
      const input = '![img1](/img1.png) and ![img2](/img2.jpg)';
      const expected = '![img1](https://roadie.io/img1.png) and ![img2](https://roadie.io/img2.jpg)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should not modify absolute image URLs', () => {
      const input = '![external](https://cdn.example.com/image.png)';
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });

    it('should handle empty alt text', () => {
      const input = '![](/images/photo.jpg)';
      const expected = '![](https://roadie.io/images/photo.jpg)';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });
  });

  describe('HTML links', () => {
    it('should convert relative href with double quotes', () => {
      const input = '<a href="/about">About</a>';
      const expected = '<a href="https://roadie.io/about">About</a>';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should convert relative href with single quotes', () => {
      const input = "<a href='/about'>About</a>";
      const expected = "<a href='https://roadie.io/about'>About</a>";
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should convert multiple HTML links', () => {
      const input = '<a href="/page1">Page 1</a> and <a href="/page2">Page 2</a>';
      const expected = '<a href="https://roadie.io/page1">Page 1</a> and <a href="https://roadie.io/page2">Page 2</a>';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should not modify absolute hrefs', () => {
      const input = '<a href="https://example.com">External</a>';
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });

    it('should handle links with additional attributes', () => {
      const input = '<a href="/docs" class="link" target="_blank">Docs</a>';
      const expected = '<a href="https://roadie.io/docs" class="link" target="_blank">Docs</a>';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });
  });

  describe('HTML images', () => {
    it('should convert relative src with double quotes', () => {
      const input = '<img src="/images/logo.png" alt="Logo">';
      const expected = '<img src="https://roadie.io/images/logo.png" alt="Logo">';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should convert relative src with single quotes', () => {
      const input = "<img src='/images/logo.png' alt='Logo'>";
      const expected = "<img src='https://roadie.io/images/logo.png' alt='Logo'>";
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should not modify absolute src', () => {
      const input = '<img src="https://cdn.example.com/image.png">';
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });

    it('should handle images with additional attributes', () => {
      const input = '<img src="/logo.png" width="100" height="50" alt="Logo">';
      const expected = '<img src="https://roadie.io/logo.png" width="100" height="50" alt="Logo">';
      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });
  });

  describe('mixed content', () => {
    it('should convert all relative URLs in mixed markdown and HTML', () => {
      const input = `
# Title

Here is a [markdown link](/docs) and an ![image](/img.png).

<p>Also an <a href="/about">HTML link</a> and <img src="/logo.png"></p>

More [links](/path1) and [links](/path2).
      `.trim();

      const expected = `
# Title

Here is a [markdown link](https://roadie.io/docs) and an ![image](https://roadie.io/img.png).

<p>Also an <a href="https://roadie.io/about">HTML link</a> and <img src="https://roadie.io/logo.png"></p>

More [links](https://roadie.io/path1) and [links](https://roadie.io/path2).
      `.trim();

      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });
  });

  describe('custom base URL', () => {
    it('should use custom base URL when provided', () => {
      const input = '[link](/path)';
      const expected = '[link](https://custom.example.com/path)';
      expect(convertUrlsToAbsolute(input, 'https://custom.example.com')).toBe(expected);
    });

    it('should handle custom base URL without trailing slash', () => {
      const input = '[link](/path)';
      const expected = '[link](https://example.org/path)';
      expect(convertUrlsToAbsolute(input, 'https://example.org')).toBe(expected);
    });
  });

  describe('edge cases', () => {
    it('should handle null input', () => {
      expect(convertUrlsToAbsolute(null)).toBe(null);
    });

    it('should handle undefined input', () => {
      expect(convertUrlsToAbsolute(undefined)).toBe(undefined);
    });

    it('should handle empty string', () => {
      expect(convertUrlsToAbsolute('')).toBe('');
    });

    it('should handle non-string input', () => {
      expect(convertUrlsToAbsolute(123)).toBe(123);
      expect(convertUrlsToAbsolute({})).toEqual({});
    });

    it('should handle markdown with no URLs', () => {
      const input = 'Just plain text with no links at all.';
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });

    it('should handle malformed markdown links', () => {
      const input = '[broken link(/path)';
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });

    it('should not break on consecutive slashes', () => {
      const input = '[link](//example.com/path)';
      // Protocol-relative URLs should not be modified
      expect(convertUrlsToAbsolute(input)).toBe(input);
    });
  });

  describe('real-world examples', () => {
    it('should handle typical blog post content', () => {
      const input = `
We've released a new feature! Check out the [documentation](/docs/features/new-feature)
for more details.

![Screenshot](/images/screenshots/new-feature.png)

You can also visit our [pricing page](/pricing/) to learn more.
      `.trim();

      const expected = `
We've released a new feature! Check out the [documentation](https://roadie.io/docs/features/new-feature)
for more details.

![Screenshot](https://roadie.io/images/screenshots/new-feature.png)

You can also visit our [pricing page](https://roadie.io/pricing/) to learn more.
      `.trim();

      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });

    it('should handle documentation cross-references', () => {
      const input = `
See also:
- [Getting Started](/docs/getting-started/)
- [API Reference](/docs/api/)
- [Troubleshooting](/docs/troubleshooting#common-issues)
      `.trim();

      const expected = `
See also:
- [Getting Started](https://roadie.io/docs/getting-started/)
- [API Reference](https://roadie.io/docs/api/)
- [Troubleshooting](https://roadie.io/docs/troubleshooting#common-issues)
      `.trim();

      expect(convertUrlsToAbsolute(input)).toBe(expected);
    });
  });
});
