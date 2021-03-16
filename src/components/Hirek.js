import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./hirek.module.scss"

const Hirek = () => {
  return (
    <>
      <div className={styles.hirekWrapper}>
        <h2>Hírek</h2>
        <article className="articleCard">
          <StaticImage
            src="../images/defaulthir.jpg"
            className={styles.articleImg}
            objectFit="cover"
            objectPosition="50% 20%"
          />
          <Link to="" className={styles.infoLink}>
            <div className={styles.info}>
              <h3>Kazinbarcikai Ördögök B - Torpedo ATTE 3:10</h3>
              <span>2021.03.16</span>
            </div>
          </Link>
        </article>
      </div>
    </>
  )
}

export default Hirek
