import React from "react"
import hotels from "../data/hotels"
import contentStyles from "../styles/index.module.css"

class Hotels extends React.Component {
  render() {
    return (
      <table id={contentStyles.table}>
        <tbody>
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
          {hotels.data.map(hotel => {
            return (
              <tr>
                <td>{hotel.Hotel}</td>
                <td>{hotel.Category}</td>
                <td>{hotel.Location}</td>
                <td>{hotel.DistanceFromUniversity}m</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={hotel.FindOnMapUrl}
                  >
                    MAP
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
                      Website
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
