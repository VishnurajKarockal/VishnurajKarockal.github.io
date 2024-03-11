import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import About from "../src/Components/About";
import Skills from "../src/Components/Skills";
import Projects from "../src/Components/Projects";
import Statistics from "../src/Components/Statistics";
import Contact from "../src/Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Statistics id="statistics" />
      <Contact id="contact" />
    </>
  );
}

export default App;
