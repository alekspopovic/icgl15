import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    return (
      <Layout hideHeader={true}>
        <SEO title="Home" pagePath={this.props.location.pathname} />
        <div>Hello World</div>
      </Layout>
    )
  }
}

export default Index
