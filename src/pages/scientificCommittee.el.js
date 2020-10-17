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
            <li>
              Dželebdžić Dejan, Φιλοσοφική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Elaković-Nenadović Ana, Φιλολογική Σχολή, Πανεπιστήμιο του
              Βελιγραδίου
            </li>
            <li>
              Janković Anka, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Kostić-Pahnoglou Tamara, Φιλοσοφική Σχολή, Πανεπιστήμιο του Νις
            </li>
            <li>
              Mutavdžić Predrag, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Radulović Ifigenija, Φιλοσοφική Σχολή, Πανεπιστήμιο του Νόβι Σαντ
            </li>
            <li>
              Stojičić Vojkan, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Todorović Darko, Φιλοσοφική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default ScientificCommittee
