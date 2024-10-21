import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

const App = () => {
  return ( 
    <BrowserRouter>
    <Navbar />
    <Home />
    <About />
    <Skills/>
    <Projects />
    <Contact />
    </BrowserRouter>
   );
}
 
export default App;
