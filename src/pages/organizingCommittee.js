import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class OrganizingCommittee extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO
          title="Organizing Committee"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h2>Organizing Committee</h2>
          <ul>
            <li>Dina Dmitrović</li>
            <li>Ana Elaković Nenadović</li>
            <li>Anka Janković</li>
            <li>Martha Lampropoulou</li>
            <li>Ivana Milojević</li>
            <li>Predrag Mutavdžić</li>
            <li>Vojkan Stojičić</li>
            <li>Ljiljana Vulović</li>
          </ul>

          <h2>Secretarial support</h2>
          <ul>
            <li>Μaja Baćić</li>
            <li>Antonina Kostić</li>
            <li>Dragana Tkalac</li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default OrganizingCommittee
