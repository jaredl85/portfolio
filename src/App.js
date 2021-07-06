import './App.scss';
import NavBar from './components/navbar/NavBar.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Contact from './components/contact/Contact.js';
import Work from './components/work/Work.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="sections">
          <Home />
          <About />
          <Work />
          <Contact />
      </div>
    </div>
  );
}

export default App;
