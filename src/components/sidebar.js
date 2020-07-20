import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sidebarStyles from "../styles/sidebar.module.css"
import "font-awesome/css/font-awesome.min.css"
import NewsLink from "./newsLink"
import SocialIcons from "./socialIcons"

const Sidebar = ({ language, extraWide }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 3
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD.MM.YYYY")
              title
            }
            id
          }
        }
      }
      uniImage: file(relativePath: { eq: "university.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facultyImage: file(relativePath: { eq: "faculty.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const links = data.allMarkdownRemark.edges.map(edge => (
    <NewsLink key={edge.node.id} news={edge.node} />
  ))

  return (
    <div
      className={`${sidebarStyles.sidebar} ${
        extraWide ? sidebarStyles.wide : ""
      }`}
    >
      <div className={sidebarStyles.sidebarItem}>
        <h3>Recent News</h3>
        {links}
      </div>
      <div
        className={`${sidebarStyles.sidebarItem} ${sidebarStyles.highlighted}`}
      >
        <h3>Important Dates</h3>
        <ul>
          <li>Conference: 16-19th September 2021</li>
          <li>Early bird registration deadline: </li>
        </ul>
      </div>
      <div className={sidebarStyles.sidebarItem}>
        <div className={sidebarStyles.imageContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.bg.ac.rs/"
          >
            <Img fluid={data.uniImage.childImageSharp.fluid} />
          </a>
        </div>
      </div>
      <div className={sidebarStyles.sidebarItem}>
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
