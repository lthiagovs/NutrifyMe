import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./style.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: { color: "#121212" },
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.7, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 2, direction: "none" },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bem-vindo, ${formData.email}!`);
  };

  return (
    <div className="container">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <header className="header">Meu Projeto</header>
      <main className="main">
        <div className="login-form">
          <h2 className="title">Entrar</h2>
          <form onSubmit={handleSubmit} className="form">
            <label className="label">
              E-mail:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </label>
            <label className="label">
              Senha:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input"
              />
            </label>
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </main>
      <footer className="footer">© 2024 Meu Projeto. Todos os direitos reservados.</footer>
    </div>
  );
};

export default LoginPage;
