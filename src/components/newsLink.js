import React from "react"
import { Link } from "gatsby"
import newsStyles from "../styles/news.module.css"
import blogStyles from "../styles/blog.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-regular-svg-icons"

const NewsLink = ({ news }) => {
  let splitDate = news.frontmatter.date.split(" ")
  let day = splitDate[0]
  let monthAndYear = splitDate[1].replace(",", ", ")

  return (
    <div className={newsStyles.newsItem}>
      <div className={newsStyles.dateContainer}>
        <div className={newsStyles.day}>{day}</div>
        <div className={newsStyles.monthAndYear}>{monthAndYear}</div>
        <div className={newsStyles.dateIconContainer}>
          <FontAwesomeIcon
            className={newsStyles.dateIcon}
            icon={faBell}
            title="Announcement"
          />
        </div>
      </div>
      <div className={newsStyles.newsContent}>
        <h3 className={newsStyles.newsContentTitle}>
          <Link to={news.fields.slug}>{news.frontmatter.title}</Link>
        </h3>
        <div>{news.excerpt}</div>
        <div className={blogStyles.readMore}>
          <Link to={news.fields.slug}>Read more &#187;</Link>
        </div>
      </div>
    </div>
  )
}

export default NewsLink
