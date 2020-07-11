import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import sidebarStyles from "../styles/sidebar.module.css"
import "font-awesome/css/font-awesome.min.css"
import NewsLink from "./newsLink"
import SocialIcons from "./socialIcons"

const Sidebar = ({ language }) => {
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

  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarItem}>
        <h3>Recent News</h3>
        {links}
      </div>
      <div className={`${sidebarStyles.sidebarItem} ${sidebarStyles.red}`}>
        <h3>Important Dates</h3>
        <ul>
          <li>Conference: 10-12th September 2021</li>
          <li>Early bird registration deadline: 25th May</li>
        </ul>
      </div>

      <SocialIcons language={language} />
    </div>
  )
}

export default Sidebar
