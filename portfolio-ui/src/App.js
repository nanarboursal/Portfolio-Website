import BackgroundParticles from "./Components/BackgroundParticles/BackgroundParticles";
import NavBar from "./Components/NavBar/NavBar";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";

const App = () => {
  return (
    <div>
      <NavBar />
      <BackgroundParticles />
      <div className="portfolio-information">
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default App;
