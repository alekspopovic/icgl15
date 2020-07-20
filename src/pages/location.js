import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"
import contactListStyles from "../styles/contactList.module.css"
import "font-awesome/css/font-awesome.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

class Location extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO title="Location" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h2>Info</h2>
          <p>
            <FontAwesomeIcon
              className={contactListStyles.contactIcon}
              icon={faMapMarkerAlt}
              title="address"
            />
            Studentski Trg 3, 11000 Beograd (Студентски трг 3, 11000 Београд)
          </p>
          <p>
            <FontAwesomeIcon
              className={contactListStyles.contactIcon}
              icon={faPhoneAlt}
              title="phone"
            />
            +381-11-202-16-09
          </p>
          <p>
            <FontAwesomeIcon
              className={contactListStyles.contactIcon}
              icon={faEnvelope}
              title="email"
            />
            <a href="mailto:icgl15@fil.bg.ac.rs">icgl15@fil.bg.ac.rs</a>
          </p>
          <h2>Map</h2>
          <div className={contentStyles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11320.544733006745!2d20.4566704!3d44.8187902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4407f947abd66d1!2sUniversity%20of%20Belgrade%20Faculty%20of%20Philology!5e0!3m2!1sen!2srs!4v1595287882936!5m2!1sen!2srs"
              frameBorder="0"
              height="100%"
              width="100%"
              allowFullScreen=""
              aria-hidden="false"
              title="faculty location"
            ></iframe>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Location
