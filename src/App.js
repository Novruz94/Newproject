/* eslint-disable no-unused-vars */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Team from './Pages/Team'
import Blog from './Pages/Blog'
import Blogone from './Pages/Blogone'
import Blogtwo from './Pages/Blogtwo'
import Blogthree from './Pages/Blogthree'
import Contact from './Pages/Contact'
import Navbar1 from './Components/Navbar1';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar1/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about"  element={<About/>} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="team" element={<Team />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blogone" element={<Blogone />} />
      <Route path="blogtwo" element={<Blogtwo />} />
      <Route path="blogthree" element={<Blogthree />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
      
    
  );
}

export default App;
