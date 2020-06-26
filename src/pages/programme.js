import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Programme extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO title="Programme" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Conference and workshop programme</h1>
          <p>
            The FINAL ICGL15 conference and workshop programme is available
            here.
          </p>
          <p>A book of abstracts is now available.</p>
        </div>
      </Layout>
    )
  }
}

export default Programme
