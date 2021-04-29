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
            <StaticImage
              src="../images/logo.svg"
              alt="logo"
              loading="eager"
              placeholder="blurred"
            />
          </Link>
          <div className={styles.linksContainer}>
            <ul>
              <li>
                <Link to="/" activeClassName="active">
                  főoldal
                </Link>
              </li>
              <li>
                <Link to="/floorball" activeClassName="active">
                  floorball
                </Link>
              </li>
              <li>
                <Link to="/csapat" activeClassName="active">
                  a csapat
                </Link>
              </li>
              <li>
                <Link to="/kapcsolat" activeClassName="active">
                  kapcsolat
                </Link>
              </li>
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
