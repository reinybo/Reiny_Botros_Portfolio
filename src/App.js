import './App.css';
import './public/skeleton.css'
import './public/normalize.css'
import './public/style.css'
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
