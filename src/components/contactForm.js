import React from "react"
import contactListStyles from "../styles/contactList.module.css"
import "font-awesome/css/font-awesome.min.css"
import labels from "../data/contactLabels"

class ContactForm extends React.Component {
  getContactItemLabel(item) {
    return labels[this.language][item]
  }

  render() {
    const { language } = this.props

    this.language = language

    return (
      <div className={contactListStyles.contact}>
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
            <button type="submit" className={contactListStyles.formControl}>
              {this.getContactItemLabel("submitLabel")}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm
