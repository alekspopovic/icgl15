import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class TouristGuide extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO title="Tourist Guide" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Tourist Guide</h1>
          <h2>Belgrade</h2>
          <h3>The City of Belgrade - Location</h3>
          <p>
            Belgrade (in Serbian Beograd “White City”) is the capital and
            largest city of Serbia. It is located at the confluence of the Sava
            and Danube rivers and the crossroads of the Pannonian Plain and the
            Balkan Peninsula. It lies at the convergence of three historically
            important routes of travel between Europe and the Balkans:{" "}
          </p>
          <ul>
            <li>
              east-west route along the Danube River valley from Vienna to the
              Black Sea;
            </li>
            <li>
              westward route along the valley of the Sava River toward Trieste
              and northern Italy;
            </li>
            <li>
              southeast route along the valleys of the Morava and Vardar rivers
              to the Aegean Sea.
            </li>
          </ul>
          <p>
            The urban area of Belgrade has a population of 1.23 million, while
            nearly 1.7 million people live within the administrative limits of
            the City of Belgrade. It is the seat of the central government,
            administrative bodies, and government ministries, as well as home of
            almost all of the largest Serbian companies, media, and scientific
            institutions.
          </p>
          <h3>Brief history of the city</h3>
          <p>
            Belgrade is one of the oldest cities in Europe. The area around
            Belgrade was inhabited in the Palaeolithic and Mesolithic eras,
            while one of the most important prehistoric cultures of Europe, the
            Vinča culture, evolved within the Belgrade area in the 6
            <sup>th</sup>
            millennium BC.
          </p>
          <p>
            Τhe city was founded by the Celts in the 4thcentury BCE and it was
            known as Singidunum by the Romans. Due to its location, Singidunum
            became an important crossroad for the Roman provinces of Moesia,
            Dacia, Pannonia and Dalmatia. This city of very tumultuous history
            changed hands among the Sarmatians, Goths, and Gepidae.
          </p>
          <p>
            It was later held by the Franks and the Bulgars, and in the 11th
            century became a frontier town of Byzantium. In the 13th century it
            came under the Serbian rule, and in 1402 despot Stefan Lazarević
            made it the capital of Serbia. The Ottoman Turks besieged the city
            in 1440, and until the 19th century it was in their hands.
          </p>
          <p>
            During the Turkish period Belgrade was a significant commercial
            centre where goods were traded from various parts of the Ottoman
            Empire. It came under Serbian rule in 1867 and once again became the
            capital of Serbia.
          </p>
          <p>
            After the World War I, Belgrade became the capital of the new
            Kingdom of Serbs, Croats and Slovenes, renamed the Kingdom of
            Yugoslavia in 1929. During the period after the World War II,
            Belgrade grew rapidly as the capital and the largest city of
            Yugoslavia (1918-2003), developing as a major industrial centre. In
            1948, the construction of New Belgrade started and in 1958,
            Belgrade's first television station began broadcasting. Today, this
            modern European city attracts tourists from all over the world,
            offering them a unique experience.
          </p>
          <p>Sources of information:</p>
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
            centers in Europe. It was founded in 1808 as the Belgrade Higher
            School in revolutionary Serbia and by 1838 it merged with other
            Department in Kragujevac into a single university. Nowadays, the
            University of Belgrade has around 97,700 enrolled students and over
            4,800 academic members. The University comprises 31 departments, 12
            research institutes, the university library, and 9 university
            centers. The faculties are organized into 4 groups: Social Sciences
            and Humanities, Medical Sciences, Natural Sciences and Mathematics,
            and Technological Sciences.
          </p>
          <h2>The Faculty of Philology</h2>
          <p>
            The Faculty of Philology immerses its students in the academic study
            and research of various domains in linguistics and philology, in
            general. Since 1873, young people, having attended the Lyceum, have
            the opportunity to continue the tertiary education tradition,
            crossing over into University. Following this tradition, the Faculty
            of Philology has been developing philological disciplines. It has
            been growing as an autonomous Faculty since 1960. Nowadays, the
            Faculty is divided into multiple departments (of different
            linguistic and literary studies) equipped with their own libraries
            and teaching over 30 languages. Moreover, it runs several research
            centers and publishes a large number of periodical publications. The
            Faculty is renowned for the publication of significant scientific
            papers and the organization of cultural events.
          </p>
          <hr />
          <p>
            For more information visit:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://new.fil.bg.ac.rs/lang/sr/fakultet/o-fakultetu/"
            >
              http://new.fil.bg.ac.rs/lang/sr/fakultet/o-fakultetu/
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}
export default TouristGuide
