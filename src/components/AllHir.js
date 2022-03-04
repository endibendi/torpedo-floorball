import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HirList from "./HirList"

const query = graphql`
  {
    allContentfulBlogPoszt(sort: { fields: datum, order: DESC }) {
      nodes {
        title
        slug
        datum(formatString: "YYYY MM DD")
        id
        postKep {
          gatsbyImageData(
            quality: 100
            layout: CONSTRAINED
            height: 600
            width: 387
            resizingBehavior: FILL
          )
        }
      }
    }
  }
`

const AllHirek = () => {
  const data = useStaticQuery(query)
  const posts = data.allContentfulBlogPoszt.nodes

  return (
    <section id="hirek">
      <HirList posts={posts} />
    </section>
  )
}

export default AllHirek

//   {
//     allContentfulBlogPoszt(limit: 6) {
//       nodes {
//         title
//         slug
//         datum
//         id
//         postKep {
//           gatsbyImageData(quality: 100, layout: CONSTRAINED)
//         }
//       }
//     }
//   }
// `
