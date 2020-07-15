import React from "react"
import { Link } from "gatsby"
import buttonStyles from "../styles/button.module.css"

class Button extends React.Component {
  render() {
    const { isExternal, url, text, isCentered } = this.props

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
        {text}
      </Link>
    )
  }
}

export default Button
