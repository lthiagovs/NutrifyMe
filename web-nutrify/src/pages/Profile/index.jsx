import React from 'react';
import { Avatar, Button, Box, Typography, Grid } from '@mui/material';

const ProfilePage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" padding={2}>
      <Box 
        sx={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: 3,
          maxWidth: 900,
          width: '100%',
          boxShadow: 3,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar 
              alt="Foto do Usuário" 
              src="https://via.placeholder.com/100" 
              sx={{ width: 120, height: 120, border: '3px solid #4caf50' }} // Borda verde
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h5" color="#4caf50" fontWeight="bold"> {/* Cor verde aplicada */}
              Nome do Usuário
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Email: usuario@exemplo.com
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Localização: Cidade, País
            </Typography>
            <Button 
              variant="contained" 
              color="success" // Cor verde
              sx={{ marginTop: 2 }}
            >
              Editar Perfil
            </Button>
          </Grid>
        </Grid>

        <Box textAlign="center" marginTop={5}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Minhas Funcionalidades
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button 
                variant="outlined" 
                sx={{
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '10px',
                  width: 150,
                  borderColor: '#4caf50', // Borda verde
                  '&:hover': {
                    backgroundColor: '#4caf50', // Cor de fundo verde
                    transform: 'scale(1.1)',
                    borderColor: '#388e3c', // Tom mais escuro de verde na borda ao passar o mouse
                  },
                }}
              >
                <Avatar 
                  src="https://via.placeholder.com/50" 
                  sx={{ width: 50, height: 50, marginBottom: 1 }} 
                />
                <Typography variant="body2" color="textSecondary">Funcionalidade 1</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                sx={{
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '10px',
                  width: 150,
                  borderColor: '#4caf50', // Borda verde
                  '&:hover': {
                    backgroundColor: '#4caf50', // Cor de fundo verde
                    transform: 'scale(1.1)',
                    borderColor: '#388e3c', // Tom mais escuro de verde na borda ao passar o mouse
                  },
                }}
              >
                <Avatar 
                  src="https://via.placeholder.com/50" 
                  sx={{ width: 50, height: 50, marginBottom: 1 }} 
                />
                <Typography variant="body2" color="textSecondary">Funcionalidade 2</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                sx={{
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '10px',
                  width: 150,
                  borderColor: '#4caf50', // Borda verde
                  '&:hover': {
                    backgroundColor: '#4caf50', // Cor de fundo verde
                    transform: 'scale(1.1)',
                    borderColor: '#388e3c', // Tom mais escuro de verde na borda ao passar o mouse
                  },
                }}
              >
                <Avatar 
                  src="https://via.placeholder.com/50" 
                  sx={{ width: 50, height: 50, marginBottom: 1 }} 
                />
                <Typography variant="body2" color="textSecondary">Funcionalidade 3</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
