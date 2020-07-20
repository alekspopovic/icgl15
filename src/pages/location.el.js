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
      <Layout language="el" location={this.props.location}>
        <SEO title="Location" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h2>Επικοινωνία</h2>
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
          <h2>Χάρτης</h2>
          <div className={contentStyles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.135997504334!2d20.454481715804377!3d44.81879398429539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a654cb79aaaab%3A0x4407f947abd66d1!2sUniversity%20of%20Belgrade%20Faculty%20of%20Philology!5e0!3m2!1sel!2srs!4v1595288289675!5m2!1sel!2srs"
              height="100%"
              width="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              title="Χάρτης"
            ></iframe>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Location
