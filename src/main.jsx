import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <About/>
  </StrictMode>,
)
