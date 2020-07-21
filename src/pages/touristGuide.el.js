import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class TouristGuide extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO title="Tourist Guide" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Τουριστικός Οδηγός</h1>
          <h2>ΒΕΛΙΓΡΑΔΙ</h2>
          <h3>Η πόλη του Βελιγραδίου - Τοποθεσία</h3>
          <p>
            Βελιγράδι (στη σερβική γλώσσα Beograd «Λευκή πόλη») είναι η
            πρωτεύουσα και η μεγαλύτερη πόλη της Σερβίας. Βρίσκεται στη συμβολή
            των ποταμών Σάβου και Δούναβη και το σταυροδρόμι της πεδιάδας της
            Παννονίας και της Βαλκανικής χερσονήσου. Βρίσκεται στη σύγκλιση
            τριών ιστορικά σημαντικών διαδρομών μεταξύ Ευρώπης και Βαλκανίων:
          </p>
          <ul>
            <li>
              διαδρομή ανατολής-δύσης, κατά μήκος της κοιλάδας του Δούναβη από
              τη Βιέννη προς τη Μαύρη Θάλασσα
            </li>
            <li>
              δυτική διαδρομή, κατά μήκος της κοιλάδας του ποταμού Σάβου προς
              Τεργέστη και βόρεια Ιταλία
            </li>
            <li>
              νοτιοανατολική διαδρομή, κατά μήκος των κοιλάδων των ποταμών
              Μοράβα και Βαρδάρη προς το Αιγαίο Πέλαγος
            </li>
          </ul>
          <p>
            Η αστική περιοχή της πρωτεύουσας έχει πληθυσμό 1,23 εκατομμύρια, ενώ
            πάνω από 1,7 εκατομμύρια άνθρωποι ζουν μέσα στα διοικητικά της όρια.
            Το Βελιγράδι αποτελεί έδρα της κεντρικής κυβέρνησης, των διοικητικών
            οργάνων και των υπουργείων, καθώς και έδρα σχεδόν όλων των
            μεγαλύτερων σερβικών εταιρειών, μέσων ενημέρωσης και επιστημονικών
            ιδρυμάτων.
          </p>
          <h3>Σύντομη ιστορία της πόλης</h3>
          <p>
            Το Βελιγράδι είναι μία από τις παλαιότερες πόλεις της Ευρώπης. Η
            περιοχή γύρω από το Βελιγράδι κατοικήθηκε κατά τη διάρκεια της
            Παλαιολιθικής και Μεσολιθικής περιόδου, καθώς ένας από τους
            σημαντικότερους προϊστορικούς πολιτισμούς της Ευρώπης, ο Πολιτισμός
            Βίντσα, αναπτύχθηκε στην περιοχή του Βελιγραδίου την 6η χιλιετία
            π.Χ.
          </p>
          <p>
            Η πόλη ιδρύθηκε από τους Κέλτες τον 4οαιώνα π.Χ., ενώ στους Ρωμαίους
            ήταν γνωστή ως Singidunum. Χάρη στην τοποθεσία της η Singidunum
            έγινε ένα σημαντικό σταυροδρόμι των ρωμαϊκών επαρχιών της Μοισίας,
            Δακίας, Παννονίας και Δαλματίας. Αυτή η πόλη ταραχώδους ιστορίας
            άλλαξε τα χέρια ανάμεσα στους Σαρμάτες, τους Γότθους και τους
            Γέπιδες.
          </p>
          <p>
            Ύστερα πέρασε στην κατοχή των Φράγκων και των Βουλγάρων, και τον 11ο
            αιώνα έγινε παραμεθόρια πόλη του Βυζαντίου. Τον 13ο αιώνα τέθηκε υπό
            την κυριαρχία της Σερβίας, και το 1402 ο δεσπότης Στέφαν Λαζάρεβιτς
            την έκανε πρωτεύουσα της Σερβίας. Οι Οθωμανοί πολιόρκησαν την πόλη
            το 1440, και μέχρι το 19ο αιώνα παρέμεινε στα χέρια τους.
          </p>
          <p>
            Κατά τη διάρκεια της Τουρκοκρατορίας, το Βελιγράδι αποτελούσε
            σημαντικό κέντρο εμπορίου αγαθών, που προέρχονταν από διάφορα μέρη
            της Οθωμανικής Αυτοκρατορίας. Υπό την κυριαρχία της Σερβίας τέθηκε
            το 1867 και έγινε για άλλη μια φορά πρωτεύουσα της Σερβίας.
          </p>
          <p>
            Μετά τον Α’ Παγκόσμιο πόλεμο το Βελιγράδι έγινε πρωτεύουσα του νέου
            Βασιλείου των Σέρβων, Κροατών και Σλοβένων, και μετονομάστηκε
            Βασίλειο της Γιουγκοσλαβίας το 1929. Κατά την μεταπολεμική περίοδο
            του Β' Παγκόσμιου Πολέμου, το Βελιγράδι αναπτύχθηκε γρήγορα ως η
            πρωτεύουσα και η μεγαλύτερη πόλη της Γιουγκοσλαβίας (1918-2003),
            εξελισσόμενο σε μεγάλο βιομηχανικό κέντρο. Το 1948 ξεκίνησε η
            κατασκευή του Νέου Βελιγραδίου και το 1958 ο πρώτος τηλεοπτικός
            σταθμός του Βελιγραδίου άρχισε να εκπέμπει. Σήμερα, αυτή η σύγχρονη
            ευρωπαϊκή πόλη προσελκύει τουρίστες από όλο τον κόσμο προσφέροντάς
            τους μια μοναδική εμπειρία.
          </p>
          <p>Πηγές:</p>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.beograd.rs/cir/beoinfo/201024-history/"
              >
                http://www.beograd.rs/cir/beoinfo/201024-history/
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.serbia.com/visit-serbia/cities/belgrade/"
              >
                http://www.serbia.com/visit-serbia/cities/belgrade/
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Belgrade"
              >
                https://en.wikipedia.org/wiki/Belgrade
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.britannica.com/place/Belgrade"
              >
                https://www.britannica.com/place/Belgrade
              </a>
            </li>
          </ul>
          <p></p>
          <p></p>
          <h2>The University of Belgrade</h2>
          <p>
            The University of Belgrade is the oldest and largest university in
            Serbia, and one of the most important educational and research
            centers in Europe. Founded in 1808 as the Belgrade Higher School in
            revolutionary Serbia, by 1838 it merged with the Kragujevac-based
            departments into a single university. The University has around
            97,700 enrolled students and over 4,800 members of academic staff.
            The University comprises 31 faculties, 12 research institutes, the
            university library, and 9 university centers. The faculties are
            organized into 4 groups: social sciences and humanities; medical
            sciences; natural sciences and mathematics; and technological
            sciences.
          </p>
          <h2>The Faculty of Philology</h2>
          <p>
            The Faculty of Philology trains and educates its students in the
            academic study or practice in linguistics and philology. It has been
            nurturing the tradition of higher education stemming from the Lyceum
            since 1873 and has been developing philological disciplines and
            growing as an individual Faculty since 1960. The faculty is divided
            into 30 different departments, which possess their own libraries, it
            operates several research centers and publishes a number of
            periodical publications. The studies are comprised by the
            disciplines of language, literature, culture and library and
            information science. The Faculty boasts numerous cultural
            manifestations and is proud of its scientific publications.
            Monographs, including those written by the Faculty’s professors, are
            also an important pillar supporting further academic achievement.{" "}
          </p>
          {/* <h2>The Department of Neohellenic Studies</h2> */}
          <h2>Διασκέδαση στο Βελιγράδι</h2>
          <h3>Εστιατόρια</h3>
          <p>
            Η σερβική κουζίνα είναι ένας συνδυασμός γεύσεων από κουζίνες
            διαφόρων χωρών και πολιτισμών (της μεσογειακής, της ελληνικής, της
            ουγγρικής, της τουρκικής και της αυστριακής κουζίνας) που άσκησαν
            την επιρροή τους ανά τους αιώνες. Το σερβικό παραδοσιακό φαγητό
            περιλαμβάνει πολλά ψητά κρέατα, όσπρια και πολλά γεύματα με βάση το
            λάχανο. Πρόκειται για μια κουζίνα που χαρακτηρίζεται από πλούσια σε
            λιπαρά πιάτα, τα οποία συνοδεύονται από μεγάλη ποικιλία αλκοολούχων
            ποτών. Τα περισσότερα σερβικά εστιατόρια προσφέρουν νόστιμα
            παραδοσιακά πιάτα, αλλά υπάρχουν και αρκετά διεθνή εστιατόρια με
            ξεχωριστές γεύσεις (από την κινέζικη, την ιταλική, την ιαπωνική, τη
            γαλλική, την ελληνική και τη μεξικάνικη κουζίνα).
          </p>
          <p>
            Σας προτείνουμε να επισκεφθείτε τη γραφική γειτονιά ‘Skadarlija’,
            όπου μπορείτε να βρείτε πολλά παραδοσιακά εστιατόρια. Επίσης,
            ορισμένα μοντέρνα εστιατόρια βρίσκονται στην περιοχή Beton Hala,
            δίπλα σε διάφορα μπαρ και κλαμπ.
          </p>
          <p>
            Εδώ μπορείτε να βρείτε μερικές προτάσεις για εστιατόρια:
            <ul className={contentStyles.restaurants}>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.aboutbelgrade.com/en/restaurants-belgrade.html"
                >
                  Belgrade Restaurants
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tripadvisor.com/Restaurants-g294472-zfp58-Belgrade.html"
                >
                  Trip Advisor
                </a>
              </li>
            </ul>
          </p>
          <h3>Μπαρ και κλαμπ</h3>
          <p>
            Το Βελιγράδι είναι γνωστό ως η πρωτεύουσα της νυχτερινής ζωής, καθώς
            προσφέρει πολλές επιλογές ψυχαγωγίας. Υπάρχουν μαγαζιά και πολλές
            μουσικές σκηνές όπου παίζουν house, progressive, tech house, και
            turbo-folk μουσική (ένα είδος λαϊκής μουσικής με ποπ στοιχεία,
            χαρακτηριστικά της Σερβίας), αλλά μπορείτε να βρείτε και μέρη με
            R’n’B, ποπ, ροκ, trance, alternative, τζαζ, ή σχεδόν οποιοδήποτε
            άλλο είδος μουσικής υπάρχει.
          </p>
          <p>
            Επιπλέον, το Βελιγράδι διαθέτει και έντεχνη σκηνή και πολλά
            ενδιαφέροντα μέρη που μπορείτε να επισκεφθείτε. Εδώ μπορείτε να
            βρείτε μερικές ενδιαφέρουσες προτάσεις:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lonelyplanet.com/serbia/belgrade/entertainment/a/poi-ent/360674"
            >
              Belgrade Entertainment
            </a>
          </p>
          <p>
            Περισσότερες πληροφορίες για την νυχτερινή ζωή θα βρείτε{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://belgradeatnight.com/belgrade/"
            >
              εδώ
            </a>
            . Εδώ μπορείτε να βρείτε μερικές προτάσεις για κλαμπ{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://belgradeatnight.com/clubs/"
            >
              εδώ
            </a>
            .
          </p>
          <hr />
          <p>Information sources: </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/University_of_Belgrade#cite_note-201819stats-4"
            >
              University of Belgrade Wikipedia entry
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://new.fil.bg.ac.rs/lang/sr/fakultet/o-fakultetu/"
            >
              University of Belgrade website
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}
export default TouristGuide
