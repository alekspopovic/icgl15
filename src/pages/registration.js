import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import PaymentInstructions from "../../static/payment_instructions.pdf"
import Button from "../components/button"
import { Link } from "gatsby"

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
                <th>Until 15/06/2022)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Presenter/Author (Regular)</td>
                <td>50 euro*</td>
              </tr>
              <tr>
                <td>Presenter/Author (Student)</td>
                <td>20 euro*</td>
              </tr>
              <tr>
                <td>Online participant (Regular)</td>
                <td>50 euro*</td>
              </tr>
              <tr>
                <td>Online participant (Student)</td>
                <td>20 euro*</td>
              </tr>
            </tbody>
          </table>

          <div className={contentStyles.disclaimer}>
            <p>
              <strong>
                * All values are excluding bank transaction fee. Τhe bank
                transaction fee varies from bank to bank, occasionally two banks
                may intervene as intermediaries. In any case, the deposit
                involves the participation and the transaction fee.
              </strong>
            </p>
            <p>
              <strong>
                * The fee for participation will be paid exclusively via bank
                transfer to the account given below.
              </strong>
            </p>
            <p>
              If you belong to the last category (attendee-student), please
              confirm your participation by sending your personal details (name,
              last name, affiliation and email address) via the{" "}
              <Link to="/contact">Contact section.</Link>
            </p>
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

          <h2>Please note the following</h2>
          <ul>
            <li>
              All presenters (authors) at the conference must register by the 15
              <sup>th</sup> of June 2022.
            </li>
            <li>
              For each oral / poster presentation, at least 1 author must
              register.
            </li>
            <li>
              Each author can register only for 1 presentation, even if he / she
              is co-authoring 2 presentations.
            </li>
            <li>
              If none of the authors of an oral / poster presentation has
              registered by the 15<sup>th</sup> of June 2022, their presentation
              will not be included in the program of the conference.{" "}
            </li>
          </ul>

          <h2>Registration Confirmation</h2>
          <p>
            After completing the payment process, the participants are kindly
            requested to send the payment proof and their personal information
            (name, affiliation, contact phone number, email) to the following
            address:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:icgl15@fil.bg.ac.rs"
            >
              icgl15@fil.bg.ac.rs
            </a>
          </p>
          <p>
            Participants will be sent a final confirmation of registration via
            email. Confirmation will take place after having received the
            payment proof. In case no confirmation email (within a few days) is
            sent back, please contact the secretarial support. Participants are
            kindly requested to state a valid email address.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Registration
