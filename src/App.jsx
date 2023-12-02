import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx';
import Projects from './components/pages/Projects.jsx';
import WebFont from 'webfontloader';

function App() {
  
  useEffect(() => {
    WebFont.load({
      custom: {
        families: 'tt_firs_neuelight',
        urls: ['../fonts/typetype_-_tt_firs_neue_light-webfont.woff2'],
      },
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </>
  )
}

export default App
