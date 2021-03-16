import * as React from "react"
import { Link } from "gatsby"
import { IndexLayout } from "../components"
import SEO from "../components/seo"

const IndexPage = () => (
  <IndexLayout>
    <SEO title="Home" />
    <div className="container">
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <Link to="/floorball/">Go to floorball page</Link>
      <div>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
      <Link to="/floorball/">Go to floorball page</Link>
    </div>
  </IndexLayout>
)

export default IndexPage
