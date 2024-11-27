// ProfilePage.jsx
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      {/* Perfil do Usuário */}
      <section className="profile-header">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Foto de Perfil" />
        </div>
        <div className="profile-info">
          <h1>João da Silva</h1>
          <p className="email">joao.silva@email.com</p>
        </div>
      </section>

      {/* Hub de Funcionalidades */}
      <section className="feature-hub">
        <h2>Funcionalidades</h2>
        <div className="feature-buttons">
          <div className="feature-button">
            <img src="https://via.placeholder.com/80" alt="Feature 1" />
            <p>Funcionalidade 1</p>
          </div>
          <div className="feature-button">
            <img src="https://via.placeholder.com/80" alt="Feature 2" />
            <p>Funcionalidade 2</p>
          </div>
          <div className="feature-button">
            <img src="https://via.placeholder.com/80" alt="Feature 3" />
            <p>Funcionalidade 3</p>
          </div>
          <div className="feature-button">
            <img src="https://via.placeholder.com/80" alt="Feature 4" />
            <p>Funcionalidade 4</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
