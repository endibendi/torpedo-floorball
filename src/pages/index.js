import * as React from "react"
import { IndexLayout, IndexHero, Hirek } from "../components"
import SEO from "../components/_seo"

const IndexPage = () => (
  <IndexLayout>
    <SEO title="Home" />
    <IndexHero />
    <div className="container">
      <Hirek />
    </div>
  </IndexLayout>
)

export default IndexPage
