import React from "react"
import BackgroundImage from "./Background"
import * as styles from "./indexhero.module.scss"

const IndexHero = () => {
  return (
    <BackgroundImage>
      <div className={styles.indexHero}>
        <div className={styles.flexWrapper}>
          <h1>Torpedo Floorball</h1>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default IndexHero
