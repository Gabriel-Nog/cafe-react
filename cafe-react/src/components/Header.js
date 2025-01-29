import React from "react";
import "./Header.css"; // Importando o arquivo de estilos

const Header = () => {
  return (
    <header className="header">
      <h1>Meu Projeto React</h1>
      <nav>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
