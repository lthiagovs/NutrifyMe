import "./style.css"
import React from "react";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/Profile'); 
  };

  return (
    <div class="login-container">
        <form class="login-form" onSubmit={handleLogin}>

          <h2>Login</h2>
          <input type="text" placeholder="Usuário" class="input" />
          <input type="password" placeholder="Senha" class="input" />
          <button type="submit" class="btn">Entrar</button>

        </form>
    </div>

  );
};

export default LoginPage;
