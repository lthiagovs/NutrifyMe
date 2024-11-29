import React from 'react';
import "./style.css"

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <section className="profile-content">
        <div className="user-info">
          <img src="https://via.placeholder.com/100" alt="Foto do Usuário" className="user-photo" />
          <div className="user-details">
            <h2>Nome do Usuário</h2>
            <p>Email: usuario@exemplo.com</p>
            <p>Localização: Cidade, País</p>
            <button className="btn-edit">Editar Perfil</button>
          </div>
        </div>

        <div className="hub">
          <h3>Minhas Funcionalidades</h3>
          <div className="hub-buttons">
            <button className="hub-btn">
              <img src="https://via.placeholder.com/50" alt="Funcionalidade 1" />
              <span>Funcionalidade 1</span>
            </button>
            <button className="hub-btn">
              <img src="https://via.placeholder.com/50" alt="Funcionalidade 2" />
              <span>Funcionalidade 2</span>
            </button>
            <button className="hub-btn">
              <img src="https://via.placeholder.com/50" alt="Funcionalidade 3" />
              <span>Funcionalidade 3</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
