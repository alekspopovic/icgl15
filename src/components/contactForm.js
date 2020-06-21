import React from "react"
import contactListStyles from "../styles/contactList.module.css"
import "font-awesome/css/font-awesome.min.css"

const ContactForm = () => {
  return (
    <div className={contactListStyles.contact}>
      <h2>
        You have a question, suggestion or a business offer? Maybe you simply
        want to say 'hi'? Shoot me a message!
      </h2>
      <form target="_blank" action="FORM ACTION URL HERE" method="POST">
        <input
          type="text"
          name="name"
          className={contactListStyles.formControl}
          placeholder="name"
          required
        />
        <input
          type="email"
          name="email"
          className={contactListStyles.formControl}
          placeholder="address"
          required
        />
        <textarea
          placeholder="message"
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
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
