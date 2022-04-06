import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useInView } from "react-intersection-observer";

function App() {
  return (
    <div>
      <Navbar />
      <Home useInView={useInView} />
      <About useInView={useInView} />
      <Skills useInView={useInView} />
      <Projects useInView={useInView} />
      <Contact useInView={useInView} />
    </div>
  );
}

export default App;
