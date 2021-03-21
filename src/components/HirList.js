import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import * as styles from "./hirek.module.scss"

const HirList = ({ posts = [] }) => {
  return (
    <>
      <div className={styles.hirekWrapper}>
        <h2>Hírek</h2>
        <div className={styles.articleWrapper}>
          {posts.map(post => {
            const { id, title, postKep, slug, datum } = post
            console.log(post)

            return (
              <article key={id} className="articleCard">
                <GatsbyImage
                  image={postKep.gatsbyImageData}
                  alt="article image alt"
                  className={styles.articleImg}
                  objectFit="cover"
                  objectPosition="center 30%"
                />
                <Link to={`/hirek/${slug}`} className={styles.infoLink}>
                  <div className={styles.info}>
                    <h3>{title}</h3>
                    <span>{datum}</span>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
      <div className={styles.slider}>
        <FaAngleLeft className={styles.sliderIcon} />
        <div className={styles.numberContainer}>
          <span>1</span>
          <span className={styles.active}>2</span>
          <span>3</span>
        </div>
        <FaAngleRight className={styles.sliderIcon} />
      </div>
    </>
  )
}

export default HirList
