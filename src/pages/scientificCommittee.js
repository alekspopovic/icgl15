import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class ScientificCommittee extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO
          title="Scientific Committee"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h2>Scientific Committee</h2>
          <ul>
            <li>
              Dželebdžić Dejan, Faculty of Philosophy, University of Belgrade
            </li>
            <li>
              Elaković-Nenadović Ana, Faculty of Philology, University of
              Belgrade
            </li>
            <li>
              Kostić-Pahnoglou Tamara, Faculty of Philosophy, University of Niš
            </li>
            <li>
              Mutavdžić Predrag, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Radulović Ifigenija, Faculty of Philosophy, University of Novi Sad
            </li>
            <li>
              Rađenović Anka, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Stojičić Vojkan, Faculty of Philology, University of Belgrade
            </li>
            <li>
              Todorović Darko, Faculty of Philosophy, University of Belgrade
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default ScientificCommittee
