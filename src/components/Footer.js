import React from "react"
import * as styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.center}>
          <span>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
