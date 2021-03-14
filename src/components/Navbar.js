import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-center">
          <h3 className="nav-logo">
            <Link to="/">
              <StaticImage src="../images/logo.svg" alt="logo" />
            </Link>
          </h3>
          <div className="links-container">
            <ul>
              <li>Link1</li>
              <li>Link1</li>
              <li>Link1</li>
              <li>Link1</li>
            </ul>
          </div>
          <button
            aria-label="menu toggle button"
            className="toggle-btn"
            onClick={toggle}
          >
            <StaticImage src="../images/Hamburger.svg" alt="menu icon" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
