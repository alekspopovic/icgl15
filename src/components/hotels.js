import React from "react"
import hotels from "../data/hotels"
import hotelsGreek from "../data/hotelsGreek"
import contentStyles from "../styles/index.module.css"

class Hotels extends React.Component {
  render() {
    const { language } = this.props

    let tableHeading =
      language === "en" ? (
        <tr>
          <th>Hotel</th>
          <th>Category</th>
          <th>Location</th>
          <th>Distance from University</th>
          <th>Find on Map</th>
          <th>Access to market and restaurants</th>
          <th>Access to public transport</th>
          <th>Parking</th>
          <th>Website</th>
        </tr>
      ) : (
        <tr>
          <th>Ξενοδοχείο</th>
          <th>Κατηγορία</th>
          <th>Τοποθεσία</th>
          <th>Απόσταση από το Πανεπιστήμιο</th>
          <th>Εύρεση στον χάρτη</th>
          <th>Απόσταση από σουπερμάρκετ και εστιατόρια</th>
          <th>Απόσταση από μέσα μαζικής μεταφοράς</th>
          <th>Στάθμευση</th>
          <th>Ιστότοπος</th>
        </tr>
      )

    let hotelData = language === "en" ? hotels.data : hotelsGreek.data
    let mapText = language === "en" ? "MAP" : "ΧΑΡΤΗΣ"
    let websiteText = language === "en" ? "Website" : "Ιστότοπος"
    let meterText = language === "en" ? "m" : "μ"

    return (
      <table id={contentStyles.table}>
        <tbody>
          {tableHeading}
          {hotelData.map(hotel => {
            return (
              <tr key={hotel.Hotel}>
                <td>{hotel.Hotel}</td>
                <td>{hotel.Category}</td>
                <td>{hotel.Location}</td>
                <td>
                  {hotel.DistanceFromUniversity}
                  {meterText}
                </td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={hotel.FindOnMapUrl}
                  >
                    {mapText}
                  </a>
                </td>
                <td>{hotel.AccessToMarketAndRestaurants}</td>
                <td>{hotel.AccessToPublicMeansOfTransportation}</td>
                <td>{hotel.ParkingServices}</td>
                <td>
                  {hotel.HotelWebsiteUrl &&
                  hotel.HotelWebsiteUrl !== "Website" ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={hotel.HotelWebsiteUrl}
                    >
                      {websiteText}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Hotels
