import React from "react";
import { allProjects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  return (
    <div>
      {allProjects.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
};

export default ProjectPage;
