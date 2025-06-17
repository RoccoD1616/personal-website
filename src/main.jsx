import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/portfolio.jsx';
import Activities from './components/Activities.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Activities/>
    <Projects/>
    <Contact/>
  </StrictMode>,
)
