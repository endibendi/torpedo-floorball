import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Layout } from "../components"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Seo from "../components/_seo"

import * as styles from "../styles/template.module.scss"

const blogpostTemplate = ({ data }) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        if (node.data.uri.includes("youtube.com/embed")) {
          return (
            <span className={styles.iframeContainer}>
              <iframe
                className="video"
                width="560"
                height="315"
                src={node.data.uri}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </span>
          )
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <GatsbyImage
            image={node.data.target.gatsbyImageData}
            alt="article image"
            objectFit="contain"
            layout="fullWidth"
            quality="100"
            objectPosition="center 30%"
            style={{ marginBottom: "60px" }}
          />
        )
      },
    },
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

  const { datum, title, postKep, text } = data.post

  return (
    <Layout>
      <Seo title={title} image={postKep.gatsbyImageData.images} />
      {/*
       --- Ez lenne a post borito kepe ---
       {postKep.gatsbyImageData && (
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
          <div
            style={{ padding: "65px 0 120px 0" }}
            className={styles.blogpostContainer}
          >
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
      postKep {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
          height: 1600
          width: 2400
        )
      }
      text: posztSzoveg {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
          }
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  }
`
