import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import programmePreviewImage from "../assets/programmePreview.png"
import programmePdf from "../assets/programmeV9.pdf"
import EmbeddedPdf from "../components/embeddedPdf"

class Programme extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO title="Programme" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h2>Πρόγραμμα</h2>
          <EmbeddedPdf
            pdf={programmePdf}
            previewImage={programmePreviewImage}
            altText="download programme"
          />
          <hr />
        </div>
      </Layout>
    )
  }
}

export default Programme
