import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    // Atualiza o token a cada recarregamento da página
    setToken(localStorage.getItem("jwt"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt"); // Remove o token
    setToken(null); // Atualiza o estado local
    navigate("/"); // Redireciona para a página inicial
  };

  const handleProfile = () => {
    navigate("/Profile"); // Redireciona para o perfil
  };

  const handleHome = () => {
    navigate("/"); // Redireciona para a home
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar (Navbar) */}
      <AppBar position="sticky" sx={{ backgroundColor: '#388e3c' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            NutrifyMe
          </Typography>
          <div>
            <Button sx={{ color: 'white' }} startIcon={<HomeIcon />} onClick={handleHome}>
              Início
            </Button>
            {token && (
              <>
                <Button sx={{ color: 'white' }} startIcon={<PersonIcon />} onClick={handleProfile}>
                  Perfil
                </Button>
                <Button sx={{ color: 'white' }} startIcon={<ExitToAppIcon />} onClick={handleLogout}>
                  Sair
                </Button>
              </>
            )}
            {!token && (
              <Button sx={{ color: 'white' }} onClick={() => navigate("/login")}>
                Entrar
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* Conteúdo Principal */}
      <main style={{ flex: 1, marginTop: '20px', marginBottom: '20px' }}>
        {children}
      </main>

      {/* Rodapé */}
      <footer style={{ backgroundColor: '#388e3c', color: 'white', textAlign: 'center', padding: '10px', marginTop: 'auto' }}>
        <p>&copy; 2024 NutrifyMe | Feito com React</p>
      </footer>
    </div>
  );
};

export default Layout;
