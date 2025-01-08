import React from "react";
import styles from "./AboutPage.module.css";
import profile from "../../../assets/about/profile.png";

export const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h1>I'm Amber.</h1>

      <div className={styles.aboutContent}>
        <div>
          <img src={profile} />
        </div>
        <div className={styles.aboutDescription}>
          <p className={styles.intro}>
            I'm an aspiring developer from Perth, Australia.
          </p>
          <p>
            I graduated with an Honours degree in Chemistry and currently work
            in the chemical management field. My professional journey took an
            exciting turn when I joined She Codes Cohort 24/25, where I
            discovered a passion for coding. What started as a curiosity quickly
            became a driving force in my career aspirations.
          </p>
          <p>
            I love the creative process behind coding, from designing intuitive
            solutions to the thrill of debugging and optimizing. Problem solving
            is my true motivator—whether it’s tackling complex challenges or
            building tools that make life a little easier, I thrive on finding
            impactful solutions.
          </p>
          <p>
            Outside of work, you’ll often find me tackling bouldering walls or
            exploring hiking trails—unless it’s summer, I'm not a very big fan
            of the heat! I’m always eager for new challenges and am currently
            seeking opportunities to grow as a developer. Let’s connect and
            create something impactful together!
          </p>
        </div>
      </div>
    </div>
  );
};
