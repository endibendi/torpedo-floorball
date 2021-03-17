import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars } from "react-icons/fa"
import * as styles from "./navbar.module.scss"

const Navbar = ({ toggle }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navCenter}>
          <Link to="/" className={styles.navLogo}>
            <StaticImage src="../images/logo.svg" alt="logo" />
          </Link>
          <div className={styles.linksContainer}>
            <ul>
              <li>
                <Link to="/floorball">Floorball</Link>
              </li>
              <li>Link1</li>
              <li>Link1</li>
              <li>Link1</li>
            </ul>
          </div>
          <button
            aria-label="menu toggle button"
            className={styles.toggleBtn}
            onClick={toggle}
          >
            <FaBars className={styles.menuIcon} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
