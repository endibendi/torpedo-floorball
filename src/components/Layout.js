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
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
