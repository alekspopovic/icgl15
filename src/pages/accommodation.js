import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import Hotels from "../components/hotels"
import Rentals from "../components/rentals"

class Accommodation extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location} extraWide={true}>
        <SEO title="Accommodation" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Accommodation</h1>
          <h2>Rentals</h2>
          <Rentals />
          <h2>Nearby Hotels</h2>
          <Hotels />
        </div>
      </Layout>
    )
  }
}
export default Accommodation
