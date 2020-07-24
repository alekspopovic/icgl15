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

    return (
      <div className={contactListStyles.contactContent}>
        <div
          className={`${contactListStyles.contactItem} ${contactListStyles.contactInfo}`}
        >
          <h2>{this.getContactItemLabel("info")}</h2>
          <div className={contactListStyles.addressContainer}>
            <FontAwesomeIcon
              className={contactListStyles.contactIcon}
              icon={faMapMarkerAlt}
              title="address"
            />
            <ul className={contactListStyles.address}>
              <li>University of Belgrade</li>
              <li>Faculty of Philology</li>
              <li>Department of Modern</li>
              <li>Greek Studies</li>
              <li>Studentski trg 3, 11000 Belgrade</li>
            </ul>
          </div>
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
              icon={faPhoneAlt}
              title="phone"
            />
            +381-11-202-16-06
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
          <form
            target="_blank"
            action="https://formsubmit.co/8283715e05ca45c0023e1973e99ab73e"
            method="POST"
          >
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
              value="https://aleksandarpopovic.com/" //todo ubaciti link sajta kada bude live
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="New message submitted on ICGL15 contact form"
            ></input>
            <input type="hidden" name="_replyto"></input>
            <div>
              <button
                // onClick={displayMessage}
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
