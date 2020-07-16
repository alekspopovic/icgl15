import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class CallForPapers extends React.Component {
  render() {
    return (
      <Layout
        language="en"
        location={this.props.location}
        headerText="Call for Papers"
      >
        <SEO title="ICGL15" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h2>16-19 September 2021</h2>
          <h3>1st Call for papers</h3>
          <p>Dear Colleagues,</p>
          <p>
            The Department of Modern Greek Studies, Faculty of Philology,
            University of Belgrade, is pleased to announce the 15th
            International Conference on Greek Linguistics, which will be held in
            Belgrade, <strong>16-19 September 2021</strong>.
          </p>
          <p>
            ICGL is a biennial meeting, held since 1993, that focuses on all
            aspects of the linguistic study and analysis of Greek.
          </p>
          <p>
            The conference invites contributions to any field of Greek
            Linguistics (including, but not limited to: applied linguistics,
            computational linguistics, corpus linguistics, dialectology,
            discourse analysis, historical linguistics, language teaching,
            lexicography, lexicology, morphology, neurolinguistics, phonetics,
            phonology, pragmatics, psycholinguistics, semantics,
            sociolinguistics, syntax).
          </p>
          <hr />
        </div>
      </Layout>
    )
  }
}

export default CallForPapers
