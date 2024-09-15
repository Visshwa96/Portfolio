
import './App.css';
import Header from "./components/Header.js"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Resume from "./components/Resume.js"
import Contact from "./components/Contact.js"
import Footer from "./components/Footer.js"
function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <About/>
     <Projects/>
     <Resume/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
