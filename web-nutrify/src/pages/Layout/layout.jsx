import React from 'react';
import "./style.css";

const Layout = ({ children }) => {
    return (
        <div className="layout-container">

        <header className="header">
          <div className="logo">MinhaApp</div>

          <nav className="nav">
            <button className="nav-btn">Início</button>
            <button className="nav-btn">Perfil</button>
            <button className="nav-btn">Sair</button>
          </nav>
          
        </header>

        <main className="main-content">{children}</main>

        <footer className="footer">
          <p>&copy; 2024 Minha Aplicação | Feito com Nest.JS</p>
        </footer>

      </div>
    );
  };

export default Layout;