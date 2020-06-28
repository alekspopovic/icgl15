import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import sidebarStyles from "../styles/sidebar.module.css"
import "font-awesome/css/font-awesome.min.css"
import NewsLink from "./newsLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
// import labels from "../data/contactLabels"

const Sidebar = ({ language }) => {
  // const news = edges.map(edge => (
  //   <NewsLink key={edge.node.id} post={edge.node} />
  // ))

  const news = useStaticQuery(graphql`
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
    }
  `)

  const links = news.allMarkdownRemark.edges.map(edge => (
    <NewsLink key={edge.node.id} news={edge.node} />
  ))

  let contactPrefix = ""

  console.log(language)

  if (language !== "en") {
    contactPrefix = language
  }

  return (
    <div className={sidebarStyles.sidebar}>
      {/* <div className={sidebarStyles.logo}></div> */}
      <div className={sidebarStyles.sidebarItem}>
        <h3>Recent News</h3>
        {links}
      </div>
      <div className={sidebarStyles.sidebarItem}>
        <h3>Contact</h3>
        <div className={sidebarStyles.socialIcons}>
          <Link to={`${contactPrefix}/contact`}>
            <FontAwesomeIcon
              className={`${sidebarStyles.socialIcon} ${sidebarStyles.email}`}
              icon={faEnvelope}
              title="Envelope"
            />
          </Link>
          <a href="facebook.com">
            <FontAwesomeIcon
              className={`${sidebarStyles.socialIcon} ${sidebarStyles.facebook}`}
              icon={faFacebook}
              title="Facebook"
            />
          </a>
          <a href="twitter.com">
            <FontAwesomeIcon
              className={`${sidebarStyles.socialIcon} ${sidebarStyles.twitter}`}
              icon={faTwitter}
              title="Twitter"
            />
          </a>
        </div>
      </div>
      <div className={sidebarStyles.sidebarItem}>
        <h3>Important Dates</h3>
        <ul>
          <li>Conference: 10-12th September 2021</li>
          <li>Early bird registration deadline: 25th May</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
