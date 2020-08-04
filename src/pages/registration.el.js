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
          <h1>Εγγραφή</h1>
          <table className={contentStyles.table}>
            <thead>
              <tr>
                <th>Κατηγορίες</th>
                <th>Κόστος συμμετοχής (μέχρι και 21/6/2021)</th>
                <th>Κόστος συμμετοχής (από 22/6/2021)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Συμμετοχή ως εισηγητής (Κανονικό)</td>
                <td>80 ευρώ*</td>
                <td>100 ευρώ*</td>
              </tr>
              <tr>
                <td>Συμμετοχή ως εισηγητής (Φοιτητικό)</td>
                <td>40 ευρώ*</td>
                <td>60 ευρώ*</td>
              </tr>
              <tr>
                <td>Συμμετοχή ως ακροατής (Κανονικό)</td>
                <td>80 ευρώ*</td>
                <td>100 ευρώ*</td>
              </tr>
              <tr>
                <td>Συμμετοχή ως ακροατής (Φοιτητικό)</td>
                <td>δωρεάν</td>
                <td>δωρεάν</td>
              </tr>
            </tbody>
          </table>

          <div className={contentStyles.disclaimer}>
            <strong>
              * Οι διάφορες χρεώσεις (π.χ. έμβασμα) και τα τυχόν έξοδα της
              τράπεζας επιβαρύνουν τον καταθέτη
            </strong>
          </div>

          <table className={contentStyles.table}>
            <thead>
              <tr>
                <th>ΟΝΟΜΑΤΕΠΩΝΥΜΟ ΚΑΤΑΘΕΤΗ</th>
                <th>ΑΙΤΙΟΛΟΓΙΑ ΠΛΗΡΩΜΗΣ</th>
                <th>SWIFT</th>
                <th>IBAN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Όνομα και επώνυμο</td>
                <td>ICGL15 participation fee</td>
                <td>NBSRRSBGXXX</td>
                <td>RS35840000000005779097</td>
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
