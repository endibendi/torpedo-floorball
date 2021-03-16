import * as React from "react"
import { Link } from "gatsby"
import { IndexLayout, Hirek } from "../components"
import SEO from "../components/_seo"

const IndexPage = () => (
  <IndexLayout>
    <SEO title="Home" />
    <div className="container">
      <Hirek />
    </div>
  </IndexLayout>
)

export default IndexPage
