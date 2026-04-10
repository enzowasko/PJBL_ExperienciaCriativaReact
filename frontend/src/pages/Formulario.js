import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Formulario.css';

function Formulario() {
    const [carro, setCarro] = useState({ modelo: '', marca: '', ano: '', cor: '', preco: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get('http://localhost:3001/carros').then(res => {
                const edit = res.data.find(c => c.id === parseInt(id));
                if (edit) setCarro(edit);
            });
        }
    }, [id]);

    const salvar = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await axios.put(`http://localhost:3001/carros/${id}`, carro);
            } else {
                await axios.post('http://localhost:3001/carros', carro);
            }
            navigate('/');
        } catch (err) { 
            alert("Erro ao salvar. Verifique se o servidor está rodando."); 
        }
    };

    return (
        <div className="form-card">
            <h3>{id ? "Editar Veículo" : "Novo Cadastro"}</h3>
            <form onSubmit={salvar}>
                <div className="input-group">
                    <label>Modelo</label>
                    <input 
                        value={carro.modelo} 
                        onChange={e => setCarro({...carro, modelo: e.target.value})} 
                        required 
                        placeholder="Ex: Civic"
                    />
                </div>
                <div className="input-group">
                    <label>Marca</label>
                    <input 
                        value={carro.marca} 
                        onChange={e => setCarro({...carro, marca: e.target.value})} 
                        required 
                        placeholder="Ex: Honda"
                    />
                </div>
                <div className="input-group">
                    <label>Ano</label>
                    <input 
                        type="number"
                        value={carro.ano} 
                        onChange={e => setCarro({...carro, ano: e.target.value})} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Cor</label>
                    <input 
                        value={carro.cor} 
                        onChange={e => setCarro({...carro, cor: e.target.value})} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Preço (R$)</label>
                    <input 
                        type="number"
                        step="0.01"
                        value={carro.preco} 
                        onChange={e => setCarro({...carro, preco: e.target.value})} 
                        required 
                    />
                </div>
                <button type="submit" className="btn-submit">Confirmar Dados</button>
                <span className="btn-cancel" onClick={() => navigate('/')}>Cancelar e Voltar</span>
            </form>
        </div>
    );
}
export default Formulario;