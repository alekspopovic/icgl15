import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import Hotels from "../components/hotels"

class Accommodation extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location} extraWide={true}>
        <SEO title="Accommodation" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Κατάλυμα</h1>
          <h2>Κοντινά ξενοδοχεία</h2>
          <Hotels />
        </div>
      </Layout>
    )
  }
}

export default Accommodation
