import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class CallForPapers extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Call for Papers" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>page in Serbian</h1>
          <h1>ICGL15 / Call for Papers)</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis et ligula eget faucibus. Vestibulum varius aliquam risus a
            volutpat. Aenean efficitur auctor ligula, et luctus nisi tincidunt
            quis. Curabitur facilisis lobortis orci, ut egestas diam bibendum
            eu. In in feugiat justo. Sed tempor neque felis, eu blandit odio
            porttitor vel. Mauris suscipit, ante non sollicitudin vulputate,
            turpis risus tempus orci, sed venenatis dolor urna bibendum erat.
            Morbi posuere eget est sit amet euismod. Mauris malesuada lectus
            viverra risus mollis maximus. Duis nibh nisl, sodales eu
            pellentesque nec, interdum ut erat. Sed nec est lectus. Phasellus
            malesuada elementum augue ac sodales. Vestibulum auctor velit vitae
            orci tristique imperdiet. Praesent id congue metus, sit amet
            fermentum neque. Nam a efficitur mauris.
          </p>
          <hr />
        </div>
      </Layout>
    )
  }
}

export default CallForPapers
