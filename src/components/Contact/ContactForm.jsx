import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_uak6tea", "contact_form", form.current, {
        publicKey: "1O-sdK8rBqQe23MQl",
      })
      .then(
        () => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          alert("Email Sent!");
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.ContactForm}>
      <form ref={form} onSubmit={sendEmail}>
        <h1> Contact Me</h1>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">
          Send me a message
        </button>
      </form>
    </div>
  );
};
