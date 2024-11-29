import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      {/* AppBar (Navbar) */}
      <AppBar position="sticky" sx={{ backgroundColor: '#388e3c' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            NutrifyMe
          </Typography>
          <div>
            <Button sx={{ color: 'white' }} startIcon={<HomeIcon />}>
              Início
            </Button>
            <Button sx={{ color: 'white' }} startIcon={<PersonIcon />}>
              Perfil
            </Button>
            <Button sx={{ color: 'white' }} startIcon={<ExitToAppIcon />}>
              Sair
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Conteúdo Principal */}
      <main style={{ flex: 1}}>
        {children}
      </main>

      {/* Rodapé */}
      <footer style={{ backgroundColor: '#388e3c', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 NutrifyMe | Feito com React</p>
      </footer>
    </div>
  );
};

export default Layout;
