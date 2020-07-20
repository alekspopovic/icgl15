import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import sponsorStyles from "../styles/sponsors.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Sponsors = props => {
  const data = useStaticQuery(graphql`
    {
      blockAndRoll: file(relativePath: { eq: "blockandroll.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aleks: file(relativePath: { eq: "aleks.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
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
              <Img fluid={data.blockAndRoll.childImageSharp.fluid} />
            </a>
          </div>
          <div className={sponsorStyles.sponsorContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://aleksandarpopovic.com/"
            >
              <Img fluid={data.aleks.childImageSharp.fluid} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sponsors
