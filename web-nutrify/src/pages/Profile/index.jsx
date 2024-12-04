import React from 'react';
import { Avatar, Button, Box, Typography, Grid, Paper, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Edit, CalendarToday, PersonAdd, LocalHospital, History, Notifications } from '@mui/icons-material';
import './style.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const redirectToConsultation = () => {
    navigate('/Consultation');
  };

  const redirectToHistory = () => {
    navigate('/History');
  };

  const redirectToNotifications = () => {
    navigate('/Notifications');
  };

  return (
    <Box className="profile-container" sx={{ minHeight: '100vh', backgroundColor: '#f4f6f9' }}>
      <Paper className="profile-box" elevation={16} sx={{ padding: '30px', borderRadius: '16px', backgroundColor: 'white' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              alt="Foto do Usuário"
              src="https://via.placeholder.com/100"
              className="profile-avatar"
              sx={{
                width: 140,
                height: 140,
                border: '5px solid #3f51b5',
                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
              }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h4" className="profile-name" sx={{ fontWeight: 'bold', color: '#333', fontSize: '28px' }}>
              Nome do Usuário
            </Typography>
            <Typography variant="body1" color="textSecondary" className="profile-info" sx={{ fontSize: '16px' }}>
              Email: usuario@exemplo.com
            </Typography>
            <Typography variant="body1" color="textSecondary" className="profile-info" sx={{ fontSize: '16px' }}>
              Localização: Cidade, País
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Edit />}
              className="edit-button"
              sx={{
                marginTop: 2,
                paddingX: 3,
                fontWeight: 'bold',
                textTransform: 'none',
                backgroundColor: '#6200ea',
                '&:hover': { backgroundColor: '#3700b3' },
              }}
            >
              Editar Perfil
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ margin: '20px 0' }} />

        <Box textAlign="center" marginTop={5}>
          <Typography variant="h5" gutterBottom className="section-title" sx={{ fontWeight: 'bold', color: '#333' }}>
            Minhas Funcionalidades
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                onClick={redirectToConsultation}
                className="functionality-button"
                startIcon={<CalendarToday />}
                sx={{
                  borderRadius: '12px',
                  paddingX: 3,
                  backgroundColor: '#4caf50',
                  '&:hover': { backgroundColor: '#45a049' },
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  transition: 'background-color 0.3s, box-shadow 0.3s',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                <Typography variant="body2">Marcar Consulta</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={redirectToHistory}
                className="functionality-button"
                startIcon={<History />}
                sx={{
                  borderRadius: '12px',
                  paddingX: 3,
                  backgroundColor: '#2196f3',
                  '&:hover': { backgroundColor: '#1976d2' },
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  transition: 'background-color 0.3s, box-shadow 0.3s',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                <Typography variant="body2">Histórico de Consultas</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={redirectToNotifications}
                className="functionality-button"
                startIcon={<Notifications />}
                sx={{
                  borderRadius: '12px',
                  paddingX: 3,
                  backgroundColor: '#fbc02d',
                  '&:hover': { backgroundColor: '#f9a825' },
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  transition: 'background-color 0.3s, box-shadow 0.3s',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                <Typography variant="body2">Notificações</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className="functionality-button"
                startIcon={<LocalHospital />}
                sx={{
                  borderRadius: '12px',
                  paddingX: 3,
                  backgroundColor: '#f44336',
                  '&:hover': { backgroundColor: '#e53935' },
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  transition: 'background-color 0.3s, box-shadow 0.3s',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                <Typography variant="body2">Consulta Emergencial</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ margin: '20px 0' }} />

        <Box marginTop={5}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Informações de Conta
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary" sx={{ fontSize: '16px' }}>
                <strong>Data de Registro:</strong> 01 de Janeiro de 2020
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ fontSize: '16px' }}>
                <strong>Número de Consultas:</strong> 15
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary" sx={{ fontSize: '16px' }}>
                <strong>Última Consulta:</strong> 25 de Novembro de 2024
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ fontSize: '16px' }}>
                <strong>Status da Conta:</strong> Ativa
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
