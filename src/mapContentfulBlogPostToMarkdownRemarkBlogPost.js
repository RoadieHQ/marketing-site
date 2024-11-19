import pick from 'lodash/pick';
import get from 'lodash/get';

const mapContentfulBlogPostToMarkdownRemarkBlogPost = ({ node }) => ({
  node: {
    frontmatter: {
      ...pick(node, ['title', 'tags', 'date', 'lastValidated']),

      description: get(node, 'description.childMarkdownRemark.rawMarkdownBody', ''),

      author: {
        name: get(node, 'author.name', 'Unspecified Author'),
        avatar: {
          childImageSharp: {
            gatsbyImageData: get(node, 'author.avatar.gatsbyImageData'),
          },
        },
      },
    },

    timeToRead: get(node, 'body.childMarkdownRemark.timeToRead'),
    html: get(node, 'body.childMarkdownRemark.html'),

    fields: {
      slug: node.slug,
    },

    coverImage: node.coverImage,
  },
});

export default mapContentfulBlogPostToMarkdownRemarkBlogPost;
