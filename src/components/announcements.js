import React, { useState, useEffect } from "react"
import announcementStyles from "../styles/announcements.module.css"
import NewsLink from "./newsLink"
import { useStaticQuery, graphql } from "gatsby"

const Announcements = ({ language }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
            excerpt(pruneLength: 160, format: MARKDOWN)
          }
        }
      }
    }
  `)

  let heading = language === "en" ? "News" : "Νέα"

  const [currenPosts, setCurrentPosts] = useState()
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setCurrentPosts(data.allMarkdownRemark.edges.slice(0, 5))
  }, [data])

  useEffect(() => {
    setCurrentPosts(
      data.allMarkdownRemark.edges.slice(currentPage * 5, (currentPage + 1) * 5)
    )
  }, [currentPage, data])

  return (
    <div className={announcementStyles.announcements}>
      <h1>{heading}</h1>
      {currenPosts &&
        currenPosts.map(edge => {
          return <NewsLink key={edge.node.id} news={edge.node} />
        })}
      <div className={announcementStyles.paginationContainer}>
        <button
          onClick={() => {
            setCurrentPage(0)
          }}
          className={`${announcementStyles.paginationButton} ${
            currentPage === 0 ? announcementStyles.activeButton : ""
          }`}
        >
          1
        </button>
        <button
          onClick={() => {
            setCurrentPage(1)
          }}
          className={`${announcementStyles.paginationButton} ${
            currentPage === 1 ? announcementStyles.activeButton : ""
          }`}
        >
          2
        </button>
        <button
          onClick={() => {
            setCurrentPage(2)
          }}
          className={`${announcementStyles.paginationButton} ${
            currentPage === 2 ? announcementStyles.activeButton : ""
          }`}
        >
          3
        </button>
      </div>
    </div>
  )
}

export default Announcements
