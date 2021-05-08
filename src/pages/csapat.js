import * as React from "react"
import { Layout } from "../components"
import Seo from "../components/_seo"
import AllCsapat from "../components/AllCsapat"

const Csapat = () => {
  return (
    <Layout>
      <Seo title="Csapat tagok" />
      <div className="container">
        <h1>Csapat tagok</h1>
      </div>
      <section>
        <div className="container">
          <AllCsapat />
        </div>
      </section>
    </Layout>
  )
}

export default Csapat
