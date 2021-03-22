import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Layout } from "../components"
import SEO from "../components/_seo"

const blogpostTemplate = ({ data }) => {
  const {
    datum,
    title,
    postKep,
    postszoveg: { postszoveg },
  } = data.post

  return (
    <Layout>
      <SEO title={title} />
      <GatsbyImage
        image={postKep.gatsbyImageData}
        alt="article image alt"
        // className={styles.articleImg}
        objectFit="cover"
        objectPosition="center center"
      />
      <section>
        <div className="container">
          <h1>{title}</h1>
          <span>{datum}</span>
          <div style={{ padding: "20px 0 65px 0" }}>
            <p>{postszoveg}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    post: contentfulBlogPoszt(slug: { eq: $slug }) {
      datum(formatString: "YYYY MM DD")
      title
      postszoveg {
        postszoveg
      }
      postKep {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          height: 400
        )
      }
    }
  }
`

export default blogpostTemplate
