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
            Vinča culture, evolved within the Belgrade area in the 6th
            millennium BC.
          </p>
          <p>
            Τhe city was founded by the Celts in the 4thcentury BCE and it was
            known as Singidunum by the Romans. Due to its location, Singidunum
            became an important crossroad for the Roman provinces of Moesia,
            Dacia, Pannonia and Dalmatia. This city of very tumultuous history
            changed hands among the Sarmatians, Goths, and Gepidae.{" "}
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
            After the World War I Belgrade became the capital of the new Kingdom
            of Serbs, Croats and Slovenes, renamed the Kingdom of Yugoslavia in
            1929. During the period after the World War II, Belgrade grew
            rapidly as the capital and the largest city of Yugoslavia
            (1918-2003), developing as a major industrial centre. In 1948, the
            construction of New Belgrade started and in 1958, Belgrade's first
            television station began broadcasting. Today, this modern European
            city attracts tourists from all over the world, offering them a
            unique experience.
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
          <h2>Entertainment in Belgrade</h2>
          <h3>Restaurants</h3>
          <p>
            In general, the Serbian cuisine is a heterogeneous mix due to the
            influence of various cultures and their cuisine (such as the Greek,
            the Hungarian, the Turkish and the Austrian one) which left their
            trace in the history of Belgrade throughout the centuries. The
            Serbian traditional food involves a lot of grilled meat, legumes and
            many cabbage-based meals. It is a rich cuisine with a wide range of
            alcohol beverages that accompany these fat-rich dishes. Most Serbian
            restaurants serve the national cuisine, but there are lots of
            international restaurants with a large variety of dishes (Chinese,
            Italian, Japanese, French, Greek and Mexican).
          </p>
          <p>
            We recommend visiting the picturesque neighborhood ‘Skadarlija’,
            where you can find many traditional restaurants. Some modern
            restaurants can be found in the Beton Hala area, along with bars and
            clubs.
          </p>
          <p>
            Here you can find some restaurant suggestions:
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
          <h3>Bars and clubs</h3>
          <p>
            Belgrade is famous for its entertainment choices and it is usually
            characterized as a nightlife capital. The mainstream clubbing scene
            consists of venues playing house music, progressive, tech house, and
            turbo-folk (a sub-genre of folk music with dance and pop elements
            specific to Serbia), but you can also find places specializing in
            R’n’B, pop, rock, trance, alternative, jazz, or any other type of
            music.
          </p>
          <p>
            Additionally, Belgrade has an alternative music scene and many
            interesting places to visit. Here you can find some interesting
            recommendations:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lonelyplanet.com/serbia/belgrade/entertainment/a/poi-ent/360674"
            >
              Belgrade Entertainment
            </a>
          </p>
          <p>
            More information about the nightlife can be found{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://belgradeatnight.com/belgrade/"
            >
              here
            </a>
            . Find additional club recommendations{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://belgradeatnight.com/clubs/"
            >
              here
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
