import * as React from "react"
import { Layout, IndexHero, AllHir } from "../components"
import Seo from "../components/_seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Főoldal" />
    <IndexHero />
    <div className="container">
      <AllHir />
    </div>
  </Layout>
)

export default IndexPage
