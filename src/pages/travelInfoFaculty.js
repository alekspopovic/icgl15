import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import map from "../../content/images/belgradeMap.png"

class TravelInfoFaculty extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO
          title="Travel Info - Faculty"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h1>Access to the Faculty Of Philology</h1>
          <p>
            The Faculty of Philology is located in the center of Belgrade, near
            the pedestrian zone and the main pedestrian street, Knez Mihajlova.
            The address is Studentski trg 3 and the Faculty can be reached by
            taxi, public transportation or on foot.
          </p>
          <h2>By bus</h2>
          <h3>From the Airport Nikola Tesla</h3>
          <p>
            The airport is well connected with the city center through public
            transportation (GSP) bus line number 72. The trip by bus takes
            approximately 1 hour. In order to get to the Faculty of Philology
            you should get off at the last station (Zeleni Venac) and then walk
            around 10 minutes.
          </p>
          <p>
            Paper tickets can be purchased on the bus from the bus driver and
            they cost 150 dinars (around 1,50 €). Additionally, electronic
            tickets (BUS PLUS) for multiple rides can be found in small shops or
            kiosks, with one ride costing 89 dinars (around 0,90 €). The daily
            electronic ticket costs 250 dinars (around 2,50 €).
          </p>
          <img src={map} alt="faculty location" />
          <p>
            The second option is the minibus A1; its last stop being the Slavija
            square. The ticket costs 300 dinars (around 3 €) and the mini bus is
            much quicker than the regular bus line. From the Slavija square, you
            can reach the Faculty by one of the trolley buses or buses (number
            31, 29, E9).
          </p>
          <p>
            Paper tickets can be purchased on the bus by the bus driver and they
            cost 150 dinars (around 1,50 €). Additionally, electronic tickets
            (BUS PLUS) for multiple rides can be found in shops or kiosks, with
            one ride costing 89 dinars (around 0,90 €). The daily electronic
            ticket costs 250 dinars (around 2,50 €).
          </p>
          <h3>From the main bus station</h3>
          <p>
            From the main bus station, you can take the buses no. 52, 53 and 56,
            from the station “Kamenicka”, until the last station (Zeleni Venac)
            and then walk 10 minutes approximately, as it was previously
            explained.
          </p>
          <p>
            Paper tickets can be purchased on the bus from the bus driver and
            they cost 150 dinars (around 1,50 €). Additionally, electronic
            tickets (BUS PLUS) for multiple rides can be found in shops or
            kiosks, with one ride costing 89 dinars (around 0,90 €). The daily
            electronic ticket costs 250 dinars (around 2,50 €).
          </p>
          <h3>From the railway station</h3>
          <p>
            From the railway station take the bus no. 95 until the last station
            (Zeleni Venac) and then walk around 10 minutes, as already
            mentioned*.
          </p>
          <p>
            Paper tickets can be purchased on the vehicle from the driver and
            they cost 150 dinars (around 1,50 €). Additionally, electronic
            tickets (BUS PLUS) for multiple rides can be found in the shops or
            kiosks, with one ride costing 89 dinars (around 0,90 €). The daily
            electronic ticket costs 250 dinars (around 2,50 €).
          </p>
          <p>
            More information about tickets and public transportation can be
            found{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.gsp.rs/karte_za_prevoz.aspx"
            >
              here
            </a>
            .
          </p>
          <p>
            * The information about public transportation will be updated due to
            changes in traffic after the completion of reconstructions of
            certain city areas and roads.
          </p>
          <h2>By taxi</h2>
          <h3>
            From the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://beg.aero/eng"
            >
              Airport Nikola Tesla
            </a>
          </h3>
          <p>
            The average taxi’s price is approximately 1,500-2,000 Dinars (15-20
            €).
          </p>
          <h3>
            From the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.bas.rs/en/"
            >
              main bus station
            </a>
          </h3>
          <p>The average taxi’s price is approximately 500 Dinars (5 €).</p>
          <h3>
            From the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://serbianrailways.com/"
            >
              railway station
            </a>
          </h3>
          <p>The average taxi’s price is approximately 700 Dinars (7 €).</p>
          <h3>Some safe taxi options:</h3>
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
          <p>Sources of information: </p>
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
