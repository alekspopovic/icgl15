import React from "react"
import contactListStyles from "../styles/contactList.module.css"
import "font-awesome/css/font-awesome.min.css"
import labels from "../data/contactLabels"
import buttonStyles from "../styles/button.module.css"

import "font-awesome/css/font-awesome.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

class ContactForm extends React.Component {
  getContactItemLabel(item) {
    return labels[this.language][item]
  }

  render() {
    const { language } = this.props

    this.language = language

    const displayMessage = e => {
      e.preventDefault()
      alert("Not implemented yet.")
    }

    return (
      <div className={contactListStyles.contactContent}>
        <div
          className={`${contactListStyles.contactItem} ${contactListStyles.contactInfo}`}
        >
          <h2>Contact Info</h2>
          <p>
            <FontAwesomeIcon
              className={contactListStyles.contactIcon}
              icon={faMapMarkerAlt}
              title="address"
            />{" "}
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
        </div>
        <div className={contactListStyles.contactItem}>
          <h2>{this.getContactItemLabel("heading")}</h2>
          <form target="_blank" action="FORM ACTION URL HERE" method="POST">
            <input
              type="text"
              name="name"
              className={contactListStyles.formControl}
              placeholder={this.getContactItemLabel("namePlaceholder")}
              required
            />
            <input
              type="email"
              name="email"
              className={contactListStyles.formControl}
              placeholder={this.getContactItemLabel("emailPlaceholder")}
              required
            />
            <textarea
              placeholder={this.getContactItemLabel("messagePlaceholder")}
              className={contactListStyles.formControl}
              name="message"
              rows="5"
              required
            ></textarea>
            <input
              type="hidden"
              name="_next"
              value="SITE HOME PAGE URL HERE"
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="New message submitted on ICGL15 contact form"
            ></input>
            <input type="hidden" name="_replyto"></input>
            <div>
              <button
                onClick={displayMessage}
                type="submit"
                className={buttonStyles.button}
              >
                {this.getContactItemLabel("submitLabel")}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm
