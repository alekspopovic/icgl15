import React, { useState } from "react"
import { Link } from "gatsby"
import layoutStyles from "../styles/layout.module.css"
import Footer from "./footer"
import labels from "../data/menuLabels"
import LanguageSelector from "./languageSelector"
import Sidebar from "./sidebar"
import LogoImage from "../assets/Logo.svg"

const Layout = props => {
  const formatMenuUrl = (url, language) => {
    if (language !== "en") {
      return `/${language}${url}`
    }

    return url
  }

  const getMenuItemLabel = (item, language) => {
    return labels[language][item]
  }

  const { children } = props
  const {
    language,
    location,
    isSidebarDisabled,
    isBlogPostPage,
    extraWide,
  } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const toggleMenu = () => {
    if (isSubMenuOpen) {
      toggleSubMenu()
    } else {
      setIsMenuOpen(!isMenuOpen)
    }
  }

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen)
  }

  const openSubMenu = () => {
    if (!isSubMenuOpen) {
      setIsSubMenuOpen(true)
    }
  }

  const closeSubMenu = () => {
    if (isSubMenuOpen) {
      setIsSubMenuOpen(false)
    }
  }

  let stickyMenu = (
    <div id={layoutStyles.menu} className={isMenuOpen ? layoutStyles.show : ""}>
      <Link
        activeClassName={layoutStyles.active}
        to={formatMenuUrl("/", language)}
      >
        <div>{getMenuItemLabel("home", language)}</div>
      </Link>
      <Link
        activeClassName={layoutStyles.active}
        to={formatMenuUrl("/committees", language)}
      >
        <div>{getMenuItemLabel("committees", language)}</div>
      </Link>
      <div
        className={layoutStyles.dropdown}
        onClick={toggleSubMenu}
        onKeyDown={openSubMenu}
        role="button"
        tabIndex={0}
      >
        {getMenuItemLabel("information", language)}
        <div
          className={`${layoutStyles.dropdownContent} ${
            isSubMenuOpen ? layoutStyles.showSubMenu : ""
          }`}
        >
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/programme", language)}
          >
            <div>{getMenuItemLabel("programme", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/registration", language)}
          >
            <div>{getMenuItemLabel("registration", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/accommodation", language)}
          >
            <div>{getMenuItemLabel("accommodation", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/location", language)}
            onBlur={closeSubMenu}
          >
            <div>{getMenuItemLabel("location", language)}</div>
          </Link>
        </div>
      </div>
      <Link
        activeClassName={layoutStyles.active}
        to={formatMenuUrl("/pastConferences", language)}
      >
        <div>{getMenuItemLabel("pastConferences", language)}</div>
      </Link>
      <Link activeClassName={layoutStyles.active} to="/news">
        <div>{getMenuItemLabel("news", language)}</div>
      </Link>
      <Link
        activeClassName={layoutStyles.active}
        to={formatMenuUrl("/contact", language)}
      >
        <div>{getMenuItemLabel("contact", language)}</div>
      </Link>

      <LanguageSelector
        language={language}
        location={location}
        isBlogPostPage={isBlogPostPage}
      />
    </div>
  )

  let sidebar = !isSidebarDisabled ? (
    <Sidebar language={language} extraWide={extraWide} />
  ) : null

  let mainBottomPadding

  if (isBlogPostPage) {
    mainBottomPadding = layoutStyles.mainBottomLargePadding
  }

  return (
    <React.Fragment>
      <button
        className={`${layoutStyles.menuToggle} ${
          isMenuOpen ? layoutStyles.open : ""
        }`}
        onClick={toggleMenu}
      >
        <div className={layoutStyles.bar1}></div>
        <div className={layoutStyles.bar2}></div>
        <div className={layoutStyles.bar3}></div>
      </button>
      <div className={layoutStyles.banner}></div>
      {stickyMenu}
      <Link to="/">
        <img className={layoutStyles.logo} src={LogoImage} alt="logo" />
      </Link>
      <main
        className={`${mainBottomPadding} ${
          extraWide ? layoutStyles.extraWide : ""
        }`}
      >
        {children}
        {sidebar}
      </main>
      <Footer isSidebarDisabled={isSidebarDisabled} />
    </React.Fragment>
  )
}

export default Layout
