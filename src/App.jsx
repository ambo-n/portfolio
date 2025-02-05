import styles from "./App.module.css";
import { HomePage } from "./components/Home/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import ProjectPage from "./components/Projects/ProjectPage";
import { ContactForm } from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";
// import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <HomePage />
      <ProjectPage />
      <ContactForm />
    </div>
  );
}

export default App;
