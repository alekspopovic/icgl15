import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Proceedings extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO title="Proceedings" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h2>Proceedings</h2>
          <p>Dear ICGL15 participants</p>
          <p>
            We kindly invite you to submit your paper to the Proceedings of the
            15th International Conference on Greek Linguistics. Below you can
            see the guidelines.
          </p>
          <h3>GUIDELINES</h3>
          <p>Please send your paper to the following email address</p>
          <p>
            <a href="mailto:icgl15@fil.bg.ac.rs">icgl15@fil.bg.ac.rs</a>
          </p>
          <p>
            till the 31st of May 2023. In order to ensure uniformity and to
            facilitate the works of the Publishing house, the attached document
            provides instructions for the format of the articles to be included
            in the Conference Proceedings.
          </p>
          <p>
            Before submitting your paper, please make sure that it complies with
            the following instructions and that it is written in Word (doc or
            docx). Ideal word range: 4000 words.
          </p>
          <p>Kind Regards,</p>
          <p>The Organizing Committee</p>
          <hr />
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/template_ICGL15.doc"
            >
              Template ICGL15
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default Proceedings
