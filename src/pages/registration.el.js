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

          <h2>Πακέτο συμμετοχής</h2>
          <p>
            Το κόστος συμμετοχής συμπεριλαμβάνει: τη συμμετοχή στο συνέδριο,
            συνεδριακό φάκελο, συμμετοχή στα διαλείμματα καφέ και ελαφρύ γεύμα
            κατά τη διάρκεια όλων των συνεδριακών ημερών, εκδρομή σε αξιοθέατα
            του Βελιγραδίου, καθώς και τη δημοσίευση της εργασίας σε έντυπους ή
            ηλεκτρονικούς τόμους πρακτικών, κατόπιν κρίσης.
          </p>

          <h2>Παρακαλούμε να λάβετε υπόψη τα εξής</h2>
          <ul>
            <li>
              Όλοι οι συμμετέχοντες με ανακοίνωση στο συνέδριο πρέπει να έχουν
              εγγραφεί έως τις 30 Ιουνίου.
            </li>
            <li>
              Για κάθε ανακοίνωση (είτε προφορική είτε αναρτημένη ανακοίνωση),
              τουλάχιστον 1 συγγραφέας θα πρέπει να έχει εγγραφεί.
            </li>
            <li>
              Κάθε συγγραφέας μπορεί να εγγραφεί μόνο για 1 ανακοίνωση, ακόμα κι
              αν πρόκειται να συμμετάσχει με 2 ανακοινώσεις.
            </li>
            <li>
              Εάν κανένας από τους συγγραφείς μιας ανακοίνωσης (προφορικής ή
              αναρτημένης) δεν έχει εγγραφεί έως τις 30 Ιουνίου, η ανακοίνωσή
              τους δεν θα συμπεριληφθεί στο πρόγραμμα του συνεδρίου.
            </li>
          </ul>

          <h2>Επιβεβαίωση Εγγραφής</h2>
          <p>
            Οι συμμετέχοντες εφόσον ολοκληρώσουν τη διαδικασία πληρωμής
            παρακαλούνται να αποστείλουν το αποδεικτικό της κατάθεσης και τα
            στοιχεία τους (ονοματεπώνυμο, φορέας, τηλέφωνο επικοινωνίας,
            ηλεκτρονική διεύθυνση) στην ακόλουθη διεύθυνση:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:icgl15@fil.bg.ac.rs"
            >
              icgl15@fil.bg.ac.rs
            </a>
          </p>
          <p>
            Στους συμμετέχοντες θα σταλεί οριστική επιβεβαίωση της εγγραφής,
            μέσω ηλεκτρονικής αλληλογραφίας. Η επιβεβαίωση θα πραγματοποιηθεί
            μετά την αποστολή του αποδεικτικού κατάθεσης. Εάν ο καταθέτης δεν
            έχει λάβει επιβεβαίωση, παρακαλείται να επικοινωνήσει με τη
            γραμματειακή υποστήριξη. Παρακαλούνται οι συμμετέχοντες να δηλώνουν
            έγκυρη ηλεκτρονική διεύθυνση email.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Registration
