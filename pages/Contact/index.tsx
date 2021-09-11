import TopBar from "components/TopBar";
import emailjs from "emailjs-com";
import { useState } from "react";
import React from "react";
import styles from "./styles.module.scss";

const NOTSENT = 0;
const ERROR = 1;
const SENT = 2;

const Contact = () => {
  const [sentSuccessfull, setSentSuccessfull] = useState(NOTSENT);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sagbol9",
        "template_0ozhluu",
        e.target,
        "user_8E4OOVaxhNsfva3jaSB2P"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSentSuccessfull(SENT);
          e.target.reset();
        },
        (error) => {
          setSentSuccessfull(ERROR);
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <TopBar active="Contact" />
      <div className={styles.container}>
        <form className={styles.contactForm} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <br />
            <input type="text" name="subject" id="subject" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" id="message" required />
          </div>
          {sentSuccessfull === ERROR && (
            <span className={styles.red}>Could not send email!</span>
          )}
          {sentSuccessfull === SENT && (
            <span className={styles.green}>Message successfully sent!</span>
          )}

          <input className={styles.button} type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
