import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class TravelInfoBelgrade extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO
          title="Travel Info - Belgrade"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h1>Reaching Belgrade</h1>
          <h2>By airplane</h2>
          <p>
            If you prefer travelling by plane, Belgrade is served by Nikola
            Tesla International Airport (BEG), situated just 18 kilometers from
            the city center. The airport receives various flights from European
            cities and it also receives a number of transatlantic flights as
            well as flights from the Middle East and Africa.
          </p>
          <p>
            The airport is well connected with the city center through public
            transportation (GSP) bus line number 72 and taxis. The average taxi
            fare to the city center is approximately 1,500-2,000 Dinars
            (15-20€).
          </p>
          <h3>Carriers</h3>
          <span className={contentStyles.carriers}>
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
            </ul>
            <ul>
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
            </ul>
            <ul>
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
          </span>
          <h3>Low cost carriers</h3>
          <span className={contentStyles.carriers}>
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
            </ul>
            <ul>
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
            </ul>
            <ul>
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
          </span>
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
          <h2>By bus</h2>
          <p>
            Belgrade is well served by coaches and they are the cheapest mean of
            transportation within the city and all towns in Serbia. Regular bus
            lines connect Belgrade with all parts of Serbia meanwhile
            international bus lines operate to all Belgrade’s surrounding areas
            and most European countries. The two major coach stations are
            located one next to the other, in the city center, near the Central
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
            Foreign drivers in Serbia are required to have a valid international
            driving license and an international insurance, which can also be
            bought at the border. The two main international roads going through
            Belgrade are the E-70 and the E-75. They are in a relatively good
            condition but you have to pay several tolls to Belgrade. Local roads
            lack sufficient road signs, therefore, it is better to bring always
            a detailed map with you. Speed limits are in accordance with the
            international standards (e.g. on a highway the maximum speed is
            130km/hour).
          </p>
          <p>Distance from Belgrade to the main European cities:</p>
          <span className={contentStyles.distances}>
            <ul>
              <li>Amsterdam 1760 km</li>
              <li>Athens 1090 km</li>
              <li>Vienna 621 km</li>
              <li>Berlin 1489 km</li>
              <li>Budapest 383 km</li>
              <li>Istanbul 928 km</li>
              <li>Copenhagen 2018 km</li>
              <li>London 2073 km</li>
            </ul>
            <ul>
              <li>Munich 1020 km</li>
              <li>Moscow 2211 km</li>
              <li>Oslo 2577 km</li>
              <li>Prague 901 km</li>
              <li>Rome 1280 km</li>
              <li>Stockholm 2622 km</li>
              <li>Thessaloniki 504 km</li>
            </ul>
          </span>
          <h2>Customs and visas</h2>
          <p>
            The citizens of the following countries do not need a visa to enter
            Serbia and they have the possibility to stay in the country for:
            <ul>
              <li>
                up to 90 days within any 180 days: All European Union citizens,
                Albania, Andorra, Antigua and Barbuda, Argentina, Armenia,
                Australia, Azerbaijan, Bahrain, Bolivia, Bosnia and Herzegovina,
                Brazil, Canada, Chile, Costa Rica, Cuba, Dominica, Georgia,
                Grenada, Holy See, Iceland, Israel, Japan, Kuwait, Kyrgyzstan,
                Liechtenstein, Macau, Mexico, Moldova, Monaco, Mongolia,
                Montenegro, New Zealand, North Macedonia, Norway, Oman, Palau,
                Peru, Qatar, Saint Kitts and Nevis, San Marino, Seychelles,
                Singapore, South Korea, Switzerland, Trinidad and Tobago,
                Tunisia, Turkey, United Arab Emirates, United Kingdom, United
                States, Uruguay
              </li>
              <li>
                30 days: Belarus, China, Colombia, Kazakhstan, Russia, Suriname
              </li>
              <li>30 days within 60-day period: Ukraine</li>
              <li>
                30 days days within one-year period: Bahamas, Barbados, Burundi,
                Colombia, Guinea-Bissau, India, Indonesia, Paraguay, Saint
                Vincent and the Grenadines
              </li>
              <li>14 days: Hong Kong</li>
            </ul>
          </p>
          <p>
            On the other hand, people from other countries should get in touch
            with the Serbian Embassy or Consular Office in their own country and
            apply for an entry visa. The details of the procedure can vary. You
            may be asked to provide some of the following documentation:
            invitation letter from a Serbian resident or organization, voucher
            from your accommodation provider (e.g. hotel) medical insurance,
            proof of sufficient funds for the trip (bank account or credit
            card), proof of employment or student status, copy of a return
            ticket or photographs.
          </p>
          <p>
            Upon their arrival in Belgrade, foreign citizens need to register at
            a local police station within 24 hours (if you are staying at a
            hotel, the hotel performs this registration for you automatically).
            Registration is free for the first three months of your stay,
            regardless of the purpose of the visit, but if you want to stay in
            Serbia for a longer period for purposes such as education,
            scientific research, employment, tourism, engagement in a
            professional activity, medical treatment, or marriage, you are
            obliged to apply for a temporary resident status before the
            three-month period expires.
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
          <p className={contentStyles.disclaimer}>
            <strong>
              It is highly suggested to check all information on the{" "}
              <a href="http://www.mfa.gov.rs/en/">
                official website of Serbian Ministry of Foreign Affairs
              </a>
            </strong>
          </p>
        </div>
      </Layout>
    )
  }
}
export default TravelInfoBelgrade
