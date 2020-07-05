import React from "react"
import { Link } from "gatsby"
import layoutStyles from "../styles/layout.module.css"
import Footer from "./footer"
import labels from "../data/menuLabels"
import LanguageSelector from "./languageSelector"
import Sidebar from "./sidebar"
import Button from "./button"
import LogoImage from "../assets/Logo.svg"
import SocialIcons from "./socialIcons"

class Layout extends React.Component {
  formatMenuUrl(url) {
    if (this.language !== "en") {
      return `/${this.language}${url}`
    }

    return url
  }

  getMenuItemLabel(item) {
    return labels[this.language][item]
  }

  render() {
    const { children } = this.props
    const {
      headerText,
      subHeaderText,
      language,
      location,
      isSidebarDisabled,
    } = this.props

    this.language = language

    let stickyMenu = (
      <div id={layoutStyles.menu}>
        <Link to="/">
          <img className={layoutStyles.logo} src={LogoImage} alt="logo" />
        </Link>
        {/* <Link
          activeClassName={layoutStyles.active}
          to={this.formatMenuUrl("/")}
        >
          <div>{this.getMenuItemLabel("home")}</div>
        </Link> */}
        <Link
          activeClassName={layoutStyles.active}
          to={this.formatMenuUrl("/committees")}
        >
          <div>{this.getMenuItemLabel("committees")}</div>
        </Link>
        <div className={layoutStyles.dropdown}>
          {this.getMenuItemLabel("information")}
          <div className={layoutStyles.dropdownContent}>
            <Link
              activeClassName={layoutStyles.active}
              to={this.formatMenuUrl("/callForPapers")}
            >
              <div>{this.getMenuItemLabel("callForPapers")}</div>
            </Link>
            <Link
              activeClassName={layoutStyles.active}
              to={this.formatMenuUrl("/programme")}
            >
              <div>{this.getMenuItemLabel("programme")}</div>
            </Link>
            <Link
              activeClassName={layoutStyles.active}
              to={this.formatMenuUrl("/registration")}
            >
              <div>{this.getMenuItemLabel("registration")}</div>
            </Link>
            <Link
              activeClassName={layoutStyles.active}
              to={this.formatMenuUrl("/accommodation")}
            >
              <div>{this.getMenuItemLabel("accommodation")}</div>
            </Link>
            <Link
              activeClassName={layoutStyles.active}
              to={this.formatMenuUrl("/location")}
            >
              <div>{this.getMenuItemLabel("location")}</div>
            </Link>
          </div>
        </div>

        <Link activeClassName={layoutStyles.active} to="/news">
          <div>{this.getMenuItemLabel("news")}</div>
        </Link>
        <Link
          activeClassName={layoutStyles.active}
          to={this.formatMenuUrl("/contact")}
        >
          <div>{this.getMenuItemLabel("contact")}</div>
        </Link>

        <LanguageSelector language={language} location={location} />
      </div>
    )

    let sidebar = !isSidebarDisabled ? <Sidebar language={language} /> : null

    let landingHeaderClass, button, socialIcons

    if (isSidebarDisabled) {
      landingHeaderClass = layoutStyles.landingHeader

      button = <Button isExternal={true} url="google.com" text="Register Now" />

      socialIcons = <SocialIcons language={language} />
    }

    return (
      <React.Fragment>
        <div className={layoutStyles.menuToggle}>
          <div className={layoutStyles.bar1}></div>
          <div className={layoutStyles.bar2}></div>
          <div className={layoutStyles.bar3}></div>
        </div>
        {stickyMenu}
        <header className={landingHeaderClass}>
          <h1 className={layoutStyles.headerTitle}>{headerText}</h1>
          <h2 className={layoutStyles.headerSubTitle}>{subHeaderText}</h2>
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
}

export default Layout
