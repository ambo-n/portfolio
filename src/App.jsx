import styles from "./App.module.css";
import { HomePage } from "./components/Home/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import ProjectPage from "./components/Projects/ProjectPage";
import ContactPage from "./components/Contact/ContactPage";
// import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <HomePage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}

export default App;
