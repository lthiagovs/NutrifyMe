import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/Profile'); 
  };

  return (
    <Container 
      maxWidth="xs" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        height: 'calc(100vh - 120px)',  // Ajuste da altura
        paddingTop: 0,
        paddingBottom: 0
      }}
    >
      <Box 
        sx={{ 
          backgroundColor: '#ffffff', 
          padding: '30px', 
          borderRadius: '8px', 
          boxShadow: 3,
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ color: '#4caf50', marginBottom: '20px' }}
        >
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Usuário"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: '20px' }}
          />
          <Button 
            variant="contained" 
            color="success" 
            fullWidth 
            type="submit"
            sx={{ padding: '12px', fontSize: '16px', marginTop: '10px' }}
          >
            Entrar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
