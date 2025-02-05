import furfuture from "../../assets/projects/furfuturefundin.png";
import weather from "../../assets/projects/weather.jpeg";
import crowdfunding from "../../assets/projects/crowdfunding.png";

export const allProjects = [
  {
    title: "Weather App",
    image: weather,
    description: "This is a project made to analyse the weather data.",
    languages: ["Python"],
    github: "https://github.com/ambo-n/weather-project",
    site: "",
  },
  {
    title: "Sprout (Front End)",
    image: crowdfunding,
    description: "This is crowding funding project nice nice nice",
    languages: ["React", "JavaScript"],
    github: "https://github.com/ambo-n/sprout",
    site: "https://ambon-sprout.netlify.app/",
  },
  {
    title: "Sprout (Back End)",
    image: crowdfunding,
    description: "TThis is crowding funding project nice nice nice",
    languages: ["Python", "Django"],
    github: "https://github.com/ambo-n/sprout",
    site: "https://ambon-sprout.netlify.app/",
  },
  {
    title: "Furfuture Funding",
    image: furfuture,
    description: "This is crowding funding project nice nice nice",
    languages: ["Python", "Django", "React", "JavaScript"],
    github: "https://github.com/SheCodesAus/ramcats_frontend",
    site: "https://furfuturefunding.netlify.app/",
  },
];
