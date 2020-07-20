import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import map from "../../content/images/belgradeMap.png"

class TravelInfo extends React.Component {
  render() {
    console.log(this.props.location)
    return (
      <Layout language="el" location={this.props.location}>
        <SEO title="Travel Info" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Πληροφορίες Ταξιδιού - ΠΡΟΣΒΑΣΗ ΣΤΟ ΒΕΛΙΓΡΑΔΙ</h1>
          <h2>Αεροπορικώς</h2>
          <p>
            Εάν προτιμάτε να ταξιδέψετε με αεροπλάνο, το Βελιγράδι διαθέτει το
            Διεθνές Αεροδρόμιο Nikola Tesla (BEG), που βρίσκεται μόλις 18
            χιλιόμετρα από το κέντρο της πόλης. Το αεροδρόμιο δέχεται διάφορες
            πτήσεις από ευρωπαϊκές πόλεις όπως και διάφορες διατλαντικές πτήσεις
            και πτήσεις από τη Μέση Ανατολή και την Αφρική.
          </p>
          <p>
            Το αεροδρόμιο είναι καλά συνδεδεμένο με το κέντρο της πόλης μέσω της
            δημόσιας συγκοινωνίας (GSP) μέσω της γραμμής λεωφορείου 72 και με
            ταξί. Η μέση τιμή του ταξί από το αεροδρόμιο έως το κέντρο είναι
            περίπου 1.500-2.000 Δηνάρια (15-20 €).
          </p>
          <h3>Αεροπορικές εταιρείες:</h3>
          <p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.aegeanair.com/"
                >
                  Aegean Airlines
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.aeroflot.org"
                >
                  Aeroflot
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.aerosvit.com"
                >
                  Aerosvit
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.airfrance.rs"
                >
                  Air France
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.alitalia.com"
                >
                  Alitalia
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="www.aua.com">
                  Austrian Airlines
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.aviogenex.com"
                >
                  Aviogenex
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=" www.british-airways.com"
                >
                  British Airways
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="www.csa.cz">
                  Czech Airlines
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.emirates.com"
                >
                  Emirates
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.lufthansa.com"
                >
                  Lufthansa
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.malev.com"
                >
                  Malev
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.montenegroairlines.com"
                >
                  Montenegro Airlines
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=" www.qantas.com.au"
                >
                  Qantas Airways
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.qatarairways.com"
                >
                  Qatar Airways
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.swissair.com"
                >
                  Swiss International
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.tunisair.com"
                >
                  Tunisair
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="www.thy.com">
                  Turkish Airlines
                </a>
              </li>
            </ul>
          </p>
          <h3>Low cost αεροπορικές εταιρείες:</h3>
          <p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.airberlin.com"
                >
                  Air Berlin
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.cimber.dk"
                >
                  Cimber Air
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.germanwings.com"
                >
                  Germanwings
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.norwegian.no"
                >
                  Norwegian Air Shuttle
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="w2.volawindjet.it"
                >
                  Wind Jet
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.wizzair.com"
                >
                  Wizz Air
                </a>
              </li>
            </ul>
          </p>
          <p>
            Περισσότερες πληροφορίες μπορείτε να βρείτε στην ιστοσελίδα του
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://beg.aero/eng"
            >
              {" "}
              αεροδρομίου
            </a>
            .
          </p>
          <h2>Με λεωφορείο</h2>
          <p>
            Το Βελιγράδι είναι καλά συνδεδεμένο με γραμμές λεωφορείων, τα οποία
            αποτελούν το φθηνότερο μέσο μεταφοράς εντός της πόλης, καθώς και
            όλων των πόλεων στη Σερβία. Οι τακτικές γραμμές λεωφορείων συνδέουν
            το Βελιγράδι με όλα τα μέρη της Σερβίας, ενώ οι διεθνείς γραμμές
            συνδέουν το Βελιγράδι με τις γειτονικές πόλεις και τις περισσότερες
            ευρωπαϊκές χώρες. Οι δύο μεγάλοι σταθμοί λεωφορείων βρίσκονται ο
            ένας δίπλα στον άλλο, στο κέντρο της πόλης, κοντά στον παλιό
            Κεντρικό Σιδηροδρομικό Σταθμό. Τα εισιτήρια μπορείτε να τα αγοράσετε
            στον κεντρικό σταθμό λεωφορείων (Glavna autobuska stanica).
          </p>
          <p>
            Περισσότερες πληροφορίες σχετικά με τα δρομολόγια και τις τιμές
            μπορείτε να βρείτε στην ιστοσελίδα του{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.bas.rs/en/"
            >
              Σταθμού Λεωφορείων του Βελιγραδίου
            </a>
          </p>
          <h2>Σιδηροδρομικώς</h2>
          <p>
            Ο κεντρικός σιδηροδρομικός σταθμός του Βελιγραδίου προσφέρει ένα
            καλά ανεπτυγμένο δίκτυο σιδηροδρόμων που συνδέει την πρωτεύουσα της
            Σερβίας με όλες τις κύριες πόλεις της Ευρώπης, με ημερήσια και
            νυχτερινά τρένα. Επίσης, μην ξεχάσετε να ελέγξετε αν μπορείτε να
            λάβετε εκπτώσεις όπως: Inter Rail, Euro Domino, Railplus, Balkan
            Flexipass, Easy Travel Card, Euro 26, City Star και Unified Balkans
            Tariff.
          </p>
          <p>
            Περισσότερες πληροφορίες σχετικά με τα δρομολόγια και τις τιμές
            μπορείτε να βρείτε στην ιστοσελίδα των{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://serbianrailways.com/"
            >
              Σερβικών Σιδηροδρόμων
            </a>
          </p>
          <h2>Με αυτοκίνητο</h2>
          <p>
            Οι ξένοι οδηγοί στη Σερβία πρέπει να έχουν διεθνή άδεια οδήγησης και
            διεθνή ασφάλιση, οι οποίες μπορούν να αγοραστούν και στα σύνορα. Οι
            δύο κύριοι διεθνείς δρόμοι που διέρχονται από το Βελιγράδι είναι η
            ευρωπαϊκή οδός E-70 και E-75. Είναι σε σχετικά καλή κατάσταση, αλλά
            θα πρέπει να πληρώσετε αρκετά διόδια μέχρι να φτάσετε στο Βελιγράδι.
            Από την άλλη πλευρά, οι τοπικοί δρόμοι ενδέχεται να μην διαθέτουν
            επαρκείς πινακίδες, οπότε είναι καλύτερο να έχετε πάντα έναν
            αναλυτικό χάρτη μαζί σας. Τα όρια ταχύτητας είναι σύμφωνα με τα
            διεθνή πρότυπα (π.χ. σε αυτοκινητόδρομο η μέγιστη ταχύτητα είναι 120
            χλμ την ώρα).
          </p>
          <p>Απόσταση από το Βελιγράδι μέχρι τις κύριες ευρωπαϊκές πόλεις:</p>
          <p>
            <ul>
              <li>Άμστερνταμ 1760 χλμ</li>
              <li>Αθήνα 1090 χλμ</li>
              <li>Βιέννη 621 χλμ</li>
              <li>Βερολίνο 1489 χλμ</li>
              <li>Βουδαπέστη 383 χλμ</li>
              <li>Θεσσαλονίκη 504 χλμ</li>
              <li>Κωνσταντινούπολη 928 χλμ</li>
              <li>Κοπεγχάγη 2018 χλμ</li>
              <li>Λονδίνο 2073 χλμ</li>
              <li>Μόναχο 1020 χλμ</li>
              <li>Μόσχα 2211 χλμ</li>
              <li> Όσλο 2577 χλμ</li>
              <li>Πράγα 901 χλμ</li>
              <li>Ρώμη 1280 χλμ</li>
              <li>Στοκχόλμη 2622 χλμ</li>
            </ul>
          </p>
          <h2>Τελωνείo και βίζες</h2>
          <p>
            Οι πολίτες των ακόλουθων χωρών δεν χρειάζονται βίζα για να εισέλθουν
            στη Σερβία και έχουν τη δυνατότητα να παραμείνουν στη χώρα έως και
            90 ημέρες: Ανδόρα, Αργεντινή, Αυστραλία, Αυστρία, Βέλγιο,
            Λευκορωσία, Βοσνία-Ερζεγοβίνη, Βουλγαρία, Τσεχική Δημοκρατία,
            Κροατία, Κύπρος, Δανία, Εσθονία, Φινλανδία, Γαλλία, Γερμανία, Μεγάλη
            Βρετανία, Ελλάδα, Ουγγαρία, Ιερά, Ιρλανδία, Ισλανδία, Ιταλία,
            Ισραήλ, Λετονία, Λιχτενστάιν, Λιθουανία, Λουξεμβούργο, Βόρεια
            Μακεδονία, Μάλτα, Μονακό, Ολλανδία, Νορβηγία, Πολωνία , Πορτογαλία,
            Ρουμανία, Ρωσική Ομοσπονδία, Άγιος Μαρίνος, Σλοβακία, Σλοβενία,
            Ισπανία, Ελβετία, Σουηδία, ΗΠΑ, Βατικανό.
          </p>
          <p>
            Άτομα που έρχονται από άλλες χώρες θα πρέπει να επικοινωνήσουν με τη
            Σερβική Πρεσβεία ή το Προξενικό Γραφείο στη χώρα τους και να
            υποβάλουν αίτηση για θεώρηση εισόδου. Οι λεπτομέρειες της
            διαδικασίας μπορεί να ποικίλλουν, αλλά μπορεί να σας ζητηθεί να
            παράσχετε ορισμένα από τα ακόλουθα έγγραφα: επιστολή πρόσκλησης από
            έναν Σέρβο κάτοικο ή οργανισμό, απόδειξη από το μέρος διαμονής (π.χ.
            ξενοδοχείο), ιατρική ασφάλιση, απόδειξη τραπεζικού λογαριασμού ή
            πιστωτικής κάρτας, απόδειξη απασχόλησης ή φοίτησης, αντίγραφο
            εισιτηρίου μετ’ επιστροφής ή φωτογραφίες.
          </p>
          <p>
            Κατά την άφιξή τους στο Βελιγράδι, οι αλλοδαποί πολίτες πρέπει να
            εγγραφούν στο τοπικό αστυνομικό τμήμα εντός 24 ωρών (εάν διαμένετε
            σε ένα ξενοδοχείο, το ξενοδοχείο κάνει αυτήν την εγγραφή αυτόματα).
            Η εγγραφή είναι δωρεάν για τους πρώτους τρεις μήνες της διαμονής,
            ανεξάρτητα από τον σκοπό της επίσκεψης, αλλά εάν θέλετε να μείνετε
            στη Σερβία για μεγαλύτερο χρονικό διάστημα με σκοπό την εκπαίδευση,
            την επιστημονική έρευνα, την επαγγελματική απασχόληση, τον τουρισμό,
            τη συμμετοχή σε μια επαγγελματική δραστηριότητα, ιατρική περίθαλψη ή
            γάμο, είσαστε υποχρεωμένοι να υποβάλλετε αίτηση για άδεια προσωρινής
            διαμονής πριν από τη λήξη της περιόδου των τριών μηνών.
          </p>
          <h1>ΠΡΟΣΒΑΣΗ ΣΤΗ ΦΙΛΟΛΟΓΙΚΗ ΣΧΟΛΗ</h1>
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
          <img src={map} alt="faculty location" />
          <p>
            Η δεύτερη επιλογή είναι το λεωφορειάκι A1, το οποίο κάνει την
            τελευταία του στάση στην πλατεία Slavija. Η τιμή του εισιτηρίου
            είναι 300 δηνάρια (περίπου 3 €) και είναι πολύ πιο γρήγορη επιλογή
            από την κανονική γραμμή λεωφορείου. Από την πλατεία Slavija μπορείτε
            να φτάσετε στο Πανεπιστήμιο με κάποιο τρόλεϊ ή λεωφορείο (αριθμός
            31, 29, E9).
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
          <p>
            <ul>
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
          </p>
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
export default TravelInfo
