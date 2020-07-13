import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Registration extends React.Component {
  render() {
    return (
      <Layout language="sr" location={this.props.location}>
        <SEO title="Registration" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Registracija</h1>
          <table>
            <tr>
              <th>Categories</th>
              <th>Early (Until 21/6/2021)</th>
              <th>Late (After 22/6/2019)</th>
            </tr>
            <tr>
              <td>Presenter/Author (Regular)</td>
              <td>80 euro</td>
              <td>
                100 euro <strong>(excluding bank transaction fee)</strong>
              </td>
            </tr>
            <tr>
              <td>Presenter/Author (Student)</td>
              <td>40 euro</td>
              <td>
                60 euro <strong>(excluding bank transaction fee)</strong>
              </td>
            </tr>
            <tr>
              <td>Attendee (Regular)</td>
              <td>80 euro</td>
              <td>
                100 euro <strong>(excluding bank transaction fee)</strong>
              </td>
            </tr>
            <tr>
              <td>Attendee (Student)</td>
              <td>free of charge</td>
              <td>free of charge</td>
            </tr>
          </table>
        </div>
      </Layout>
    )
  }
}

export default Registration
