import React from 'react';
import { Avatar, Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const redirectToConsultation = () => {
    navigate('/Consultation');
  };

  return (
    <Box className="profile-container">
      <Box className="profile-box">
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar 
              alt="Foto do Usuário" 
              src="https://via.placeholder.com/100" 
              className="profile-avatar"
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h5" className="profile-name">
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
              color="success" 
              className="edit-button"
            >
              Editar Perfil
            </Button>
          </Grid>
        </Grid>

        <Box textAlign="center" marginTop={5}>
          <Typography variant="h6" gutterBottom>
            Minhas Funcionalidades
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button 
                variant="outlined" 
                onClick={redirectToConsultation}
                className="functionality-button"
              >
                <Avatar 
                  src="https://via.placeholder.com/50" 
                  className="functionality-avatar"
                />
                <Typography variant="body2">Marcar Consulta</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                onClick={redirectToConsultation}
                className="functionality-button"
              >
                <Avatar 
                  src="https://via.placeholder.com/50" 
                  className="functionality-avatar"
                />
                <Typography variant="body2">Funcionalidade 2</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                className="functionality-button"
              >
                <Avatar 
                  src="https://via.placeholder.com/50" 
                  className="functionality-avatar"
                />
                <Typography variant="body2">Funcionalidade 3</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
