import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import sponsorStyles from "../styles/sponsors.module.css"
import blockAndRoll from "../assets/blockandroll.jpg"
import aleks from "../assets/logo.png"

const Sponsors = props => {
  return (
    <Layout language="el" location={props.location}>
      <SEO title="Sponsors" pagePath={props.location.pathname} />
      <div className={contentStyles.content}>
        <h2>Χορηγοί</h2>
        <div className={sponsorStyles.sponsors}>
          <div className={sponsorStyles.sponsorContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.block.rs/"
            >
              <img src={blockAndRoll} alt="Block and Roll Logo" />
            </a>
          </div>
          <div className={sponsorStyles.sponsorContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://aleksandarpopovic.com/"
            >
              <img src={aleks} alt="Aleksandar Popovic Logo" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sponsors
