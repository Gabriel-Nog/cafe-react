import React from 'react';
import './DisplayData.css';

const DisplayData = ({ formData }) => {
  return (
    <div className="display-data">
      {/* <h2>Dados do Formulário</h2> */}
      <p>
        <strong>Nome:</strong> <br />
        {formData.nome}
      </p>
      <p>
        <strong>Mesa:</strong> <br />
        {formData.table}
      </p>
      <p>
        <strong>Pedido:</strong> <br />
        {formData.saleOrder.toString()}
        <strong>Valor: </strong> <br />
        R$ XX,XX
      </p>
      <button type="submit">Finalizar</button>
    </div>
  );
};

export default DisplayData;
