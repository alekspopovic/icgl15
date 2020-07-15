import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class TravelInfo extends React.Component {
  render() {
    console.log(this.props.location)
    return (
      <Layout language="sr" location={this.props.location}>
        <SEO title="TravelInfo" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Putne informacije</h1>
        </div>
      </Layout>
    )
  }
}
export default TravelInfo
