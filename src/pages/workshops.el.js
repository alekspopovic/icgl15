import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Workshops extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO title="Workshops" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>ICGL13 / Workshops</h1>
        </div>
      </Layout>
    )
  }
}

export default Workshops
