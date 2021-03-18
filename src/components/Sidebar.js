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
              <Link to="/floorball">Floorball</Link>
            </li>
            <li>Link1</li>
            <li>Link1</li>
            <li>
              <Link to="/kapcsolat">Kapcsolat</Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
