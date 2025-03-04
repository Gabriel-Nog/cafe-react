import React from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../../data/products.json';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      {ProductsData.map((product, index) => {
        return (
          <div className="card" key={index}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="card-info-price">
              <p>R$ {product.price},00</p>
              <button type="button">
                <Link to={`/sale-order/${product.id}`}>Comprar</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
