import React, { useState } from "react"
import { Link } from "gatsby"
import layoutStyles from "../styles/layout.module.css"
import Footer from "./footer"
import labels from "../data/menuLabels"
import Sidebar from "./sidebar"
import LogoImage from "../assets/Logo.svg"
import LanguageSelector from "./languageSelector"

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
  const [isAbstractsMenuOpen, setIsAbstractsMenuOpen] = useState(false)
  const [isCommitteesMenuOpen, setIsCommitteesMenuOpen] = useState(false)
  const [isInformationMenuOpen, setIsInformationMenuOpen] = useState(false)

  const toggleMenu = () => {
    if (isAbstractsMenuOpen) {
      setIsAbstractsMenuOpen(false)
    } else if (isCommitteesMenuOpen) {
      setIsCommitteesMenuOpen(false)
    } else if (isInformationMenuOpen) {
      setIsInformationMenuOpen(false)
    } else {
      setIsMenuOpen(!isMenuOpen)
    }
  }

  const openSubMenu = submenu => {
    if (submenu === "abstracts") {
      if (!isAbstractsMenuOpen) {
        setIsAbstractsMenuOpen(true)
      }
    } else if (submenu === "committees") {
      if (!isCommitteesMenuOpen) {
        setIsCommitteesMenuOpen(true)
      }
    } else if (submenu === "information") {
      if (!isInformationMenuOpen) {
        setIsInformationMenuOpen(true)
      }
    }
  }

  const closeSubMenues = () => {
    setIsAbstractsMenuOpen(false)
    setIsCommitteesMenuOpen(false)
    setIsInformationMenuOpen(false)
  }

  let stickyMenu = (
    <div id={layoutStyles.menu} className={isMenuOpen ? layoutStyles.show : ""}>
      <Link
        activeClassName={layoutStyles.active}
        to={formatMenuUrl("/", language)}
      >
        <div> {getMenuItemLabel("home", language)}</div>
      </Link>
      <div
        className={layoutStyles.dropdown}
        onClick={() => openSubMenu("abstracts")}
        onKeyDown={() => openSubMenu("abstracts")}
        role="button"
        tabIndex={0}
      >
        <div>{getMenuItemLabel("abstracts", language)}</div>
        <div
          className={`${layoutStyles.dropdownContent} ${
            language === "en"
              ? layoutStyles.alignEngOne
              : layoutStyles.alignGrOne
          } ${isAbstractsMenuOpen ? layoutStyles.showSubMenu : ""}`}
        >
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/callForPapers/", language)}
          >
            <div>{getMenuItemLabel("callForPapers", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/registration/", language)}
          >
            <div>{getMenuItemLabel("registration", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/programme/", language)}
          >
            <div>{getMenuItemLabel("programme", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/bookOfAbstracts/", language)}
          >
            <div>{getMenuItemLabel("bookOfAbstracts", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/proceedings/", language)}
          >
            <div>{getMenuItemLabel("proceedings", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/statistics/", language)}
            onBlur={closeSubMenues}
          >
            <div>{getMenuItemLabel("statistics", language)}</div>
          </Link>
        </div>
      </div>

      <div
        className={layoutStyles.dropdown}
        onClick={() => openSubMenu("committees")}
        onKeyDown={() => openSubMenu("committees")}
        role="button"
        tabIndex={0}
      >
        <div>{getMenuItemLabel("committees", language)}</div>
        <div
          className={`${layoutStyles.dropdownContent} ${
            language === "en"
              ? layoutStyles.alignEngTwo
              : layoutStyles.alignGrTwo
          } ${isCommitteesMenuOpen ? layoutStyles.showSubMenu : ""}`}
        >
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/organizingCommittee/", language)}
          >
            <div>{getMenuItemLabel("organizingCommittee", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/scientificCommittee/", language)}
          >
            <div>{getMenuItemLabel("scientificCommittee", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/reviewers/", language)}
            onBlur={closeSubMenues}
          >
            <div>{getMenuItemLabel("reviewers", language)}</div>
          </Link>
        </div>
      </div>
      <div
        className={layoutStyles.dropdown}
        onClick={() => openSubMenu("information")}
        onKeyDown={() => openSubMenu("information")}
        role="button"
        tabIndex={0}
      >
        {getMenuItemLabel("information", language)}
        <div
          className={`${layoutStyles.dropdownContent} ${
            language === "en"
              ? layoutStyles.alignEngThree
              : layoutStyles.alignGrThree
          } ${isInformationMenuOpen ? layoutStyles.showSubMenu : ""}`}
        >
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/accommodation/", language)}
          >
            <div>{getMenuItemLabel("accommodation", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/touristGuide/", language)}
          >
            <div>{getMenuItemLabel("touristGuide", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/travelInfo/", language)}
          >
            <div>{getMenuItemLabel("travelInfo", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/socialProgramme/", language)}
          >
            <div>{getMenuItemLabel("socialProgramme", language)}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={formatMenuUrl("/location/", language)}
            onBlur={closeSubMenues}
          >
            <div>{getMenuItemLabel("location", language)}</div>
          </Link>
        </div>
      </div>
      <Link
        activeClassName={layoutStyles.active}
        to={formatMenuUrl("/pastConferences/", language)}
      >
        <div>{getMenuItemLabel("pastConferences", language)}</div>
      </Link>
      <Link activeClassName={layoutStyles.active} to="/news/">
        <div>{getMenuItemLabel("news", language)}</div>
      </Link>
      <Link
        activeClassName={layoutStyles.active}
        to={formatMenuUrl("/contact/", language)}
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
