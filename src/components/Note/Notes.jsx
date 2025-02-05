import React from "react";
import image from "../../../assets/under-construction.jpg";
import styles from "./Notes.module.css";

const Notes = () => {
  return (
    <div className={styles.NotePage}>
      <h1>Notes Section</h1>
      <p>
        This Page is under development. Its aim is to contain useful programming
        concept summaries.
      </p>
      <img src={image} alt="Under Construction Image in Yellow and Black" />
    </div>
  );
};

export default Notes;
