import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Listagem.css';

function Listagem() {
  const [carros, setCarros] = useState([]);

  const fetchCarros = async () => {
    try {
      const res = await axios.get('http://localhost:3001/carros');
      setCarros(res.data);
    } catch (err) {
      alert("Erro ao carregar lista");
    }
  };

  useEffect(() => { fetchCarros(); }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este veículo?")) {
      try {
        await axios.delete(`http://localhost:3001/carros/${id}`);
        fetchCarros();
      } catch (err) {
        alert("Erro ao excluir o veículo.");
      }
    }
  };

  return (
    <div className="card">
      <h3>Lista de Veículos</h3>
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {carros.map(c => (
            <tr key={c.id}>
              <td>{c.modelo}</td>
              <td>{c.marca}</td>
              <td className="actions-cell">
                <Link to={`/detalhes/${c.id}`} className="btn-view" style={{textDecoration: 'none'}}>Ver</Link>
                <Link to={`/editar/${c.id}`} className="btn-edit" style={{textDecoration: 'none'}}>Editar</Link>
                <button onClick={() => handleDelete(c.id)} className="btn-delete">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/novo" className="btn-save" style={{display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '20px'}}>
        + Cadastrar Novo Veículo
      </Link>
    </div>
  );
}

export default Listagem;