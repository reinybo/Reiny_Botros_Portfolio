import './App.css';
import './public/skeleton.css'
import './public/normalize.css'
import './public/style.css'
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
