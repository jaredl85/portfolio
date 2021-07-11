import './App.scss';
import NavBar from './components/navbar/NavBar.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import SocialIcons from './components/social-icons/SocialIcons.js';
import Contact from './components/contact/Contact.js';
import Work from './components/work/Work.js';
import Footer from './components/footer/Footer.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="sections">
          <Home />
          <About />
          <SocialIcons />
          <Work />
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
