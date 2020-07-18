import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class CallForPapers extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO title="Proceedings" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h2>To be added</h2>
          <hr />
        </div>
      </Layout>
    )
  }
}

export default CallForPapers
