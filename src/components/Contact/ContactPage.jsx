import React from "react";
import { ContactForm } from "./ContactForm";
import { FaGithubAlt } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.ContactPage}>
      <h1 className={styles.heading}>
        Thanks for taking the time to reach out. How can I help you today?
      </h1>
      <ContactForm />
      <h2>Let's connect! Here are my socials:</h2>
      <div className={styles.socials}>
        <a href="https://github.com/ambo-n">
          <FaGithubAlt size={35} />
        </a>
        <a href="https://www.linkedin.com/in/amber-nguyen-231936176/">
          <SlSocialLinkedin size={35} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
