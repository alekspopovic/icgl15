import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import abstractsPreviewImage from "../assets/abstractsPreview.png"
import bookOfAbstractsPdf from "../assets/bookOfAbstracts.pdf"
import EmbeddedPdf from "../components/embeddedPdf"

class BookOfAbstracts extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO
          title="Book of Abstracts"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h2>Book of Abstracts</h2>
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
