import React from "react"
import { StaticImage } from "gatsby-plugin-image" 
import * as styles from "./tamogatok.module.scss"

const Tamogatok = () => {
  return (
    <div>
      <h2>Támogatóink</h2>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <StaticImage
            src="../images/tamogatok/attelogo.jpg"
            alt="Atte logo"
            height= "200"
            width= "200"
          />
          <p>Angyalföldi Természetbarát és Testedző Egyesület</p>
        </div>
        <div className={styles.logoContainer}>
          <StaticImage
            src="../images/tamogatok/efloorball.png"
            alt="Atte logo"
            height= "200"
            width= "200"
          />
          <p>efloorball</p>
        </div>
      </div>
    </div>
  )
}

export default Tamogatok
