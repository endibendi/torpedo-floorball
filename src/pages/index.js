import * as React from "react"
import { Layout, IndexHero, AllHir } from "../components"
import SEO from "../components/_seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHero />
    <div className="container">
      <AllHir />
    </div>
  </Layout>
)

export default IndexPage
