import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import PaymentInstructions from "../../static/payment_instructions.pdf"
import Button from "../components/button"

class Registration extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO title="Registration" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Σγγραφή</h1>
          <table>
            <thead>
              <tr>
                <th>Categories</th>
                <th>Early (Until 21/6/2021)</th>
                <th>Late (After 22/6/2019)</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
          <Button
            isExternal={true}
            url={PaymentInstructions}
            text="Λήψη οδηγιών πληρωμής"
            isCentered={true}
          />
        </div>
      </Layout>
    )
  }
}

export default Registration
