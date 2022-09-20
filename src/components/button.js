import React from "react"
import { Link } from "gatsby"
import buttonStyles from "../styles/button.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

class Button extends React.Component {
  render() {
    const {
      isExternal,
      url,
      text,
      isCentered,
      iconLeft,
      iconRight,
    } = this.props

    if (isExternal) {
      return (
        <a
          className={`${buttonStyles.button} ${
            isCentered ? buttonStyles.centered : ""
          }`}
          href={url}
        >
          {text}
        </a>
      )
    }

    return (
      <Link
        className={`${buttonStyles.button} ${
          isCentered ? buttonStyles.centered : ""
        }`}
        to={url}
      >
        {iconLeft && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            title="arrowLeft"
            className={buttonStyles.leftArrow}
          />
        )}
        {text}
        {iconRight && (
          <FontAwesomeIcon
            icon={faChevronRight}
            title="arrowRight"
            className={buttonStyles.rightArrow}
          />
        )}
      </Link>
    )
  }
}

export default Button
