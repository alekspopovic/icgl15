import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import map from "../../content/images/belgradeMap.png"

class TravelInfo extends React.Component {
  render() {
    console.log(this.props.location)
    return (
      <Layout language="en" location={this.props.location}>
        <SEO title="TravelInfo" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Travel Info - ACCESS TO BELGRADE</h1>
          <h2>By airplane</h2>
          <p>
            If you prefer travelling by plane, Belgrade is served by Nikola
            Tesla International Airport (BEG), situated just 18 kilometers from
            the city center. The airport receives various flights from European
            cities and also receives a number of transatlantic flights as well
            as flights from the Middle East and Africa.
          </p>
          <p>
            The airport is well connected with the city center through public
            transportation (GSP) bus line number 72 and taxis. The average
            taxi’s price to the city center is approximately 1,500-2,000 Dinars
            (15-20 €).
          </p>
          <h3>Carriers:</h3>
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
          <h3>Low cost carriers:</h3>
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
            You can find more information at the website of the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://beg.aero/eng"
            >
              {" "}
              Nikola Tesla airport
            </a>
            .
          </p>
          <h2>By coach bus</h2>
          <p>
            Belgrade is well served by coaches and they are the cheapest mean of
            transportation within the city and all towns in Serbia. Regular bus
            lines connect Belgrade with all parts of Serbia meanwhile
            international bus lines operate to all Belgrade’s surrounding areas
            and most European countries. The two major coach stations are
            located one next the other, in the city center, near the Central
            Railway Station. Tickets can be purchased at the main bus station
            (Glavna autobuska stanica).
          </p>
          <p>
            You can find more information about the timetables and prices at the
            website of the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.bas.rs/en/"
            >
              Belgrade Bus Station
            </a>
          </p>
          <h2>By train</h2>
          <p>
            Belgrade Central Railway Station offers a well-developed network of
            railways that connects Serbia’s capital with all the main cities of
            Europe, by daily, as well as overnight trains. Remember to check if
            you can get commercial discounts such as: Inter Rail, Euro Domino,
            Railplus, Balkan Flexipass, Easy Travel Card, Euro 26, City Star and
            the Unified Balkans Tariff.
          </p>
          <p>
            You can find more information about the timetables and prices at the
            website of the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://serbianrailways.com/"
            >
              Serbian Railways
            </a>
          </p>
          <h2>By car</h2>
          <p>
            Foreign drivers in Serbia need to have a valid international driving
            license and an international insurance, which can also be bought at
            the border. The two main international roads going through Belgrade
            are the E-70 and the E-75. They are in relatively good conditions
            but you will have to pay on several pay tolls to Belgrade. Meanwhile
            local roads may lack of sufficient road signs so it is better to
            bring always a detailed map with you. Speed limits are in accordance
            with international standards (e.g. on a highway the maximum speed is
            120km/hour).
          </p>
          <p>Distance from Belgrade to the main European cities:</p>
          <p>
            <ul>
              <li>Amsterdam 1760 km</li>
              <li>Athens 1090 km</li>
              <li>Vienna 621 km</li>
              <li>Berlin 1489 km</li>
              <li>Budapest 383 km</li>
              <li>Istanbul 928 km</li>
              <li>Copenhagen 2018 km</li>
              <li>London 2073 km</li>
              <li>Munich 1020 km</li>
              <li>Moscow 2211 km</li>
              <li>Oslo 2577 km</li>
              <li>Prague 901 km</li>
              <li>Rome 1280 km</li>
              <li>Stockholm 2622 km</li>
              <li>Thessaloniki 504 km</li>
            </ul>
          </p>
          <h2>Customs and visas</h2>
          <p>
            The citizens of the following countries do not need a visa to enter
            Serbia and they have the possibility to stay in the country up to 90
            days: Andorra, Argentina, Australia, Austria, Belgium, Belarus,
            Bosnia and Herzegovina, Bulgaria, Czech Republic, Croatia, Cyprus,
            Denmark, Estonia, Finland, France, Germany, Great Britain, Greece,
            Hungary, Holy, Ireland, Iceland, Italy, Israel, Latvia,
            Lichtenstein, Lithuania, Luxembourg, Macedonia, Malta, Monaco,
            Netherlands, Norway, Poland, Portugal, Romania, Russian Federation,
            San Marino, Slovakia, Slovenia, Spain, Switzerland, Sweden, U.S.A.,
            Vatican.
          </p>
          <p>
            On the other hand, people from other countries should get in touch
            with the Serbian Embassy or Consular Office in their own country and
            apply for an entry visa. The details of the procedure can vary, but
            you may be asked to provide some of the following documentation:
            invitation letter from a Serbian resident or organization, voucher
            from your accommodation provider (e.g. hotel) medical insurance,
            proof of sufficient funds for the trip (bank account or credit
            card), proof of employment or student status, copy of a return
            ticket or photographs.
          </p>
          <p>
            On their arrival in Belgrade, foreign citizens need to register at
            local police station within 24 hours (If you are staying in a hotel,
            the hotel performs this registration for you automatically).
            Registration is free for the first three months of staying,
            regardless of the purpose of the visit, but if you want to stay in
            Serbia for a longer period for the purpose of education, scientific
            research, employment, tourism, engagement in a professional
            activity, medical treatment, or marriage, you are obliged to apply
            for a temporary resident status before the three-month period
            expires.
          </p>
          <h1>ACCESS TO THE FACULTY OF PHILOLOGY</h1>
          <p>
            The Faculty of Philology is located in the center of Belgrade, near
            the pedestrian zone and the main pedestrian street Knez Mihajlova.
            The address is Studentski trg 3 and the faculty can be reached by
            taxi, public transportation or by foot.
          </p>
          <h2>By bus</h2>
          <h3>From the Airport Nikola Tesla</h3>
          <p>
            The airport is well connected with the city center through public
            transportation (GSP) bus line number 72. The trip by bus takes
            around 1 hour. In order to get to the Faculty of Philology you
            should get off at the last station (Zeleni venac) and then walk
            around 10 minutes.
          </p>
          <p>
            Paper tickets can be purchased in the vehicle from the driver in
            daily traffic and they cost 150 dinars (around 1,50 €).
            Additionally, electronic tickets (BUS PLUS) outside the subscription
            mode for multiple rides can be found in the shops, with one ride
            costing 89 dinars (around 0,90 €). The daily electronic ticket costs
            250 dinars (around 2,50 €).
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
          <img src={map} alt="faculty location" />
          <p>
            The second option is the minibus A1, which has its last stop at the
            Slavija square. The price of the ticket is 300 dinars (around 3 €)
            and it is much quicker than the regular bus line. From the Slavija
            square, you can reach the faculty by one of the trolley buses or
            buses (number 31, 29, E9).
          </p>
          <p>
            Paper tickets can be purchased in the vehicle from the driver in
            daily traffic and they cost 150 dinars (around 1,50 €).
            Additionally, electronic tickets (BUS PLUS) outside the subscription
            mode for multiple rides can be found in the shops, with one ride
            costing 89 dinars (around 0,90 €). The daily electronic ticket costs
            250 dinars (around 2,50 €).{" "}
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
          </p>
          <h3>From the main bus station</h3>
          <p>
            From the main bus station, you can take the buses no. 52, 53 and 56,
            from the station “Kamenicka”, until the the last station (Zeleni
            venac) and then walk around 10 minutes, as already explained.
          </p>
          <p>
            Paper tickets can be purchased in the vehicle from the driver in
            daily traffic and they cost 150 dinars (around 1,50 €).
            Additionally, electronic tickets (BUS PLUS) outside the subscription
            mode for multiple rides can be found in the shops, with one ride
            costing 89 dinars (around 0,90 €). The daily electronic ticket costs
            250 dinars (around 2,50 €).
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
          <h3>From the railway station</h3>
          <p>
            From the railway station take the bus no. 95 until the the last
            station (Zeleni venac) and then walk around 10 minutes, as already
            mentioned*.
          </p>
          <p>
            Paper tickets can be purchased in the vehicle from the driver in
            daily traffic and they cost 150 dinars (around 1,50 €).
            Additionally, electronic tickets (BUS PLUS) outside the subscription
            mode for multiple rides can be found in the shops, with one ride
            costing 89 dinars (around 0,90 €). The daily electronic ticket costs
            250 dinars (around 2,50 €).
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
            changes in traffic after the end of reconstructions of certain city
            areas and roads.
          </p>
          <h2>By taxi</h2>
          <h3>From the Airport Nikola Tesla</h3>
          <p>
            The average taxi’s price is approximately 1,500-2,000 Dinars (15-20
            €).
          </p>
          <h3>From the main bus station</h3>
          <p>The average taxi’s price is approximately 500 Dinars (5 €).</p>
          <h3>From the railway station</h3>
          <p>The average taxi’s price is approximately 700 Dinars (7 €).</p>
          <h3>Some safe taxi options:</h3>
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
export default TravelInfo
