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
            <li>
              Dmitrović Dina, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Elaković-Nenadović Ana, Faculty of Philology, University of
              Belgrade
            </li>
            <li>
              Lampropoulou Martha, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Milojević Ivana, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Mutavdžić Predrag, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Rađenović Anka, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Stojičić Vojkan, Faculty of Philology, University of Belgrade,
              Chair
            </li>
            <li>
              Vulović Ljiljana, Faculty of Philology, University of Belgrade
            </li>
          </ul>
          <h2>Secretarial Support</h2>
          <ul>
            <li>Baćić Μaja, Faculty of Philology, University of Belgrade</li>
            <li>
              Kostić Antonina, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Tkalac Dragana, Faculty of Philology, University of Belgrade
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default OrganizingCommittee
