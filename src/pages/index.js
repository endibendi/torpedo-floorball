import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout, Hero } from "../components"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>Torpedo Floorball</h1>
      <StaticImage
        src="../images/120046377_3380784328685238_4277071382816534389_o.jpg"
        alt="a csapat"
        loading="eager"
        layout="fullWidth"
        quality="80"
      />
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
  </Layout>
)

export default IndexPage
