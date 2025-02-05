import React from "react";
import { allProjects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  return (
    <section className={styles.projectPage}>
      <div className={styles.title}>
        <div className={styles.line}></div>
        <h1> Some of my recent work</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.projectList}>
        {allProjects.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </section>
  );
};

export default ProjectPage;
