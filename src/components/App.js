import React, { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './Accueil';
import Panier from './Panier';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Header from './Header';

function App() {
  let [panier, updatePanier] = useState([]);

  return (
    <Router>
      <Header panier={panier} updatePanier={updatePanier} />
      <Routes>
        <Route path='/' element={<Accueil panier={panier} updatePanier={updatePanier}/>}></Route>
        <Route path='/panier' element={<Panier panier={panier} updatePanier={updatePanier}/>}></Route>
        <Route path='/inscription' element={<Inscription />}></Route>
        <Route path='/connexion' element={<Connexion />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
