import React from "react"
import { Link } from "gatsby"
import socialIconsStyles from "../styles/socialIcons.module.css"
import "font-awesome/css/font-awesome.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const SocialIcons = ({ language, isSidebarDisabled }) => {
  let contactPrefix = ""

  if (language !== "en") {
    contactPrefix = language
  }

  return (
    <div
      className={`${socialIconsStyles.socialIcons} ${
        isSidebarDisabled ? socialIconsStyles.outsideSidebar : ""
      }`}
    >
      <Link
        className={socialIconsStyles.socialIcon}
        to={`${contactPrefix}/contact`}
      >
        <FontAwesomeIcon icon={faEnvelope} title="Email" />
      </Link>
      <a className={socialIconsStyles.socialIcon} href="facebook.com">
        <FontAwesomeIcon icon={faFacebook} title="Facebook" />
      </a>
      <a className={socialIconsStyles.socialIcon} href="twitter.com">
        <FontAwesomeIcon icon={faTwitter} title="Twitter" />
      </a>
    </div>
  )
}

export default SocialIcons
