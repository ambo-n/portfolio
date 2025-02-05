import furfuture from "../../assets/projects/furfuturefundin.png";
import weather from "../../assets/projects/weather.jpeg";
import crowdfunding from "../../assets/projects/crowdfunding.png";

export const allProjects = [
  {
    title: "Weather App",
    image: weather,
    description:
      "Weather App is a python project that defines a set of functions to efficiently load, process, and generate summaries of weather data for analysis and visualization.",
    languages: ["Python"],
    github: "https://github.com/ambo-n/weather-project",
    site: "",
  },
  {
    title: "Sprout (Front End)",
    image: crowdfunding,
    description:
      "Sprout is a full-stack crowdfunding platform built with a Python/Django backend and a JavaScript/React frontend. Explore the frontend codes and its deployed site here.",
    languages: ["React", "JavaScript"],
    github: "https://github.com/ambo-n/sprout",
    site: "https://ambon-sprout.netlify.app/",
  },
  {
    title: "Sprout (Back End)",
    image: crowdfunding,
    description:
      "Sprout is a full-stack crowdfunding platform built with a Python/Django backend and a JavaScript/React frontend. Explore the backend codes and its deployed site here.",
    languages: ["Python", "Django"],
    github: "https://github.com/ambo-n/crowdfunding_back_end",
    site: "https://sprout-ambon-63b8f1ecb262.herokuapp.com/projects/",
  },
  {
    title: "Furfuture Funding (Frontend)",
    image: furfuture,
    description:
      "FurFuture funding is a scholarship directory which connects diverse individuals with tailored scholarships. Explore the frontend code and deployed site here.",
    languages: ["React", "JavaScript"],
    github: "https://github.com/SheCodesAus/ramcats_frontend",
    site: "https://furfuturefunding.netlify.app/",
  },
  {
    title: "Furfuture Funding (Backend)",
    image: furfuture,
    description:
      "FurFuture funding is a scholarship directory which connects diverse individuals with tailored scholarships. Explore the backend code and deployed site here.",
    languages: ["Python", "Django"],
    github: "https://github.com/SheCodesAus/ramcats_frontend",
    site: "https://furfuture-e6caaf72373d.herokuapp.com/opportunities/",
  },
];
