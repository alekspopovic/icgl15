import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PaginationUrl from "../components/paginationUrl"
import blogStyles from "../styles/blog.module.css"
import Link from "gatsby-link"
import newsStyles from "../styles/news.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import contentStyles from "../styles/index.module.css"

class News extends React.Component {
  render() {
    const headerText = "ICG15 News"
    const { group, index, first, last } = this.props.pageContext
    const previousUrl =
      index - 1 === 1 ? "/blog/" : "/blog/" + (index - 1).toString()
    const nextUrl = "/blog/" + (index + 1).toString()
    const seoTitle = index === 1 ? `Blog` : `Blog: page ${index}`

    return (
      <Layout
        headerText={headerText}
        background={true}
        language="en"
        location={this.props.location}
      >
        <SEO title={seoTitle} pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>News / Νέα</h1>
          {group.map(({ node }) => {
            let splitDate = node.frontmatter.date.split(" ")
            let day = splitDate[0]
            let monthAndYear = splitDate[1].replace(",", ", ")
            return (
              <div key={node.fields.slug} className={newsStyles.newsItem}>
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
                  <h3>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h3>
                  <div>{node.excerpt}</div>
                  <div className={blogStyles.readMore}>
                    <Link to={node.fields.slug}>Read more &#187;</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className={blogStyles.paginationUrls}>
          <PaginationUrl
            className={blogStyles.newerPosts}
            contentSection={blogStyles.blogContent}
            test={first}
            url={previousUrl}
            text="Newer"
          />
          <PaginationUrl
            className={blogStyles.olderPosts}
            contentSection={blogStyles.blogContent}
            test={last}
            url={nextUrl}
            text="Older"
          />
        </div>
      </Layout>
    )
  }
}

export default News
