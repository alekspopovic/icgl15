import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class ScientificCommittee extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO
          title="Scientific Committee"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h2>ΕΠΙΣΤΗΜΟΝΙΚΗ ΕΠΙΤΡΟΠΗ</h2>
          <ul>
            <li>Dejan Dželebdžić</li>
            <li>Ana Elaković Nenadović</li>
            <li>Anka Janković</li>
            <li>Tamara Kostić Pahnoglou</li>
            <li>Predrag Mutavdžić</li>
            <li>Ifigenija Radulović</li>
            <li>Vojkan Stojičić</li>
            <li>Darko Todorović</li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default ScientificCommittee
