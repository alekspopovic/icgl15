import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Accommodation extends React.Component {
  render() {
    return (
      <Layout language="sr">
        <SEO title="Accommodation" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>page in Serbian</h1>
          <h1>ICGL15 / Accommodation</h1>
          <h2>University accommodation</h2>
          <p>
            The University of Westminster has student halls of residence at
            Harrow and Marylebone, which are available for conference
            accommodation. Bookings can be made here.
          </p>
          <p>
            The Harrow halls of residence are situated on our Harrow campus,
            which is just outside the main town centre. The halls of residence
            are close to a tube station, Northwick Park, which is on the same
            line (Metropolitan) as the tube station, Great Portland Street, that
            is closest to the Cavendish campus where the conference is taking
            place. The journey time is about 20 minutes. A one-way ticket will
            cost about £6. A one-day travel card, which covers all-day travel
            for Zones 1-4 (which includes Northwick Park) will cost about £13.
            More information about journeys, the London Underground system
            (commonly referred to as the ‘tube’) is available here.
          </p>
          <p>
            The Marylebone halls of residence are situated close to Baker Street
            underground station, as well as Madame Tussauds and the Planetarium.
            The Cavendish campus is 20 minutes walk or a short bus ride away.
          </p>
          <h2>Nearby hotels</h2>
          <p>
            If you wish to stay in accommodation close to the conference venue
            at Cavendish campus, there is a Holiday Inn just behind the campus
            (the Holiday Inn Regent’s Park, as it is known, although Regent’s
            Park is a good ten minutes away!). You can find out more about the
            hotel on TripAdvisor (we do not endorse TripAdvisor – it just has
            some nice pictures of the hotel. Other hotel booking sites are
            available!).
          </p>
          <p>
            There are also many small hotels in the streets around the Cavendish
            campus – which you can find on any hotel booking website by entering
            the postcode of the campus (W1W6UW). Airbnb is also a possibility.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Accommodation
