import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Committees extends React.Component {
  render() {
    return (
      <Layout language="en">
        <SEO title="Committees" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>ICGL13 / Committees</h1>
          <h2>Organizing Committee</h2>
          <ul>
            <li>Professor Amalia Arvaniti, University of Kent, UK</li>
            <li>Dr Maria Chondrogianni, University of Westminster (chair)</li>
            <li>Dr Simon Courtenage, University of Westminster</li>
            <li>
              Professor Alexandra Georgakopoulou-Nunes, Kings College London
            </li>
            <li>Professor Geoffrey Horrocks, University of Cambridge</li>
            <li>Dr Petros Karatsareas, University of Westminster</li>
            <li>Dr Christiana Themistocleous, University of Reading</li>
            <li>Professor Ianthi Tsimpli, University of Cambridge</li>
            <li>Programme Committee</li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default Committees
