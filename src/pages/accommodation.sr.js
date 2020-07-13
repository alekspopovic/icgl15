import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Accommodation extends React.Component {
  render() {
    return (
      <Layout language="sr" location={this.props.location} extraWide={true}>
        <SEO title="Accommodation" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>Smeštaj</h1>
          <h2>Obližnji hoteli</h2>
          <table>
            <tbody>
              <tr>
                <th>Hotel</th>
                <th>Category</th>
                <th>Location</th>
                <th>Distance from the University</th>
                <th>Find on the Map</th>
                <th>Access to the Market, restaurants etc</th>
                <th>Access to Public Means of Transportation</th>
                <th>Parking Services</th>
                <th>Hotel’s Website</th>
              </tr>
              <tr>
                <td>Black Pearl Luxury Suites</td>
                <td></td>
                <td>City Center</td>
                <td>1200m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Design Hotel Mr. President</td>
                <td></td>
                <td>Wider City Center</td>
                <td>1800m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>88 Rooms </td>
                <td>4*</td>
                <td>Wider City Center</td>
                <td>1800m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.88rooms.com/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Belgrade Art Hotel</td>
                <td>4*</td>
                <td>City Center</td>
                <td>280m </td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://belgradearthotel.com/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Belgrade Inn Garni Hotel</td>
                <td>4*</td>
                <td>City Center</td>
                <td>1200m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Bohemian Garni - Skadarlija</td>
                <td>3*</td>
                <td>City Center</td>
                <td>920m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bohemian.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Boutique Garni Hotel Townhouse 27</td>
                <td>4*</td>
                <td>City Center</td>
                <td>330m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://townhouse27.com/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Boutique Hotel Museum</td>
                <td>4*</td>
                <td>City Center</td>
                <td>420m </td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>No</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://hotelmuseum.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Central Park Residence</td>
                <td></td>
                <td>City Center</td>
                <td>500m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>City Code Exclusive</td>
                <td></td>
                <td>City Center</td>
                <td>500m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>City Savoy</td>
                <td></td>
                <td>City Center</td>
                <td>600m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Courtyard by Marriott </td>
                <td></td>
                <td>City Center</td>
                <td>400m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Crowne Plaza Belgrade</td>
                <td></td>
                <td>Wider City Center</td>
                <td>2500m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Design Hotel Mr. President</td>
                <td></td>
                <td>Wider City Center</td>
                <td>1800</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Envoy</td>
                <td>4*</td>
                <td>City Center</td>
                <td>350m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.envoy-hotel.com/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Feel Belgrade City Center</td>
                <td></td>
                <td>City Center</td>
                <td>100m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Garni Hotel Argo</td>
                <td>3*</td>
                <td>City Center</td>
                <td>1400m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>No</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.argohotelbelgrade.com/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Golden Tulip Zira</td>
                <td>4*</td>
                <td>Wider City Center</td>
                <td>2950m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor & Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zira-belgrade.goldentulip.com/en-us"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Hilton Belgrade</td>
                <td>4*</td>
                <td>City Center</td>
                <td>1700m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Free of Charge</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.hilton.com/en/hotels/begbshi-hilton-belgrade/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Holiday Inn Express Belgrade - City</td>
                <td>4*</td>
                <td>Wider City Center</td>
                <td>2700m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.ihg.com/holidayinnexpress/hotels/gb/en/reservation"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Hotel Constantine the Great</td>
                <td></td>
                <td>Wider City Center</td>
                <td>2100m</td>
                <td></td>
                <td>High</td>
                <td>High </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hotel Le Petit Piaf</td>
                <td></td>
                <td>City Center</td>
                <td>1300m</td>
                <td></td>
                <td>High</td>
                <td>High </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hotel Metropol Palace</td>
                <td>5* </td>
                <td>Wider City Center</td>
                <td>2000m </td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.metropolpalace.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Hotel Opera</td>
                <td></td>
                <td>City Center</td>
                <td>1300m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hotel Slavija Garni</td>
                <td>3*</td>
                <td>Wider City Center</td>
                <td>1950m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor & Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.slavijahotelbelgrade.com/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Hotel Srbija Garden Ex Garni</td>
                <td></td>
                <td>City Center</td>
                <td>1400m</td>
                <td></td>
                <td>High</td>
                <td>High </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hyatt Regency Belgrade</td>
                <td></td>
                <td>Wider City Center</td>
                <td>2200m</td>
                <td></td>
                <td>High</td>
                <td>High </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Jump INN Hotel Belgrade</td>
                <td></td>
                <td>City Center</td>
                <td>1600m</td>
                <td></td>
                <td>High</td>
                <td>High </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Kasina</td>
                <td>3*</td>
                <td>City Center</td>
                <td>690m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>No</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hotelkasina.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Kopernikus Hotel Prag</td>
                <td>4*</td>
                <td>City Center</td>
                <td>980m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor & Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.hotelprag.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Life Design</td>
                <td>4*</td>
                <td>City Center</td>
                <td>920m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Free of Charge</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.lifedesignhotel.rs/en-us"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>M House Belgrade</td>
                <td></td>
                <td>City Center</td>
                <td>800m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Majestic </td>
                <td>4*</td>
                <td>City Center</td>
                <td>530m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://majestic.rs/sr_RS/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Mama Shelter </td>
                <td>4*</td>
                <td>City Center</td>
                <td>200m </td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.mamashelter.com/en"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>MARK Hotel Beograd</td>
                <td></td>
                <td>Wider City Center</td>
                <td>2300m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Mercure Belgrade Excelsior </td>
                <td>4*</td>
                <td>City Center</td>
                <td>1300m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://excelsior.hotels-in-belgrade.com/en/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Moskva</td>
                <td>4*</td>
                <td>City Center</td>
                <td>690m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hotelmoskva.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Palace Hotel</td>
                <td>4*</td>
                <td>City Center</td>
                <td>315m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.palacehotel.co.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Prince Hall Palace</td>
                <td></td>
                <td>City Center</td>
                <td>1100m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Public House Hotel</td>
                <td>4*</td>
                <td>City Center</td>
                <td>615m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Free of Charge</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.publichousehotel.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Queen's Astoria Design</td>
                <td>4*</td>
                <td>City Center</td>
                <td>1300m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Free of Charge</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.astoria.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Royal Inn Hotel</td>
                <td></td>
                <td>City Center</td>
                <td>600m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Saint Ten </td>
                <td>4*</td>
                <td>Wider City Center</td>
                <td>2000m </td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://saintten.com/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Sky Hotel</td>
                <td></td>
                <td>Wider City Center</td>
                <td>1800m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Square Nine</td>
                <td>4*</td>
                <td>City Center</td>
                <td>80m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Indoor & Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.squarenine.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Union</td>
                <td>3*</td>
                <td>City Center</td>
                <td>800m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.hotelunionbelgrade.com/"
                  >
                    Website
                  </a>
                </td>
              </tr>
              <tr>
                <td>Urban Lodge Belgrade</td>
                <td></td>
                <td>City Center</td>
                <td>900m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Vila Terazije</td>
                <td></td>
                <td>City Center</td>
                <td>1500m</td>
                <td></td>
                <td>High</td>
                <td>High</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Zepter</td>
                <td>4*</td>
                <td>City Center</td>
                <td>600m</td>
                <td>map</td>
                <td>High</td>
                <td>High </td>
                <td>Outdoor/ Charged</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.hotelzepter.rs/"
                  >
                    Website
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}

export default Accommodation
