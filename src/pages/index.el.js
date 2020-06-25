import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Index extends React.Component {
  render() {
    return (
      <Layout language="el">
        <SEO title="Home" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>page in Greek</h1>
          <h1>International Conference on Greek Linguistics (ICGL 13)</h1>
          <h2>Final Proceedings</h2>
          <p>
            The final version of the ICGL13 Proceedings can be accessed here. An
            ISBN number will be available shortly.
          </p>
          <h2>Proceedings Available</h2>
          <p>
            Dear all, We are happy to announce that the preview version of the
            ICGL13 Proceedings, pending ISBN, can be accessed
            <a href="/"> here</a>. The final version will be published once the
            ISBN details are confirmed. ICGL14
            (https://icgl14.events.upatras.gr/) is currently under way at the
            University of Patras, and we wish the organisers and delegates every
            success.
          </p>
          <p>Best wishes</p>
          <p>The ICGL13 Organising Committee</p>
          <hr />
        </div>
      </Layout>
    )
  }
}

export default Index
