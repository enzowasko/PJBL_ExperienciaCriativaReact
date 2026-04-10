import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listagem from './pages/Listagem';
import Formulario from './pages/Formulario';
import Detalhes from './pages/Detalhes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Garagem Enzo</h1>
        
        <Routes>
          <Route path="/" element={<Listagem />} />
          <Route path="/novo" element={<Formulario />} />
          <Route path="/editar/:id" element={<Formulario />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>

        <footer>
          <p><strong>Desenvolvedor: Enzo Wasko Amorim</strong></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;