import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./csapat.module.scss"

const CsapatList = ({ tagok = [] }) => {
  console.log(tagok)
  return (
    <div className={styles.csapatWrapper}>
     <div className={styles.articleWrapper}>
        {tagok.map((tag, id) => {
          const { nev, szerep, tagkep } = tag
          if (szerep === "kapus") {
            return (
              <article key={id}>
                <GatsbyImage
                  image={tagkep.gatsbyImageData}
                  className={styles.articleImg}
                  alt="tag kep"
                  objectFit="cover"
                  objectPosition="center top"
                  quality="100"
                />
                <div className={styles.articleInfo}>
                  <h3>{nev}</h3>
                  <p>{szerep}</p>
                </div>
              </article>
            )
          }
        })}
      </div>
      <div className={styles.articleWrapper}>
        {tagok.map((tag, id) => {
          const { nev, szerep, tagkep } = tag
          if (szerep === "védő") {
            return (
              <article key={id}>
                <GatsbyImage
                  image={tagkep.gatsbyImageData}
                  className={styles.articleImg}
                  alt="tag kep"
                  objectFit="cover"
                  objectPosition="center top"
                  quality="100"
                />
                <div className={styles.articleInfo}>
                  <h3>{nev}</h3>
                  <p>{szerep}</p>
                </div>
              </article>
            )
          }
        })}
      </div>
      <div className={styles.articleWrapper}>
        {tagok.map((tag, id) => {
          const { nev, szerep, tagkep } = tag
          if (szerep === "támadó") {
            return (
              <article key={id}>
                <GatsbyImage
                  image={tagkep.gatsbyImageData}
                  className={styles.articleImg}
                  alt="tag kep"
                  objectFit="cover"
                  objectPosition="center top"
                  quality="100"
                />
                <div className={styles.articleInfo}>
                  <h3>{nev}</h3>
                  <p>{szerep}</p>
                </div>
              </article>
            )
          }
        })}
      </div>
    </div>
  )
}

export default CsapatList
