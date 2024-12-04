import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Ícone antes do nome
import { useNavigate } from 'react-router-dom';

// Ícones das redes sociais
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt"); 
    setToken(null); 
    navigate("/"); 
  };

  const handleProfile = () => {
    navigate("/Profile");
  };

  const handleHome = () => {
    navigate("/"); 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar (Navbar) */}
      <AppBar position="sticky" sx={{ backgroundColor: '#388e3c', borderRadius: '0 0 10px 10px', boxShadow: 3 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Ícone antes do nome */}
            <FitnessCenterIcon sx={{ color: 'white', marginRight: '10px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px' }}>
              NutrifyMe
            </Typography>
          </Box>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              sx={{
                color: 'white', 
                '&:hover': { backgroundColor: '#4caf50', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' },
                marginRight: '15px',
                borderRadius: '8px',
                padding: '6px 12px',
              }}
              startIcon={<HomeIcon />}
              onClick={handleHome}
            >
              Início
            </Button>

            {token ? (
              <>
                <Button
                  sx={{
                    color: 'white', 
                    '&:hover': { backgroundColor: '#4caf50', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' },
                    marginRight: '15px',
                    borderRadius: '8px',
                    padding: '6px 12px',
                  }}
                  startIcon={<PersonIcon />}
                  onClick={handleProfile}
                >
                  Perfil
                </Button>
                <Button
                  sx={{
                    color: 'white', 
                    '&:hover': { backgroundColor: '#e53935', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' },
                    borderRadius: '8px',
                    padding: '6px 12px',
                  }}
                  startIcon={<ExitToAppIcon />}
                  onClick={handleLogout}
                >
                  Sair
                </Button>
              </>
            ) : (
              <Button
                sx={{
                  color: 'white', 
                  '&:hover': { backgroundColor: '#4caf50', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' },
                  borderRadius: '8px',
                  padding: '6px 12px',
                }}
                onClick={() => navigate("/login")}
              >
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
      <footer style={{ backgroundColor: '#388e3c', color: 'white', textAlign: 'center', padding: '20px', marginTop: 'auto', borderTop: '4px solid #fff', borderRadius: '10px' }}>
        <p style={{ margin: 0 }}>© 2024 NutrifyMe | Feito com React</p>

        {/* Links para redes sociais */}
        <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
          <IconButton sx={{ color: 'white', margin: '0 10px', '&:hover': { color: '#3b5998' } }} aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: 'white', margin: '0 10px', '&:hover': { color: '#e4405f' } }} aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: 'white', margin: '0 10px', '&:hover': { color: '#1da1f2' } }} aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: 'white', margin: '0 10px', '&:hover': { color: '#0077b5' } }} aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </footer>
    </div>
  );
};

export default Layout;
