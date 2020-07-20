import React from "react"
import footerStyles from "../styles/footer.module.css"

const Footer = props => {
  const { footerNoOffset, isSidebarDisabled } = props
  let offsetClass

  if (footerNoOffset) {
    offsetClass = footerStyles.noOffset
  }

  let landingFooterClass

  if (isSidebarDisabled) {
    landingFooterClass = footerStyles.landingFooter
  }

  return (
    <footer
      className={`${footerStyles.footer} ${offsetClass} ${landingFooterClass}`}
    >
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
