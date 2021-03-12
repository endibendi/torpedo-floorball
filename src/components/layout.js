import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [isOpen, setIsopen] = React.useState(false)

  const toggle = () => {
    setIsopen(!isOpen)
    console.log(isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
