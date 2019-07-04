const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve('./src/templates/blog.js')

  const res = await graphql(`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: ASC
        }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(item => {
    const slug = item.node.slug
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}
