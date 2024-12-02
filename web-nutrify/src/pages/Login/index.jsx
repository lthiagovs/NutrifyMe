import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Container, Tabs, Tab, Alert, InputAdornment, CircularProgress } from "@mui/material";
import { Email, Lock, Person, HowToReg, ExitToApp } from "@mui/icons-material";
import api from "../../services/api";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [age, setAge] = useState("");
  const [value, setValue] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Verificação do JWT no localStorage ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // Se houver token, redireciona para o perfil
      navigate("/Profile");
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);

    if (!email || !password) {
      setLoading(false);
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.post("/users/login", { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem("jwt", token);

        // Simular carregamento e recarregar antes de redirecionar
        setTimeout(() => {
          window.location.reload();
          setTimeout(() => {
            navigate("/Profile");
          }, 1000); // Aguardar 1 segundo antes de redirecionar para Profile
        }, 1000); // Tempo da animação de carregamento
      } else {
        setLoading(false);
        setErrorMessage("Erro: Não foi possível obter o token.");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    if (!name || !newEmail || !newPassword || !age) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await api.post("/users", {
        name,
        email: newEmail,
        password: newPassword,
        age: parseInt(age),
      });
      setSuccessMessage("Cadastro realizado com sucesso!");
      setName("");
      setNewEmail("");
      setNewPassword("");
      setAge("");
    } catch (error) {
      setErrorMessage("Erro ao cadastrar. Tente novamente.");
    }
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: 15,
          },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#4caf50",
            marginBottom: "20px",
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {value === 0 ? "Cadastro" : "Login"}
        </Typography>

        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          sx={{
            marginBottom: "20px",
          }}
        >
          <Tab label="Cadastro" sx={{ padding: "12px 25px", fontWeight: "bold" }} />
          <Tab label="Login" sx={{ padding: "12px 25px", fontWeight: "bold" }} />
        </Tabs>

        {errorMessage && (
          <Alert severity="error" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
            {errorMessage}
          </Alert>
        )}

        {successMessage && (
          <Alert severity="success" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
            {successMessage}
          </Alert>
        )}

        {value === 0 ? (
          <form onSubmit={handleRegister} style={{ width: "100%" }}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: "15px" }}
              InputLabelProps={{ style: { color: "#4caf50" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: "#4caf50" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              sx={{ marginBottom: "15px" }}
              InputLabelProps={{ style: { color: "#4caf50" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#4caf50" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ marginBottom: "15px" }}
              InputLabelProps={{ style: { color: "#4caf50" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#4caf50" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Idade"
              variant="outlined"
              type="number"
              fullWidth
              value={age}
              onChange={(e) => setAge(e.target.value)}
              sx={{ marginBottom: "20px" }}
              InputLabelProps={{ style: { color: "#4caf50" } }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              type="submit"
              sx={{ padding: "14px", marginTop: "10px", borderRadius: "8px" }}
              startIcon={<HowToReg />}
            >
              Cadastrar
            </Button>
          </form>
        ) : (
          <form onSubmit={handleLogin} style={{ width: "100%" }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: "15px" }}
              InputLabelProps={{ style: { color: "#4caf50" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#4caf50" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: "20px" }}
              InputLabelProps={{ style: { color: "#4caf50" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#4caf50" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              type="submit"
              sx={{ padding: "14px", marginTop: "10px", borderRadius: "8px" }}
              startIcon={<ExitToApp />}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;
