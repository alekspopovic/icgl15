import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Location extends React.Component {
  render() {
    return (
      <Layout language="sr" location={this.props.location}>
        <SEO title="Location" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>page in Serbian</h1>
          <h1>ICGL15 / Location</h1>
          <p>
            The 13th International Conference on Greek Linguistics will be held
            at the University of Westminster, on its central London campus in
            New Cavendish Street. The full address is
          </p>
          <p>
            University of Westminster 115 New Cavendish Street, London, W1W 6UW
          </p>
        </div>
      </Layout>
    )
  }
}

export default Location
