import pick from 'lodash/pick';
import get from 'lodash/get';

const mapContentfulBlogPostToMarkdownRemarkBlogPost = ({ node }) => ({
  node: {
    frontmatter: {
      ...pick(node, ['title', 'tags', 'date', 'lastValidated']),

      description: get(node, 'description.childMarkdownRemark.rawMarkdownBody', ''),

      author: {
        name: node.author.name,
        avatar: {
          childImageSharp: {
            gatsbyImageData: get(node, 'author.avatar.gatsbyImageData'),
          },
        },
      },
    },

    timeToRead: node.body.childMarkdownRemark.timeToRead,
    html: get(node, 'body.childMarkdownRemark.html'),

    fields: {
      slug: node.slug,
    },

    coverImage: node.coverImage,
  },
});

export default mapContentfulBlogPostToMarkdownRemarkBlogPost;
