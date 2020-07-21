import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sidebarStyles from "../styles/sidebar.module.css"
import "font-awesome/css/font-awesome.min.css"
// import NewsLink from "./newsLink"
import SocialIcons from "./socialIcons"

const Sidebar = ({ language, extraWide }) => {
  // allMarkdownRemark(
  //   sort: { order: DESC, fields: frontmatter___date }
  //   limit: 3
  // ) {
  //   edges {
  //     node {
  //       fields {
  //         slug
  //       }
  //       frontmatter {
  //         date(formatString: "DD.MM.YYYY")
  //         title
  //       }
  //       id
  //     }
  //   }
  // }

  const data = useStaticQuery(graphql`
    {
      uniLogo: file(relativePath: { eq: "uni.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facultyImage: file(relativePath: { eq: "faculty.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      poster: file(relativePath: { eq: "poster.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const links = data.allMarkdownRemark.edges.map(edge => (
  //   <NewsLink key={edge.node.id} news={edge.node} />
  // ))

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
      {/* <div className={sidebarStyles.sidebarItem}>
        <h3>Recent News</h3>
        {links}
      </div> */}
      {/* <div
        className={`${sidebarStyles.sidebarItem} ${sidebarStyles.highlighted}`}
      >
        <h3>Important Dates</h3>
        <ul>
          <li>Conference: 16-19th September 2021</li>
          <li>Early bird registration deadline: 21/6/2021</li>
        </ul>
      </div> */}
      <div className={sidebarStyles.sidebarItem}>
        <div className={sidebarStyles.imageContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.poster.childImageSharp.fluid.src}
          >
            <Img fluid={data.poster.childImageSharp.fluid} />
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
            <Img fluid={data.uniLogo.childImageSharp.fluid} />
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
              fluid={data.facultyImage.childImageSharp.fluid}
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
