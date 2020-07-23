import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Announcements from "../components/announcements"
import contentStyles from "../styles/index.module.css"

class Index extends React.Component {
  render() {
    return (
      <Layout
        language="el"
        location={this.props.location}
        headerText="Πρόσκληση υποβολής περιλήψεων"
      >
        <SEO title="ICGL15" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <p className={contentStyles.paddingTop}>Αγαπητοί/ές Συνάδελφοι,</p>
          <p>
            Το Τμήμα Νεοελληνικών Σπουδών του Πανεπιστημίου του Βελιγραδίου με
            χαρά σας ανακοινώνει τη διοργάνωση του 15 ου Διεθνούς Συνεδρίου
            Ελληνικής Γλωσσολογίας, το οποίο θα πραγματοποιηθεί στο Βελιγράδι,{" "}
            <strong>16-19 Σεπτεμβρίου 2021</strong>.
          </p>
          <hr />
          <Announcements language="el" />
        </div>
      </Layout>
    )
  }
}

export default Index
