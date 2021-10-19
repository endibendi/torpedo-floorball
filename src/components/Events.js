import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    allContentfulEsemeny {
      nodes {
        esemenyNeve
        helyszin
        idopont
        resztvevok
        id
      }
    }
  }
`

const Events = () => {
  const data = useStaticQuery(query)
  const esemenyek = data.allContentfulEsemeny.nodes

  return (
    <div>
      {esemenyek.map((esemeny, id) => {
        const { esemenyNeve, helyszin, idopont, resztvevok } = esemeny
        return (
          <div className="esemeny">
            <h5>{esemenyNeve}</h5>
            <p>{resztvevok ? resztvevok : ""}</p>
            <p>{idopont ? idopont : ""}</p>
            <p>{helyszin ? helyszin : ""}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Events
