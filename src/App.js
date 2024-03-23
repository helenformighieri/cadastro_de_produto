// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', available: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.description && form.price && form.available) {
      setProducts([...products, form]);
      setForm({ name: '', description: '', price: '', available: '' });
    } else {
      alert('Por favor, preencha todos os campos do formulário.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nome do produto" />
        <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Descrição do produto" />
        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Valor do produto" />
        <select name="available" value={form.available} onChange={handleChange}>
          <option value="">Disponível para venda</option>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Disponível para venda</th> {/* Nova coluna */}
          </tr>
        </thead>
        <tbody>
          {products.sort((a, b) => a.price - b.price).map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.available === 'yes' ? 'Sim' : 'Não'}</td> {/* Nova célula */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
