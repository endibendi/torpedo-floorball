import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/_seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <h1>Hi from the floorball page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
