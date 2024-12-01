import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Container, Tabs, Tab } from '@mui/material';
import api from "../../services/api"; // Importa a configuração do axios

const LoginPage = () => {
  const navigate = useNavigate();
  
  // Estados para login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estados para cadastro
  const [name, setName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [age, setAge] = useState('');
  
  // Controla a aba (login ou cadastro)
  const [value, setValue] = useState(0); // 0 vai inicializar na aba de cadastro

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login com:", email, password);
    navigate('/Profile'); // Navegar após login
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const userData = {
      name,
      email: newEmail,
      password: newPassword,
      age: parseInt(age),
    };

    try {
      const response = await api.post('/users', userData); // Envia os dados de cadastro para a API
      console.log('Cadastro realizado com sucesso:', response.data);
      navigate('/Profile'); // Navegar após o cadastro
    } catch (error) {
      console.error('Erro no cadastro:', error);
      // Aqui você pode mostrar uma mensagem de erro para o usuário
    }
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
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
          {value === 0 ? 'Cadastro' : 'Login'}
        </Typography>

        <Tabs 
          value={value} 
          onChange={handleTabChange} 
          indicatorColor="primary" 
          textColor="primary" 
          centered
          sx={{ 
            marginBottom: '20px',
            marginLeft: '20px', 
            marginRight: '20px', 
            marginTop: '10px', // margem acima das abas
            marginBottom: '10px', // margem abaixo das abas
            borderBottom: '1px solid #ccc' // Linha de separação entre as abas e o conteúdo
          }}
        >
          <Tab label="Cadastro" sx={{ padding: '10px 20px' }} />
          <Tab label="Login" sx={{ padding: '10px 20px' }} />
        </Tabs>

        {value === 0 ? (
          // Formulário de Cadastro
          <form onSubmit={handleRegister}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: '15px' }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              sx={{ marginBottom: '15px' }}
            />
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ marginBottom: '15px' }}
            />
            <TextField
              label="Idade"
              variant="outlined"
              type="number"
              fullWidth
              value={age}
              onChange={(e) => setAge(e.target.value)}
              sx={{ marginBottom: '20px' }}
              inputProps={{ min: 5, max: 120 }}
            />
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              type="submit"
              sx={{ padding: '12px', fontSize: '16px' }}
            >
              Cadastrar
            </Button>
          </form>
        ) : (
          // Formulário de Login
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;
