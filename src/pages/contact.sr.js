import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import SEO from "../components/seo"

class Contact extends React.Component {
  render() {
    const headerText = "Contact"

    return (
      <Layout
        headerText={headerText}
        language="sr"
        location={this.props.location}
      >
        <SEO title="Contact" pagePath={this.props.location.pathname} />
        <h1>page in Serbian</h1>
        <ContactForm language="sr" />
      </Layout>
    )
  }
}

export default Contact
