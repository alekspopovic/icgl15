import React from "react"
import { Link } from "gatsby"
import layoutStyles from "../styles/layout.module.css"
import Sticky from "react-stickynode"
import Footer from "./footer"
import labels from "../data/menuLabels"
// import image from "../../content/images/kalemegdan.jpg"

class Layout extends React.Component {
  formatMenuUrl(url) {
    if (this.language) {
      return `/${this.language}${url}`
    }

    return url
  }

  getMenuItemLabel(item) {
    return labels[this.language][item]
  }

  render() {
    const { children } = this.props
    const { headerText, subHeaderText, language } = this.props

    this.language = language

    console.log(labels[language])

    let stickyMenu = (
      <Sticky innerZ={100} enabled={true}>
        <div id={layoutStyles.menu}>
          <Link
            activeClassName={layoutStyles.active}
            to={this.formatMenuUrl("/")}
          >
            <div>{this.getMenuItemLabel("home")}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={this.formatMenuUrl("/callForPapers")}
          >
            <div>{this.getMenuItemLabel("callForPapers")}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={this.formatMenuUrl("/workshops")}
          >
            <div>{this.getMenuItemLabel("workshops")}</div>
          </Link>
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

          <Link activeClassName={layoutStyles.active} to="/blog">
            <div>{this.getMenuItemLabel("news")}</div>
          </Link>
          <Link
            activeClassName={layoutStyles.active}
            to={this.formatMenuUrl("/contact")}
          >
            <div>{this.getMenuItemLabel("contact")}</div>
          </Link>
        </div>
      </Sticky>
    )

    let headerTextClass

    let header = (
      <div className={headerTextClass}>
        <h1 className={layoutStyles.headerTitle}>{headerText}</h1>
        <div>
          <h2 className={layoutStyles.headerSubTitle}>{subHeaderText}</h2>
        </div>
      </div>
    )

    return (
      <div>
        <header>
          {stickyMenu}
          {header}
          {/* <img src={image} alt="kalemegdan" /> */}
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
