import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/_seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Floorball" />
    <div className="container">
      <h1>Floorball</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
