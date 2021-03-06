import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components"
import Seo from "../components/_seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404" />
    <div className="container">
      <h1>404: Not Found</h1>
      <p>A keresett oldal nem található!</p>
      <Link to="/" style={{ paddingTop: "20px" }}>
        Vissza a főoldalra
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
