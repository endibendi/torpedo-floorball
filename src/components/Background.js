import * as React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./background.module.scss"

const query = graphql`
  {
    file(relativePath: { eq: "heroBackground.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BackgroundImageSection = ({ children }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <div className={styles.heroWrapper}>
      <BackgroundImage Tag="div" fluid={fluid} className={styles.bcg}>
        <div className="container">{children}</div>
      </BackgroundImage>
    </div>
  )
}

export default BackgroundImageSection
