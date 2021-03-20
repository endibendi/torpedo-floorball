import * as React from "react"
import { Layout, IndexHero, Hirek } from "../components"
import SEO from "../components/_seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHero />
    <div className="container">
      <Hirek />
    </div>
  </Layout>
)

export default IndexPage
