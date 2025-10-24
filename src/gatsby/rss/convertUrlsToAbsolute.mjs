/**
 * Converts relative URLs in markdown to absolute URLs.
 *
 * Handles:
 * - Markdown links: [text](/path) -> [text](https://roadie.io/path)
 * - Markdown images: ![alt](/path) -> ![alt](https://roadie.io/path)
 * - HTML links: <a href="/path"> -> <a href="https://roadie.io/path">
 * - HTML images: <img src="/path"> -> <img src="https://roadie.io/path">
 *
 * @param {string} markdown - The markdown content to process
 * @param {string} [baseUrl='https://roadie.io'] - The base URL to use for absolute URLs
 * @returns {string} - The markdown with relative URLs converted to absolute
 */
export function convertUrlsToAbsolute(markdown, baseUrl = 'https://roadie.io') {
  if (!markdown || typeof markdown !== 'string') {
    return markdown;
  }

  let result = markdown;

  // Convert markdown links: [text](/path) -> [text](https://roadie.io/path)
  // Matches [any text](url) where url starts with / but not //
  result = result.replace(/\[([^\]]*)\]\(\/(?!\/)([^)]*)\)/g, `[$1](${baseUrl}/$2)`);

  // Convert markdown images: ![alt](/path) -> ![alt](https://roadie.io/path)
  result = result.replace(/!\[([^\]]*)\]\(\/(?!\/)([^)]*)\)/g, `![$1](${baseUrl}/$2)`);

  // Convert HTML links: href="/path" -> href="https://roadie.io/path"
  result = result.replace(/href=(["'])\/(?!\/)([^\1]*?)\1/g, `href=$1${baseUrl}/$2$1`);

  // Convert HTML images: src="/path" -> src="https://roadie.io/path"
  result = result.replace(/src=(["'])\/(?!\/)([^\1]*?)\1/g, `src=$1${baseUrl}/$2$1`);

  return result;
}
