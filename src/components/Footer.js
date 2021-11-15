import React from "react"
import * as styles from "./footer.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import Events from "./Events"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerInfo}>
            <div className={styles.footerContent}>
              <div className={styles.footerInfoContainer}>
                <h4>Edzések</h4>
                <h5>Felnőtt edzésidőpontok:</h5>
                <p>Hétfő: 20:00-21:30</p>
                <p>Csütörtök: 19:00-20:30</p>
                <h5 className={styles.pt8}>Helyszín:</h5>
                <p>ATTE Sportcsarnok</p>
                <p>1139 Budapest, Rozsnyai u. 4.</p>
              </div>
              <div className={styles.footerInfoContainer}>
                <h4>Közelgő események:</h4>
                <Events />
              </div>
            </div>
            <div className={styles.footerSocial}>
              <a
                href="https://www.facebook.com/torpedofloorball"
                rel="noopener noreferrer nofollow"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/torpedofloorball"
                rel="noopener noreferrer nofollow"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Torpedo Floorball
          </span>
        </div>
        <div className={styles.imgContainer}>
          <StaticImage
            src="../images/floorballball.png"
            alt="floorball labda"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
