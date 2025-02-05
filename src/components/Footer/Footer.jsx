import React from "react";
import logo from "../../../assets/about/logo-w.png";
import { FaGithubAlt } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.footer}>
      <div className={styles.contentContainer}>
        <img src={logo} alt="AN" onClick={() => navigate("/")} />
      </div>
      <div>
        <p>Tackling life, debugging code, and conquering one rock at a time.</p>
      </div>
      <div>
        <a href="https://github.com/ambo-n">
          <FaGithubAlt size={35} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/amber-nguyen-231936176/">
          <SlSocialLinkedin size={35} />
        </a>
      </div>
      <div>
        {" "}
        <a href="https://github.com/ambo-n/portfolio/blob/main/assets/about/amber_resume.pdf">
          Resume
        </a>
      </div>
      <div>
        <p>© Code by Amber 2025</p>
        <p>Made with React</p>
      </div>
    </div>
  );
};

export default Footer;
