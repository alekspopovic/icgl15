import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import fourOhFourStyles from "../styles/404.module.css"
// import image from "../assets/404.svg"

class NotFoundPage extends React.Component {
  render() {
    const headerText = "404"
    const subHeaderText = "Page Not Found"

    return (
      <Layout
        headerText={headerText}
        subHeaderText={subHeaderText}
        hideHeader={true}
      >
        <SEO title="404: Not Found" />
        <div className={fourOhFourStyles.container}>
          <div className={fourOhFourStyles.imageContainer}>
            {/* <img src={image} alt="page not found" /> */}
          </div>
          <div className={fourOhFourStyles.content}>404: page not found</div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
