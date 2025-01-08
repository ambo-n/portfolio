import React from "react";
import styles from "./Projects.module.css";
import crowdfunding from "../../../assets/projects/crowdfunding.jpg";

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectDescription}>
          <h1>Crowdfunding</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
        <div className={styles.demo}>
          <div className={styles.videoContainer}>
            <img src={crowdfunding} alt="placeholder" />
          </div>
          <div>
            <a href="#">Source Code</a>
            <a href="#">Deployed Site</a>
          </div>
        </div>
      </div>
    </section>
  );
};
