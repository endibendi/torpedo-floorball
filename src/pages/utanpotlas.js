import * as React from "react"
import { Layout } from "../components"
import Seo from "../components/_seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/floorball.module.scss"

const Utanpotlas = () => (
  <Layout>
    <Seo title="Floorball" />
    <div className="container">
      <h1>Utánpótlás</h1>
    </div>

    <section className={styles.aboutFloorball}>
      <div className="container">
        <StaticImage
          src="../images/best_player__3_.png"
          alt="floorball játékos"
          objectFit="cover"
          loading="eager"
          style={{ overflow: "visible", marginBottom: "20px" }}
        />

        <div>
          <p>
            Csapatunk az idei évben megújítja az utánpótlását, mivel célunk,
            hogy a következő idényben ismét csapatot indítsunk az Országos
            Bajnokság valamennyi fiú utánpótlás bajnokságában. Kiknek a
            jelentkezését várjuk?
          </p>
          <p>
            🏒10-14 éves korosztály <br />
            🏒 szereti a csapatsportokat <br />
            🥅Hokiban szerzett tapasztalat előnyt jelent!
          </p>
          <p>
            Edzések helyszíne: Budapest 13. kerület, Gyöngyösi sétány 7.
            (Számtech Általános Iskola) Edzések időpontja hétfőnként 16:00 -
            17:00
          </p>
          <p>
            Amennyiben szeretné, hogy gyereke(i) is kipróbálják magukat a
            floorballban és egy szuper közösséghez tartozzanak, jelentkését
            várjuk:
          </p>
          <p>
            📩emailen{" "}
            <a href="mailto:torpedo.floorball@gmail.com" className="link">
              (torpedo.floorball@gmail.com),
            </a>{" "}
            <br /> 📞telefonon{" "}
            <a href="tel:+3620 801 3032" className="link">
              (0620 801 3032),
            </a>
            <br /> 💬vagy facebook üzenetben (
            <a
              href="https://www.facebook.com/torpedofloorball"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Facebook"
              className="link"
            >
              https://www.facebook.com/torpedofloorball
            </a>
            )
          </p>
          <p>
            az{" "}
            <a
              href="https://atte.hu"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Angyalföldi Természetbarát és Testedző Egyesület honlapja"
              className="link"
            >
              Angyalföldi Természetbarát és Testedző Egyesület
            </a>
            és az{" "}
            <a
              href="https://asidse.hu"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Angyalföldi Természetbarát és Testedző Egyesület honlapja"
              className="link"
            >
              Angyalföldi Sportiskola és DSE
            </a>{" "}
            közreműködésével!
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default Utanpotlas
