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
      {/* <div className={footerStyles.socialIcons}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/alekspopovic/"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/alekswritescode"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/aleks.popovic/"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepen.io/aleksandarp/"
        >
          <i className="fa fa-codepen"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alekspopovic"
        >
          <i className="fa fa-github"></i>
        </a>
      </div> */}
      Faculty of Philology © {new Date().getFullYear()} | Built by{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://aleksandarpopovic.com/"
      >
        Aleksandar Popovic
      </a>
    </footer>
  )
}

export default Footer
