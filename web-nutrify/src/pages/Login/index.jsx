// src/pages/LoginPage.jsx
import "./style.css"
import React from "react";

const LoginPage = () => {
  return (
    <div class="login-container">
      <header class="header">
        <nav class="navbar">
          <ul>
            <li><a href="#" class="nav-link">Home</a></li>
            <li><a href="#" class="nav-link">Sobre</a></li>
            <li><a href="#" class="nav-link">Contato</a></li>
          </ul>
        </nav>
        <h1>Bem-vindo</h1>
      </header>
      <main class="main">
        <form class="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Usuário" class="input" />
          <input type="password" placeholder="Senha" class="input" />
          <button type="submit" class="btn">Entrar</button>
        </form>
      </main>
    </div>

  );
};

export default LoginPage;
