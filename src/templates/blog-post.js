import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
// import kebabCase from "lodash.kebabcase"

import blogPostStyles from "../styles/blogPost.module.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    let postNavigation

    if (previous || next) {
      postNavigation = (
        <div className={blogPostStyles.postNavigation}>
          {previous && (
            <Button
              isExternal={false}
              url={previous.fields.slug}
              text={`← ${previous.frontmatter.title}`}
            />
          )}
          {next && (
            <Button
              isExternal={false}
              url={next.fields.slug}
              text={`${next.frontmatter.title} →`}
            />
          )}
        </div>
      )
    }

    let subHeaderText = `${post.frontmatter.date} | Aleks Popovic`

    return (
      <Layout
        headerText={post.frontmatter.title}
        subHeaderText={subHeaderText}
        background={true}
        language="en"
        location={this.props.location}
        isBlogPostPage={true}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          pagePath={this.props.location.pathname}
        />
        <article className={blogPostStyles.blogPost}>
          <h2>{post.frontmatter.title}</h2>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        {postNavigation}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
