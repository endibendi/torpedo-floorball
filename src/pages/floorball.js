import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/_seo"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/floorball.module.scss"

const SecondPage = () => (
  <Layout>
    <SEO title="Floorball" />
    <div className="container">
      <h1>Floorball</h1>
    </div>
    <section className={styles.floorballSection}>
      <div className={styles.floorballWrapper}>
        <div className="container">
          <div className={styles.floorballContent}>
            <p>
              A floorball a labdajátékok csoportjába tartozó csapatjáték. Az
              egymás ellen játszó két csapat igyekszik ellenfele kapujába minél
              több gólt ütni.
            </p>
            <StaticImage
              src="../images/floorball-player.png"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
