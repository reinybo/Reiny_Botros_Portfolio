import './App.css';
import './public/skeleton.css'
import './public/normalize.css'
import './public/style.css'
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
