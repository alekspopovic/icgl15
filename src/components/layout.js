import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
// import { motion } from "framer-motion"
import { Link } from "gatsby"
import layoutStyles from "../styles/layout.module.css"
import Footer from "./footer"
import labels from "../data/menuLabels"
import LanguageSelector from "./languageSelector"
import Sidebar from "./sidebar"
import Button from "./button"
import LogoImage from "../assets/Logo.svg"
import SocialIcons from "./socialIcons"

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
    headerText,
    // subHeaderText,
    language,
    location,
    isSidebarDisabled,
  } = props

  const [ref, inView] = useInView({
    rootMargin: "-100px 0px 0px 0px",
  })

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
    <div
      id={layoutStyles.menu}
      className={`${isMenuOpen ? layoutStyles.show : ""} ${
        inView ? "" : layoutStyles.inView
      }`}
    >
      <Link to="/">
        <img className={layoutStyles.logo} src={LogoImage} alt="logo" />
      </Link>
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
            to={formatMenuUrl("/callForPapers", language)}
          >
            <div>{getMenuItemLabel("callForPapers", language)}</div>
          </Link>
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

      <Link activeClassName={layoutStyles.active} to="/news">
        <div>{getMenuItemLabel("news", language)}</div>
      </Link>
      <Link
        activeClassName={layoutStyles.active}
        to={formatMenuUrl("/contact", language)}
      >
        <div>{getMenuItemLabel("contact", language)}</div>
      </Link>

      <LanguageSelector language={language} location={location} />
    </div>
  )

  let sidebar = !isSidebarDisabled ? <Sidebar language={language} /> : null

  let landingHeaderClass, button, socialIcons

  if (isSidebarDisabled) {
    landingHeaderClass = layoutStyles.landingHeader

    button = <Button isExternal={true} url="google.com" text="Register Now" />

    socialIcons = (
      <SocialIcons isSidebarDisabled={isSidebarDisabled} language={language} />
    )
  }

  let pageTitle = headerText ? headerText : "Placeholder Page Title"

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
      {stickyMenu}
      <header
        className={`${layoutStyles.header} ${landingHeaderClass}`}
        ref={ref}
      >
        <h1 className={layoutStyles.headerTitle}>{pageTitle}</h1>
        {/* <h2 className={layoutStyles.headerSubTitle}>{subHeaderText}</h2> */}
        {button}
        {socialIcons}
      </header>
      <main>
        {children}
        {sidebar}
      </main>
      <Footer isSidebarDisabled={isSidebarDisabled} />
    </React.Fragment>
  )
}

export default Layout
