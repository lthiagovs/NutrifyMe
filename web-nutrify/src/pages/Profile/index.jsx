import React from 'react';
import { Avatar, Button, Box, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Edit, CalendarToday, PersonAdd, LocalHospital } from '@mui/icons-material';
import './style.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const redirectToConsultation = () => {
    navigate('/Consultation');
  };

  return (
    <Box className="profile-container">
      <Paper className="profile-box" elevation={6}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              alt="Foto do Usuário"
              src="https://via.placeholder.com/100"
              className="profile-avatar"
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h4" className="profile-name">
              Nome do Usuário
            </Typography>
            <Typography variant="body1" color="textSecondary" className="profile-info">
              Email: usuario@exemplo.com
            </Typography>
            <Typography variant="body1" color="textSecondary" className="profile-info">
              Localização: Cidade, País
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Edit />}
              className="edit-button"
            >
              Editar Perfil
            </Button>
          </Grid>
        </Grid>

        <Box textAlign="center" marginTop={5}>
          <Typography variant="h5" gutterBottom className="section-title">
            Minhas Funcionalidades
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="outlined"
                onClick={redirectToConsultation}
                className="functionality-button"
                startIcon={<CalendarToday />}
              >
                <Typography variant="body2">Marcar Consulta</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={redirectToConsultation}
                className="functionality-button"
                startIcon={<PersonAdd />}
              >
                <Typography variant="body2">Funcionalidade 2</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                className="functionality-button"
                startIcon={<LocalHospital />}
              >
                <Typography variant="body2">Funcionalidade 3</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
