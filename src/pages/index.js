import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    return (
      <Layout
        language="en"
        location={this.props.location}
        isSidebarDisabled={true}
        headerText="International Conference on Greek Linguistics ICGL 15"
      >
        <SEO title="Home" pagePath={this.props.location.pathname} />
      </Layout>
    )
  }
}

export default Index
