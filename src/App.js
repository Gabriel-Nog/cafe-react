import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './components/Form/Form';
import DisplayData from './components/DisplayData/DisplayData';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    table: '',
    saleOrder: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formValues = {
      nome: data.get('nome'),
      table: data.get('table'),
      saleOrder: data.get('saleOrder'),
    };
    setFormData(formValues);
  };

  return (
    <div className="App">
      <div className="container">
        <Form onSubmit={handleSubmit} />
        <DisplayData formData={formData} />
      </div>
    </div>
  );
}

export default App;
