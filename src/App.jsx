import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/home';
import FicheLogement from './pages/logement/fiche_log';
import PageError from './pages/page_error';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/fiche_log/:id" element={<FicheLogement />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
