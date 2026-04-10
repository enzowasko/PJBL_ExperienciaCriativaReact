import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Detalhes.css';

function Detalhes() {
  const { id } = useParams();
  const [carro, setCarro] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/carros`)
      .then(res => {
        const encontrado = res.data.find(c => c.id === parseInt(id));
        setCarro(encontrado);
      })
      .catch(() => alert("Erro ao carregar detalhes"));
  }, [id]);

  if (!carro) return <div className="container"><p>Carregando dados do veículo...</p></div>;

  return (
    <div className="details-container">
      <h3>Detalhes do {carro.modelo}</h3>
      <div className="detail-item">
        <strong>Marca:</strong> <span>{carro.marca}</span>
      </div>
      <div className="detail-item">
        <strong>Ano:</strong> <span>{carro.ano}</span>
      </div>
      <div className="detail-item">
        <strong>Cor:</strong> <span>{carro.cor}</span>
      </div>
      
      <div className="price-tag">
        R$ {parseFloat(carro.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </div>

      <Link to="/" className="btn-cancel" style={{textDecoration: 'none', display: 'block', marginTop: '20px'}}>
        Voltar para a Lista
      </Link>
    </div>
  );
}

export default Detalhes;