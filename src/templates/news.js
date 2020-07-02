import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PaginationUrl from "../components/paginationUrl"
import blogStyles from "../styles/blog.module.css"
import Link from "gatsby-link"

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
        <div className={blogStyles.blogContent}>
          {group.map(({ node }) => (
            <article key={node.fields.slug}>
              <header>
                <h1>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.title || node.fields.slug}
                  </Link>
                </h1>
                <div className={blogStyles.date}>{node.frontmatter.date}</div>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <div className={blogStyles.readMore}>
                  <Link to={node.fields.slug}>Read more &#187;</Link>
                </div>
              </section>
            </article>
          ))}
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
