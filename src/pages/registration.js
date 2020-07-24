import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import PaymentInstructions from "../../static/payment_instructions.pdf"
import Button from "../components/button"

class Registration extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO title="Registration" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Registration</h1>
          <table className={contentStyles.table}>
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
                <td>80 euro*</td>
                <td>100 euro*</td>
              </tr>
              <tr>
                <td>Presenter/Author (Student)</td>
                <td>40 euro*</td>
                <td>60 euro*</td>
              </tr>
              <tr>
                <td>Attendee (Regular)</td>
                <td>80 euro*</td>
                <td>100 euro*</td>
              </tr>
              <tr>
                <td>Attendee (Student)</td>
                <td>free of charge</td>
                <td>free of charge</td>
              </tr>
            </tbody>
          </table>

          <div className={contentStyles.disclaimer}>
            <strong>* All values are excluding bank transaction fee.</strong>
          </div>

          <table className={contentStyles.table}>
            <thead>
              <tr>
                <th>ORDERING CUSTOMER</th>
                <th>REASON</th>
                <th>SWIFT</th>
                <th>IBAN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name and Surname</td>
                <td>ICGL15 participation fee</td>
                <td>NBSRRSBGXXX</td>
                <td>RS35840000000005779097</td>
              </tr>
            </tbody>
          </table>

          <Button
            isExternal={true}
            url={PaymentInstructions}
            text="Download Payment Instructions"
            isCentered={true}
          />
        </div>
      </Layout>
    )
  }
}

export default Registration
