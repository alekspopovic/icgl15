import React from "react"
import footerStyles from "../styles/footer.module.css"

const Footer = props => {
  const { footerNoOffset } = props
  let offsetClass

  if (footerNoOffset) {
    offsetClass = footerStyles.noOffset
  }

  return (
    <footer className={`${footerStyles.footer} ${offsetClass}`}>
      <span>Faculty of Philology, Department of Modern Greek Language </span>
      <span>
        © {new Date().getFullYear()} | Built by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://aleksandarpopovic.com/"
        >
          Aleksandar Popović
        </a>
      </span>
    </footer>
  )
}

export default Footer
