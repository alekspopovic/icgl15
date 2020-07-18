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
          <p>Dear Colleagues,</p>
          <p>
            The Department of Modern Greek Studies, Faculty of Philology,
            University of Belgrade, is pleased to announce the 15th
            International Conference on Greek Linguistics, which will be held in
            Belgrade, <strong>16-19 September 2021</strong>.
          </p>
          <hr />
        </div>
      </Layout>
    )
  }
}

export default CallForPapers
