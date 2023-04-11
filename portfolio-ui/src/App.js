import BackgroundParticles from "./Components/BackgroundParticles/BackgroundParticles";
import TopHeader from "./Components/TopHeader/TopHeader";
import NavBar from "./Components/NavBar/NavBar";
import Education from "./Components/Education/Education";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <BackgroundParticles />
      <div className="portfolio-information">
        <Education />
        <Education />
      </div>
    </div>
  );
};

export default App;
