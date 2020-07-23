import React from "react"
import announcementStyles from "../styles/announcements.module.css"
import NewsLink from "./newsLink"
import { useStaticQuery, graphql } from "gatsby"

const Announcements = ({ language }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 5
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MM,YYYY")
              title
            }
            id
            excerpt(pruneLength: 160)
          }
        }
      }
    }
  `)

  const links = data.allMarkdownRemark.edges.map(edge => (
    <NewsLink key={edge.node.id} news={edge.node} />
  ))

  console.log(language)

  let heading = language === "en" ? "News" : "Νέα"

  return (
    <div className={announcementStyles.announcements}>
      <h1>{heading}</h1>
      {links}
    </div>
  )
}

export default Announcements
