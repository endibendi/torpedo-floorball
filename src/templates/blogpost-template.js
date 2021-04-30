import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Layout } from "../components"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Seo from "../components/_seo"

import * as styles from "../styles/template.module.scss"

const blogpostTemplate = ({ data }) => {
  const { datum, title, postKep, videoUrl, text } = data.post

  const options = {
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

  return (
    <Layout>
      <Seo title={title} image={postKep.gatsbyImageData.images.fallback.src} />
      {/* {postKep.gatsbyImageData && (
        <GatsbyImage
          image={postKep.gatsbyImageData}
          alt="article image alt"
          className={styles.articleImg}
          objectFit="cover"
          quality="100"
          objectPosition="center 30%"
        />
      )} */}
      <section>
        <div className="container">
          <h1>{title}</h1>
          <span>{datum}</span>
          <div style={{ padding: "20px 0 65px 0" }}>
            {videoUrl && (
              <div className="iframe-wrapper">
                <iframe
                  className="video"
                  width="560"
                  height="315"
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {renderRichText(text, options)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default blogpostTemplate

export const query = graphql`
  query getSinglePost($slug: String) {
    post: contentfulBlogPoszt(slug: { eq: $slug }) {
      datum(formatString: "YYYY MM DD")
      title
      videoUrl
      postKep {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          height: 400
        )
      }
      text: posztSzoveg {
        raw
      }
    }
  }
`
