import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import Hotels from "../components/hotels"
import Rentals from "../components/rentals"

class Accommodation extends React.Component {
  render() {
    return (
      <Layout
        language="el"
        location={this.props.location}
        extraWide={true}
        isSidebarDisabled={true}
      >
        <SEO title="Accommodation" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>ΔΙΑΜΟΝΗ</h1>
          <h2>Ιδιωτική Διαμονή</h2>
          <Rentals />
          <h2>Κοντινά ξενοδοχεία</h2>
          <Hotels />
        </div>
      </Layout>
    )
  }
}

export default Accommodation
