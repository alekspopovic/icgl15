import React from "react"
import { Link } from "gatsby"
import languageSelectorStyles from "../styles/languageSelector.module.css"

class LanguageSelector extends React.Component {
  render() {
    const { language, location, isBlogPostPage } = this.props

    let languageList = { sr: "srpski", en: "english", el: "Ελληνικά" }

    delete languageList[language]

    let links = []

    let pageName = location.pathname

    if (location.pathname.includes("el") || location.pathname.includes("sr")) {
      pageName = location.pathname.split("/")[2]
    }

    for (var key in languageList) {
      let languagePath = ""

      if (key !== "en" && !pageName.includes("news") && !isBlogPostPage) {
        languagePath = `/${key}/`
      }

      let link = (
        <Link key={key} to={`${languagePath}${pageName}`}>
          {languageList[key]}
        </Link>
      )

      links.push(link)
    }

    return <div id={languageSelectorStyles.languageSelector}>{links}</div>
  }
}

export default LanguageSelector
