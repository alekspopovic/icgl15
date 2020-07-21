import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sidebarStyles from "../styles/sidebar.module.css"
import "font-awesome/css/font-awesome.min.css"
// import NewsLink from "./newsLink"
import SocialIcons from "./socialIcons"

const Sidebar = ({ language, extraWide }) => {
  const data = useStaticQuery(graphql`
    {
      uniLogoImage: file(relativePath: { eq: "uniLogo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facultyLogoImage: file(relativePath: { eq: "facultyLogo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posterImage: file(relativePath: { eq: "posterImage.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let universityText =
    language === "en"
      ? "University of Belgrade"
      : "Πανεπιστήμιο του Βελιγραδίου"

  let facultyText =
    language === "en" ? "Faculty of Philology" : "Φιλολογική Σχολή"

  return (
    <div
      className={`${sidebarStyles.sidebar} ${
        extraWide ? sidebarStyles.wide : ""
      }`}
    >
      <div className={sidebarStyles.sidebarItem}>
        <div className={sidebarStyles.imageContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.poster.childImageSharp.fluid.src}
          >
            <Img fluid={data.posterImage.childImageSharp.fluid} />
          </a>
        </div>
      </div>
      <div className={sidebarStyles.sidebarItem}>
        <h3>{universityText}</h3>
        <div className={sidebarStyles.imageContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://bg.ac.rs/en/index.php"
          >
            <Img fluid={data.uniLogoImage.childImageSharp.fluid} />
          </a>
        </div>
      </div>
      <div className={sidebarStyles.sidebarItem}>
        <h3>{facultyText}</h3>
        <div className={sidebarStyles.imageContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.fil.bg.ac.rs/"
          >
            <Img
              fluid={data.facultyLogoImage.childImageSharp.fluid}
              className={sidebarStyles.facultyLogo}
            />
          </a>
        </div>
      </div>

      <SocialIcons language={language} />
    </div>
  )
}

export default Sidebar
