import React from "react"
import BackgroundImage from "./Background"
import * as styles from "./indexhero.module.scss"

const IndexHero = () => {
  return (
    <BackgroundImage>
      <div className={styles.flexWrapper}>
        <h1>Torpedo Floorball</h1>
      </div>
    </BackgroundImage>
  )
}

export default IndexHero
