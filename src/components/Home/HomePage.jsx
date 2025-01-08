import React from "react";
import { ParticleComponent } from "./ParticleComponent";
import styles from "./HomePage.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import arrow from "../../../assets/scroll_down.png";

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <h1>Hi, I'm Amber.</h1>
      <p className={styles.description}>
        An early-career developer passionate about creating impactful solutions.
      </p>
      <div>
        <p>View my recent projects</p>
        <img src={arrow} className={styles.arrow} />
      </div>

      <ParticleComponent />
    </div>
  );
};
