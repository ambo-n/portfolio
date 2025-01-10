import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { HomePage } from "./components/Home/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import ProjectPage from "./components/Projects/ProjectPage";
// import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <HomePage />
      <ProjectPage />
    </div>
  );
}

export default App;
