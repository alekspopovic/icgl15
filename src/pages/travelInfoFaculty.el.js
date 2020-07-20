import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import map from "../../content/images/belgradeMap.png"

class TravelInfoFaculty extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO
          title="Travel Info - Faculty"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h1>Πρόσβαση στη Φιλολογική Σχολή</h1>
          <p>
            Η Φιλολογική Σχολή βρίσκεται στο κέντρο του Βελιγραδίου, κοντά στον
            κεντρικό πεζόδρομο Knez Mihajlova. Η διεύθυνση είναι Studentski trg
            3 και η σχολή είναι προσβάσιμη με ταξί, με μέσα μαζικής μεταφοράς ή
            με τα πόδια.
          </p>
          <h2>Με λεωφορείο</h2>
          <h3>Από το αεροδρόμιο Nikola Tesla</h3>
          <p>
            Το αεροδρόμιο είναι καλά συνδεδεμένο με το κέντρο της πόλης μέσω της
            γραμμής λεωφορείου 72 της δημόσιας συγκοινωνίας (GSP). Η διαδρομή με
            το λεωφορείο διαρκεί περίπου 1 ώρα. Για να φτάσετε στη Φιλολογική
            Σχολή θα πρέπει να κατεβείτε στον τελευταίο σταθμό (Zeleni venac)
            και μετά να περπατήσετε περίπου 10 λεπτά.
          </p>
          <p>
            Τα εισιτήρια μπορείτε να τα αγοράσετε στο λεωφορείο από τον οδηγό
            και κοστίζουν 150 δηνάρια (περίπου 1,50 €). Επιπλέον, τα ηλεκτρονικά
            εισιτήρια (BUS PLUS) για περισσότερα δρομολόγια μπορούν να
            αγοραστούν σε περίπτερα (Kiosk), με τη μία διαδρομή να κοστίζει 89
            δηνάρια (περίπου 0,90 €). Το ημερήσιο ηλεκτρονικό εισιτήριο κοστίζει
            250 δηνάρια (περίπου 2,50 €).
          </p>
          <img src={map} alt="faculty location" />
          <p>
            Η δεύτερη επιλογή είναι το λεωφορειάκι A1, το οποίο κάνει την
            τελευταία του στάση στην πλατεία Slavija. Η τιμή του εισιτηρίου
            είναι 300 δηνάρια (περίπου 3 €) και είναι πολύ πιο γρήγορη επιλογή
            από την κανονική γραμμή λεωφορείου. Από την πλατεία Slavija μπορείτε
            να φτάσετε στο Πανεπιστήμιο με κάποιο τρόλεϊ ή λεωφορείο (αριθμός
            31, 29, E9).
          </p>
          <h3>Από τον κεντρικό σταθμό λεωφορείων</h3>
          <p>
            Από τον κεντρικό σταθμό λεωφορείων, μπορείτε να πάρετε τα λεωφορεία
            αρ. 52, 53 και 56, από το σταθμό «Kamenicka», μέχρι τον τελευταίο
            σταθμό (Zeleni venac) και μετά περπατήστε περίπου 10 λεπτά, όπως
            φαίνεται στον χάρτη.
          </p>
          <p>
            Τα εισιτήρια μπορείτε να τα αγοράσετε στο λεωφορείο από τον οδηγό
            και κοστίζουν 150 δηνάρια (περίπου 1,50 €). Επιπλέον, τα ηλεκτρονικά
            εισιτήρια (BUS PLUS) για περισσότερα δρομολόγια μπορούν να
            αγοραστούν σε περίπτερα (Kiosk), με τη μία διαδρομή να κοστίζει 89
            δηνάρια (περίπου 0,90 €). Το ημερήσιο ηλεκτρονικό εισιτήριο κοστίζει
            250 δηνάρια (περίπου 2,50 €).
          </p>
          <h3>Από το σιδηροδρομικό σταθμό</h3>
          <p>
            Από το σιδηροδρομικό σταθμό πάρτε το λεωφορείο αρ. 95 μέχρι τον
            τελευταίο σταθμό (Zeleni venac) και μετά περπατήστε περίπου 10
            λεπτά, όπως ήδη αναφέρθηκε στον χάρτη*.
          </p>
          <p>
            Περισσότερες πληροφορίες σχετικά με τα εισιτήρια και τη δημόσια
            συγκοινωνία μπορείτε να βρείτε{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.gsp.rs/karte_za_prevoz.aspx"
            >
              εδώ
            </a>
            .
          </p>
          <p>
            *Οι πληροφορίες για τις δημόσιες συγκοινωνίες θα ενημερωθούν λόγω
            αλλαγών στην κυκλοφορία μετά το τέλος της ανακατασκευής ορισμένων
            περιοχών και δρόμων της πόλης.
          </p>
          <h2>Με ταξί</h2>
          <h3>Από το αεροδρόμιο Nikola Tesla</h3>
          <p>
            Η μέση τιμή του ταξί είναι περίπου 1.500-2.000 Δηνάρια (15-20 €).
          </p>
          <h3>Από τον κεντρικό σταθμό λεωφορείων</h3>
          <p>Η μέση τιμή του ταξί είναι περίπου 500 Δηνάρια (5 €).</p>
          <h3>Από το σιδηροδρομικό σταθμό</h3>
          <p>Η μέση τιμή του ταξί είναι περίπου 700 Δηνάρια (7 €).</p>
          <h3>Μερικές ασφαλείς επιλογές ταξί:</h3>
          <span>
            <ul className={contentStyles.taxi}>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.pinktaxi.info/"
                >
                  Pink taxi
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.beogradski-taxi.com/"
                >
                  Belgrade taxi
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://naxis.rs/"
                >
                  Naxis taxi
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://luxtaxi.rs/"
                >
                  Lux taxi
                </a>
              </li>
            </ul>
          </span>
          <hr />
          <p>Πηγές πληροφοριών: </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.aboutbelgrade.com/en/getting-to-belgrade.html"
            >
              About Belgrade
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.gsp.rs/karte_za_prevoz.aspx"
            >
              Public City Transport
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}
export default TravelInfoFaculty
