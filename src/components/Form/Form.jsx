import React from 'react';
import './Form.css';
import ProductsData from '../../data/products.json';

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />
      <label htmlFor="table">Mesa</label>
      <input type="text" id="table" name="table" />
      <label htmlFor="saleOrder">Pedido</label>
      <select id="saleOrder" name="saleOrder">
        {ProductsData.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name} - R$ {product.price}
          </option>
        ))}
      </select>
      <button type="submit">Finalizar</button>
    </form>
  );
};

export default Form;
