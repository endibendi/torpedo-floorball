const path = require("path")

// create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    query getPosts {
      posts: allContentfulBlogPoszt {
        nodes {
          slug
        }
      }
    }
  `)

  res.data.posts.nodes.forEach(post => {
    createPage({
      path: `/hirek/${post.slug}`,
      component: path.resolve(`./src/templates/blogpost-template.js`),
      context: {
        slug: post.slug,
      },
    })
  })
}
