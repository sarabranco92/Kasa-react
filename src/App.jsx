import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/home';
import FicheLogement from './pages/fiche_log';
import PageError from './pages/page_error';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/fiche_log" element={<FicheLogement />} />
        <Route path="/" element={<Home />} />
        <Route path="/page_error" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;