import React from "react"
import { Link } from "gatsby"
import layoutStyles from "../styles/layout.module.css"
import Sticky from "react-stickynode"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const { headerText, subHeaderText } = this.props

    let stickyMenu = (
      <Sticky innerZ={100} enabled={true}>
        <div id={layoutStyles.menu}>
          <Link activeClassName={layoutStyles.active} to="/">
            <div>home</div>
          </Link>
          <Link activeClassName={layoutStyles.active} to="/blog">
            <div>news</div>
          </Link>
          <Link activeClassName={layoutStyles.active} to="/contact">
            <div>contact</div>
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
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
