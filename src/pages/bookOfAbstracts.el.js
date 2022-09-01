import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import abstractsPreviewImage from "../assets/abstractsPreview.png"
import bookOfAbstractsPdf from "../assets/bookOfAbstractsV5.pdf"
import EmbeddedPdf from "../components/embeddedPdf"

class BookOfAbstracts extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO
          title="Book of Abstracts"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h2>Βιβλίο περιλήψεων</h2>
          <EmbeddedPdf
            pdf={bookOfAbstractsPdf}
            previewImage={abstractsPreviewImage}
            altText="download book of abstracts"
          />
          <hr />
        </div>
      </Layout>
    )
  }
}

export default BookOfAbstracts
