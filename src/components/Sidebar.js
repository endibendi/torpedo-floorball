import React from "react"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <div className="container">
        <button
          aria-label="close button"
          className="close-btn"
          onClick={toggle}
        >
          Becsuk
        </button>
        <div className="links-container">
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
