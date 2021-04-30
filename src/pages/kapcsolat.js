import * as React from "react"
import { Layout } from "../components"
import Seo from "../components/_seo"

import * as styles from "../styles/kapcsolat.module.scss"

const Kapcsolat = () => (
  <Layout>
    <Seo title="Kapcsolat" />
    <div className="container">
      <h1>Kapcsolat</h1>
    </div>

    <section>
      <div className="container">
        <div className={styles.contactInfo}>
          <h2>Felnőtt csapat</h2>
          <div className={styles.contactWrapper}>
            <p>Akcal Richárd csapatvezető</p>
            <p>
              <a href="mailto:torpedo.floorball@gmail.com">
                torpedo.floorball@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+36208013032">+36 20 801 3032</a>
            </p>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h2>Tagdíjak</h2>
          <div className={styles.contactWrapper}>
            <p>Csapattagok: 8000 forint / hó</p>
            <p>Egyéni edzés: 1500 forint / alkalom</p>
            <p>Egyéni havi tagdíj: 9000 forint / hó</p>
          </div>
        </div>
        <div className={styles.terkep}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.407798065309!2d19.072434315628215!3d47.54039137918031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dbc6adc2dae7%3A0xaa787bd13f6818ad!2sAngyalf%C3%B6ldi%20Sportk%C3%B6zpont!5e0!3m2!1shu!2shu!4v1616084210261!5m2!1shu!2shu"
            width="100%"
            height="450"
            border="none"
            title="google map"
            frameborder="0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </Layout>
)

export default Kapcsolat
