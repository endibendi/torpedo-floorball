import * as React from "react"
import { Layout } from "../components"
import SEO from "../components/_seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/floorball.module.scss"

const Floorball = () => (
  <Layout>
    <SEO title="Floorball" />
    <div className="container">
      <h1>Floorball</h1>
    </div>
    <section className={styles.floorballSection}>
      <div className={styles.floorballWrapper}>
        <div className={styles.floorballContent}>
          <p>
            A floorball a labdajátékok csoportjába tartozó csapatjáték. Az
            egymás ellen játszó két csapat igyekszik ellenfele kapujába minél
            több gólt ütni.
          </p>
          <StaticImage
            src="../images/floorball-player.png"
            alt="floorball játékos"
            objectFit="cover"
            placeholder="tracedSVG"
            loading="eager"
            style={{ overflow: "visible" }}
            className={styles.img}
          />
        </div>
      </div>
    </section>
    <section className={styles.aboutFloorball}>
      <div className="container">
        <div className={styles.floorballFlexContainer}>
          <div>
            <p>
              A játék közben a gyorsaság és állóképesség mellett a labda
              megszerzése, továbbadása, ütése, a cselezés elképzelhetetlen
              kitűnő reflexek nélkül. A játékot teremben, 50 cm magas palánkkal
              elkerített játéktéren játsszák. A szabályai a veszély nélküli,
              sportszerű játékot segítik.
            </p>
            <p>
              A labda kezelése, továbbítása, valamint a lövések a futómozgással
              összhangban fejlesztik a törzs és a karok izomzatát, s fejlesztik
              a gyorsaságot, a gyorsasági állóképességet, s magát az
              állóképességet is.
            </p>
            <p>
              Természetesen az előbb említett kondicionális képességek mellet
              olyan koordinációs képességeket, mint az ügyesség, a téri
              tájékozódó képesség, egyensúlyérzék, ritmuskészség is remekül
              fejleszti. A játékban nagy szerep jut a térlátásnak,
              összpontosítóképességnek, és a gyors reflexnek.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <StaticImage
              src="../images/floorballball.png"
              alt="floorball labda"
              placeholder="tracedSVG"
              layout="fixed"
              width={327}
              height={327}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Floorball
