import React from "react"
import { Link } from "gatsby"
import languageSelectorStyles from "../styles/languageSelector.module.css"
import greekFlag from "../assets/greece.svg"
import ukFlag from "../assets/uk.svg"

const LanguageSelector = ({ location, isBlogPostPage }) => {
  let pageName = location.pathname

  if (pageName.includes("/icgl15-test")) {
    pageName = pageName.replace("/icgl15-test", "")
  }

  if (pageName.includes("/el")) {
    pageName = pageName.split("/")[2]
  }

  let greekPagePath

  if (!pageName.includes("news") && !isBlogPostPage) {
    greekPagePath = `/el/${pageName}`
  } else {
    greekPagePath = pageName
  }

  return (
    <div id={languageSelectorStyles.languageSelector}>
      <Link to={pageName}>
        <img src={ukFlag} alt="english language" />
        {/* eng */}
      </Link>
      <Link to={greekPagePath}>
        <img src={greekFlag} alt="greek language" />
        {/* Ελλ */}
      </Link>
    </div>
  )
}

export default LanguageSelector
