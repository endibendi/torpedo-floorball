import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CsapatList from "./CsapatList"

export const query = graphql`
  {
    allContentfulCsapatTagok(sort: { fields: szerep }) {
      nodes {
        nev
        szerep
        tagkep {
          gatsbyImageData(
            quality: 100
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            height: 800
            resizingBehavior: FILL
          )
        }
      }
    }
  }
`

const AllCsapat = () => {
  const data = useStaticQuery(query)
  const tagok = data.allContentfulCsapatTagok.nodes

  return (
    <section id="tagok">
      <CsapatList tagok={tagok} />
    </section>
  )
}

export default AllCsapat
