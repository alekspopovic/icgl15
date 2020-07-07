import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    return (
      <Layout
        language="sr"
        location={this.props.location}
        isSidebarDisabled={true}
        headerText="Internacionalna konferencija grčke lingvistike"
      >
        <SEO title="Home" pagePath={this.props.location.pathname} />
      </Layout>
    )
  }
}

export default Index
