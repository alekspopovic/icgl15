import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Committees extends React.Component {
  render() {
    return (
      <Layout language="sr" location={this.props.location}>
        <SEO title="Committees" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>To be announced</h1>
        </div>
      </Layout>
    )
  }
}

export default Committees
