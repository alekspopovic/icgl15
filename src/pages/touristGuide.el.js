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
          <h2>Belgrade</h2>
          <p>
            The City of Belgrade Belgrade is the capital and largest city of
            Serbia. It is located at the confluence of the Sava and Danube
            rivers and the crossroads of the Pannonian Plain and the Balkan
            Peninsula. The urban area of Belgrade has a population of 1.23
            million, while nearly 1.7 million people live within the
            administrative limits of the City of Belgrade, a quarter of the
            total population of Serbia. It is the seat of the central
            government, administrative bodies, and government ministries, as
            well as home of almost all of the largest Serbian companies, media,
            and scientific institutions.
          </p>
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
          {/* <h1>The Department of Neohellenic Studies</h1> */}
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
