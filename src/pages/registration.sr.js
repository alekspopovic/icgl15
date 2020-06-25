import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Registration extends React.Component {
  render() {
    return (
      <Layout language="sr">
        <SEO title="Registration" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>page in Serbian</h1>
          <h1>ICGL15 / Registration</h1>
          <p>
            Please click here to register for ICGL15 (link opens in new tab).
          </p>
          <p>
            Important Note: The early bird offer deadline has been extended to
            30th May – but this is not yet shown on the registration page.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Registration
