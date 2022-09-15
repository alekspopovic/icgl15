import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import Videos from "../components/videos"

class Speeches extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO title="Speeches" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h2>Keynote Speakers' Speeches</h2>
          <Videos />
        </div>
      </Layout>
    )
  }
}

export default Speeches
