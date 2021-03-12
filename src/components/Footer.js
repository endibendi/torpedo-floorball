import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="center">
          <span>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
