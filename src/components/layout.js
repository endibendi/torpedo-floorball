import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

import "../styles/layout.scss"

const Layout = ({ children }) => {
  const [isOpen, setIsopen] = React.useState(false)

  const toggle = () => {
    setIsopen(!isOpen)
    console.log(isOpen)
  }

  return (
    <>
      <div className="flex-container">
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
