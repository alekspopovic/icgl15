import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import sidebarStyles from "../styles/sidebar.module.css"
import "font-awesome/css/font-awesome.min.css"
import NewsLink from "./newsLink"
// import labels from "../data/contactLabels"

const Sidebar = () => {
  // const news = edges.map(edge => (
  //   <NewsLink key={edge.node.id} post={edge.node} />
  // ))

  const news = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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

  // console.log(news)

  return (
    <div className={sidebarStyles.sidebar}>
      {/* <div className={sidebarStyles.logo}></div> */}
      <div className={sidebarStyles.sidebarItem}>
        <h3>Recent News</h3>
        {links}
      </div>
      <div className={sidebarStyles.contactUs}></div>
      <div className={sidebarStyles.importantDates}></div>
    </div>
  )
}

export default Sidebar
