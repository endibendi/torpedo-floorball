import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import * as styles from "./hirek.module.scss"

const Hirek = () => {
  return (
    <section id="hirek">
      <div className={styles.hirekWrapper}>
        <h2>Hírek</h2>
        <div className={styles.articleWrapper}>
          <article className="articleCard">
            <StaticImage
              src="../images/defaulthir.jpg"
              alt="article image alt"
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
          <article className="articleCard">
            <StaticImage
              src="../images/defaulthir.jpg"
              alt="article image alt"
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
          <article className="articleCard">
            <StaticImage
              src="../images/defaulthir.jpg"
              alt="article image alt"
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
          <article className="articleCard">
            <StaticImage
              src="../images/defaulthir.jpg"
              alt="article image alt"
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
          <article className="articleCard">
            <StaticImage
              src="../images/defaulthir.jpg"
              alt="article image alt"
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
          <article className="articleCard">
            <StaticImage
              src="../images/defaulthir.jpg"
              alt="article image alt"
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
    </section>
  )
}

export default Hirek
