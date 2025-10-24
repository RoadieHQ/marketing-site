import remark from 'remark';
import remarkHTML from 'remark-html';
import { convertUrlsToAbsolute } from './convertUrlsToAbsolute.mjs';

const toHtml = remark().use(remarkHTML);

// We transform the rawMarkdownBody to HTML here, rather than querying 'html' in the 
// graphql query, because we want basic HTML in an RSS feed. If we query 'html' on the 
// graphql then plugins like gatsby-remark-autolink-headers will inject links and icons into
// the headers, and gatsby-remark-prismjs-copy-button will inject a copy button into the
// code blocks. These things won't work in RSS so let's keep them out,
const htmlForFeeds = (markdown) => {
  // Relative URLs like /backstage/plugins/ will not work if the HTML is consumed off-site
  // in an RSS feed reader. We need to make the absolute first.
  const processedMarkdown = convertUrlsToAbsolute(markdown);
  return toHtml.processSync(processedMarkdown).toString();
};

export default htmlForFeeds;
