import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class OrganizingCommittee extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO
          title="Organizing Committee"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h2>ΟΡΓΑΝΩΤΙΚΗ ΕΠΙΤΡΟΠΗ</h2>
          <ul>
            <li>
              Dmitrović Dina, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Elaković-Nenadović Ana, Φιλολογική Σχολή, Πανεπιστήμιο του
              Βελιγραδίου
            </li>
            <li>
              Lampropoulou Martha, Φιλολογική Σχολή, Πανεπιστήμιο του
              Βελιγραδίου
            </li>
            <li>
              Milojević Ivana, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Mutavdžić Predrag, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Rađenović Anka, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Stojičić Vojkan, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου,
              Πρόεδρος
            </li>
            <li>
              Vulović Ljiljana, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
          </ul>
          <h2>ΓΡΑΜΜΑΤΕΙΑΚΗ ΥΠΟΣΤΗΡΙΞΗ</h2>
          <ul>
            <li>Baćić Μaja, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου</li>
            <li>
              Kostić Antonina, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
            <li>
              Tkalac Dragana, Φιλολογική Σχολή, Πανεπιστήμιο του Βελιγραδίου
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default OrganizingCommittee
