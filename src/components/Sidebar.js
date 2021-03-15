import React from "react"
import * as styles from "./sidebar.module.scss"

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
          Becsuk
        </button>
        <div className={styles.linksContainer}>
          <ul>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
