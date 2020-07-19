import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Committees extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO
          title="Organizing Committee"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h2>To be announced</h2>
        </div>
      </Layout>
    )
  }
}

export default Committees
