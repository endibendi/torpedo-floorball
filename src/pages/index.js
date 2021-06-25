import * as React from "react"
import { Layout, IndexHero, AllHir, Tamogatok } from "../components"
import Seo from "../components/_seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Főoldal" />
    <IndexHero />
    <div className="container">
      <AllHir />
      <Tamogatok />
    </div>
  </Layout>
)

export default IndexPage
