import React from "react"
import { Link } from "gatsby"
import * as styles from "./sidebar.module.scss"
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside
      className={styles.sidebar + " " + (isOpen ? styles.showSidebar : "")}
    >
      <div className="container">
        <button
          aria-label="close button"
          className={styles.closeBtn}
          onClick={toggle}
        >
          <FaTimes />
        </button>
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
      </div>
    </aside>
  )
}

export default Sidebar
