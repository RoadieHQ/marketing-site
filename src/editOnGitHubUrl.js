const editOnGitHubUrl = ({ siteMetadata, node, nodeSourcePath }) => {
  const charStart = node.fileAbsolutePath.indexOf(nodeSourcePath);
  const projectRootPath = node.fileAbsolutePath.slice(charStart, node.fileAbsolutePath.length);
  // This URL will be incorrect until the document has been merged to the 'main' branch on
  // GitHub because `blob/main` is hardcoded into the sourceCodeUrl. We only need this link
  // to work in production though so that's ok.
  return `${siteMetadata.sourceCodeUrl}${projectRootPath}`;
};

export default editOnGitHubUrl;
