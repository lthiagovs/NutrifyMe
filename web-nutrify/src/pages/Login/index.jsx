// src/pages/LoginPage.jsx
import "./style.css"
import React from "react";

const LoginPage = () => {
  return (
    <div class="login-container">
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
