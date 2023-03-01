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
import Dropdown from './Pages/Dropdown'
import Action from './Pages/Action'
import ActionAnother from './Pages/ActionAnother'
import Something from './Pages/Something'
import Contact from './Pages/Contact'
import Navbar1 from './Components/Navbar1';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar1/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="haqqımızda"  element={<About/>} />
      <Route path="xidmətlər" element={<Services />} />
      <Route path="portfel" element={<Portfolio />} />
      <Route path="komanda" element={<Team />} />
      <Route path="blog" element={<Blog />} />
      <Route path="açılanlar" element={<Dropdown />} />
      <Route path="hərəkət/3.1" element={<Action />} />
      <Route path="hərəkət/3.2" element={<ActionAnother />} />
      <Route path="hərəkət/3.3" element={<Something />} />
      <Route path="əlaqə" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
      
    
  );
}

export default App;
