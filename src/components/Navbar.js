import * as React from "react"
import { Link } from "gatsby"

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="nav-logo">
            <Link to="/">Navbar Logo</Link>
          </h3>
          <button
            aria-label="menu toggle button"
            className="toggle-btn"
            onClick={toggle}
          >
            button
          </button>
        </div>
        <div className="links-container">
          <ul>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
