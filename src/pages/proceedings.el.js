import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Proceedings extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO title="Proceedings" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h2>Πρακτικά</h2>
          <p>
            Αγαπητοί συμμετέχοντες του 15ου Διεθνούς Συνεδρίου Ελληνικής
            Γλωσσολογίας,
          </p>
          <p>
            Σας προσκαλούμε, όσοι επιθυμείτε να υποβάλετε τις εργασίες σας για
            τα Πρακτικά του συνεδρίου. Ακολουθούν οι οδηγίες συγγραφής.
          </p>
          <h3>ΟΔΗΓΙΕΣ ΣΥΓΓΡΑΦΗΣ</h3>
          <p>Παρακαλούμε οι εργασίες να σταλούν ηλεκτρονικά στη διεύθυνση</p>
          <p>
            <a href="mailto:icgl15@fil.bg.ac.rs">icgl15@fil.bg.ac.rs</a>
          </p>
          <p>
            μέχρι τις 31 Μαΐου 2023. Για την εξασφάλιση ομοιομορφίας,
            παραθέτουμε υπόδειγμα άρθρου, ώστε να διευκολύνουμε στις εργασίες
            του τον εκδοτικό οίκο που θα αναλάβει την έκδοση των Πρακτικών.
          </p>
          <p>
            H μελέτη σας πρέπει να έχει τη μορφή και την έκταση που αναφέρονται
            στις οδηγίες - template, και να είναι δακτυλογραφημένη σε πρόγραμμα
            Word (σε αρχείο doc ή docx). Επιθυμητό όριο λέξεων: 4000 λέξεις.
          </p>
          <p>Με εκτίμηση,</p>
          <p>Η Οργανωτική Επιτροπή</p>
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
