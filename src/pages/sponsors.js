import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import sponsorStyles from "../styles/sponsors.module.css"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import blockAndRoll from "../assets/blockandroll.jpg"
import aleks from "../assets/aleks.png"

const Sponsors = props => {
  // const data = useStaticQuery(graphql`
  //   {
  //     blockAndRoll: file(relativePath: { eq: "blockandroll.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     aleks: file(relativePath: { eq: "aleks.png" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout language="en" location={props.location}>
      <SEO title="Sponsors" pagePath={props.location.pathname} />
      <div className={contentStyles.content}>
        <h2>Sponsors</h2>
        <div className={sponsorStyles.sponsors}>
          <div className={sponsorStyles.sponsorContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.block.rs/"
            >
              {/* <Img fluid={data.blockAndRoll.childImageSharp.fluid} /> */}
              <img src={blockAndRoll} alt="Block and Roll Logo" />
            </a>
          </div>
          <div className={sponsorStyles.sponsorContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://aleksandarpopovic.com/"
            >
              {/* <Img fluid={data.aleks.childImageSharp.fluid} /> */}
              <img src={aleks} alt="Aleksandar Popovic Logo" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sponsors
